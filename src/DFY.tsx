import { useEffect, useRef, useState } from 'react'

/* ─── Design tokens ─────────────────────────────────── */
const C = {
  bg:          '#FFFFFF',
  surface:     '#F7F5F0',
  ink:         '#111111',
  sub:         '#555550',
  muted:       '#888882',
  border:      '#E2DDD5',
  accent:      '#C8A96E',
  dark:        '#0F0F0D',
  btnBg:       '#111111',
  btnTxt:      '#FFFFFF',
  sectionAlt:  '#F7F5F0',
  sectionDark: '#0F0F0D',
}

const WA_NUMBER = '2348035062181'
const WA_MSG    = encodeURIComponent("Hi, I just went through the Digital Product Business offer and I'm interested in getting started.")
const WA_URL    = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`
const WA_BOOK_MSG = encodeURIComponent("Hi, I already have a book and I'm interested in the marketing management service.")
const WA_BOOK_URL = `https://wa.me/${WA_NUMBER}?text=${WA_BOOK_MSG}`

/* ─── Helpers ───────────────────────────────────────── */
function useInView(threshold = 0.08) {
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
      transform: vis ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

function Rule() {
  return <div style={{ height: '1px', backgroundColor: C.border, margin: '0' }} />
}

function Label({ text, light }: { text: string; light?: boolean }) {
  return (
    <p style={{
      fontSize: '10px', fontWeight: 800, letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: light ? 'rgba(255,255,255,0.4)' : C.accent,
      marginBottom: '20px', margin: '0 0 20px',
    }}>
      {text}
    </p>
  )
}

/* CTA buttons */
function WaBtn({ text, large, gold }: { text: string; large?: boolean; gold?: boolean }) {
  const bg = gold ? C.accent : C.btnBg
  const color = gold ? C.dark : C.btnTxt
  return (
    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: bg, color,
        fontFamily: 'inherit', fontSize: large ? '15px' : '13px',
        fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
        padding: large ? '20px 48px' : '16px 36px',
        textDecoration: 'none', transition: 'opacity 0.15s',
        width: '100%', maxWidth: large ? '420px' : '360px',
        boxSizing: 'border-box' as const,
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      {text} <span style={{ fontSize: large ? '20px' : '16px', marginLeft: '8px', lineHeight: 1 }}>→</span>
    </a>
  )
}

function WaBookBtn({ text, large }: { text: string; large?: boolean }) {
  return (
    <a href={WA_BOOK_URL} target="_blank" rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: C.btnBg, color: C.btnTxt,
        fontFamily: 'inherit', fontSize: large ? '15px' : '13px',
        fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
        padding: large ? '20px 48px' : '16px 36px',
        textDecoration: 'none', transition: 'opacity 0.15s',
        width: '100%', maxWidth: large ? '420px' : '360px',
        boxSizing: 'border-box' as const,
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      {text} <span style={{ fontSize: large ? '20px' : '16px', marginLeft: '8px', lineHeight: 1 }}>→</span>
    </a>
  )
}

/* Shared section wrapper */
function Section({ children, dark, alt, py = '100px' }: {
  children: React.ReactNode; dark?: boolean; alt?: boolean; py?: string
}) {
  return (
    <section style={{
      backgroundColor: dark ? C.sectionDark : alt ? C.sectionAlt : C.bg,
      padding: `${py} 24px`,
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  )
}

/* Checklist row */
function Check({ text, cross, light }: { text: string; cross?: boolean; light?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 0', borderBottom: `1px solid ${light ? 'rgba(255,255,255,0.07)' : C.border}` }}>
      <span style={{ color: cross ? '#CC4444' : C.accent, fontWeight: 900, flexShrink: 0, paddingTop: '2px', fontSize: '15px' }}>
        {cross ? '✗' : '✓'}
      </span>
      <span style={{ fontSize: '16px', lineHeight: 1.65, color: light ? 'rgba(255,255,255,0.7)' : C.sub }}>{text}</span>
    </div>
  )
}

/* Big numbered step */
function Step({ n, title, body, light }: { n: string; title: string; body: string; light?: boolean }) {
  return (
    <Reveal>
      <div style={{
        display: 'grid', gridTemplateColumns: '60px 1fr', gap: '20px',
        padding: '40px 0', borderBottom: `1px solid ${light ? 'rgba(255,255,255,0.07)' : C.border}`,
        alignItems: 'flex-start',
      }}>
        <div style={{ fontSize: 'clamp(40px, 6vw, 56px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em', color: light ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)' }}>{n}</div>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.accent, marginBottom: '8px' }}>{title}</p>
          <p style={{ fontSize: '16px', lineHeight: 1.75, color: light ? 'rgba(255,255,255,0.6)' : C.sub, margin: 0 }}>{body}</p>
        </div>
      </div>
    </Reveal>
  )
}

/* Price card */
function PriceCard({ label, amount, items, cta, book }: {
  label: string; amount: string; items: string[]; cta: string; book?: boolean
}) {
  return (
    <div style={{ border: `1px solid ${C.border}`, borderTop: `4px solid ${C.accent}` }}>
      <div style={{ padding: '32px 28px', borderBottom: `1px solid ${C.border}` }}>
        <Label text={label} />
        <div style={{ fontSize: 'clamp(40px, 8vw, 64px)', fontWeight: 900, letterSpacing: '-0.04em', color: C.dark, lineHeight: 1, marginBottom: '4px' }}>{amount}</div>
      </div>
      <div style={{ padding: '28px' }}>
        {items.map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
            <span style={{ color: C.accent, fontWeight: 900, flexShrink: 0, paddingTop: '2px' }}>✓</span>
            <span style={{ fontSize: '14px', color: C.sub, lineHeight: 1.5 }}>{t}</span>
          </div>
        ))}
        <div style={{ paddingTop: '28px' }}>
          {book ? <WaBookBtn text={cta} large /> : <WaBtn text={cta} large />}
        </div>
      </div>
    </div>
  )
}

/* FAQ accordion */
const FAQ_ITEMS = [
  { q: "What if I don't know what product to create?", a: "That's part of what you're paying us for. We'll research the market and identify a product opportunity based on problems people are already looking for solutions to. You don't have to come to us with a finished idea." },
  { q: "What if I already have an idea?", a: "We'll assess it. If it makes sense for the market we're targeting, we can build around it. If we believe there is a better direction, we'll discuss it with you before moving forward." },
  { q: "Do I have to give you access to my Selar account?", a: "No. You create and control your own Selar account. We'll guide you through uploading and setting up your product. Once it's live, you send us the product link — that's what we use for advertising." },
  { q: "Who receives the money when someone buys?", a: "You do. Customers purchase through your selling page and the revenue goes directly to your Selar account. We don't collect your sales revenue and pay you later. Your money stays with your business." },
  { q: "Do I have to reinvest all my sales revenue?", a: "No. You decide what to do with your revenue. If you want to grow faster, you can reinvest part of it into advertising. If you want to use some of it elsewhere, that's your decision." },
  { q: "What happens when the initial ₦20,000 ad budget finishes?", a: "The ₦20,000 is simply the initial advertising budget included in your ₦100,000 payment. Once it is used, additional advertising requires additional funding from you. If sales have started coming in, you may choose to reinvest part of your revenue." },
  { q: "What happens after 30 days?", a: "You can continue with us for advertising management at ₦50,000/month, take over the advertising yourself, or stop advertising for the time being. There is no requirement to remain with us indefinitely." },
  { q: "What if I want to launch another product?", a: "You can. If you want us to create another digital product, the setup and creation fee is ₦80,000 per new product. Your advertising budget for the new product is separate." },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}` }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', background: 'none', border: 'none',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '22px 0', gap: '16px', cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{ fontSize: '15px', fontWeight: 700, color: C.dark, lineHeight: 1.4 }}>{q}</span>
        <span style={{ fontSize: '22px', fontWeight: 300, color: C.accent, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', lineHeight: 1 }}>+</span>
      </button>
      {open && <p style={{ fontSize: '15px', lineHeight: 1.8, color: C.sub, paddingBottom: '22px', margin: 0 }}>{a}</p>}
    </div>
  )
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function DFY() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 700)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ backgroundColor: C.bg, color: C.ink, fontFamily: "'Inter','DM Sans',system-ui,sans-serif", lineHeight: 1.6 }}>

      {/* ── NAV ── */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: C.bg, borderBottom: `1px solid ${C.border}`, height: '60px', display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '15px', fontWeight: 900, letterSpacing: '-0.03em', color: C.dark }}>
          THE DIGITAL<span style={{ color: C.accent }}>.</span>
        </span>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.btnTxt, textDecoration: 'none', backgroundColor: C.btnBg, padding: '10px 20px', transition: 'opacity 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Get Started →
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: C.dark, padding: '100px 24px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <Label text="The Digital Product Business" light />
            <h1 style={{ fontSize: 'clamp(36px, 8vw, 72px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', marginBottom: '16px' }}>
              YOU HAVE ₦100,000.
            </h1>
            <h1 style={{ fontSize: 'clamp(28px, 6vw, 56px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: C.accent, marginBottom: '32px' }}>
              BUT DON'T KNOW WHAT BUSINESS TO START?
            </h1>
            <p style={{ fontSize: 'clamp(17px, 2.5vw, 21px)', fontWeight: 700, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, maxWidth: '600px', margin: '0 auto 32px' }}>
              We'll help you turn that ₦100,000 into a digital product business — without spending months figuring everything out yourself.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ maxWidth: '520px', margin: '0 auto 40px', textAlign: 'left' }}>
              {[
                "You don't need to know how to write an ebook.",
                "You don't need to know what product to create.",
                "You don't need to learn Facebook Ads.",
                "You don't need to figure out Selar by yourself.",
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ color: '#CC5555', fontWeight: 900, flexShrink: 0, paddingTop: '2px' }}>✗</span>
                  <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)' }}>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ fontSize: '17px', fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: '12px' }}>
              We'll handle the research, product creation, setup and launch for you.
            </p>
            <p style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff', marginBottom: '40px' }}>
              AND MOST IMPORTANTLY: YOU OWN THE BUSINESS.
            </p>
            <WaBtn text="Get My Business Started" large gold />
          </Reveal>
        </div>
      </section>

      {/* ── PROOF BAR ── */}
      <section style={{ backgroundColor: C.accent }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="dfy2-proof-bar">
          {[
            { n: '53+', l: 'People Helped' },
            { n: '100+', l: 'Copies Sold Per Client Within First Month' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '36px 28px', textAlign: 'center', borderRight: i === 0 ? `1px solid rgba(0,0,0,0.1)` : 'none' }}>
              <div style={{ fontSize: 'clamp(36px, 6vw, 52px)', fontWeight: 900, letterSpacing: '-0.03em', color: C.dark, lineHeight: 1, marginBottom: '6px' }}>{s.n}</div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MONEY CLARITY ── */}
      <Section alt py="100px">
        <Reveal>
          <Label text="First, let's make one thing clear" />
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: C.dark, marginBottom: '16px' }}>
            YOU'RE NOT GIVING US ₦100,000 TO INVEST FOR YOU.
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: C.sub, marginBottom: '48px' }}>
            You're paying us to <strong style={{ color: C.ink }}>build and launch a digital product business for you.</strong> Here's exactly how your ₦100,000 is used:
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: C.border, marginBottom: '40px' }} className="dfy2-offer-grid">
          {[
            { amount: '₦80,000', label: 'Setup & Implementation', body: 'This covers the work required to research, create, package and launch your digital product.' },
            { amount: '₦20,000', label: 'Initial Advertising Budget', body: "We put this into your first advertising campaign so you don't have to pay the setup fee and then immediately look for additional money just to launch your ads." },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{ backgroundColor: i === 0 ? C.bg : C.dark, padding: '36px 28px', height: '100%', boxSizing: 'border-box' }}>
                <div style={{ fontSize: 'clamp(30px, 5vw, 44px)', fontWeight: 900, letterSpacing: '-0.03em', color: i === 0 ? C.dark : C.accent, lineHeight: 1, marginBottom: '10px' }}>{item.amount}</div>
                <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: i === 0 ? C.accent : 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>{item.label}</p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: i === 0 ? C.sub : 'rgba(255,255,255,0.6)', margin: 0 }}>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <div style={{ backgroundColor: C.dark, padding: '28px 32px', marginBottom: '40px' }}>
            <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 900, letterSpacing: '-0.01em', color: '#fff', margin: 0 }}>
              TOTAL TO GET STARTED: <span style={{ color: C.accent }}>₦100,000</span>
            </p>
          </div>
          <div style={{ fontSize: '17px', lineHeight: 1.85, color: C.sub, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p>There is no mystery around where the money goes.</p>
            <p><strong style={{ color: C.ink }}>We provide the expertise and execution.</strong></p>
            <p><strong style={{ color: C.ink }}>You own the business.</strong></p>
          </div>
        </Reveal>
      </Section>

      <Rule />

      {/* ── WHAT WE BUILD ── */}
      <Section py="100px">
        <Reveal>
          <Label text="What We're Building" />
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: C.dark, marginBottom: '20px' }}>
            WHAT EXACTLY ARE WE BUILDING FOR YOU?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.sub, marginBottom: '56px' }}>
            We're not simply creating an ebook. We're building the basic system needed to turn a digital product into a business.
          </p>
        </Reveal>
        <Step n="01" title="Find the Opportunity" body="We research markets, problems, audiences and demand to identify a digital product opportunity worth pursuing." />
        <Step n="02" title="Create the Product" body="We research, write, structure and design your digital product." />
        <Step n="03" title="Package the Offer" body="We create the product positioning, sales description and marketing materials needed to present the product properly." />
        <Step n="04" title="Set Up Your Selling System" body="You open your own Selar account. We guide you through uploading and setting up your product. You remain in control of your account. Once your product is live, you give us the product link." />
        <Step n="05" title="Create Your Advertising" body="We create the marketing materials and advertising campaign designed to send potential customers to your product." />
        <Step n="06" title="Launch and Manage" body="We launch the campaign and manage the advertising so you don't have to learn Meta Ads from scratch." />
      </Section>

      {/* ── 30-DAY TARGET ── */}
      <section style={{ backgroundColor: C.dark, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Our First 30-Day Target" light />
            <h2 style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', color: '#fff', marginBottom: '8px' }}>
              100 SALES.
            </h2>
            <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: 700, color: C.accent, marginBottom: '40px', letterSpacing: '-0.01em' }}>
              THE GOAL OF THE INITIAL 30-DAY CAMPAIGN IS SIMPLE: HELP YOU GET YOUR FIRST 100 SALES.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ fontSize: '17px', lineHeight: 1.85, color: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              <p>We've used this system to help clients sell digital products, and our target is to help you reach <strong style={{ color: '#fff' }}>100 sales within your first 30 days.</strong></p>
              <p>This isn't about simply creating an ebook and leaving you to figure out how to sell it.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '48px' }}>
              {['We build the product.', 'We create the marketing.', 'We launch the ads.', 'We monitor the campaign.', 'We optimize based on what the data is telling us.'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ color: C.accent, fontWeight: 900, flexShrink: 0, paddingTop: '2px' }}>—</span>
                  <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ borderLeft: `4px solid ${C.accent}`, paddingLeft: '24px' }}>
              <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: 800, letterSpacing: '-0.01em', color: '#fff', lineHeight: 1.4, margin: 0 }}>
                THE GOAL: GET THE PRODUCT IN FRONT OF THE RIGHT PEOPLE AND WORK TOWARD YOUR FIRST 100 SALES.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── REVENUE POTENTIAL ── */}
      <Section alt py="100px">
        <Reveal>
          <Label text="The Numbers" />
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: C.dark, marginBottom: '20px' }}>
            LET'S TALK ABOUT WHAT THIS COULD LOOK LIKE FOR YOU.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.sub, marginBottom: '48px' }}>
            We're not going to promise you millions. But we are going to show you what's realistic — based on what's already happened with people we've worked with.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <div style={{ border: `1px solid ${C.border}`, marginBottom: '32px' }}>
            <div style={{ padding: '18px 28px', borderBottom: `1px solid ${C.border}`, backgroundColor: `${C.accent}18` }}>
              <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent, margin: 0 }}>A Simple Example</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', backgroundColor: C.border }} className="dfy2-revenue-grid">
              {[
                { label: 'Ebook Price', value: '₦5,000' },
                { label: 'Copies Sold', value: '100' },
                { label: 'Revenue', value: '₦500,000' },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: C.bg, padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: 900, letterSpacing: '-0.03em', color: i === 2 ? C.accent : C.dark, lineHeight: 1, marginBottom: '8px' }}>{item.value}</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted }}>{item.label}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '20px 28px' }}>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: C.sub, margin: 0 }}>
                100 copies at ₦5,000 each = <strong style={{ color: C.ink }}>₦500,000 in revenue</strong> — in a single month. That's the kind of result our system is designed to produce.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ border: `1px solid ${C.border}` }}>
            <div style={{ padding: '18px 28px', borderBottom: `1px solid ${C.border}` }}>
              <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent, margin: 0 }}>How Your ₦100,000 Works</p>
            </div>
            <div style={{ padding: '0 28px' }}>
              {[
                { n: '01', t: 'We build everything', b: 'Market research, product creation, design, Selar setup guidance, sales copy and ad creatives — all covered.' },
                { n: '02', t: 'We launch your ads', b: 'Your ₦100,000 includes ₦20,000 for the first phase of your advertising campaign. We run the ads and start driving customers to your product.' },
                { n: '03', t: 'Revenue starts coming in', b: 'Within those first 30 days, your product begins generating sales. Real money — from real customers.' },
                { n: '04', t: 'You reinvest and scale', b: "You take the revenue your business has generated and reinvest what you choose back into advertising. The business starts funding itself." },
              ].map((s, i, arr) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '16px', padding: '24px 0', borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                  <div style={{ fontSize: '36px', fontWeight: 900, color: 'rgba(0,0,0,0.06)', lineHeight: 1, letterSpacing: '-0.03em' }}>{s.n}</div>
                  <div>
                    <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.accent, marginBottom: '6px' }}>{s.t}</p>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: C.sub, margin: 0 }}>{s.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Rule />

      {/* ── YOU OWN IT ── */}
      <Section py="100px">
        <Reveal>
          <Label text="Ownership" />
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 46px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: C.dark, marginBottom: '12px' }}>
            THIS IS YOUR BUSINESS.
          </h2>
          <h3 style={{ fontSize: 'clamp(20px, 4vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', color: C.accent, marginBottom: '40px' }}>YOU OWN IT.</h3>
        </Reveal>
        <Reveal delay={60}>
          <div style={{ fontSize: '17px', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '40px' }}>
            {[
              'Your Selar account belongs to you.',
              'You create and control your own account.',
              'You upload your own product.',
              'You receive your own sales.',
              'You control your own revenue.',
              "We don't need access to your Selar account to do our job.",
              'You simply give us your product link so we can promote it.',
            ].map((t, i) => (
              <div key={i} style={{ padding: '14px 0', borderBottom: `1px solid ${C.border}`, fontSize: '16px', lineHeight: 1.65, color: C.sub }}>
                {t}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ backgroundColor: C.sectionAlt, padding: '28px 32px', marginBottom: '40px' }}>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: C.sub, margin: 0 }}>
              Once we create the digital product for you, it is delivered to you. You upload it to your own Selar account. <strong style={{ color: C.ink }}>You are not dependent on us to access your product or receive your money.</strong>
            </p>
          </div>
          <div style={{ backgroundColor: C.sectionAlt, padding: '28px 32px' }}>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: C.sub, margin: 0 }}>
              When customers purchase your product, the sale goes through your own Selar account. We don't collect your sales revenue and then send it to you. <strong style={{ color: C.ink }}>YOUR BUSINESS GENERATES THE REVENUE. You control what happens to that revenue.</strong>
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── HOW WE MAKE MONEY ── */}
      <section style={{ backgroundColor: C.dark, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Transparency" light />
            <h2 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', marginBottom: '20px' }}>
              SO HOW DO WE MAKE MONEY?
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: '48px' }}>
              A fair question. We don't make money by taking control of your sales revenue.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '24px' }}>
              WE MAKE MONEY FROM THE SERVICES WE PROVIDE.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)', marginBottom: '48px' }} className="dfy2-offer-grid">
              {[
                { amount: '₦80,000', label: 'Setup & Implementation' },
                { amount: '₦20,000', label: 'Initial Ad Budget' },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: C.sectionDark, padding: '28px 24px' }}>
                  <div style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1, marginBottom: '8px' }}>{item.amount}</div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: 0 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
              After the first 30 days, if you want us to continue managing your advertising, our ongoing advertising management fee is:
            </p>
            <div style={{ border: `1px solid rgba(255,255,255,0.1)`, padding: '36px 28px', marginBottom: '32px' }}>
              <div style={{ fontSize: 'clamp(36px, 7vw, 60px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: '8px' }}>₦50,000<span style={{ fontSize: '0.4em', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>/MONTH</span></div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>That's our fee for managing your advertising. Your advertising budget is separate. You fund the advertising. We manage it for you.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── AFTER 30 DAYS ── */}
      <Section alt py="100px">
        <Reveal>
          <Label text="After 30 Days" />
          <h2 style={{ fontSize: 'clamp(24px, 4.5vw, 40px)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', color: C.dark, marginBottom: '20px' }}>
            WHAT HAPPENS AFTER THE FIRST 30 DAYS?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.sub, marginBottom: '40px' }}>
            The first 30 days are about getting your product into the market, launching the advertising and working toward your first 100 sales. At the end of the initial period, you have options.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', backgroundColor: C.border, marginBottom: '40px' }} className="dfy2-options-grid">
            {[
              { n: 'OPTION 1', t: 'Continue With Us', b: 'Continue with advertising management at ₦50,000/month.' },
              { n: 'OPTION 2', t: 'Take Over Yourself', b: 'Take over the advertising yourself.' },
              { n: 'OPTION 3', t: 'Pause Advertising', b: 'Stop advertising for the time being.' },
            ].map((s, i) => (
              <div key={i} style={{ backgroundColor: C.bg, padding: '28px 20px' }}>
                <p style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.accent, marginBottom: '10px' }}>{s.n}</p>
                <p style={{ fontSize: '14px', fontWeight: 700, color: C.ink, marginBottom: '8px' }}>{s.t}</p>
                <p style={{ fontSize: '14px', color: C.sub, lineHeight: 1.6, margin: 0 }}>{s.b}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.75, color: C.sub }}>
            <strong style={{ color: C.ink }}>There is no requirement to remain with us indefinitely.</strong> You don't automatically have to continue. You keep your product, your Selar account, your sales revenue and your business — no matter what you decide.
          </p>
        </Reveal>
      </Section>

      <Rule />

      {/* ── ADDITIONAL PRODUCTS ── */}
      <Section py="80px">
        <Reveal>
          <Label text="Want More?" />
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.02em', color: C.dark, marginBottom: '16px' }}>
            WANT TO ADD ANOTHER PRODUCT?
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.sub, marginBottom: '24px' }}>
            If your first product is doing well and you want to launch another, we'll build and set it up for:
          </p>
          <div style={{ display: 'inline-block', border: `1px solid ${C.border}`, padding: '24px 32px', marginBottom: '16px' }}>
            <div style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 900, letterSpacing: '-0.03em', color: C.dark, lineHeight: 1, marginBottom: '4px' }}>₦80,000</div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, margin: 0 }}>Per New Product</p>
          </div>
          <p style={{ fontSize: '15px', color: C.sub, lineHeight: 1.7 }}>Your advertising budget for the new product is separate. You can then choose to have us manage the advertising for the additional product as well.</p>
        </Reveal>
      </Section>

      {/* ── ALREADY HAVE A BOOK ── */}
      <section style={{ backgroundColor: C.dark, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Already Have a Book?" light />
            <h2 style={{ fontSize: 'clamp(24px, 4.5vw, 42px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '12px' }}>
              ALREADY HAVE A BOOK?
            </h2>
            <h3 style={{ fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: 700, color: C.accent, marginBottom: '32px' }}>
              YOU MAY NOT NEED THE ₦100,000 PACKAGE.
            </h3>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
              If you've already written a book or have a digital product, you can work with us purely for marketing. But first, we'll assess your product. We'll look at things like:
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', marginBottom: '40px' }} className="dfy2-offer-grid">
              {['Who the product is for', 'The problem it solves', 'The market', 'The offer', 'Its positioning', 'Its potential for online advertising'].map((t, i) => (
                <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: C.accent, fontWeight: 900, flexShrink: 0 }}>—</span>
                  <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)' }}>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>
              If we believe the product can be marketed effectively, we can help you take it to market. Your product remains yours. Your sales revenue remains yours. Our ₦50,000 is the fee for the marketing management service. Your advertising budget is separate.
            </p>
            <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '36px 28px', marginBottom: '36px' }}>
              <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.accent, marginBottom: '12px' }}>Marketing Management</p>
              <div style={{ fontSize: 'clamp(36px, 7vw, 60px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: '8px' }}>₦50,000<span style={{ fontSize: '0.4em', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}> FOR 30 DAYS</span></div>
            </div>
            <WaBookBtn text="Get My Book Marketed" large />
          </Reveal>
        </div>
      </section>

      {/* ── SIMPLE VERSION / OPTION CARDS ── */}
      <Section alt py="100px">
        <Reveal>
          <Label text="The Simple Version" />
          <h2 style={{ fontSize: 'clamp(24px, 4.5vw, 40px)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', color: C.dark, marginBottom: '48px' }}>
            HERE'S THE SIMPLE VERSION
          </h2>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <Reveal>
            <PriceCard
              label="Option 1: You Don't Have a Product Yet"
              amount="₦100,000"
              items={[
                '₦80,000 — Setup & Implementation',
                '₦20,000 — Initial Advertising Budget',
                'Market research',
                'Product research & creation',
                'Design',
                'Product packaging',
                'Sales description & marketing materials',
                'Selar setup guidance',
                'Ad setup & campaign launch',
                'First 30 days of advertising management',
                'Target: 100 sales within your first 30 days',
              ]}
              cta="Get My Business Started"
            />
          </Reveal>
          <Reveal delay={60}>
            <PriceCard
              label="Option 2: You Already Have a Book"
              amount="₦50,000 / 30 days"
              items={[
                'First, we assess your book and its marketability',
                'Marketing strategy',
                'Ad creatives',
                'Campaign setup & management',
                'Optimization',
                'You provide: the book, your selling link, and the advertising budget',
              ]}
              cta="Get My Book Marketed"
              book
            />
          </Reveal>
        </div>
      </Section>

      {/* ── WHAT YOU'RE REALLY BUYING ── */}
      <Section py="100px">
        <Reveal>
          <Label text="What You're Really Buying" />
          <h2 style={{ fontSize: 'clamp(24px, 4.5vw, 40px)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', color: C.dark, marginBottom: '20px' }}>
            YOU'RE NOT BUYING A PDF.
          </h2>
          <p style={{ fontSize: '18px', fontWeight: 700, color: C.accent, marginBottom: '32px' }}>
            YOU'RE BUYING EXPERTISE AND EXECUTION.
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.sub, marginBottom: '24px' }}>
            Instead of spending months trying to learn:
          </p>
        </Reveal>
        <Reveal delay={60}>
          <div style={{ marginBottom: '40px' }}>
            {['What should I sell?', 'How do I create the product?', 'How do I design it?', 'How do I put it on Selar?', 'How do I write the product description?', 'How do I create an advert?', 'How do I run Meta Ads?', 'How do I optimize the campaign?'].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 0', borderBottom: `1px solid ${C.border}` }}>
                <span style={{ color: '#CC4444', fontWeight: 900, flexShrink: 0, paddingTop: '2px' }}>✗</span>
                <span style={{ fontSize: '16px', color: C.sub }}>{t}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ borderLeft: `4px solid ${C.accent}`, paddingLeft: '24px' }}>
            <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: 800, letterSpacing: '-0.01em', color: C.dark, lineHeight: 1.4, margin: 0 }}>
              You have a team that handles the execution for you.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── FOR / NOT FOR ── */}
      <section style={{ backgroundColor: C.dark, padding: '100px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }} className="dfy2-offer-grid">
            <Reveal>
              <div style={{ backgroundColor: C.sectionDark, padding: '36px 28px' }}>
                <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.accent, marginBottom: '24px' }}>This Is For You If</p>
                {[
                  'You have at least ₦100,000 available to start.',
                  'You want to build an online business.',
                  "You don't want to spend months learning everything yourself.",
                  'You would rather have someone with experience handle the execution.',
                  "You're willing to fund the advertising needed to acquire customers.",
                  'You understand that building a business requires testing, learning and optimization.',
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: C.accent, fontWeight: 900, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div style={{ backgroundColor: '#1A1A18', padding: '36px 28px' }}>
                <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#CC5555', marginBottom: '24px' }}>This Is Not For You If</p>
                {[
                  "You're looking for someone to take your money and guarantee you a fixed return.",
                  'You want completely passive income with zero involvement.',
                  "You don't want to spend anything on advertising after the initial budget.",
                  'You expect every product to sell without testing or optimization.',
                  "You aren't willing to participate in important business decisions.",
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: '#CC5555', fontWeight: 900, flexShrink: 0 }}>✗</span>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TRANSPARENCY ── */}
      <Section alt py="100px">
        <Reveal>
          <Label text="Full Transparency" />
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', color: C.dark, marginBottom: '20px' }}>
            WE'RE NOT ASKING YOU TO BLINDLY TRUST US.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: C.sub, marginBottom: '32px' }}>You should know exactly:</p>
        </Reveal>
        <Reveal delay={60}>
          <div style={{ marginBottom: '40px' }}>
            {[
              'What you\'re paying for.',
              'Where your money goes.',
              'Who owns the product.',
              'Who receives the sales revenue.',
              'How we make our money.',
              'What happens after 30 days.',
              'And how you can stop the service.',
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 0', borderBottom: `1px solid ${C.border}` }}>
                <span style={{ color: C.accent, fontWeight: 900, flexShrink: 0 }}>—</span>
                <span style={{ fontSize: '16px', color: C.sub }}>{t}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: C.sub }}>That's why we've laid the model out clearly.</p>
        </Reveal>
      </Section>

      {/* ── FAQ ── */}
      <Section py="100px">
        <Reveal>
          <Label text="FAQ" />
          <h2 style={{ fontSize: 'clamp(24px, 4.5vw, 40px)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.02em', color: C.dark, marginBottom: '48px' }}>
            COMMON QUESTIONS
          </h2>
        </Reveal>
        <div style={{ borderTop: `1px solid ${C.border}` }}>
          {FAQ_ITEMS.map((f, i) => (
            <Reveal key={i} delay={i * 25}>
              <AccordionItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <section style={{ backgroundColor: C.dark, padding: '120px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <Label text="Done-For-You Digital Product Business" light />
            <h2 style={{ fontSize: 'clamp(28px, 6vw, 60px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '16px' }}>
              <span style={{ color: '#fff' }}>FROM ₦100,000</span><br />
              <span style={{ color: C.accent }}>TO A DIGITAL PRODUCT BUSINESS.</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px', maxWidth: '420px', margin: '0 auto 40px' }}>
              {[
                'YOU PROVIDE THE CAPITAL.',
                'WE PROVIDE THE EXPERTISE AND EXECUTION.',
                'YOU OWN THE BUSINESS.',
                'YOU CONTROL THE REVENUE.',
                'OUR TARGET: 100 SALES IN YOUR FIRST 30 DAYS.',
              ].map((t, i) => (
                <p key={i} style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em', color: i === 4 ? C.accent : 'rgba(255,255,255,0.55)', margin: 0 }}>{t}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ border: `1px solid rgba(255,255,255,0.1)`, padding: '40px 28px', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
              <div style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 900, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1, marginBottom: '12px' }}>₦100,000</div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>₦80,000 — Setup & Implementation</p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>₦20,000 — Initial Advertising Budget</p>
              <p style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.accent, marginBottom: '0' }}>OUR TARGET: 100 SALES IN YOUR FIRST 30 DAYS</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <WaBtn text="Get Started" large gold />
              <Rule />
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '16px' }}>Have a book already?</p>
              <WaBookBtn text="Get My Book Marketed — ₦50,000 / 30 days" />
              <Rule />
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '16px' }}>
                Have questions? Speak with us on WhatsApp. We'll explain exactly how the process works, what is included and what you need to get started.
              </p>
              <WaBtn text="Talk To Us On WhatsApp" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#080806', padding: '28px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', margin: 0 }}>
          © {new Date().getFullYear()} Quick Learn Plus · The Digital Product Business
        </p>
      </footer>

      {/* ── MOBILE STICKY ── */}
      <div className="dfy2-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
        display: 'none', padding: '12px 16px',
        backgroundColor: C.dark, borderTop: `2px solid ${C.accent}`,
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
          Get Started →
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 600px) {
          .dfy2-proof-bar    { grid-template-columns: 1fr !important; }
          .dfy2-offer-grid   { grid-template-columns: 1fr !important; }
          .dfy2-revenue-grid { grid-template-columns: 1fr !important; }
          .dfy2-options-grid { grid-template-columns: 1fr !important; }
          .dfy2-sticky       { display: block !important; }
        }
      `}</style>
    </div>
  )
}
