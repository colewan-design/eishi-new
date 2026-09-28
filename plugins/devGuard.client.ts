export default defineNuxtPlugin(() => {
  if (import.meta.dev) return

  document.addEventListener('contextmenu', e => e.preventDefault())

  document.addEventListener('keydown', e => {
    const blocked =
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'K'].includes(e.key)) ||
      (e.ctrlKey && e.key === 'U') ||
      (e.metaKey && e.altKey && ['I', 'J', 'C'].includes(e.key))

    if (blocked) {
      e.preventDefault()
      e.stopPropagation()
    }
  })

  const THRESHOLD = 160
  let overlayEl: HTMLDivElement | null = null

  function isDevToolsOpen() {
    return (
      window.outerWidth - window.innerWidth > THRESHOLD ||
      window.outerHeight - window.innerHeight > THRESHOLD
    )
  }

  function showOverlay() {
    if (overlayEl) return
    overlayEl = document.createElement('div')
    Object.assign(overlayEl.style, {
      position: 'fixed', inset: '0', zIndex: '999999',
      background: '#ffffff', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#929292',
    })
    overlayEl.textContent = ''
    document.body.appendChild(overlayEl)
  }

  function hideOverlay() {
    if (overlayEl) { overlayEl.remove(); overlayEl = null }
  }

  setInterval(() => {
    isDevToolsOpen() ? showOverlay() : hideOverlay()
  }, 800)
})
