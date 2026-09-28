<style>
/* ── Design tokens ─────────────────────────────────────── */
.home-wrap {
  --cream:      #FFFFFF;
  --warm-white: #FFFFFF;
  --ink:        #141B28;
  --ink-60:     rgba(20,27,40,0.6);
  --ink-30:     rgba(20,27,40,0.3);
  --ink-12:     rgba(20,27,40,0.12);
  --red:        #C23B2A;
  --red-soft:   #E8503C;
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;

  font-family: var(--font-body);
  background: var(--warm-white);
  color: var(--ink);
  /* `clip` (not `hidden`) here — mixing `hidden` on one axis with
     `visible` on the other makes the browser silently promote the
     visible axis to `auto`, turning this page-wide wrapper into its
     own scroll container with a second, redundant scrollbar. */
  overflow-x: clip;
  overflow-y: visible;
}

/* ── HERO ──────────────────────────────────────────────── */
.hero {
  position: relative;
  height: 100vh;
  min-height: 640px;
  display: flex;
  align-items: flex-end;
  padding: 0 80px 80px;
  overflow: hidden;
  background: var(--ink);
}

.hero-video-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}
.hero-video-bg video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  opacity: 0.45;
}

.hero-grad {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(170deg, transparent 40%, rgba(20,27,40,0.88) 100%),
    linear-gradient(to right, rgba(20,27,40,0.45) 0%, transparent 60%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
.hero-eyebrow-line {
  width: 32px;
  height: 1px;
  background: var(--red);
}
.hero-eyebrow span {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  font-family: var(--font-body);
}

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(64px, 8vw, 108px);
  font-weight: 300;
  line-height: 0.95;
  color: #fff;
  letter-spacing: -0.01em;
  margin-bottom: 28px;
}
.hero h1 em {
  font-style: italic;
  color: rgba(255,255,255,0.6);
}

.hero-sub {
  font-size: 15px;
  font-weight: 300;
  color: rgba(255,255,255,0.55);
  max-width: 420px;
  line-height: 1.75;
  margin-bottom: 40px;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--red);
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 14px 28px;
  transition: background 0.2s, gap 0.2s;
  cursor: pointer;
  border: none;
}
.hero-cta:hover { background: var(--red-soft); gap: 16px; }
.hero-cta svg { width: 16px; height: 16px; flex-shrink: 0; }

.hero-scroll-indicator {
  position: absolute;
  bottom: 40px;
  right: 80px;
  z-index: 2;
  writing-mode: vertical-lr;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
}
.hero-scroll-indicator::after {
  content: '';
  display: block;
  width: 1px;
  height: 48px;
  background: rgba(255,255,255,0.2);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.2; }
  50%       { opacity: 0.7; }
}



/* ── ABOUT ─────────────────────────────────────────────── */
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 580px;
}
.about-visual {
  position: relative;
  overflow: hidden;
  background: var(--cream);
}
.about-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.85;
  filter: grayscale(15%);
  transition: transform 0.8s ease, opacity 0.4s;
}
.about-visual:hover img { transform: scale(1.03); opacity: 0.92; }
.about-visual-tag {
  position: absolute;
  bottom: 32px;
  left: 32px;
  background: rgba(20,27,40,0.72);
  color: rgba(255,255,255,0.65);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 6px 12px;
  font-family: var(--font-body);
}
.about-content {
  padding: 96px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--warm-white);
}
.about-content h2 {
  font-family: var(--font-display);
  font-size: clamp(30px, 3.2vw, 50px);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
  color: var(--ink);
}
.about-content p {
  color: var(--ink-60);
  font-size: 15px;
  line-height: 1.8;
  max-width: 420px;
  margin-bottom: 36px;
}

/* ── SECTION LABEL ─────────────────────────────────────── */
.section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}
.section-label-line {
  width: 24px;
  height: 1px;
  background: var(--red);
  flex-shrink: 0;
}
.section-label span {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  font-weight: 500;
  font-family: var(--font-body);
}
.section-label.light span { color: rgba(255,255,255,0.4); }
.section-label.light .section-label-line { background: rgba(255,255,255,0.3); }

/* ── TEXT LINK ─────────────────────────────────────────── */
.text-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--ink-30);
  padding-bottom: 2px;
  transition: gap 0.2s, border-color 0.2s;
}
.text-link:hover { gap: 14px; border-color: var(--ink); }

/* ── HOLDINGS filmstrip ──────────────────────────────────── */
.holdings {
  background: var(--cream);
  padding: 96px 80px;
}
.holdings-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 56px;
}
.holdings-header h2 {
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 62px);
  font-weight: 300;
  line-height: 1.05;
  max-width: 600px;
  color: var(--ink);
}
.holdings-count {
  font-family: var(--font-display);
  font-size: 96px;
  font-weight: 300;
  color: var(--ink-12);
  line-height: 1;
  letter-spacing: -0.04em;
  user-select: none;
}
.filmstrip-scene {
  position: relative;
}
.filmstrip-scene::before,
.filmstrip-scene::after {
  content: '';
  position: absolute;
  left: -8%;
  width: 116%;
  /* Scales with viewport width (not with the shorter mobile image
     height) so the elliptical curve keeps the same shallow depth
     it has on desktop instead of eating a third of a mobile-height
     photo and warping into a fisheye shape. */
  height: clamp(24px, 9vw, 130px);
  background: var(--cream);
  pointer-events: none;
  z-index: 2;
}
.filmstrip-scene::before {
  top: 0;
  border-radius: 0 0 50% 50%;
}
.filmstrip-scene::after {
  bottom: 82px;
  border-radius: 50% 50% 0 0;
}
.filmstrip {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 2px;
  scrollbar-width: none;
}
.filmstrip::-webkit-scrollbar { display: none; }
.film-item {
  flex: 1 0 0;
  min-width: 160px;
  scroll-snap-align: start;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}
.film-img-wrap {
  position: relative;
  overflow: hidden;
  height: 720px;
  background: var(--ink);
}
.film-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(15%) contrast(1.08) brightness(0.88) saturate(0.85);
  transition: transform 0.6s ease, filter 0.5s;
}
.film-item:hover .film-img { transform: scale(1.04); filter: grayscale(0%) contrast(1.12) brightness(0.82) saturate(1); }
.film-cinematic {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    linear-gradient(to bottom, rgba(10,15,30,0.55) 0%, transparent 35%, transparent 60%, rgba(10,15,30,0.65) 100%),
    linear-gradient(to right, rgba(10,15,30,0.2) 0%, transparent 20%, transparent 80%, rgba(10,15,30,0.2) 100%);
}
.film-hover-title {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20,27,40,0.45);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
  padding: 24px;
  text-align: center;
}
.film-item:hover .film-hover-title { opacity: 1; }
.film-hover-title span {
  font-family: var(--font-display);
  font-size: clamp(18px, 1.8vw, 28px);
  font-weight: 400;
  color: #fff;
  line-height: 1.2;
  letter-spacing: -0.01em;
}
.film-num {
  position: absolute;
  top: 16px;
  left: 16px;
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.15em;
  color: rgba(255,255,255,0.45);
  z-index: 4;
}
.film-arrow {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(255,255,255,0.28);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.3s, transform 0.3s;
}
.film-item:hover .film-arrow { opacity: 1; transform: translateY(0); }
.film-arrow svg { width: 12px; height: 12px; stroke: #fff; }
.film-info { padding: 16px 0 0; }
.film-tag {
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 5px;
  font-family: var(--font-body);
  font-weight: 500;
}
.film-name {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 400;
  color: var(--ink);
  line-height: 1.2;
  margin-bottom: 4px;
  /* Kept to one line so the info block's height stays constant —
     the curved mask above it (.filmstrip-scene::after) is offset by
     a fixed pixel amount tuned for a single-line name; letting this
     wrap pushes the block taller and the mask ends up overlapping
     the tag/name instead of stopping just above them. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.film-loc {
  font-size: 11px;
  color: var(--ink-60);
  letter-spacing: 0.03em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: var(--font-body);
}

/* ── MISSION ───────────────────────────────────────────── */
.mission {
  background: var(--ink);
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 680px;
}
.mission-left {
  padding: 96px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mission-left h2 {
  font-family: var(--font-display);
  font-size: clamp(40px, 4vw, 60px);
  font-weight: 300;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 8px;
}
.mission-left h2 em { font-style: italic; color: var(--red); }
.mission-left > p {
  color: rgba(255,255,255,0.42);
  font-size: 14px;
  line-height: 1.85;
  max-width: 380px;
  margin-bottom: 40px;
}
.mission-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(255,255,255,0.18);
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 12px 24px;
  transition: border-color 0.2s, color 0.2s, gap 0.2s;
  align-self: flex-start;
  font-family: var(--font-body);
}
.mission-cta:hover { border-color: rgba(255,255,255,0.5); color: #fff; gap: 16px; }
.mission-right {
  padding: 96px 80px;
  border-left: 1px solid rgba(255,255,255,0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pillar {
  padding: 26px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 18px;
  align-items: start;
}
.pillar:first-child { border-top: 1px solid rgba(255,255,255,0.06); }
.pillar-num {
  font-family: var(--font-display);
  font-size: 12px;
  color: var(--red);
  padding-top: 2px;
  letter-spacing: 0.05em;
}
.pillar h3 {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.78);
  letter-spacing: 0.02em;
  margin-bottom: 5px;
}
.pillar p {
  font-size: 12px;
  color: rgba(255,255,255,0.32);
  line-height: 1.7;
}

/* ── PROCESS ───────────────────────────────────────────── */
.process {
  padding: 96px 80px 0;
  background: var(--warm-white);
  overflow: visible;
}
.process > h2 {
  font-family: var(--font-display);
  font-size: clamp(34px, 3.8vw, 54px);
  font-weight: 300;
  margin-bottom: 64px;
  line-height: 1.1;
  color: var(--ink);
}
/* ── PROCESS · crown-shaped photo arc ───────────────────── */
.fan-pin {
  position: relative;
  padding-top: 8px;
  overflow: visible;
}
.fan-stage {
  --fan-headroom: clamp(56px, 7vw, 96px);
  --fan-bottom-edge-fade: clamp(120px, 14vw, 220px);
  /* Full-bleed: the arc's outer cards crop right at the viewport edge
     regardless of the section's own side padding. */
  position: relative;
  isolation: isolate;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  height: calc(clamp(300px, 34vw, 460px) + var(--fan-headroom));
  /* Only clip horizontally — the pivot-based rotation can lift cards
     above the box's top edge, and a vertical clip would slice a flat
     line across their tops regardless of each card's own tilt.
     Uses `clip` rather than `hidden`: mixing `hidden` on one axis with
     `visible` on the other makes the browser silently promote the
     visible axis to `auto`, which would turn this into its own scroll
     container and produce a second, redundant scrollbar. */
  overflow-x: clip;
  overflow-y: visible;
  /* Fade the stage boundary itself so cards dissolve at the real edge
     instead of looking washed out before they get there. */
  -webkit-mask-image:
    linear-gradient(to right, transparent, #000 10%, #000 90%, transparent),
    linear-gradient(to bottom, #000 0%, #000 calc(100% - var(--fan-bottom-edge-fade)), transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to right, transparent, #000 10%, #000 90%, transparent),
    linear-gradient(to bottom, #000 0%, #000 calc(100% - var(--fan-bottom-edge-fade)), transparent 100%);
  mask-composite: intersect;
}
.fan-card {
  position: absolute;
  top: var(--fan-headroom);
  left: 50%;
  width: clamp(96px, 12vw, 170px);
  aspect-ratio: 1 / 1;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 24px 48px rgba(0,0,0,0.18);
  will-change: transform, opacity;
}
.fan-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.fan-caption {
  position: absolute;
  left: 50%;
  top: 62%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: min(90vw, 360px);
  pointer-events: none;
  z-index: 3;
}
.fan-caption-name {
  display: block;
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 300;
  font-style: italic;
  color: var(--ink-60);
}
.fan-caption-loc {
  display: block;
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ink-30);
  margin-top: 6px;
}
.holdings-map-wrap {
  /* Full-bleed like .fan-stage, so the map spans the entire viewport
     width regardless of the section's own side padding. Centered via
     margin (not transform) because this element also carries
     data-aos="fade-up", and AOS's own translateY transform would
     otherwise clobber a transform-based centering trick. */
  position: relative;
  z-index: 2;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  height: 100vh;
  margin-top: 56px;
  margin-bottom: -48px;
  overflow: hidden;
  -webkit-mask-image:
    linear-gradient(to right, transparent, #000 10%, #000 90%, transparent),
    linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-composite: source-in;
  mask-image:
    linear-gradient(to right, transparent, #000 10%, #000 90%, transparent),
    linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent);
  mask-composite: intersect;
}

/* ── PARTNERS ──────────────────────────────────────────── */
.partners {
  background: var(--cream);
  padding: 80px;
}
.partners-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}
.partners-header h2 {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 400;
  line-height: 1.25;
  color: var(--ink);
}
.partners-header h2 em { font-style: italic; font-weight: 300; }
.partners-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: var(--ink-12);
  margin-bottom: 2px;
}
.partner-group {
  background: var(--warm-white);
  padding: 36px 40px;
}
.partner-group-label {
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-30);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
}
.partner-group-label span {
  display: inline-block;
  background: var(--ink-12);
  padding: 2px 8px;
  border-radius: 2px;
}
.partner-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid var(--ink-12);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--ink);
}
.partner-item:last-child { border-bottom: none; }
.partner-logo {
  width: 36px;
  height: 36px;
  background: var(--ink-12);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--ink-60);
  flex-shrink: 0;
  font-family: var(--font-body);
}
.partners-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 40px;
  background: var(--warm-white);
}
.partners-cta p {
  font-size: 14px;
  color: var(--ink-60);
}
.partners-cta p strong {
  display: block;
  color: var(--ink);
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 4px;
}
.cta-dark {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--ink);
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 14px 28px;
  transition: background 0.2s, gap 0.2s;
  font-family: var(--font-body);
}
.cta-dark:hover { background: #2d2a25; gap: 16px; }
.cta-dark svg { width: 16px; height: 16px; flex-shrink: 0; }

/* ── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 900px) {
  .hero { padding: 0 32px 60px; }
  .hero-scroll-indicator { right: 32px; }
  .about { grid-template-columns: 1fr; }
  .about-visual { min-height: 340px; }
  .about-content { padding: 64px 32px; }
  .holdings { padding: 64px 32px; }
  .film-item { min-width: 120px; }
  .film-img-wrap { height: 400px; }
  .mission { grid-template-columns: 1fr; }
  .mission-left { padding: 64px 32px; }
  .mission-right { padding: 64px 32px; border-left: none; border-top: 1px solid rgba(255,255,255,0.06); }
  .process { padding: 64px 32px 0; }
  .holdings-map-wrap { height: 100vh; }
  .partners { padding: 64px 32px; }
  .partners-grid { grid-template-columns: 1fr; }
  .partners-cta { flex-direction: column; gap: 24px; align-items: flex-start; }
}

@media (max-width: 600px) {
  .hero { padding: 0 24px 48px; }
  .film-item { min-width: 100px; }
  .film-img-wrap { height: 300px; }
  .fan-card { box-shadow: 0 14px 28px rgba(0,0,0,0.16); }
  .fan-caption-name { font-size: 18px; }
  .holdings-map-wrap { height: 100vh; }
  .holdings-header { flex-direction: column; align-items: flex-start; gap: 12px; }
  .holdings-count { font-size: 64px; }
  .partners-header { flex-direction: column; align-items: flex-start; gap: 20px; }
}
</style>

<template>
  <div class="home-wrap">

    <!-- ── HERO ─────────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-video-bg">
        <HlsVideo
          src="https://stream.fastpix.io/e17ad6d3-234f-4a29-9c8c-cc8f3d4f5a11.m3u8"
          :autoplay="true" :loop="true" :muted="true" :playsinline="true" preload="metadata"
        />
      </div>
      <div class="hero-grad" />

      <div class="hero-content">
        <div class="hero-eyebrow">
          <div class="hero-eyebrow-line" />
          <span>Est. Philippines · Since 2018</span>
        </div>
        <h1>Building<br><em>Legacies.</em></h1>
        <p class="hero-sub">{{ t.homeParagraph1 }}</p>
        <router-link to="/property" class="hero-cta">
          {{ t.ourBusiness || 'Explore Holdings' }}
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </router-link>
      </div>

      <div class="hero-scroll-indicator">Scroll</div>
    </section>



    <!-- ── ABOUT ─────────────────────────────────────────── -->
    <section class="about">
      <div class="about-visual" data-aos="fade" data-aos-duration="800">
        <img src="/eishi/stock_images/8.webp" alt="Eishi Group" />
        <div class="about-visual-tag">Est. Philippines · 2018</div>
      </div>
      <div class="about-content">
        <div>
          <div class="section-label" data-aos="fade-up">
            <div class="section-label-line" />
            <span>{{ t.aboutUs || 'About Eishi' }}</span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="80">
            Eishi is the operating arm<br>of E-Partners, driving<br>industrial-scale growth<br>in the Philippines.
          </h2>
          <p data-aos="fade-up" data-aos-delay="160">{{ t.homeParagraph2 }}</p>
          <router-link to="/about" class="text-link" data-aos="fade-up" data-aos-delay="240">
            {{ t.moreAboutEishi || 'Learn more about Eishi' }}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ── HOLDINGS ──────────────────────────────────────── -->
    <section class="holdings">
      <div class="holdings-header">
        <div class="section-label" data-aos="fade-up">
          <div class="section-label-line" />
          <span>{{ t.ourBusiness || 'Our Business Holdings' }}</span>
        </div>
        <h2 data-aos="fade-up" data-aos-delay="80">{{ t.assignedProperties || 'Operating &amp; Managed Properties' }}</h2>
      </div>

      <div class="filmstrip-scene">
      <div class="filmstrip">
        <router-link
          v-for="(p, i) in holdingCards"
          :key="p.route"
          :to="p.route"
          class="film-item"
          data-aos="fade-up"
          :data-aos-delay="i * 60"
        >
          <div class="film-img-wrap">
            <img :src="p.img" :alt="p.name" class="film-img" />
            <div class="film-cinematic" />
            <span class="film-num">{{ twoDigits(i + 1) }}</span>
            <div class="film-hover-title"><span>{{ p.name }}</span></div>
            <div class="film-arrow">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </div>
          </div>
          <div class="film-info">
            <div class="film-tag">{{ p.tag }}</div>
            <div class="film-name">{{ p.name }}</div>
            <div class="film-loc">{{ p.location }}</div>
          </div>
        </router-link>
      </div>
      </div>
    </section>

    <!-- ── MISSION & VISION ──────────────────────────────── -->
    <section class="mission">
      <div class="mission-left">
        <div>
          <div class="section-label light" data-aos="fade-up">
            <div class="section-label-line" />
            <span>{{ t.missionVision || 'Mission &amp; Vision' }}</span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="80">
            {{ t.yourVission || 'Your Vision,' }}<br><em>{{ t.ourMission || 'Our Mission.' }}</em>
          </h2>
          <p data-aos="fade-up" data-aos-delay="160">{{ t.missionDescription }}</p>
        </div>
        <router-link to="/about" class="mission-cta" data-aos="fade-up" data-aos-delay="240">
          {{ t.moreAboutEishi || 'Learn About Eishi' }}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </router-link>
      </div>

      <div class="mission-right">
        <div
          v-for="(card, i) in cards"
          :key="card.title"
          class="pillar"
          data-aos="fade-up"
          :data-aos-delay="i * 60"
        >
          <div class="pillar-num">{{ twoDigits(i + 1) }}</div>
          <div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── PROCESS ───────────────────────────────────────── -->
    <section class="process">
      <div class="section-label" data-aos="fade-up">
        <div class="section-label-line" />
        <span>How Eishi Works</span>
      </div>
      <h2 data-aos="fade-up" data-aos-delay="80">A simple, trusted<br>partnership process.</h2>

      <div class="fan-pin" ref="fanPin">
        <div class="fan-stage" ref="fanStage">
          <div
            v-for="(item, i) in fanImages"
            :key="i"
            class="fan-card"
          >
            <img :src="item.img" :alt="item.name" class="fan-card-img" />
          </div>

          <div class="fan-caption">
            <span class="fan-caption-name">{{ activeFanItem.name }}</span>
            <span class="fan-caption-loc">{{ activeFanItem.location }}</span>
          </div>
        </div>
      </div>

      <div class="holdings-map-wrap" data-aos="fade-up">
        <HoldingsMap :locations="holdingsMapLocations" />
      </div>
    </section>

    <!-- ── PARTNERS ───────────────────────────────────────── -->
    <section class="partners">
      <div class="partners-header">
        <div>
          <div class="section-label" data-aos="fade-up">
            <div class="section-label-line" />
            <span>{{ t.ourPartner || 'Our Partners' }}</span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="80">
            Trusted by <em>world-class</em><br>organisations
          </h2>
        </div>
        <router-link to="/partnership_opportunities" class="text-link" data-aos="fade-up">
          {{ t.becomePartner || 'Become a Partner' }}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </router-link>
      </div>

      <div class="partners-grid" data-aos="fade-up">
        <div class="partner-group">
          <div class="partner-group-label"><span>JP</span> Japan</div>
          <div v-for="p in jpPartners" :key="p.abbr" class="partner-item">
            <div class="partner-logo">{{ p.abbr }}</div>
            {{ p.name }}
          </div>
        </div>
        <div class="partner-group">
          <div class="partner-group-label"><span>PH</span> Philippines</div>
          <div v-for="p in phPartners" :key="p.abbr" class="partner-item">
            <div class="partner-logo">{{ p.abbr }}</div>
            {{ p.name }}
          </div>
        </div>
      </div>

      <div class="partners-cta" data-aos="fade-up">
        <p>
          <strong>Interested in working with Eishi Group?</strong>
          {{ t.partnershipOpportunitiesP1 || "We're always open to meaningful partnerships." }}
        </p>
        <router-link to="/partnership_opportunities" class="cta-dark">
          {{ t.becomePartner || 'パートナーになる' }}
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </router-link>
      </div>
    </section>

  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useLanguageStore } from '~/stores/languageStore'
import HlsVideo from '~/components/HlsVideo.vue'
import HoldingsMap from '~/components/HoldingsMap.vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'HomeView',
  components: { HlsVideo, HoldingsMap },

  data() {
    return {
      cards: [],
      activeFanIndex: 0,

      jpPartners: [
        { abbr: 'EP', name: 'E.Partners Co., Ltd.' },
        { abbr: 'M',  name: 'Meishin Group Co., Ltd.' },
      ],
      phPartners: [
        { abbr: 'DA', name: 'Domogan & Associates Law Office' },
        { abbr: 'DC', name: 'The Law Firm of Domogan, Chan and Mabalot' },
      ],
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),

    holdingCards() {
      return [
        { route: '/business_holdings/feed_mill',               tag: 'Agriculture', name: this.t.feedMillDetails?.businessNameValue || 'Feed Mill',    location: this.t.sanJoseMunicipality || 'San Jose, Batangas',     img: '/eishi/feed_mill/images/Gemini_Generated_Image_6b94vl6b94vl6b94.png',                                                                    wide: true },
        { route: '/business_holdings/car_rental',              tag: 'Transport',   name: this.t.carRental || 'Car Rental Business',                   location: this.t.carRentalLocation || 'Metro Manila',             img: '/eishi/car_rental/images/car01.png',                                                                     wide: false },
        { route: '/business_holdings/batangas/poultry_farm',   tag: 'Agriculture', name: this.t.poultryFarm || 'Poultry Farm',                        location: this.t.sanJoseMunicipality || 'San Jose, Batangas',     img: '/eishi/batangas_tokyo_farm/images/Gemini_Generated_Image_pamyzvpamyzvpamy.png',                                                              wide: false },
        { route: '/business_holdings/pangasinan_farm',         tag: 'Agriculture', name: this.t.pangasinanFarm || 'Pangasinan Farm',                   location: 'Balungao, Pangasinan · 240,500 m²',                    img: '/eishi/pangasinan_farm/images/Gemini_Generated_Image_cs6b9xcs6b9xcs6b.png',                      wide: false },
        { route: '/business_holdings/kalinga_residential',     tag: 'Real Estate', name: this.t.residentialLands || 'Residential Lands',              location: this.t.tabukKalinganProvince || 'Tabuk, Kalinga · 42 lots', img: '/eishi/kalinga_residential/images/Gemini_Generated_Image_yuh9kbyuh9kbyuh9.png',                                                  wide: false },
        { route: '/business_holdings/cebu_condominium',        tag: 'Real Estate', name: this.t.cebuCondo || 'Cebu Condominiums',                     location: 'Cebu City CBD · 1,016 units',                          img: '/eishi/cebu_condo/images/20240626_094216.webp',                                                           wide: true },
      ]
    },

    fanImages() {
      const h = this.holdingCards
      // Three images per holding, evenly spaced so the ring closes into
      // a full 360° circle (18 cards × 20° apart) with no empty gap.
      return [
        { img: h[0].img,                                                                          name: h[0].name, location: h[0].location },
        { img: '/eishi/feed_mill/images/new-hero.jpeg',                                           name: h[0].name, location: h[0].location },
        { img: '/eishi/feed_mill/images/production-1.jpg',                                        name: h[0].name, location: h[0].location },
        { img: h[1].img,                                                                          name: h[1].name, location: h[1].location },
        { img: '/eishi/car_rental/images/car03.webp',                                             name: h[1].name, location: h[1].location },
        { img: '/eishi/car_rental/images/car02.webp',                                             name: h[1].name, location: h[1].location },
        { img: h[2].img,                                                                          name: h[2].name, location: h[2].location },
        { img: '/eishi/batangas_tokyo_farm/images/Poultry-Farm.webp',                             name: h[2].name, location: h[2].location },
        { img: '/eishi/batangas_tokyo_farm/images/66eef9be9036e731ae73337bde23afa1.webp',         name: h[2].name, location: h[2].location },
        { img: h[3].img,                                                                          name: h[3].name, location: h[3].location },
        { img: '/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.webp', name: h[3].name, location: h[3].location },
        { img: '/eishi/pangasinan_farm/images/dji_fly_20250311_152206_0041_1741678733665_photo.webp', name: h[3].name, location: h[3].location },
        { img: h[4].img,                                                                          name: h[4].name, location: h[4].location },
        { img: '/eishi/kalinga_residential/images/DJI_0591-min.webp',                             name: h[4].name, location: h[4].location },
        { img: '/eishi/kalinga_residential/images/DJI_0595-min.webp',                              name: h[4].name, location: h[4].location },
        { img: h[5].img,                                                                          name: h[5].name, location: h[5].location },
        { img: '/eishi/cebu_condo/images/20240626_094939.webp',                                   name: h[5].name, location: h[5].location },
        { img: '/eishi/cebu_condo/images/20250415_141241.webp',                                   name: h[5].name, location: h[5].location },
      ]
    },

    activeFanItem() {
      return this.fanImages[this.activeFanIndex] || this.fanImages[0]
    },

    holdingsMapLocations() {
      const h = this.holdingCards
      return [
        { lng: 121.0034,   lat: 13.8797,   name: h[0].name, address: this.t.sanJoseMunicipality || 'Municipality of San Jose, Batangas' },      // Feed Mill · San Jose, Batangas
        { lng: 120.9842,   lat: 14.5995,   name: h[1].name, address: this.t.carRentalLocation || 'Metro Manila and surrounding regions' },       // Car Rental · Metro Manila
        { lng: 121.0034,   lat: 13.8797,   name: h[2].name, address: this.t.sanJoseMunicipality || 'Municipality of San Jose, Batangas' },        // Poultry Farm · San Jose, Batangas
        { lng: 120.671343, lat: 15.868633, name: h[3].name, address: this.t.balungaoLocation || 'Balungao, Pangasinan, Philippines' },            // Pangasinan Farm · Balungao
        { lng: 121.4447,   lat: 17.4179,   name: h[4].name, address: this.t.kalingaLocationValue || 'Near Kalinga Capitol, Tabuk City, Kalinga' }, // Kalinga Residential · Tabuk
        { lng: 123.905247, lat: 10.316006, name: h[5].name, address: this.t.solineaLocationValue || 'Cebu City, Central Business District; near Metro Cebu Mall, Ayala Center, SM Cebu City' }, // Cebu Condominiums · Cebu City
      ]
    },
  },

  watch: {
    t: {
      handler(newT) {
        this.cards = [
          { title: newT.builtOnTrustTitle,       description: newT.builtOnTrustDescription },
          { title: newT.foodSecurityTitle,        description: newT.foodSecurityDescription },
          { title: newT.foreignInvestmentsTitle,  description: newT.foreignInvestmentsDescription },
          { title: newT.impactfulProjectsTitle,   description: newT.impactfulProjectsDescription },
          { title: newT.expandingFarmsTitle,      description: newT.expandingFarmsDescription },
          { title: newT.growthInnovationTitle,    description: newT.growthInnovationDescription },
        ]
      },
      immediate: true,
      deep: true,
    },
  },

  mounted() {
    this.$nextTick(() => {
      const pinEl = this.$refs.fanPin
      const stage = this.$refs.fanStage
      if (!pinEl || !stage) return

      const cards = Array.from(stage.children).filter((el) => el.classList.contains('fan-card'))
      const n = cards.length
      if (!n) return

      gsap.set(cards, { xPercent: -50 })

      // Every card starts stacked at the same top-center spot and gets
      // its transform-origin pushed straight down to the arc's shared
      // center, `radius` below. With that pivot in place, a plain
      // `rotate` swings the whole card along the arc by itself — no
      // separate x/y translation needed — so cards revolve around one
      // common point instead of each spinning on its own axis.
      const stepAngle = 14 // degrees between adjacent cards on the arc
      const radius = window.innerWidth < 600 ? 230 : window.innerWidth < 900 ? 380 : 560
      cards.forEach((el) => { el.style.transformOrigin = `50% calc(100% + ${radius}px)` })

      // The stage clips cards at the real viewport edge (it's full-bleed
      // 100vw), which happens well before a card's true 90° horizon.
      // Rescale the fade so opacity actually hits 0 right at that edge
      // instead of getting clipped while still opaque.
      const halfWidth = window.innerWidth / 2
      const visibleTheta = Math.asin(Math.min(0.98, halfWidth / radius)) * 180 / Math.PI
      const fadeScale = 90 / visibleTheta

      // No pin — the page keeps scrolling freely. The end point is a
      // fixed distance well beyond this (short) section's own height, so
      // progress never reaches 1 — and the rotation never stops — for as
      // long as the arc is actually still on screen.
      this._fanScrollTrigger = ScrollTrigger.create({
        trigger: pinEl,
        start: 'top bottom',
        end: '+=3000',
        scrub: 0.7,
        onUpdate: (self) => {
          const centerIndex = self.progress * n
          let bestIndex = 0
          let bestFront = -Infinity

          cards.forEach((el, i) => {
            // Distance wraps circularly (shortest way round the full
            // set), so the crown is always a full, symmetric fan around
            // whichever image is currently centered — instead of
            // collapsing one-sided once centerIndex nears either end.
            let dist = i - centerIndex
            dist = ((dist % n) + n + n / 2) % n - n / 2
            const theta = dist * stepAngle
            const rad = theta * Math.PI / 180
            // A card only exists on the front half of the circle — it
            // fades to nothing right at the visible edge, not before.
            const fadeRad = theta * fadeScale * Math.PI / 180
            const front = Math.max(0, Math.cos(fadeRad))
            const scale = 0.55 + 0.55 * front

            gsap.set(el, {
              x: radius * Math.sin(rad),
              y: radius * (1 - Math.cos(rad)),
              rotate: theta,
              scale,
              opacity: front,
              zIndex: Math.round(front * 100),
            })

            if (front > bestFront) { bestFront = front; bestIndex = i }
          })

          this.activeFanIndex = bestIndex
        },
      })
    })
  },

  beforeUnmount() {
    if (this._fanScrollTrigger) this._fanScrollTrigger.kill()
  },

  methods: {
    twoDigits(n) { return n < 10 ? '0' + n : String(n) },
  },
}
</script>
