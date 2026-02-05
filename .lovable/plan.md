
# Enterprise Section with Navbar Toggle

## Overview
Add a Consumer/Enterprise toggle in the navigation bar that allows visitors to switch views. The Enterprise section will display a "Coming Soon" teaser while keeping the current consumer content fully functional.

## How It Will Work

When a visitor clicks the toggle:
- **Consumer mode** (default): Shows the current landing page exactly as it is
- **Enterprise mode**: Shows an Enterprise-specific "Coming Soon" page with a teaser and lead capture

## What Gets Built

### 1. Navbar Enhancement
Add a stylish toggle switch between "Consumer" and "Enterprise" in the navigation bar, positioned before the "Get a Quote" button. This will be visible on both desktop and mobile.

### 2. New Enterprise Coming Soon Page
A dedicated page at `/enterprise` with:
- Bold "Enterprise Solutions - Coming Soon" headline
- Brief teaser about what's coming (bulk access control, multi-site management, etc.)
- Email signup or WhatsApp contact for early access notifications
- A "Back to Consumer" link/button

### 3. Navigation Flow
- Toggle in navbar links to `/enterprise` route when clicking "Enterprise"
- Enterprise page has a clear way to return to the consumer landing page
- The toggle visually indicates which mode you're viewing

## Visual Design

The toggle will match your brand:
- Clean pill-shaped toggle with your primary blue (#0d2883)
- Labels: "Home" | "Enterprise" 
- Active state highlighted

The Coming Soon page will:
- Use your existing design system (same fonts, colors, components)
- Feature a professional teaser layout with building/corporate imagery
- Include a clear CTA to register interest via WhatsApp

---

## Technical Details

### Files to Create
- `src/pages/Enterprise.tsx` - New Coming Soon page for enterprise
- `src/components/landing/EnterpriseComingSoon.tsx` - The content component

### Files to Modify
- `src/components/landing/Navbar.tsx` - Add the toggle switch
- `src/App.tsx` - Add the `/enterprise` route

### Implementation Approach
1. Create the Enterprise Coming Soon page with your existing UI components
2. Add a simple toggle component to the Navbar
3. Register the new route in the router
4. Ensure mobile responsiveness for the toggle
