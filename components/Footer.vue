<style>
/* ── Footer — Airbnb white canvas style ─────────────── */
.footer-wrap {
  font-family: 'Inter', -apple-system, sans-serif;
  background: #ffffff;
}

/* ── Main footer — Airbnb white canvas ───────────────── */
.footer-main {
  background: #ffffff;
  padding: 4rem 2rem 0;
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
}

/* Top grid */
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
}

.footer-logo {
  height: 28px;
  width: auto;
  object-fit: contain;
  display: block;
  margin-bottom: 1.5rem;
  filter: invert(1) brightness(0);
}

.footer-brand-desc {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6a6a6a;
  max-width: 280px;
  margin-bottom: 2rem;
}

.footer-social {
  display: flex;
  gap: 0.75rem;
}

.social-dot {
  width: 36px;
  height: 36px;
  border-radius: 0;
  border: 1px solid #CBD5E1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s;
  text-decoration: none;
  background: #ffffff;
}

.social-dot:hover {
  border-color: #ff385c;
  box-shadow: rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px 0, rgba(0,0,0,0.10) 0 4px 8px 0;
}

.social-dot svg {
  width: 14px;
  height: 14px;
  fill: #6a6a6a;
  transition: fill 0.2s;
}

.social-dot:hover svg { fill: #ff385c; }

.footer-col-label {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0;
  color: #222222;
  margin-bottom: 1.5rem;
  display: block;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-col ul li a,
.footer-col ul li span {
  font-size: 0.875rem;
  font-weight: 400;
  color: #6a6a6a;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
}

.footer-col ul li a:hover { color: #222222; }

/* Bottom legal band */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.footer-copy {
  font-size: 0.8125rem;
  font-weight: 400;
  color: #6a6a6a;
  letter-spacing: 0;
}

.footer-mark {
  font-size: 0.8125rem;
  font-style: italic;
  color: #929292;
}

/* ── Vuetify overrides ───────────────────────────────── */
:deep(.v-footer) {
  background: #ffffff !important;
  color: #222222 !important;
  font-family: 'Inter', sans-serif !important;
}

:deep(.v-footer a) {
  color: #6a6a6a !important;
  transition: color 0.2s !important;
}

:deep(.v-footer a:hover) {
  color: #222222 !important;
}

/* ── Responsive ──────────────────────────────────────── */
@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
}

@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 0.6rem; text-align: center; }
  .footer-main { padding: 3rem 1.25rem 0; }
}
</style>

<template>
  <footer class="footer-wrap">

    <!-- ── Main footer ────────────────────────────── -->
    <div class="footer-main">
      <div class="footer-inner">
        <div class="footer-grid">

          <!-- Brand col -->
          <div class="footer-brand">
            <img
              src="/eishi/eishi_logo-removebg-preview.webp"
              alt="Eishi Group"
              class="footer-logo"
            />
            <p class="footer-brand-desc">
              {{ t.footerDescription || 'A diversified holding company rooted in agriculture, real estate, and community development across the Philippine archipelago.' }}
            </p>
            <div class="footer-social">
              <!-- Email icon -->
              <a class="social-dot" :href="'mailto:' + t.eishiGmail" aria-label="Email">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <!-- Phone icon -->
              <a class="social-dot" href="tel:+639175755044" aria-label="Phone">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Navigation col -->
          <div class="footer-col">
            <span class="footer-col-label">Navigation</span>
            <ul>
              <li><router-link to="/">{{ t.home || 'Home' }}</router-link></li>
              <li><router-link to="/about">{{ t.about || 'About' }}</router-link></li>
              <li><router-link to="/contact">{{ t.contact || 'Contact' }}</router-link></li>
              <li><router-link to="/property">{{ t.ourBusiness || 'Our Business' }}</router-link></li>
            </ul>
          </div>

          <!-- Location col -->
          <div class="footer-col">
            <span class="footer-col-label">{{ t.location || 'Location' }}</span>
            <ul>
              <li><span>{{ t.mainOfficeAddress }}</span></li>
              <li><span>{{ t.mainOfficeAddress2 }}</span></li>
            </ul>
          </div>

          <!-- Contact col -->
          <div class="footer-col">
            <span class="footer-col-label">{{ t.contact || 'Contact' }}</span>
            <ul>
              <li><a :href="'mailto:' + t.eishiGmail">{{ t.eishiGmail }}</a></li>
              <li><a href="tel:+639175755044">(+63) 917-575-5044</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="footer-bottom">
          <span class="footer-copy">
            &copy; {{ currentYear }} Eishi Group. All rights reserved.
          </span>
          <span class="footer-mark">Building legacies.</span>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
import { mapState } from 'pinia'
import { useLanguageStore } from '~/stores/languageStore'

export default {
  name: 'Footer',

  computed: {
    ...mapState(useLanguageStore, ['t']),

    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
