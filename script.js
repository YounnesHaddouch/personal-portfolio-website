// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const navMenu = document.getElementById('nav-menu');
const navHamburger = document.getElementById('nav-hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.bindEvents();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        localStorage.setItem('theme', theme);
        
        // Update theme toggle icon
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    bindEvents() {
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.handleScroll();
    }

    bindEvents() {
        // Mobile menu toggle
        if (navHamburger) {
            navHamburger.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navHamburger.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId.startsWith('#')) {
                    this.scrollToSection(targetId);
                }
            });
        });

        // Scroll event for navbar styling
        window.addEventListener('scroll', () => this.handleScroll());
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        navMenu.classList.toggle('active', this.isMenuOpen);
        navHamburger.classList.toggle('active', this.isMenuOpen);
    }

    closeMenu() {
        this.isMenuOpen = false;
        navMenu.classList.remove('active');
        navHamburger.classList.remove('active');
    }

    scrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    handleScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    }
}

// Scroll Animation Manager
class ScrollAnimationManager {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.createObserver();
        this.observeElements();
    }

    createObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, this.observerOptions);
    }

    observeElements() {
        const elementsToAnimate = document.querySelectorAll('.about-card, .timeline-item, .project-card, .skills-card, .contact-item, .cert-item');
        elementsToAnimate.forEach((element, index) => {
            element.classList.add('animate-on-scroll');
            element.style.animationDelay = `${index * 0.1}s`;
            this.observer.observe(element);
        });
    }
}

// Skill Progress Animation
class SkillProgressManager {
    constructor() {
        this.init();
    }

    init() {
        this.observeSkillBars();
    }

    observeSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-width');
                    progressBar.style.width = width;
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }
}

// Contact Form Manager
class ContactFormManager {
    constructor() {
        this.init();
    }

    init() {
        if (contactForm) {
            this.bindEvents();
        }
    }

    bindEvents() {
        contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Simple validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            this.showMessage('Please fill in all fields.', 'error');
            return;
        }

        if (!this.isValidEmail(data.email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission
        this.showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            font-weight: 600;
            text-align: center;
            ${type === 'success' ? 'background: #dcfce7; color: #166534;' : 'background: #fef2f2; color: #dc2626;'}
        `;

        contactForm.appendChild(messageDiv);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
}

// Parallax Effect Manager
class ParallaxManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
}

// Typing Animation for Hero
class TypingAnimation {
    constructor() {
        this.init();
    }

    init() {
        const heroTitle = document.querySelector('.hero-title .title-line');
        if (heroTitle) {
            this.animateText(heroTitle);
        }
    }

    animateText(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid white';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
}

// Loading Animation
class LoadingManager {
    constructor() {
        this.init();
    }

    init() {
        this.showLoadingScreen();
        window.addEventListener('load', () => this.hideLoadingScreen());
    }

    showLoadingScreen() {
        const loader = document.createElement('div');
        loader.id = 'loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-spinner"></div>
                <p>Loading...</p>
            </div>
        `;
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            color: white;
            font-family: 'Inter', sans-serif;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .loader-spinner {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(255,255,255,0.3);
                border-top: 3px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin-bottom: 1rem;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(loader);
    }

    hideLoadingScreen() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }
    }
}

// Smooth Scroll for Hero Buttons
class SmoothScrollManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // Hero buttons
        const heroButtons = document.querySelectorAll('.hero-buttons a');
        heroButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (button.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    this.scrollToSection(button.getAttribute('href'));
                }
            });
        });

        // Scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                this.scrollToSection('#about');
            });
        }
    }

    scrollToSection(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// Performance Optimizer
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.optimizeImages();
        this.debounceScroll();
    }

    optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.loading = 'lazy';
            img.decoding = 'async';
        });
    }

    debounceScroll() {
        let scrollTimeout;
        const originalScrollHandler = window.onscroll;
        
        window.onscroll = () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(() => {
                if (originalScrollHandler) {
                    originalScrollHandler();
                }
            }, 10);
        };
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new ThemeManager();
    new NavigationManager();
    new ScrollAnimationManager();
    new SkillProgressManager();
    new ContactFormManager();
    new ParallaxManager();
    new TypingAnimation();
    new LoadingManager();
    new SmoothScrollManager();
    new PerformanceOptimizer();

    // Add some fun interactions
    addFunInteractions();
});

// Fun Interactions
function addFunInteractions() {
    // Floating animation for interest items
    const interestItems = document.querySelectorAll('.interest-item');
    interestItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            item.style.animation = 'float 1s ease-in-out';
        });
        item.addEventListener('mouseleave', () => {
            item.style.animation = 'none';
        });
    });

    // Pulse animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'pulse 0.6s ease-in-out';
        });
        card.addEventListener('animationend', () => {
            card.style.animation = 'none';
        });
    });

    // Skill bar hover effects
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            bar.style.transform = 'scaleY(1.2)';
            bar.style.transition = 'transform 0.3s ease';
        });
        bar.addEventListener('mouseleave', () => {
            bar.style.transform = 'scaleY(1)';
        });
    });

    // Contact form field focus effects
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
            input.parentElement.style.transition = 'transform 0.3s ease';
        });
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
}

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s linear infinite';
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = 'none';
            style.remove();
        }, 5000);
        
        konamiCode = [];
    }
});

// Console message
console.log(`
🚀 Welcome to Younnes Haddouch's Portfolio!
💻 Built with pure HTML, CSS, and JavaScript
🎨 Featuring modern animations and interactions
🌍 Focused on tech for social mobility
📧 Contact: younnes_haddouch@outlook.com
`);

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
