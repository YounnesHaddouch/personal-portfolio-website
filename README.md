# Younnes Haddouch - Personal Portfolio Website

A modern, minimalist personal portfolio website built with Next.js 15 and Tailwind CSS 4.

![Portfolio Screenshot](https://github.com/user-attachments/assets/69b31d3c-bdf9-417f-8f3b-26f276abdb24)

## Features

- 🎨 **Modern & Minimalist Design** - Clean, professional interface with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- 🌗 **Dark Mode Support** - Automatic dark/light theme based on system preferences
- ⚡ **Interactive Components** - Expandable experience cards with hover effects
- 📧 **Contact Form** - Integrated mailto functionality for easy communication
- 🚀 **Performance Optimized** - Built with Next.js 15 for optimal performance
- 🎯 **SEO Ready** - Proper metadata and semantic HTML structure

## Sections

1. **Hero** - Introduction with name and tagline
2. **About Me** - Education background and personal interests
3. **Experience** - Interactive cards showcasing work history
4. **Skills** - Organized grid of technical skills by category
5. **Certifications** - Professional certifications and achievements
6. **Contact** - Form and social media links

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YounnesHaddouch/personal-portfolio-website)

### Alternative Deployment Options

- **Netlify**: Connect your repository and deploy
- **GitHub Pages**: Use `next export` for static deployment
- **Docker**: Use the included Next.js container support

## Customization

### Update Personal Information

Edit the content in the following component files:

- `app/components/Hero.tsx` - Name and tagline
- `app/components/About.tsx` - Education and interests
- `app/components/Experience.tsx` - Work experience
- `app/components/Skills.tsx` - Technical skills
- `app/components/Certifications.tsx` - Certifications
- `app/components/Contact.tsx` - Email address and social links

### Update Metadata

Edit `app/layout.tsx` to update:
- Page title
- Meta description
- Other SEO metadata

### Styling

- Colors and theme are defined in `app/globals.css`
- Component-specific styles use Tailwind CSS classes

## Project Structure

```
personal-portfolio-website/
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   └── Skills.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
└── README.md
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Younnes Haddouch - younnes.haddouch@example.com

Project Link: [https://github.com/YounnesHaddouch/personal-portfolio-website](https://github.com/YounnesHaddouch/personal-portfolio-website)

---

Built with ❤️ using Next.js and Tailwind CSS
