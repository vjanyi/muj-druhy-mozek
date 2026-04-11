# PRD: Můj druhý mozek - Landing Page

## Original Problem Statement
Create a clean, minimal one-page website (landing page) for a personal project called "Můj druhý mozek" (My Second Brain). The page should be minimalist, modern, with lots of white space, black text + 1 accent color, clean typography, and a calm, thoughtful, not corporate feel.

## User Persona
- **Primary User**: Czech-speaking individuals interested in personal knowledge management
- **Goal**: Learn about the "second brain" concept and follow the creator's journey
- **Pain Points**: Chaotic notes, scattered information, difficulty remembering things

## Architecture
- **Frontend**: React + shadcn/ui components
- **No Backend**: Static landing page only
- **Styling**: Custom CSS with minimal design aesthetic
- **Responsive**: Mobile-first approach

## Core Requirements (Static)
1. Czech language throughout
2. Accent color: #f4a261 (warm peachy-orange)
3. Minimal abstract graphics (dots + arrows) - NO photos
4. 80% typography / 20% minimal graphics
5. Lots of white space
6. Mobile-first responsive design
7. Smooth scrolling + subtle fade-in animations
8. CTA button links to external Instagram

## Sections Implemented
1. **Hero Section**
   - Headline: "Nemusíš si všechno pamatovat"
   - Subheadline: "Ukazuju, jak si buduju svůj druhý mozek v reálném životě"
   - CTA button: "Sleduj moji cestu"
   - Minimal graphics: dot + arrow

2. **Problem Section**
   - Emotional problem description
   - Chaos in notes and head

3. **Insight Section**
   - Key message: "Problém není v paměti"
   - Core insight: "Problém je v tom, že nemáš systém"

4. **Solution Section**
   - "Druhý mozek" concept explanation
   - Three dots cluster graphic

5. **How It Works**
   - 3-step process with numbered circles
   - Responsive layout (stacks on mobile, horizontal on desktop)

6. **About Me**
   - Personal story from marketing director
   - Authentic, calm tone

7. **Final CTA**
   - "Pojď se mnou"
   - Repeat CTA button

8. **Footer**
   - Simple copyright text

## What's Been Implemented
**Date**: December 2024

### Frontend ✅
- `/app/frontend/src/pages/LandingPage.jsx` - Main landing page component
- `/app/frontend/src/pages/LandingPage.css` - Custom minimal CSS styling
- `/app/frontend/src/App.js` - Updated routing to use LandingPage
- `/app/frontend/src/App.css` - Simplified global styles

### Design Features ✅
- Minimal abstract graphics (CSS-based dots and arrows)
- Smooth scroll behavior
- Fade-in animations using Intersection Observer
- Mobile-first responsive design
- Clean typography with clamp() for fluid sizing
- Accent color #f4a261 used sparingly
- High contrast black text on white background
- Alternating section backgrounds (#ffffff and #fafafa)

### Animations ✅
- Fade-in on scroll for all sections
- Button hover effects (lift + shadow)
- Card hover effects in steps section
- Smooth transitions throughout

### Responsive Breakpoints ✅
- Mobile: < 768px (stacked layout)
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Prioritized Backlog
### P0 Features
- ✅ All core sections implemented
- ✅ Mobile responsive design
- ✅ Minimal graphics (dots + arrows)
- ✅ Smooth animations

### P1 Features (Optional Enhancements)
- [ ] Update Instagram link to actual profile URL
- [ ] Add more subtle micro-interactions
- [ ] Consider adding a simple contact form (if needed)

### P2 Features (Future Considerations)
- [ ] Blog integration for journey updates
- [ ] Newsletter signup integration
- [ ] Analytics tracking

## Next Tasks
1. ✅ Test desktop view
2. ✅ Test mobile responsiveness
3. Update Instagram link when ready
4. Consider adding newsletter signup if user wants to collect emails

## Technical Notes
- No backend required - purely static landing page
- All content is hardcoded (no CMS)
- Uses React hooks (useEffect, useRef) for animations
- Intersection Observer API for scroll-triggered animations
- CSS custom properties for easy color theming
