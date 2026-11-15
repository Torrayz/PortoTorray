# Deployment and repository handoff

## Current release
- Project: `torrayz-editorial` (standalone Vercel project)
- Production alias: `https://torrayz-editorial.vercel.app`
- Project root: `/`
- Platform: Vercel / Next.js 16 / Node 22
- Source provided as a ZIP package; deployed directly from files, **not yet Git-connected**.
- The old `torrayz-studio.vercel.app` and `Torrayz/pemprogtugastri` remain unchanged.

## GitHub next step
The available GitHub integration in this ChatGPT environment cannot create repositories. Create a new **empty** GitHub repository `Torrayz/torrayz-editorial` (prefer public if this code is intended to serve as a portfolio), do not initialize with a README, then push the contents of this package to the `main` branch. Finally, connect that repository to the existing Vercel project and confirm the root directory `/`.

No destructive migration of the existing portfolio repository is necessary.

## Vercel env (publishable, safe for the browser)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Use Vercel Project Settings to configure those two values. Never use or expose a Supabase secret/service-role key.

## Content release checklist
1. Preview desktop & mobile on a real browser; confirm no unexpected horizontal scrolling.
2. Test all navigation links and project detail pages.
3. Test Contact submission once with a real inbox; keep test messages out of production records unless cleaned up intentionally.
4. Test admin login using an owner account; verify upload remains private.
5. Upload genuine certificates and publish only after reviewing titles/issuers/dates and any external verification URL.
6. Respect reduced motion; avoid unnecessary animations on low-power devices.

## Dedicated GitHub source
Source: https://github.com/Torrayz/PortoTorray (main). Root folder contains the Next.js App Router application and the original-colour SVG icons used in Skills & Tools. Use Git-integrated deployment or a reviewed source deployment. Never publish private Supabase keys.