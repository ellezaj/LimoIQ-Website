# Page backups

Snapshots of the site source taken before major redesigns. These files are
**not** part of the build (the folder is excluded in `tsconfig.json`, and
Tailwind only scans `src/`).

| Folder        | What it holds |
|---------------|---------------|
| `2026-11-06/` | The original home page (`/`), `/pricing`, `/product`, `/tour`, every component in `src/components`, `src/lib`, `globals.css`, `layout.tsx` and `tailwind.config.ts` — taken before the home page was replaced with the limoiq.app landing page copy. |

## What was removed from `src/` after this backup

These now exist **only** in `2026-11-06/src/`:

- `app/product/page.tsx` — the old `/product` route
- `components/About.tsx`, `Contact.tsx`, `FAQ.tsx`, `Hero.tsx`, `Pricing.tsx`,
  `ReservationWidget.tsx`, `RouteLine.tsx` — old home page sections
- `components/Header.tsx`, `Footer.tsx`, `PlatformTabs.tsx`,
  `PlaceholderShot.tsx` — old header/footer and the `/product` feature tabs
- `components/TourWatermark.tsx` — was imported by `/tour` but never rendered
- `lib/features.ts` — feature/tier data used by `PlatformTabs` and `Header`

The `.hero-container`, `.container-content` and `.eyebrow` styles were also
removed from `src/app/globals.css` (still present in the backed-up copy).

## Restoring the old site

To bring back the old home page and `/product` together:

```bash
cp backup/2026-11-06/src/app/page.tsx src/app/page.tsx
mkdir -p src/app/product && cp backup/2026-11-06/src/app/product/page.tsx src/app/product/
cp backup/2026-11-06/src/components/{About,Contact,FAQ,Hero,Pricing,ReservationWidget,RouteLine,Header,Footer,PlatformTabs,PlaceholderShot}.tsx src/components/
cp backup/2026-11-06/src/lib/features.ts src/lib/
cp backup/2026-11-06/src/app/globals.css src/app/globals.css
```

Note: the backed-up `globals.css` lacks the `.iq-container` class the new
landing components use, so only restore it if you are fully reverting.
