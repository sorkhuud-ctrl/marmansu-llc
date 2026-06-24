# UX Research Document — MARMANSU LLC

> **Version:** 1.0
> **Date:** 2026-06-23
> **Author:** UX Researcher (AI)
> **Based on:** business-requirements.md v1.0

---

## 1. Research Overview

### 1.1 Objectives

- Define user-centered information architecture for a premium Japan–Mongolia healthcare bridge company website.
- Establish trust-first navigation and content priority.
- Create responsive, accessible UX guidelines aligned with Japanese corporate design aesthetics.
- Minimize friction for B2B partnership inquiries and professional engagement.

### 1.2 Methodology

- Document analysis of business requirements
- Stakeholder interview with MARMANSU leadership
- Competitive UX analysis of local pharmaceutical distributor websites

### 1.3 Scope

- Homepage and 7 supporting pages: About, Services, Products, Projects & Case Studies, Partners & Network, News & Updates, Contact
- Desktop-first responsive design with full mobile support
- Multi-language UX for English, Mongolian, and Japanese

### 1.4 Key Findings Summary

1. **Trust is the primary conversion driver:** Users must see evidence of real partnerships, projects, and professional activity within the first 5 seconds.
2. **Desktop dominates B2B research:** Japanese business users evaluate partners on desktop during work hours; mobile is secondary for Mongolian professionals.
3. **Products are not the first priority:** Users explore services, collaborations, and credibility before products.
4. **Subtle motion reinforces premium feel:** Calm animations and generous white space support the Japanese minimal corporate aesthetic.
5. **Language switcher must be visible and simple:** Header-based EN | MN | JA toggle preserves context across pages.

---

## 2. User Personas

### Persona 1: Yuki Tanaka — Japanese Healthcare Business Development Manager

#### Demographics & Context
- **Age Range:** 35–55
- **Location:** Japan
- **Occupation:** Business Development Manager at pharmaceutical or medical device company
- **Tech Proficiency:** High
- **Primary Device:** Desktop

#### Behavioral Patterns
- **Usage Frequency:** Occasional, during partner evaluation
- **Task Priorities:** Confirm credibility, understand services, evaluate Mongolia market entry support
- **Decision Factors:** Professional design, evidence of partnerships, clear contact path
- **Pain Points:** Unclear regulatory process, lack of local network, unknown distributor reliability
- **Motivations:** Find a trustworthy long-term partner in Mongolia

#### Goals & Needs
- **Primary Goals:** Assess MARMANSU as a credible distribution and cooperation partner
- **Secondary Goals:** Explore regulatory support and project collaboration opportunities
- **Success Criteria:** Can find partner evidence, services, and contact within 2 minutes

#### Context of Use
- **Environment:** Office, during business hours
- **Time Constraints:** Limited; evaluating multiple potential partners
- **Distractions:** Email, meetings

#### Quote
> "I need to know quickly whether MARMANSU is a professional, reliable bridge into Mongolia."

---

### Persona 2: Dr. Bat-Erdene — Mongolian Healthcare Professional

#### Demographics & Context
- **Age Range:** 30–55
- **Location:** Ulaanbaatar, Mongolia
- **Occupation:** Physician, clinic owner, or hospital administrator
- **Tech Proficiency:** Moderate
- **Primary Device:** Mobile

#### Behavioral Patterns
- **Usage Frequency:** Occasional
- **Task Priorities:** Find quality products, training opportunities, contact information
- **Decision Factors:** Japanese quality assurance, product authenticity, professional support
- **Pain Points:** Limited access to genuine Japanese medical products and education
- **Motivations:** Improve patient care through trusted imports and knowledge

#### Goals & Needs
- **Primary Goals:** Discover products and training relevant to their practice
- **Secondary Goals:** Verify legitimacy and contact MARMANSU
- **Success Criteria:** Finds product categories and contact details easily on mobile

#### Context of Use
- **Environment:** Clinic, commute, home
- **Time Constraints:** Short sessions between patients
- **Distractions:** Patient care, notifications

#### Quote
> "I want to see what Japanese products and training MARMANSU can bring to my hospital."

---

### Persona 3: Robert Chen — Strategic Partner / Investor

#### Demographics & Context
- **Age Range:** 40–60
- **Location:** International
- **Occupation:** Investor, NGO representative, or executive exploring healthcare development
- **Tech Proficiency:** High
- **Primary Device:** Desktop

#### Behavioral Patterns
- **Usage Frequency:** Rare, during due diligence
- **Task Priorities:** Understand business model, long-term vision, partnership evidence
- **Decision Factors:** Professional credibility, clear strategy, measurable impact
- **Pain Points:** Lack of transparent information, unclear value proposition
- **Motivations:** Support sustainable Japan–Mongolia healthcare development

#### Goals & Needs
- **Primary Goals:** Evaluate MARMANSU as a long-term partner or investment
- **Secondary Goals:** Review projects, partners, and company story
- **Success Criteria:** Gains confidence in MARMANSU's vision and execution

#### Context of Use
- **Environment:** Office
- **Time Constraints:** Moderate
- **Distractions:** Multiple evaluation tasks

#### Quote
> "I need to see a clear, professional story about how MARMANSU creates sustainable value."

---

## 3. Customer Journey Mapping

### Journey Overview
**Stages:** Discovery → Consideration → Conversion → Retention

### Stage 1: Discovery
- **Touchpoints:** Referral, conference materials, LinkedIn, search engine
- **User Actions:** Lands on homepage, scans hero, checks navigation
- **Emotions:** Curious, cautious
- **Pain Points:** Unclear who MARMANSU is
- **Opportunities:** Hero must immediately communicate "More Than Products" and trust

### Stage 2: Consideration
- **Touchpoints:** About, Services, Projects, Partners pages
- **User Actions:** Reads company story, reviews services, explores collaborations
- **Emotions:** Evaluating, building confidence
- **Pain Points:** Lack of evidence or detail
- **Opportunities:** Use real projects, partner names, and news to build credibility

### Stage 3: Conversion
- **Touchpoints:** Contact page, contact form, email, phone
- **User Actions:** Completes form or sends email
- **Emotions:** Ready to engage
- **Pain Points:** Complex form, missing contact details
- **Opportunities:** Simple form with clear confirmation and alternative contact options

### Stage 4: Retention
- **Touchpoints:** News updates, follow-up communications
- **User Actions:** Returns for updates, shares with colleagues
- **Emotions:** Confident, loyal
- **Pain Points:** Stale content
- **Opportunities:** Regular news publishing about partnerships, events, milestones

---

## 4. Information Architecture & Sitemap

### 4.1 Content Hierarchy

```text
Home
├── Hero: "More Than Products"
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
    ├── Contact Form
    ├── Company Information
    ├── Google Maps
    ├── Email
    └── Phone
Legal
├── Privacy Policy
└── Terms of Use
```

### 4.2 Navigation Design

- **Primary Navigation:** Home | About | Services | Products | Projects | Partners | News | Contact
- **Secondary Navigation:** None at launch
- **Footer Navigation:** About, Services, Products, Projects & Case Studies, Contact, Privacy Policy, Terms of Use, Copyright
- **Mobile Navigation:** Hamburger menu with vertical list of primary items, language switcher at bottom, Contact button included

### 4.3 Content Organization Principles

1. Trust before products: homepage leads with value proposition and credibility
2. Evidence-based messaging: projects, partners, and news support claims
3. Clear hierarchy: one idea per section, generous white space
4. Consistent labels: use familiar corporate terminology
5. Predictable paths: every key action reachable within 2 clicks

### 4.4 Search & Filter Strategy

- Search: not required at launch
- News listing: chronological with category tags optional in future

---

## 5. Wireframe Guidance

### 5.1 Global Layout Structure

- **Header:** Logo left, primary nav center-right, language switcher right, sticky on scroll
- **Footer:** Multi-column links, copyright, no social icons at launch
- **Content Width:** Max-width 1280px, centered
- **Grid System:** 12-column grid, generous gutters

### 5.2 Section Layouts

#### Hero
- **Layout Type:** Full-width with centered or left-aligned text block
- **Content Priority:** Headline, subtitle, primary CTA
- **Component Types:** Large typography, subtle background texture or image
- **White Space:** Significant padding top and bottom
- **Responsive Behavior:** Text scales down, remains centered

#### About
- **Layout Type:** Two-column (text + image or statistic)
- **Content Priority:** Philosophy statement, key differentiator
- **Component Types:** Paragraph, statistic card, image
- **White Space:** Generous vertical rhythm
- **Responsive Behavior:** Stacks vertically on mobile

#### Services
- **Layout Type:** Grid of cards (3 columns desktop, 1 column mobile)
- **Content Priority:** 5 service cards with icon, title, description
- **Component Types:** Card, icon, text
- **White Space:** Consistent card gaps
- **Responsive Behavior:** 3 → 2 → 1 columns

#### Products
- **Layout Type:** Grid of category cards
- **Content Priority:** 4 product categories
- **Component Types:** Card, image or icon, title, short description
- **White Space:** Equal to services
- **Responsive Behavior:** 2 columns tablet, 1 column mobile

#### Projects & Case Studies
- **Layout Type:** Grid or list of project cards
- **Content Priority:** 5 featured projects
- **Component Types:** Card, image, title, description
- **White Space:** Generous
- **Responsive Behavior:** 2 columns desktop, 1 column mobile

#### Partners & Network
- **Layout Type:** List or card grid
- **Content Priority:** Partner names and descriptions
- **Component Types:** Text list, category headings
- **White Space:** Clear grouping
- **Responsive Behavior:** Single column on mobile

#### News & Updates
- **Layout Type:** Card grid or list
- **Content Priority:** Latest posts, date, excerpt
- **Component Types:** News card, pagination
- **White Space:** Rhythm consistent with other sections
- **Responsive Behavior:** 2 columns desktop, 1 column mobile

#### Contact
- **Layout Type:** Two-column (form + company info/map)
- **Content Priority:** Form, address, email, phone, map
- **Component Types:** Form inputs, map embed, text
- **White Space:** Clear separation between form and info
- **Responsive Behavior:** Stacks vertically on mobile

### 5.3 Content Priority

1. **Homepage:** Hero → About summary → Services → Projects → Partners → News preview → Contact CTA
2. **About:** Story → Mission → Value proposition
3. **Services:** Service cards in logical order
4. **Products:** Category cards with quality emphasis
5. **Projects:** Featured case studies with real outcomes
6. **Partners:** Partner categories and network description
7. **News:** Chronological updates
8. **Contact:** Form first, then company details

### 5.4 Component Patterns

- **Cards:** Subtle border or shadow, soft hover lift, rounded corners minimal
- **Lists:** Clean, well-spaced, with clear hierarchy
- **Forms:** Simple labels, clear validation, prominent submit button
- **Media:** Professional photography, restrained use of icons

---

## 6. Accessibility Requirements

### 6.1 WCAG 2.1 Level AA Compliance

| Requirement | Implementation | Priority |
|---|---|---|
| Keyboard Navigation | All interactive elements accessible via keyboard | High |
| Screen Reader Support | ARIA labels, landmarks, skip links | High |
| Color Contrast | 4.5:1 for normal text, 3:1 for large text | High |
| Focus Indicators | Visible focus states on all interactive elements | High |
| Alt Text | Descriptive alt text for all images | High |
| Form Labels | All form inputs have associated labels | High |
| Text Resizing | Support 200% zoom without loss of function | Medium |
| Motion Sensitivity | Respect `prefers-reduced-motion` | Medium |

### 6.2 Multi-language Accessibility

- Allow text expansion for Mongolian and Japanese translations
- Ensure fonts render Cyrillic and Japanese characters correctly
- Maintain layout integrity across languages

### 6.3 Mobile Accessibility

- Touch targets at least 44x44px
- Hamburger menu accessible via screen reader
- Allow pinch zoom

---

## 7. Responsive Design Strategy

### 7.1 Breakpoints

| Breakpoint | Width | Target Devices | Layout Changes |
|---|---|---|---|
| Mobile | 375px | Smartphones | Single column, stacked nav |
| Tablet | 768px | Tablets | Two columns, adjusted spacing |
| Desktop | 1280px | Laptops, desktops | Full multi-column layout |
| Large Desktop | 1536px+ | Large monitors | Max-width container, more whitespace |

### 7.2 Desktop-first Approach

- Design for desktop first because the primary audience (Japanese business users, pharmaceutical companies, medical device manufacturers) evaluates partners on large screens during work hours.
- Ensure the full visual impact of the premium corporate design is preserved at 1280px and above.
- Then adapt layouts, typography, and spacing downward for tablet and mobile without losing clarity or credibility.
- Mobile optimization remains mandatory: Mongolian healthcare professionals and quick access users rely on smartphones, so all core content and conversion paths must work perfectly on mobile.

### 7.3 Content Adaptation

- Reduce headline sizes on mobile
- Stack multi-column layouts
- Hide decorative elements if needed
- Maintain touch-friendly spacing

### 7.4 Performance Budget

- Mobile: < 1MB initial load, < 3s load time
- Desktop: < 2MB initial load, < 2s load time

---

## 8. Interaction & Motion Design

### 8.1 Animation Principles

- Calm, purposeful, and minimal
- Reinforce hierarchy and guide attention
- Never distract from content
- Support `prefers-reduced-motion`

### 8.2 Micro-interactions

| Element | Trigger | Animation | Duration |
|---|---|---|---|
| Buttons | Hover | Subtle scale 1.02, shadow increase | 200ms |
| Cards | Hover | Gentle lift, shadow deepen | 250ms |
| Links | Hover | Color transition, optional underline | 150ms |
| Form Inputs | Focus | Border color change, subtle shadow | 200ms |
| Section Content | Scroll | Soft fade-in and translate-y | 400–600ms |
| Mobile Menu | Open/Close | Smooth height or slide transition | 250ms |

### 8.3 Page Transitions

- Optional subtle fade between pages
- Avoid complex transitions

### 8.4 Scroll Behaviors

- Smooth scroll for anchor links
- Sticky header appears after small scroll
- No parallax or complex scroll animations

---

## 9. Content Strategy & UX Writing

### 9.1 Tone of Voice

- Professional, calm, and confident
- Evidence-based, not promotional
- Respectful of Japanese corporate communication style
- Clear and concise

### 9.2 Terminology

| Term | Usage | Avoid |
|---|---|---|
| More Than Products | Core brand message and hero headline | Using as a generic tagline without context |
| Healthcare Bridge | Describes MARMANSU's role | Implying MARMANSU is only a logistics provider |
| Trusted Partnership | Evidence-based relationship | Empty claim without supporting content |
| Japanese Quality | Refers to standards and partners | Exaggerated or unsupported claims |
| Distribution Partner | Professional B2B relationship | Reseller, dealer, seller |

### 9.3 CTA Copy Guidelines

- Use action-oriented but calm language
- Examples: "Learn More", "Explore Services", "Partner With Us", "Contact Us", "Send Message"
- Avoid aggressive language like "Buy Now", "Sign Up", "Get Started"

### 9.4 Multi-language UX Writing

- English: default, professional and direct
- Mongolian: formal and respectful
- Japanese: polite business style (keigo considerations)
- Keep CTA lengths similar across languages where possible

### 9.5 Error Messages

- Polite and helpful
- Example: "Please enter a valid email address."
- Confirmation: "Thank you for contacting MARMANSU. We will review your inquiry and respond soon."

---

## 10. Usability Testing Plan

### 10.1 Test Scenarios

1. First-time Japanese BD manager evaluates MARMANSU as a partner
2. Mongolian doctor finds product categories and contact info on mobile
3. Investor reviews company story and projects
4. User switches language and navigates to About page

### 10.2 Testing Methods

- Moderated task-based testing
- Heatmap and scroll analysis post-launch
- Contact form completion tracking

### 10.3 Success Metrics

- Task completion rate > 85%
- Time to find contact < 60 seconds
- Homepage clarity score > 4/5

---

## 11. Competitive UX Analysis

| Competitor | Strengths | Weaknesses | Opportunities |
|---|---|---|---|
| Ayaluun Pharm | Clear navigation, established product catalog, local presence | Product-centric, less premium design, limited partnership narrative | Position MARMANSU as a trust-first platform rather than a product catalog |

---

## 12. Success Metrics & KPIs

### 12.1 UX Metrics

- Task completion rate
- Time on page for About and Projects
- Contact form submissions
- Mobile vs desktop engagement

### 12.2 Business Metrics

- Qualified partnership inquiries
- Newsletter or news return visits
- Contact form conversion rate

### 12.3 Technical Metrics

- Page load time
- Core Web Vitals scores
- Accessibility audit score

---

## 13. Design Agent Collaboration

Specialized visual design support may be helpful for:
- Custom iconography for service and product categories
- Premium photography direction
- Japanese typography pairing

---

## 14. Assumptions & Constraints

### Assumptions

- Users prefer calm, minimal corporate design
- Partner logos will not be used without permission
- Content translations will be provided for Mongolian and Japanese

### Constraints

- No e-commerce or user accounts at launch
- No social media integration at launch
- Must support static export for GitHub Pages deployment

---

## 15. Next Steps

1. Review and approve this UX research document
2. Proceed to visual design phase (Pencil design directions)
3. Validate design directions against UX principles before development

---

**End of Document**
