# Fresh Look Proposal for Portfolio Site

## Goals
- Deliver a polished single-page portfolio that feels intentional and recruiter-friendly.
- Improve mobile usability (nav parity, tap targets) and lighten cognitive load with clearer section hierarchy.
- Increase engagement with richer storytelling (metrics, visuals) while keeping performance lean (Tailwind CDN acceptable).

## Visual Direction
- **Palette:** Deep navy/indigo background, off-white text, vibrant accent (electric cyan or lime) for CTAs and highlights.
- **Typography:** Pair geometric sans for headings (e.g., `Poppins`/`Space Grotesk`) with humanist sans for body (`Inter`). Larger line-height for readability.
- **Shapes & Effects:** Rounded-2xl cards, soft shadows, glassy overlays on hero/nav, thin separators using gradients instead of hard borders.
- **Imagery:** Hero portrait updated with subtle frame; gallery uses masonry layout with descriptive captions.

## Layout & Content
1) **Global Navigation**
   - Add sticky, translucent nav with blur and accent underline on hover.
   - Mobile: hamburger + slide-down panel listing all sections; add skip-to-content link for accessibility.

2) **Hero**
   - Split layout: left for headline + value proposition (3 bullet highlights with icons), right for portrait and quick stats chips (location, time zone, availability).
   - Primary CTA: “Download Resume”; secondary: “View Projects”; tertiary inline link: “Book a call” (mailto or Calendly placeholder).
   - Add soft gradient backdrop and animated accent orbs for depth (CSS only, reduced-motion safe).

3) **About**
   - Short paragraph plus a 3-column fact grid (Years experience, Focus areas, Tools).
   - Add compact social buttons with icons (email, LinkedIn, GitHub) and hover rings.

4) **Resume Snapshot**
   - Convert to timeline rows with subtle left border accent; include GPA/expected grad.
   - Skills as pill tags grouped by category (CAD, Manufacturing, Analysis, Software).
   - Certifications presented as badges with issue date.

5) **Projects**
   - Use cards with thumbnail, title, 2–3 bullet impacts, and stack of tags (e.g., SolidWorks, FEA, Anodizing).
   - Add “View details” link anchor to optional modal or detail section; include metrics (weight reduction %, cost/time savings).

6) **Research & Writing**
   - Present as cards with publication year chip, 2-line summary, and “Read notes” link (PDF or modal stub).

7) **Leadership & Involvement**
   - Convert to horizontal scroll on mobile with card snaps; include role + timeframe + impact sentence.

8) **Image Gallery**
   - Masonry grid with aspect-ratio classes; each image has descriptive alt and caption overlay on hover/tap.
   - Replace missing asset with placeholder or remove broken entry.

9) **Contact**
   - Inline contact form (name, email, message) with validation and success/error states.
   - Keep external links as secondary actions; add subtle “response time” note.

10) **Footer**
    - Add mini navigation shortcuts and “Back to top” button; include last-updated date.

## Accessibility & Performance
- Respect `prefers-reduced-motion` for animations; ensure focus outlines are visible on all interactive elements.
- Color contrast at least 4.5:1 for text; test accent on dark backgrounds.
- Use semantic landmarks (`header`, `main`, `section`, `nav`, `footer`) and `aria-expanded` on mobile menu button.
- Optimize images via `loading="lazy"`, constrained width, and compressed hero/gallery assets.

## Implementation Outline
1) Update Tailwind config snippet in `index.html` for fonts/colors; add utility classes for gradient borders and focus styles.
2) Rebuild nav + hero markup for new layout and CTA structure; add small inline script for mobile menu toggle.
3) Refactor each section (`About`, `Resume`, `Projects`, `Research`, `Leadership`, `Gallery`, `Contact`, `Footer`) per above content/structure.
4) Add form validation script (vanilla JS) with aria-live region for messages; keep external links.
5) Refresh gallery images/paths and alt text; remove broken asset reference or replace with placeholder.
6) Run local accessibility pass (keyboard nav, focus order) and ensure responsive behavior down to 320px.

## Review Notes
- This proposal only describes the redesign; no code changes to the live site yet.
- On approval, I can implement iteratively and share diffs + screenshots before commit.

## Additional Suggestions
- **Content tailoring for recruiters:** Add a short “What I’m looking for” paragraph in the hero or about section that states target roles, locations, and start dates, plus a one-line availability badge near the CV button. Link to a one-page PDF résumé alongside the portfolio for quick download.
- **Proof of impact:** For each project card, include one metric (e.g., % weight reduction, hours saved, test cycles run) and a “My contribution” bullet so hiring managers can see personal ownership at a glance.
- **Evidence links:** Add optional links to design files or notebooks (view-only) and embed a short demo video for one flagship project (hosted on the existing assets path) to show build quality without requiring navigation away.
- **Contact responsiveness:** Display an expected reply time (e.g., “Replies within 24 hours”) and a calendar link placeholder for scheduling short calls; keep the form simple with inline validation to reduce friction.
- **Performance & tracking:** Compress hero/gallery assets (WebP where possible), enable `loading="lazy"` on non-critical images, and add a privacy-friendly analytics snippet (e.g., Plausible) so you can monitor recruiter engagement without cookies.
