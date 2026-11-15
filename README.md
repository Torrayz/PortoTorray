# PortoTorray — TORRAYZ / Editorial Minimal

Professional developer portfolio for **Tri Puji Antoro (Torrayz)**. Designed to follow the approved Editorial Minimal direction: dark charcoal hero, warm ivory sections, refined serif typography, muted slate accents, understated motion, real GitHub avatar, and readable project studies.

## Stack
Next.js 16 App Router, React 19, TypeScript, Motion for React, GSAP ScrollTrigger, custom CSS, Supabase PostgreSQL/Auth/Storage, GitHub public REST API.

## Local
Requires Node 22.

```bash
npm install
cp .env.example .env.local # Set ONLY publishable project values
npm run dev
npm run test
npm run typecheck
npm run build
```

## Supabase
Existing project: `torray-workspace` (`ndusjwlcvdovdjmivxkj`). The existing `portfolio_inquiries` contact table and `app_memberships` role `TORRAYZ_STUDIO` are reused. The new SQL migration in `supabase/credentials.sql` adds `portfolio_credentials` and a **private** Storage bucket `torrayz-private-credentials` with owner-only upload/view/delete policies. Never place secret/service-role keys in a `NEXT_PUBLIC_` variable.

Owner dashboard: `/admin` (no registration button), login with a Supabase account already assigned the `TORRAYZ_STUDIO` owner/admin role. Upload a JPG/PNG/WEBP/PDF up to 6MB, fill in title/issuer, and choose draft/published. Publishing requires either an uploaded proof file or an HTTPS verification URL, enforced by database constraint. Original proof documents remain private even when metadata is published. The public credentials page never automatically exposes an uploaded file.

Contact sends messages to `/api/contact`, which validates payload, origin, honeypot and elapsed time; the database also applies per-email rate limits. There is no automatic mail notification.

## GitHub
`/api/github` returns up to 100 public repositories owned by `Torrayz` via GitHub's unauthenticated API. Private repos are not included. Project identity covers are artistic CSS illustrations, **not verified real screenshots**.

## Deployment
New standalone Vercel project, root directory `/`. Existing `Torrayz/pemprogtugastri` repo and `torrayz-studio.vercel.app` are untouched. Dedicated source repository: `Torrayz/PortoTorray` (branch `main`). This was created by the user. The existing `torrayz-editorial.vercel.app` project may be linked to this repository without modifying any prior portfolio repository.

## Content & accuracy
- GitHub avatar URL uses the real user avatar rather than a synthetic portrait.
- Education, location and professional role are user-supplied; degree/tenure/cert dates are not invented.
- TOEFL/BNSP/programming are **categories only** until the owner uploads and publishes evidence.
- Omit unverified project metrics, awards, certificate IDs, and private repo implementation details.
- Architectural Luxury is intentionally NOT part of this implementation; it is reserved for a separate repo.

## Visual assets
Skills & Tools uses locally served original-colour SVG Devicon brand marks in `public/skill-logos/` (Devicon project; trademarks belong to their owners). The hero uses the actual Torrayz GitHub avatar, presented with editorial grayscale, cropping and framing; it does not synthesize a new face. For a high-resolution professional portrait, provide an original photo and replace the avatar URL with a properly authorized asset.