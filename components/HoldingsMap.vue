<style>
.holdings-map {
  position: relative;
  width: 100%;
  height: 100%;
}
.holdings-map .mapboxgl-map { width: 100%; height: 100%; }
.holdings-map .mapboxgl-canvas {
  filter: grayscale(1) contrast(0.92) brightness(1.12);
}
.holdings-map-marker {
  position: relative;
  width: 10px;
  height: 10px;
}
.holdings-map-dot {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 0 6px rgba(196, 42, 42, 0.16);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  z-index: 2;
}
.holdings-map-dot::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--red);
  animation: holdingsMapDotPulse 2.2s ease-out infinite;
}
@keyframes holdingsMapDotPulse {
  0%   { transform: scale(1);   opacity: 0.55; }
  70%  { transform: scale(4.5); opacity: 0; }
  100% { transform: scale(4.5); opacity: 0; }
}

/* Soft region glow that blooms in behind the dot on hover, echoing a
   highlighted-country look without needing real border geometry. */
.holdings-map-glow {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.25);
  background: radial-gradient(circle, rgba(196,42,42,0.30) 0%, rgba(196,42,42,0.12) 45%, transparent 72%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease, transform 0.35s ease;
  z-index: 1;
}
.holdings-map-marker:hover .holdings-map-glow {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
.holdings-map-marker:hover .holdings-map-dot {
  transform: scale(1.4);
  box-shadow: 0 0 0 8px rgba(196, 42, 42, 0.22);
}

.holdings-map-tooltip {
  position: absolute;
  bottom: calc(100% + 16px);
  left: 50%;
  width: 220px;
  padding: 18px 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 16px 40px rgba(20,27,40,0.22);
  text-align: left;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 3;
}
.holdings-map-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  width: 12px;
  height: 12px;
  background: #fff;
  transform: translate(-50%, -50%) rotate(45deg);
}
.holdings-map-marker:hover .holdings-map-tooltip {
  opacity: 1;
  transform: translate(-50%, 0);
  pointer-events: auto;
}
.holdings-map-tooltip-name {
  font-family: var(--font-display, 'Cormorant Garamond', Georgia, serif);
  font-size: 18px;
  font-weight: 500;
  color: var(--ink, #141B28);
  line-height: 1.2;
  margin-bottom: 6px;
}
.holdings-map-tooltip-addr {
  font-family: var(--font-body, 'DM Sans', system-ui, sans-serif);
  font-size: 12px;
  line-height: 1.6;
  color: rgba(20,27,40,0.6);
}
</style>

<template>
  <div ref="container" class="holdings-map" />
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: 'HoldingsMap',

  props: {
    locations: { type: Array, required: true },
    center: { type: Array, default: () => [122.2, 13.85] },
    zoom: { type: Number, default: 5.25 },
  },

  data() {
    return { map: null }
  },

  mounted() {
    const config = useRuntimeConfig()
    mapboxgl.accessToken = config.public.mapboxToken || import.meta.env.VITE_MAPBOX_TOKEN || ''

    this.map = new mapboxgl.Map({
      container: this.$refs.container,
      style: 'mapbox://styles/mapbox/light-v11',
      center: this.center,
      zoom: this.zoom,
      attributionControl: false,
      interactive: false,
    })

    this.map.on('load', () => {
      requestAnimationFrame(() => {
        if (!this.map) return
        this.map.resize()

        if (this.locations.length) {
          const bounds = this.locations.reduce(
            (b, loc) => b.extend([loc.lng, loc.lat]),
            new mapboxgl.LngLatBounds(
              [this.locations[0].lng, this.locations[0].lat],
              [this.locations[0].lng, this.locations[0].lat]
            )
          )
          this.map.fitBounds(bounds, {
            padding: { top: 56, right: 88, bottom: 64, left: 88 },
            duration: 0,
          })

          this.map.jumpTo({
            center: this.center,
            zoom: Math.min(this.map.getZoom() + 0.45, 5.7),
          })
        }
      })
    })

    this.locations.forEach((loc) => {
      const marker = document.createElement('div')
      marker.className = 'holdings-map-marker'

      const glow = document.createElement('div')
      glow.className = 'holdings-map-glow'
      marker.appendChild(glow)

      const dot = document.createElement('div')
      dot.className = 'holdings-map-dot'
      marker.appendChild(dot)

      if (loc.name || loc.address) {
        const tooltip = document.createElement('div')
        tooltip.className = 'holdings-map-tooltip'
        if (loc.name) {
          const name = document.createElement('div')
          name.className = 'holdings-map-tooltip-name'
          name.textContent = loc.name
          tooltip.appendChild(name)
        }
        if (loc.address) {
          const addr = document.createElement('div')
          addr.className = 'holdings-map-tooltip-addr'
          addr.textContent = loc.address
          tooltip.appendChild(addr)
        }
        marker.appendChild(tooltip)
      }

      new mapboxgl.Marker({ element: marker })
        .setLngLat([loc.lng, loc.lat])
        .addTo(this.map)
    })
  },

  beforeUnmount() {
    if (this.map) {
      this.map.remove()
      this.map = null
    }
  },
}
</script>
