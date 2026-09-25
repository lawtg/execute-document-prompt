import { useEffect, useRef, useState } from 'react'

/* ─── Design tokens ─────────────────────────────────── */
const C = {
  bg:      '#FFFFFF',
  surface: '#F7F5F0',
  ink:     '#111111',
  sub:     '#555550',
  muted:   '#888882',
  border:  '#E2DDD5',
  accent:  '#C8A96E',
  dark:    '#0F0F0D',
  btnBg:   '#111111',
  btnTxt:  '#FFFFFF',
  sectionAlt: '#F7F5F0',
  sectionDark: '#0F0F0D',
}

const WA_NUMBER = '2348035062181'
const WA_MSG    = encodeURIComponent("Hi, I just went through the Digital Product Business offer and I'm interested in getting started.")
const WA_URL    = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

/* ─── Helpers ───────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el); return () => obs.disconnect()
  }, [threshold])
  return { ref, vis }
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, vis } = useInView()
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

function Divider() {
  return <div style={{ height: '1px', backgroundColor: C.border }} />
}

/* Primary WhatsApp CTA */
function WaBtn({ text, large }: { text: string; large?: boolean }) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: '10px',
        backgroundColor: C.btnBg, color: C.btnTxt,
        fontFamily: 'inherit',
        fontSize: large ? '15px' : '13px',
        fontWeight: 800,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: large ? '20px 48px' : '16px 36px',
        textDecoration: 'none',
        transition: 'opacity 0.15s',
        cursor: 'pointer',
        border: 'none',
        width: '100%',
        maxWidth: large ? '420px' : '360px',
        boxSizing: 'border-box' as const,
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      {text} <span style={{ fontSize: large ? '20px' : '16px', lineHeight: 1 }}>→</span>
    </a>
  )
}

/* ─── Section label ─────────────────────────────────── */
function Label({ text }: { text: string }) {
  return (
    <p style={{
      fontSize: '10px', fontWeight: 800, letterSpacing: '0.22em',
      textTransform: 'uppercase', color: C.accent, marginBottom: '20px',
    }}>
      {text}
    </p>
  )
}

/* ─── FAQ Accordion ─────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: 'What exactly are you building for me?',
    a: 'We build the complete digital product business — from market research and opportunity selection, to product creation and design, Selar setup, sales copy, Meta Ads setup and campaign management. You provide the capital. We handle the execution.',
  },
  {
    q: 'Do I need to know how to write ebooks?',
    a: 'No. We handle all research, writing, structuring and design of the digital product.',
  },
  {
    q: 'Do I need to know Meta Ads?',
    a: 'No. We create the ad creatives, set up the campaigns and manage the advertising on your behalf.',
  },
  {
    q: 'Who chooses the product idea?',
    a: 'We use market research to identify the right opportunity. You approve the direction before we proceed.',
  },
  {
    q: 'How long does the setup take?',
    a: 'The timeline depends on research, product creation and approvals. We structure the process from research through to advertising launch as efficiently as possible.',
  },
  {
    q: 'Where will my product be sold?',
    a: 'Your product will be published on Selar as the primary storefront.',
  },
  {
    q: 'Is the ₦100,000 the advertising budget?',
    a: 'The ₦100,000 covers everything — including the ad budget for the first 4 days of your campaign. After those 4 days, you reinvest the revenue your business has already generated back into advertising. The goal is to make the business self-funding as quickly as possible.',
  },
  {
    q: 'How do I get started?',
    a: 'Click any of the buttons on this page to open WhatsApp. Send us a message and we will walk you through the next steps.',
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', background: 'none', border: 'none',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '22px 0', gap: '16px', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '15px', fontWeight: 700, color: C.dark, lineHeight: 1.4 }}>{q}</span>
        <span style={{
          fontSize: '22px', fontWeight: 300, color: C.accent, flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s',
          lineHeight: 1,
        }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: '15px', lineHeight: 1.8, color: C.sub, paddingBottom: '22px', margin: 0 }}>
          {a}
        </p>
      )}
    </div>
  )
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function DFY() {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ backgroundColor: C.bg, color: C.ink, fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif", lineHeight: 1.6 }}>

      {/* ── NAV ─────────────────────────────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        backgroundColor: C.bg, borderBottom: `1px solid ${C.border}`,
        height: '60px', display: 'flex', alignItems: 'center',
        padding: '0 24px', justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: '15px', fontWeight: 900, letterSpacing: '-0.03em', color: C.dark }}>
          THE DIGITAL<span style={{ color: C.accent }}>.</span>
        </span>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          style={{
            fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: C.bg, textDecoration: 'none',
            backgroundColor: C.btnBg, padding: '10px 20px',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          I Want This →
        </a>
      </nav>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ backgroundColor: C.dark, padding: '100px 24px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.accent, marginBottom: '28px' }}>
            The Digital Product Business
          </p>
          <h1 style={{
            fontSize: 'clamp(36px, 8vw, 72px)', fontWeight: 900,
            lineHeight: 1.0, letterSpacing: '-0.03em',
            color: '#FFFFFF', marginBottom: '24px',
          }}>
            Do You Have ₦100,000 But Don't Know What Business To Start?
          </h1>
          <p style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 800, color: C.accent, marginBottom: '24px', lineHeight: 1.3 }}>
            We'll Build You a Digital Product Business.
          </p>
          <div style={{ fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '0 auto 32px', textAlign: 'left' }}>
            {[
              "You don't need to know how to write an ebook.",
              "You don't need to know what people are buying.",
              "You don't need to learn Facebook Ads.",
              "You don't need to spend months trying to figure everything out.",
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ color: '#CC5555', fontWeight: 900, flexShrink: 0, paddingTop: '2px' }}>✗</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', maxWidth: '520px', margin: '0 auto 48px' }}>
            We'll do the heavy lifting for you. We'll research the market, find a product opportunity, create the ebook, package it, set it up on Selar and launch the advertising campaign.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: C.accent, color: C.dark,
                fontFamily: 'inherit', fontSize: '14px', fontWeight: 900,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '20px 48px', textDecoration: 'none', width: '100%', maxWidth: '420px',
                boxSizing: 'border-box', transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              I Want This Business →
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'underline' }}
            >
              Speak with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── PROOF BAR ───────────────────────────────── */}
      <section style={{ backgroundColor: C.accent, padding: '0' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} className="dfy2-proof-bar">
          {[
            { n: '53+', l: 'People Helped' },
            { n: '100+', l: 'Copies Sold Per Client Within First Month' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '36px 32px', textAlign: 'center',
              borderRight: i === 0 ? `1px solid rgba(0,0,0,0.12)` : 'none',
            }}>
              <div style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 900, letterSpacing: '-0.03em', color: C.dark, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.55)', marginTop: '8px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: C.bg }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: '-0.03em', color: C.dark, marginBottom: '12px',
            }}>
              YOU DON'T NEED ANOTHER BUSINESS IDEA.
            </h2>
            <h3 style={{
              fontSize: 'clamp(20px, 4vw, 36px)', fontWeight: 900,
              lineHeight: 1.15, letterSpacing: '-0.02em', color: C.sub, marginBottom: '48px',
            }}>
              YOU NEED SOMEONE TO BUILD THE BUSINESS.
            </h3>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ fontSize: '17px', lineHeight: 1.85, color: C.sub, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              <p>There are people with money who want another source of income but don't have the time or expertise to spend months learning online business.</p>
              <p>They don't want another course.</p>
              <p>They don't want another tutorial.</p>
              <p>They want someone who understands the process and can execute it.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ borderLeft: `4px solid ${C.accent}`, paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 900, letterSpacing: '-0.02em', color: C.dark }}>
                THAT'S WHAT WE DO.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* ── THE OFFER ───────────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: C.sectionAlt }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <Label text="The Offer" />
            <h2 style={{
              fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: 900,
              lineHeight: 1.05, letterSpacing: '-0.03em', color: C.dark, marginBottom: '12px',
            }}>
              WE BUILD THE DIGITAL PRODUCT BUSINESS.
            </h2>
            <h2 style={{
              fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: 900,
              lineHeight: 1.05, letterSpacing: '-0.03em', color: C.accent, marginBottom: '48px',
            }}>
              YOU PROVIDE THE CAPITAL.
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: C.border, marginBottom: '56px' }} className="dfy2-offer-grid">
            {/* We handle */}
            <Reveal delay={60}>
              <div style={{ backgroundColor: C.bg, padding: '36px 28px' }}>
                <p style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.sub, marginBottom: '20px' }}>We Handle</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Market research',
                    'Opportunity selection',
                    'Product strategy',
                    'Ebook creation',
                    'Ebook design',
                    'Cover design',
                    'Sales copy',
                    'Selar setup',
                    'Marketing assets',
                    'Meta Ads setup',
                    'Campaign management',
                    'Optimization',
                  ].map((t, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: C.accent, fontWeight: 900, flexShrink: 0, fontSize: '14px', lineHeight: '1.5' }}>✓</span>
                      <span style={{ fontSize: '14px', color: C.sub, lineHeight: 1.5 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Client provides */}
            <Reveal delay={120}>
              <div style={{ backgroundColor: C.dark, padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <p style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0' }}>You Provide</p>
                {['THE CAPITAL', 'APPROVAL ON THE DIRECTION', 'THE ADVERTISING BUDGET'].map((t, i) => (
                  <div key={i} style={{ borderBottom: i < 2 ? `1px solid rgba(255,255,255,0.08)` : 'none', paddingBottom: i < 2 ? '28px' : '0' }}>
                    <p style={{ fontSize: 'clamp(16px, 3vw, 22px)', fontWeight: 900, letterSpacing: '-0.01em', color: '#fff', margin: 0 }}>{t}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <WaBtn text="I Want This Business" large />
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* ── 5-STEP SYSTEM ───────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: C.bg }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <Label text="The System" />
            <h2 style={{
              fontSize: 'clamp(28px, 6vw, 50px)', fontWeight: 900,
              lineHeight: 1.05, letterSpacing: '-0.03em', color: C.dark, marginBottom: '72px',
            }}>
              FROM IDEA TO BUSINESS
            </h2>
          </Reveal>

          {[
            { n: '01', t: 'FIND THE OPPORTUNITY', b: 'We research markets, problems, audiences and existing demand to identify a digital product opportunity worth pursuing.' },
            { n: '02', t: 'BUILD THE PRODUCT', b: 'We research, write, structure and design the digital product.' },
            { n: '03', t: 'BUILD THE SELLING SYSTEM', b: 'We publish the product on Selar and create the sales assets needed to turn attention into customers.' },
            { n: '04', t: 'GET CUSTOMERS', b: 'We create and launch Meta advertising campaigns designed to put the offer in front of the right audience.' },
            { n: '05', t: 'OPTIMIZE THE SYSTEM', b: 'We monitor performance, identify what is working and improve the system over time.' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{
                display: 'grid', gridTemplateColumns: '64px 1fr',
                gap: '24px', padding: '40px 0',
                borderBottom: `1px solid ${C.border}`, alignItems: 'flex-start',
              }}>
                <div style={{
                  fontSize: 'clamp(40px, 6vw, 60px)', fontWeight: 900,
                  color: 'rgba(0,0,0,0.06)', lineHeight: 1, letterSpacing: '-0.03em',
                }}>
                  {s.n}
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.accent, marginBottom: '10px' }}>{s.t}</p>
                  <p style={{ fontSize: '16px', lineHeight: 1.75, color: C.sub, margin: 0 }}>{s.b}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── YOU DON'T HAVE TO ───────────────────────── */}
      <section style={{ backgroundColor: C.sectionAlt, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontSize: 'clamp(28px, 6vw, 50px)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: '-0.03em', color: C.dark, marginBottom: '48px',
            }}>
              YOU DON'T HAVE TO BECOME AN EXPERT FIRST.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.sub, marginBottom: '32px' }}>
              You don't have to:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '56px' }}>
              {[
                'Spend months researching markets.',
                'Learn how to write an ebook.',
                'Learn graphic design.',
                'Figure out Selar yourself.',
                'Learn Meta Ads from scratch.',
                'Build landing pages yourself.',
                'Spend months trying different ideas.',
              ].map((t, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '16px', alignItems: 'flex-start',
                  padding: '18px 0', borderBottom: `1px solid ${C.border}`,
                }}>
                  <span style={{ color: '#CC4444', fontWeight: 900, fontSize: '14px', flexShrink: 0, paddingTop: '2px' }}>✗</span>
                  <span style={{ fontSize: '16px', color: C.sub, lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ backgroundColor: C.dark, padding: '40px 32px' }}>
              <p style={{ fontSize: 'clamp(18px, 4vw, 28px)', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.2, margin: 0 }}>
                YOU PROVIDE THE CAPITAL.<br />
                <span style={{ color: C.accent }}>WE HANDLE THE EXECUTION.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* ── PROOF ───────────────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: C.bg }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Track Record" />
            <h2 style={{
              fontSize: 'clamp(26px, 5vw, 46px)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: '-0.03em', color: C.dark, marginBottom: '48px',
            }}>
              WE'RE NOT BUILDING THIS FROM THEORY.
            </h2>
          </Reveal>

          {/* Big numbers */}
          <Reveal delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: C.border, marginBottom: '56px' }} className="dfy2-stat-grid">
              {[
                { n: '53+', l: 'People Helped' },
                { n: '100+', l: 'Copies Sold By Each Client Within Their First Month' },
              ].map((s, i) => (
                <div key={i} style={{ backgroundColor: C.bg, padding: '40px 28px' }}>
                  <div style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 900, letterSpacing: '-0.04em', color: C.dark, lineHeight: 1, marginBottom: '10px' }}>{s.n}</div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, margin: 0 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p style={{ fontSize: '17px', lineHeight: 1.85, color: C.sub, marginBottom: '40px' }}>
              We've already helped more than 53 people build and sell digital products, with each client selling 100+ copies of their ebook within their first month across our previous campaigns.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
              {[
                "We've researched the markets.",
                "We've created the products.",
                "We've built the offers.",
                "We've run the ads.",
                "We've learned what it takes to turn a digital product into something people actually buy.",
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 0', borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ color: C.accent, fontWeight: 900, flexShrink: 0 }}>—</span>
                  <span style={{ fontSize: '16px', color: C.sub, lineHeight: 1.65 }}>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div style={{ borderLeft: `4px solid ${C.accent}`, paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(18px, 4vw, 28px)', fontWeight: 900, letterSpacing: '-0.02em', color: C.dark, margin: 0 }}>
                NOW WE'RE PACKAGING THAT SYSTEM FOR YOU.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── REVENUE POTENTIAL ───────────────────────── */}
      <section style={{ backgroundColor: C.dark, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <Label text="The Numbers" />
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900,
              lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff', marginBottom: '20px',
            }}>
              Let's talk about what this could actually look like for you.
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: '56px' }}>
              We're not going to promise you millions. But we are going to show you what's realistic — based on what's already happened with people we've worked with.
            </p>
          </Reveal>

          {/* Scenario */}
          <Reveal delay={60}>
            <div style={{ border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px' }}>
              <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(200,169,110,0.12)' }}>
                <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent, margin: 0 }}>
                  A Simple Example
                </p>
              </div>
              <div style={{ padding: '32px 28px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} className="dfy2-revenue-grid">
                {[
                  { label: 'Ebook Price', value: '₦5,000' },
                  { label: 'Copies Sold', value: '100' },
                  { label: 'Revenue', value: '₦500,000' },
                ].map((item, i) => (
                  <div key={i} style={{ backgroundColor: '#0F0F0D', padding: '28px 20px', textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 900, letterSpacing: '-0.03em', color: i === 2 ? C.accent : '#fff', lineHeight: 1, marginBottom: '8px' }}>{item.value}</div>
                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{item.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '24px 28px' }}>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
                  100 copies at ₦5,000 each = <strong style={{ color: '#fff' }}>₦500,000 in revenue</strong> — in a single month. That's not a projection we made up. That's the kind of result our system is designed to produce.
                </p>
              </div>
            </div>
          </Reveal>

          {/* How the ₦100k works */}
          <Reveal delay={80}>
            <div style={{ border: '1px solid rgba(255,255,255,0.1)', marginBottom: '48px' }}>
              <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent, margin: 0 }}>
                  How Your ₦100,000 Works
                </p>
              </div>
              <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { n: '01', t: 'We build everything', b: 'Market research, product creation, design, Selar setup, sales copy and ad creatives — all covered.' },
                  { n: '02', t: 'We launch your ads', b: 'Your ₦100,000 includes the advertising budget for the first 4 days of your campaign. We run the ads and start driving customers to your product.' },
                  { n: '03', t: 'Revenue starts coming in', b: 'Within those first 4 days, your product begins generating sales. Real money — from real customers.' },
                  { n: '04', t: 'You reinvest and scale', b: 'After day 4, you take the revenue your business has already generated and reinvest it back into advertising. The business starts funding itself.' },
                ].map((step, i, arr) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '48px 1fr',
                    gap: '16px', padding: '24px 0',
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}>
                    <div style={{ fontSize: '36px', fontWeight: 900, color: 'rgba(255,255,255,0.08)', lineHeight: 1, letterSpacing: '-0.03em' }}>{step.n}</div>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.accent, marginBottom: '6px' }}>{step.t}</p>
                      <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{step.b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ borderLeft: `4px solid ${C.accent}`, paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.3, marginBottom: '8px' }}>
                One investment. A business that can fund itself.
              </p>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
                That's the model. You put in ₦100,000. We build the machine. The machine starts generating revenue. The revenue keeps the machine running.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MID CTA ─────────────────────────────────── */}
      <section style={{ backgroundColor: C.accent, padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontSize: 'clamp(20px, 4vw, 30px)', fontWeight: 900, letterSpacing: '-0.02em', color: C.dark, marginBottom: '28px' }}>
              YOU PROVIDE THE CAPITAL.<br />WE BUILD THE BUSINESS.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: C.dark, color: '#fff',
                fontFamily: 'inherit', fontSize: '14px', fontWeight: 900,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '20px 48px', textDecoration: 'none',
                width: '100%', maxWidth: '380px', boxSizing: 'border-box',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              I Want This Business →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── NOT AN EBOOK ────────────────────────────── */}
      <section style={{ backgroundColor: C.bg, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: 900,
              lineHeight: 1.05, letterSpacing: '-0.03em', color: C.sub, marginBottom: '8px',
            }}>
              THIS IS NOT AN EBOOK.
            </h2>
            <h2 style={{
              fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: 900,
              lineHeight: 1.05, letterSpacing: '-0.03em', color: C.dark, marginBottom: '40px',
            }}>
              IT'S A DIGITAL PRODUCT BUSINESS.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ fontSize: '17px', lineHeight: 1.85, color: C.sub, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              <p>You're not paying us simply to write a PDF.</p>
              <p>The goal is to build the complete system around a researched product opportunity:</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap', marginBottom: '16px' }}>
              {['OPPORTUNITY', 'PRODUCT', 'STORE', 'TRAFFIC', 'SALES'].map((n, i, arr) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em',
                    textTransform: 'uppercase', padding: '10px 16px',
                    border: `1px solid ${i === arr.length - 1 ? C.accent : C.border}`,
                    color: i === arr.length - 1 ? C.dark : C.sub,
                    backgroundColor: i === arr.length - 1 ? `${C.accent}30` : 'transparent',
                  }}>{n}</span>
                  {i < arr.length - 1 && <span style={{ color: C.border, padding: '0 2px', fontSize: '14px' }}>→</span>}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* ── GUARANTEE ───────────────────────────────── */}
      <section style={{ backgroundColor: C.sectionAlt, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontSize: 'clamp(24px, 5vw, 44px)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: '-0.03em', color: C.dark, marginBottom: '12px',
            }}>
              BUT WHAT IF THE PRODUCT DOESN'T SELL?
            </h2>
            <h3 style={{
              fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: 800,
              lineHeight: 1.2, letterSpacing: '-0.02em', color: C.sub, marginBottom: '40px',
            }}>
              THAT'S EXACTLY WHY YOU'RE NOT BUILDING IT YOURSELF.
            </h3>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ fontSize: '17px', lineHeight: 1.85, color: C.sub, display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '48px' }}>
              <p>We've already helped 53+ people build and sell digital products, with each client selling 100+ copies of their ebook within their first month across our previous campaigns.</p>
              <p>So we're not coming into this trying to figure out what might work.</p>
              <p>We've done this before.</p>
              <p>Repeatedly.</p>
              <p>We've researched the markets.</p>
              <p>We've identified products people actually want.</p>
              <p>We've created the products.</p>
              <p>We've built the offers.</p>
              <p>We've run the ads.</p>
              <p>And we've learned what it takes to turn a digital product into something people actually buy.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ borderLeft: `4px solid ${C.accent}`, paddingLeft: '24px', marginBottom: '56px' }}>
              <p style={{ fontSize: 'clamp(18px, 3.5vw, 26px)', fontWeight: 900, letterSpacing: '-0.02em', color: C.dark, margin: 0 }}>
                NOW WE'RE PACKAGING THAT SYSTEM FOR YOU.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────── */}
      <section style={{ backgroundColor: C.dark, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Investment" />
            <h2 style={{
              fontSize: 'clamp(26px, 5vw, 46px)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', marginBottom: '56px',
            }}>
              START YOUR DIGITAL PRODUCT BUSINESS
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <div style={{ borderTop: `1px solid rgba(255,255,255,0.1)`, borderBottom: `1px solid rgba(255,255,255,0.1)`, padding: '48px 0', marginBottom: '48px' }}>
              <div style={{ fontSize: 'clamp(56px, 10vw, 96px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: '8px' }}>
                ₦100,000
              </div>
              <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '36px' }}>
                One-Time Setup &amp; Implementation Fee
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }} className="dfy2-include-grid">
                {[
                  'Research', 'Product creation', 'Design', 'Publishing',
                  'Sales assets', 'Marketing setup', 'Meta Ads management',
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.accent, fontWeight: 900, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', marginBottom: '40px' }}>
              Includes everything — setup, implementation and your first 4 days of advertising. After day 4, you reinvest your revenue.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '10px', backgroundColor: C.accent, color: C.dark,
                fontFamily: 'inherit', fontSize: '14px', fontWeight: 900,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '20px 48px', textDecoration: 'none',
                width: '100%', maxWidth: '420px', boxSizing: 'border-box',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              I Want To Get Started →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── WHO IT'S FOR ────────────────────────────── */}
      <section style={{ backgroundColor: C.bg, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Is This For You?" />
            <h2 style={{
              fontSize: 'clamp(26px, 5vw, 46px)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: '-0.03em', color: C.dark, marginBottom: '48px',
            }}>
              THIS IS FOR YOU IF...
            </h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '56px' }}>
            {[
              'You have at least ₦100,000 available to invest.',
              'You want another source of income.',
              'You want to build an online business.',
              "You don't have time to figure everything out yourself.",
              'You would rather pay someone with experience to execute.',
              'You are willing to fund the business and follow the process.',
            ].map((t, i) => (
              <Reveal key={i} delay={i * 40}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '22px 0', borderBottom: `1px solid ${C.border}` }}>
                  <div style={{
                    width: '26px', height: '26px', backgroundColor: C.accent,
                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0, marginTop: '1px',
                  }}>
                    <span style={{ color: C.dark, fontSize: '11px', fontWeight: 900 }}>✓</span>
                  </div>
                  <p style={{ fontSize: '17px', lineHeight: 1.7, color: C.sub, margin: 0 }}>{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <div style={{ backgroundColor: C.sectionAlt, padding: '36px 28px' }}>
              <p style={{ fontSize: 'clamp(16px, 3vw, 22px)', fontWeight: 900, letterSpacing: '-0.01em', color: C.dark, lineHeight: 1.3, margin: 0 }}>
                IT'S NOT ABOUT KNOWING EVERYTHING.<br />
                <span style={{ color: C.sub }}>IT'S ABOUT HAVING THE CAPITAL AND BEING READY TO BUILD.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* ── HOW IT WORKS ────────────────────────────── */}
      <section style={{ backgroundColor: C.sectionAlt, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <Label text="The Process" />
            <h2 style={{
              fontSize: 'clamp(26px, 5vw, 46px)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: '-0.03em', color: C.dark, marginBottom: '72px',
            }}>
              FROM PAYMENT TO LAUNCH
            </h2>
          </Reveal>
          {[
            { n: '01', t: 'GET STARTED', b: 'You speak with us on WhatsApp and complete payment.' },
            { n: '02', t: 'DISCOVER', b: 'We understand your goals, interests and direction.' },
            { n: '03', t: 'RESEARCH', b: 'We research the market and identify the opportunity.' },
            { n: '04', t: 'BUILD', b: 'We create and package the digital product.' },
            { n: '05', t: 'LAUNCH', b: 'We publish the product and launch the marketing system.' },
            { n: '06', t: 'OPTIMIZE', b: 'We monitor performance and improve the campaigns.' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 50}>
              <div style={{
                display: 'grid', gridTemplateColumns: '56px 1fr',
                gap: '20px', padding: '36px 0',
                borderBottom: `1px solid ${C.border}`, alignItems: 'flex-start',
              }}>
                <div style={{
                  fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 900,
                  color: 'rgba(0,0,0,0.07)', lineHeight: 1, letterSpacing: '-0.03em',
                }}>
                  {s.n}
                </div>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.accent, marginBottom: '8px' }}>{s.t}</p>
                  <p style={{ fontSize: '16px', lineHeight: 1.7, color: C.sub, margin: 0 }}>{s.b}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section style={{ backgroundColor: C.bg, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <Label text="FAQ" />
            <h2 style={{
              fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 900,
              lineHeight: 1.1, letterSpacing: '-0.03em', color: C.dark, marginBottom: '56px',
            }}>
              COMMON QUESTIONS
            </h2>
          </Reveal>
          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {FAQ_ITEMS.map((f, i) => (
              <Reveal key={i} delay={i * 30}>
                <AccordionItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section style={{ backgroundColor: C.dark, padding: '120px 24px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.accent, marginBottom: '28px' }}>
              Done-For-You Digital Product Business
            </p>
            <h2 style={{
              fontSize: 'clamp(36px, 8vw, 72px)', fontWeight: 900,
              lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '24px',
            }}>
              <span style={{ color: '#fff' }}>YOU HAVE THE CAPITAL.</span>
              <br />
              <span style={{ color: C.accent }}>NOW BUILD SOMETHING WITH IT.</span>
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
              Let us handle the research, product creation and marketing system while you focus on building another source of income.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '10px', backgroundColor: C.accent, color: C.dark,
                fontFamily: 'inherit', fontSize: '15px', fontWeight: 900,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '22px 48px', textDecoration: 'none',
                width: '100%', maxWidth: '420px', boxSizing: 'border-box',
                margin: '0 auto 20px', transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Talk To Us On WhatsApp →
            </a>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
              We'll explain the process, answer your questions and show you how to get started.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer style={{ backgroundColor: '#080806', padding: '28px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', margin: 0 }}>
          © {new Date().getFullYear()} Quick Learn Plus · The Digital Product Business
        </p>
      </footer>

      {/* ── MOBILE STICKY CTA ───────────────────────── */}
      <div className="dfy2-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        zIndex: 200, display: 'none',
        padding: '12px 16px',
        backgroundColor: C.dark,
        borderTop: `2px solid ${C.accent}`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'block', width: '100%', textAlign: 'center',
            backgroundColor: C.accent, color: C.dark,
            fontFamily: 'inherit', fontSize: '14px', fontWeight: 900,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '16px', textDecoration: 'none',
          }}
        >
          Build My Business →
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 600px) {
          .dfy2-proof-bar { grid-template-columns: 1fr !important; }
          .dfy2-offer-grid { grid-template-columns: 1fr !important; }
          .dfy2-stat-grid { grid-template-columns: 1fr !important; }
          .dfy2-include-grid { grid-template-columns: 1fr !important; }
          .dfy2-revenue-grid { grid-template-columns: 1fr !important; }
          .dfy2-sticky { display: block !important; }
        }
      `}</style>
    </div>
  )
}
