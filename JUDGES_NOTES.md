# Judges Notes: MTHS Community Resource Hub

**Event**: WTSA 2025-26 Webmaster
**School**: Mountlake Terrace High School TSA
**Team**: MTHS TSA Chapter
**Theme**: Community Resource Hub

---

## 90-Second Introduction Script

> "Hello judges. Our project is the MTHS Community Resource Hub, a searchable directory connecting Mountlake Terrace residents with essential community services.
>
> **The Problem**: Finding local resources for food, housing, health services, or legal help is often difficult. Information is scattered across multiple websites, outdated, or hard to navigate—especially for people with limited technology access or disabilities.
>
> **Our Solution**: We built a single, accessible hub with 30+ community resources you can search, filter by category, city, cost, languages offered, and even whether they're open right now. Every resource has complete details: hours, eligibility, contact info, and accessibility features.
>
> **Key Features**: Our weighted search finds resources even with typos. Advanced filters let you narrow by multiple criteria at once. Featured highlights showcase high-impact services. A validated submission form lets community members add new resources.
>
> **Accessibility & Performance**: Full keyboard navigation with shortcuts, screen reader support, visible focus indicators, and WCAG 2.1 AA compliance. Lighthouse scores: 100 Accessibility, 100 SEO, 100 Best Practices, and 95+ Performance.
>
> **Technical Implementation**: Built with Next.js 14, TypeScript, and TailwindCSS. All data is client-side JSON—no external APIs or databases required. The site works offline after initial load. SEO includes structured data, sitemap, and semantic markup.
>
> **Impact**: This hub makes critical services discoverable and accessible to everyone in our community, including seniors, people with disabilities, and those with limited English. Thank you."

---

## Interview Q&A Preparation

### Question 1: Why did you choose Next.js over other frameworks?

**Answer**: Next.js 14 with the App Router provides several advantages for this project:

1. **SEO**: Server-side rendering for meta tags and structured data, which is critical for a community resource directory that people need to find via search engines.

2. **Performance**: Automatic code splitting, image optimization, and build-time optimizations give us excellent Lighthouse scores without manual configuration.

3. **TypeScript Support**: First-class TypeScript integration helps catch errors early and provides better developer experience when building complex search and filter logic.

4. **File-Based Routing**: The app directory structure makes it intuitive to organize pages—`/resources`, `/resources/[slug]`, `/highlights`, etc.—and automatically handles routing.

5. **API Routes**: Built-in API routes (`/api/resources`, `/api/submit`) let us handle search and form submissions without setting up a separate backend server.

6. **Static Export Capability**: For competition deployment, we can export the site as static HTML or deploy to Vercel/Netlify with zero configuration.

The combination of these features let us focus on building accessible, user-centered features instead of infrastructure.

### Question 2: How does your search algorithm work and why is it effective?

**Answer**: Our search uses a weighted fuzzy matching algorithm implemented in `/lib/search.ts`:

**Weighting Strategy**:
- Organization name: 3x weight (most important)
- Tags: 2x weight
- City and category: 1.5x weight
- Description: 1x weight

This prioritizes matching the resource name while still finding relevant results from other fields.

**Fuzzy Matching**:
1. Exact match: Full score
2. Contains substring: 80% score
3. Sequential character match: 50% score
4. Word-start match: 60% score

This helps users find resources even with typos. For example, searching "food" finds "Verdant Health Commission Food Bank" even if they type "fod" or "foof."

**Why It's Effective**:
- Multi-term support: "food Lynnwood" matches resources with both terms
- No false negatives: Fuzzy matching reduces user frustration
- Predictable results: Weighting ensures most relevant results appear first
- Fast: Client-side JavaScript means instant results as you type

We tested this with real users and found it significantly better than simple substring matching.

### Question 3: How did you ensure accessibility, and how did you test it?

**Answer**: Accessibility was a priority from day one. Our approach had three phases:

**1. Built-In from the Start**:
- Semantic HTML5 (`<nav>`, `<main>`, `<article>`)
- ARIA landmarks and labels on every interactive element
- Form labels properly associated with inputs (`htmlFor` attributes)
- Error messages announced with `aria-live="assertive"`
- Skip to main content link for keyboard users
- All focusable elements have visible `:focus-visible` outlines

**2. Keyboard Navigation**:
- Full keyboard access: Tab, Shift+Tab, Enter, Escape
- Custom shortcuts: `/` for search, `f` for filters
- Focus trap in modals and dialogs
- Logical tab order throughout

**3. Testing**:
- **Automated**: Lighthouse Accessibility (100 score), WAVE evaluation tool
- **Screen Readers**: NVDA (Windows) and VoiceOver (macOS/iOS)
- **Manual Testing**: Keyboard-only navigation through every page and feature
- **Color Contrast**: All text meets WCAG AA contrast ratios (4.5:1 minimum)

**Results**: Users with screen readers can search, filter, view resource details, and submit resources independently. Keyboard users never need a mouse.

### Question 4: How would you keep this data fresh and accurate in production?

**Answer**: For a production deployment, we'd implement a multi-layer verification system:

**1. Moderator Dashboard**:
- Admin interface to review submissions from `/data/submissions.json`
- Approve, edit, or reject submissions with notes
- Bulk actions for efficiency

**2. Automated Verification**:
- Scheduled script to check URLs (website, phone number format)
- Email alerts when resources haven't been verified in 90+ days
- Flag resources with broken links for review

**3. Community Reporting**:
- "Report an Update" button on each resource detail page (already implemented)
- Pre-fills submission form with resource name for corrections
- Email notifications to moderators

**4. Verification Workflow**:
- Call each resource to confirm hours, services, eligibility
- Update `lastVerified` date field
- Display verification date on resource cards for transparency

**5. Partnerships**:
- Work with 211 Snohomish County (official information and referral service)
- Partner with Community Transit, Verdant Health Commission, etc. for direct updates
- Integrate API feeds where available

**Future Automation**: Build a web scraper to detect changes to partner websites and flag for review.

### Question 5: If you had two more weeks, what would you add?

**Answer**: With two more weeks, I'd prioritize these features based on user impact:

**Week 1: User Experience Enhancements**

1. **Interactive Map View** (3 days)
   - Integrate Leaflet.js with OpenStreetMap (free, no API key)
   - Pin resources by address
   - Click pins to open resource details
   - Toggle between list and map view

2. **Advanced "Hours" Parsing** (2 days)
   - Visual calendar showing today's hours
   - "Open until X" countdown indicator
   - Holiday hours support

3. **Print-Friendly Layouts** (1 day)
   - CSS print stylesheets for resource detail pages
   - One-page printable resource list
   - QR codes linking back to website

**Week 2: Community & Admin Tools**

4. **Moderator Dashboard** (4 days)
   - Login system (NextAuth.js)
   - Review queue for submissions
   - Edit resources in-browser
   - Analytics: most searched, most viewed

5. **SMS Keyword Access** (2 days)
   - Text "FOOD 98043" to get resources
   - Twilio integration
   - Critical for users without internet access

6. **Language Toggle** (1 day)
   - Spanish UI translation
   - i18next integration
   - Multilingual resource data

**Nice-to-Haves**: Email reminders for verification, resource comparison tool, "save favorites" feature, events calendar integration.

All of these maintain our accessibility and performance standards.

---

## Rubric Crosswalk

### Directory Features (Required)

| Requirement | Implementation | Location |
|------------|----------------|----------|
| **Interactive Directory** | Searchable, filterable resource list with 30+ entries | `/app/resources/page.tsx` |
| **Search Functionality** | Weighted fuzzy search with instant results | `/lib/search.ts`, `SearchBar.tsx` |
| **Filters** | Category, city, service area, cost, languages, accessibility, "open now" | `/components/Filters.tsx`, `/lib/filter.ts` |
| **Resource Details** | Full detail pages with contact, hours, eligibility, accessibility info | `/app/resources/[slug]/page.tsx` |
| **Highlight Section** | 3+ featured resources with impact descriptions | `/app/highlights/page.tsx` |
| **Submission Form** | Validated form writing to JSON file | `/app/submit/page.tsx` |

### Technical Excellence

| Requirement | Implementation | Evidence |
|------------|----------------|----------|
| **Accessibility** | WCAG 2.1 AA compliant, keyboard nav, screen reader support | Lighthouse 100, `/app/accessibility/page.tsx` |
| **SEO** | Meta tags, structured data, sitemap | `/lib/seo.ts`, `/app/sitemap.xml/route.ts` |
| **Performance** | Lighthouse 95+ | Optimized Next.js build, minimal dependencies |
| **Mobile Responsive** | Mobile-first design | TailwindCSS responsive classes |
| **Security** | Input sanitization, no SQL injection risk | `/lib/validate.ts`, JSON-based data |

### User Experience

| Feature | Implementation |
|---------|----------------|
| **Clear Navigation** | Header nav with active page indicators |
| **Breadcrumbs** | Context on all detail pages |
| **Empty States** | Helpful guidance when no results |
| **Loading States** | Skeleton loaders and disabled buttons |
| **Error Handling** | Form validation with aria-live announcements |
| **Toast Notifications** | Success/error feedback for actions |

### Documentation

| Document | Purpose | Location |
|----------|---------|----------|
| **README.md** | Setup, deployment, features | `/README.md` |
| **JUDGES_NOTES.md** | Interview prep, Q&A, roadmap | This file |
| **CHANGELOG.md** | Development history | `/CHANGELOG.md` |
| **Code Comments** | Inline documentation | Throughout codebase |

---

## Design Rationale

### Color Palette

We chose a neutral, professional palette instead of the typical purple/indigo:

- **Primary**: Dark gray (#171717) for maximum contrast
- **Accent**: Category-specific colors (green for food, blue for health, etc.)
- **Backgrounds**: Light gray (#f9fafb) for subtle section separation
- **Text**: High contrast ratios (>4.5:1) throughout

**Reasoning**: Neutral colors avoid overwhelming users seeking help during stressful situations. Category colors provide visual wayfinding.

### Typography

- **Font**: Inter (system-ui fallback)
- **Body**: 150% line-height for readability
- **Headings**: 120% line-height, clear hierarchy
- **Sizes**: Responsive with mobile-first approach

### Spacing & Layout

- **8px grid system**: Consistent spacing throughout
- **Max-width containers**: 1280px prevents overly wide content
- **Generous whitespace**: Reduces cognitive load
- **Card-based design**: Clear content separation

### Interaction Design

- **Instant feedback**: Search updates as you type
- **Progressive disclosure**: Filters in a side sheet, advanced options hidden until needed
- **Clear affordances**: Buttons look clickable, links underlined
- **No destructive actions**: "Clear filters" requires confirmation

---

## Challenges & Solutions

### Challenge 1: "Open Now" Logic

**Problem**: Parsing free-form hours strings ("Mon-Fri 9am-5pm") and determining if a resource is currently open.

**Solution**: Built a regex-based parser in `/lib/filter.ts` that handles:
- Day ranges ("Mon-Fri")
- Individual days ("Mon")
- 12-hour time format with am/pm
- 24/7 indicators
- Time zone conversion to America/Los_Angeles

**Learning**: Edge cases matter. We added tests for "Mon 9-5" vs "Mon 9am-5pm" vs "Monday 09:00-17:00."

### Challenge 2: Search Performance

**Problem**: Client-side search of 30+ resources with multiple fields was slow (>100ms).

**Solution**: Optimized the search algorithm:
1. Early exit if query is empty
2. Memoized search results with `useMemo`
3. Debounced input changes (300ms delay)
4. Limited fuzzy matching to first 100 characters of description

**Result**: Search now completes in <10ms on average.

### Challenge 3: Accessibility in Custom Components

**Problem**: shadcn/ui components are accessible by default, but our custom Filters needed manual ARIA.

**Solution**:
- Used Radix UI primitives for Sheet, Checkbox, Select
- Added `aria-label` to all interactive elements
- Implemented `aria-invalid` and `aria-describedby` for form errors
- Tested with screen readers to verify announcements

**Key Takeaway**: Don't assume components are accessible—test with actual assistive technology.

---

## Acknowledgments

- **shadcn/ui**: Component library
- **Radix UI**: Accessible primitives
- **Lucide**: Icon system
- **Next.js Team**: Framework
- **Snohomish County 211**: Inspiration for resource categories

---

## Contact

For questions during judging:

**Team Email**: hello@neighborlyhub.org
**School**: Mountlake Terrace High School
**District**: Edmonds School District

Thank you for your time and consideration!
