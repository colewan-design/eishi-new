<style>
/* ── Design tokens (matches landing page) ─────────────────── */
.contact-wrap {
  --cream:      #EEF2F7;
  --warm-white: #F8FAFB;
  --ink:        #141B28;
  --ink-60:     rgba(20,27,40,0.6);
  --ink-30:     rgba(20,27,40,0.3);
  --ink-12:     rgba(20,27,40,0.12);
  --red:        #C23B2A;
  --red-soft:   #E8503C;
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;

  font-family: var(--font-body);
  background: var(--warm-white);
  color: var(--ink);
  overflow-x: hidden;
}

* { box-sizing: border-box; }

/* ── Shared utilities ────────────────────────────────────── */
.contact-wrap .container {
  max-width: 1280px;
  margin: 0 auto;
}

.contact-wrap .section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}
.contact-wrap .section-label-line {
  width: 24px;
  height: 1px;
  background: var(--red);
  flex-shrink: 0;
}
.contact-wrap .section-label span {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  font-weight: 500;
  font-family: var(--font-body);
}
.contact-wrap .section-label.light span { color: rgba(255,255,255,0.4); }
.contact-wrap .section-label.light .section-label-line { background: rgba(255,255,255,0.3); }

/* ── HERO ────────────────────────────────────────────────── */
.contact-hero-section {
  background: var(--warm-white);
  padding: 160px 80px 96px;
}

.contact-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.contact-hero-h1 {
  font-family: var(--font-display);
  font-size: clamp(40px, 5.5vw, 72px);
  font-weight: 300;
  color: var(--ink);
  line-height: 1.05;
  letter-spacing: -0.01em;
  margin: 0 0 24px 0;
}
.contact-hero-h1 em { font-style: italic; color: var(--red); }

.contact-hero-lead {
  font-size: 15px;
  font-weight: 300;
  color: var(--ink-60);
  line-height: 1.75;
  max-width: 440px;
  margin: 0;
}

.contact-hero-visual {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--ink);
}

.contact-hero-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.9;
}

@media (max-width: 900px) {
  .contact-hero-grid { grid-template-columns: 1fr; gap: 40px; }
  .contact-hero-section { padding: 120px 32px 64px; }
  .contact-hero-visual { aspect-ratio: 16/9; }
}
@media (max-width: 600px) {
  .contact-hero-section { padding: 100px 24px 48px; }
}

/* ── CONTACT CHANNELS ─────────────────────────────────────── */
.contact-channels-section {
  background: var(--cream);
}

.contact-channels-row {
  display: flex;
}

.channel-block {
  flex: 1;
  padding: 64px 48px;
  border-left: 1px solid var(--ink-12);
}
.channel-block:first-child { border-left: none; }

.channel-icon {
  width: 22px;
  height: 22px;
  margin-bottom: 20px;
}
.channel-icon svg {
  width: 100%;
  height: 100%;
  stroke: var(--red);
  fill: none;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.channel-label {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-60);
  margin-bottom: 12px;
}

.channel-value {
  font-family: var(--font-display);
  font-size: clamp(20px, 2vw, 26px);
  font-weight: 400;
  color: var(--ink);
  line-height: 1.3;
  margin: 0 0 10px 0;
}

.channel-sub {
  font-size: 12px;
  color: var(--ink-60);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .contact-channels-row { flex-direction: column; }
  .channel-block {
    border-left: none;
    border-top: 1px solid var(--ink-12);
    padding: 40px 32px;
  }
  .channel-block:first-child { border-top: none; }
}

/* ── FORM SECTION ──────────────────────────────────────────── */
.contact-form-section {
  background: var(--ink);
  padding: 96px 80px;
}

.contact-form-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

/* Left copy */
.form-headline {
  font-family: var(--font-display);
  font-size: clamp(34px, 4vw, 50px);
  font-weight: 300;
  color: #fff;
  line-height: 1.15;
  margin: 0 0 20px 0;
}
.form-headline em { font-style: italic; color: var(--red); }

.form-body {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255,255,255,0.42);
  margin: 0;
  max-width: 380px;
}

/* Form fields */
.form-fields { display: flex; flex-direction: column; }

.field-group { margin-bottom: 20px; }

.field-label {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  display: block;
  margin-bottom: 10px;
}

.contact-form-section .field-input {
  width: 100%;
  height: auto;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 0;
  outline: none;
  font-family: var(--font-body);
  font-size: 14px;
  color: #fff;
  padding: 14px 16px;
  transition: border-color 0.25s, background 0.25s;
}

.contact-form-section .field-input::placeholder { color: rgba(255,255,255,0.25); }
.contact-form-section .field-input:focus { border-color: var(--red); border-width: 1px; background: rgba(255,255,255,0.08); }

.field-textarea {
  resize: none;
  min-height: 110px;
  line-height: 1.7;
}

.submit-btn {
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: var(--red);
  color: #fff;
  border: none;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 16px 28px;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s, gap 0.2s;
}

.submit-btn:hover { background: var(--red-soft); gap: 18px; }

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-arr {
  width: 16px;
  height: 1.5px;
  background: currentColor;
  position: relative;
  flex-shrink: 0;
  transition: width 0.25s;
}

.submit-btn:hover .btn-arr { width: 24px; }

.btn-arr::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3px;
  width: 6px;
  height: 6px;
  border-right: 1.5px solid currentColor;
  border-top: 1.5px solid currentColor;
  transform: rotate(45deg);
}

.form-success {
  margin-top: 18px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6EE7B7;
  text-align: center;
}

@media (max-width: 900px) {
  .contact-form-inner { grid-template-columns: 1fr; gap: 48px; }
  .contact-form-section { padding: 64px 32px; }
}
</style>

<template>
  <div class="contact-wrap">

    <!-- ── HERO ──────────────────────────────────────── -->
    <section class="contact-hero-section">
      <div class="container">
        <div class="contact-hero-grid">
          <div>
            <div class="section-label" data-aos="fade-up">
              <div class="section-label-line" />
              <span>{{ t.contactLabel || 'Get In Touch' }}</span>
            </div>
            <h1 class="contact-hero-h1" data-aos="fade-up" data-aos-delay="80">Contact <em>Us</em></h1>
            <p class="contact-hero-lead" data-aos="fade-up" data-aos-delay="160">
              {{ t.contactForm?.heroSubtitle || 'Reach out and let us know how we can help you build your next venture.' }}
            </p>
          </div>
          <div class="contact-hero-visual" data-aos="fade-left" data-aos-duration="800">
            <img src="/eishi/stock_images/2.avif" alt="Eishi Office" loading="eager" />
          </div>
        </div>
      </div>
    </section>

    <!-- ── CONTACT CHANNELS ───────────────────────────── -->
    <section class="contact-channels-section">
      <div class="contact-channels-row">

        <div class="channel-block" data-aos="fade-up">
          <div class="channel-icon">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          </div>
          <div class="channel-label">{{ t.contactForm?.phoneLabel || 'Phone' }}</div>
          <p class="channel-value">+63 (917)-575-5044</p>
          <p class="channel-sub">Mon–Fri, 9AM–6PM PHT</p>
        </div>

        <div class="channel-block" data-aos="fade-up" data-aos-delay="60">
          <div class="channel-icon">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div class="channel-label">{{ t.contactForm?.emailLabel || 'Email' }}</div>
          <p class="channel-value">eishiproperties@gmail.com</p>
          <p class="channel-sub">{{ t.contactForm?.responseTime || 'Response within 24 hours' }}</p>
        </div>

        <div class="channel-block" data-aos="fade-up" data-aos-delay="120">
          <div class="channel-icon">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="channel-label">{{ t.contactForm?.addressLabel || 'Address' }}</div>
          <p class="channel-value">JC 81 KM5, Pico,<br />La Trinidad, Benguet</p>
          <p class="channel-sub">Mon–Sat: 9AM–6PM<br />Sunday: Closed</p>
        </div>

      </div>
    </section>

    <!-- ── FORM SECTION ───────────────────────────────── -->
    <section class="contact-form-section">
      <div class="container">
        <div class="contact-form-inner">

          <!-- Left: intro copy -->
          <div>
            <div class="section-label light" data-aos="fade-up">
              <div class="section-label-line" />
              <span>Send a Message</span>
            </div>
            <h2 class="form-headline" data-aos="fade-up" data-aos-delay="80">
              {{ t.contactForm?.formTitle || "Let's Start a" }}<br />
              <em>{{ t.contactForm?.formTitleSub || 'Conversation' }}</em>
            </h2>
            <p class="form-body" data-aos="fade-up" data-aos-delay="160">
              {{ t.contactForm?.formDescription || 'Whether you are interested in our properties, want to become a partner, or simply want to learn more about Eishi Group — we would love to hear from you.' }}
            </p>
          </div>

          <!-- Right: form -->
          <div>
            <form class="form-fields" @submit.prevent="submitForm">

              <div class="field-group">
                <label class="field-label">{{ t.contactForm?.nameLabel || 'Full Name' }}</label>
                <input v-model="form.name" class="field-input" type="text" :placeholder="t.contactForm?.namePlaceholder || 'Your full name'" required />
              </div>

              <div class="field-group">
                <label class="field-label">{{ t.contactForm?.emailLabel || 'Email' }}</label>
                <input v-model="form.email" class="field-input" type="email" :placeholder="t.contactForm?.emailPlaceholder || 'your@email.com'" required />
              </div>

              <div class="field-group">
                <label class="field-label">{{ t.contactForm?.phoneLabel || 'Phone' }}</label>
                <input v-model="form.phone" class="field-input" type="tel" :placeholder="t.contactForm?.phonePlaceholder || '+63 (9XX) XXX-XXXX'" />
              </div>

              <div class="field-group">
                <label class="field-label">{{ t.contactForm?.subjectLabel || 'Subject' }}</label>
                <input v-model="form.subject" class="field-input" type="text" :placeholder="t.contactForm?.subjectPlaceholder || 'How can we help you?'" />
              </div>

              <div class="field-group">
                <label class="field-label">{{ t.contactForm?.messageLabel || 'Message' }}</label>
                <textarea v-model="form.message" class="field-input field-textarea" :placeholder="t.contactForm?.messagePlaceholder || 'Tell us more about your inquiry...'" required />
              </div>

              <button type="submit" class="submit-btn" :disabled="submitting">
                {{ submitting ? 'Sending…' : (t.contactForm?.submitLabel || 'Send Message') }}
                <span class="btn-arr" />
              </button>

              <p v-if="submitted" class="form-success">
                ✦ {{ t.contactForm?.successMessage || 'Message sent. We will be in touch soon.' }}
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useLanguageStore } from '~/stores/languageStore'

export default {
  name: 'ContactView',

  data() {
    return {
      form: { name: '', email: '', phone: '', subject: '', message: '' },
      submitting: false,
      submitted: false,
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),
  },

  methods: {
    async submitForm() {
      this.submitting = true
      await new Promise(resolve => setTimeout(resolve, 1200))
      this.submitting = false
      this.submitted = true
      this.form = { name: '', email: '', phone: '', subject: '', message: '' }
      setTimeout(() => { this.submitted = false }, 5000)
    },
  },
}
</script>
