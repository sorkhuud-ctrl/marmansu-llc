# Business Requirements Document — MARMANSU LLC

> **Version:** 1.0
> **Date:** 2026-06-23
> **Author:** Business Analyst (AI)
> **Status:** Draft

---

## 1. Executive Summary

MARMANSU LLC is a Mongolia–Japan healthcare bridge company founded in 2024. It is not a traditional importer or distributor, but a long-term platform that connects Japanese healthcare quality with Mongolia through pharmaceutical products, medical devices, dental solutions, professional education, regulatory support, and institutional cooperation.

This website must establish MARMANSU as a trusted, premium corporate brand for Japanese healthcare companies seeking a reliable partner in Mongolia, for Mongolian healthcare professionals and institutions seeking quality products and knowledge, and for strategic partners and investors interested in sustainable Japan–Mongolia healthcare development.

The site will be built as a responsive, multi-language corporate website (English first, with Mongolian and Japanese planned for future support) using a clean Japanese minimal design direction.

---

## 2. Business Objectives & Success Metrics

| # | Objective | Success Metric | Target |
|---|---|---|---|
| 1 | Build a trusted healthcare brand connecting Japan and Mongolia | Brand recall and returning visitors | 30% returning visitor rate within 6 months |
| 2 | Become the preferred partner for Japanese healthcare companies entering Mongolia | Qualified partnership inquiries via contact form | 5+ qualified inquiries per month within 6 months |
| 3 | Communicate MARMANSU's platform value beyond product distribution | Time on site and key page depth | Average session > 2 minutes |
| 4 | Establish credibility with investors and strategic partners | Professional appearance and content completeness | 100% of core pages published at launch |
| 5 | Generate awareness of services, products, and projects | Contact form submissions and email clicks | 10+ contact actions per month within 6 months |

---

## 3. Stakeholder Analysis

| Role | Name/Department | Responsibility |
|---|---|---|
| Founder / Executive Sponsor | MARMANSU Leadership | Brand direction, final approval, strategic partnerships |
| Business Development | Partnerships Team | Japanese company outreach, distributor negotiations |
| Medical Affairs | Clinical & Training Team | Content accuracy, seminar and training programs |
| Marketing / Communications | MARMANSU Team | News updates, content publishing via erxes CMS |
| Technical Lead | Development Partner | Website build, deployment, and CMS integration |
| End Users | Japanese healthcare companies, Mongolian hospitals/clinics, investors | Consume content, initiate contact |

---

## 4. Scope

### 4.1 In-scope

- Responsive corporate website with English-first content
- Multi-language architecture ready for Mongolian and Japanese
- Homepage with hero, about, services, products, portfolio, partners, news, and contact sections
- Dedicated pages for About, Services, Products, Projects & Case Studies, Partners & Network, News & Updates, and Contact
- erxes CMS integration for dynamic pages, posts, and navigation
- Contact form, company information, Google Maps, email, and phone
- Smooth scrolling, subtle animations, and premium typography
- Partner and statistics sections
- Clean footer with legal links

### 4.2 Out-of-scope

- E-commerce functionality (catalog, cart, checkout)
- User authentication and accounts
- Online booking or appointment systems
- Real-time chat
- Social media integration at launch
- Detailed technical product specifications or pricing
- Customer portal

---

## 5. Target Audience & User Personas

### Primary Persona: Japanese Healthcare Business Development Manager

- **Demographics:** 35–55 years old, based in Japan, works at pharmaceutical, medical device, or dental company
- **Goals:** Find a reliable, professional partner to enter or expand in Mongolia
- **Pain Points:** Unclear regulatory path, limited local network, concerns about product registration and distribution quality
- **Tech Proficiency:** Professional; uses desktop and mobile for research
- **Needs:** Trust signals, clear service descriptions, evidence of partnerships, easy contact

### Secondary Persona: Mongolian Healthcare Professional or Hospital Administrator

- **Demographics:** 30–55 years old, based in Ulaanbaatar or provinces, doctor, clinic owner, procurement manager
- **Goals:** Access high-quality Japanese products, training, and cooperation opportunities
- **Pain Points:** Difficulty accessing quality imports, limited training opportunities, uncertainty about authenticity
- **Tech Proficiency:** Moderate; uses mobile frequently
- **Needs:** Product categories, news about training/events, contact details

### Tertiary Persona: Strategic Partner or Investor

- **Demographics:** 40–60 years old, executive, investor, government or NGO representative
- **Goals:** Evaluate MARMANSU as a credible long-term partner
- **Pain Points:** Lack of professional online presence, unclear business model
- **Tech Proficiency:** Professional; desktop-first
- **Needs:** Company story, business model clarity, partnership evidence, professional design

---

## 6. Site Information Architecture & Sitemap

### 6.1 Page Hierarchy

```text
Home
├── About
├── Services
│   ├── Pharmaceutical Distribution
│   ├── Medical Devices and Dental Solutions
│   ├── Regulatory and Market Entry Support
│   ├── Medical Education and Professional Training
│   └── Healthcare Business Development and Strategic Partnerships
├── Products
│   ├── Pharmaceutical Products
│   ├── Dental Materials and Implant Solutions
│   ├── Medical Devices and Diagnostic Equipment
│   └── Regenerative and Advanced Healthcare Solutions
├── Projects & Case Studies
│   ├── Academic Forums and Professional Training
│   ├── Dental Implant Education and Collaboration
│   ├── Healthcare Product Introduction and Market Development
│   ├── Medical Equipment and Hospital Collaboration
│   └── International Healthcare Cooperation
├── Partners & Network
├── News & Updates
└── Contact
    └── Privacy Policy
    └── Terms of Use
```

### 6.2 Navigation Structure

- **Header:** Home (logo), About, Services, Products, Projects, Partners, News, Contact
- **Mobile:** Hamburger menu with the same primary items
- **Footer:** About, Services, Products, Projects & Case Studies, Contact, Privacy Policy, Terms of Use, Copyright © MARMANSU LLC

---

## 7. Functional Requirements

### 7.1 Section-specific Requirements

#### Hero / Home

- **Purpose:** Establish instant brand credibility and communicate the core message
- **Content:** Main headline "More Than Products", subtitle "We deliver trust, knowledge, and long-term healthcare partnerships between Japan and Mongolia", short CTA
- **CTA:** "Learn More" or "Contact Us"
- **Interactions:** Smooth scroll to next section, subtle fade-in animation

#### About

- **Purpose:** Explain MARMANSU's philosophy and differentiate from traditional distributors
- **Content:** Company story, vision, mission, "Connecting Japanese healthcare quality with Mongolia" narrative
- **CTA:** "Our Services" or "Meet Our Team"
- **Interactions:** Scroll-triggered reveal

#### Services

- **Purpose:** Present five core service areas
- **Content:**
  1. Pharmaceutical Distribution
  2. Medical Devices and Dental Solutions
  3. Regulatory and Market Entry Support
  4. Medical Education and Professional Training
  5. Healthcare Business Development and Strategic Partnerships
- **CTA:** "Explore Products" or "Partner With Us"
- **Interactions:** Service cards with subtle hover effect

#### Products

- **Purpose:** Showcase product categories without detailed catalog
- **Content:**
  1. Pharmaceutical Products
  2. Dental Materials and Implant Solutions
  3. Medical Devices and Diagnostic Equipment
  4. Regenerative and Advanced Healthcare Solutions
- **CTA:** "Contact for Details"
- **Interactions:** Category cards with emphasis on quality and Japanese standards

#### Projects & Case Studies

- **Purpose:** Demonstrate real collaboration and ongoing initiatives
- **Content:**
  1. Academic Forums and Professional Training
  2. Dental Implant Education and Collaboration
  3. Healthcare Product Introduction and Market Development
  4. Medical Equipment and Hospital Collaboration
  5. International Healthcare Cooperation
- **CTA:** "Read More" or "View All Projects"
- **Interactions:** Project cards with subtle shadows

#### Partners & Network

- **Purpose:** Build trust through visible collaborations
- **Content:** Japanese healthcare companies, medical device and dental partners, academic networks, Mongolian hospitals, universities and training collaborations
- **CTA:** "Become a Partner"
- **Interactions:** Partner list/cards; logos only if permission available

#### News & Updates

- **Purpose:** Keep audience informed about company developments
- **Content:** Distribution agreements, product launches, regulatory approvals, seminars, conferences, collaborations, expert visits, milestones
- **CTA:** "Read Article"
- **Interactions:** Blog/news cards, list and detail views

#### Contact

- **Purpose:** Make it easy for partners and customers to reach MARMANSU
- **Content:** Contact form, email, phone, office address, Google Maps
- **CTA:** "Send Message"
- **Interactions:** Form validation, success confirmation

### 7.2 E-commerce Requirements

Not applicable. The website is corporate and informational only.

### 7.3 Content Management Requirements

- All pages and posts managed via erxes CMS
- Multi-language content structure for future Mongolian and Japanese expansion
- Easy news/blog publishing
- Menu management through CMS

### 7.4 Multi-language Requirements

- Default language: English
- Supported languages: English, Mongolian, Japanese
- Slugs remain identical across languages (e.g., `/en/about`, `/mn/about`, `/ja/about`)
- Content translations managed through erxes CMS

### 7.5 User Account & Authentication

Not applicable at this stage.

### 7.6 Search & Filtering

Not required at launch. Basic news listing sufficient.

---

## 8. Non-functional Requirements

### 8.1 Performance

- Page load time: < 3 seconds
- Time to First Byte (TTFB): < 200ms
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

### 8.2 SEO

- Semantic HTML structure
- Optimized meta titles and descriptions per page
- Open Graph tags for social sharing
- Clean URL structure
- XML sitemap

### 8.3 Accessibility

- WCAG 2.1 AA compliance target
- Keyboard navigation support
- Alt text for images
- Sufficient color contrast

### 8.4 Security

- Environment variables for API tokens
- No secrets exposed in frontend code
- Secure contact form handling

### 8.5 Browser & Device Support

- Latest Chrome, Safari, Firefox, Edge
- Responsive from 320px mobile to 4K desktop
- Touch-friendly mobile navigation

---

## 9. Design Direction

### 9.1 Visual Style

- Japanese minimal design with premium healthcare aesthetics
- Clean, elegant, and professional
- Corporate style rather than e-commerce
- High-quality hero section with strong slogan
- Smooth scrolling and modern typography
- Cards with subtle shadows
- Plenty of white space
- Avoid clutter, flashy colors, and excessive animations

### 9.2 Color Palette

- **Primary:** Navy blue (#1e3a5f or similar)
- **Secondary:** Gold-gray / champagne accent
- **Background:** White (#ffffff)
- **Neutral:** Soft grays for text and borders
- **Text:** Dark navy/charcoal for headings, medium gray for body

### 9.3 Typography

- Modern sans-serif typeface
- Clear hierarchy: large hero headline, medium section headings, readable body text
- Generous line height and spacing

### 9.4 Imagery & Photography

- High-quality, professional healthcare and business imagery
- Japanese precision and Mongolian healthcare context
- Clean product and team photography
- Avoid generic stock photos where possible

---

## 10. CTA Strategy & Conversion Goals

| Location | CTA Text | Destination | Goal |
|---|---|---|---|
| Hero | "Learn More" or "Contact Us" | About / Contact | Drive exploration |
| About | "Our Services" | Services | Deepen engagement |
| Services | "Partner With Us" | Contact | Generate inquiries |
| Products | "Contact for Details" | Contact | Capture leads |
| Projects | "View All Projects" | Projects page | Build credibility |
| Partners | "Become a Partner" | Contact | Generate B2B inquiries |
| News | "Read More" | News detail | Build trust through updates |
| Contact | "Send Message" | Form submission | Capture qualified inquiries |
| Footer | "Contact" | Contact page | Easy access |

---

## 11. Success Metrics & Acceptance Criteria

### 11.1 Quantitative Metrics

- Contact form submissions: 10+ per month within 6 months
- Partnership inquiries: 5+ per month within 6 months
- Average session duration: > 2 minutes
- Returning visitor rate: > 30% within 6 months
- Core page load time: < 3 seconds

### 11.2 Qualitative Criteria

- Website feels like a premium Japanese healthcare company
- Clear differentiation from product-only competitors
- Trust and professionalism communicated within 5 seconds
- Easy to navigate on desktop and mobile
- Content is clear, accurate, and well-translated

---

## 12. Assumptions & Constraints

### Assumptions

- erxes CMS remains available and accessible
- Content translations will be provided or generated for Mongolian and Japanese
- Partner logos will only be displayed with written permission
- Contact form submissions will be forwarded to marmansullc@gmail.com

### Constraints

- No e-commerce at launch
- No official social media accounts at launch
- No detailed product catalog or pricing
- Website must be deployable to GitHub Pages-compatible static output

---

## 13. References & Appendices

### 13.1 Reference Documents

- `site.config.json`: Project configuration
- `agents/business-analyst.md`: BRD workflow

### 13.2 Competitor Analysis

| Competitor | URL | Strengths | Weaknesses |
|---|---|---|---|
| Ayaluun Pharm | https://ayaluunpharm.mn/ | Established product catalog, local market presence, clear navigation | Product-centric rather than partnership platform, less premium visual design, limited international partnership narrative |

### 13.3 Glossary

| Term | Definition |
|---|---|
| OTC | Over-the-counter medicines available without prescription |
| ODA | Official Development Assistance — international development programs |
| Regulatory Support | Assistance with product registration, licensing, and market access |
| Medical Inbound | International patient referral and medical travel services |
| Distribution Agreement | Contract to import and distribute products in a market |

---

**End of Document**
