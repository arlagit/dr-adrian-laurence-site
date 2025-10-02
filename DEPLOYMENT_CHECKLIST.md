# Deployment Checklist - Dr Adrian Laurence Website

## ✅ Completed Tasks

### Project Setup
- [x] Astro project scaffolded with TypeScript
- [x] TailwindCSS configured with custom design system
- [x] ESLint and Prettier configured
- [x] Content collections setup (blog, speaking, media)
- [x] All components and layouts created
- [x] All pages implemented
- [x] Seed content created (3 blog posts, speaking, media)
- [x] SEO utilities and structured data
- [x] Security headers and CSP configured
- [x] Playwright tests and GitHub Actions
- [x] Documentation completed

## 🚀 Pre-Deployment Tasks

### 1. Domain & Hosting Setup
- [ ] **Purchase domain**: `dradrianlaurence.com` (or preferred domain)
- [ ] **Set up Vercel account**: Connect GitHub repository
- [ ] **Configure custom domain**: Point DNS to Vercel
- [ ] **Enable HTTPS**: Automatic with Vercel

### 2. Analytics Setup (Optional)
- [ ] **Plausible Analytics**: Create account and get domain
- [ ] **Environment variable**: Set `PLAUSIBLE_DOMAIN` in Vercel
- [ ] **Test analytics**: Verify tracking works after deployment

### 3. Content Updates Needed

#### Images & Assets
- [ ] **Professional headshots**: Replace placeholder images in `/public/images/`
  - [ ] `adrian-headshot.jpg` (main bio photo)
  - [ ] `adrian-headshot-professional.jpg`
  - [ ] `adrian-headshot-casual.jpg`
  - [ ] `adrian-headshot-speaking.jpg`

#### Blog Post Images
- [ ] **Blog hero images**: Create or source images for:
  - [ ] `/public/images/blog/sleep-hero.jpg`
  - [ ] `/public/images/blog/protein-hero.jpg`
  - [ ] `/public/images/blog/zone2-hero.jpg`

#### Press Kit
- [ ] **Press kit ZIP**: Create downloadable press kit with:
  - [ ] High-resolution headshots (multiple formats)
  - [ ] Brand assets (logos, colors, fonts)
  - [ ] Short and long bios (Word and PDF)
  - [ ] Talking points document
  - [ ] Media release template

### 4. Content Review & Updates

#### Legal Pages
- [ ] **Privacy Policy**: Review and customize for specific data collection
- [ ] **Terms of Service**: Review and customize for business needs
- [ ] **Update dates**: Set current dates in both documents

#### Contact Information
- [ ] **Email address**: Verify `hello@dradrianlaurence.com` is set up
- [ ] **Social media links**: Update with actual profile URLs
- [ ] **Speaking contact**: Ensure email routing works

#### Newsletter Integration
- [ ] **Substack URL**: Verify `https://dradrianlaurence.substack.com/` is correct
- [ ] **Newsletter content**: Ensure first newsletter post is published
- [ ] **CTA testing**: Test all newsletter links work correctly

### 5. SEO & Technical

#### Search Console
- [ ] **Google Search Console**: Add and verify domain
- [ ] **Submit sitemap**: `https://dradrianlaurence.com/sitemap-index.xml`
- [ ] **Bing Webmaster Tools**: Add and verify domain

#### Social Media
- [ ] **Open Graph images**: Create custom OG images for key pages
- [ ] **Twitter cards**: Test Twitter card previews
- [ ] **Social media profiles**: Ensure all linked profiles exist and are active

#### Performance Testing
- [ ] **Lighthouse audit**: Run full audit on production
- [ ] **Core Web Vitals**: Verify all metrics are green
- [ ] **Mobile testing**: Test on various devices and browsers

### 6. Content Creation

#### Additional Blog Posts
- [ ] **4-6 more blog posts**: Create content for regular publishing
- [ ] **Speaking engagements**: Add 2-3 more recent speaking events
- [ ] **Media mentions**: Add any existing media coverage

#### About Page Content
- [ ] **Personal story**: Expand with more personal details
- [ ] **Credentials**: Verify all qualifications are current
- [ ] **Experience**: Add more specific experience details

### 7. Legal & Compliance

#### Medical Disclaimers
- [ ] **Legal review**: Have lawyer review all medical disclaimers
- [ ] **Medical Compliance**: Ensure compliance with applicable regulations
- [ ] **Insurance**: Verify professional indemnity covers website content

#### Privacy & Data
- [ ] **Data collection audit**: Review what data is actually collected
- [ ] **Cookie policy**: Add if using analytics or other tracking
- [ ] **GDPR compliance**: Ensure European visitors are covered

### 8. Testing & Quality Assurance

#### Functionality Testing
- [ ] **All links**: Test every link on the site
- [ ] **Forms**: Test contact forms and newsletter signups
- [ ] **Mobile responsiveness**: Test on various screen sizes
- [ ] **Browser compatibility**: Test on Chrome, Firefox, Safari, Edge

#### Content Review
- [ ] **Proofreading**: Review all text for typos and grammar
- [ ] **Fact checking**: Verify all medical claims and statistics
- [ ] **Link verification**: Ensure all external links work
- [ ] **Image optimization**: Compress and optimize all images

## 🚀 Deployment Steps

### 1. Pre-Deployment
```bash
# Final build test
npm run build

# Run all tests
npm run test:e2e

# Check formatting and linting
npm run lint
npm run format:check
```

### 2. Deploy to Vercel
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy from main branch
4. Configure custom domain
5. Enable automatic deployments

### 3. Post-Deployment Verification
- [ ] **Site loads correctly**: Test all pages load without errors
- [ ] **Newsletter links**: Verify all Substack links work
- [ ] **Contact forms**: Test email functionality
- [ ] **Analytics**: Verify tracking is working
- [ ] **SEO**: Check meta tags and structured data
- [ ] **Performance**: Run Lighthouse audit on live site

### 4. Go-Live Checklist
- [ ] **DNS propagation**: Wait for DNS changes to propagate
- [ ] **HTTPS certificate**: Verify SSL certificate is active
- [ ] **Search engines**: Submit sitemap to Google and Bing
- [ ] **Social media**: Update bio links to new website
- [ ] **Email signature**: Update with new website URL

## 📋 Ongoing Maintenance

### Weekly Tasks
- [ ] **Content updates**: Publish new blog posts
- [ ] **Newsletter**: Send weekly newsletter
- [ ] **Analytics review**: Check website performance metrics

### Monthly Tasks
- [ ] **Security updates**: Update dependencies
- [ ] **Content audit**: Review and update existing content
- [ ] **SEO monitoring**: Check search rankings and traffic

### Quarterly Tasks
- [ ] **Performance audit**: Run comprehensive performance tests
- [ ] **Content strategy review**: Assess and plan content calendar
- [ ] **Legal compliance**: Review and update legal pages

## 🆘 Emergency Contacts

- **Technical Issues**: Development team
- **Medical Legal**: Healthcare lawyer
- **Hosting Issues**: Vercel support
- **Domain Issues**: Domain registrar support

---

**Note**: This checklist should be reviewed and customized based on specific business needs and legal requirements. Always consult with appropriate professionals for legal and medical compliance matters.

