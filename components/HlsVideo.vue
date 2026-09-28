<template>
  <video
    ref="videoEl"
    :autoplay="autoplay"
    :loop="loop"
    :muted="muted"
    :playsinline="playsinline"
    :preload="preload"
    :class="$attrs.class"
    :style="$attrs.style"
    :poster="poster"
  />
</template>

<script>
import Hls from 'hls.js'

export default {
  name: 'HlsVideo',
  inheritAttrs: false,

  props: {
    src:         { type: String, required: true },
    autoplay:    { type: Boolean, default: true },
    loop:        { type: Boolean, default: true },
    muted:       { type: Boolean, default: true },
    playsinline: { type: Boolean, default: true },
    preload:     { type: String,  default: 'metadata' },
    poster:      { type: String,  default: '' },
  },

  data() {
    return { hls: null }
  },

  mounted() {
    this.initHls()
  },

  beforeUnmount() {
    this.destroyHls()
  },

  watch: {
    src(val) {
      this.destroyHls()
      this.initHls()
    },
  },

  methods: {
    initHls() {
      const video = this.$refs.videoEl
      if (!video) return

      if (Hls.isSupported()) {
        this.hls = new Hls({
          autoStartLoad: true,
          startLevel: -1,
          // FastPix's cdn.fastpix.io answers with a 301 to cdn.fastpix.com that
          // lacks CORS headers, so browsers block every segment. Request the
          // final host directly.
          xhrSetup(xhr, url) {
            xhr.open('GET', url.replace('//cdn.fastpix.io/', '//cdn.fastpix.com/'), true)
          },
        })
        this.hls.loadSource(this.src)
        this.hls.attachMedia(video)
        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (this.autoplay) video.play().catch(() => {})
        })
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Safari native HLS
        video.src = this.src
        if (this.autoplay) video.play().catch(() => {})
      }
    },

    destroyHls() {
      if (this.hls) {
        this.hls.destroy()
        this.hls = null
      }
    },
  },
}
</script>
