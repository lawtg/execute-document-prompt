import { useRef, useState, useEffect } from 'react'
import consultantCover from './-like-a-consultant-cover.png'
import thankgodPhoto  from './ThankGod-Akpa.jpeg'
import petersonPhoto  from './Peterson-Akodi.jpeg'
import davidPhoto     from './David-Utulor.jpeg'
import augustPhoto    from './Yusuf Kabiru.jpeg'

/* ─── Tokens ─────────────────────────────────────────── */
const C = {
  dark:    '#0F0E17',
  darkAlt: '#1A1929',
  navy:    '#12112A',
  white:   '#FFFFFF',
  offWhite:'#F7F7F9',
  grey:    '#F0EFF5',
  yellow:  '#FFD600',
  yellowHover: '#E6C000',
  ink:     '#0F0E17',
  body:    '#3D3B52',
  muted:   '#7B79A0',
  border:  '#E2E0EF',
  green:   '#1A7A4A',
  red:     '#D93A3A',
  purple:  '#2D1B69',  // kept for testimonials
  purpleLight: '#4E3894',
  lightGrey: '#F4F3FC',
}

const SELAR = 'https://selar.com/978m069577'

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
      transform: vis ? 'none' : 'translateY(20px)',
      transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── CTA ─────────────────────────────────────────────── */
function CTABtn({ text, id, full }: { text: string; id?: string; full?: boolean }) {
  return (
    <a href={SELAR} target="_blank" rel="noopener noreferrer" id={id}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: C.yellow, color: C.ink,
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: '16px', fontWeight: 800,
        letterSpacing: '0.02em',
        padding: '18px 40px', textDecoration: 'none',
        transition: 'background-color 0.15s, transform 0.1s',
        cursor: 'pointer', lineHeight: 1.2,
        width: full ? '100%' : 'auto',
        boxSizing: 'border-box' as const,
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.yellowHover; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.yellow; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
    >
      {text}
    </a>
  )
}

/* ─── Book mockup ─────────────────────────────────────── */
function BookMockup({ size = 220 }: { size?: number }) {
  return (
    <div style={{ perspective: '800px', display: 'inline-block' }}>
      <img src={consultantCover} alt="Think Like a Consultant"
        style={{
          width: `${size}px`, display: 'block',
          borderRadius: '3px 8px 8px 3px',
          boxShadow: `8px 16px 48px rgba(0,0,0,0.5), 0 0 32px rgba(255,214,0,0.1)`,
          transform: 'rotateY(-8deg)',
          transformOrigin: 'left center',
        }}
      />
    </div>
  )
}

/* ─── Section rule ────────────────────────────────────── */
function Rule() { return <div style={{ height: '1px', backgroundColor: C.border }} /> }

/* ─── FAQ accordion ──────────────────────────────────── */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}`, cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', gap: '12px' }}>
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', fontWeight: 600, color: C.ink, margin: 0, lineHeight: 1.4 }}>{q}</p>
        <span style={{ color: C.yellow, fontSize: '20px', fontWeight: 300, flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none', lineHeight: 1, backgroundColor: C.dark, width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</span>
      </div>
      {open && <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', lineHeight: 1.8, color: C.body, paddingBottom: '18px', margin: 0 }}>{a}</p>}
    </div>
  )
}

/* ─── PAGE ────────────────────────────────────────────── */
export default function SalesPageC() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ backgroundColor: C.offWhite, color: C.ink, fontFamily: "'Inter', system-ui, sans-serif", lineHeight: 1.6 }}>

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.dark, padding: '56px 24px 48px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '56px', alignItems: 'center' }} className="oc-hero-grid">

          <div>
            <Reveal>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '14px' }}>
                Think Like a Consultant
              </p>
              <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.1, color: C.white, marginBottom: '16px', letterSpacing: '-0.02em' }}>
                Walk into any business problem and know exactly{' '}
                <span style={{ color: C.yellow }}>where to start.</span>
              </h1>
              <p style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', marginBottom: '28px', maxWidth: '520px' }}>
                A practical guide that shows consultants, advisors and business owners how to think through any business problem — with clarity, structure and confidence.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <CTABtn text="Get Instant Access →" id="order" />
            </Reveal>
          </div>

          <Reveal delay={120}>
            <BookMockup size={200} />
          </Reveal>
        </div>
      </section>

      {/* ══ STATS BAR ══════════════════════════════════════ */}
      <section style={{ backgroundColor: C.darkAlt, borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="oc-stats-grid">
          {[
            { n: '6', l: 'Steps' },
            { n: '20+', l: 'Frameworks' },
            { n: '5', l: 'Bonuses' },
            { n: '10', l: 'Days to apply' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '20px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <p style={{ fontSize: '24px', fontWeight: 900, color: C.yellow, margin: 0, lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', margin: '4px 0 0', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PROBLEM ════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ backgroundColor: C.grey, padding: '32px 36px', marginBottom: '40px', borderLeft: `4px solid ${C.yellow}` }}>
              <p style={{ fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 700, color: C.ink, lineHeight: 1.4, margin: 0 }}>
                Smart people still guess, because nobody ever taught them a process for thinking through a problem.
              </p>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', backgroundColor: C.border, marginBottom: '40px' }} className="oc-3col">
              {[
                { h: 'Business stalls or shrinks', b: 'Because problems get treated but never solved.' },
                { h: 'They keep left-turning', b: 'Applying the wrong solution to the wrong problem.' },
                { h: 'Confidence gets shaken', b: 'Without a process, every problem feels like a crisis.' },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: C.white, padding: '24px 20px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: C.ink, marginBottom: '8px', lineHeight: 1.3 }}>{item.h}</p>
                  <p style={{ fontSize: '13px', color: C.body, margin: 0, lineHeight: 1.65 }}>{item.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 800, color: C.ink, lineHeight: 1.4, marginBottom: '8px' }}>
              Six steps take you from "something is wrong" to "here is exactly what to do."
            </p>
            <p style={{ fontSize: '15px', color: C.body, margin: 0 }}>
              Think Like a Consultant is a practical guide built around a repeatable problem-solving process you can apply immediately.
            </p>
          </Reveal>
        </div>
      </section>

      <Rule />

      {/* ══ 6-STEP PROCESS ═════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: '12px' }}>The Method</p>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '40px' }}>
              A six-step process that works on any problem.
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: C.border }} className="oc-steps-grid">
            {[
              { n: '01', t: 'Define', b: 'Clarify what the problem actually is before you try to solve it.' },
              { n: '02', t: 'Structure', b: 'Break the problem into smaller parts that don\'t overlap.' },
              { n: '03', t: 'Prioritise', b: 'Identify which parts matter most and deserve your attention first.' },
              { n: '04', t: 'Analyse', b: 'Gather evidence. Separate facts from assumptions.' },
              { n: '05', t: 'Synthesise', b: 'Find the pattern. What is the data actually telling you?' },
              { n: '06', t: 'Communicate and act', b: 'Turn your thinking into a clear recommendation people can follow.' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 40}>
                <div style={{ backgroundColor: C.white, padding: '24px 22px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '24px', fontWeight: 900, color: C.yellow, lineHeight: 1, flexShrink: 0, fontFamily: "'Inter', system-ui, sans-serif" }}>{s.n}</span>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 800, color: C.ink, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.t}</p>
                    <p style={{ fontSize: '13px', color: C.body, margin: 0, lineHeight: 1.65 }}>{s.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <CTABtn text="Get the Book →" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ COMPARISON TABLE ════════════════════════════════ */}
      <section style={{ backgroundColor: C.grey, padding: '72px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '8px' }}>
              A working system, not a collection of tips.
            </h2>
            <p style={{ fontSize: '15px', color: C.body, marginBottom: '32px' }}>Most business books give you ideas. This one gives you a process.</p>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ backgroundColor: C.white, border: `1px solid ${C.border}` }}>
              {/* Header row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', backgroundColor: C.dark }}>
                <div style={{ padding: '14px 20px' }} />
                <div style={{ padding: '14px 20px', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>Without a method</p>
                </div>
                <div style={{ padding: '14px 20px', borderLeft: '1px solid rgba(255,255,255,0.08)', backgroundColor: C.yellow }}>
                  <p style={{ fontSize: '12px', fontWeight: 700, color: C.ink, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>With this book</p>
                </div>
              </div>
              {[
                { label: 'Start', without: 'Stare at the problem', with: 'Know exactly where to begin' },
                { label: 'Root cause', without: 'Treat symptoms', with: 'Find what\'s actually driving it' },
                { label: 'Solutions', without: 'Go with your gut', with: 'Generate and compare options' },
                { label: 'Decisions', without: 'Based on opinion', with: 'Based on evidence' },
                { label: 'Advice', without: 'Hard to explain', with: 'Clear and actionable' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: `1px solid ${C.border}` }}>
                  <div style={{ padding: '14px 20px' }}>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: C.ink, margin: 0 }}>{row.label}</p>
                  </div>
                  <div style={{ padding: '14px 20px', borderLeft: `1px solid ${C.border}` }}>
                    <p style={{ fontSize: '13px', color: C.muted, margin: 0 }}>{row.without}</p>
                  </div>
                  <div style={{ padding: '14px 20px', borderLeft: `1px solid ${C.border}`, backgroundColor: '#FFFDF0' }}>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: C.green, margin: 0 }}>✓ {row.with}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ WHO IT'S FOR ════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '32px' }}>
              Who it is for
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: C.border }} className="oc-who-grid">
            {[
              { h: 'It is a good fit if you need:', items: ["You advise clients on business challenges", "You manage teams and make high-stakes decisions", "You want a repeatable way to approach any problem", "You're tired of relying on instinct alone"] },
              { h: 'It is not for you if:', items: ["You're looking for quick tips and life hacks", "You want someone to solve the problem for you", "You aren't willing to apply a process", "You prefer theory over practical frameworks"] },
            ].map((col, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ backgroundColor: C.white, padding: '28px 24px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: i === 0 ? C.green : C.red, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>{col.h}</p>
                  {col.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
                      <span style={{ color: i === 0 ? C.green : C.red, fontWeight: 700, flexShrink: 0, fontSize: '14px', paddingTop: '1px' }}>{i === 0 ? '✓' : '✗'}</span>
                      <p style={{ fontSize: '14px', color: C.body, margin: 0, lineHeight: 1.55 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BONUSES ════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.dark, padding: '72px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>Included free</p>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 900, color: C.white, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '8px' }}>
              Deciding is half the job. The bonuses cover the other half: getting it done.
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '36px' }}>Five practical tools included with every purchase.</p>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(255,255,255,0.06)' }}>
            {[
              { n: '01', t: 'Practically Designed Problem Solver', v: '₦45,000', d: 'A step-by-step worksheet to work through any business problem from start to recommendation.' },
              { n: '02', t: 'Argument-Proof Decision Maker', v: '₦30,000', d: 'A tool to pressure-test your decisions so you can defend them clearly and confidently.' },
              { n: '03', t: 'Business Problem Diagnosis Worksheet', v: '₦25,000', d: 'Quickly identify the real root cause instead of treating surface symptoms.' },
              { n: '04', t: 'Strategy Implementation Planner', v: '₦20,000', d: 'Turn your recommendation into an actionable plan your client can actually execute.' },
              { n: "05", t: "The Consultant's Problem-Solving Checklist", v: '₦15,000', d: 'A quick-reference checklist to run through before presenting any recommendation.' },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 50}>
                <div style={{ backgroundColor: C.darkAlt, padding: '20px 24px', display: 'grid', gridTemplateColumns: '32px 1fr auto', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px', fontWeight: 900, color: C.yellow, lineHeight: 1 }}>{b.n}</span>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 700, color: C.white, marginBottom: '4px' }}>{b.t}</p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>{b.d}</p>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: C.yellow, whiteSpace: 'nowrap', paddingTop: '2px' }}>{b.v}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '72px 0' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <Reveal>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: '8px' }}>What readers say</p>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '32px' }}>
              From the people who've used it.
            </h2>
          </Reveal>
        </div>

        {/* Scrollable row */}
        <div style={{
          display: 'flex', overflowX: 'auto', gap: '16px',
          padding: '4px 24px 20px',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }} className="oc-testi-scroll">
          {[
            { photo: thankgodPhoto, outcome: "Changed how he advises clients", q: "I have read a lot of business books, but what I like about Think Like a Consultant is how practical it is. It gives you a simple way to look at a business problem, break it down and know what to do next.", n: "ThankGod Akpa", t: "Founder, Impakt100" },
            { photo: petersonPhoto, outcome: "Applied the framework immediately", q: "The ideas are simple, but they make you think differently. It has changed the way I approach some of the decisions I make in business.", n: "Peterson Akodi", t: "Co-Founder, SPacebox" },
            { photo: davidPhoto, outcome: "Restructured how he diagnoses problems", q: "Sometimes the problem is not that you don't have a solution. The problem is that you have not properly understood the problem. This book gives you a practical process for thinking through difficult situations.", n: "David Utulor", t: "Director, Mc Dave Schools" },
            { photo: augustPhoto, outcome: "Now uses it with every client", q: "As someone who works with businesses, I found the frameworks in this book very useful. It gives you a structured way to think when things are unclear instead of just relying on experience or instinct.", n: "August Ojile", t: "CEO, Cueball Digital Agency" },
          ].map((item, i) => (
            <div key={i} style={{
              flex: '0 0 300px', scrollSnapAlign: 'start',
              backgroundColor: C.grey,
              borderTop: `3px solid ${i % 2 === 0 ? C.dark : C.yellow}`,
              padding: '24px 20px',
              display: 'flex', flexDirection: 'column', gap: '14px',
            }}>
              <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: i % 2 === 0 ? C.white : C.ink, backgroundColor: i % 2 === 0 ? C.dark : C.yellow, display: 'inline-block', padding: '4px 10px', margin: 0, alignSelf: 'flex-start' }}>
                {item.outcome}
              </p>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: C.body, fontStyle: 'italic', margin: 0, flex: 1 }}>"{item.q}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: `1px solid ${C.border}`, paddingTop: '14px' }}>
                <img src={item.photo} alt={item.n} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0, border: `2px solid ${i % 2 === 0 ? C.dark : C.yellow}` }} />
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: C.ink, margin: 0 }}>{item.n}</p>
                  <p style={{ fontSize: '11px', color: C.muted, margin: 0 }}>{item.t}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', paddingTop: '8px' }}>
          {[0,1,2,3].map(i => <div key={i} style={{ width: i === 0 ? '18px' : '6px', height: '6px', borderRadius: '3px', backgroundColor: i === 0 ? C.dark : C.border }} />)}
        </div>
      </section>

      {/* ══ PRICING ════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.dark, padding: '72px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>Pricing</p>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 900, color: C.white, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '32px' }}>
              The full system plus five bonuses, one payment.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ backgroundColor: C.darkAlt, border: `1px solid rgba(255,255,255,0.08)`, padding: '28px' }}>
              {/* What's included */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '28px' }}>
                {[
                  ['Think Like a Consultant (ebook)', '₦15,000'],
                  ['Practically Designed Problem Solver', '₦45,000'],
                  ['Argument-Proof Decision Maker', '₦30,000'],
                  ['Business Problem Diagnosis Worksheet', '₦25,000'],
                  ['Strategy Implementation Planner', '₦20,000'],
                  ["The Consultant's Problem-Solving Checklist", '₦15,000'],
                ].map(([label, val], i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <p style={{ fontSize: '14px', color: i === 0 ? C.white : 'rgba(255,255,255,0.55)', fontWeight: i === 0 ? 700 : 400, margin: 0 }}>{label}</p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', margin: 0, textDecoration: 'line-through' }}>{val}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Total value: <span style={{ textDecoration: 'line-through' }}>₦150,000</span></p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                    <span style={{ fontSize: 'clamp(36px, 6vw, 52px)', fontWeight: 900, color: C.white, lineHeight: 1, letterSpacing: '-0.03em' }}>₦12,500</span>
                    <span style={{ backgroundColor: C.red, color: C.white, fontSize: '12px', fontWeight: 700, padding: '4px 10px', letterSpacing: '0.06em' }}>60% OFF</span>
                  </div>
                </div>
              </div>

              <CTABtn text="Get Instant Access → ₦12,500" full />
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '10px', textAlign: 'center', letterSpacing: '0.04em' }}>
                Instant digital access · Secure checkout via Selar · Pay once, keep forever
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ GUARANTEE ══════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ border: `1px solid ${C.border}`, borderTop: `4px solid ${C.yellow}`, padding: '36px 32px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: '12px' }}>The "no method" problem guarantee</p>
              <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 800, color: C.ink, letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: '16px' }}>
                If the method doesn't work for you, you don't pay for it.
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: C.body, margin: 0 }}>
                Go through the book. Apply the six-step process to a real problem. If it doesn't give you more clarity than what you had before, contact us within 7 days and we'll refund your money in full. No forms. No arguments.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ PRE-BUY FAQ ════════════════════════════════════ */}
      <section style={{ backgroundColor: C.grey, padding: '72px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '8px' }}>Questions before you buy</h2>
            <p style={{ fontSize: '14px', color: C.muted, marginBottom: '32px' }}>The most common questions we get.</p>
          </Reveal>
          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {[
              { q: 'Is this for beginners?', a: 'Yes. No prior consulting experience needed. The book starts from first principles and builds up to a full problem-solving system.' },
              { q: 'How is this different from other business books?', a: 'Most business books give you frameworks to remember. This one gives you a process to follow. The difference is you can apply this immediately, to any problem, without memorising anything.' },
              { q: 'How long does it take to read?', a: 'Most people finish it in a weekend. Each chapter is short and practical. You can start applying it the same day you read it.' },
              { q: 'Is this only useful for consultants?', a: 'No. Anyone who makes business decisions — founders, managers, advisors, team leads — will find the process directly applicable.' },
              { q: 'What format do I get?', a: 'You get instant access to a digital PDF. You can read it on any device, print it out or save it for reference.' },
              { q: 'What if I don\'t like it?', a: 'You\'re covered by a 7-day money-back guarantee. Apply the method to one real problem. If it doesn\'t help, we\'ll refund you in full.' },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 25}>
                <FAQ q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════ */}
      <section style={{ backgroundColor: C.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>Think Like a Consultant</p>
            <h2 style={{ fontSize: 'clamp(24px, 5vw, 46px)', fontWeight: 900, color: C.white, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '16px' }}>
              Your next problem is coming whether you have a method or not.
            </h2>
            <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.55)', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
              Get the book. Learn the process. Walk into every engagement knowing exactly where to start.
            </p>
            <CTABtn text="Get Instant Access → ₦12,500" />
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', marginTop: '14px', letterSpacing: '0.04em' }}>
              Instant digital access · 7-day money-back guarantee
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ FOOTER ═════════════════════════════════════════ */}
      <footer style={{ backgroundColor: '#080810', padding: '28px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', margin: '0 0 4px' }}>THINK LIKE A CONSULTANT</p>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.15)', margin: 0 }}>© {new Date().getFullYear()} Quick Learn Plus · All rights reserved</p>
      </footer>

      {/* ══ STICKY MOBILE ══════════════════════════════════ */}
      <div className="oc-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 300,
        display: 'none', padding: '12px 16px',
        backgroundColor: C.dark, borderTop: `2px solid ${C.yellow}`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: C.yellow, color: C.ink, fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em', padding: '16px', textDecoration: 'none' }}>
          Get Instant Access → ₦12,500
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .oc-testi-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 760px) {
          .oc-hero-grid  { grid-template-columns: 1fr !important; }
          .oc-steps-grid { grid-template-columns: 1fr !important; }
          .oc-who-grid   { grid-template-columns: 1fr !important; }
          .oc-3col       { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .oc-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .oc-sticky     { display: block !important; }
        }
      `}</style>
    </div>
  )
}
