<style>
.pan-page { font-family: 'Inter', sans-serif; background: #FFFFFF; color: #222222; }
* { box-sizing: border-box; }

/* ── HERO ── */
.pan-hero { position: relative; height: 100vh; overflow: hidden; background: #0F172A; }
.pan-hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.5; transform: scale(1.06); transition: transform 8s ease; }
.pan-hero-img.ready { transform: scale(1); }
.pan-hero-veil { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(15,23,42,0.2) 40%, rgba(15,23,42,0.75) 100%); }
.pan-hero-content { position: relative; z-index: 2; height: 100%; max-width: 1200px; margin: 0 auto; padding: 0 8vw 8vh; display: flex; flex-direction: column; justify-content: flex-end; }
.pan-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #ff385c; display: flex; align-items: center; gap: 10px; margin-bottom: 1.4rem; opacity: 0; transform: translateY(10px); transition: opacity 0.9s 0.2s ease, transform 0.9s 0.2s ease; }
.pan-eyebrow::before { content: ''; display: block; width: 26px; height: 2px; background: #ff385c; border-radius: 1px; }
.pan-eyebrow.in { opacity: 1; transform: none; }
.pan-title { font-size: clamp(3rem, 8vw, 7rem); font-weight: 700; color: #FFFFFF; line-height: 0.95; letter-spacing: -0.025em; margin: 0 0 2rem; opacity: 0; transform: translateY(28px); transition: opacity 1.1s 0.4s ease, transform 1.1s 0.4s ease; }
.pan-title em { font-style: italic; color: #ff385c; font-weight: 400; }
.pan-title.in { opacity: 1; transform: none; }
.pan-hero-meta { display: flex; align-items: center; gap: 2.5rem; opacity: 0; transform: translateY(12px); transition: opacity 0.8s 0.8s ease, transform 0.8s 0.8s ease; }
.pan-hero-meta.in { opacity: 1; transform: none; }
.pan-location { display: flex; align-items: center; gap: 8px; font-size: 0.875rem; font-weight: 400; color: rgba(255,255,255,0.6); }
.pan-location-dot { width: 5px; height: 5px; border-radius: 50%; background: #ff385c; flex-shrink: 0; }
.pan-scroll { display: flex; align-items: center; gap: 10px; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-left: auto; }
.pan-scroll-bar { width: 1px; height: 45px; background: rgba(255,255,255,0.2); animation: breathe 2.2s ease-in-out infinite; }
@keyframes breathe { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }

/* ── INTRO ── */
.pan-intro { max-width: 1200px; margin: 0 auto; padding: 7vw 8vw; display: grid; grid-template-columns: 1fr 1fr; gap: 6vw; align-items: start; }
.pan-label-tag { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #ff385c; display: flex; align-items: center; gap: 10px; margin-bottom: 2rem; }
.pan-label-tag::before { content: ''; display: block; width: 26px; height: 2px; background: #ff385c; border-radius: 1px; }
.pan-paragraphs { display: flex; flex-direction: column; gap: 1.4rem; }
.pan-p { font-size: 0.95rem; font-weight: 400; line-height: 1.85; color: #6a6a6a; }

/* ── DETAILS TABLE ── */
.pan-table { display: flex; flex-direction: column; }
.pan-row { padding: 14px 0; display: flex; flex-direction: column; gap: 4px; }
.pan-row-lbl { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #929292; }
.pan-row-val { font-size: 0.92rem; font-weight: 500; color: #222222; }
.pan-row-group { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 1px; background: #dddddd; }
.pan-row-group .pan-row { background: #FFFFFF; border-bottom: none; padding: 14px 12px; }

/* ── VIDEO ── */
.pan-video-section { background: #0F172A; position: relative; overflow: hidden; }
.pan-video-label { position: absolute; top: 2.5rem; left: 8vw; z-index: 2; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.35); display: flex; align-items: center; gap: 10px; }
.pan-video-label::before { content: ''; display: block; width: 20px; height: 2px; background: #ff385c; border-radius: 1px; }
.pan-video-section { height: 80vh; }
.pan-video-section video { width: 100%; height: 80vh; object-fit: cover; display: block; opacity: 0.75; }

/* ── AERIAL GALLERY ── */
.pan-gallery-section { background: #f7f7f7; padding: 6vw 0; }
.pan-gallery-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.pan-gallery-head { display: flex; align-items: baseline; gap: 1.5rem; margin-bottom: 2.5rem; padding-bottom: 1.5rem; }
.pan-gallery-num { font-size: 3.5rem; font-weight: 700; color: #dddddd; line-height: 1; flex-shrink: 0; letter-spacing: -0.03em; }
.pan-gallery-title { font-size: clamp(1.4rem, 2.8vw, 2.2rem); font-weight: 700; color: #222222; line-height: 1.15; letter-spacing: -0.02em; }
.pan-gallery-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: #dddddd; border-radius: 0; overflow: hidden; }
.pan-gallery-grid .pan-gi:first-child { grid-column: span 2; }
.pan-gi { overflow: hidden; cursor: pointer; position: relative; }
.pan-gi img { width: 100%; height: 100%; min-height: 340px; object-fit: cover; display: block; transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s; filter: brightness(0.9); }
.pan-gi:first-child img { min-height: 560px; }
.pan-gi:hover img { transform: scale(1.05); filter: brightness(1); }
.pan-gi-overlay { position: absolute; inset: 0; background: rgba(15,23,42,0); transition: background 0.4s; display: flex; align-items: center; justify-content: center; }
.pan-gi:hover .pan-gi-overlay { background: rgba(15,23,42,0.15); }
.pan-gi-zoom { width: 40px; height: 40px; border-radius: 0; border: 1.5px solid rgba(255,255,255,0.6); display: flex; align-items: center; justify-content: center; opacity: 0; transform: scale(0.8); transition: opacity 0.3s, transform 0.3s; }
.pan-gi:hover .pan-gi-zoom { opacity: 1; transform: scale(1); }
.pan-zoom-icon { width: 16px; height: 16px; position: relative; }
.pan-zoom-icon::before, .pan-zoom-icon::after { content: ''; position: absolute; background: #FFFFFF; }
.pan-zoom-icon::before { width: 1.5px; height: 16px; left: 50%; top: 0; }
.pan-zoom-icon::after  { width: 16px; height: 1.5px; left: 0; top: 50%; }

/* ── MAP ── */
.pan-map-section { background: #FFFFFF; padding: 5vw 8vw; }
.pan-map-inner { max-width: 1200px; margin: 0 auto; }
.pan-map-head { display: flex; align-items: baseline; gap: 1.5rem; margin-bottom: 2rem; padding-bottom: 1.5rem; }
.pan-map-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #ff385c; display: flex; align-items: center; gap: 10px; }
.pan-map-label::before { content: ''; display: block; width: 26px; height: 2px; background: #ff385c; border-radius: 1px; }
.pan-map-title { font-size: clamp(1.2rem, 2vw, 1.75rem); font-weight: 700; color: #222222; letter-spacing: -0.01em; }
.pan-map-wrapper { width: 100%; height: 460px; overflow: hidden; background: #f7f7f7; border-radius: 0; }
.pan-map-footer { display: flex; align-items: center; gap: 8px; margin-top: 1rem; font-size: 0.75rem; font-weight: 500; color: #929292; }
.pan-map-dot { width: 5px; height: 5px; border-radius: 50%; background: #ff385c; flex-shrink: 0; }

/* ── RELATED ── */
.pan-related { background: #f7f7f7; padding: 7vw 0; }
.pan-related-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.pan-related-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; padding-bottom: 2rem; }
.pan-related-title { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; color: #222222; line-height: 1.1; letter-spacing: -0.02em; }
.pan-related-title em { font-style: italic; color: #6a6a6a; font-weight: 400; }
.pan-related-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.pan-rel-item { background: #FFFFFF; border: 1px solid #dddddd; border-radius: 0; overflow: hidden; cursor: pointer; transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
.pan-rel-item:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); border-color: #CBD5E1; }
.pan-rel-img { overflow: hidden; }
.pan-rel-img img { width: 100%; height: 280px; object-fit: cover; display: block; transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94); filter: brightness(0.95); }
.pan-rel-item:hover .pan-rel-img img { transform: scale(1.04); filter: brightness(1); }
.pan-rel-body { padding: 1.25rem 1.25rem 1.5rem; }
.pan-rel-cat { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #ff385c; margin-bottom: 0.4rem; }
.pan-rel-name { font-size: 1.2rem; font-weight: 700; color: #222222; margin-bottom: 1rem; line-height: 1.2; letter-spacing: -0.01em; }
.pan-rel-metas { display: flex; flex-direction: column; gap: 0.5rem; }
.pan-rel-meta { display: flex; gap: 1rem; align-items: baseline; }
.pan-rel-cta { display: inline-flex; align-items: center; gap: 8px; margin-top: 1rem; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #ff385c; padding-bottom: 2px; border-bottom: 2px solid #EFF6FF; transition: gap 0.25s, border-color 0.25s; }
.pan-rel-item:hover .pan-rel-cta { gap: 14px; border-color: #ff385c; }
.pan-rel-arr { width: 14px; height: 1.5px; background: #ff385c; position: relative; transition: width 0.25s; flex-shrink: 0; }
.pan-rel-arr::after { content: ''; position: absolute; right: 0; top: -3px; width: 6px; height: 6px; border-right: 1.5px solid #ff385c; border-top: 1.5px solid #ff385c; transform: rotate(45deg); }
.pan-rel-item:hover .pan-rel-arr { width: 22px; }

/* ── LIGHTBOX ── */
.pan-lightbox { position: fixed; inset: 0; z-index: 999; background: rgba(15,23,42,0.97); display: flex; align-items: center; justify-content: center; }
.pan-lightbox-img { max-width: 90vw; max-height: 88vh; object-fit: contain; display: block; border-radius: 0; }
.pan-lightbox-fade-enter-active, .pan-lightbox-fade-leave-active { transition: opacity 0.28s ease; }
.pan-lightbox-fade-enter-from, .pan-lightbox-fade-leave-to { opacity: 0; }
.pan-lightbox-close { position: absolute; top: 24px; right: 28px; background: none; border: none; color: #FFFFFF; cursor: pointer; font-family: 'Inter', sans-serif; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; display: flex; align-items: center; gap: 10px; }
.pan-lightbox-close-x { width: 22px; height: 22px; position: relative; }
.pan-lightbox-close-x::before, .pan-lightbox-close-x::after { content: ''; position: absolute; top: 50%; left: 0; width: 100%; height: 1.5px; background: #FFFFFF; }
.pan-lightbox-close-x::before { transform: rotate(45deg); }
.pan-lightbox-close-x::after  { transform: rotate(-45deg); }
.pan-lightbox-nav { position: absolute; top: 50%; transform: translateY(-50%); background: none; border: 1.5px solid rgba(255,255,255,0.2); color: #FFFFFF; cursor: pointer; width: 50px; height: 50px; border-radius: 0; display: flex; align-items: center; justify-content: center; transition: border-color 0.2s, background 0.2s; font-size: 1.2rem; }
.pan-lightbox-nav:hover { border-color: #ff385c; background: rgba(96,165,250,0.1); }
.pan-lightbox-nav--prev { left: 24px; }
.pan-lightbox-nav--next { right: 24px; }
.pan-lightbox-count { position: absolute; bottom: 24px; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.12em; color: rgba(255,255,255,0.4); }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .pan-intro { grid-template-columns: 1fr; gap: 3rem; padding: 10vw 6vw; }
  .pan-gallery-grid { grid-template-columns: 1fr; }
  .pan-gallery-grid .pan-gi:first-child { grid-column: span 1; }
  .pan-gi img { min-height: 260px !important; }
  .pan-related-grid { grid-template-columns: 1fr; }
  .pan-related-head { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .pan-gallery-inner { padding: 0 6vw; }
  .pan-related-inner { padding: 0 6vw; }
  .pan-map-section { padding: 10vw 6vw; }
  .pan-map-wrapper { height: 320px; }
  .pan-hero-content { padding: 0 6vw 8vh; }
  .pan-video-section { height: 50vh; }
  .pan-video-section video { height: 50vh; }
  .pan-title { font-size: 2.8rem; }
  .pan-video-label { left: 6vw; }
  .pan-row-group { grid-template-columns: 1fr; background: none; }
  .pan-row-group .pan-row { padding: 14px 0; }
}
</style>

<template>
  <div class="pan-page">

    <!-- ── LIGHTBOX ── -->
    <teleport to="body">
      <div v-if="lightboxOpen" class="pan-lightbox" @click.self="lightboxOpen = false">
        <transition name="pan-lightbox-fade" mode="out-in">
          <img
            :key="lightboxImages[lightboxIndex]?.src || lightboxImages[lightboxIndex]"
            :src="lightboxImages[lightboxIndex]?.src || lightboxImages[lightboxIndex]"
            class="pan-lightbox-img"
            :alt="'Aerial photo ' + (lightboxIndex + 1)"
          />
        </transition>
        <button class="pan-lightbox-close" @click="lightboxOpen = false">
          Close <span class="pan-lightbox-close-x" />
        </button>
        <button class="pan-lightbox-nav pan-lightbox-nav--prev" @click="prevImage">&#8592;</button>
        <button class="pan-lightbox-nav pan-lightbox-nav--next" @click="nextImage">&#8594;</button>
        <span class="pan-lightbox-count">{{ lightboxIndex + 1 }} / {{ lightboxImages.length }}</span>
      </div>
    </teleport>

    <!-- ── HERO ── -->
    <section class="pan-hero">
      <img
        src="/eishi/pangasinan_farm/images/dji_fly_20250311_152206_0041_1741678733665_photo.webp"
        class="pan-hero-img"
        :class="{ ready }"
        alt="Pangasinan Farm"
      />
      <div class="pan-hero-veil" />
      <div class="pan-hero-content">
        <p class="pan-eyebrow" :class="{ in: ready }">
          Agriculture &mdash; Balungao, Pangasinan
        </p>
        <h1 class="pan-title" :class="{ in: ready }">
          {{ t.pangasinanFarm?.split(' ').slice(0, 1).join(' ') || 'Pangasinan' }}<br />
          <em>{{ t.pangasinanFarm?.split(' ').slice(1).join(' ') || 'Farm' }}</em>
        </h1>
        <div class="pan-hero-meta" :class="{ in: ready }">
          <span class="pan-location">
            <span class="pan-location-dot" />
            {{ t.pangasinanLocation || t.balungaoMunicipality || 'Balungao, Pangasinan' }}
          </span>
          <div class="pan-scroll">
            <div class="pan-scroll-bar" />
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── INTRO ── -->
    <div class="pan-intro">

      <!-- Left: paragraphs -->
      <div>
        <p class="pan-label-tag">{{ t.balungaoAgriDescription || 'Agricultural Holdings' }}</p>
        <div class="pan-paragraphs">
          <p class="pan-p">{{ t.pangasinanP1 }}</p>
          <p class="pan-p">{{ t.pangasinanP2 }}</p>
          <p class="pan-p">{{ t.pangasinanP3 }}</p>
          <p class="pan-p">{{ t.pangasinanP4 }}</p>
          <p class="pan-p">{{ t.pangasinanP5 }}</p>
        </div>
      </div>

      <!-- Right: details table -->
      <div class="pan-table">
        <div class="pan-row">
          <span class="pan-row-lbl">{{ t.propertyNameLabel || 'Property' }}</span>
          <span class="pan-row-val">{{ t.balungaoPropertyName }}</span>
        </div>
        <div class="pan-row">
          <span class="pan-row-lbl">{{ t.location || 'Location' }}</span>
          <span class="pan-row-val">{{ t.balungaoLocation }}</span>
        </div>
        <div class="pan-row">
          <span class="pan-row-lbl">{{ t.establishedAcquiredLabel || 'Established' }}</span>
          <span class="pan-row-val">{{ t.balungaoEstablished }}</span>
        </div>
        <div class="pan-row">
          <span class="pan-row-lbl">{{ t.municipalityClassificationLabel || 'Classification' }}</span>
          <span class="pan-row-val">{{ t.municipalityClassificationValue }}</span>
        </div>

        <div class="pan-row-group">
          <div class="pan-row">
            <span class="pan-row-lbl">{{ t.landAreaSqmLabel || 'Land Area (SQM)' }}</span>
            <span class="pan-row-val">240,000</span>
          </div>
          <div class="pan-row">
            <span class="pan-row-lbl">{{ t.diversionDamLabel || 'Diversion Dam' }}</span>
            <span class="pan-row-val">{{ t.diversionDamValue }}</span>
          </div>
          <div class="pan-row">
            <span class="pan-row-lbl">{{ t.proximitySmCarmenLabel || 'SM Carmen' }}</span>
            <span class="pan-row-val">9 km</span>
          </div>
        </div>

        <div class="pan-row-group">
          <div class="pan-row">
            <span class="pan-row-lbl">{{ t.proximityTplexLabel || 'TPLEX' }}</span>
            <span class="pan-row-val">6 km</span>
          </div>
          <div class="pan-row">
            <span class="pan-row-lbl">{{ t.plannedFacilitiesLabel || 'Planned Facilities' }}</span>
            <span class="pan-row-val">{{ t.plannedFacilitiesValue }}</span>
          </div>
          <div class="pan-row">
            <span class="pan-row-lbl">{{ t.purposeLabel || 'Purpose' }}</span>
            <span class="pan-row-val">{{ t.purposeNorthernLuzon }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ── AERIAL GALLERY ── -->
    <section class="pan-gallery-section">
      <div class="pan-gallery-inner">
        <div class="pan-gallery-head">
          <span class="pan-gallery-num">01</span>
          <h2 class="pan-gallery-title">Aerial Views</h2>
        </div>
        <div class="pan-gallery-grid">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="pan-gi"
            @click="openLightbox(index)"
          >
            <img
              :src="image.src || image"
              :alt="'Pangasinan Farm aerial ' + (index + 1)"
              loading="lazy"
            />
            <div class="pan-gi-overlay">
              <div class="pan-gi-zoom">
                <span class="pan-zoom-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MAP ── -->
    <section class="pan-map-section">
      <div class="pan-map-inner">
        <div class="pan-map-head">
          <p class="pan-map-label">Location</p>
          <h2 class="pan-map-title">Eishi Organic Farm &mdash; Balungao</h2>
        </div>
        <div class="pan-map-wrapper">
          <MapboxMap
            :lng="120.671343"
            :lat="15.868633"
            :zoom="14"
            label="Eishi Organic Farm, Balungao"
          />
        </div>
        <div class="pan-map-footer">
          <span class="pan-map-dot" />
          Eishi Organic Farm, Balungao, Pangasinan
        </div>
      </div>
    </section>

    <!-- ── RELATED PROPERTIES ── -->
    <section class="pan-related">
      <div class="pan-related-inner">
        <div class="pan-related-head">
          <h2 class="pan-related-title">
            {{ t.relatedProperties || 'Related' }}<br /><em>Properties</em>
          </h2>
        </div>
        <div class="pan-related-grid">
          <div
            v-for="(property, index) in translatedProperties"
            :key="index"
            class="pan-rel-item"
            @click="$router.push(property.route)"
          >
            <div class="pan-rel-img">
              <img :src="property.image" :alt="property.title" loading="lazy" />
            </div>
            <div class="pan-rel-body">
              <p class="pan-rel-cat">{{ t.relatedPropertyCategory || 'Holdings' }}</p>
              <h3 class="pan-rel-name">{{ property.title }}</h3>
              <div class="pan-rel-metas">
                <template v-for="(value, key) in property.details" :key="key">
                  <div v-if="key !== 'description'" class="pan-rel-meta">
                    <span class="pan-row-lbl">{{ key }}</span>
                    <span class="pan-row-val" style="font-size:0.85rem;">{{ value }}</span>
                  </div>
                </template>
              </div>
              <span class="pan-rel-cta">
                {{ t.viewProperty || 'View Details' }}
                <span class="pan-rel-arr" />
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
  name: 'PangasinanFarm',
  components: { HlsVideo, MapboxMap },

  data() {
    return {
      ready: false,
      lightboxOpen: false,
      lightboxImages: [],
      lightboxIndex: 0,

      images: [
        { src: '/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.webp' },
        { src: '/eishi/pangasinan_farm/images/dji_fly_20250311_152206_0041_1741678733665_photo.webp' },
        { src: '/eishi/pangasinan_farm/images/dji_fly_20250311_152212_0042_1741678730743_photo.webp' },
        { src: '/eishi/pangasinan_farm/images/dji_fly_20250311_152328_0046_1741678719333_photo.webp' },
        { src: '/eishi/pangasinan_farm/images/dji_fly_20250311_152442_0049_1741678708540_photo.webp' },
        { src: '/eishi/pangasinan_farm/images/dji_fly_20250311_160640_0074_1741681516533_photo.webp' },
        { src: '/eishi/pangasinan_farm/images/dji_fly_20250311_161732_0095_1741681475707_photo.webp' },
        { src: '/eishi/pangasinan_farm/images/dji_fly_20250311_161920_0098_1741681467332_photo.webp' },
        { src: '/eishi/pangasinan_farm/images/dji_fly_20250311_161950_0099_1741681464833_photo.webp' },
        { src: '/eishi/pangasinan_farm/images/dji_fly_20250311_162100_0102_1741681456944_photo.webp' },
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
      const galleryItems = this.$el.querySelectorAll('.pan-gi')
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

      // Related cards
      const relItems = this.$el.querySelectorAll('.pan-rel-item')
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
      this.lightboxImages = this.images
      this.lightboxIndex = index
      this.lightboxOpen = true
    },
    nextImage() {
      this.lightboxIndex = (this.lightboxIndex + 1) % this.lightboxImages.length
    },
    prevImage() {
      this.lightboxIndex = (this.lightboxIndex - 1 + this.lightboxImages.length) % this.lightboxImages.length
    },
  },
}
</script>
