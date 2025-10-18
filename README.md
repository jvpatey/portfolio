# Jeffrey Patey - Portfolio Website

A modern, fully responsive portfolio website featuring Apple-style scroll animations and a beautiful UI. Built with Next.js 14, React, TypeScript, and Framer Motion.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://www.jeffreypatey.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

## ✨ Features

### 🎬 Smooth Animations

- **Apple-style scroll animations** powered by Framer Motion
- Staggered entrance animations for content sections
- Smooth fade-in and slide-up effects as you scroll
- Professional cubic-bezier easing curves
- Optimized performance with scroll-triggered animations

### 📱 Fully Responsive Design

- **Mobile-first approach** with breakpoints for all devices
- Functional hamburger menu with smooth animations
- Touch-friendly buttons and navigation
- Optimized typography scaling across screen sizes
- No horizontal scrolling on any device

### 🎨 Modern UI/UX

- Clean, professional design with a dark theme
- Gradient accents and subtle glow effects
- Custom-designed JP logo with animated hover states
- Interactive project cards with image carousels
- Active section highlighting in navigation

### 🚀 Performance Optimized

- Static site generation with Next.js
- Fast page loads (54 kB first load)
- Optimized images and assets
- Production-ready build
- SEO-friendly structure

### 🎯 Key Sections

- **Hero**: Eye-catching introduction with call-to-action
- **About**: Bio, skills, and profile with animated entrance
- **Experience**: Professional background timeline
- **Projects**: Featured work with live demos and GitHub links
- **Contact**: Easy ways to get in touch

## 🛠️ Tech Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| **Next.js 14**    | React framework with App Router   |
| **React 18**      | UI library                        |
| **TypeScript**    | Type safety and better DX         |
| **Framer Motion** | Smooth animations and transitions |
| **Tailwind CSS**  | Utility-first styling             |
| **next/image**    | Optimized image loading           |

## 📦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** to see the site

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── icon.tsx            # Dynamic favicon generator
│   └── apple-icon.tsx      # Apple touch icon generator
├── components/
│   ├── Navigation.tsx      # Navbar with mobile menu
│   ├── Hero.tsx            # Landing section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience
│   ├── Projects.tsx        # Projects showcase
│   ├── ProjectCard.tsx     # Individual project card
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer component
│   ├── ImageCarousel.tsx   # Project image slider
│   ├── AnimatedSection.tsx # Reusable scroll animation wrapper
│   └── AnimatedStagger.tsx # Stagger animation components
├── public/
│   ├── *.png               # Project screenshots
│   ├── favicon.svg         # Custom SVG favicon
│   ├── jeffrey-patey.jpg   # Profile photo
│   └── resume.pdf          # Resume/CV
└── ... (config files)
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):

   - Update name and title
   - Modify the introduction text

2. **About Section** (`components/About.tsx`):

   - Replace bio content
   - Update skills/technologies list
   - Change profile image in `/public`

3. **Projects** (`components/Projects.tsx`):

   - Add/remove project cards
   - Update project descriptions, links, and screenshots

4. **Contact** (`components/Contact.tsx`):

   - Update email address
   - Add social media links

5. **Resume** (`public/`):
   - Replace with your resume PDF
   - Update filename reference in `Navigation.tsx`

### Styling

- **Global styles**: `app/globals.css`
- **Tailwind config**: `tailwind.config.ts`
- **Color scheme**: Edit Tailwind theme in config
- **Animations**: Adjust timing in animation components

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"

Your site will be live with:

- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic builds on push
- ✅ Free `.vercel.app` domain

### Custom Domain

After deployment, add your custom domain in Vercel project settings.

### Other Platforms

This project can also be deployed to:

- **Netlify**: Drop the build folder or connect GitHub
- **Cloudflare Pages**: Fast global deployment
- **AWS Amplify**: Enterprise-grade hosting

## 🎯 Features Breakdown

### Navigation

- Smooth scroll to sections
- Active section highlighting
- Responsive mobile menu with backdrop
- Resume download button
- Animated JP logo that scrolls to top

### Animations

- Scroll-triggered fade-ins
- Staggered list animations
- Smooth entrance on page load
- Optimized with Intersection Observer
- No animation on repeat scrolling (better UX)

### Mobile Experience

- Hamburger menu with X toggle
- Backdrop blur effect
- Menu closes on link click or ESC key
- Prevents body scroll when menu open
- Touch-optimized button sizes

### Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible styles
- Proper heading hierarchy
