<style>
.car-page { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #FFFFFF; color: #222222; }
* { box-sizing: border-box; }

/* ── HERO ── */
.car-hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #0F172A;
}
.car-hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
  transform: scale(1.06);
  transition: transform 8s ease;
}
.car-hero-img.ready { transform: scale(1); }
.car-hero-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(15,23,42,0.2) 40%, rgba(15,23,42,0.75) 100%);
}
.car-hero-content {
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
.car-eyebrow {
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
.car-eyebrow::before {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: #ff385c;
  border-radius: 2px;
}
.car-eyebrow.in { opacity: 1; transform: none; }
.car-title {
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
.car-title em { font-style: normal; color: #93C5FD; }
.car-title.in { opacity: 1; transform: none; }
.car-hero-meta {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s 0.8s ease, transform 0.8s 0.8s ease;
}
.car-hero-meta.in { opacity: 1; transform: none; }
.car-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255,255,255,0.6);
}
.car-location-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ff385c;
  flex-shrink: 0;
}
.car-scroll {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  margin-left: auto;
}
.car-scroll-bar {
  width: 1px;
  height: 45px;
  background: rgba(255,255,255,0.25);
  animation: breathe 2.2s ease-in-out infinite;
}
@keyframes breathe {
  0%,100% { opacity: 0.4; }
  50%      { opacity: 1; }
}

/* ── INTRO ── */
.car-intro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 7vw 8vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6vw;
  align-items: start;
}
.car-label-tag {
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
.car-label-tag::before {
  content: '';
  display: block;
  width: 22px;
  height: 2px;
  background: #ff385c;
  border-radius: 2px;
}
.car-paragraphs { display: flex; flex-direction: column; gap: 1.4rem; }
.car-p {
  font-size: 0.96rem;
  font-weight: 400;
  line-height: 1.75;
  color: #6a6a6a;
}

/* ── DETAILS TABLE ── */
.car-table { display: flex; flex-direction: column; }
.car-row {
  padding: 14px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.car-row-lbl {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #929292;
  font-weight: 600;
}
.car-row-val {
  font-size: 0.92rem;
  font-weight: 500;
  color: #222222;
}
.car-row-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 1px;
  background: #dddddd;
}
.car-row-group .car-row {
  background: #FFFFFF;
  border-bottom: none;
  padding: 14px 12px;
}

/* ── FLEET GALLERY ── */
.car-gallery-section {
  background: #f7f7f7;
  padding: 6vw 0;
}
.car-gallery-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
}
.car-gallery-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
}
.car-gallery-num {
  font-size: 3.5rem;
  font-weight: 700;
  color: #dddddd;
  line-height: 1;
  flex-shrink: 0;
  letter-spacing: -0.03em;
}
.car-gallery-title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: #222222;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* Masonry: first image full-width */
.car-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: #dddddd;
  border-radius: 0;
  overflow: hidden;
}
.car-gallery-grid .car-gi:first-child {
  grid-column: span 2;
}
.car-gi {
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.car-gi img {
  width: 100%;
  height: 100%;
  min-height: 340px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s;
  filter: brightness(0.92);
}
.car-gi:first-child img { min-height: 580px; }
.car-gi:hover img { transform: scale(1.05); filter: brightness(1); }
.car-gi-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15,23,42,0);
  transition: background 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.car-gi:hover .car-gi-overlay { background: rgba(15,23,42,0.18); }
.car-gi-zoom {
  width: 44px; height: 44px;
  border: 2px solid rgba(255,255,255,0.75);
  border-radius: 0;
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transform: scale(0.8);
  transition: opacity 0.3s, transform 0.3s;
}
.car-gi:hover .car-gi-zoom { opacity: 1; transform: scale(1); }
.car-zoom-icon { width: 16px; height: 16px; position: relative; }
.car-zoom-icon::before, .car-zoom-icon::after {
  content: ''; position: absolute; background: #FFFFFF;
}
.car-zoom-icon::before { width: 1px; height: 16px; left: 50%; top: 0; }
.car-zoom-icon::after  { width: 16px; height: 1px; left: 0; top: 50%; }

/* ── HIGHLIGHTS STRIP ── */
.car-highlights {
  background: #0F172A;
  padding: 5vw 8vw;
}
.car-highlights-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.06);
}
.car-hl-item {
  background: #0F172A;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-right: 1px solid rgba(255,255,255,0.07);
}
.car-hl-item:last-child { border-right: none; }
.car-hl-num {
  font-size: 2.8rem;
  font-weight: 700;
  color: #ff385c;
  line-height: 1;
  letter-spacing: -0.03em;
}
.car-hl-label {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  font-weight: 600;
}
.car-hl-desc {
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.65;
  color: rgba(255,255,255,0.55);
  margin-top: 0.5rem;
}

/* ── RELATED ── */
.car-related { background: #f7f7f7; padding: 7vw 0; }
.car-related-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.car-related-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
}
.car-related-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #222222;
  line-height: 1.1;
  letter-spacing: -0.025em;
}
.car-related-title em { font-style: normal; color: #ff385c; }
.car-related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.car-rel-item {
  background: #FFFFFF;
  border: 1px solid #dddddd;
  border-radius: 0;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
}
.car-rel-item:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}
.car-rel-img { overflow: hidden; }
.car-rel-img img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94);
}
.car-rel-item:hover .car-rel-img img { transform: scale(1.05); }
.car-rel-body { padding: 1.25rem 1.25rem 1.5rem; }
.car-rel-cat {
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
.car-rel-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #222222;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
}
.car-rel-metas { display: flex; flex-direction: column; gap: 0.4rem; }
.car-rel-meta { display: flex; gap: 1rem; align-items: baseline; }
.car-rel-cta {
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
.car-rel-item:hover .car-rel-cta { gap: 14px; }
.car-rel-arr {
  width: 16px; height: 1px; background: #ff385c;
  position: relative; transition: width 0.3s; flex-shrink: 0;
}
.car-rel-arr::after {
  content: ''; position: absolute; right: 0; top: -3px;
  width: 6px; height: 6px;
  border-right: 1.5px solid #ff385c;
  border-top: 1.5px solid #ff385c;
  transform: rotate(45deg);
}
.car-rel-item:hover .car-rel-arr { width: 24px; }

/* ── LIGHTBOX ── */
.car-lightbox {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(15,23,42,0.97);
  display: flex;
  align-items: center;
  justify-content: center;
}
.car-lightbox-img {
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  display: block;
}
.car-lightbox-fade-enter-active,
.car-lightbox-fade-leave-active {
  transition: opacity 0.28s ease;
}
.car-lightbox-fade-enter-from,
.car-lightbox-fade-leave-to {
  opacity: 0;
}
.car-lightbox-close {
  position: absolute;
  top: 24px; right: 28px;
  background: none; border: none;
  color: #FFFFFF; cursor: pointer;
  font-size: 0.7rem; letter-spacing: 0.15em; font-weight: 600;
  text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.car-lightbox-close-x { width: 22px; height: 22px; position: relative; }
.car-lightbox-close-x::before,
.car-lightbox-close-x::after {
  content: ''; position: absolute; top: 50%; left: 0;
  width: 100%; height: 1.5px; background: #FFFFFF;
}
.car-lightbox-close-x::before { transform: rotate(45deg); }
.car-lightbox-close-x::after  { transform: rotate(-45deg); }
.car-lightbox-nav {
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
.car-lightbox-nav:hover { border-color: #ff385c; background: rgba(96,165,250,0.1); }
.car-lightbox-nav--prev { left: 24px; }
.car-lightbox-nav--next { right: 24px; }
.car-lightbox-count {
  position: absolute; bottom: 24px;
  font-size: 0.65rem; letter-spacing: 0.15em;
  color: rgba(255,255,255,0.4);
  font-weight: 500;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .car-intro { grid-template-columns: 1fr; gap: 3rem; padding: 10vw 6vw; }
  .car-gallery-grid { grid-template-columns: 1fr; border-radius: 0; }
  .car-gallery-grid .car-gi:first-child { grid-column: span 1; }
  .car-gi img { min-height: 260px !important; }
  .car-highlights-inner { grid-template-columns: 1fr; }
  .car-hl-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
  .car-related-grid { grid-template-columns: 1fr; }
  .car-related-head { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .car-gallery-inner { padding: 0 6vw; }
  .car-related-inner { padding: 0 6vw; }
  .car-highlights { padding: 10vw 6vw; }
  .car-hero-content { padding: 0 6vw 8vh; }
  .car-title { font-size: 3rem; }
  .car-row-group { grid-template-columns: 1fr; background: none; }
  .car-row-group .car-row { padding: 14px 0; }
}
</style>

<template>
  <div class="car-page">

    <!-- ── LIGHTBOX ── -->
    <teleport to="body">
      <div v-if="lightboxOpen" class="car-lightbox" @click.self="lightboxOpen = false">
        <transition name="car-lightbox-fade" mode="out-in">
          <img
            :key="images[lightboxIndex]"
            :src="images[lightboxIndex]"
            class="car-lightbox-img"
            :alt="'Car Rental photo ' + (lightboxIndex + 1)"
          />
        </transition>
        <button class="car-lightbox-close" @click="lightboxOpen = false">
          Close <span class="car-lightbox-close-x" />
        </button>
        <button class="car-lightbox-nav car-lightbox-nav--prev" @click="prevImage">&#8592;</button>
        <button class="car-lightbox-nav car-lightbox-nav--next" @click="nextImage">&#8594;</button>
        <span class="car-lightbox-count">{{ lightboxIndex + 1 }} / {{ images.length }}</span>
      </div>
    </teleport>

    <!-- ── HERO ── -->
    <section class="car-hero">
      <img
        src="/eishi/car_rental/images/car01.png"
        class="car-hero-img"
        :class="{ ready }"
        alt="Car Rental"
      />
      <div class="car-hero-veil" />
      <div class="car-hero-content">
        <p class="car-eyebrow" :class="{ in: ready }">
          Transport &mdash; Philippines
        </p>
        <h1 class="car-title" :class="{ in: ready }">
          {{ t.carRental?.split(' ').slice(0, 1).join(' ') || 'Car' }}<br />
          <em>{{ t.carRental?.split(' ').slice(1).join(' ') || 'Rental' }}</em>
        </h1>
        <div class="car-hero-meta" :class="{ in: ready }">
          <span class="car-location">
            <span class="car-location-dot" />
            {{ t.carRentalLocation || 'Philippines' }}
          </span>
          <div class="car-scroll">
            <div class="car-scroll-bar" />
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── INTRO ── -->
    <div class="car-intro">

      <!-- Left: paragraph -->
      <div>
        <p class="car-label-tag">{{ t.carRentalDescription || 'Vehicle Services' }}</p>
        <div class="car-paragraphs">
          <p class="car-p">{{ t.carRentalP1 }}</p>
        </div>
      </div>

      <!-- Right: details table -->
      <div class="car-table">
        <div class="car-row">
          <span class="car-row-lbl">{{ t.carRentalDetails?.businessNameLabel || 'Business Name' }}</span>
          <span class="car-row-val">{{ t.carRentalDetails?.businessNameValue }}</span>
        </div>
        <div class="car-row">
          <span class="car-row-lbl">{{ t.carRentalDetails?.operatingAreaLabel || 'Operating Area' }}</span>
          <span class="car-row-val">{{ t.carRentalDetails?.operatingAreaValue }}</span>
        </div>
        <div class="car-row">
          <span class="car-row-lbl">{{ t.carRentalDetails?.primaryUseLabel || 'Primary Use' }}</span>
          <span class="car-row-val">{{ t.carRentalDetails?.primaryUseValue }}</span>
        </div>
        <div class="car-row">
          <span class="car-row-lbl">{{ t.carRentalDetails?.ownershipLabel || 'Ownership' }}</span>
          <span class="car-row-val">{{ t.carRentalDetails?.ownershipValue }}</span>
        </div>

        <div class="car-row-group">
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.vehicleOriginLabel || 'Vehicle Origin' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.vehicleOriginValue }}</span>
          </div>
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.maintenanceStandardLabel || 'Maintenance' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.maintenanceStandardValue }}</span>
          </div>
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.comfortLevelLabel || 'Comfort Level' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.comfortLevelValue }}</span>
          </div>
        </div>

        <div class="car-row-group">
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.customerBaseLabel || 'Customer Base' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.customerBaseValue }}</span>
          </div>
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.popularWithLabel || 'Popular With' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.popularWithValue }}</span>
          </div>
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.valuePropositionLabel || 'Value' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.valuePropositionValue }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ── FLEET GALLERY ── -->
    <section class="car-gallery-section">
      <div class="car-gallery-inner">
        <div class="car-gallery-head">
          <span class="car-gallery-num">01</span>
          <h2 class="car-gallery-title">Our Fleet</h2>
        </div>
        <div class="car-gallery-grid">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="car-gi"
            @click="openLightbox(index)"
          >
            <img :src="image" :alt="'Car Rental vehicle ' + (index + 1)" loading="lazy" />
            <div class="car-gi-overlay">
              <div class="car-gi-zoom">
                <span class="car-zoom-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── HIGHLIGHTS STRIP ── -->
    <section class="car-highlights">
      <div class="car-highlights-inner">
        <div class="car-hl-item">
          <span class="car-hl-num">JP</span>
          <span class="car-hl-label">{{ t.carRentalDetails?.vehicleOriginLabel || 'Vehicle Origin' }}</span>
          <p class="car-hl-desc">{{ t.carRentalDetails?.vehicleOriginValue }}</p>
        </div>
        <div class="car-hl-item">
          <span class="car-hl-num">A+</span>
          <span class="car-hl-label">{{ t.carRentalDetails?.maintenanceStandardLabel || 'Maintenance Standard' }}</span>
          <p class="car-hl-desc">{{ t.carRentalDetails?.maintenanceStandardValue }}</p>
        </div>
        <div class="car-hl-item">
          <span class="car-hl-num">PH</span>
          <span class="car-hl-label">{{ t.carRentalDetails?.operatingAreaLabel || 'Operating Area' }}</span>
          <p class="car-hl-desc">{{ t.carRentalDetails?.operatingAreaValue }}</p>
        </div>
      </div>
    </section>

    <!-- ── RELATED PROPERTIES ── -->
    <section class="car-related">
      <div class="car-related-inner">
        <div class="car-related-head">
          <h2 class="car-related-title">
            {{ t.relatedProperties || 'Related' }}<br /><em>Properties</em>
          </h2>
        </div>
        <div class="car-related-grid">
          <div
            v-for="(property, index) in translatedProperties"
            :key="index"
            class="car-rel-item"
            @click="$router.push(property.route)"
          >
            <div class="car-rel-img">
              <img :src="property.image" :alt="property.title" loading="lazy" />
            </div>
            <div class="car-rel-body">
              <p class="car-rel-cat">{{ t.relatedPropertyCategory || 'Holdings' }}</p>
              <h3 class="car-rel-name">{{ property.title }}</h3>
              <div class="car-rel-metas">
                <template v-for="(value, key) in property.details" :key="key">
                  <div v-if="key !== 'description'" class="car-rel-meta">
                    <span class="car-row-lbl">{{ key }}</span>
                    <span class="car-row-val" style="font-size:0.85rem;">{{ value }}</span>
                  </div>
                </template>
              </div>
              <span class="car-rel-cta">
                {{ t.viewProperty || 'View Details' }}
                <span class="car-rel-arr" />
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
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'CarRental',

  data() {
    return {
      ready: false,
      lightboxOpen: false,
      lightboxIndex: 0,

      images: [
        '/eishi/car_rental/images/car01.png',
        '/eishi/car_rental/images/car02.webp',
        '/eishi/car_rental/images/car03.webp',
        '/eishi/car_rental/images/car04.webp',
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
      const galleryItems = this.$el.querySelectorAll('.car-gi')
      galleryItems.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            delay: (i % 2) * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Highlights strip
      const hlItems = this.$el.querySelectorAll('.car-hl-item')
      hlItems.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0,
            duration: 0.65,
            delay: i * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Related cards
      const relItems = this.$el.querySelectorAll('.car-rel-item')
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
