<style>
.v-main {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

html, body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

* { box-sizing: border-box; }

.v-btn:hover {
  transform: scale(1.05);
  transition: 0.2s;
}

.splash-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #ffffff;
}

.splash-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.splash-logo {
  width: clamp(240px, 46vw, 520px);
  height: auto;
  object-fit: contain;
  display: block;
}

.splash-loader-track {
  position: relative;
  width: clamp(180px, 30vw, 320px);
  height: 2px;
  background: rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

.splash-loader-progress {
  position: absolute;
  inset: 0 auto 0 0;
  width: 100%;
  background: #000000;
  transform-origin: left center;
}

@media (max-width: 700px) {
  .splash-stage {
    gap: 28px;
  }

  .splash-logo {
    width: min(78vw, 340px);
  }
}

.page-scrim {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 998;
}

.content-disabled {
  pointer-events: none;
  user-select: none;
}

.fab-group {
  position: fixed;
  bottom: 24px;
  right: 20px;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.fab-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #dddddd;
  color: #222222;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px 0, rgba(0,0,0,0.10) 0 4px 8px 0;
  transition: color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  position: relative;
  overflow: hidden;
}

.fab-btn:hover {
  color: #ff385c;
  border-color: #ff385c;
  box-shadow: rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.06) 0 4px 10px 0, rgba(0,0,0,0.12) 0 6px 14px 0;
  transform: translateY(-2px);
}

.fab-audio.active { border-color: #ff385c; color: #ff385c; }

.fab-audio-bar {
  position: absolute;
  bottom: 7px;
  right: 7px;
  display: flex;
  align-items: flex-end;
  gap: 1.5px;
}

.fab-audio-bar span {
  width: 2px;
  background: #ff385c;
  border-radius: 1px;
  animation: eq-bar 0.9s ease-in-out infinite alternate;
}

.fab-audio-bar span:nth-child(1) { height: 4px; animation-delay: 0s; }
.fab-audio-bar span:nth-child(2) { height: 7px; animation-delay: 0.15s; }
.fab-audio-bar span:nth-child(3) { height: 5px; animation-delay: 0.3s; }
.fab-audio-bar span:nth-child(4) { height: 3px; animation-delay: 0.1s; }

@keyframes eq-bar {
  from { transform: scaleY(0.4); }
  to   { transform: scaleY(1.2); }
}

.fab-slide-enter-active { transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1); }
.fab-slide-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fab-slide-enter-from, .fab-slide-leave-to { opacity: 0; transform: translateY(10px) scale(0.85); }
</style>

<template>
  <v-app>
    <!-- Splash screen -->
    <div v-if="showSplash" class="splash-screen">
      <div class="splash-stage">
        <img src="/eishi/eishi_logo-removebg-preview.webp" alt="Eishi" class="splash-logo" />
        <div class="splash-loader-track">
          <span class="splash-loader-progress" />
        </div>
      </div>
    </div>

    <!-- FAB group -->
    <div class="fab-group">
      <transition name="fab-slide">
        <button v-show="showScrollTop" class="fab-btn" @click="scrollToTop" aria-label="Scroll to top">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </button>
      </transition>
      <button class="fab-btn fab-audio" :class="{ active: !isMuted }" @click="toggleAudio" :aria-label="isMuted ? 'Play music' : 'Mute music'">
        <svg v-if="isMuted" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
        <span class="fab-audio-bar" v-if="!isMuted">
          <span /><span /><span /><span />
        </span>
      </button>
    </div>

    <audio ref="bgm" src="/eishi/Music/sisiwit.mp3" loop preload="auto" muted />

    <Navigation v-if="showLayout" :color="color" :flat="flat" />

    <div v-show="sideNavOpen" class="page-scrim" @click="sideNavOpen = false" />
    <v-main :class="{ 'content-disabled': sideNavOpen }">
      <slot />
    </v-main>
    <Footer v-if="showLayout" />
    <ChatBot />
  </v-app>
</template>

<script>
import { useLanguageStore } from '~/stores/languageStore'
import { mapState } from 'pinia'
import { gsap } from 'gsap'

export default {
  name: 'DefaultLayout',

  data: () => ({
    showScrollTop: false,
    showFloatingNav: false,
    sideNavOpen: false,
    showSplash: true,
    fab: null,
    color: '',
    flat: null,
    isMuted: true,
  }),

  computed: {
    ...mapState(useLanguageStore, ['selectedLanguage', 't']),
    showLayout() {
      const route = useRoute()
      return !['tour-cebu', 'tour-batangas'].includes(route.name)
    },
  },

  watch: {
    fab(value) {
      this.color = value ? 'secondary' : 'transparent'
      this.flat = !value
    },
  },

  mounted() {
    const top = window.pageYOffset || 0
    if (top <= 60) {
      this.color = 'transparent'
      this.flat = true
    }
    window.addEventListener('scroll', this.onScroll)
    this.playSplashAnimation()
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },

    onScroll(e) {
      const scrollY = window.scrollY
      this.showFloatingNav = scrollY > window.innerHeight / 2
      this.showScrollTop = scrollY > 300
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 60
    },

    playSplashAnimation() {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const tl = gsap.timeline({
        onComplete: () => { this.showSplash = false },
      })

      if (prefersReducedMotion) {
        tl.set('.splash-loader-progress', { scaleX: 1 })
          .from('.splash-stage', { opacity: 0, duration: 0.35, ease: 'power1.out' })
          .to('.splash-screen', { opacity: 0, duration: 0.3, ease: 'power1.inOut', delay: 0.45 })
        return
      }

      tl.set('.splash-loader-progress', { scaleX: 0 })
        .from('.splash-logo', {
          opacity: 0,
          y: 14,
          duration: 0.9,
          ease: 'power3.out',
        })
        .from('.splash-loader-track', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.45')
        .to('.splash-loader-progress', {
          scaleX: 1,
          duration: 1.6,
          ease: 'power2.inOut',
        }, '-=0.2')
        .to('.splash-stage', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        }, '+=0.2')
        .to('.splash-screen', {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
        }, '-=0.25')
    },

    toggleAudio() {
      const audio = this.$refs.bgm
      if (!audio) return
      this.isMuted = !this.isMuted
      audio.muted = this.isMuted
      if (!this.isMuted) audio.play().catch(() => {})
    },
  },
}
</script>
