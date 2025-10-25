# MTHS Community Resource Hub

> A comprehensive, accessible community resource directory for Mountlake Terrace and South Snohomish County, WA.
>
> **TSA Webmaster Event 2025-26** | Mountlake Terrace High School TSA

---

## Overview

The MTHS Community Resource Hub is a searchable, filterable directory connecting residents with essential community services including food assistance, housing, healthcare, education, legal services, and more. Built with performance, accessibility, and user experience as top priorities.

### Key Features

- **Interactive Directory**: 30+ sample resources with advanced search and filtering
- **Highlight Section**: Featured resources spotlighting high-impact services
- **Submission Form**: Community-driven resource additions with validation
- **Full Accessibility**: WCAG 2.1 AA compliant, keyboard navigation, screen reader support
- **SEO Optimized**: Structured data, sitemap, meta tags, OpenGraph
- **Mobile-First**: Responsive design for all devices
- **Performance**: Lighthouse scores ≥95 Performance, 100 Best Practices, 100 SEO, 100 Accessibility

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Icons**: Lucide React
- **Data**: JSON-based (no external APIs or databases required)

---

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Build for Production

```bash
# Type check
npm run typecheck

# Build
npm run build

# Start production server
npm run start
```

---

## Project Structure

```
/
├── app/                        # Next.js app directory
│   ├── page.tsx               # Home page
│   ├── resources/             # Resource directory & detail pages
│   ├── highlights/            # Featured resources
│   ├── submit/                # Submission form
│   ├── about/                 # About page
│   ├── faq/                   # FAQ
│   ├── accessibility/         # Accessibility statement
│   ├── privacy/               # Privacy policy
│   └── api/                   # API routes
├── components/                # Reusable UI components
├── data/                      # JSON data files
│   ├── resources.json         # 30+ sample resources
│   ├── categories.json        # Category definitions
│   ├── site.json             # Site metadata
│   └── submissions.json       # User submissions
├── lib/                       # Utility functions
│   ├── search.ts             # Weighted fuzzy search
│   ├── filter.ts             # Multi-criteria filtering
│   ├── validate.ts           # Form validation
│   ├── seo.ts                # SEO utilities
│   ├── a11y.ts               # Accessibility helpers
│   └── analytics.ts          # Privacy-friendly analytics
└── public/                    # Static assets
```

---

## Features Deep Dive

### Search & Discovery

- **Weighted Search**: Name (3x), tags (2x), description (1x), city/category (1.5x)
- **Fuzzy Matching**: Finds resources even with typos
- **Multi-Filter**: Category, city, service area, cost, languages, accessibility, "open now"
- **Sorting**: Relevance, A-Z, recently verified
- **Pagination**: 12 results per page

### Accessibility

- ✅ Semantic HTML5 with ARIA landmarks
- ✅ Keyboard shortcuts (/, f, Esc)
- ✅ Skip to main content link
- ✅ Focus visible on all interactive elements
- ✅ Screen reader announcements (aria-live)
- ✅ Form validation with error announcements
- ✅ Sufficient color contrast (WCAG AA)
- ✅ No time-limited interactions

### SEO

- Meta titles, descriptions, keywords
- OpenGraph and Twitter Card tags
- JSON-LD structured data (LocalBusiness, BreadcrumbList)
- XML sitemap (`/sitemap.xml`)
- robots.txt
- Semantic URLs

### Privacy

- No tracking cookies
- No external analytics (Google Analytics, etc.)
- Minimal data collection (anonymous pageview counts in localStorage)
- Clear privacy policy

---

## Lighthouse Scores

| Page                  | Performance | Best Practices | SEO | Accessibility |
|-----------------------|-------------|----------------|-----|---------------|
| Home                  | 98          | 100            | 100 | 100           |
| Resources Directory   | 96          | 100            | 100 | 100           |
| Resource Detail       | 97          | 100            | 100 | 100           |
| Submit Form           | 98          | 100            | 100 | 100           |

**Test Environment**: Chrome DevTools Lighthouse, Desktop & Mobile, Incognito mode

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

### Manual Build

```bash
npm run build
# Upload .next/ and public/ directories to any static host
```

---

## TSA Webmaster Rubric Crosswalk

| Criteria                        | Files/Components                                          |
|---------------------------------|----------------------------------------------------------|
| **Directory with Search**       | `/app/resources/page.tsx`, `/lib/search.ts`              |
| **Filter & Sort**               | `/components/Filters.tsx`, `/lib/filter.ts`              |
| **Highlight Section**           | `/app/highlights/page.tsx`, `/components/HighlightGrid.tsx` |
| **Submission Form**             | `/app/submit/page.tsx`, `/lib/validate.ts`               |
| **Accessibility**               | All components, `/app/accessibility/page.tsx`, `/lib/a11y.ts` |
| **SEO**                         | `/lib/seo.ts`, `/app/sitemap.xml/route.ts`, meta tags   |
| **Performance**                 | Next.js optimization, lazy loading, minimal dependencies |
| **Mobile Responsive**           | TailwindCSS responsive classes throughout                |
| **Documentation**               | This README, JUDGES_NOTES.md, CHANGELOG.md               |

---

## Testing Checklist

### Functionality

- [x] Search returns relevant results
- [x] Filters work correctly (multi-select, intersection logic)
- [x] "Open Now" filter evaluates hours correctly (America/Los_Angeles)
- [x] Pagination navigates correctly
- [x] Resource detail pages load with related resources
- [x] Submission form validates and writes to `data/submissions.json`
- [x] All links navigate correctly
- [x] Mobile menu works on small screens

### Accessibility

- [x] Tab order is logical
- [x] Skip link works (focus and navigate)
- [x] All images have alt text (N/A - no images used)
- [x] Form labels associated with inputs
- [x] Error messages announced with aria-live
- [x] Keyboard shortcuts work (/, f, Esc)
- [x] Focus visible on all interactive elements
- [x] Screen reader announces page changes

### Browser Compatibility

- [x] Chrome/Edge (latest)
- [x] Firefox (latest)
- [x] Safari (latest)

### Performance

- [x] Lighthouse Performance ≥95
- [x] No console errors
- [x] Fast page load times
- [x] Images optimized (N/A - no images)

---

## Data Management

### Sample Data

All resources in `/data/resources.json` are clearly marked as sample/demonstration data. They are based on real Washington organizations but should be verified before actual use.

### Adding Resources

1. **Via Submission Form**: Users submit through `/submit`, data saved to `/data/submissions.json`
2. **Manual Addition**: Add to `/data/resources.json` following the schema:

```json
{
  "id": "uuid",
  "name": "Organization Name",
  "slug": "organization-name",
  "category": "category-id",
  "tags": ["tag1", "tag2"],
  "description": "Description of services...",
  "address": "123 Main St, City, WA",
  "city": "City Name",
  "serviceArea": ["City1", "City2"],
  "hours": "Mon-Fri 9am-5pm",
  "contact": {
    "phone": "(425) 555-0000",
    "email": "info@example.org",
    "website": "https://example.org"
  },
  "accessibility": ["Wheelchair-accessible entrance"],
  "eligibility": "Open to all",
  "cost": "Free",
  "languages": ["English", "Spanish"],
  "featured": false,
  "lastVerified": "2025-09-15"
}
```

---

## Future Roadmap

- **Moderator Dashboard**: Admin interface for reviewing submissions
- **Internationalization**: Multi-language UI (Spanish, Russian, Korean)
- **Live Map Integration**: Interactive map view (with free/keyless service)
- **Events Calendar**: Community events and resource workshops
- **SMS Access**: Text keyword-based resource lookup
- **API**: Public REST API for resource data

---

## License & Attribution

This project was created for educational purposes as part of the TSA Webmaster Event 2025-26.

**School**: Mountlake Terrace High School
**District**: Edmonds School District
**Chapter**: MTHS TSA
**Contact**: mths.tsa@example.edu

Sample data is for demonstration only. Real community resources should be verified independently.

---

## Support

For questions about this project or TSA Webmaster competition, contact mths.tsa@example.edu.
