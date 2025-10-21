# Portfolio Customization Guide

This guide will help you customize your portfolio website with your personal information.

## Quick Customization Checklist

### 1. Update Personal Information in Contact Component
**File**: `app/components/Contact.tsx`

- Line 27 & 53: Update email address from `younnes.haddouch@example.com` to your actual email
- Line 121-139: Update social media links:
  - GitHub: Update the URL
  - LinkedIn: Update the URL  
  - Twitter: Update the URL

### 2. Update About Me Section
**File**: `app/components/About.tsx`

- Line 13-18: Update education information:
  - Degree name
  - University name
  - Years attended
- Line 28-39: Update your interests
- Line 50-54: Update the bio paragraph with your own description

### 3. Update Experience Section
**File**: `app/components/Experience.tsx`

- Line 16-48: Update the `experiences` array with your actual work experience:
  - Job title
  - Company name
  - Time period
  - Description
  - Technologies used

### 4. Update Skills Section
**File**: `app/components/Skills.tsx`

- Line 8-27: Update the `skills` array with your actual skills
- Skills are automatically grouped by category

### 5. Update Certifications Section
**File**: `app/components/Certifications.tsx`

- Line 9-43: Update the `certifications` array with your actual certifications:
  - Certification name
  - Issuing organization
  - Year obtained
  - Description

### 6. Update Hero Section
**File**: `app/components/Hero.tsx`

- Line 7: Update your name
- Line 9: Update your tagline/description

### 7. Update Metadata
**File**: `app/layout.tsx`

- Line 5-6: Update page title and description for SEO

### 8. Update Theme Colors (Optional)
**File**: `app/globals.css`

- Line 4-5: Light mode colors
- Line 17-18: Dark mode colors

## Testing Your Changes

After making changes, test locally:

```bash
npm run dev
```

Then visit http://localhost:3000 to see your changes.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

Push your changes to GitHub and deploy via Vercel:

1. Go to https://vercel.com
2. Import your GitHub repository
3. Deploy!

Your portfolio will be live at your-username.vercel.app
