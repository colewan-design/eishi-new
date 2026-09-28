<style>
.mapbox-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
.mapbox-wrap .mapboxgl-map {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div ref="container" class="mapbox-wrap" />
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: 'MapboxMap',

  props: {
    lng:   { type: Number, required: true },
    lat:   { type: Number, required: true },
    zoom:  { type: Number, default: 14 },
    mapStyle: { type: String, default: 'mapbox://styles/mapbox/satellite-streets-v12' },
    label: { type: String, default: '' },
  },

  data() {
    return { map: null }
  },

  mounted() {
    const config = useRuntimeConfig()
    mapboxgl.accessToken = config.public.mapboxToken || import.meta.env.VITE_MAPBOX_TOKEN || ''

    this.map = new mapboxgl.Map({
      container: this.$refs.container,
      style: this.mapStyle,
      center: [this.lng, this.lat],
      zoom: this.zoom,
      attributionControl: false,
      cooperativeGestures: true,
    })

    this.map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
    this.map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')

    if (this.label) {
      new mapboxgl.Marker({ color: '#ff385c' })
        .setLngLat([this.lng, this.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 28, closeButton: false })
            .setText(this.label)
        )
        .addTo(this.map)
    }
  },

  beforeUnmount() {
    if (this.map) {
      this.map.remove()
      this.map = null
    }
  },
}
</script>
