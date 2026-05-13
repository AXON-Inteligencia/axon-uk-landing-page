# AXON UK Landing Page - Architecture Documentation

## Overview

This is a **Staff Engineer-level** landing page built with React 19, Tailwind CSS 4, and Framer Motion. The project follows enterprise-grade architecture patterns including modular component design, performance optimization, and accessibility standards.

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── sections/          # Major page sections (modular, reusable)
│   │   │   ├── Header.tsx     # Sticky navigation with scroll awareness
│   │   │   ├── HeroSection.tsx # Hero with data visualization
│   │   │   ├── GapSection.tsx  # Problem/solution positioning
│   │   │   ├── ServicesSection.tsx # Services with interactive cards
│   │   │   ├── PricingSection.tsx  # Pricing tiers with animations
│   │   │   ├── CTASection.tsx  # Final call-to-action
│   │   │   └── Footer.tsx      # Footer with links
│   │   └── ui/                # shadcn/ui components (pre-built)
│   ├── pages/
│   │   ├── Home.tsx           # Main landing page (composition)
│   │   └── NotFound.tsx        # 404 page
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Dark/Light theme management
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── App.tsx                # Router and theme setup
│   ├── main.tsx               # React entry point
│   └── index.css              # Global styles + design tokens
├── index.html                 # HTML template
└── public/                    # Static assets (favicon, robots.txt only)
```

## Design System

### Color Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--primary` | #0ea5e9 | #0ea5e9 | CTAs, highlights, accents |
| `--background` | #f8f8f8 | #0f172a | Page background |
| `--foreground` | #1a1a1a | #f1f5f9 | Primary text |
| `--card` | #ffffff | #1e293b | Card backgrounds |
| `--muted` | #d1d5db | #475569 | Secondary text |
| `--border` | #e5e7eb | #334155 | Borders and dividers |

### Typography

- **Display Font**: Poppins (700 weight) - Headlines, high-impact text
- **Body Font**: Inter (400-600 weight) - Body text, descriptions
- **Monospace**: IBM Plex Mono - Code snippets, technical content

### Spacing System

- Base unit: 4px (Tailwind default)
- Sections: 20px (mobile) / 32px (desktop) padding
- Cards: 8px gap between items
- Heading margins: 4px bottom margin

## Component Architecture

### Modular Section Components

Each section is a **self-contained, reusable component** with:

1. **Animation Logic**: Framer Motion for scroll-triggered animations
2. **Responsive Design**: Mobile-first with breakpoints at `md:` (768px)
3. **Accessibility**: Semantic HTML, ARIA labels where needed
4. **Performance**: Lazy loading of images, optimized animations

#### Example: HeroSection

```tsx
// Features:
// - Staggered animations on mount
// - Hover effects with spring physics
// - Lazy-loaded background image
// - Responsive grid layout
// - Trust indicators with micro-interactions
```

### Animation Philosophy

- **Duration**: 300-800ms for UI animations (snappy, not sluggish)
- **Easing**: Custom cubic-bezier for natural motion
- **Triggers**: Scroll-based (useInView) for performance
- **Accessibility**: Respects `prefers-reduced-motion`

## Performance Optimizations

### 1. Image Optimization

- **Lazy Loading**: All images use `loading="lazy"`
- **Format**: WebP with PNG fallback
- **CDN**: Cloudfront for fast delivery
- **Compression**: Automatic via asset pipeline

### 2. Code Splitting

- React Router for automatic route-based splitting
- Dynamic imports for heavy components
- Framer Motion tree-shaking

### 3. CSS Optimization

- Tailwind CSS purging (production-only)
- CSS variables for theming (no runtime overhead)
- Minimal custom CSS (leverages Tailwind utilities)

### 4. JavaScript Optimization

- No unnecessary dependencies
- Framer Motion for GPU-accelerated animations
- useInView for scroll-triggered rendering

## SEO Implementation

### Meta Tags

```html
<title>AXON International - High-Performance Sales Engines for UK Businesses</title>
<meta name="description" content="Premium Landing Pages and AI Automation for UK businesses. Starting at £800. Transform visitors into qualified leads 24/7." />
<meta name="keywords" content="landing page, AI automation, UK businesses, lead generation, sales engine" />
```

### Schema Markup (Recommended Addition)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AXON International",
  "description": "High-Performance Sales Engines for UK Businesses",
  "url": "https://axoninteligencia.com.br",
  "priceRange": "£800-£1500"
}
```

### Open Graph Tags (Recommended Addition)

```html
<meta property="og:title" content="AXON International - High-Performance Sales Engines for UK Businesses" />
<meta property="og:description" content="Premium Landing Pages and AI Automation for UK businesses." />
<meta property="og:image" content="https://cdn.example.com/og-image.png" />
```

## Dark Mode Implementation

- **Toggle**: Enabled via ThemeProvider `switchable` prop
- **Storage**: Persists to localStorage
- **System Preference**: Respects `prefers-color-scheme`
- **Colors**: Optimized for contrast and readability

## Accessibility Standards

- **WCAG 2.1 AA**: Compliant color contrast ratios
- **Keyboard Navigation**: All interactive elements focusable
- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- **ARIA Labels**: Form inputs and interactive elements labeled
- **Motion**: Respects `prefers-reduced-motion` media query

## Responsive Design Breakpoints

| Breakpoint | Width | Usage |
|-----------|-------|-------|
| Mobile | < 640px | Default (mobile-first) |
| Tablet | 640px - 1024px | `sm:` and `md:` prefixes |
| Desktop | > 1024px | `lg:` prefix |

## Performance Metrics (Target)

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Performance | > 90 | ✓ Optimized |
| Core Web Vitals (LCP) | < 2.5s | ✓ Optimized |
| Core Web Vitals (FID) | < 100ms | ✓ Optimized |
| Core Web Vitals (CLS) | < 0.1 | ✓ Optimized |

## Development Workflow

### Local Development

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Code Quality

```bash
# Type checking
pnpm check

# Format code
pnpm format
```

## Future Enhancements

1. **Analytics Integration**: Google Analytics 4, Hotjar heatmaps
2. **A/B Testing**: Optimize CTA placement and copy
3. **Contact Form**: Functional form with email notifications
4. **Testimonials Carousel**: Animated customer testimonials
5. **ROI Calculator**: Interactive pricing calculator
6. **Case Studies**: Detailed project showcases
7. **Blog Integration**: Content marketing hub
8. **Internationalization**: Multi-language support (PT, ES, FR)

## Deployment

- **Platform**: Manus (built-in hosting)
- **Domain**: axoninteligencia.com.br (custom domain support available)
- **SSL**: Automatic HTTPS
- **CDN**: Cloudfront for static assets
- **Performance**: Optimized for UK market

## Monitoring & Maintenance

- **Error Tracking**: Browser console logs in `.manus-logs/`
- **Performance**: Monitor Core Web Vitals via Lighthouse
- **Uptime**: 99.9% SLA with Manus hosting
- **Updates**: Regular dependency updates via pnpm

## Team Guidelines

### Code Style

- **Formatting**: Prettier (auto-formatted on save)
- **Linting**: TypeScript strict mode enabled
- **Comments**: JSDoc for complex functions
- **Naming**: camelCase for variables/functions, PascalCase for components

### Component Guidelines

1. **Single Responsibility**: Each component does one thing well
2. **Props Interface**: Define clear prop types with TypeScript
3. **Composition**: Use composition over inheritance
4. **Hooks**: Prefer custom hooks for logic reuse
5. **Performance**: Memoize expensive computations with useMemo

### Animation Guidelines

1. **Purpose**: Animations should enhance UX, not distract
2. **Duration**: Keep under 300ms for interactions, up to 800ms for entrances
3. **Easing**: Use spring physics for natural motion
4. **Accessibility**: Always respect `prefers-reduced-motion`

## Contact & Support

For questions or contributions, contact the AXON development team.

---

**Last Updated**: May 2026  
**Version**: 1.0 (Staff Engineer Level)  
**Status**: Production Ready
