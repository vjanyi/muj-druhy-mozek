# PRD: Můj druhý mozek - Landing Page

## Original Problem Statement
Create a clean, minimal one-page website in Czech language for a personal project called "Můj druhý mozek" (My Second Brain). The website should introduce the idea of building a personal system for notes ("second brain") and guide users to follow the journey on Instagram.

## User Persona
- **Primary User**: Czech-speaking individuals struggling with scattered notes and information chaos
- **Goal**: Learn about building a personal knowledge system and follow the creator's practical journey
- **Pain Points**: Notes everywhere, can't find things when needed, chaotic information management

## Architecture
- **Frontend**: React + shadcn/ui components
- **No Backend**: Static landing page only
- **Styling**: Custom CSS with minimal design aesthetic
- **Responsive**: Mobile-first approach

## Core Requirements (Static)
1. Czech language throughout
2. Accent color: #f4a261 (soft orange)
3. Minimal abstract graphics (dots + arrows) - NO stock photos, NO people images
4. 80% typography / 20% minimal graphics
5. Lots of white space
6. Mobile-first responsive design
7. Smooth scrolling + subtle fade-in animations
8. CTA buttons link to Instagram (placeholder for now)
9. Feeling: calm, thoughtful, personal, trustworthy (not corporate, not startup-like)

## Sections Implemented
1. **Hero Section**
   - Headline: "Máš poznámky všude… ale když něco potřebuješ, nenajdeš to."
   - Subheadline: "Ukazuju, jak si buduju systém, ve kterém se dá vracet."
   - CTA button: "Sleduj, jak to stavím v praxi"

2. **Problem Section**
   - Emotional problem description
   - Highlight: "Chaos v hlavě. Chaos v poznámkách."

3. **Breakthrough Section**
   - Key insight: "Problém není v paměti. Problém je, že nemáš systém."
   - Supporting text: "Tvůj mozek není úložiště. Je nástroj na přemýšlení."

4. **What Is Second Brain**
   - "Druhý mozek není aplikace."
   - System explanation
   - Three dots cluster graphic

5. **How I Build It**
   - "Tenhle systém si stavím postupně."
   - Practical approach explanation
   - Emphasis on real-life functionality over perfection

6. **Benefits Section**
   - "Méně chaosu v hlavě."
   - "Věci na jednom místě."
   - "Možnost se k nim vracet — a opravdu je používat."
   - "Ne jen sbírat informace. Ale pracovat s nimi."

7. **Final CTA**
   - "Sdílím, jak si ten systém buduju v praxi. Bez dokonalosti. Za pochodu."
   - CTA button: "Podívej se, jak to funguje"

8. **Footer**
   - "Můj druhý mozek • 2026"

## What's Been Implemented
**Date**: December 2024

### Latest Update: Content Optimization (December 2024) ✅
**Goal**: Sharper, simpler, more emotionally engaging content

**Improvements Made**:
1. **Hero Section** - Stronger headline: "Máš poznámky všude." with impactful subheadline
2. **Emotional Tension** - Added repetition text: "A tak to začneš psát znovu. A znovu. A znovu."
3. **Consistent CTAs** - All buttons now say "Podívej se, jak si to stavím"
4. **Reduced Repetition** - Content shortened by ~12%, removed duplicates, kept strongest lines
5. **Visual Emphasis** - Key sentences stand out with font-weight: 700 and letter-spacing
6. **More Whitespace** - Cleaner, more breathable design

**Content Reductions**:
- Problem section: Removed redundant opening question
- Breakthrough section: Removed explanatory text, kept core insight
- Second Brain section: Simplified description
- How I Build section: Condensed to essential message
- Benefits section: Reduced from 3 to 2 main points
- Final CTA: Shortened title

### Frontend ✅
- `/app/frontend/src/pages/LandingPage.jsx` - Main landing page component with updated content
- `/app/frontend/src/pages/LandingPage.css` - Custom minimal CSS styling
- `/app/frontend/src/App.js` - Updated routing to use LandingPage
- `/app/frontend/src/App.css` - Simplified global styles

### Design Features ✅
- Minimal abstract graphics (CSS-based dots and arrows)
- Smooth scroll behavior
- Fade-in animations using Intersection Observer
- Mobile-first responsive design
- Clean typography with clamp() for fluid sizing
- Accent color #f4a261 used sparingly (buttons, accents)
- High contrast black text on white background
- Alternating section backgrounds (#ffffff and #fafafa)
- Calm, clean, thoughtful aesthetic

### Content Updates ✅
- New hero headline focusing on the core problem
- Updated problem section with more emotional connection
- Removed 3-step process cards, replaced with flowing text
- Removed personal story section (integrated into overall narrative)
- New benefits section highlighting practical outcomes
- Updated CTAs with more action-oriented language
- Footer updated to 2026

### Animations ✅
- Fade-in on scroll for all sections
- Button hover effects (lift + shadow)
- Smooth transitions throughout
- Very subtle, not distracting

### Responsive Breakpoints ✅
- Mobile: < 768px (stacked layout)
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Prioritized Backlog
### P0 Features
- ✅ All 7 core sections implemented
- ✅ Mobile responsive design
- ✅ Minimal graphics (dots + arrows)
- ✅ Smooth animations
- ✅ Updated content and CTAs

### P1 Features (Optional Enhancements)
- [ ] Update Instagram link to actual profile URL
- [ ] Add subtle parallax effects (very minimal)
- [ ] Consider adding a simple email capture form

### P2 Features (Future Considerations)
- [ ] Blog integration for journey updates
- [ ] Newsletter signup with backend
- [ ] Analytics tracking

## Next Tasks
1. ✅ Test desktop view
2. ✅ Test mobile responsiveness
3. ✅ Update Instagram link to actual profile
4. Consider adding newsletter/email signup if user wants to collect emails directly on the page

## Instagram Profile
- Profile URL: https://www.instagram.com/muj_druhy_mozek/
- Both CTA buttons now link to the actual Instagram profile

## Technical Notes
- No backend required - purely static landing page
- All content is hardcoded (no CMS)
- Uses React hooks (useEffect, useRef) for animations
- Intersection Observer API for scroll-triggered animations
- CSS custom properties for easy color theming
- Line breaks in JSX using `<br />` for precise typography control
