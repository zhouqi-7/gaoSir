# AGENTS.md - Gao Pro Drone Website

## Project Type
Simple Vue 3 + Vite single-page application (corporate website).

## Commands

```bash
npm run dev      # Start dev server (port 3000, auto-opens browser)
npm run build    # Build for production (output: dist/)
npm run preview  # Preview production build locally
```

## Key Paths
- Entry: `src/main.js`
- Router: `src/router/index.js`
- Global styles: `src/styles/global.scss`
- Path alias: `@` → `src/`

## Tech Stack
- Vue 3 (Composition API)
- Vite 5
- Element Plus 2.5
- Vue Router 4
- SCSS

## Architecture
- **Views** (`src/views/`): Page-level components with lazy loading
- **Components** (`src/components/`): Shared UI (Header, Footer, Sidebar, Breadcrumb)
- **Data** (`src/data/products.js`): Static product data
- Routes use dynamic import: `component: () => import('@/views/X.vue')`

## Quirks
- Dev server runs on port **3000** (not default 5173)
- Element Plus icons auto-registered globally in `main.js`
- No TypeScript
- No tests configured
- No linting/formatting (no ESLint, Prettier, or TypeScript)

## Chinese Content
Site is Chinese-language (zh-CN). Default `<html lang="zh-CN">`.
