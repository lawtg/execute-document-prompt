import { useEffect, useRef, useState } from 'react'
import consultantCover from './-like-a-consultant-cover.png'

/* ─── tokens ─────────────────────────────────────────── */
const T = {
  bg:     '#FAF8F3',
  cream:  '#F3F0E8',
  navy:   '#0D2137',
  gold:   '#B89B5E',
  ink:    '#1C1C1E',
  muted:  '#6B6760',
  border: '#D8D3C8',
  white:  '#FFFFFF',
  red:    '#C0392B',
}

const SELAR = 'https://selar.com/978m069577'

/* ─── helpers ─────────────────────────────────────────── */
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
      transform: vis ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── CTA Button ─────────────────────────────────────── */
function CTABtn({ text, id, full }: { text: string; id?: string; full?: boolean }) {
  return (
    <a
      href={SELAR}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: T.navy,
        color: T.white,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '14px',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '18px 40px',
        textDecoration: 'none',
        transition: 'opacity 0.15s',
        cursor: 'pointer',
        width: full ? '100%' : 'auto',
        maxWidth: full ? '480px' : 'none',
        boxSizing: 'border-box' as const,
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      {text}
    </a>
  )
}

/* ─── Price block ────────────────────────────────────── */
function PriceBlock({ dark }: { dark?: boolean }) {
  const textColor = dark ? T.white : T.ink
  const mutedColor = dark ? 'rgba(255,255,255,0.5)' : T.muted
  const borderColor = dark ? 'rgba(255,255,255,0.1)' : T.border

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '24px' }}>
        {[
          { label: 'Regular Price:', value: '₦15,000', strike: true },
          { label: 'Today Only:', value: '₦5,000', highlight: true },
          { label: 'You Save:', value: '₦10,000 (75%)', save: true },
        ].map((row, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${borderColor}` }}>
            <span style={{ fontSize: '13px', color: mutedColor, fontFamily: "'DM Sans', sans-serif" }}>{row.label}</span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: row.highlight ? '20px' : '14px',
              fontWeight: row.highlight ? 700 : 500,
              color: row.highlight ? (dark ? T.gold : T.navy) : row.save ? (dark ? '#7EC8A0' : '#1A7A4A') : mutedColor,
              textDecoration: row.strike ? 'line-through' : 'none',
            }}>
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <a
        href={SELAR}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '8px',
          backgroundColor: T.navy,
          color: T.white,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          padding: '18px 32px',
          textDecoration: 'none',
          transition: 'opacity 0.15s',
          width: '100%',
          maxWidth: '480px',
          boxSizing: 'border-box' as const,
          marginBottom: '12px',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        Get Instant Access —{' '}
        <span style={{ textDecoration: 'line-through', opacity: 0.6, fontWeight: 500 }}>₦15,000</span>
        &nbsp;₦5,000
      </a>

      <p style={{ fontSize: '11px', color: mutedColor, fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.04em' }}>
        Instant Digital Access · Secure Checkout · Read on Any Device
      </p>
    </div>
  )
}

/* ─── Book mockup ────────────────────────────────────── */
function BookMockup({ width = 200 }: { width?: number }) {
  return (
    <div style={{ perspective: '800px', display: 'inline-block', flexShrink: 0 }}>
      <img
        src={consultantCover}
        alt="Think Like a Consultant"
        style={{
          width: `${width}px`,
          display: 'block',
          borderRadius: '3px 6px 6px 3px',
          boxShadow: '10px 18px 48px rgba(0,0,0,0.3), 2px 4px 14px rgba(0,0,0,0.15)',
          transform: 'rotateY(-6deg)',
          transformOrigin: 'left center',
        }}
      />
    </div>
  )
}

/* ─── Table of contents ──────────────────────────────── */
const toc = [
  "What Consultants Get Paid For (It's Not What You Think)",
  "The One Skill That Matters More Than Any Framework",
  "Breaking Any Problem Into Pieces That Don't Overlap (MECE, in Plain English)",
  "Telling the Story Before You Solve It — Situation, Complication, Question",
  "A Simple 6-Step Process You Can Use on Literally Any Problem",
  "What's Actually Going On Inside Your Business (SWOT, Simplified)",
  "What's Happening Outside Your Business That You Can't Control (PESTLE)",
  "Why Some Industries Are Brutal and Others Aren't (Competitive Forces, Explained)",
  "How Big Is This Opportunity, Really? (Market Sizing Without a Research Team)",
  "Finding Where the Real Value Gets Made — and Lost",
  "Why \"The Problem\" Is Rarely the Real Problem (KPI Trees & Root Cause Analysis)",
  "The 20% of Causes Behind 80% of Your Headaches",
  "Where Your Money and Time Are Actually Leaking",
  "Mapping How Work Really Flows (and Where It Gets Stuck)",
  "Seeing the Whole System, Not Just the Symptom in Front of You",
  "Generating More Than One Good Option, on Purpose",
  "Deciding Where to Play and How to Win (Simple Strategic Choice Tools)",
  "What to Do First When Everything Feels Urgent",
  "Thinking Through What Could Go Wrong Before It Does",
  "Testing an Idea Before You Bet the Business on It",
  "Does Your Business Model Actually Make Sense?",
  "Planning for Next Quarter Without Losing Sight of Next Year",
  "Pricing — The Fastest Lever You're Probably Ignoring",
  "What Breaks When You Scale (and How to See It Coming)",
  "Leading Your Team Through Change Without Losing Them",
  "Turning a Smart Recommendation Into Something That Gets Done",
  "Running Projects Without Drowning in Process",
  "Getting People on Board Who Weren't in the Room",
  "Knowing If It's Working (Simple Ways to Track Progress)",
  "Getting Slightly Better, Continuously, Without a Consulting Budget",
  "A Quick-Reference Checklist for Any New Problem",
  "Applying the System — Three Problems, Start to Finish",
  "When to Use the Full Process — and When a Shortcut Is Fine",
  "Common Traps Even Trained Consultants Fall Into",
  "Your Turn — A Repeatable Way to Approach Whatever's Next",
]

/* ─── FAQ ────────────────────────────────────────────── */
const faqs = [
  { q: 'Is this book only for consultants?', a: 'No. This book is for anyone who makes business decisions and wants a clearer, more structured way to think through problems. Whether you run a business, manage a team, or advise clients, the frameworks inside are immediately applicable.' },
  { q: 'Do I need an MBA or business degree?', a: "Not at all. The book is written in plain English with practical examples. You don't need formal business training to understand or use what's inside." },
  { q: 'Is this a book about starting a business?', a: "No. This is a book about thinking through business problems better — whether you've been in business for years or are just getting started." },
  { q: 'Is the book mostly theory?', a: "No. Every chapter focuses on practical frameworks you can apply immediately. The book ends with three complete worked examples showing the system applied from start to finish." },
  { q: 'What kinds of problems can I use this book to solve?', a: "Any real business problem — from diagnosing why revenue is falling, to deciding whether to expand, to figuring out what's causing a team to underperform. The system is designed to be flexible." },
  { q: 'Will this book guarantee business success?', a: "No book can guarantee that. What this book gives you is a better way to think — so when problems come up, you have a structured approach instead of guessing." },
  { q: 'How many chapters are in the book?', a: "35 chapters covering the complete problem-solving system, plus worked examples and a repeatable checklist you can use on any new problem." },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${T.border}`, cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', gap: '16px' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 600, margin: 0, color: T.ink, lineHeight: 1.4 }}>{q}</p>
        <span style={{ color: T.gold, fontSize: '22px', fontWeight: 300, flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none', lineHeight: 1 }}>+</span>
      </div>
      {open && <p style={{ fontSize: '15px', lineHeight: 1.8, color: T.muted, paddingBottom: '18px', margin: 0 }}>{a}</p>}
    </div>
  )
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function SalesPageC() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 700)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ backgroundColor: T.bg, color: T.ink, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>

      {/* ── NAV ── */}
      <nav style={{ backgroundColor: T.bg, borderBottom: `1px solid ${T.border}`, position: 'sticky', top: 0, zIndex: 100, padding: '0 24px', height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.muted }}>Quick Learn Plus</span>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '13px', fontStyle: 'italic', color: T.ink }}>Think Like a Consultant</span>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.navy, textDecoration: 'none', borderBottom: `1px solid ${T.navy}`, paddingBottom: '1px' }}>
          Get the Guide
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: T.bg, padding: '72px 24px 64px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '72px', alignItems: 'flex-start' }} className="ownerC-hero-grid">

          {/* Left copy */}
          <div>
            <Reveal>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.gold, marginBottom: '20px' }}>
                Quick Learn Plus
              </p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 700, lineHeight: 1.35, color: T.ink, marginBottom: '20px', maxWidth: '560px' }}>
                If you are serious about solving any business problem without the guesswork, you should read this book today.
              </h1>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: T.muted, marginBottom: '12px', maxWidth: '520px' }}>
                <em style={{ fontFamily: "'Playfair Display', serif", color: T.ink }}>Think Like a Consultant</em> shows you how to break down complex business problems, find the root cause, and choose solutions based on clear thinking — not guesswork.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: T.muted, marginBottom: '32px' }}>
                No MBA. No consulting background.<br />
                Just practical tools for thinking through your business like a consultant.
              </p>
            </Reveal>
            <Reveal delay={60}>
              <PriceBlock />
            </Reveal>
          </div>

          {/* Right book */}
          <Reveal delay={100}>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
              <BookMockup width={240} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section style={{ backgroundColor: T.bg, padding: '80px 24px', borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, lineHeight: 1.25, color: T.ink, marginBottom: '20px' }}>
              What's Inside <em>Think Like a Consultant</em>?
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: T.muted, marginBottom: '48px', maxWidth: '620px' }}>
              If you've ever faced a business problem and didn't know where to start, this book gives you a practical system for breaking it down, finding the real problem, choosing the right solution, and turning your thinking into action.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.gold, marginBottom: '24px' }}>
              Table of Contents
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {toc.map((item, i) => (
              <Reveal key={i} delay={Math.min(i * 12, 120)}>
                <div style={{ display: 'flex', gap: '20px', padding: '16px 0', borderBottom: `1px solid ${T.border}`, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '12px', fontWeight: 700, color: T.gold, minWidth: '26px', paddingTop: '2px', letterSpacing: '0.04em', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, margin: 0, color: T.ink }}>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR PURCHASE INCLUDES — dark ── */}
      <section style={{ backgroundColor: T.navy, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 700, color: T.white, textAlign: 'center', marginBottom: '12px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Your Purchase Includes
            </h2>
            <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginBottom: '56px' }}>
              Think Like a Consultant — complete bundle
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '56px', alignItems: 'flex-start' }} className="ownerC-purchase-grid">

            {/* Book */}
            <Reveal delay={40}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <BookMockup width={170} />
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textAlign: 'center', maxWidth: '140px' }}>
                  Think Like a Consultant
                </p>
              </div>
            </Reveal>

            {/* Feature list */}
            <Reveal delay={80}>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.gold, marginBottom: '12px' }}>
                  Get the book
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 700, color: T.white, lineHeight: 1.25, marginBottom: '8px' }}>
                  Think Like a Consultant
                </h3>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px', fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', marginBottom: '28px' }}>
                  Understand the Problem. Find the Opportunity. Make Better Decisions.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '32px' }}>
                  {[
                    'Identify the real problem instead of treating symptoms',
                    'Break complex challenges into manageable parts',
                    'Ask better questions before making important decisions',
                    'Use 10+ practical frameworks to understand your business',
                    'Evaluate options and test ideas before committing',
                    'Turn recommendations into action plans that get done',
                  ].map((f, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                      <span style={{ color: T.gold, fontWeight: 700, flexShrink: 0, paddingTop: '2px' }}>✓</span>
                      <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Price inside dark section */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '24px' }}>
                  {[
                    { label: 'Regular Price:', value: '₦15,000', strike: true },
                    { label: 'Today Only:', value: '₦5,000', highlight: true },
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', maxWidth: '320px' }}>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontFamily: "'DM Sans', sans-serif" }}>{row.label}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: row.highlight ? '20px' : '14px', fontWeight: row.highlight ? 700 : 500, color: row.highlight ? T.gold : 'rgba(255,255,255,0.35)', textDecoration: row.strike ? 'line-through' : 'none' }}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <a href={SELAR} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    backgroundColor: T.gold, color: T.navy,
                    fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 800,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '16px 36px', textDecoration: 'none',
                    transition: 'opacity 0.15s', marginBottom: '12px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Get Instant Access — <span style={{ textDecoration: 'line-through', opacity: 0.6, fontWeight: 500 }}>₦15,000</span>&nbsp;₦5,000
                </a>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
                  Instant Digital Access · Secure Checkout via Selar · Pay Once, Keep Forever
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '56px', paddingTop: '40px', textAlign: 'center' }}>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
                Stop reacting. Start diagnosing. Get instant access today.
              </p>
              <a href={SELAR} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: T.white, color: T.navy,
                  fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 800,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '16px 40px', textDecoration: 'none',
                  transition: 'opacity 0.15s', marginBottom: '10px',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Get Instant Access · <span style={{ textDecoration: 'line-through', opacity: 0.5, fontWeight: 500 }}>₦15,000</span>&nbsp;&nbsp;₦5,000
              </a>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.04em', marginTop: '8px' }}>
                Instant Digital Access · Secure Checkout · Read on Any Device
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECOND PRICING BLOCK — light ── */}
      <section style={{ backgroundColor: T.cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '64px', alignItems: 'flex-start' }} className="ownerC-price-grid">

          <Reveal>
            <BookMockup width={200} />
          </Reveal>

          <Reveal delay={80}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.gold, marginBottom: '10px' }}>
                Think Like a Consultant
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 700, lineHeight: 1.3, color: T.ink, marginBottom: '6px' }}>
                Think Like a Consultant
              </h2>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px', fontStyle: 'italic', color: T.muted, marginBottom: '24px' }}>
                Understand the Problem. Find the Opportunity. Make Better Decisions.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '28px' }}>
                {[
                  'Identify the real problem instead of treating symptoms',
                  'Break complex challenges into manageable parts',
                  'Ask better questions before making important decisions',
                  'Use 10+ practical frameworks to understand your business',
                  'Evaluate options and test ideas before committing',
                  'Turn recommendations into action plans that get done',
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0', borderBottom: `1px solid ${T.border}` }}>
                    <span style={{ color: T.gold, fontWeight: 700, flexShrink: 0, paddingTop: '2px' }}>✓</span>
                    <span style={{ fontSize: '14px', color: T.muted, lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
              <PriceBlock />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: T.bg, padding: '80px 24px', borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, lineHeight: 1.3, color: T.ink, marginBottom: '40px', textAlign: 'center' }}>
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div style={{ borderTop: `1px solid ${T.border}` }}>
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 30}>
                <FAQItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — dark ── */}
      <section style={{ backgroundColor: T.navy, padding: '100px 24px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: '12px', lineHeight: 1.7 }}>
              Your business doesn't always need more effort.
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 50px)', fontWeight: 700, lineHeight: 1.15, color: T.white, marginBottom: '4px' }}>
              Sometimes, it needs
            </h2>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 50px)', fontWeight: 700, lineHeight: 1.15, fontStyle: 'italic', color: T.gold, marginBottom: '40px' }}>
              a better way to think.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '6px' }}>
              Think Like a Consultant
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px', fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', marginBottom: '36px' }}>
              Understand the Problem. Find the Opportunity. Make Better Decisions.
            </p>
            <a href={SELAR} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: T.gold, color: T.navy,
                fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 800,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '18px 48px', textDecoration: 'none',
                transition: 'opacity 0.15s', marginBottom: '16px',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Get Your Copy — ₦3,700
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#0A1826', padding: '28px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: '0 0 8px', letterSpacing: '0.06em' }}>
          © {new Date().getFullYear()} Think Like a Consultant. All rights reserved.
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.15)', margin: 0, maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          Results depend on your circumstances, industry and effort. No specific business outcome is guaranteed.
        </p>
      </footer>

      {/* ── MOBILE STICKY ── */}
      <div className="ownerC-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
        display: 'none', padding: '12px 16px',
        backgroundColor: T.navy, borderTop: `2px solid ${T.gold}`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'block', width: '100%', textAlign: 'center',
            backgroundColor: T.gold, color: T.navy,
            fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 800,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '16px', textDecoration: 'none',
          }}
        >
          Get Instant Access — ₦5,000
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 768px) {
          .ownerC-hero-grid     { grid-template-columns: 1fr !important; }
          .ownerC-purchase-grid { grid-template-columns: 1fr !important; }
          .ownerC-price-grid    { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .ownerC-sticky { display: block !important; }
        }
      `}</style>
    </div>
  )
}
