# Nikita Construction Company - Modern Construction Website

A modern, high-performance, and responsive website built for Nikita Construction Company, general contractors, civil engineers, and architectural builders.

---

## 🏗️ Highlights & Included Features

1. **Hero Section**
   - High-definition architectural imagery with subtle ambient motion
   - Structural geometric company logo & emblem
   - Exact Headline: *"Building Your Vision. Creating Your Future."*
   - Direct Call-to-Actions: **"Get a Free Quote"** & **"View Our Projects"**
   - Floating live statistics bar (Years of Experience, Completed Projects, Happy Clients, On-time Rate)

2. **About Us**
   - Dual-photo architectural layout with site engineers and modern completed structures
   - Company narrative emphasizing quality, engineering precision, and safety
   - Animated number counters that trigger when scrolled into view
   - 4 Core Pillars: Certified Quality, On-Time Delivery, Zero Hidden Costs, Dedicated Support

3. **Services (7 Dedicated Divisions)**
   - **Residential House Construction** (Custom villas, smart homes, duplexes)
   - **Commercial Building Construction** (High-rise complexes, mixed-use towers)
   - **Office Construction & Fitouts** (Corporate tech campuses, acoustic zoning)
   - **Shop & Retail Construction** (Showrooms, boutiques, storefront facades)
   - **Renovation & Remodeling** (Structural wall removal, MEP modernization)
   - **Civil & Structural Work** (Piling, foundation slabs, structural steel)
   - **Interior & Finishing Work** (Architectural millwork, marble/tile, plaster)
   - Interactive **"View Full Scope"** modal dialog displaying engineering deliverables for each service

4. **Projects Gallery**
   - Category filter pills: *All Projects*, *Houses*, *Buildings*, *Offices*, *Commercial & Shops*
   - Hover zoom effect, location tags, square footage, and completion year
   - Full-detail **Lightbox Modal** showing high-res photography, specifications table, and direct inquiry CTA

5. **Why Choose Us**
   - Quality Materials Only (Certified Grade-60 steel, slump concrete)
   - Experienced Team (OSHA-certified engineers & master craftspeople)
   - Transparent Pricing (Itemized BOQ billing, fixed-price contracts)
   - On-Time Completion (Milestone tracking & schedule commitments)
   - Professional Workmanship (Multi-stage QA/QC inspection checklist)
   - Dedicated Support (24/7 emergency response & warranty assistance)

6. **Our 4-Step Process**
   - Connected timeline: **01 Consultation** → **02 Planning & Design** → **03 Construction** → **04 Handover**

7. **Interactive Construction Cost Estimator (High-Value Feature)**
   - Allows prospective clients to select project type (Residential, Commercial, Office, Shop, Renovation)
   - Interactive square footage slider (1,000 to 30,000 sq.ft.)
   - Finish specification tiers (Standard, Premium Architectural, Ultra-Luxury Bespoke)
   - Live price range calculation with a **"Lock In This Estimate"** button that pre-fills the contact form

8. **Testimonials**
   - Verified client reviews from residential homeowners and commercial developers
   - 5-star ratings, client avatars, and project tags
   - Trust badge strip highlighting 4.9/5 rating, licensing, and safety records

9. **Contact Section & Google Maps**
   - Functional contact form (Full Name, Phone, Email, Project Type, Budget/Area, Message)
   - Direct click-to-call phone number
   - Direct WhatsApp button with pre-filled message
   - Direct mailto email address
   - Headquarters address & operating hours
   - Responsive Google Maps embed with location marker badge

10. **Footer & Quick Access**
    - Brand emblem, description, quick navigation links, services directory, contact info, social media buttons, and auto-updating copyright year

11. **Mobile & Accessibility Features**
    - Responsive sticky navigation bar with backdrop blur
    - Mobile slide-out drawer menu
    - Floating WhatsApp button with pulse radar animation
    - Smooth scroll-to-top button
    - Toast feedback alerts for submissions and quote requests

---

## 🎨 Architectural Design System

- **Primary Charcoal/Dark Obsidian**: `#0d0f13`, `#13171f`, `#1a202c`
- **Architectural White**: `#ffffff`, `#f8f9fb`
- **Concrete Gray Tones**: `#94a3b8`, `#64748b`, `#334155`, `#1e293b`
- **Construction Yellow / Safety Amber**: `#f59e0b`, `#fbbf24`, `#d97706`
- **Typography**: Google Fonts *Plus Jakarta Sans* & *Space Grotesk*

---

## 📝 How to Replace Company Placeholders

All company information is centralized in **`js/config.js`** and also tagged with HTML comments in **`index.html`** (`<!-- EDITABLE PLACEHOLDER: ... -->`).

### Option 1: Via `js/config.js` (Recommended)
Open `js/config.js` in any text editor and update the fields:

```javascript
const SITE_CONFIG = {
  company: {
    name: "YOUR COMPANY NAME",
    shortName: "YOUR BRAND",
    tagline: "Building Your Vision. Creating Your Future.",
    phone: "+1 (555) 000-0000",
    phoneRaw: "+15550000000",
    whatsapp: "+15550000000",
    email: "contact@yourcompany.com",
    address: "Your Street Address, City, State, ZIP",
    ...
  }
};
```
Any changes made in `config.js` automatically propagate to phone links, email links, WhatsApp buttons, and copy!

### Option 2: Directly in `index.html`
You can search for `EDITABLE PLACEHOLDER` in `index.html` to customize titles, phone numbers, addresses, Google Maps embed URL, or background images directly.

---

## 🚀 How to Run the Website

### Method 1: Direct File Open
Double click `index.html` in your file explorer. It will open instantly in any modern web browser (Chrome, Edge, Safari, Firefox) with zero setup required.

### Method 2: Local HTTP Server (Optional)
If you have Node.js installed, you can start a local development server from this directory:

```bash
# Using npx serve:
npx serve .

# Or using Python:
python -m http.server 8000
```
Then visit `http://localhost:8000` (or the port displayed).

---

## 📁 File Structure

```
├── index.html          # Semantic HTML5 webpage with all 9 sections
├── css/
│   └── styles.css      # Premium architectural CSS design system
├── js/
│   ├── config.js       # Centralized editable company placeholders & portfolio data
│   └── main.js         # Interactive controller (filters, modal, estimator, validation)
└── README.md           # Documentation and editing guide
```
