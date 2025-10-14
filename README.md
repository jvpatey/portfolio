# Jeffrey Patey - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Update Personal Information

1. Edit `app/layout.tsx` to update the site metadata (title, description)
2. Edit `app/page.tsx` to update:
   - Your name and introduction
   - About section content
   - Projects (add/remove project cards)
   - Contact information and social links

### Styling

- Global styles are in `app/globals.css`
- Tailwind configuration is in `tailwind.config.ts`
- The site supports dark mode automatically based on user's system preferences

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static assets (images, etc.)
├── components/          # Reusable components (create as needed)
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🚀 Deployment on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure everything
5. Click "Deploy"

That's it! Your portfolio will be live with automatic HTTPS and a free `.vercel.app` domain.

### Custom Domain (Optional)

After deployment, you can add a custom domain in your Vercel project settings.

## 📝 Next Steps

- [ ] Add your actual projects to the Projects section
- [ ] Update social media links
- [ ] Add your resume/CV
- [ ] Add more pages (blog, case studies, etc.)
- [ ] Add animations (framer-motion is great for this)
- [ ] Add a contact form
- [ ] Optimize images with Next.js Image component

## 🤝 Features to Consider Adding

- Blog with MDX support
- Project case studies with detailed pages
- Animated transitions
- Contact form with email integration
- Analytics (Vercel Analytics, Google Analytics)
- SEO optimization with next-seo
- RSS feed for blog
- Newsletter signup

## 📄 License

This project is open source and available under the MIT License.
