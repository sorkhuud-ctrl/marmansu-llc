# Design Handoff — MARMANSU LLC

## 0. Approval Record

- **Homepage options shown:**
  - Option A — Japanese Corporate Premium (white background, navy hero, traditional corporate layout)
  - Option B — Healthcare Innovation (dark navy hero, stronger contrast, modern energy)
  - Option C — Global Bridge (centered hero with Japan–Mongolia bridge visual)
- **Selected option:** Option A — Japanese Corporate Premium, refined with subtle Japan–Mongolia bridge concept from Option C
- **Preview artifact file paths:**
  - `output/marmansu-llc/designs/homepage-option-a.png`
  - `output/marmansu-llc/designs/homepage-option-b.png`
  - `output/marmansu-llc/designs/homepage-option-c.png`
- **Final design artifacts:**
  - `output/marmansu-llc/designs/design.pen`
  - `output/marmansu-llc/designs/design.png`
  - `output/marmansu-llc/design-tokens.json`
  - `output/marmansu-llc/ui-libraries.json`
  - `output/marmansu-llc/HANDOFF.md`
- **Pencil project path used:** `output/marmansu-llc/designs/design.pen`
- **Homepage previews covered full section flow:** Yes — Hero, About, Services, Products, Projects, Partners, News, CTA, Footer
- **Full designed pages available for review:** Homepage, About, Services, Products, Projects, Partners, News, Contact
- **Locked constraints:**
  - Motion level 1 (Polished) — only subtle fade-in, hover effects, section reveal
  - No parallax, no auto-playing sliders, no flashy transitions, no startup aesthetics
  - No e-commerce patterns, pricing, or checkout UI
  - Corporate premium Japanese minimal style
  - White background, navy primary, gold-gray accent
  - English first, Mongolian and Japanese future support
  - No social media icons/links at launch
  - Partner logos only with permission

---

## 1. Frontend Build Map

### Global Structure

- **Header:** Sticky navigation with logo left, primary nav center-right, language switcher (EN | MN | JA) right
- **Footer:** Navy dark background, logo, footer links, legal links, copyright
- **Mobile Menu:** Hamburger menu, vertical nav list, language switcher at bottom, Contact button
- **Page Max Width:** 1280px, centered

### Homepage Sections (in order)

1. **Hero**
   - Label: "JAPAN–MONGOLIA HEALTHCARE BRIDGE"
   - Title: "More Than Products"
   - Subtitle: trust/partnership message
   - Primary CTA: "Explore Services" (navy button)
   - Secondary CTA: "Contact Us" (outline button)
   - Hero bridge visual: Japan · Mongolia concept
   - Statistics bar: Founded, Japanese Partners, Core Services, Markets
2. **About**
   - Two-column: image left, text right
   - Section heading + philosophy paragraph
   - CTA link
3. **Services**
   - Section heading
   - 5 service cards in rows
4. **Products**
   - Section heading
   - 4 product category cards
5. **Projects & Case Studies**
   - Section heading
   - 4 project cards
6. **Partners & Network**
   - Section heading
   - 3 partner category cards
7. **News & Updates**
   - Section heading
   - 3 news cards
8. **CTA Section**
   - Navy background
   - "Build a Long-Term Healthcare Partnership"
   - Contact button
9. **Footer**

### Standalone Pages

- `/about` — About page hero, company story, values grid
- `/services` — Page hero, services intro, detailed service rows
- `/products` — Page hero, products intro, product grid, quality section
- `/projects` — Page hero, projects intro, project list
- `/partners` — Page hero, partners intro, partner categories
- `/news` — Page hero, news list
- `/contact` — Page hero, contact form, company info, map placeholder

### Dynamic CMS Page Templates

- Blog/News listing template
- Blog/News detail template
- CMS page template for dynamic pages

---

## 2. erxes CMS Field Map

### Pages to Seed

| Slug | Section | Purpose |
|------|---------|---------|
| home | hero | Homepage landing |
| about | about | Company story |
| services | services | Services overview |
| product | product | Product categories |
| portfolio | portfolio | Projects & case studies |
| team | team | Partners & Network |
| blog | blog | News & Updates |
| contact | contact | Contact form and info |

### Menu Structure

**Header:**
- Home → /
- About → /about
- Services → /services
- Products → /products
- Projects → /projects
- Partners → /partners
- News → /news
- Contact → /contact

**Footer:**
- About, Services, Products, Projects, Contact
- Privacy Policy, Terms of Use

### Blog/News

- Required for news updates
- Categories: Partnerships, Products, Training, Events, Regulatory, Milestones
- Tags optional

### Translations

- Primary: English
- Future: Mongolian, Japanese
- Slugs identical across languages
- URLs: `/en/about`, `/mn/about`, `/ja/about`

---

## 3. Visual System

### Color

- **Primary:** Navy `#1a2f4a`
- **Primary Dark:** `#0f1c2d`
- **Primary Light:** `#2a4566`
- **Accent:** Gold-gray `#c9b896`
- **Accent Light:** `#e8dfcc`
- **Background:** White `#ffffff`
- **Surface Soft:** `#f8f9fa`
- **Text Primary:** `#1a2f4a`
- **Text Secondary:** `#6c757d`
- **Text Muted:** `#adb5bd`
- **Border:** `#e9ecef`

### Typography

- **Display / Body:** Inter
- **Mono:** JetBrains Mono
- **Japanese Fallback:** Noto Sans JP
- Hero title: 64–72px, weight 600, line-height 1.1
- Page title: 52px, weight 600, line-height 1.2
- Section title: 36px, weight 600
- Body: 14–16px, line-height 1.6–1.8
- Labels: 12–13px, wide letter-spacing, gold color

### Spacing

- Section padding: 80–120px vertical
- Container horizontal padding: 120px desktop, 24px mobile
- Card padding: 24–32px
- Grid gaps: 24–32px

### Radius & Shadows

- Card radius: 8px
- Large radius: 12px
- Button radius: 4px
- Card shadow: `0 2px 8px rgba(26,47,74,0.06)`
- Card hover shadow: `0 8px 24px rgba(26,47,74,0.10)`

---

## 4. Motion & Interaction

### Motion Level

- **Level 1: Polished**
- Only subtle, purposeful motion

### Allowed Animations

- Smooth scroll for anchor links
- Section fade-in + translate-y on scroll
- Card hover lift + shadow deepen
- Button hover scale 1.02
- Link color transitions
- Mobile menu open/close slide/fade
- Form input focus border color + shadow

### Forbidden

- Heavy parallax
- Auto-playing sliders/carousels
- Flashy transitions
- Complex scroll animations
- Excessive motion
- Startup-style gimmicks

### Accessibility

- Respect `prefers-reduced-motion`
- All interactive elements keyboard accessible
- Visible focus states
- Color contrast 4.5:1 for normal text

---

## 5. Component Inventory

### Reusable Components

- Header (logo, nav, language switcher)
- Footer (logo, links, legal, copyright)
- SectionHeading (label, title, description)
- HeroSection (homepage hero)
- PageHero (inner page hero)
- StatsSection
- ServiceCard
- ProductCard
- ProjectCard
- PartnerRow
- NewsCard
- ContactForm
- LanguageSwitcher
- MobileMenu

### Shadcn Components

- Button
- Card
- Input
- Textarea
- Separator

---

## 6. Responsive Behavior

### Desktop-first + Mobile Optimization

- **Large Desktop (1536px+):** max-width container, generous whitespace
- **Desktop (1280px):** full multi-column layouts
- **Tablet (768px):** 2 columns, reduced spacing
- **Mobile (375px):** single column, stacked sections, hamburger menu

### Mobile Adaptations

- Hero title scales down
- Multi-column grids become single column
- Contact form stacks above info
- Bridge visual simplifies

---

## 7. Content Tone

- Professional, calm, confident
- Evidence-based, not promotional
- Trust and partnership first
- Avoid aggressive sales language
- Japanese business communication style: respectful, clear, concise

---

## 8. Next Steps

1. Generate Next.js frontend from this handoff
2. Connect to erxes CMS
3. Seed pages, posts, and menus
4. Verify CMS data and build
5. Push to GitHub

---

**End of Handoff**
