<style>
.nav-bar {
  font-family: 'Inter', -apple-system, sans-serif !important;
  transition: background 0.4s ease, box-shadow 0.4s ease !important;
  background: transparent !important;
  box-shadow: none !important;
}

.nav-bar.scrolled-bar {
  background: rgba(255,255,255,0.96) !important;
  box-shadow: 0 1px 0 rgba(0,0,0,0.06) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* ── Desktop nav row ─────────────────────────────────── */
.desktop-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  height: 72px;
  transition: height 0.3s ease;
}

.desktop-nav-row.compact { height: 60px; }

/* ── Logo ─────────────────────────────────────────────── */
.nav-logo {
  height: 32px;
  width: auto;
  object-fit: contain;
  display: block;
  transition: opacity 0.2s ease, filter 0.4s ease;
}

.nav-logo.light { filter: brightness(0) invert(1); }
.nav-logo.dark  { filter: brightness(0); }
.nav-logo:hover { opacity: 0.7; }

/* ── Center links ─────────────────────────────────────── */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2.75rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link {
  position: relative;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 4px 0;
  transition: color 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
  white-space: nowrap;
}

.nav-link.light { color: rgba(255,255,255,0.82); }
.nav-link.dark  { color: #222222; }

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 1.5px;
  transition: width 0.25s ease;
}

.nav-link.light::after { background: #ffffff; }
.nav-link.dark::after  { background: #ff385c; }

.nav-link:hover::after,
.nav-link.router-link-active::after { width: 100%; }

.nav-link.light:hover { color: #ffffff; }
.nav-link.dark:hover  { color: #ff385c; }
.nav-link.light.router-link-active { color: #ffffff; }
.nav-link.dark.router-link-active  { color: #ff385c; }

/* ── Right side ──────────────────────────────────────── */
.nav-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.lang-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid;
  border-radius: 0;
  padding: 7px 14px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  background: transparent;
}

.lang-pill.light {
  color: rgba(255,255,255,0.85);
  border-color: rgba(255,255,255,0.3);
}
.lang-pill.light:hover {
  color: #ffffff;
  border-color: rgba(255,255,255,0.7);
  background: rgba(255,255,255,0.08);
}

.lang-pill.dark {
  color: #222222;
  border-color: #dddddd;
}
.lang-pill.dark:hover {
  border-color: #222222;
  background: #f7f7f7;
}

.lang-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ff385c;
  flex-shrink: 0;
}

/* ── Mobile bar ──────────────────────────────────────── */
.mobile-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5vw;
  height: 60px;
}

.mobile-logo {
  height: 28px;
  width: auto;
  object-fit: contain;
  display: block;
  transition: filter 0.4s ease;
}

.mobile-right {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
}

.mobile-lang {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  border: 1px solid;
  transition: border-color 0.4s ease;
}
.mobile-lang.light { border-color: rgba(255,255,255,0.4); }
.mobile-lang.dark  { border-color: #dddddd; }

.mlang-btn {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 9px;
  transition: color 200ms ease, background 200ms ease;
}
.mobile-lang.light .mlang-btn { color: rgba(255,255,255,0.85); }
.mobile-lang.dark  .mlang-btn { color: #6a6a6a; }
.mobile-lang .mlang-btn.active { color: #ffffff; background: #ff385c; }

.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 0;
}

.ham-line {
  display: block;
  width: 100%;
  height: 1.5px;
  transition: transform 250ms ease, opacity 200ms ease, background 0.4s ease;
}

.hamburger-btn.light .ham-line { background: rgba(255,255,255,0.9); }
.hamburger-btn.dark  .ham-line { background: #222222; }

.hamburger-btn.open .ham-line:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger-btn.open .ham-line:nth-child(2) { opacity: 0; }
.hamburger-btn.open .ham-line:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* ── Mobile drawer ───────────────────────────────────── */
.mobile-drawer {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 6vw;
  overflow-y: auto;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 350ms cubic-bezier(0.4,0,0.2,1), transform 350ms cubic-bezier(0.4,0,0.2,1);
  pointer-events: none;
}

.mobile-drawer.open {
  opacity: 1;
  transform: none;
  pointer-events: auto;
}

.drawer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  flex-shrink: 0;
}

.drawer-top-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.drawer-logo {
  height: 28px;
  width: auto;
  object-fit: contain;
  filter: brightness(0);
}

.close-btn {
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-x {
  display: block;
  width: 18px;
  height: 18px;
  position: relative;
}

.close-x::before, .close-x::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1.5px;
  background: #222222;
  border-radius: 1px;
}

.close-x::before { transform: translateY(-50%) rotate(45deg); }
.close-x::after  { transform: translateY(-50%) rotate(-45deg); }

.drawer-links {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 3rem;
  flex: 1;
}

.drawer-link {
  font-size: clamp(1.5rem, 6vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #222222;
  text-decoration: none;
  padding: 0.85rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: color 200ms ease, padding-left 200ms ease;
  cursor: pointer;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
}

.drawer-link:hover { color: #ff385c; padding-left: 8px; }
.drawer-link.router-link-active { color: #ff385c; }

.drawer-link-arrow {
  font-size: 1rem;
  color: #ff385c;
  opacity: 0;
  transition: opacity 200ms ease, transform 200ms ease;
}

.drawer-link:hover .drawer-link-arrow { opacity: 1; transform: translateX(4px); }

.drawer-bottom {
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.drawer-lang {
  display: flex;
  gap: 2px;
  align-items: center;
  background: #f7f7f7;
  padding: 3px;
}

.dlang-btn {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6a6a6a;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 14px;
  transition: color 200ms ease, background 200ms ease;
}

.dlang-btn.active {
  color: #ffffff;
  background: #ff385c;
}

.dlang-btn:hover:not(.active) {
  color: #222222;
  background: #ebebeb;
}

.drawer-tagline {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #929292;
}
</style>

<template>
  <div>
    <v-app-bar app flat elevation="0" class="nav-bar"
      :class="{ 'scrolled-bar': scrolled }"
      height="auto" style="background: transparent">

      <!-- ── Desktop ──────────────────────────────────── -->
      <div class="desktop-nav-row d-none d-md-flex" :class="{ compact: scrolled }">
        <!-- Logo -->
        <router-link to="/">
          <img src="/eishi/eishi_logo-removebg-preview.webp" alt="Eishi"
            class="nav-logo"
            :class="isLight ? 'light' : 'dark'" />
        </router-link>

        <!-- Center links -->
        <nav class="nav-links">
          <router-link
            v-for="item in navItems"
            :key="item.route"
            :to="item.route"
            class="nav-link"
            :class="isLight ? 'light' : 'dark'">
            {{ item.label }}
          </router-link>
        </nav>

        <!-- Language -->
        <div class="nav-right">
          <v-menu offset-y>
            <template #activator="{ props }">
              <button v-bind="props" class="lang-pill" :class="isLight ? 'light' : 'dark'">
                <span class="lang-dot" />
                {{ selectedLanguage === 'Japanese' ? '日本語' : 'EN' }}
              </button>
            </template>
            <v-list density="compact" min-width="120">
              <v-list-item @click="changeLanguage('English')">
                <v-list-item-title style="font-size:0.85rem">English</v-list-item-title>
              </v-list-item>
              <v-list-item @click="changeLanguage('Japanese')">
                <v-list-item-title style="font-size:0.85rem">日本語</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <!-- ── Mobile bar ─────────────────────────────── -->
      <div class="mobile-nav-row d-flex d-md-none">
        <router-link to="/">
          <img src="/eishi/eishi_logo-removebg-preview.webp" alt="Eishi"
            class="mobile-logo"
            :style="{ filter: isLight ? 'brightness(0) invert(1)' : 'brightness(0)' }" />
        </router-link>

        <div class="mobile-right">
          <div class="mobile-lang" :class="isLight ? 'light' : 'dark'">
            <button class="mlang-btn" :class="{ active: selectedLanguage === 'Japanese' }"
              @click="changeLanguage('Japanese')">日本語</button>
            <button class="mlang-btn" :class="{ active: selectedLanguage === 'English' }"
              @click="changeLanguage('English')">EN</button>
          </div>

          <button class="hamburger-btn"
            :class="[{ open: menuOpen }, isLight ? 'light' : 'dark']"
            @click="menuOpen = !menuOpen"
            aria-label="Toggle menu">
            <span class="ham-line" />
            <span class="ham-line" />
            <span class="ham-line" />
          </button>
        </div>
      </div>
    </v-app-bar>

    <!-- ── Mobile drawer (teleported) ─────────────────── -->
    <Teleport to="body">
      <div class="mobile-drawer" :class="{ open: menuOpen }">
        <div class="drawer-top">
          <img src="/eishi/eishi_logo-removebg-preview.webp" alt="Eishi" class="drawer-logo" />
          <div class="drawer-top-right">
            <div class="drawer-lang">
              <button class="dlang-btn" :class="{ active: selectedLanguage === 'Japanese' }"
                @click="changeLanguage('Japanese')">日本語</button>
              <button class="dlang-btn" :class="{ active: selectedLanguage === 'English' }"
                @click="changeLanguage('English')">EN</button>
            </div>
            <button class="close-btn" @click="menuOpen = false" aria-label="Close menu">
              <span class="close-x" />
            </button>
          </div>
        </div>

        <nav class="drawer-links">
          <router-link
            v-for="item in navItems"
            :key="item.route"
            :to="item.route"
            class="drawer-link"
            @click="menuOpen = false">
            {{ item.label }}
            <span class="drawer-link-arrow">→</span>
          </router-link>
        </nav>

        <div class="drawer-bottom">
          <span class="drawer-tagline">Eishi Group</span>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { useLanguageStore } from '~/stores/languageStore'
import { mapState, mapActions } from 'pinia'
import { RouterLink } from 'vue-router'

export default {
  name: 'Navigation',
  components: { RouterLink },

  data() {
    return {
      menuOpen: false,
      scrolled: false,
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['selectedLanguage', 't']),

    isLight() {
      return ['index', 'property'].includes(this.$route.name) && !this.scrolled
    },

    navItems() {
      return [
        { label: this.t.home,        route: '/' },
        { label: this.t.about,       route: '/about' },
        { label: this.t.contact,     route: '/contact' },
        { label: this.t.ourBusiness, route: '/property' },
      ]
    },
  },

  watch: {
    menuOpen(val) {
      document.body.style.overflow = val ? 'hidden' : ''
    },
    $route() {
      this.menuOpen = false
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    document.body.style.overflow = ''
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 60
    },

    ...mapActions(useLanguageStore, ['changeLanguage']),
  },
}
</script>
