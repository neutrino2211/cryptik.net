# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for **Cryptik**, a cybersecurity startup based in Abuja, Nigeria. The company specializes in:
- Reverse engineering
- Red teaming
- Cybersecurity training

The team consists of industry experts providing professional security services.

## Brand Identity

The logo uses a distinctive color palette that should be reflected throughout the site:
- **Green**: `#7AB87A` (approximate - left crescent shape)
- **Yellow/Gold**: `#E5D073` (approximate - bottom right curve)
- **Black**: `#1C1C1C` (approximate - top right curve)
- **White**: Background and contrast elements

These colors should inform all design decisions, creating a professional yet approachable cybersecurity aesthetic.

## Technology Stack

- **Framework**: Astro 5.16.6
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4.1.18
- **Language**: TypeScript (strict mode)
- **Package Manager**: pnpm 10.11.0
- **Theme**: Dark mode by default

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start development server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm astro check` | Run Astro type checking |
| `pnpm astro add <integration>` | Add Astro integrations |

## Project Structure

```
src/
├── assets/          # Images, SVGs, and static assets
├── components/      # React components (.tsx) using Tailwind
├── content/         # Content collections (blog posts, whitepapers)
│   ├── blog/        # Blog posts in Markdown
│   ├── whitepapers/ # Whitepapers in Markdown
│   └── config.ts    # Content collection schemas
├── layouts/         # Page layouts (Layout.astro is the base layout)
├── pages/           # File-based routing
│   ├── blog/        # Blog index and [slug] template
│   ├── whitepapers/ # Whitepapers index and [slug] template
│   └── index.astro  # Homepage
└── styles/          # Global CSS (Tailwind imports and theme)
```

## Architecture Notes

### Astro + React Architecture
- **Component Islands**: Astro uses island architecture - React components are hydrated with `client:load`
- **File-based Routing**: Files in `src/pages/` automatically become routes
- **Layouts**: `Layout.astro` provides base HTML structure and imports global Tailwind CSS
- **Components**: All UI components are React (`.tsx`) with Tailwind styling

### Current Structure
- `Layout.astro`: Base HTML with dark mode class and Tailwind CSS import
- `index.astro`: Homepage that imports React components with `client:load` directive
- `src/components/`: React components (`.tsx`) using Tailwind utility classes
- `src/styles/global.css`: Tailwind imports and custom color theme

### Styling with Tailwind
- Custom brand colors defined in `global.css` using `@theme` directive:
  - `cryptik-green`: #7AB87A
  - `cryptik-gold`: #E5D073
  - `cryptik-dark`: #0A0A0A (background)
  - `cryptik-gray`: #1C1C1C (cards/sections)
- Use Tailwind utility classes throughout components
- Dark mode is default (html has `class="dark"`)

### TypeScript Configuration
- Uses Astro's strict TypeScript configuration
- JSX configured for React (`"jsx": "react-jsx"`)
- Type checking available via `pnpm astro check`

## Development Guidelines

### Component Development
- Create React components (`.tsx` files) in `src/components/`
- Use Tailwind utility classes for styling
- Import components with `client:load` in Astro pages for full interactivity
- Keep components functional and use hooks when needed
- Import assets directly for optimal bundling

### Styling with Tailwind
- Use Tailwind utility classes (e.g., `bg-cryptik-dark`, `text-cryptik-green`)
- Dark mode is enabled by default - design with dark backgrounds
- Brand colors are available as utilities: `bg-cryptik-green`, `text-cryptik-gold`, etc.
- Responsive design using Tailwind breakpoints (`md:`, `lg:`, etc.)
- Hover states and transitions using Tailwind (`hover:`, `transition-all`)
- Gradient text: `bg-gradient-to-r from-cryptik-green to-cryptik-gold bg-clip-text text-transparent`

### Content Focus
The landing page should emphasize:
1. Professional expertise in reverse engineering, red teaming, and training
2. Nigerian/Abuja-based presence (local credibility)
3. Industry experience and authority
4. Clear calls-to-action for potential clients
5. Trust signals (certifications, case studies, testimonials if available)

### Asset Management
- Place the Cryptik logo in `src/assets/` for optimization
- Use `.svg` format for logo to ensure crisp rendering at all sizes
- Import assets using `import logoPath from '../assets/logo.svg'`
- Public folder (`public/`) is for unprocessed assets like `favicon.svg`

## Content Management

### Adding Blog Posts
Create new Markdown files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
pubDate: 2025-12-17
author: "Cryptik Security Team"
tags: ["security", "tutorial", "threat-intelligence"]
---

# Your Content Here
Write your blog post content in Markdown...
```

### Adding Whitepapers
Create new Markdown files in `src/content/whitepapers/`:

```markdown
---
title: "Whitepaper Title"
description: "Comprehensive description"
pubDate: 2025-12-17
author: "Cryptik Research Team"
category: "Threat Intelligence"
downloadUrl: "#" # Optional PDF download link
---

# Your Whitepaper Content
Write your detailed research in Markdown...
```

### Content Collections Schema
Schemas are defined in `src/content/config.ts`:
- **Blog**: title, description, pubDate, author, tags[], image (optional)
- **Whitepapers**: title, description, pubDate, author, category, downloadUrl (optional), image (optional)

### Dynamic Routes
- Blog posts: `/blog/[slug]` - Auto-generated from Markdown files
- Whitepapers: `/whitepapers/[slug]` - Auto-generated from Markdown files

## Best Practices

- **No Over-engineering**: Keep the landing page focused and performant
- **Astro-first**: Leverage Astro's zero-JS-by-default approach
- **Semantic HTML**: Use proper heading hierarchy and semantic elements
- **Accessibility**: Include alt text, proper contrast ratios, keyboard navigation
- **Performance**: Optimize images, minimize dependencies, lazy-load when appropriate
- **Content Quality**: Write detailed, technical content for blog and whitepapers to establish authority
