# Dr Adrian Laurence - Personal Website

A fast, production-ready personal website for Dr Adrian Laurence, Family Medical and Lifestyle Medicine Doctor. I help decode the latest science into evidence based blueprints to feel better, live longer and perform today. Built with Astro, TypeScript, and TailwindCSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/arlagit/dr-adrian-laurence-site.git
cd dr-adrian-laurence-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check Prettier formatting
- `npm run test:e2e` - Run Playwright tests
- `npm run test:e2e:ui` - Run Playwright tests with UI

## 📁 Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── PageHero.astro
│   ├── PostCard.astro
│   └── ...
├── layouts/            # Page layouts
│   ├── BaseLayout.astro
│   ├── BlogLayout.astro
│   └── SimplePage.astro
├── pages/              # Routes and pages
│   ├── index.astro
│   ├── about.astro
│   ├── blog/
│   └── ...
├── content/            # Content collections
│   ├── blog/
│   ├── speaking/
│   └── media/
├── lib/                # Utilities and configurations
│   ├── seo.ts
│   ├── schema.ts
│   └── site-config.ts
└── styles/
    └── globals.css
```

## 🎨 Design System

### Colors
- **Primary**: #0D5C63 (teal)
- **Primary Dark**: #08474C
- **Accent**: #E6B800 (gold)
- **Ink**: #0B0F13 (dark gray)
- **Muted**: #5E6B7A (medium gray)
- **Background**: #FBFCFE (off-white)

### Typography
- **Display**: Lato (headings)
- **Body**: Lato (body text)

### Components
- Rounded corners (rounded-2xl)
- Soft shadows
- Airy whitespace
- AA contrast compliance
- Strong focus states

## 📝 Content Management

### Blog Posts
Blog posts are written in MDX format in `src/content/blog/`. Each post includes:
- Title, summary, and metadata
- Publication and update dates
- Tags for categorization
- Reading time calculation
- Hero images
- SEO optimization

### Speaking Engagements
Speaking content is managed in `src/content/speaking/` with details about:
- Event information
- Topics covered
- Location and dates
- Type of presentation

### Media Mentions
Media content is stored in `src/content/media/` including:
- Article/interview details
- Publication information
- Links to external content
- Featured status

## 🔧 Configuration

### Environment Variables
Create a `.env` file for local development:
```env
PLAUSIBLE_DOMAIN=your-domain.com  # Optional analytics
```

### Site Configuration
Update `src/lib/site-config.ts` with your information:
- Site URL
- Contact information
- Social media links
- Newsletter URL

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
# Build the site
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🧪 Testing

### Smoke Tests
Run Playwright smoke tests to verify core functionality:
```bash
npm run test:e2e
```

Tests cover:
- Page loading and navigation
- Content rendering
- Educational disclaimers
- Mobile responsiveness
- Newsletter CTAs

### Continuous Integration
GitHub Actions workflow runs on:
- Code linting and formatting
- Build verification
- Smoke test execution

## 📊 SEO & Analytics

### SEO Features
- Dynamic meta tags
- Open Graph and Twitter cards
- JSON-LD structured data
- XML sitemap generation
- RSS feed
- Robots.txt

### Analytics
- Plausible Analytics integration (optional)
- Privacy-focused analytics
- No cookies or personal data collection

## 🔒 Security & Compliance

### Security Headers
- Content Security Policy (CSP)
- X-Content-Type-Options
- Referrer Policy
- Permissions Policy

### Compliance & Safety
- Educational content disclaimers
- No personalized medical advice
- Emergency contact information
- International privacy compliance

## 🎯 Key Features

### Educational Focus
- Clear disclaimers about educational-only content
- No embedded forms or medical advice
- External links to Substack newsletter
- NZ-compliant health information

### Performance
- Lighthouse score targets: 95+ Performance, 100 Accessibility
- Optimized images and fonts
- Minimal JavaScript
- Static site generation

### Accessibility
- WCAG AA compliance
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Reduced motion support

## 📞 Support

For questions about this website or its content:
- Email: hello@dradrianlaurence.com
- Website: https://dradrianlaurence.com

**Remember**: This website provides educational content only and is not a substitute for professional medical advice.

## 📄 License

This project is proprietary and confidential. All rights reserved.
