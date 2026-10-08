import { useRef, useState, useEffect } from 'react'

const C = {
  purple:      '#2D1B69',
  purpleMid:   '#3D2A80',
  purpleLight: '#4E3894',
  yellow:      '#FFD600',
  yellowHover: '#E6C000',
  white:       '#FFFFFF',
  offWhite:    '#F9F8FF',
  lightGrey:   '#F4F3FC',
  ink:         '#1A1033',
  bodyText:    '#3D3557',
  muted:       '#7B72A0',
  border:      '#E2DFF4',
  green:       '#1B8A4C',
  red:         '#CC1111',
}

const PAY_LINK  = 'https://wa.me/2347084436683'
const WA_LINK   = 'https://wa.me/2347084436683'
const BANK_NAME = 'GTBank'
const BANK_ACCT = '0050114994'
const BANK_HOLDER = 'Bolade Oladapo'

/* ─── helpers ─────────────────────────────────────────── */
function useInView(t = 0.08) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect() }
    }, { threshold: t })
    obs.observe(el); return () => obs.disconnect()
  }, [t])
  return { ref, vis }
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, vis } = useInView()
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? 'none' : 'translateY(24px)',
      transition: `opacity .65s ease ${delay}ms, transform .65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── CTA Button ──────────────────────────────────────── */
function CTABtn({ text, href = PAY_LINK }: { text: string; href?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: C.yellow, color: C.purple,
        fontFamily: "'Poppins', sans-serif",
        fontSize: '17px', fontWeight: 800,
        letterSpacing: '0.06em', textTransform: 'uppercase',
        padding: '20px 52px', textDecoration: 'none',
        transition: 'background-color 0.15s, transform 0.12s',
        cursor: 'pointer', lineHeight: 1.2,
        boxShadow: '0 6px 24px rgba(255,214,0,0.35)',
        boxSizing: 'border-box' as const,
        width: '100%', maxWidth: '480px',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.yellowHover
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.yellow
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
      }}
    >
      {text}
    </a>
  )
}

/* ─── Payment box ──────────────────────────────────────── */
function PayBox() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <CTABtn text="Join Now — Pay Here →" href={PAY_LINK} />
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 700, color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase' }}>OR</p>
      <div style={{ backgroundColor: C.lightGrey, border: `1px solid ${C.border}`, padding: '24px 28px', width: '100%', maxWidth: '480px', boxSizing: 'border-box' }}>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.purpleLight, marginBottom: '12px' }}>
          Pay Directly Into
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', fontWeight: 700, color: C.ink, margin: 0 }}>{BANK_NAME}</p>
          <p style={{ fontFamily: "'Anton', sans-serif", fontSize: '28px', fontWeight: 400, color: C.purple, letterSpacing: '0.08em', margin: 0, lineHeight: 1 }}>{BANK_ACCT}</p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '15px', color: C.bodyText, margin: 0 }}>{BANK_HOLDER}</p>
        </div>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: C.muted, margin: 0 }}>
          After payment, forward your details to{' '}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: C.purple, fontWeight: 700, textDecoration: 'none' }}>
            WhatsApp
          </a>
        </p>
      </div>
    </div>
  )
}

/* ─── Yellow rule ──────────────────────────────────────── */
function Rule() {
  return <div style={{ height: '2px', backgroundColor: C.yellow }} />
}

/* ─── FAQ item ─────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}`, cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', gap: '16px' }}>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', fontWeight: 600, color: C.ink, margin: 0, lineHeight: 1.4 }}>{q}</p>
        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '24px', color: C.yellow, flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none', lineHeight: 1 }}>+</span>
      </div>
      {open && <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.8, color: C.bodyText, paddingBottom: '20px', margin: 0 }}>{a}</p>}
    </div>
  )
}

/* ─── Countdown ─────────────────────────────────────────── */
function Countdown() {
  const TARGET_HOURS = 72
  const [timeLeft, setTimeLeft] = useState({ h: TARGET_HOURS, m: 0, s: 0 })

  useEffect(() => {
    const stored = localStorage.getItem('scaleCountdownEnd')
    const end = stored ? parseInt(stored) : Date.now() + TARGET_HOURS * 3600 * 1000
    if (!stored) localStorage.setItem('scaleCountdownEnd', String(end))

    const tick = () => {
      const diff = Math.max(0, end - Date.now())
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTimeLeft({ h, m, s })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      {[
        { val: pad(timeLeft.h), label: 'Hours' },
        { val: pad(timeLeft.m), label: 'Minutes' },
        { val: pad(timeLeft.s), label: 'Seconds' },
      ].map((item, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(40px, 8vw, 72px)',
            fontWeight: 400, lineHeight: 1,
            color: C.yellow,
            backgroundColor: C.purple,
            padding: '16px 20px',
            minWidth: '90px',
            letterSpacing: '0.04em',
          }}>
            {item.val}
          </div>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.muted, marginTop: '8px' }}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  )
}

/* ─── PAGE ─────────────────────────────────────────────── */
export default function SalesPageScale() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ backgroundColor: C.offWhite, color: C.ink, fontFamily: "'Poppins', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: C.purple, padding: '96px 24px 88px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>
              10-Day Content Training
            </p>
            <h1 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(36px, 7vw, 78px)',
              fontWeight: 400, lineHeight: 1.05,
              color: C.white, letterSpacing: '0.01em',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>
              Scale Your Income With <span style={{ color: C.yellow }}>Content</span>
            </h1>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 700, color: C.yellow,
              marginBottom: '40px', lineHeight: 1.4,
            }}>
              Master Content In 10 Days Or Stay Invisible
            </p>
          </Reveal>
          <Reveal delay={80}>
            <PayBox />
          </Reveal>
        </div>
      </section>

      <Rule />

      {/* ── INTRO ── */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 400, color: C.purple, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.2, marginBottom: '28px' }}>
              Let's stop pretending.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '8px' }}>
              {["You don't need more motivation.", "You need structure.", "You need strategies.", "You need results."].map((t, i) => (
                <p key={i} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(17px, 2.2vw, 21px)', fontWeight: i === 0 ? 400 : 700, color: i === 0 ? C.bodyText : C.ink, padding: '10px 0', borderBottom: `1px solid ${C.border}`, margin: 0, lineHeight: 1.5 }}>
                  {t}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Rule />

      {/* ── SOCIAL PROOF REALITY ── */}
      <section style={{ backgroundColor: C.lightGrey, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 400, color: C.ink, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.01em', marginBottom: '20px' }}>
              Right now, people less talented than you are:
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '40px' }}>
              {['Getting clients from Social media', 'Closing sales from WhatsApp', 'Building authority online', 'Charging premium prices'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 0', borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ color: C.green, fontSize: '18px', fontWeight: 900, flexShrink: 0, paddingTop: '2px' }}>✓</span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 600, color: C.bodyText, margin: 0, lineHeight: 1.5 }}>{t}</p>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: C.purple, padding: '20px 24px', marginBottom: '32px' }}>
              <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(18px, 2.8vw, 26px)', fontWeight: 400, color: C.yellow, letterSpacing: '0.04em', margin: 0 }}>
                Why? Because they understand content.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 700, color: C.ink, marginBottom: '16px' }}>Meanwhile, you're:</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '32px' }}>
              {['Overthinking what to post', 'Posting randomly', 'Getting low engagement', 'Attracting the wrong audience', 'Or not posting at all'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '14px 0', borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ color: C.red, fontSize: '16px', fontWeight: 900, flexShrink: 0, paddingTop: '3px' }}>•</span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', color: C.bodyText, margin: 0, lineHeight: 1.5 }}>{t}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 800, color: C.red, marginBottom: '6px' }}>Enough.</p>
              <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 400, color: C.purple, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                This is your turning point.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 400, color: C.ink, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.01em', marginBottom: '12px' }}>
              What This 10-Day Experience Will Do For You
            </h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', color: C.muted, marginBottom: '40px' }}>
              In 10 days, you will learn how to:
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '40px' }}>
              {[
                'Create content that positions you as an authority',
                'Stop begging for engagement',
                'Attract buyers, not spectators',
                'Turn followers into paying clients',
                'Sell without sounding desperate',
                'Build a brand people respect',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 0', borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ color: C.green, fontSize: '18px', fontWeight: 900, flexShrink: 0, paddingTop: '2px' }}>✅</span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 500, color: C.bodyText, margin: 0, lineHeight: 1.5 }}>{t}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ backgroundColor: C.purple, padding: '24px 28px', textAlign: 'center' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.65)', marginBottom: '4px' }}>This is not vibes.</p>
              <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 400, color: C.yellow, textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>
                This is positioning.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Rule />

      {/* ── LOVE DEAL ── */}
      <section style={{ backgroundColor: C.purple, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
              Exclusive Offer
            </p>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(26px, 5vw, 52px)', fontWeight: 400, color: C.white, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.01em', marginBottom: '32px' }}>
              The "You &amp; Me Love Deal"
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {[
                { label: 'Pay for yourself.', highlight: false },
                { label: 'Bring ONE person you love for FREE.', highlight: true },
                { label: 'Yes. FREE.', highlight: true },
              ].map((item, i) => (
                <p key={i} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: item.highlight ? 800 : 400, color: item.highlight ? C.yellow : 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.4 }}>
                  {item.label}
                </p>
              ))}
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', marginBottom: '28px' }}>
              *(They must not have paid for anything in the TKTY system before.)
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
              If you've been looking for a sign to grow together — this is it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── EVERYTHING YOU GET ── */}
      <section style={{ backgroundColor: C.lightGrey, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 400, color: C.ink, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.01em', marginBottom: '48px' }}>
              Here's Everything You Get
            </h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { emoji: '✅', title: 'Content Planner', badge: 'Worth ₦45,000', desc: 'Clear structure. No more "What should I post?" panic.' },
              { emoji: '✅', title: 'Master Content In 10 Days', badge: 'Worth ₦100,000 — BONUS', desc: 'The exact system to go from confused creator to confident brand authority.', highlight: true },
              { emoji: '✅', title: 'Personalized Content Audit', badge: 'First 15 Only', desc: 'Direct review + correction strategy to fix what is blocking your growth.', urgent: true },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  backgroundColor: C.white,
                  borderLeft: `4px solid ${item.highlight ? C.yellow : item.urgent ? C.red : C.purple}`,
                  padding: '24px 24px',
                  boxShadow: '0 2px 12px rgba(45,27,105,0.07)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 800, color: C.ink, margin: 0 }}>
                      {item.emoji} {item.title}
                    </p>
                    <span style={{
                      fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 700,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: item.highlight ? C.purple : item.urgent ? C.red : C.purpleLight,
                      backgroundColor: item.highlight ? `${C.yellow}30` : item.urgent ? '#FFF0F0' : C.lightGrey,
                      padding: '4px 10px', whiteSpace: 'nowrap',
                    }}>
                      {item.badge}
                    </span>
                  </div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.7, color: C.bodyText, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── INVESTMENT ── */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(26px, 4.5vw, 46px)', fontWeight: 400, color: C.ink, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.01em', marginBottom: '40px' }}>
              Investment
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '40px', maxWidth: '380px', margin: '0 auto 40px' }}>
              {[
                { label: 'Actual Value', value: '₦100,000', strike: true },
                { label: 'Early Bird Price', value: '₦27,500', highlight: true },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: C.muted }}>{row.label}</span>
                  <span style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: row.highlight ? '36px' : '20px',
                    fontWeight: 400,
                    color: row.highlight ? C.purple : C.muted,
                    textDecoration: row.strike ? 'line-through' : 'none',
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                  }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', fontWeight: 600, color: C.yellow, backgroundColor: C.purple, padding: '14px 20px', display: 'inline-block', marginBottom: '32px' }}>
              And you bring someone FREE.
            </p>
            <br />
            <PayBox />
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: C.muted, marginTop: '16px' }}>
              If you miss this early bird, the price goes back up. No emotional stories.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── URGENCY / COUNTDOWN ── */}
      <section style={{ backgroundColor: C.purple, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>
              This offer expires soon
            </p>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(24px, 4.5vw, 42px)', fontWeight: 400, color: C.white, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.01em', marginBottom: '8px' }}>
              Early Bird Closes In:
            </h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '36px' }}>
              ⏰ 72 Hours — or when slots are filled (whichever comes first)
            </p>
          </Reveal>
          <Reveal delay={60}>
            <Countdown />
          </Reveal>
          <Reveal delay={100}>
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
              {['Price goes back to ₦100,000', 'Free Content Audit disappears', 'Love Deal may close'].map((t, i) => (
                <p key={i} style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.6vw, 16px)', color: 'rgba(255,255,255,0.65)', display: 'flex', gap: '10px', alignItems: 'flex-start', margin: '0 auto', maxWidth: '360px', textAlign: 'left' }}>
                  <span style={{ color: C.yellow, fontWeight: 900, flexShrink: 0 }}>✅</span>
                  {t}
                </p>
              ))}
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', marginBottom: '28px' }}>
              This is not pressure. This is priority.
            </p>
            <PayBox />
          </Reveal>
        </div>
      </section>

      {/* ── FACILITATOR ── */}
      <section style={{ backgroundColor: C.lightGrey, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 400, color: C.ink, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.01em', marginBottom: '36px' }}>
              Meet Your Facilitator
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }} className="scale-facilitator">
              <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: C.purple, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `3px solid ${C.yellow}` }}>
                <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '24px', color: C.yellow, fontWeight: 400 }}>T</span>
              </div>
              <div>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 400, color: C.purple, letterSpacing: '0.02em', marginBottom: '4px' }}>
                  Thokothaya
                </p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.yellow, backgroundColor: C.purple, display: 'inline-block', padding: '4px 12px', marginBottom: '14px' }}>
                  No.1 Business Growth Catalyst
                </p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.8, color: C.bodyText, margin: 0 }}>
                  Known for helping brands move from confusion to clarity, from posting to positioning, from visibility to profitability. This strategy is backed by execution.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 400, color: C.ink, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.01em', marginBottom: '48px' }}>
              What Others Are Saying
            </h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: "Thokothaya are the best teachers/coaches I have ever met.", n: "Ronke", t: "Sales", stars: 5 },
              { q: "Before this training, I was posting randomly. After applying the framework, I got 3 paying clients in one week.", n: "Bunmi", t: "Retail", stars: 5 },
              { q: "I finally understand how to structure my content. My engagement doubled and I stopped feeling stuck.", n: "Tunde", t: "Real Estate", stars: 5 },
              { q: "This program changed how I see content. I now post with confidence and close sales without chasing.", n: "Ola", t: "Manufacturing", stars: 5 },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 50}>
                <div style={{ backgroundColor: C.lightGrey, borderLeft: `4px solid ${i % 2 === 0 ? C.purple : C.yellow}`, padding: '24px 24px' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                    {'⭐'.repeat(item.stars).split('').map((s, j) => (
                      <span key={j} style={{ fontSize: '16px' }}>{s}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.8, color: C.bodyText, fontStyle: 'italic', marginBottom: '16px' }}>
                    "{item.q}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: i % 2 === 0 ? C.purple : C.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '13px', color: i % 2 === 0 ? C.yellow : C.purple }}>{item.n[0]}</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 700, color: C.ink, margin: 0 }}>{item.n}</p>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: C.muted, margin: 0 }}>{item.t}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: C.lightGrey, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 400, color: C.ink, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.01em', marginBottom: '40px' }}>
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {[
              { q: '1. Is this for beginners?', a: 'Yes. Whether you\'re just starting or already posting, this gives you structure and clarity.' },
              { q: '2. What platform is this for?', a: 'Instagram, Facebook, WhatsApp, TikTok — the principles work everywhere.' },
              { q: '3. What if I\'m not tech-savvy?', a: 'You don\'t need to be. This is strategy-focused, not complicated tech.' },
              { q: '4. How long is the program?', a: '10 intensive, practical days.' },
              { q: '5. What if I miss a session?', a: 'Replays will be available (if applicable).' },
              { q: '6. Is the Love Deal really free?', a: 'Yes. You pay for yourself and bring one eligible person free.' },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 25}>
                <FAQItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOT FOR YOU ── */}
      <section style={{ backgroundColor: C.white, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 400, color: C.ink, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.01em', marginBottom: '12px' }}>
              Please Read This Carefully
            </h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', color: C.muted, marginBottom: '20px' }}>If you are:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '28px' }}>
              {['Looking for magic', 'Not ready to take action', 'Expecting results without implementation'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '12px 0', borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ color: C.red, fontWeight: 900, flexShrink: 0, paddingTop: '2px' }}>✗</span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', color: C.bodyText, margin: 0, lineHeight: 1.5 }}>{t}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', fontWeight: 600, color: C.red, marginBottom: '24px' }}>
              This is not for you.
            </p>
            <div style={{ backgroundColor: C.purple, padding: '24px 28px' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.75)', marginBottom: '8px' }}>
                But if you are serious about scaling your income through content…
              </p>
              <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 400, color: C.yellow, textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>
                Then stop hesitating.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ backgroundColor: C.purple, padding: '80px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(26px, 5vw, 52px)', fontWeight: 400, color: C.white, textTransform: 'uppercase', lineHeight: 1.1, letterSpacing: '0.01em', marginBottom: '20px' }}>
              Secure Your Slot Now
            </h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.65)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
              Click the button below and lock in your ₦27,500 early bird price before it returns to ₦100,000.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', marginBottom: '32px' }}>
              <CTABtn text="Yes, I'm Ready to Scale" />
              <CTABtn text="I'm Claiming the Love Deal" />
              <CTABtn text="I'm Done Playing Small" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {["Let 2026 not leave you invisible.", "Let's build.", "Let's scale.", "Let's win together."].map((t, i) => (
                <p key={i} style={{ fontFamily: "'Poppins', sans-serif", fontSize: i === 0 ? 'clamp(15px, 1.8vw, 17px)' : 'clamp(17px, 2.5vw, 22px)', fontWeight: i === 0 ? 400 : 700, color: i === 0 ? 'rgba(255,255,255,0.55)' : C.yellow, margin: 0 }}>{t}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ marginTop: '48px' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>
                Registration Closes Soon
              </p>
              <PayBox />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: C.ink, padding: '36px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Anton', sans-serif", fontSize: '18px', fontWeight: 400, letterSpacing: '0.08em', color: C.white, marginBottom: '6px' }}>
          SCALE YOUR INCOME WITH CONTENT
        </p>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: '0 0 6px' }}>
          Master Content In 10 Days Or Stay Invisible
        </p>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: 0 }}>
          © {new Date().getFullYear()} Thokothaya
        </p>
      </footer>

      {/* ── MOBILE STICKY ── */}
      <div className="scale-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 300,
        display: 'none', padding: '12px 16px',
        backgroundColor: C.purple, borderTop: `3px solid ${C.yellow}`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <a href={PAY_LINK} target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: C.yellow, color: C.purple, fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '16px', textDecoration: 'none' }}>
          Secure My Slot — ₦27,500
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 600px) {
          .scale-facilitator { flex-direction: column !important; }
          .scale-sticky { display: block !important; }
        }
      `}</style>
    </div>
  )
}
