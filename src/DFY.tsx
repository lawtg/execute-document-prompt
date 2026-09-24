import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/* ─── tokens ─────────────────────────────────────────── */
const T = {
  bg:       '#F9F7F3',
  ink:      '#1A1A18',
  inkLight: '#4A4A45',
  border:   '#DDD9D0',
  accent:   '#2D5016',   // deep forest green
  accentLt: '#3D6B1F',
  cream:    '#F3F0E8',
  charcoal: '#1C1C1A',
  gold:     '#A08030',
}

/* ─── helpers ─────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold })
    obs.observe(el); return () => obs.disconnect()
  }, [threshold])
  return { ref, vis }
}

function Reveal({ children, delay = 0, y = 22 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const { ref, vis } = useInView()
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : `translateY(${y}px)`, transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms` }}>
      {children}
    </div>
  )
}

function Rule() {
  return <div style={{ height: '1px', backgroundColor: T.border, margin: '0' }} />
}

function CTABtn({ text, to, large }: { text: string; to?: string; large?: boolean }) {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '10px',
    backgroundColor: T.accent, color: '#fff',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: large ? '16px' : '14px',
    fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
    padding: large ? '20px 48px' : '15px 36px',
    border: 'none', borderRadius: '2px', cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.2s, transform 0.15s',
  }
  const hover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = T.accentLt
    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
  }
  const leave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = T.accent
    ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
  }
  if (to) return <Link to={to} style={style} onMouseEnter={hover} onMouseLeave={leave}>{text} <span style={{ fontSize: '18px', lineHeight: 1 }}>→</span></Link>
  return <a href="#get-started" style={style} onMouseEnter={hover} onMouseLeave={leave}>{text} <span style={{ fontSize: '18px', lineHeight: 1 }}>→</span></a>
}

const STEPS = [
  { n: '01', title: 'FIND THE OPPORTUNITY', body: 'We research markets and identify digital product opportunities based on what people are already interested in buying.' },
  { n: '02', title: 'BUILD THE PRODUCT', body: 'We research, structure, write and professionally design the digital product.' },
  { n: '03', title: 'BUILD THE STORE', body: 'We publish the product on Selar and prepare the entire sales infrastructure.' },
  { n: '04', title: 'GET CUSTOMERS', body: 'We create the advertising creatives and launch Meta Ads.' },
  { n: '05', title: 'OPTIMIZE THE SYSTEM', body: 'We monitor the campaign, analyze the numbers and improve the advertising and offer.' },
]

const INCLUDED = [
  { label: 'MARKET RESEARCH', body: 'Identify a digital product opportunity with real demand.' },
  { label: 'PRODUCT STRATEGY', body: 'Determine what the product should teach and how it should be positioned.' },
  { label: 'EBOOK CREATION', body: 'Research, write and structure the product.' },
  { label: 'PROFESSIONAL DESIGN', body: 'Create the cover and interior design.' },
  { label: 'SELAR SETUP', body: 'Publish and configure the product for sale.' },
  { label: 'SALES COPY', body: 'Create the messaging that communicates the value of the product.' },
  { label: 'AD CREATIVE', body: 'Create advertising assets designed for Meta.' },
  { label: 'META ADS', body: 'Launch and manage the advertising campaign.' },
  { label: 'OPTIMIZATION', body: 'Monitor performance and improve the system.' },
]

const TIMELINE = [
  { n: '01', step: 'GET STARTED', body: 'Pay the ₦100,000 setup fee and complete onboarding.' },
  { n: '02', step: 'RESEARCH', body: 'We research your market and identify the product opportunity.' },
  { n: '03', step: 'CREATE', body: 'We research, write and design the digital product.' },
  { n: '04', step: 'PUBLISH', body: 'We set up the Selar product and sales infrastructure.' },
  { n: '05', step: 'LAUNCH', body: 'We create the advertising assets and launch Meta Ads.' },
  { n: '06', step: 'OPTIMIZE', body: 'We monitor the campaign and improve performance.' },
]

const FAQS = [
  { q: 'IS THE ₦100,000 MY ADVERTISING BUDGET?', a: 'No. The ₦100,000 is the setup and implementation fee. Advertising is funded separately.' },
  { q: 'DO I NEED TO KNOW HOW TO WRITE EBOOKS?', a: 'No. We handle the research, writing and product creation.' },
  { q: 'DO I CHOOSE THE TOPIC?', a: 'We use market research to identify the opportunity rather than simply choosing a topic based on personal preference.' },
  { q: 'HOW MUCH SHOULD I BUDGET FOR ADS?', a: 'We recommend starting with approximately ₦50,000–₦100,000+ depending on the product and campaign strategy.' },
  { q: 'WHERE WILL MY PRODUCT BE SOLD?', a: 'We use Selar as the initial digital product storefront.' },
  { q: 'DO I NEED TO RUN THE ADS MYSELF?', a: 'No. We handle the initial Meta Ads setup and management included within the agreed scope.' },
  { q: 'HOW LONG DOES IT TAKE?', a: 'The exact timeline depends on the research, product and approvals, but the process covers research, product creation, publishing and advertising launch.' },
  { q: "WHAT IF I DON'T KNOW WHAT EBOOK TO SELL?", a: "That's part of what you're paying us to solve. We research the market and identify the opportunity." },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${T.border}`, cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 0', gap: '16px' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '0.06em', margin: 0, color: T.ink }}>{q}</p>
        <span style={{ color: T.accent, fontSize: '22px', fontWeight: 300, flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </div>
      {open && <p style={{ fontSize: '16px', lineHeight: 1.8, color: T.inkLight, paddingBottom: '22px', margin: 0 }}>{a}</p>}
    </div>
  )
}

/* ─── HERO VISUAL ─────────────────────────────────────── */
function SystemVisual() {
  const nodes = ['MARKET', 'PRODUCT', 'SELAR', 'ADVERTISING', 'SALES']
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0', userSelect: 'none' }}>
      {nodes.map((node, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{
            border: `1px solid ${i === nodes.length - 1 ? T.accent : T.border}`,
            backgroundColor: i === nodes.length - 1 ? T.accent : 'transparent',
            padding: '12px 28px',
            minWidth: '200px',
          }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.2em',
              color: i === nodes.length - 1 ? '#fff' : T.inkLight,
            }}>{node}</span>
          </div>
          {i < nodes.length - 1 && (
            <div style={{ paddingLeft: '28px', paddingTop: '6px', paddingBottom: '6px' }}>
              <div style={{ width: '1px', height: '28px', backgroundColor: T.border }} />
              <div style={{ width: '6px', height: '6px', backgroundColor: T.accent, borderRadius: '50%', marginLeft: '-2.5px', marginTop: '-3px' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ─── PAGE ─────────────────────────────────────────────── */
export default function DFY() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [stickyShow, setStickyShow] = useState(false)

  useEffect(() => {
    const fn = () => setStickyShow(window.scrollY > 700)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: "What's Included", href: '#included' },
    { label: 'Proof', href: '#proof' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <div style={{ backgroundColor: T.bg, color: T.ink, minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── NAV ───────────────────────────────────────── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: T.bg, borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', fontWeight: 700, letterSpacing: '-0.01em', color: T.ink }}>
            QuickLearn<span style={{ color: T.accent }}>+</span>
          </span>
          <div className="dfy-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map(l => (
              <a key={l.label} href={l.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 500, color: T.inkLight, textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = T.ink)}
                onMouseLeave={e => (e.currentTarget.style.color = T.inkLight)}
              >{l.label}</a>
            ))}
            <Link to="/dfy/checkout" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.accent, textDecoration: 'none', border: `1px solid ${T.accent}`, padding: '8px 20px', borderRadius: '2px', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = T.accent; (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = T.accent }}
            >Get Started →</Link>
          </div>
          <button className="dfy-hamburger" onClick={() => setMenuOpen(o => !o)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: T.ink, fontSize: '20px' }}>☰</button>
        </div>
        {menuOpen && (
          <div style={{ borderTop: `1px solid ${T.border}`, padding: '20px 2rem', display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: T.bg }}>
            {navLinks.map(l => <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: T.ink, textDecoration: 'none', fontWeight: 500 }}>{l.label}</a>)}
            <Link to="/dfy/checkout" style={{ fontSize: '15px', color: T.accent, fontWeight: 700, textDecoration: 'none' }}>Get Started →</Link>
          </div>
        )}
      </nav>

      {/* ── HERO ──────────────────────────────────────── */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '80px', alignItems: 'center' }} className="dfy-hero-grid">
          <div>
            <Reveal delay={0}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.accent, marginBottom: '28px' }}>
                Done-For-You Digital Product Business
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(42px, 6vw, 76px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: T.ink, marginBottom: '32px' }}>
                You have the<br />capital.<br /><span style={{ color: T.accent }}>We build the</span><br />business.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p style={{ fontSize: '18px', lineHeight: 1.8, color: T.inkLight, maxWidth: '520px', marginBottom: '48px', fontWeight: 400 }}>
                We research the opportunity, create the digital product, publish it on Selar, launch the advertising and manage the system — so you don't have to spend months figuring it all out yourself.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                <CTABtn text="Build My Digital Product Business" to="/dfy/checkout" large />
                <p style={{ fontSize: '13px', color: T.inkLight, margin: 0 }}>₦100,000 setup fee + advertising budget</p>
                <p style={{ fontSize: '13px', color: T.inkLight, margin: 0 }}>Built from a system we've already used to help <strong style={{ color: T.ink }}>53+ people</strong> sell digital products.</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <SystemVisual />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROOF BAR ─────────────────────────────────── */}
      <section style={{ backgroundColor: T.charcoal, padding: '48px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} className="dfy-proof-grid">
          {[
            { n: '53+', l: 'People Helped' },
            { n: '100+', l: 'Ebook Copies Sold Within First Month' },
            { n: '1', l: 'Proven System' },
          ].map((s, i) => (
            <div key={i} style={{ backgroundColor: T.charcoal, padding: '40px 32px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(42px, 5vw, 60px)', fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: '10px' }}>{s.n}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────── */}
      <section style={{ padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 58px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              You don't need another business idea.
            </h2>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 600, lineHeight: 1.3, color: T.inkLight, marginBottom: '56px' }}>
              You need someone to build the business.
            </h3>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ fontSize: '18px', lineHeight: 1.85, color: T.inkLight, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '56px' }}>
              <p>You may already have money available.</p>
              <p>You may want another income stream.</p>
              <p>But building an online business requires much more than having capital.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 40px', marginBottom: '56px' }} className="dfy-problem-grid">
              {['Find something people want.', 'Research the market.', 'Create the product.', 'Write the sales copy.', 'Design the product.', 'Set up the store.', 'Create advertisements.', 'Learn Meta Ads.', 'Track the numbers.', 'Optimize the campaigns.'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0', borderBottom: `1px solid ${T.border}` }}>
                  <span style={{ color: '#C44', fontSize: '13px', flexShrink: 0, paddingTop: '4px' }}>✗</span>
                  <span style={{ fontSize: '16px', lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: T.inkLight, marginBottom: '40px' }}>And if you're busy, it becomes another thing you never get around to doing.</p>
            <div style={{ borderLeft: `4px solid ${T.accent}`, paddingLeft: '28px' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 700, color: T.ink, lineHeight: 1.2 }}>
                That's exactly why we built this.
              </h3>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OFFER INTRO ───────────────────────────────── */}
      <section style={{ backgroundColor: T.cream, padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.accent, marginBottom: '28px' }}>The Done-For-You Model</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '48px' }}>
              We build the digital product business.<br />You provide the capital.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ fontSize: '18px', lineHeight: 1.9, color: T.inkLight, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p>You don't need to become an ebook writer.</p>
              <p>You don't need to become a designer.</p>
              <p>You don't need to become a Meta Ads expert.</p>
              <p>You don't need to spend months learning digital marketing.</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '22px', color: T.ink, lineHeight: 1.4, margin: '16px 0' }}>We handle the execution. You provide the capital. We build the system.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5-STEP SYSTEM ─────────────────────────────── */}
      <section id="how-it-works" style={{ padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.accent, marginBottom: '16px' }}>The System</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '80px', maxWidth: '600px' }}>
              Five steps. Market to sales.
            </h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {STEPS.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '32px', padding: '52px 0', borderBottom: `1px solid ${T.border}`, alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, color: 'rgba(0,0,0,0.06)', lineHeight: 1 }}>{s.n}</div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.accent, marginBottom: '12px' }}>{s.title}</p>
                    <p style={{ fontSize: '18px', lineHeight: 1.75, color: T.inkLight, margin: 0, maxWidth: '560px' }}>{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div style={{ paddingTop: '72px', borderTop: 'none' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: '8px' }}>From market research to sales.</h3>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 600, color: T.inkLight }}>We handle the heavy lifting.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ───────────────────────────── */}
      <section id="included" style={{ backgroundColor: T.cream, padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.accent, marginBottom: '16px' }}>What's Included</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '72px' }}>Everything you need to launch.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: T.border }} className="dfy-included-grid">
            {INCLUDED.map((item, i) => (
              <Reveal key={i} delay={i * 40}>
                <div style={{ backgroundColor: T.bg, padding: '36px 28px' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.accent, marginBottom: '12px' }}>{item.label}</p>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: T.inkLight, margin: 0 }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOU DON'T HAVE TO ─────────────────────────── */}
      <section style={{ padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="dfy-split-grid">
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: T.inkLight }}>
              You don't have to...
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Research the market', 'Figure out what to sell', 'Write the ebook', 'Design the ebook', 'Set up Selar', 'Write sales copy', 'Create ads', 'Learn Meta Ads', 'Manage campaigns'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'center', paddingBottom: '16px', borderBottom: `1px solid ${T.border}` }}>
                  <div style={{ width: '22px', height: '22px', backgroundColor: T.accent, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontSize: '17px', color: T.ink }}>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 2rem 0' }}>
          <Rule />
          <Reveal>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 700, letterSpacing: '-0.02em', paddingTop: '48px', color: T.ink }}>
              We do it for you.
            </h3>
          </Reveal>
        </div>
      </section>

      {/* ── CLIENT ROLE ───────────────────────────────── */}
      <section style={{ backgroundColor: T.cream, padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '72px' }}>Your part is simple.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: T.border, marginBottom: '64px' }} className="dfy-role-grid">
            {[
              { n: '01', t: 'Provide the Capital' },
              { n: '02', t: 'Approve the Direction' },
              { n: '03', t: 'Fund the Advertising' },
            ].map((r, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ backgroundColor: T.bg, padding: '48px 32px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '56px', fontWeight: 700, color: 'rgba(0,0,0,0.05)', lineHeight: 1, marginBottom: '16px' }}>{r.n}</div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.ink, margin: 0 }}>{r.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, color: T.accent }}>We handle the rest.</h3>
          </Reveal>
        </div>
      </section>

      {/* ── PROOF ─────────────────────────────────────── */}
      <section id="proof" style={{ padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.accent, marginBottom: '24px' }}>Track Record</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4.5vw, 54px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>We've done this before.</h2>
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: T.inkLight, marginBottom: '64px' }}>You're not paying us to figure out whether digital products can sell. We've already built and tested this model repeatedly.</p>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: T.border, marginBottom: '64px' }} className="dfy-stat-grid">
              {[
                { n: '53+', l: 'People Helped' },
                { n: '100+', l: 'Copies Sold Within First Month' },
              ].map((s, i) => (
                <div key={i} style={{ backgroundColor: T.bg, padding: '48px 36px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700, color: T.ink, lineHeight: 1, marginBottom: '12px' }}>{s.n}</div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.inkLight, margin: 0 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '17px', lineHeight: 1.8, color: T.inkLight, marginBottom: '48px' }}>
              {["We've researched the markets.", "We've created the products.", "We've built the offers.", "We've run the ads.", "We've studied what converts."].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: T.accent, fontWeight: 700, flexShrink: 0, paddingTop: '3px' }}>—</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, color: T.ink }}>Now we're building the system for you.</h3>
          </Reveal>
        </div>
      </section>

      {/* ── GUARANTEE ─────────────────────────────────── */}
      <section style={{ backgroundColor: T.cream, padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              But what if the product doesn't sell?
            </h2>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(18px, 2.5vw, 28px)', fontWeight: 600, color: T.inkLight, marginBottom: '48px' }}>
              That's exactly why you're not building it yourself.
            </h3>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ fontSize: '17px', lineHeight: 1.85, color: T.inkLight, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '64px' }}>
              <p>We've already helped <strong style={{ color: T.ink }}>53+ people</strong> build and sell digital products, with <strong style={{ color: T.ink }}>100+ ebook copies sold within their first month</strong> across our previous campaigns.</p>
              <p>So we're not coming into this trying to figure out what might work.</p>
              <p>We've done this before. Repeatedly.</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '20px', color: T.ink }}>Now we're packaging that system for you.</p>
              <p>You are not paying us simply to write an ebook. You are paying us to build the business around it.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ border: `2px solid ${T.accent}`, padding: '48px', backgroundColor: T.bg }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.accent, marginBottom: '20px' }}>Our Guarantee</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 700, lineHeight: 1.2, marginBottom: '20px' }}>If we don't deliver what we promised within the agreed scope, we make it right.</h3>
              <p style={{ fontSize: '15px', color: T.inkLight, lineHeight: 1.8, margin: 0 }}>Exact guarantee terms are agreed upon at onboarding.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THIS IS A BUSINESS ────────────────────────── */}
      <section style={{ padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.inkLight, marginBottom: '24px' }}>What You're Actually Buying</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '20px', color: T.inkLight }}>This is not an ebook.</h2>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '48px', color: T.ink }}>It's a digital product business.</h2>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ fontSize: '18px', lineHeight: 1.85, color: T.inkLight, display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              <p>The ebook is the product. But the business is much bigger than the ebook.</p>
              <p>We build the entire system around it:</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap', marginBottom: '48px' }}>
              {['Market', 'Product', 'Store', 'Traffic', 'Customers', 'Sales'].map((n, i, arr) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: i === arr.length - 1 ? T.accent : T.ink, border: `1px solid ${i === arr.length - 1 ? T.accent : T.border}`, padding: '10px 20px', backgroundColor: i === arr.length - 1 ? `${T.accent}15` : 'transparent' }}>{n}</span>
                  {i < arr.length - 1 && <span style={{ color: T.inkLight, fontSize: '14px', padding: '0 4px' }}>→</span>}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: T.inkLight }}>This is the reason the offer costs <strong style={{ color: T.ink }}>₦100,000</strong>. You're not hiring someone to type a PDF. You're getting the infrastructure required to take a digital product from idea to market.</p>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────── */}
      <section id="get-started" style={{ backgroundColor: T.cream, padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '64px' }}>Let's build your business.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: T.border, marginBottom: '56px' }} className="dfy-price-grid">
            <Reveal>
              <div style={{ backgroundColor: T.bg, padding: '48px 36px' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.accent, marginBottom: '16px' }}>Setup & Implementation</p>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700, color: T.ink, lineHeight: 1, marginBottom: '8px' }}>₦100,000</div>
                <p style={{ fontSize: '13px', color: T.inkLight, marginBottom: '36px' }}>One-time setup fee</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Market research', 'Product creation', 'Product design', 'Selar setup', 'Sales copy', 'Ad creatives', 'Meta Ads setup', 'Campaign management', 'Initial optimization'].map((t, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: T.accent, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '15px', color: T.inkLight }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div style={{ backgroundColor: T.charcoal, padding: '48px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>Advertising Capital</p>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: '8px' }}>Separate</div>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Recommended starting budget</p>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>₦50,000–₦100,000+</div>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>Your advertising budget is separate from the ₦100,000 service fee and is used to acquire customers for your business.</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
              <CTABtn text="Get Started" to="/dfy/checkout" large />
              <p style={{ fontSize: '13px', color: T.inkLight, margin: 0 }}>One-time setup fee. Advertising budget separate.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BEFORE / AFTER ────────────────────────────── */}
      <section style={{ padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '72px' }}>The transformation.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: T.border }} className="dfy-ba-grid">
            <Reveal>
              <div style={{ backgroundColor: T.bg, padding: '48px 36px' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.inkLight, marginBottom: '32px' }}>Before</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    "I have money to invest, but I don't know what digital product to create.",
                    "I don't have time to learn everything.",
                    "I don't know how to run Meta Ads.",
                    "I don't know how to sell an ebook.",
                  ].map((t, i) => (
                    <div key={i} style={{ borderLeft: `2px solid ${T.border}`, paddingLeft: '20px' }}>
                      <p style={{ fontSize: '15px', lineHeight: 1.7, color: T.inkLight, margin: 0, fontStyle: 'italic' }}>"{t}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div style={{ backgroundColor: T.charcoal, padding: '48px 36px' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '32px' }}>After</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    'A digital product has been researched and created.',
                    'My product is published on Selar.',
                    'My sales infrastructure is ready.',
                    'My advertising system is running.',
                    'I have a business system instead of just an idea.',
                  ].map((t, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ color: T.accent, fontWeight: 700, flexShrink: 0, paddingTop: '2px' }}>✓</span>
                      <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#fff', margin: 0 }}>{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────── */}
      <section style={{ backgroundColor: T.cream, padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: '56px' }}>
              This was built for people who have the capital — but not the time.
            </h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '64px' }}>
            {[
              'You have at least ₦100,000 available for the setup.',
              'You can fund advertising separately.',
              'You want another digital income stream.',
              'You don\'t have time to learn everything yourself.',
              'You prefer paying an expert to execute.',
              'You want a business that can be operated online.',
            ].map((t, i) => (
              <Reveal key={i} delay={i * 40}>
                <div style={{ display: 'flex', gap: '20px', padding: '22px 0', borderBottom: `1px solid ${T.border}`, alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: T.accent, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700 }}>✓</span>
                  </div>
                  <p style={{ fontSize: '17px', lineHeight: 1.7, margin: 0 }}>{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Rule />
          <Reveal delay={80}>
            <div style={{ paddingTop: '56px' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.2, marginBottom: '20px', color: T.inkLight }}>
                If you want to build everything yourself, this isn't for you.
              </h3>
              <p style={{ fontSize: '17px', lineHeight: 1.8, color: T.inkLight, marginBottom: '24px' }}>This service is for people who want the execution handled for them. If you'd rather have an experienced team build the system for you:</p>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: T.accent }}>You're in the right place.</h4>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────── */}
      <section style={{ padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.accent, marginBottom: '16px' }}>The Process</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '80px' }}>From payment to launch.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: T.border }} className="dfy-timeline-grid">
            {TIMELINE.map((t, i) => (
              <Reveal key={i} delay={i * 50}>
                <div style={{ backgroundColor: i % 2 === 0 ? T.bg : T.cream, padding: '40px 28px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '48px', fontWeight: 700, color: 'rgba(0,0,0,0.05)', lineHeight: 1, marginBottom: '20px' }}>{t.n}</div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.accent, marginBottom: '10px' }}>{t.step}</p>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: T.inkLight, margin: 0 }}>{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NUMBERS ───────────────────────────────────── */}
      <section style={{ backgroundColor: T.charcoal, padding: '120px 0', borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '72px' }}>The numbers tell the story.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', marginBottom: '72px' }} className="dfy-stat-grid">
            {[{ n: '53+', l: 'People Helped' }, { n: '100+', l: 'Copies Sold Within First Month' }].map((s, i) => (
              <div key={i} style={{ backgroundColor: T.charcoal, padding: '52px 36px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(56px, 8vw, 96px)', fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: '12px' }}>{s.n}</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{s.l}</p>
              </div>
            ))}
          </div>
          {/* Case study placeholders */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} className="dfy-cases-grid">
            {['01', '02', '03'].map((n, i) => (
              <div key={i} style={{ backgroundColor: '#222220', padding: '36px 28px' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '20px' }}>Case Study {n}</p>
                {['Client', 'Product', 'Ad Spend', 'Copies Sold', 'Revenue'].map((f, j) => (
                  <div key={j} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{f}</span>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.15)' }}>Coming soon</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section id="faq" style={{ padding: '120px 0', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.accent, marginBottom: '16px' }}>FAQ</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '56px' }}>Common questions.</h2>
          </Reveal>
          <div style={{ borderTop: `1px solid ${T.border}` }}>
            {FAQS.map((f, i) => (
              <Reveal key={i} delay={i * 30}>
                <FAQItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────── */}
      <section style={{ backgroundColor: T.charcoal, padding: '140px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '32px' }}>Done-For-You Digital Product Business</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', marginBottom: '16px' }}>
              You have the capital.
            </h2>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: T.accent, marginBottom: '40px' }}>
              Now build something with it.
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '56px', maxWidth: '520px', margin: '0 auto 56px' }}>
              You don't need another business idea. You need a system — and you don't have to build it yourself.
            </p>
            <CTABtn text="Build My Digital Product Business" to="/dfy/checkout" large />
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginTop: '16px' }}>₦100,000 setup fee + advertising budget</p>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer style={{ backgroundColor: '#111110', padding: '32px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.4)' }}>QuickLearn<span style={{ color: T.accent }}>+</span></span>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.2)', margin: 0 }}>© {new Date().getFullYear()} Quick Learn Plus · Done-For-You Digital Product Business</p>
        </div>
      </footer>

      {/* ── MOBILE STICKY ─────────────────────────────── */}
      <div className="dfy-mobile-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
        padding: '12px 16px', backgroundColor: T.charcoal,
        borderTop: `1px solid ${T.accent}`,
        display: 'none',
        transform: stickyShow ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <Link to="/dfy/checkout" style={{
          display: 'block', width: '100%', textAlign: 'center',
          backgroundColor: T.accent, color: '#fff',
          fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '16px', textDecoration: 'none', borderRadius: '2px',
        }}>
          Build My Business →
        </Link>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap');
        @media (max-width: 900px) {
          .dfy-hero-grid { grid-template-columns: 1fr !important; }
          .dfy-split-grid { grid-template-columns: 1fr !important; }
          .dfy-included-grid { grid-template-columns: 1fr 1fr !important; }
          .dfy-timeline-grid { grid-template-columns: 1fr 1fr !important; }
          .dfy-cases-grid { grid-template-columns: 1fr !important; }
          .dfy-ba-grid { grid-template-columns: 1fr !important; }
          .dfy-price-grid { grid-template-columns: 1fr !important; }
          .dfy-role-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .dfy-nav-links { display: none !important; }
          .dfy-hamburger { display: block !important; }
          .dfy-proof-grid { grid-template-columns: 1fr !important; }
          .dfy-stat-grid { grid-template-columns: 1fr !important; }
          .dfy-included-grid { grid-template-columns: 1fr !important; }
          .dfy-timeline-grid { grid-template-columns: 1fr !important; }
          .dfy-problem-grid { grid-template-columns: 1fr !important; }
          .dfy-mobile-sticky { display: block !important; }
        }
      `}</style>
    </div>
  )
}
