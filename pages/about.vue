<style>
/* ── Design tokens (matches landing page) ─────────────────── */
.about-wrap {
  --cream:      #EEF2F7;
  --warm-white: #F8FAFB;
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
  overflow-x: hidden;
}

* { box-sizing: border-box; }

/* ── Shared utilities ────────────────────────────────────── */
.about-wrap .container {
  max-width: 1280px;
  margin: 0 auto;
}

.about-wrap .section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}
.about-wrap .section-label-line {
  width: 24px;
  height: 1px;
  background: var(--red);
  flex-shrink: 0;
}
.about-wrap .section-label span {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  font-weight: 500;
  font-family: var(--font-body);
}
.about-wrap .section-label.light span { color: rgba(255,255,255,0.4); }
.about-wrap .section-label.light .section-label-line { background: rgba(255,255,255,0.3); }
.about-wrap .section-label.center { justify-content: center; }

.about-wrap .section-heading {
  font-family: var(--font-display);
  font-size: clamp(30px, 3.6vw, 52px);
  font-weight: 300;
  color: var(--ink);
  line-height: 1.15;
  letter-spacing: -0.01em;
  margin: 0 0 16px 0;
}
.about-wrap .section-heading em { font-style: italic; color: var(--red); }

.about-wrap .section-subtext {
  font-size: 15px;
  color: var(--ink-60);
  line-height: 1.75;
  margin: 0;
  max-width: 480px;
}

/* ── Buttons ─────────────────────────────────────────────── */
.about-wrap .btn-primary {
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
  border: none;
  cursor: pointer;
  transition: background 0.2s, gap 0.2s;
}
.about-wrap .btn-primary:hover { background: var(--red-soft); gap: 16px; }
.about-wrap .btn-primary svg { width: 16px; height: 16px; flex-shrink: 0; }

.about-wrap .btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--ink-30);
  color: var(--ink);
  background: transparent;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 14px 28px;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.about-wrap .btn-outline:hover { background: var(--ink); color: #fff; border-color: var(--ink); }

.about-wrap .btn-white {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  color: var(--ink);
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 14px 28px;
  transition: background 0.2s, gap 0.2s;
}
.about-wrap .btn-white:hover { background: var(--cream); gap: 16px; }

/* ── Mobile sticky CTA ───────────────────────────────────── */
.about-mobile-cta {
  display: none;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 50;
  background: var(--red);
  color: #fff;
  padding: 12px 20px;
  font-weight: 500;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(194, 59, 42, 0.4);
  align-items: center;
  gap: 8px;
}

@media (max-width: 768px) {
  .about-mobile-cta { display: flex; }
}

/* ── 1. HERO ─────────────────────────────────────────────── */
.about-hero-section {
  background: var(--warm-white);
  padding: 160px 80px 96px;
}

.about-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-hero-h1 {
  font-family: var(--font-display);
  font-size: clamp(40px, 5.5vw, 78px);
  font-weight: 300;
  color: var(--ink);
  line-height: 1.05;
  letter-spacing: -0.01em;
  margin: 0 0 24px 0;
}
.about-hero-h1 em { font-style: italic; color: var(--red); }

.about-hero-lead {
  font-size: 15px;
  font-weight: 300;
  color: var(--ink-60);
  line-height: 1.75;
  max-width: 460px;
  margin: 0 0 36px 0;
}

.about-hero-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.about-hero-visual {
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--ink);
  overflow: hidden;
}

.about-hero-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  display: block;
}

.about-hero-play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-play-circle {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  border: none;
}

.about-play-circle:hover {
  background: #fff;
  transform: scale(1.08);
}

.about-play-circle svg {
  width: 24px;
  height: 24px;
  fill: var(--ink);
  margin-left: 3px;
}

.about-video-label {
  position: absolute;
  bottom: 24px;
  left: 24px;
  background: rgba(20,27,40,0.72);
  color: rgba(255,255,255,0.75);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 6px 12px;
  font-family: var(--font-body);
}

@media (max-width: 900px) {
  .about-hero-grid { grid-template-columns: 1fr; gap: 40px; }
  .about-hero-section { padding: 120px 32px 64px; }
}
@media (max-width: 600px) {
  .about-hero-section { padding: 100px 24px 48px; }
}

/* ── 2. STATS ────────────────────────────────────────────── */
.about-stats-section {
  background: var(--cream);
}

.about-stats-row {
  display: flex;
}

.about-stat-item {
  flex: 1;
  padding: 64px 32px;
  text-align: center;
  border-left: 1px solid var(--ink-12);
}
.about-stat-item:first-child { border-left: none; }

.about-stat-number {
  font-family: var(--font-display);
  font-size: clamp(44px, 5vw, 68px);
  font-weight: 300;
  color: var(--ink);
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
}

.about-stat-label {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-60);
  font-weight: 500;
  font-family: var(--font-body);
}

@media (max-width: 768px) {
  .about-stats-row { flex-wrap: wrap; }
  .about-stat-item {
    flex: 1 0 50%;
    border-left: none;
    border-bottom: 1px solid var(--ink-12);
    padding: 40px 24px;
  }
  .about-stat-item:nth-child(odd) { border-right: 1px solid var(--ink-12); }
  .about-stat-item:nth-last-child(-n+2) { border-bottom: none; }
}

/* ── 3. WHAT WE DO ───────────────────────────────────────── */
.about-services-section {
  background: var(--warm-white);
  padding: 96px 80px;
}

.about-services-header {
  max-width: 640px;
  margin-bottom: 56px;
}

.about-services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.about-service-img-wrap {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--cream);
  margin-bottom: 20px;
}

.about-service-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(15%);
  transition: transform 0.8s ease, filter 0.4s;
}
.about-service-card:hover .about-service-img-wrap img {
  transform: scale(1.04);
  filter: grayscale(0%);
}

.about-service-tag {
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 8px;
  font-family: var(--font-body);
  font-weight: 500;
}

.about-service-title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 400;
  color: var(--ink);
  margin-bottom: 8px;
  line-height: 1.2;
}

.about-service-desc {
  font-size: 13px;
  color: var(--ink-60);
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 900px) {
  .about-services-grid { grid-template-columns: 1fr 1fr; }
  .about-services-section { padding: 64px 32px; }
}
@media (max-width: 520px) {
  .about-services-grid { grid-template-columns: 1fr; }
}

/* ── 4. FOUNDING STORY ───────────────────────────────────── */
.about-story-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 580px;
}

.about-story-content {
  padding: 96px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--warm-white);
}

.about-story-content p {
  color: var(--ink-60);
  font-size: 15px;
  line-height: 1.8;
  max-width: 460px;
  margin: 0 0 22px 0;
}
.about-story-content p:last-of-type { margin-bottom: 0; }

.about-story-visual {
  position: relative;
  overflow: hidden;
  background: var(--cream);
}
.about-story-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.85;
  filter: grayscale(15%);
  transition: transform 0.8s ease, opacity 0.4s;
}
.about-story-visual:hover img { transform: scale(1.03); opacity: 0.92; }
.about-story-visual-tag {
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

@media (max-width: 900px) {
  .about-story-section { grid-template-columns: 1fr; }
  .about-story-visual { min-height: 320px; order: -1; }
  .about-story-content { padding: 64px 32px; }
}

/* ── 5. TIMELINE ─────────────────────────────────────────── */
.about-timeline-section {
  background: var(--warm-white);
  padding: 96px 80px;
}

.about-timeline-header {
  text-align: center;
  margin-bottom: 72px;
}

.about-timeline-track {
  position: relative;
  max-width: 1040px;
  margin: 0 auto;
}
.about-timeline-track::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--ink-12);
  transform: translateX(-50%);
}

.about-tl-row {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 80px;
  margin-bottom: 72px;
}
.about-tl-row:last-child { margin-bottom: 0; }

.about-tl-dot {
  position: absolute;
  left: 50%;
  top: 6px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--red);
  transform: translateX(-50%);
  z-index: 2;
}

.about-tl-content { grid-column: 1; text-align: right; }
.about-tl-row.is-right .about-tl-content { grid-column: 2; text-align: left; }

.about-tl-year {
  font-family: var(--font-display);
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 8px;
}

.about-tl-title {
  font-family: var(--font-display);
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 400;
  color: var(--ink);
  margin: 0 0 10px 0;
  line-height: 1.2;
}

.about-tl-desc {
  font-size: 14px;
  color: var(--ink-60);
  line-height: 1.75;
  margin: 0;
}

@media (max-width: 768px) {
  .about-timeline-section { padding: 64px 24px; }
  .about-timeline-track::before { left: 6px; }
  .about-tl-row { grid-template-columns: 1fr; gap: 0; padding-left: 36px; margin-bottom: 48px; }
  .about-tl-dot { left: 6px; top: 5px; }
  .about-tl-content,
  .about-tl-row.is-right .about-tl-content { grid-column: 1; text-align: left; }
}

/* ── 6. CTA ──────────────────────────────────────────────── */
.about-cta-section {
  background: var(--ink);
  padding: 96px 80px;
}

.about-cta-inner {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.about-cta-heading {
  font-family: var(--font-display);
  font-size: clamp(30px, 3.6vw, 48px);
  font-weight: 300;
  color: #fff;
  margin: 0 0 18px 0;
  line-height: 1.15;
}

.about-cta-lead {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.75;
  margin: 0 0 40px 0;
}

.about-cta-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

@media (max-width: 768px) {
  .about-cta-section { padding: 64px 24px; }
  .about-cta-btns { flex-direction: column; align-items: center; }
}
</style>

<template>
  <div class="about-wrap">

    <!-- Mobile sticky CTA -->
    <a href="#about-cta" class="about-mobile-cta">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      {{ t.contactUs || 'Contact Us' }}
    </a>

    <!-- ── 1. HERO ── -->
    <section class="about-hero-section">
      <div class="container">
        <div class="about-hero-grid">
          <div>
            <div class="section-label" data-aos="fade-up">
              <div class="section-label-line" />
              <span>{{ t.since2018Label || 'Filipino-Japanese Holdings Since 2018' }}</span>
            </div>
            <h1 class="about-hero-h1" data-aos="fade-up" data-aos-delay="80">{{ t.aboutHeroHeadingPre || 'Building ' }}<em>{{ t.aboutHeroHeadingEm || 'Sustainable' }}</em>{{ t.aboutHeroHeadingPost || ' Value Across Asia' }}</h1>
            <p class="about-hero-lead" data-aos="fade-up" data-aos-delay="160">{{ t.since2018Description || 'We bridge Japanese precision with Filipino growth to develop real estate, agriculture, and legal ventures that create lasting impact.' }}</p>
            <div class="about-hero-btns" data-aos="fade-up" data-aos-delay="240">
              <a href="#about-journey" class="btn-primary">
                {{ t.ourStory || 'Our Story' }}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="#about-partners" class="btn-outline">{{ t.ourPartner || 'Our Partners' }}</a>
            </div>
          </div>
          <div class="about-hero-visual" data-aos="fade-left" data-aos-duration="800">
            <img src="/eishi/pexels-rickyrecap-1662159.webp" alt="Eishi Holdings" loading="eager" />
            <div class="about-hero-play">
              <button class="about-play-circle" aria-label="Play company intro">
                <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg>
              </button>
            </div>
            <div class="about-video-label">{{ t.watchIntro || 'Watch Company Intro' }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 2. BY THE NUMBERS ── -->
    <section class="about-stats-section">
      <div class="about-stats-row">
        <div class="about-stat-item" data-aos="fade-up">
          <div class="about-stat-number">5+</div>
          <div class="about-stat-label">{{ t.statSectors || 'Sectors' }}</div>
        </div>
        <div class="about-stat-item" data-aos="fade-up" data-aos-delay="60">
          <div class="about-stat-number">JP+PH</div>
          <div class="about-stat-label">{{ t.statLeadership || 'Leadership' }}</div>
        </div>
        <div class="about-stat-item" data-aos="fade-up" data-aos-delay="120">
          <div class="about-stat-number">2018</div>
          <div class="about-stat-label">{{ t.statFounded || 'Founded' }}</div>
        </div>
        <div class="about-stat-item" data-aos="fade-up" data-aos-delay="180">
          <div class="about-stat-number">10+</div>
          <div class="about-stat-label">{{ t.statPartners || 'Partners' }}</div>
        </div>
      </div>
    </section>

    <!-- ── 3. WHAT WE DO ── -->
    <section class="about-services-section">
      <div class="container">
        <div class="about-services-header">
          <div class="section-label" data-aos="fade-up">
            <div class="section-label-line" />
            <span>{{ t.ourBusiness || 'Our Business' }}</span>
          </div>
          <h2 class="section-heading" data-aos="fade-up" data-aos-delay="80">{{ t.whatWeDo || 'What We Do' }}</h2>
          <p class="section-subtext" data-aos="fade-up" data-aos-delay="120">{{ t.whatWeDoSubtext || 'Diversified holdings focused on long-term growth in key strategic sectors.' }}</p>
        </div>
        <div class="about-services-grid">
          <div
            v-for="(service, i) in services"
            :key="service.title"
            class="about-service-card"
            data-aos="fade-up"
            :data-aos-delay="i * 60"
          >
            <div class="about-service-img-wrap">
              <img :src="service.img" :alt="service.title" loading="lazy" />
            </div>
            <div class="about-service-tag">{{ service.tag }}</div>
            <div class="about-service-title">{{ service.title }}</div>
            <p class="about-service-desc">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 4. FOUNDING STORY ── -->
    <section class="about-story-section">
      <div class="about-story-content">
        <div>
          <div class="section-label" data-aos="fade-up">
            <div class="section-label-line" />
            <span>{{ t.ourOrigin || 'Our Origin' }}</span>
          </div>
          <h2 class="section-heading" data-aos="fade-up" data-aos-delay="80">
            {{ t.foundingStoryHeading || 'From Tokyo to' }} <em>{{ t.foundingStoryHeadingEm || 'the Philippines' }}</em>
          </h2>
          <p data-aos="fade-up" data-aos-delay="160">
            {{ t.foundingStoryParagraph1 || 'Eishi began in 2018 as a small partnership between Japanese investors and a Filipino legal network, formed on a shared belief that disciplined capital and local trust could build something lasting in the Philippines.' }}
          </p>
          <p data-aos="fade-up" data-aos-delay="220">
            {{ t.foundingStoryParagraph2 || 'What started with a single poultry operation in Batangas has grown into a bridge between two economies — channeling Japanese precision and patient capital into Filipino land, livestock, and communities, one project at a time.' }}
          </p>
        </div>
      </div>
      <div class="about-story-visual" data-aos="fade-right" data-aos-duration="800">
        <img src="/eishi/pexels-neil-clark-ongchangco-2154700388-33407957.webp" alt="Eishi founding story" />
        <div class="about-story-visual-tag">{{ t.aboutStoryTag || 'Est. Philippines · 2018' }}</div>
      </div>
    </section>

    <!-- ── 5. JOURNEY (alternating timeline) ── -->
    <section id="about-journey" class="about-timeline-section">
      <div class="container">
        <div class="about-timeline-header">
          <div class="section-label center" data-aos="fade-up">
            <div class="section-label-line" />
            <span>{{ t.ourJourney || 'Our Journey' }}</span>
          </div>
          <h2 class="section-heading" data-aos="fade-up" data-aos-delay="80">{{ t.journeyThroughTheYears || 'Journey Through the Years' }}</h2>
          <p class="section-subtext" style="margin: 0 auto;" data-aos="fade-up" data-aos-delay="120">{{ t.journeySubtext || 'From founding to regional expansion.' }}</p>
        </div>
        <div class="about-timeline-track">
          <div
            v-for="(item, i) in timeline_cards"
            :key="i"
            class="about-tl-row"
            :class="{ 'is-right': i % 2 === 1 }"
            data-aos="fade-up"
            :data-aos-delay="i * 60"
          >
            <div class="about-tl-dot" />
            <div class="about-tl-content">
              <div class="about-tl-year">{{ item.year }}</div>
              <h3 class="about-tl-title">{{ item.title }}</h3>
              <p class="about-tl-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 6. CTA ── -->
    <section id="about-cta" class="about-cta-section">
      <div class="about-cta-inner">
        <h2 class="about-cta-heading">{{ t.ctaHeading || "Let's Build Together" }}</h2>
        <p class="about-cta-lead">{{ t.ctaLead || "Whether you're an investor, landowner, or potential partner, we're ready to explore opportunities with you." }}</p>
        <div class="about-cta-btns">
          <router-link to="/projects" class="btn-primary">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
            {{ t.viewOurProjects || 'View Our Projects' }}
          </router-link>
          <router-link to="/contact" class="btn-white">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            {{ t.partnerWithUs || 'Partner With Us' }}
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useLanguageStore } from '~/stores/languageStore'

export default {
  name: 'AboutView',

  data() {
    return {
      timeline_cards: [],
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),

    services() {
      return [
        {
          tag: this.t.realEstateTag || 'Real Estate',
          title: this.t.realEstate || 'Real Estate',
          desc: this.t.realEstateDesc || 'Strategic land development and commercial property management in growth corridors.',
          img: '/eishi/cebu_condo/images/20240626_094216.webp',
        },
        {
          tag: this.t.agroIndustryTag || 'Agro-Industry',
          title: this.t.agroIndustry || 'Agro-Industry',
          desc: this.t.agroIndustryDesc || 'High-value crop production and export leveraging Japanese agri-technology.',
          img: '/eishi/pangasinan_farm/images/Pangasinan-Farm.webp',
        },
        {
          tag: this.t.poultryFarmingTag || 'Agriculture',
          title: this.t.poultryFarming || 'Poultry Farming',
          desc: this.t.poultryFarmingDesc || 'Vertically integrated poultry operations with focus on quality and sustainability.',
          img: '/eishi/batangas_tokyo_farm/images/Gemini_Generated_Image_pamyzvpamyzvpamy.png',
        },
        {
          tag: this.t.legalServicesTag || 'Legal',
          title: this.t.legalServices || 'Legal Services',
          desc: this.t.legalServicesDesc || 'Cross-border legal consulting for Japanese and Filipino corporate ventures.',
          img: '/eishi/legal_services/images/legal-services-placeholder.png',
        },
      ]
    },
  },

  watch: {
    t: {
      handler(newT) {
        this.timeline_cards = [
          { year: '2018', title: newT.timeline2018Title || 'Company Founded',            description: newT.timeline2018Description || 'Eishi was established in San Jose, Batangas, laying the first foundation stone of a Japan-Philippines partnership.' },
          { year: '2019', title: newT.timeline2019Title || 'First Agricultural Asset',   description: newT.timeline2019Description || 'Acquired our inaugural poultry operation, anchoring our agriculture portfolio in Southern Luzon.' },
          { year: '2020', title: newT.timeline2020Title || 'Real Estate Expansion',      description: newT.timeline2020Description || 'Entered Cebu and Kalinga with residential and condominium developments serving regional growth.' },
          { year: '2021', title: newT.timeline2021Title || 'International Partnerships', description: newT.timeline2021Description || 'Formalised ties with Japanese investors and Philippine legal partners to scale operations responsibly.' },
          { year: '2023', title: newT.timeline2023Title || 'Pangasinan Development',     description: newT.timeline2023Description || 'Broke ground on a 240,500 sqm farm in Balungao, extending our footprint in agro-industry.' },
        ]
      },
      immediate: true,
      deep: true,
    },
  },
}
</script>
