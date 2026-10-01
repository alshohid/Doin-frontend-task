# ByteSpace — Next-Gen E-Learning & Creator Platform

A modern, high-performance e-learning web platform built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **GSAP**. 

This repository implements a pixel-perfect, responsive frontend design featuring interactive 3D mouse parallax animations, dynamic course filtering, client-side pagination, slug-based dynamic course details, and authentication flows.

---

## 🚀 Live Demo & Quick Start

### Prerequisites
- **Node.js** (v18.18.0 or higher recommended)
- **pnpm** / **npm**

### Installation

```bash
# Clone the repository
git clone https://github.com/alshohid/Doin-frontend-task.git

# Navigate to project directory
cd Doin-frontend-task

# Install dependencies
npm install
# or
pnpm install
```

### Running Locally

```bash
# Start development server
npm run dev
# or
pnpm dev
# or
bun dev

```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) | App Router, Server & Client Components, Turbopack build system |
| **UI Library** | [React 19](https://react.dev/) | Modern hooks, Suspense boundaries, strict lifecycle management |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type checking, interface contracts, safe models |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern CSS engine, custom color tokens, responsive utilities |
| **Animation** | [GSAP](https://gsap.com/) & `@gsap/react` | Hardware-accelerated 3D parallax, floating physics, mouse triggers |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG icon set |

---

## 🌟 Key Features

### 1. Home / Landing Page (`/`)
- **Smart Sticky Navbar**: Transparent overlay on hero banner; transitions into a frosted glassmorphism background (`backdrop-blur-md`) with compact height upon scrolling.
- **Interactive Mouse Parallax Hero**: Built with GSAP and `@gsap/react`. Features 3D tilting stat cards, floating geometry shapes (cones, toruses), and depth-of-field movement that reacts to mouse position without layout thrashing.
- **Ambient Floating Physics**: Dual-layer architecture separating continuous sine-wave floating animation from mouse interaction.
- **Skill Discovery & Carousel**: Interactive skill tags and curated course showcases.

### 2. Course Catalog & Filter System (`/courses`)
- **Hero Search Bar with Category Dropdown**: Reusable search component supporting text search and category select.
- **Multidimensional Filter Bar**:
  - Filter Popover: Filter by Price Range (`Under $25`, `$25-$35`, etc.) and Minimum Rating (`4.0+`, `4.5+`).
  - Level Dropdown: Filter by skill level (`Beginner`, `Intermediate`, `Advanced`).
  - Category Dropdown: Quick dropdown selection.
  - Sort Control: Sort by `Most relevant`, `Highest Rated`, `Newest`, `Price: Low to High`, `Price: High to Low`.
- **Category Pills**: Horizontal scrollable tabs with active states (`Featured`, `Music`, `Drawing & Painting`, `UI/UX Design`, `Marketing`, etc.).
- **Dynamic Client Pagination**: Custom circular pagination (`1 2 3 4 5` with Prev/Next buttons) controlling item slicing and smooth scrolling.

### 3. Dynamic Course Details Page (`/courses/[slug]`)
- **Dynamic Slug Routing**: Implemented using Next.js dynamic routes (`/courses/[slug]`) with SEO metadata generation (`generateMetadata`).
- **Overlapping Hero Header**:
  - Course metadata, ratings, student count badges, and an interactive copy-to-clipboard Share button.
  - Full-width video preview card with centered glassmorphism play button.
- **Interactive Content Tabs**:
  - **About**: In-depth course description, 4-item Sneak Peak thumbnail gallery, and Key Points checkmark list.
  - **Lessons**: Complete curriculum breakdown with duration per lesson.
  - **Reviews**: Verified student reviews and 5-star rating breakdowns.
- **Sticky Purchase Sidebar**: Displays total lesson count, pricing (`$25 /lifetime`), "Enroll Now" CTA, course perks, and instructor profile with biography.

### 4. Authentication Suite (`/login` & `/register`)
- **Consistent Visual Language**: Shared 3D geometric shape composition and floating "Happy Students" card.
- **Responsive Layout**: Two-column layout on desktop; gracefully transitions to a focused single-column form on mobile screens.
- **Modular Input Components**: Reusable floating label inputs with password visibility toggle.

---

## 🏗️ Architecture & Project Structure

The project follows a modular, feature-based and atomic component architecture ensuring high reusability, maintainability, and clean separation of concerns.

```text
Doin-frontend-task/
├── app/                              # Next.js App Router
│   ├── (auth)/                       # Auth route group (isolated layout)
│   │   ├── login/
│   │   │   └── page.tsx              # Sign In page
│   │   └── register/
│   │       └── page.tsx              # Sign Up page
│   ├── (public)/                     # Public route group (shares Navbar & Footer)
│   │   ├── layout.tsx                # Public layout with centralized Navbar
│   │   ├── page.tsx                  # Home page
│   │   ├── courses/
│   │   │   ├── page.tsx              # Courses catalog with search & filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Dynamic course details page
│   │   └── creators/
│   │       └── page.tsx              # Creators page
│   ├── layout.tsx                    # Root layout (fonts, metadata, global styles)
│   ├── loading.tsx                   # Global Suspense fallback
│   └── not-found.tsx                 # 404 error page
│
├── components/                       # UI & Feature Components
│   ├── auth/                         # Authentication components
│   │   ├── LoginForm.tsx             # Login form controls & social auth
│   │   ├── RegisterForm.tsx          # Register form controls
│   │   └── RegisterVisuals.tsx       # 3D composition & student cards
│   ├── courses/                      # Courses feature components
│   │   ├── CourseExplorer.tsx        # Client state manager for filtering & pagination
│   │   ├── CourseDetailsView.tsx     # Course details layout orchestrator
│   │   ├── course-details-data.ts    # Course details mock data & slug lookup
│   │   └── details/                  # Modular Course Details sub-components
│   │       ├── CourseDetailHeader.tsx# Course header, badges & share action
│   │       ├── CourseVideoPlayer.tsx # Video thumbnail with centered play button
│   │       ├── CourseContentTabs.tsx # About / Lessons / Reviews tabs
│   │       └── CourseSidebar.tsx     # Sticky enrollment & instructor sidebar
│   ├── home/                         # Landing page feature components
│   │   ├── HeroSection.tsx           # Clean Hero Section wrapper
│   │   ├── hero/                     # Hero sub-components & animations
│   │   │   ├── HeroContent.tsx       # Headings, taglines & search bar
│   │   │   ├── HeroVisuals.tsx       # Student image & 3D shapes
│   │   │   ├── HeroStatCards.tsx     # Floating highlight cards
│   │   │   ├── useHeroAnimation.ts   # Custom GSAP mouse parallax hook
│   │   │   └── constants.ts          # Hero constants & shape configurations
│   │   ├── DiscoverCourses.tsx       # Course discovery showcase
│   │   ├── DiverseLearning.tsx       # Value proposition section
│   │   ├── ProfessionalGrowth.tsx    # Growth highlights
│   │   ├── PotentialCreator.tsx      # Creator recruitment banner
│   │   ├── OurCommunity.tsx          # Community reviews & testimonials
│   │   └── TrustedBy.tsx             # Partner brand logos
│   ├── layout/                       # Layout components
│   │   ├── Navbar.tsx                # Smart sticky navigation bar
│   │   ├── navbar/                   # Navbar sub-components (Desktop & Mobile drawer)
│   │   └── Footer.tsx                # Global footer
│   └── reusable/                     # Core Design System & Reusable Components
│       ├── course-card.tsx           # Universal course card component
│       ├── course-grid.tsx           # Responsive course grid with dataset
│       ├── course-filter-bar.tsx     # Multidimensional filter bar component
│       ├── pagination.tsx            # Clean numeric pagination component
│       ├── search-bar.tsx            # Flexible search bar with dropdown
│       ├── input.tsx                 # Form input with validation styling
│       └── logo.tsx                  # Brand SVG logo
│
├── public/                           # Static assets
│   └── images/                       # Optimized web graphics & mock imagery
├── lib/
│   └── utils.ts                      # Class merging (`cn`) utility
├── tailwind.config.ts / postcss      # Tailwind CSS configuration
└── tsconfig.json                     # TypeScript configuration
```

---

## ⚡ Performance & Engineering Best Practices

1. **Turbopack Build Optimization**: Production builds compile in under **500ms** with zero TypeScript or lint errors.
2. **GPU-Accelerated GSAP Animations**: All animations target `x`, `y`, `rotateX`, `rotateY`, and `scale` to guarantee 60fps performance and avoid triggering browser layout repaints.
3. **Responsive Design**: Designed mobile-first, supporting viewport widths from 320px mobile screens up to 4K ultra-wide monitors.
4. **Hydration & SSR Safety**: Custom animation hooks only bind browser events on the client (`pointer: fine` query), avoiding hydration mismatch errors.
5. **Next.js Image Optimization**: Built-in Next.js `<Image />` component with `priority`, responsive `sizes`, and WebP delivery for ultra-fast Largest Contentful Paint (LCP).

---

## 📄 License

This project is developed as part of a frontend engineering assessment. All rights reserved.
