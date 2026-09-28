import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import AOS from 'aos'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  nuxtApp.vueApp.config.globalProperties.$gsap = gsap

  const lenis = new Lenis({
    duration: 1,
    easing: (t: number) => t * (2 - t),
    smoothTouch: false,
    wheelMultiplier: 1,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  nuxtApp.vueApp.config.globalProperties.$lenis = lenis

  AOS.init({ once: false, duration: 500, easing: 'ease-in-out' })

  const router = useRouter()
  router.afterEach(() => {
    lenis.scrollTo(0, { immediate: true })
    requestAnimationFrame(() => {
      lenis.resize()
      ScrollTrigger.refresh()
      AOS.refreshHard()
    })
  })
})
