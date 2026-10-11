# sharanggupta.dev

My personal site: selected projects, open-source fixes, writing and experience.
Live at https://www.sharanggupta.dev

Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Where things live

- `content/`: every fact the site and the CV say (single source of truth).
- `app/`: the page, the layout (metadata, theme script, structured data) and the SEO routes
  (`robots.ts`, `sitemap.ts`, `manifest.ts`, generated social images and icons).
- `components/`: small presentational pieces.
- `scripts/generate-cv.mjs`: builds `public/cv.pdf` from `content/`.

## Commands

```bash
npm install
npm run dev        # local development on http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript check
npm run cv         # regenerate public/cv.pdf (Node 22.18 or newer)
```

After changing `content/`, run `npm run cv` and commit the new PDF.
