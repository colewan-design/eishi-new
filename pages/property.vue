<style>
.props-page {
  font-family: 'Inter', sans-serif;
  background: #FFFFFF;
  color: #222222;
}

* { box-sizing: border-box; }

/* ── PAGE HERO ── */
.ph-hero {
  background: #0F172A;
  padding: 10rem 8vw 5rem;
  position: relative;
  overflow: hidden;
}

.ph-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/eishi/pangasinan_farm/images/Gemini_Generated_Image_cs6b9xcs6b9xcs6b.png') center/cover no-repeat;
  opacity: 0.12;
  z-index: 0;
}

.ph-hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 3rem;
}

.ph-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ff385c;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.8s 0.1s ease, transform 0.8s 0.1s ease;
}

.ph-eyebrow.in { opacity: 1; transform: none; }

.ph-eyebrow::before {
  content: '';
  display: block;
  width: 26px;
  height: 2px;
  background: #ff385c;
  border-radius: 1px;
}

.ph-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.05;
  letter-spacing: -0.025em;
  margin: 0 0 0.5rem;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 1s 0.3s ease, transform 1s 0.3s ease;
}

.ph-title em { font-style: italic; color: #ff385c; font-weight: 400; }
.ph-title.in { opacity: 1; transform: none; }

.ph-sub {
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.75;
  max-width: 360px;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s 0.6s ease, transform 0.8s 0.6s ease;
}

.ph-sub.in { opacity: 1; transform: none; }

.ph-count {
  font-size: clamp(5rem, 10vw, 9rem);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.05);
  line-height: 1;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 1s 0.5s ease;
  letter-spacing: -0.04em;
}

.ph-count.in { opacity: 1; }

/* ── FILTER BAR ── */
.filter-bar {
  background: #FFFFFF;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.filter-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 8vw;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.filter-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #929292;
  white-space: nowrap;
}

.filter-selects {
  display: flex;
  gap: 1rem;
  flex: 1;
  flex-wrap: wrap;
}

.filter-field {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 160px;
}

.filter-field-label {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #929292;
}

.filter-select {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #222222;
  background: transparent;
  border: none;
  border-bottom: 1.5px solid #dddddd;
  padding: 6px 24px 6px 0;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2394A3B8'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 4px center;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s;
}

.filter-select:focus { border-color: #ff385c; }

.filter-divider {
  width: 1px;
  height: 32px;
  background: #dddddd;
  flex-shrink: 0;
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 2px solid #ff385c;
  color: #ff385c;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 9px 18px;
  border-radius: 0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.15s;
  white-space: nowrap;
}

.filter-btn:hover {
  background: #ff385c;
  color: #fff;
  transform: translateY(-1px);
}

.filter-count {
  font-size: 0.75rem;
  font-weight: 600;
  color: #929292;
  margin-left: auto;
  white-space: nowrap;
}

/* ── PROPERTY LIST ── */
.props-list { background: #f7f7f7; }

.prop-item {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.25s;
}

.prop-item:first-child { }
.prop-item:hover { background: #EFF6FF; }
.prop-item:hover .pi-img img { transform: scale(1.04); }

.prop-item--r .prop-text { order: 2; }
.prop-item--r .pi-img   { order: 1; }

.prop-text {
  padding: 5vw 4vw 5vw 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.prop-item--r .prop-text { padding: 5vw 0 5vw 4vw; }

.prop-num {
  font-size: 3rem;
  font-weight: 700;
  color: #dddddd;
  line-height: 1;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}

.prop-cat {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 0;
  margin-bottom: 1rem;
  color: #ff385c;
  background: #EFF6FF;
}

.prop-cat--real-estate {
  color: #166534;
  background: #DCFCE7;
}

.prop-cat--operating {
  color: #6a6a6a;
  background: #F1F5F9;
}

.prop-name {
  font-size: clamp(1.6rem, 2.5vw, 2.4rem);
  font-weight: 700;
  color: #222222;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.prop-desc {
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.75;
  color: #6a6a6a;
  max-width: 380px;
  margin-bottom: 2rem;
}

.prop-metas {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: 2.5rem;
  padding-top: 1.5rem;
}

.prop-meta-row { display: flex; gap: 1.5rem; align-items: baseline; }

.mk {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #929292;
  min-width: 72px;
}

.mv {
  font-size: 0.9rem;
  color: #222222;
  font-weight: 500;
}

.prop-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ff385c;
  border-bottom: 2px solid #EFF6FF;
  padding-bottom: 3px;
  align-self: flex-start;
  transition: gap 0.25s, border-color 0.25s;
}

.prop-cta-arr {
  width: 16px;
  height: 1.5px;
  background: #ff385c;
  position: relative;
  transition: width 0.25s;
}

.prop-cta-arr::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3px;
  width: 6px;
  height: 6px;
  border-right: 1.5px solid #ff385c;
  border-top: 1.5px solid #ff385c;
  transform: rotate(45deg);
}

.prop-item:hover .prop-cta { gap: 14px; border-color: #ff385c; }
.prop-item:hover .prop-cta-arr { width: 24px; }

.pi-img { overflow: hidden; }

.pi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  min-height: 440px;
  transition: transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ── EMPTY STATE ── */
.empty-state {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8vw;
  text-align: center;
}

.empty-num {
  font-size: 6rem;
  font-weight: 700;
  color: #dddddd;
  line-height: 1;
  margin-bottom: 1.5rem;
}

.empty-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: #929292;
  letter-spacing: 0.05em;
}

/* ── MOBILE ── */
.mobile-props {
  background: #f7f7f7;
  padding: 1.5rem 0 4rem;
}

.mobile-prop-card {
  background: #FFFFFF;
  margin: 0 1.25rem 1.25rem;
  border-radius: 0;
  border: 1px solid #dddddd;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
}

.mobile-prop-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.mobile-img { overflow: hidden; position: relative; }

.mobile-img img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.mobile-prop-card:hover .mobile-img img { transform: scale(1.04); }

.mobile-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.7), transparent 50%);
}

.mobile-img-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 1.2rem;
}

.mobile-img-cat {
  display: inline-block;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 0;
  margin-bottom: 0.5rem;
  color: #ff385c;
  background: rgba(0, 102, 204, 0.35);
}

.mobile-img-cat--real-estate {
  color: #86EFAC;
  background: rgba(22, 101, 52, 0.5);
}

.mobile-img-cat--operating {
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.12);
}

.mobile-img-name {
  font-size: 1.35rem;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.mobile-prop-body { padding: 1.25rem; }

.mobile-prop-desc {
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.7;
  color: #6a6a6a;
  margin-bottom: 1rem;
}

.mobile-metas {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-top: 0.9rem;
}

.mobile-meta-row { display: flex; gap: 1rem; align-items: baseline; }

.mobile-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ff385c;
}

/* mobile hero */
.ph-hero-mobile {
  background: #0F172A;
  padding: 7rem 1.5rem 3rem;
  position: relative;
  overflow: hidden;
}

.ph-hero-mobile::after {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/eishi/pangasinan_farm/images/Gemini_Generated_Image_cs6b9xcs6b9xcs6b.png') center/cover no-repeat;
  opacity: 0.12;
  z-index: 0;
}

.ph-hero-mobile-inner { position: relative; z-index: 1; }

/* mobile filter */
.filter-bar-mobile {
  background: #FFFFFF;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.filter-row { display: flex; gap: 0.75rem; }

.filter-field-mobile {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.filter-btn-mobile {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid #ff385c;
  color: #ff385c;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 11px;
  border-radius: 0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.filter-btn-mobile:hover { background: #ff385c; color: #fff; }

@media (max-width: 768px) {
  .ph-hero { display: none; }
  .filter-bar { display: none; }
  .props-list { display: none; }
}

@media (min-width: 769px) {
  .ph-hero-mobile { display: none; }
  .filter-bar-mobile { display: none; }
  .mobile-props { display: none; }
}

/* ── CUSTOM PROPERTY-TYPE DROPDOWN ── */
.prop-type-select {
  position: relative;
  font-family: 'Inter', sans-serif;
}

.prop-type-trigger {
  display: flex;
  align-items: center;
  gap: 7px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #222222;
  padding: 0;
  white-space: nowrap;
}

.prop-type-placeholder { color: #929292; }

.prop-type-arrow {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 1.5px solid #929292;
  border-bottom: 1.5px solid #929292;
  transform: rotate(45deg);
  margin-top: -3px;
  transition: transform 0.2s;
}

.prop-type-select.open .prop-type-arrow {
  transform: rotate(-135deg);
  margin-top: 3px;
}

.prop-type-panel {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 200px;
  background: #FFFFFF;
  border: 1px solid #dddddd;
  border-radius: 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  z-index: 200;
  padding: 6px 0;
  overflow: hidden;
}

.prop-type-option {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 14px;
  font-size: 0.875rem;
  font-weight: 400;
  color: #222222;
  cursor: pointer;
  transition: background 0.15s;
}

.prop-type-option:hover { background: #f7f7f7; }
.prop-type-option.active { color: #ff385c; font-weight: 600; }

.type-chip {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #ff385c;
}

.type-chip--real-estate { background: #166534; }
.type-chip--transport   { background: #6a6a6a; }
</style>

<template>
  <div class="props-page">

    <!-- ── DESKTOP ── -->

    <!-- Hero -->
    <section class="ph-hero">
      <div class="ph-hero-inner">
        <div class="ph-left">
          <p class="ph-eyebrow" :class="{ in: ready }">
            {{ t.exploreEishi }}
          </p>
          <h1 class="ph-title" :class="{ in: ready }">
            {{ t.diversePropertyHoldings }}<br />
            <em>{{ t.propertyHoldings }}</em>
          </h1>
          <p class="ph-sub" :class="{ in: ready }">
            {{ t.propertiesSubtitle }}
          </p>
        </div>
        <div class="ph-count" :class="{ in: ready }">
          {{ twoDigits(filteredProperties.length) }}
        </div>
      </div>
    </section>

    <!-- Filter Bar -->
    <div class="filter-bar">
      <div class="filter-inner">
        <span class="filter-label">{{ t.filter }}</span>
        <div class="filter-selects">

          <div class="filter-field">
            <span class="filter-field-label">{{ t.location }}</span>
            <div class="prop-type-select" :class="{ open: locationOpen }">
              <button class="prop-type-trigger" @click.stop="locationOpen = !locationOpen">
                <span v-if="filters.location">{{ filters.location }}</span>
                <span v-else class="prop-type-placeholder">{{ t.allLocations }}</span>
                <span class="prop-type-arrow"></span>
              </button>
              <div class="prop-type-panel" v-show="locationOpen">
                <div class="prop-type-option" @click.stop="selectLocation(null)">{{ t.allLocations }}</div>
                <div
                  v-for="loc in translatedLocations"
                  :key="loc"
                  class="prop-type-option"
                  :class="{ active: filters.location === loc }"
                  @click.stop="selectLocation(loc)"
                >{{ loc }}</div>
              </div>
            </div>
          </div>

          <div class="filter-divider" />

          <div class="filter-field">
            <span class="filter-field-label">{{ t.property }}</span>
            <div class="prop-type-select" :class="{ open: propTypeOpen }">
              <button class="prop-type-trigger" @click.stop="propTypeOpen = !propTypeOpen">
                <template v-if="filters.property">
                  <span class="type-chip" :class="getPropertyTypeClass(filters.property)"></span>
                  {{ filters.property }}
                </template>
                <span v-else class="prop-type-placeholder">{{ t.allProperties }}</span>
                <span class="prop-type-arrow"></span>
              </button>
              <div class="prop-type-panel" v-show="propTypeOpen">
                <div class="prop-type-option" @click.stop="selectPropertyType(null)">
                  {{ t.allProperties }}
                </div>
                <div
                  v-for="pt in translatedPropertyTypes"
                  :key="pt"
                  class="prop-type-option"
                  :class="{ active: filters.property === pt }"
                  @click.stop="selectPropertyType(pt)"
                >
                  <span class="type-chip" :class="getPropertyTypeClass(pt)"></span>
                  {{ pt }}
                </div>
              </div>
            </div>
          </div>

          <div class="filter-divider" />

          <div class="filter-field">
            <span class="filter-field-label">{{ t.type }}</span>
            <div class="prop-type-select" :class="{ open: typeOpen }">
              <button class="prop-type-trigger" @click.stop="typeOpen = !typeOpen">
                <template v-if="filters.type">
                  <span class="type-chip" :class="getTypeChipClass(filters.type)"></span>
                  {{ filters.type }}
                </template>
                <span v-else class="prop-type-placeholder">{{ t.allTypes }}</span>
                <span class="prop-type-arrow"></span>
              </button>
              <div class="prop-type-panel" v-show="typeOpen">
                <div class="prop-type-option" @click.stop="selectType(null)">{{ t.allTypes }}</div>
                <div
                  v-for="tp in translatedTypes"
                  :key="tp"
                  class="prop-type-option"
                  :class="{ active: filters.type === tp }"
                  @click.stop="selectType(tp)"
                >
                  <span class="type-chip" :class="getTypeChipClass(tp)"></span>
                  {{ tp }}
                </div>
              </div>
            </div>
          </div>

        </div>

        <button class="filter-btn" @click="applyFilters">
          {{ t.search }}
          <span style="display:inline-block;width:14px;height:1.5px;background:currentColor;position:relative;">
            <span style="position:absolute;right:0;top:-3px;width:6px;height:6px;border-right:1.5px solid currentColor;border-top:1.5px solid currentColor;transform:rotate(45deg);display:block;"></span>
          </span>
        </button>

        <span class="filter-count">
          {{ filteredProperties.length }} {{ t.results }}
        </span>
      </div>
    </div>

    <!-- Property List -->
    <section class="props-list">
      <div
        v-for="(property, index) in filteredProperties"
        :key="index"
        class="prop-item"
        :class="{ 'prop-item--r': index % 2 !== 0 }"
        @click="$router.push(property.route)"
      >
        <div class="prop-text">
          <div class="prop-num">{{ twoDigits(index + 1) }}</div>
          <p class="prop-cat" :class="getTypeClass(property)">{{ property.tag || getCategoryLabel(property) }}</p>
          <h2 class="prop-name">{{ property.title }}</h2>
          <p v-if="property.details?.description" class="prop-desc">
            {{ property.details.description }}
          </p>

          <div class="prop-metas">
            <template v-for="(value, key) in property.details" :key="key">
              <div v-if="key !== 'description'" class="prop-meta-row">
                <span class="mk">{{ translatedPropertyLabels[key] || key }}</span>
                <span class="mv">{{ value }}</span>
              </div>
            </template>
          </div>

          <span class="prop-cta">
            {{ t.viewProperty }}
            <span class="prop-cta-arr" />
          </span>
        </div>

        <div class="pi-img">
          <img :src="property.image" :alt="property.title" loading="lazy" />
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProperties.length === 0" class="empty-state">
        <div class="empty-num">—</div>
        <p class="empty-text">{{ t.noResults }}</p>
      </div>
    </section>


    <!-- ── MOBILE ── -->

    <!-- Mobile Hero -->
    <section class="ph-hero-mobile">
      <div class="ph-hero-mobile-inner">
        <p class="ph-eyebrow" style="opacity:1;transform:none;margin-bottom:1rem;">
          {{ t.exploreEishi }}
        </p>
        <h1 class="ph-title" style="font-size:2.5rem;opacity:1;transform:none;">
          {{ t.diversePropertyHoldings }}<br />
          <em>{{ t.propertyHoldings }}</em>
        </h1>
      </div>
    </section>

    <!-- Mobile Filter -->
    <div class="filter-bar-mobile">
      <div class="filter-row">
        <div class="filter-field-mobile">
          <span class="filter-field-label">{{ t.location }}</span>
          <div class="prop-type-select" :class="{ open: locationOpen }">
            <button class="prop-type-trigger" @click.stop="locationOpen = !locationOpen">
              <span v-if="filters.location">{{ filters.location }}</span>
              <span v-else class="prop-type-placeholder">{{ t.allLocations }}</span>
              <span class="prop-type-arrow"></span>
            </button>
            <div class="prop-type-panel" v-show="locationOpen">
              <div class="prop-type-option" @click.stop="selectLocation(null)">{{ t.allLocations }}</div>
              <div
                v-for="loc in translatedLocations"
                :key="loc"
                class="prop-type-option"
                :class="{ active: filters.location === loc }"
                @click.stop="selectLocation(loc)"
              >{{ loc }}</div>
            </div>
          </div>
        </div>
        <div class="filter-field-mobile">
          <span class="filter-field-label">{{ t.property }}</span>
          <div class="prop-type-select" :class="{ open: propTypeOpen }">
            <button class="prop-type-trigger" @click.stop="propTypeOpen = !propTypeOpen">
              <template v-if="filters.property">
                <span class="type-chip" :class="getPropertyTypeClass(filters.property)"></span>
                {{ filters.property }}
              </template>
              <span v-else class="prop-type-placeholder">{{ t.allProperties }}</span>
              <span class="prop-type-arrow"></span>
            </button>
            <div class="prop-type-panel" v-show="propTypeOpen">
              <div class="prop-type-option" @click.stop="selectPropertyType(null)">
                {{ t.allProperties }}
              </div>
              <div
                v-for="pt in translatedPropertyTypes"
                :key="pt"
                class="prop-type-option"
                :class="{ active: filters.property === pt }"
                @click.stop="selectPropertyType(pt)"
              >
                <span class="type-chip" :class="getPropertyTypeClass(pt)"></span>
                {{ pt }}
              </div>
            </div>
          </div>
        </div>
        <div class="filter-field-mobile">
          <span class="filter-field-label">{{ t.type }}</span>
          <div class="prop-type-select" :class="{ open: typeOpen }">
            <button class="prop-type-trigger" @click.stop="typeOpen = !typeOpen">
              <template v-if="filters.type">
                <span class="type-chip" :class="getTypeChipClass(filters.type)"></span>
                {{ filters.type }}
              </template>
              <span v-else class="prop-type-placeholder">{{ t.allTypes }}</span>
              <span class="prop-type-arrow"></span>
            </button>
            <div class="prop-type-panel" v-show="typeOpen">
              <div class="prop-type-option" @click.stop="selectType(null)">{{ t.allTypes }}</div>
              <div
                v-for="tp in translatedTypes"
                :key="tp"
                class="prop-type-option"
                :class="{ active: filters.type === tp }"
                @click.stop="selectType(tp)"
              >
                <span class="type-chip" :class="getTypeChipClass(tp)"></span>
                {{ tp }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="filter-btn-mobile" @click="applyFilters">
        {{ t.search }}
      </button>
    </div>

    <!-- Mobile Cards -->
    <div class="mobile-props">
      <div
        v-for="(property, index) in filteredProperties"
        :key="'m' + index"
        class="mobile-prop-card"
        @click="$router.push(property.route)"
      >
        <div class="mobile-img">
          <img :src="property.image" :alt="property.title" loading="lazy" />
          <div class="mobile-img-overlay" />
          <div class="mobile-img-label">
            <p class="mobile-img-cat" :class="getTypeClass(property, 'mobile-img-cat')">{{ property.tag || getCategoryLabel(property) }}</p>
            <h2 class="mobile-img-name">{{ property.title }}</h2>
          </div>
        </div>
        <div class="mobile-prop-body">
          <p v-if="property.details?.description" class="mobile-prop-desc">
            {{ property.details.description }}
          </p>
          <div class="mobile-metas">
            <template v-for="(value, key) in property.details" :key="key">
              <div v-if="key !== 'description'" class="mobile-meta-row">
                <span class="mk">{{ translatedPropertyLabels[key] || key }}</span>
                <span class="mv">{{ value }}</span>
              </div>
            </template>
          </div>
          <span class="mobile-cta">
            {{ t.viewProperty }} →
          </span>
        </div>
      </div>

      <div v-if="filteredProperties.length === 0" class="empty-state">
        <div class="empty-num">—</div>
        <p class="empty-text">{{ t.noResults }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useLanguageStore } from '~/stores/languageStore'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'PropertyListingPage',

  data() {
    return {
      ready: false,
      locationOpen: false,
      propTypeOpen: false,
      typeOpen: false,
      filters: {
        location: null,
        property: null,
        type: null,
      },
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),

    translatedPropertyLabels() {
      return this.t.properties || {}
    },

    translatedTypes() {
      return this.t.types || []
    },

    translatedLocations() {
      return this.t.locations || []
    },

    translatedPropertyTypes() {
      return this.t.propertyTypes || []
    },

    filteredProperties() {
      const props = this.t.properties || []
      return props.filter((p) => {
        const locationMatch =
          !this.filters.location ||
          p.details?.Location?.includes(this.filters.location)

        const propertyMatch =
          !this.filters.property ||
          p.title?.toLowerCase().includes(this.filters.property.toLowerCase())

        const typeMatch =
          !this.filters.type ||
          p.type === this.filters.type

        return locationMatch && propertyMatch && typeMatch
      })
    },
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => { this.ready = true }, 180)
    })
    this._closeDropdown = () => { this.locationOpen = false; this.propTypeOpen = false; this.typeOpen = false }
    document.addEventListener('click', this._closeDropdown)
  },

  beforeUnmount() {
    document.removeEventListener('click', this._closeDropdown)
  },

  methods: {
    twoDigits(n) {
      return n < 10 ? '0' + n : String(n)
    },

    selectLocation(val) {
      this.filters.location = val
      this.locationOpen = false
    },

    selectPropertyType(val) {
      this.filters.property = val
      this.propTypeOpen = false
    },

    selectType(val) {
      this.filters.type = val
      this.typeOpen = false
    },

    getTypeChipClass(typeName) {
      const n = (typeName || '').toLowerCase()
      if (n === 'real estate' || n === '保有不動産') return 'type-chip--real-estate'
      if (n === 'transport' || n === 'operating assets' || n === '事業資産') return ''
      return ''
    },

    getPropertyTypeClass(name) {
      const n = (name || '').toLowerCase()
      if (n.includes('condo') || n.includes('residential') || n.includes('コンドミニアム') || n.includes('住宅'))
        return 'type-chip--real-estate'
      if (n.includes('car') || n.includes('rental') || n.includes('レンタカー'))
        return 'type-chip--transport'
      return ''
    },

    getCategoryLabel(property) {
      const title = (property.title || '').toLowerCase()
      if (title.includes('farm') || title.includes('poultry') || title.includes('feed')
        || title.includes('農場') || title.includes('養鶏') || title.includes('飼料'))
        return this.t.categoryAgriculture
      if (title.includes('condo') || title.includes('residential') || title.includes('land')
        || title.includes('コンドミニアム') || title.includes('住宅'))
        return this.t.categoryRealEstate
      if (title.includes('car') || title.includes('rental') || title.includes('レンタカー'))
        return this.t.categoryTransport
      return this.t.categoryHoldings
    },

    getTypeClass(property, prefix = 'prop-cat') {
      const type = (property.type || '').toLowerCase()
      if (type === 'real estate' || type === '保有不動産') return `${prefix}--real-estate`
      if (type === 'operating assets' || type === '事業資産') return `${prefix}--operating`
      return ''
    },

    applyFilters() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
