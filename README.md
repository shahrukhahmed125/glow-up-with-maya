# Glow Up with Maya — Luxury Aesthetics Website

A responsive multi-page static website built with HTML5, CSS3, vanilla JavaScript, jQuery, GSAP and GSAP ScrollTrigger.

## Run locally
1. Extract the ZIP.
2. Open the `glow-up-with-maya` folder.
3. Run a local static server from that folder, for example:
   - `python -m http.server 8000`
4. Visit `http://localhost:8000`.

You can also open `index.html` directly, but a local server is recommended for consistent browser behaviour.

## Pages
- `index.html` — homepage and cinematic pinned hero reveal
- `about.html` — brand story and practitioner placeholders
- `treatments.html` — searchable/filterable treatment directory
- `treatment-detail.html?treatment=...` — reusable treatment detail page
- `results.html` — gallery with filters and lightbox
- `reviews.html` — dual-direction testimonial slider demo
- `booking.html` — booking integration-ready enquiry preview
- `contact.html` — contact page and form preview
- `privacy-policy.html` — legal framework placeholder
- `terms.html` — legal framework placeholder

## Before launch — replace placeholders
- Add the approved logo and Maya's approved portrait.
- Add the clinic's verified address, phone, email, opening hours and social links.
- Add Maya's verified biography, qualifications and registration details.
- Replace demo review copy with genuine, permissioned customer reviews.
- Replace illustrative gallery photography with authorised clinic imagery where appropriate.
- Have treatment descriptions, risks, suitability, aftercare and all clinical information reviewed by the responsible practitioner.
- Connect the actual booking provider and secure form handling.
- Complete and obtain professional review of the privacy policy and terms.
- Review all public-facing content against current UK ASA/CAP, healthcare and data protection requirements.

## Image note
Current image URLs are remote Unsplash-hosted illustrative editorial photography. They are not genuine client treatment results and should be replaced with the clinic's approved imagery before launch.

## Motion and accessibility
- Desktop homepage uses GSAP ScrollTrigger pinning with a scrubbed inward reveal.
- Mobile uses a lighter parallax treatment.
- `prefers-reduced-motion` is respected.
- The custom cursor is disabled on touch devices.
- Mobile navigation, FAQ accordions, filters, gallery lightbox and form preview states are interactive.

## Booking and forms
The booking and contact forms are intentionally front-end previews. They do not send data, create appointments, or confirm bookings.


## Visual refinement pass
- Larger heading and paragraph typography with more spacious section rhythm.
- Premium animated preloader with emblem and progress line.
- Refined gold cursor with hover expansion, image VIEW state and magnetic buttons.
- Stronger pinned hero zoom and inward reveal on desktop.
- Scroll parallax on hero, page banners, editorial images and section content.
- Expanded responsive rules for wide tablets, tablets and small mobile screens.
- Reduced-motion and keyboard-focus handling retained.


## Hero-to-philosophy scroll fix
- Desktop hero pin now reserves its scroll space (`pinSpacing: true`).
- Removed the next-section transform/clip animation from the hero timeline.
- Reduced the pinned 3D sequence to one viewport of scroll and kept mobile unpinned.
- The philosophy section has its own opaque background and stacking context.
