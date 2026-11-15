# Editorial Minimal — design system

**Design reference**: `design/editorial-minimal-reference.png` is an AI-assisted concept visual and is **not** a screenshot of the actual site. Any face inside the reference is fictional; the web implementation uses the GitHub avatar of `Torrayz` directly.

Palette: charcoal `#191c20`, warm ivory `#f5f3ee`, muted slate `#91a8c0`, gray rule `#d6d5d0`. Typography uses the editorial Fraunces family paired with DM Sans for interface text. The fallback is Georgia/Arial.

Motion: Motion for React on hero text, navigation, project cards, and section reveal; GSAP ScrollTrigger on one oversized typography band. All transforms are CSS compositor-friendly. `prefers-reduced-motion` disables motion-intensive transitions.

Responsive: desktop 3-column hero (intro/portrait/bio) becomes intro+portrait on medium screens and a stacked hero on mobile. Project cards are 3-across desktop, 1-column mobile. Contact and credentials use readable field layouts.

Art-directed project covers are generated using CSS, not copied screenshots of external websites. Keep user identities, certificates and performance metrics tied to verified records.