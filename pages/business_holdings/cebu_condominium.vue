<style>
.cebu-page { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #FFFFFF; color: #222222; }
* { box-sizing: border-box; }

/* ── HERO ── */
.cebu-hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #0F172A;
}
.cebu-hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
  transform: scale(1.06);
  transition: transform 8s ease;
}
.cebu-hero-img.ready { transform: scale(1); }
.cebu-hero-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(15,23,42,0.2) 40%, rgba(15,23,42,0.75) 100%);
}
.cebu-hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw 8vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.cebu-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ff385c;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.2rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.9s 0.2s ease, transform 0.9s 0.2s ease;
}
.cebu-eyebrow::before {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: #ff385c;
  border-radius: 2px;
}
.cebu-eyebrow.in { opacity: 1; transform: none; }
.cebu-title {
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 700;
  color: #FFFFFF;
  line-height: 0.95;
  letter-spacing: -0.025em;
  margin: 0 0 2rem;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 1.1s 0.4s ease, transform 1.1s 0.4s ease;
}
.cebu-title em { font-style: normal; color: #93C5FD; }
.cebu-title.in { opacity: 1; transform: none; }
.cebu-hero-bottom {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s 0.8s ease, transform 0.8s 0.8s ease;
}
.cebu-hero-bottom.in { opacity: 1; transform: none; }
.cebu-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255,255,255,0.6);
}
.cebu-location-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ff385c;
  flex-shrink: 0;
}
.cebu-tour-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 1.5px solid rgba(255,255,255,0.35);
  border-radius: 0;
  color: #FFFFFF;
  background: transparent;
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px 22px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
}
.cebu-tour-btn:hover {
  background: rgba(96,165,250,0.1);
  border-color: #ff385c;
}
.cebu-tour-arr {
  width: 16px; height: 1px; background: currentColor;
  position: relative; transition: width 0.3s; flex-shrink: 0;
}
.cebu-tour-arr::after {
  content: ''; position: absolute; right: 0; top: -3px;
  width: 6px; height: 6px;
  border-right: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: rotate(45deg);
}
.cebu-tour-btn:hover .cebu-tour-arr { width: 24px; }
.cebu-scroll {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  margin-left: auto;
}
.cebu-scroll-bar {
  width: 1px; height: 45px; background: rgba(255,255,255,0.25);
  animation: breathe 2.2s ease-in-out infinite;
}
@keyframes breathe {
  0%,100% { opacity: 0.4; }
  50%      { opacity: 1; }
}

/* ── INTRO ── */
.cebu-intro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 7vw 8vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6vw;
  align-items: start;
}
.cebu-label-tag {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ff385c;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.8rem;
}
.cebu-label-tag::before {
  content: '';
  display: block;
  width: 22px;
  height: 2px;
  background: #ff385c;
  border-radius: 2px;
}
.cebu-paragraphs { display: flex; flex-direction: column; gap: 1.4rem; }
.cebu-p {
  font-size: 0.96rem;
  font-weight: 400;
  line-height: 1.75;
  color: #6a6a6a;
}

/* ── DETAILS TABLE ── */
.cebu-table { display: flex; flex-direction: column; }
.cebu-row {
  padding: 14px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.cebu-row-lbl {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #929292;
  font-weight: 600;
}
.cebu-row-val {
  font-size: 0.92rem;
  font-weight: 500;
  color: #222222;
}
.cebu-row-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 1px;
  background: #dddddd;
}
.cebu-row-group .cebu-row {
  background: #FFFFFF;
  border-bottom: none;
  padding: 14px 12px;
}

/* ── VIDEO ── */
.cebu-video-section {
  background: #0F172A;
  position: relative;
  overflow: hidden;
}
.cebu-video-label {
  position: absolute;
  top: 2.5rem;
  left: 8vw;
  z-index: 2;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(255,255,255,0.4);
  display: flex;
  align-items: center;
  gap: 10px;
}
.cebu-video-label::before {
  content: '';
  display: block;
  width: 20px;
  height: 2px;
  background: #ff385c;
  border-radius: 2px;
}
.cebu-video-section { height: 80vh; }
.cebu-video-section video {
  width: 100%;
  height: 80vh;
  display: block;
  border: none;
}

/* ── GALLERY ── */
.cebu-gallery-section {
  background: #f7f7f7;
  padding: 6vw 0;
}
.cebu-gallery-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
}
.cebu-gallery-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
}
.cebu-gallery-num {
  font-size: 3.5rem;
  font-weight: 700;
  color: #dddddd;
  line-height: 1;
  flex-shrink: 0;
  letter-spacing: -0.03em;
}
.cebu-gallery-title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: #222222;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* Masonry: first image full-width */
.cebu-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: #dddddd;
  border-radius: 0;
  overflow: hidden;
}
.cebu-gallery-grid .cebu-gi:first-child {
  grid-column: span 2;
}
.cebu-gi {
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.cebu-gi img {
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s;
  filter: brightness(0.92);
}
.cebu-gi:first-child img { min-height: 580px; }
.cebu-gi:hover img { transform: scale(1.05); filter: brightness(1); }
.cebu-gi-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15,23,42,0);
  transition: background 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cebu-gi:hover .cebu-gi-overlay { background: rgba(15,23,42,0.18); }
.cebu-gi-zoom {
  width: 44px; height: 44px;
  border: 2px solid rgba(255,255,255,0.75);
  border-radius: 0;
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transform: scale(0.8);
  transition: opacity 0.3s, transform 0.3s;
}
.cebu-gi:hover .cebu-gi-zoom { opacity: 1; transform: scale(1); }
.cebu-zoom-icon { width: 16px; height: 16px; position: relative; }
.cebu-zoom-icon::before, .cebu-zoom-icon::after {
  content: ''; position: absolute; background: #FFFFFF;
}
.cebu-zoom-icon::before { width: 1px; height: 16px; left: 50%; top: 0; }
.cebu-zoom-icon::after  { width: 16px; height: 1px; left: 0; top: 50%; }

/* ── MAPS (two side-by-side) ── */
.cebu-maps-section {
  background: #FFFFFF;
  padding: 5vw 8vw;
}
.cebu-maps-inner { max-width: 1200px; margin: 0 auto; }
.cebu-maps-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
}
.cebu-maps-label {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ff385c;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}
.cebu-maps-label::before {
  content: '';
  display: block;
  width: 22px;
  height: 2px;
  background: #ff385c;
  border-radius: 2px;
}
.cebu-maps-title {
  font-size: clamp(1.2rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #222222;
  letter-spacing: -0.02em;
}
.cebu-maps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.cebu-map-block {
  background: #FFFFFF;
  border: 1px solid #dddddd;
  border-radius: 0;
  overflow: hidden;
}
.cebu-map-block-head {
  padding: 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.cebu-map-block-name {
  font-size: 1rem;
  font-weight: 700;
  color: #222222;
  letter-spacing: -0.01em;
}
.cebu-map-block-addr {
  font-size: 0.75rem;
  font-weight: 400;
  color: #929292;
  letter-spacing: 0.02em;
}
.cebu-map-wrapper {
  width: 100%;
  height: 340px;
  overflow: hidden;
}
.cebu-map-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.9rem 1.5rem;
  font-size: 0.72rem;
  font-weight: 500;
  color: #929292;
  letter-spacing: 0.03em;
}
.cebu-map-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #ff385c;
  flex-shrink: 0;
}

/* ── RELATED ── */
.cebu-related { background: #f7f7f7; padding: 7vw 0; }
.cebu-related-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.cebu-related-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
}
.cebu-related-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #222222;
  line-height: 1.1;
  letter-spacing: -0.025em;
}
.cebu-related-title em { font-style: normal; color: #ff385c; }
.cebu-related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.cebu-rel-item {
  background: #FFFFFF;
  border: 1px solid #dddddd;
  border-radius: 0;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
}
.cebu-rel-item:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}
.cebu-rel-img { overflow: hidden; }
.cebu-rel-img img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94);
}
.cebu-rel-item:hover .cebu-rel-img img { transform: scale(1.05); }
.cebu-rel-body { padding: 1.25rem 1.25rem 1.5rem; }
.cebu-rel-cat {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ff385c;
  font-weight: 700;
  background: #EFF6FF;
  display: inline-block;
  padding: 2px 8px;
  border-radius: 0;
  margin-bottom: 0.6rem;
}
.cebu-rel-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #222222;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
}
.cebu-rel-metas { display: flex; flex-direction: column; gap: 0.4rem; }
.cebu-rel-meta { display: flex; gap: 1rem; align-items: baseline; }
.cebu-rel-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
  color: #ff385c;
  transition: gap 0.3s;
}
.cebu-rel-item:hover .cebu-rel-cta { gap: 14px; }
.cebu-rel-arr {
  width: 16px; height: 1px; background: #ff385c;
  position: relative; transition: width 0.3s; flex-shrink: 0;
}
.cebu-rel-arr::after {
  content: ''; position: absolute; right: 0; top: -3px;
  width: 6px; height: 6px;
  border-right: 1.5px solid #ff385c;
  border-top: 1.5px solid #ff385c;
  transform: rotate(45deg);
}
.cebu-rel-item:hover .cebu-rel-arr { width: 24px; }

/* ── LIGHTBOX ── */
.cebu-lightbox {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(15,23,42,0.97);
  display: flex;
  align-items: center;
  justify-content: center;
}
.cebu-lightbox-img {
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  display: block;
}
.cebu-lightbox-fade-enter-active,
.cebu-lightbox-fade-leave-active {
  transition: opacity 0.28s ease;
}
.cebu-lightbox-fade-enter-from,
.cebu-lightbox-fade-leave-to {
  opacity: 0;
}
.cebu-lightbox-close {
  position: absolute;
  top: 24px; right: 28px;
  background: none; border: none;
  color: #FFFFFF; cursor: pointer;
  font-size: 0.7rem; letter-spacing: 0.15em; font-weight: 600;
  text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.cebu-lightbox-close-x { width: 22px; height: 22px; position: relative; }
.cebu-lightbox-close-x::before,
.cebu-lightbox-close-x::after {
  content: ''; position: absolute; top: 50%; left: 0;
  width: 100%; height: 1.5px; background: #FFFFFF;
}
.cebu-lightbox-close-x::before { transform: rotate(45deg); }
.cebu-lightbox-close-x::after  { transform: rotate(-45deg); }
.cebu-lightbox-nav {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  background: none;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 0;
  color: #FFFFFF; cursor: pointer;
  width: 50px; height: 50px;
  display: flex; align-items: center; justify-content: center;
  transition: border-color 0.3s, background 0.3s;
  font-size: 1.2rem;
}
.cebu-lightbox-nav:hover { border-color: #ff385c; background: rgba(96,165,250,0.1); }
.cebu-lightbox-nav--prev { left: 24px; }
.cebu-lightbox-nav--next { right: 24px; }
.cebu-lightbox-count {
  position: absolute; bottom: 24px;
  font-size: 0.65rem; letter-spacing: 0.15em;
  color: rgba(255,255,255,0.4);
  font-weight: 500;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .cebu-intro { grid-template-columns: 1fr; gap: 3rem; padding: 10vw 6vw; }
  .cebu-gallery-grid { grid-template-columns: 1fr; border-radius: 0; }
  .cebu-gallery-grid .cebu-gi:first-child { grid-column: span 1; }
  .cebu-gi img { min-height: 260px !important; }
  .cebu-maps-grid { grid-template-columns: 1fr; }
  .cebu-related-grid { grid-template-columns: 1fr; }
  .cebu-related-head { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .cebu-gallery-inner { padding: 0 6vw; }
  .cebu-related-inner { padding: 0 6vw; }
  .cebu-maps-section { padding: 10vw 6vw; }
  .cebu-map-wrapper { height: 260px; }
  .cebu-hero-content { padding: 0 6vw 8vh; }
  .cebu-video-section { height: 50vh; }
  .cebu-video-section video { height: 50vh; }
  .cebu-title { font-size: 3rem; }
  .cebu-video-label { left: 6vw; }
  .cebu-row-group { grid-template-columns: 1fr; background: none; }
  .cebu-row-group .cebu-row { padding: 14px 0; }
  .cebu-hero-bottom { flex-wrap: wrap; gap: 1rem; }
  .cebu-scroll { margin-left: 0; }
}
</style>

<template>
  <div class="cebu-page">

    <!-- ── LIGHTBOX ── -->
    <teleport to="body">
      <div v-if="lightboxOpen" class="cebu-lightbox" @click.self="lightboxOpen = false">
        <transition name="cebu-lightbox-fade" mode="out-in">
          <img
            :key="images[lightboxIndex]"
            :src="images[lightboxIndex]"
            class="cebu-lightbox-img"
            :alt="'Cebu Condominium photo ' + (lightboxIndex + 1)"
          />
        </transition>
        <button class="cebu-lightbox-close" @click="lightboxOpen = false">
          Close <span class="cebu-lightbox-close-x" />
        </button>
        <button class="cebu-lightbox-nav cebu-lightbox-nav--prev" @click="prevImage">&#8592;</button>
        <button class="cebu-lightbox-nav cebu-lightbox-nav--next" @click="nextImage">&#8594;</button>
        <span class="cebu-lightbox-count">{{ lightboxIndex + 1 }} / {{ images.length }}</span>
      </div>
    </teleport>

    <!-- ── HERO ── -->
    <section class="cebu-hero">
      <img
        src="/eishi/cebu_condo/images/20240626_094939.webp"
        class="cebu-hero-img"
        :class="{ ready }"
        alt="Cebu Condominium"
      />
      <div class="cebu-hero-veil" />
      <div class="cebu-hero-content">
        <p class="cebu-eyebrow" :class="{ in: ready }">
          Real Estate &mdash; Cebu City
        </p>
        <h1 class="cebu-title" :class="{ in: ready }">
          {{ t.cebuCondo?.split(' ').slice(0, 1).join(' ') || 'Cebu' }}<br />
          <em>{{ t.cebuCondo?.split(' ').slice(1).join(' ') || 'Condominium' }}</em>
        </h1>
        <div class="cebu-hero-bottom" :class="{ in: ready }">
          <span class="cebu-location">
            <span class="cebu-location-dot" />
            {{ t.cebuCondoLocation || 'Cebu City, Philippines' }}
          </span>
          <router-link to="/tour/cebu-condominium" class="cebu-tour-btn">
            {{ t.startTour || 'Start Virtual Tour' }}
            <span class="cebu-tour-arr" />
          </router-link>
          <div class="cebu-scroll">
            <div class="cebu-scroll-bar" />
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── INTRO ── -->
    <div class="cebu-intro">

      <!-- Left: paragraphs -->
      <div>
        <p class="cebu-label-tag">{{ t.cebuPremiumCondo || 'Premium Condominiums' }}</p>
        <div class="cebu-paragraphs">
          <p class="cebu-p">{{ t.cebuP1 }}</p>
          <p class="cebu-p">{{ t.cebuP2 }}</p>
        </div>
      </div>

      <!-- Right: details table -->
      <div class="cebu-table">
        <div class="cebu-row">
          <span class="cebu-row-lbl">{{ t.solineaPropertyName || 'Property Name' }}</span>
          <span class="cebu-row-val">{{ t.solineaPropertyNameValue }}</span>
        </div>
        <div class="cebu-row">
          <span class="cebu-row-lbl">{{ t.solineaLocationLabel || 'Location' }}</span>
          <span class="cebu-row-val">{{ t.solineaLocationValue }}</span>
        </div>
        <div class="cebu-row">
          <span class="cebu-row-lbl">{{ t.solineaOwnedByLabel || 'Owned By' }}</span>
          <span class="cebu-row-val">{{ t.solineaOwnedByValue }}</span>
        </div>

        <div class="cebu-row-group">
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaNumberOfCondosLabel || 'No. of Condos' }}</span>
            <span class="cebu-row-val">{{ t.solineaNumberOfCondosValue }}</span>
          </div>
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaTowerLabel || 'Tower' }}</span>
            <span class="cebu-row-val">{{ t.solineaTowerValue }}</span>
          </div>
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaResidencesLabel || 'Residences' }}</span>
            <span class="cebu-row-val">{{ t.solineaResidencesValue }}</span>
          </div>
        </div>

        <div class="cebu-row-group">
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaTourismAccessLabel || 'Tourism Access' }}</span>
            <span class="cebu-row-val">{{ t.solineaTourismAccessValue }}</span>
          </div>
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaTransportConnectivityLabel || 'Transport' }}</span>
            <span class="cebu-row-val">{{ t.solineaTransportConnectivityValue }}</span>
          </div>
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaPortAccessLabel || 'Port Access' }}</span>
            <span class="cebu-row-val">{{ t.solineaPortAccessValue }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ── VIDEO ── -->
    <section class="cebu-video-section">
      <p class="cebu-video-label">Property Walkthrough</p>
      <HlsVideo src="https://stream.mux.com/WlU802OD022T01AszonpvhncWP300KRSYKsdrK9hjdEw8hQ.m3u8" :autoplay="true" :loop="true" :muted="true" :playsinline="true" preload="metadata" />
    </section>

    <!-- ── PHOTO GALLERY ── -->
    <section class="cebu-gallery-section">
      <div class="cebu-gallery-inner">
        <div class="cebu-gallery-head">
          <span class="cebu-gallery-num">01</span>
          <h2 class="cebu-gallery-title">Property Gallery</h2>
        </div>
        <div class="cebu-gallery-grid">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="cebu-gi"
            @click="openLightbox(index)"
          >
            <img :src="image" :alt="'Cebu Condo photo ' + (index + 1)" loading="lazy" />
            <div class="cebu-gi-overlay">
              <div class="cebu-gi-zoom">
                <span class="cebu-zoom-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MAPS ── -->
    <section class="cebu-maps-section">
      <div class="cebu-maps-inner">
        <div class="cebu-maps-head">
          <p class="cebu-maps-label">Locations</p>
          <h2 class="cebu-maps-title">Solinea &amp; 1016 Residences</h2>
        </div>
        <div class="cebu-maps-grid">

          <!-- Solinea Tower 2 -->
          <div class="cebu-map-block">
            <div class="cebu-map-block-head">
              <span class="cebu-map-block-name">Solinea Tower 2 (Turquoise)</span>
              <span class="cebu-map-block-addr">Archbishop Reyes Ave, Cebu City</span>
            </div>
            <div class="cebu-map-wrapper">
              <MapboxMap
                :lng="123.905247"
                :lat="10.316006"
                :zoom="16"
                map-style="mapbox://styles/mapbox/streets-v12"
                label="Solinea Tower 2 (Turquoise)"
              />
            </div>
            <div class="cebu-map-footer">
              <span class="cebu-map-dot" />
              Solinea Tower 2 (Turquoise), Cebu City
            </div>
          </div>

          <!-- 1016 Residences -->
          <div class="cebu-map-block">
            <div class="cebu-map-block-head">
              <span class="cebu-map-block-name">1016 Residences</span>
              <span class="cebu-map-block-addr">1016 Masbate Rd, Cebu City, 6000 Cebu</span>
            </div>
            <div class="cebu-map-wrapper">
              <MapboxMap
                :lng="123.907333"
                :lat="10.316139"
                :zoom="16"
                map-style="mapbox://styles/mapbox/streets-v12"
                label="1016 Residences"
              />
            </div>
            <div class="cebu-map-footer">
              <span class="cebu-map-dot" />
              1016 Masbate Rd, Cebu City, 6000 Cebu
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── RELATED PROPERTIES ── -->
    <section class="cebu-related">
      <div class="cebu-related-inner">
        <div class="cebu-related-head">
          <h2 class="cebu-related-title">
            {{ t.relatedProperties || 'Related' }}<br /><em>Properties</em>
          </h2>
        </div>
        <div class="cebu-related-grid">
          <div
            v-for="(property, index) in translatedProperties"
            :key="index"
            class="cebu-rel-item"
            @click="$router.push(property.route)"
          >
            <div class="cebu-rel-img">
              <img :src="property.image" :alt="property.title" loading="lazy" />
            </div>
            <div class="cebu-rel-body">
              <p class="cebu-rel-cat">{{ t.relatedPropertyCategory || 'Holdings' }}</p>
              <h3 class="cebu-rel-name">{{ property.title }}</h3>
              <div class="cebu-rel-metas">
                <template v-for="(value, key) in property.details" :key="key">
                  <div v-if="key !== 'description'" class="cebu-rel-meta">
                    <span class="cebu-row-lbl">{{ key }}</span>
                    <span class="cebu-row-val" style="font-size:0.85rem;">{{ value }}</span>
                  </div>
                </template>
              </div>
              <span class="cebu-rel-cta">
                {{ t.viewProperty || 'View Details' }}
                <span class="cebu-rel-arr" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useLanguageStore } from '~/stores/languageStore'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import HlsVideo from '~/components/HlsVideo.vue'
import MapboxMap from '~/components/MapboxMap.vue'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'CebuCondominium',
  components: { HlsVideo, MapboxMap },

  data() {
    return {
      ready: false,
      lightboxOpen: false,
      lightboxIndex: 0,

      images: [
        '/eishi/cebu_condo/images/20240626_094216.webp',
        '/eishi/cebu_condo/images/20240626_094939.webp',
        '/eishi/cebu_condo/images/20250415_141241.webp',
        '/eishi/cebu_condo/images/20250415_141347.webp',
        '/eishi/cebu_condo/images/20250415_141525.webp',
        '/eishi/cebu_condo/images/20250415_142354.webp',
        '/eishi/cebu_condo/images/20250415_143729.webp',
        '/eishi/cebu_condo/images/20250415_143755.webp',
        '/eishi/cebu_condo/images/20250415_143805.webp',
        '/eishi/cebu_condo/images/20250415_142402.webp',
        '/eishi/cebu_condo/images/20250415_142511.webp',
        '/eishi/cebu_condo/images/20250415_143742.webp',
        '/eishi/cebu_condo/images/20250415_141254.webp',
        '/eishi/cebu_condo/images/20250415_141354.webp',
        '/eishi/cebu_condo/images/20250415_142349.webp',
        '/eishi/cebu_condo/images/20250415_142553.webp',
        '/eishi/cebu_condo/images/20250415_143751.webp',
      ],
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),
    translatedProperties() { return this.t.properties || [] },
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => { this.ready = true }, 180)

      // Gallery scroll-reveals
      const galleryItems = this.$el.querySelectorAll('.cebu-gi')
      galleryItems.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            delay: (i % 2) * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Related cards
      const relItems = this.$el.querySelectorAll('.cebu-rel-item')
      relItems.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Map blocks
      const mapBlocks = this.$el.querySelectorAll('.cebu-map-block')
      mapBlocks.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            delay: i * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })
  },

  beforeUnmount() {
    ScrollTrigger.getAll().forEach(t => t.kill())
  },

  methods: {
    openLightbox(index) {
      this.lightboxIndex = index
      this.lightboxOpen = true
    },
    nextImage() {
      this.lightboxIndex = (this.lightboxIndex + 1) % this.images.length
    },
    prevImage() {
      this.lightboxIndex = (this.lightboxIndex - 1 + this.images.length) % this.images.length
    },
  },
}
</script>
