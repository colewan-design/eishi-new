<template>
  <div class="chatbot-wrapper">
    <!-- Toggle bubble -->
    <button class="chat-bubble" @click="toggle" :class="{ open: isOpen }" aria-label="Chat with us">
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>

    <!-- Chat window -->
    <transition name="chat-pop">
      <div v-if="isOpen" class="chat-window">
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar">E</div>
            <div>
              <p class="chat-name">Eishi Assistant</p>
              <p class="chat-status"><span class="status-dot" />Online</p>
            </div>
          </div>
        </div>

        <div class="chat-body" ref="bodyRef">
          <div
            v-for="(msg, i) in messages"
            :key="i"
            class="msg-row"
            :class="msg.from"
          >
            <div v-if="msg.from === 'bot'" class="msg-avatar">E</div>
            <div class="msg-bubble">
              <span v-html="msg.text" />
              <div v-if="msg.chips && msg.chips.length" class="chip-row">
                <button
                  v-for="chip in msg.chips"
                  :key="chip"
                  class="chip"
                  @click="onChip(chip)"
                >{{ chip }}</button>
              </div>
            </div>
          </div>

          <div v-if="typing" class="msg-row bot">
            <div class="msg-avatar">E</div>
            <div class="msg-bubble typing-bubble">
              <span class="dot" /><span class="dot" /><span class="dot" />
            </div>
          </div>
        </div>

        <div class="chat-input-row">
          <input
            v-model="userInput"
            class="chat-input"
            placeholder="Type a message…"
            @keydown.enter="send"
          />
          <button class="send-btn" @click="send" :disabled="!userInput.trim()">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
const KB = [
  {
    keys: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'start', 'help'],
    answer: 'Hello! Welcome to Eishi Group. 👋<br/>How can I help you today?',
    chips: ['Our Holdings', 'Contact Us', 'Become a Partner', 'About Eishi'],
  },
  {
    keys: ['about', 'who', 'what is eishi', 'company', 'group'],
    answer: 'Eishi Group is a diversified Philippine holding company focused on <strong>agriculture, real estate, and transport</strong>. We operate across multiple provinces with a commitment to community development and sustainable growth.',
    chips: ['Our Holdings', 'Contact Us'],
  },
  {
    keys: ['holdings', 'businesses', 'portfolio', 'all', 'list'],
    answer: 'Our current portfolio spans <strong>6 business holdings</strong>:<br/><br/>🌾 Feed Mill — San Jose, Batangas<br/>🚗 Car Rental — Philippines<br/>🐔 Poultry Farm — San Jose, Batangas<br/>🌿 Pangasinan Farm — Balungao, Pangasinan<br/>🏠 Residential Lands — Tabuk, Kalinga<br/>🏢 Cebu Condominium — Cebu City',
    chips: ['Feed Mill', 'Car Rental', 'Poultry Farm', 'Pangasinan Farm', 'Residential Lands', 'Cebu Condominium'],
  },
  {
    keys: ['feed mill', 'feedmill', 'feed'],
    answer: '🌾 <strong>Feed Mill</strong><br/>Located in <strong>San Jose, Batangas</strong>, our Feed Mill produces quality animal feeds supporting local poultry and livestock farms. It is a key part of our integrated agriculture operations.',
    chips: ['Our Holdings', 'Contact Us'],
  },
  {
    keys: ['car rental', 'car', 'rental', 'transport', 'vehicle'],
    answer: '🚗 <strong>Car Rental</strong><br/>Our Car Rental service operates across the Philippines, providing reliable vehicles for individuals and businesses. We maintain a well-serviced fleet for comfortable and safe travel.',
    chips: ['Our Holdings', 'Contact Us'],
  },
  {
    keys: ['poultry', 'poultry farm', 'chicken', 'egg', 'batangas farm'],
    answer: '🐔 <strong>Poultry Farm — Batangas</strong><br/>Located in <strong>San Jose, Batangas</strong>, our poultry farm is an integrated egg-laying and production facility. It supports food security and local livelihoods in the region.',
    chips: ['Our Holdings', 'Contact Us'],
  },
  {
    keys: ['pangasinan', 'pangasinan farm', 'balungao', 'farm'],
    answer: '🌿 <strong>Pangasinan Farm</strong><br/>Situated in <strong>Balungao, Pangasinan</strong>, this agricultural property spans <strong>240,500 sqm</strong>. It represents our commitment to expanding sustainable farming in Northern Luzon.',
    chips: ['Our Holdings', 'Contact Us'],
  },
  {
    keys: ['kalinga', 'residential', 'lands', 'lots', 'tabuk'],
    answer: '🏠 <strong>Residential Lands — Kalinga</strong><br/>Located in <strong>Tabuk, Kalinga</strong>, this development comprises <strong>42 lots</strong> for residential use. It supports community growth in the Cordillera region.',
    chips: ['Our Holdings', 'Contact Us'],
  },
  {
    keys: ['cebu', 'condominium', 'condo', 'units'],
    answer: '🏢 <strong>Cebu Condominium</strong><br/>Located in <strong>Cebu City</strong>, this property features <strong>1,016 residential units</strong>. It is part of our real estate expansion into the Visayas region.',
    chips: ['Our Holdings', 'Contact Us'],
  },
  {
    keys: ['partner', 'partnership', 'invest', 'investor', 'join', 'collaborate'],
    answer: 'We welcome partnerships and investment inquiries. Eishi Group is open to <strong>joint ventures, farm partnerships, and real estate collaborations</strong>.<br/><br/>Please reach out through our Contact page and our team will get back to you.',
    chips: ['Contact Us', 'Our Holdings'],
  },
  {
    keys: ['contact', 'reach', 'email', 'phone', 'message', 'inquiry', 'inquire', 'get in touch'],
    answer: '📬 <strong>Contact Eishi Group</strong><br/>You can reach us through our Contact page. Our team is ready to assist with property inquiries, partnership opportunities, and general questions.',
    chips: ['Become a Partner', 'Our Holdings'],
    route: '/contact',
    routeLabel: 'Go to Contact Page',
  },
  {
    keys: ['location', 'where', 'address', 'province'],
    answer: '📍 Our holdings are spread across the Philippines:<br/><br/>• Batangas — Feed Mill &amp; Poultry Farm<br/>• Pangasinan — Agricultural Farm<br/>• Kalinga — Residential Lands<br/>• Cebu City — Condominium<br/>• Philippines-wide — Car Rental',
    chips: ['Our Holdings', 'Contact Us'],
  },
]

const FALLBACK = {
  answer: "I'm not sure about that one. Here are some things I can help with:",
  chips: ['About Eishi', 'Our Holdings', 'Contact Us', 'Become a Partner'],
}

function matchKB(input) {
  const lower = input.toLowerCase()
  for (const entry of KB) {
    if (entry.keys.some(k => lower.includes(k))) return entry
  }
  return null
}

export default {
  name: 'ChatBot',
  data() {
    return {
      isOpen: false,
      userInput: '',
      typing: false,
      messages: [
        {
          from: 'bot',
          text: 'Hi there! 👋 I\'m the Eishi Assistant. Ask me anything about our business holdings or how to get in touch.',
          chips: ['Our Holdings', 'About Eishi', 'Contact Us', 'Become a Partner'],
        },
      ],
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
      if (this.isOpen) this.$nextTick(this.scrollBottom)
    },
    send() {
      const text = this.userInput.trim()
      if (!text) return
      this.pushUser(text)
      this.userInput = ''
      this.respond(text)
    },
    onChip(chip) {
      this.pushUser(chip)
      this.respond(chip)
    },
    pushUser(text) {
      this.messages.push({ from: 'user', text })
      this.$nextTick(this.scrollBottom)
    },
    respond(text) {
      this.typing = true
      this.$nextTick(this.scrollBottom)
      setTimeout(() => {
        this.typing = false
        const match = matchKB(text) || FALLBACK
        const msg = { from: 'bot', text: match.answer, chips: match.chips || [] }
        if (match.route) {
          msg.text += `<br/><br/><a class="chat-link" href="${match.route}">${match.routeLabel} →</a>`
        }
        this.messages.push(msg)
        this.$nextTick(this.scrollBottom)
      }, 700)
    },
    scrollBottom() {
      const el = this.$refs.bodyRef
      if (el) el.scrollTop = el.scrollHeight
    },
  },
}
</script>

<style scoped>
/* ── Bubble ── */
.chatbot-wrapper {
  position: fixed;
  bottom: 120px;
  right: 20px;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.chat-bubble {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #0F172A;
  border: 2px solid #ff385c;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 102, 204, 0.35);
  transition: transform 0.2s, background 0.2s;
  flex-shrink: 0;
}

.chat-bubble:hover {
  transform: scale(1.08);
  background: #222222;
}

.chat-bubble.open {
  background: #1E3A5F;
}

/* ── Window ── */
.chat-window {
  position: absolute;
  bottom: 60px;
  right: 0;
  width: 340px;
  max-height: 520px;
  background: #fff;
  border-radius: 0;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #dddddd;
}

/* ── Header ── */
.chat-header {
  background: #0F172A;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chat-header-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chat-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff385c, #e00b41);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.chat-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 1.2;
}

.chat-status {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  line-height: 1.4;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22C55E;
  display: inline-block;
  flex-shrink: 0;
}

/* ── Body ── */
.chat-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f7f7f7;
}

.chat-body::-webkit-scrollbar { width: 4px; }
.chat-body::-webkit-scrollbar-track { background: transparent; }
.chat-body::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 2px; }

/* ── Messages ── */
.msg-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.msg-row.user {
  flex-direction: row-reverse;
}

.msg-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff385c, #e00b41);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.msg-bubble {
  max-width: 78%;
  padding: 10px 13px;
  border-radius: 0;
  font-size: 0.83rem;
  line-height: 1.55;
  word-break: break-word;
}

.msg-row.bot .msg-bubble {
  background: #fff;
  color: #222222;
  border: 1px solid #dddddd;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}

.msg-row.user .msg-bubble {
  background: #0F172A;
  color: #fff;
  border-bottom-right-radius: 4px;
}

/* ── Chips ── */
.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.chip {
  font-size: 0.72rem;
  font-weight: 600;
  color: #ff385c;
  background: #EFF6FF;
  border: 1px solid #BFDBFE;
  border-radius: 0;
  padding: 4px 11px;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  white-space: nowrap;
}

.chip:hover {
  background: #ff385c;
  color: #fff;
  border-color: #ff385c;
}

/* ── Typing ── */
.typing-bubble {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 14px;
  min-width: 52px;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #94A3B8;
  animation: blink 1.2s infinite ease-in-out;
}

.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes blink {
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.85); }
  40% { opacity: 1; transform: scale(1); }
}

/* ── Input ── */
.chat-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-top: 1px solid #dddddd;
  background: #fff;
}

.chat-input {
  flex: 1;
  border: 1px solid #dddddd;
  border-radius: 0;
  padding: 8px 14px;
  font-size: 0.82rem;
  color: #222222;
  outline: none;
  transition: border-color 0.18s;
  background: #f7f7f7;
}

.chat-input:focus {
  border-color: #ff385c;
  background: #fff;
}

.send-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #0F172A;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.18s, transform 0.15s;
}

.send-btn:hover:not(:disabled) {
  background: #ff385c;
  transform: scale(1.06);
}

.send-btn:disabled {
  opacity: 0.4;
  cursor: default;
}

/* ── Link inside message ── */
:deep(.chat-link) {
  color: #ff385c;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid #BFDBFE;
}

:deep(.chat-link:hover) {
  border-color: #ff385c;
}

/* ── Animation ── */
.chat-pop-enter-active {
  transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.chat-pop-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.chat-pop-enter-from,
.chat-pop-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.96);
}

/* ── Mobile ── */
@media (max-width: 480px) {
  .chat-window {
    width: calc(100vw - 32px);
    right: -4px;
  }
}
</style>
