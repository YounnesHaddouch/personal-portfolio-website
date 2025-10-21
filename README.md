# Younnes Haddouch - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases my passion for technology and social mobility.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between light and dark themes
- **Modern UI**: Clean, minimalist design with smooth animations
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Built with Next.js for optimal loading speeds
- **Accessibility**: WCAG compliant design

## Sections

- **Hero**: Introduction with name and tagline
- **About**: Education background and personal interests
- **Experience**: Professional experience with focus on social impact
- **Projects**: Showcase of technology projects for social good
- **Skills**: Technical and soft skills with certifications
- **Contact**: Contact information and message form

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YounnesHaddouch/personal-portfolio-website.git
cd personal-portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Customization

### Personal Information

Update the following files with your information:
- `src/components/hero.tsx` - Name and tagline
- `src/components/about.tsx` - Education and interests
- `src/components/experience.tsx` - Work experience
- `src/components/projects.tsx` - Project showcase
- `src/components/skills.tsx` - Skills and certifications
- `src/components/contact.tsx` - Contact information

### Styling

The website uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles in individual component files

### SEO

Update meta information in `src/app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter Card data
- Keywords

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: younnes_haddouch@outlook.com
- **LinkedIn**: [linkedin.com/in/younneshaddouch](https://www.linkedin.com/in/younneshaddouch)
- **GitHub**: [github.com/YounnesHaddouch](https://github.com/YounnesHaddouch)