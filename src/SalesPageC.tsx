import { useRef, useState, useEffect } from 'react'
import bundleImage from './Quick Learn Plus Business Bundle.png'
import stackImage  from './Six-Book Management Collection Display.png'
import b1Image     from './productivity_management_method.png'
import b2Image     from './organizational_leadership_method.png'
import b3Image     from './management_template_kit.png'
import b4Image     from './Decision Criteria_ Premium Chess-Inspired Book Mockup.png'
import b5Image     from './the_consultants_mindset.png'
import thankgodPhoto from './ThankGod-Akpa.jpeg'
import petersonPhoto from './Peterson-Akodi.jpeg'
import davidPhoto    from './David-Utulor.jpeg'
import augustPhoto   from './Yusuf Kabiru.jpeg'

/* ─── Design system ───────────────────────────────────── */
const C = {
  black:  '#0A0A0A',
  ink:    '#111111',
  white:  '#FFFFFF',
  off:    '#F7F6F3',   // single warm off-white — used sparingly
  gold:   '#C8961E',   // refined amber — not too bright
  goldBg: '#F5C842',   // button gold
  muted:  '#6B6B6B',
  subtle: '#999999',
  border: '#E8E8E8',
  borderDk: 'rgba(255,255,255,0.1)',
  red:    '#CC2200',
}

const SELAR = 'https://selar.com/978m069577'

/* ─── Scroll reveal ───────────────────────────────────── */
function useInView(t = 0.07) {
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
      transition: `opacity .7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform .7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── CTA button ──────────────────────────────────────── */
function Cta({ text, id, full, light }: { text: string; id?: string; full?: boolean; light?: boolean }) {
  const bg = light ? C.white : C.goldBg
  const col = light ? C.black : C.black
  return (
    <a href={SELAR} target="_blank" rel="noopener noreferrer" id={id}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: bg, color: col,
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: '16px', fontWeight: 800,
        letterSpacing: '-0.01em',
        padding: '20px 40px', textDecoration: 'none',
        transition: 'all 0.15s',
        cursor: 'pointer', lineHeight: 1,
        width: full ? '100%' : 'auto',
        boxSizing: 'border-box' as const,
        gap: '8px',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
    >
      {text}
    </a>
  )
}

/* ─── Section eyebrow ─────────────────────────────────── */
function Eye({ t, light }: { t: string; light?: boolean }) {
  return (
    <p style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '11px', fontWeight: 700,
      letterSpacing: '0.2em', textTransform: 'uppercase',
      color: light ? 'rgba(255,255,255,0.4)' : C.gold,
      marginBottom: '20px',
    }}>{t}</p>
  )
}

/* ─── Thin rule ───────────────────────────────────────── */
function Rule({ light }: { light?: boolean }) {
  return <div style={{ height: '1px', backgroundColor: light ? 'rgba(255,255,255,0.08)' : C.border }} />
}

/* ─── FAQ ─────────────────────────────────────────────── */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}`, cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 0', gap: '16px' }}>
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '17px', fontWeight: 600, color: C.ink, margin: 0, lineHeight: 1.4 }}>{q}</p>
        <span style={{ color: C.subtle, fontSize: '22px', flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none', lineHeight: 1 }}>+</span>
      </div>
      {open && <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', lineHeight: 1.8, color: C.muted, paddingBottom: '22px', margin: 0 }}>{a}</p>}
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
    <div style={{ backgroundColor: C.white, color: C.ink, fontFamily: "'Inter', system-ui, sans-serif", lineHeight: 1.65 }}>

      {/* ══════════════════════════════════════════════════
          HERO — black, two-column, dramatic scale
      ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.black, padding: '88px 48px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 440px', gap: '64px', alignItems: 'center' }} className="sc-hero">

          <div>
            <Reveal>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '24px' }}>
                FOR OWNERS · MANAGERS · CONSULTANTS · STUDENTS
              </p>
              <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(44px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.045em', color: C.white, marginBottom: '0' }}>
                Walk into any<br />
                business problem<br />
                and know exactly<br />
                <span style={{ color: C.goldBg }}>where to start.</span>
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ fontSize: 'clamp(17px, 1.8vw, 20px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', margin: '32px 0 32px', maxWidth: '500px', fontWeight: 400 }}>
                <em>Think Like a Consultant</em> gives you a 6-step method to find the real cause of a problem, compare your options fairly and turn the decision into a plan with owners, deadlines and numbers. Plain language. Real examples. Templates you can use this week.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <Cta text="Get the bundle — ₦12,500 →" id="order" />
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)', marginTop: '14px', letterSpacing: '0.03em' }}>
                One payment · Instant download · No subscription
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <img src={bundleImage} alt="Quick Learn Plus Business Bundle"
              style={{ width: '100%', display: 'block', filter: 'drop-shadow(0 32px 80px rgba(0,0,0,0.8))' }} />
          </Reveal>
        </div>
      </section>

      {/* ══ STATS ═══════════════════════════════════════════ */}
      <div style={{ backgroundColor: C.black, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="sc-stats">
          {[
            { n: '6', l: 'steps from problem to plan' },
            { n: '25+', l: 'frameworks with examples' },
            { n: '5', l: 'bonuses included free' },
            { n: '30', l: 'day money-back guarantee' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '28px 48px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <p style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: C.goldBg, margin: '0 0 4px', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', margin: 0, letterSpacing: '0.02em', fontWeight: 500 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══ PROBLEM ═════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '120px 48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Reveal>
            <Eye t="The Problem" />
            <h2 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.045em', lineHeight: 1.0, marginBottom: '32px' }}>
              Smart people still guess, because nobody ever taught them a process.
            </h2>
            <p style={{ fontSize: 'clamp(17px, 1.8vw, 20px)', lineHeight: 1.8, color: C.muted, marginBottom: '64px', maxWidth: '840px', fontWeight: 400 }}>
              Sales drop. A key hire quits. Margins shrink. The reflex is to grab the nearest fix. Weeks later the symptom is back, because the cause was never found.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', backgroundColor: C.border }} className="sc-3col">
            {[
              { n: '01', h: 'Decisions made on mood', b: 'Without fixed criteria, the loudest opinion or the latest scare wins.' },
              { n: '02', h: 'Busy, but not moving', b: 'Effort is spread across ten things and nobody can say which one matters most.' },
              { n: '03', h: 'Good ideas that die on paper', b: "The plan never gets owners, dates or numbers, so nothing happens." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ backgroundColor: C.white, padding: '48px 40px' }}>
                  <p style={{ fontSize: '56px', fontWeight: 900, color: 'rgba(0,0,0,0.05)', letterSpacing: '-0.05em', lineHeight: 1, marginBottom: '20px' }}>{item.n}</p>
                  <p style={{ fontSize: '20px', fontWeight: 700, color: C.ink, marginBottom: '12px', lineHeight: 1.3 }}>{item.h}</p>
                  <p style={{ fontSize: '16px', color: C.muted, margin: 0, lineHeight: 1.75 }}>{item.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div style={{ marginTop: '80px', paddingTop: '64px', borderTop: `1px solid ${C.border}` }}>
              <p style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: C.ink, lineHeight: 1.4, maxWidth: '800px', letterSpacing: '-0.02em' }}>
                Consultants are paid well for one thing: they replace guessing with structure. That structure is a learnable skill, and it fits in one book.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ METHOD ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.black, padding: '120px 48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Reveal>
            <Eye t="The Method" light />
            <h2 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, color: C.white, letterSpacing: '-0.045em', lineHeight: 1.0, marginBottom: '20px', maxWidth: '800px' }}>
              Six steps from "something is wrong" to exactly what to do.
            </h2>
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: 'rgba(255,255,255,0.45)', marginBottom: '72px', maxWidth: '560px', fontWeight: 400 }}>
              Each step has its own tool and its own clear output. You always know whether you are done.
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { n: '01', t: 'Define', d: 'Turn a vague worry into one precise sentence.', tool: 'Fog Audit' },
              { n: '02', t: 'Structure', d: 'Break the problem into pieces with no overlaps and no gaps.', tool: 'MECE' },
              { n: '03', t: 'Prioritize', d: 'Find the few causes that explain most of the damage.', tool: '80/20 Rule' },
              { n: '04', t: 'Analyze', d: 'Trace the symptom to a root cause using evidence, not assumption.', tool: 'KPI Trees · Five Whys' },
              { n: '05', t: 'Synthesize', d: 'Pull your findings into one clear story and a recommendation.', tool: 'Situation · Complication · Question · Answer' },
              { n: '06', t: 'Communicate and act', d: 'Turn the decision into tasks, owners, deadlines and a definition of done.', tool: 'Action Plan Builder' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 35}>
                <div style={{ display: 'grid', gridTemplateColumns: '64px 200px 1fr auto', gap: '0', borderBottom: '1px solid rgba(255,255,255,0.07)', alignItems: 'center', padding: '28px 0' }} className="sc-step-row">
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>{step.n}</span>
                  <span style={{ fontSize: '20px', fontWeight: 800, color: C.white, letterSpacing: '-0.02em' }}>{step.t}</span>
                  <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', paddingRight: '32px' }}>{step.d}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: C.goldBg, whiteSpace: 'nowrap', textAlign: 'right' as const }}>{step.tool}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div style={{ marginTop: '56px' }}>
              <Cta text="Start with step one today →" light />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ INSIDE THE BOOK ═════════════════════════════════ */}
      <section style={{ backgroundColor: C.off, padding: '120px 48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Reveal>
            <Eye t="Inside the Book" />
            <h2 style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.045em', lineHeight: 1.0, marginBottom: '20px' }}>
              A working system, not a collection of tips.
            </h2>
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: C.muted, marginBottom: '56px', maxWidth: '560px', fontWeight: 400 }}>
              Every framework explained in plain words, drawn as a visual and applied to one running business case.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <div style={{ backgroundColor: C.white, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
              {/* Table header */}
              <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', backgroundColor: C.ink }} className="sc-fw-row">
                <div style={{ padding: '14px 24px' }} />
                {['Frameworks', 'You leave with'].map((h, i) => (
                  <div key={i} style={{ padding: '14px 24px', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{h}</p>
                  </div>
                ))}
              </div>
              {[
                { step: 'Frame', tools: 'Problem statement, OKRs, KPIs', output: 'A clear problem and a success measure' },
                { step: 'Break down', tools: 'MECE, issue trees, Pyramid Principle', output: 'A structured map of the problem' },
                { step: 'Focus', tools: "80/20, SWOT, PESTLE, Porter's Five Forces, TAM·SAM·SOM", output: 'A ranked list of where to look' },
                { step: 'Test', tools: 'Root Cause Analysis, Process Mapping, Value Chain', output: 'The evidenced root cause' },
                { step: 'Decide', tools: 'BCG Matrix, Ansoff, Pricing Strategy, Decision Criteria', output: 'One recommended option' },
                { step: 'Plan', tools: 'Kanban, Gantt, Stakeholder Mapping', output: 'Actions, owners, deadlines, KPIs' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', borderBottom: i < 5 ? `1px solid ${C.border}` : 'none' }} className="sc-fw-row">
                  <div style={{ padding: '20px 24px', borderRight: `1px solid ${C.border}` }}>
                    <p style={{ fontSize: '15px', fontWeight: 800, color: C.ink, margin: 0 }}>{row.step}</p>
                  </div>
                  <div style={{ padding: '20px 24px', borderRight: `1px solid ${C.border}` }}>
                    <p style={{ fontSize: '14px', color: C.muted, margin: 0, lineHeight: 1.55 }}>{row.tools}</p>
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: C.ink, margin: 0 }}>{row.output}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <p style={{ fontSize: '16px', color: C.muted, lineHeight: 1.75, marginTop: '24px' }}>
              <strong style={{ color: C.ink }}>Also included:</strong> a fully solved business case from first question to final recommendation, and fill-in templates for every step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ BONUSES ═════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '120px 48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Reveal>
            <Eye t="5 Bonuses Included" />
            <h2 style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.045em', lineHeight: 1.0, marginBottom: '20px' }}>
              Deciding is half the job.
            </h2>
            <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: C.muted, marginBottom: '64px', maxWidth: '560px' }}>
              The bonuses cover the other half: getting it done. Each one is tied to a moment where plans usually stall.
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: C.border }}>
            {[
              { img: b1Image, tag: 'Bonus 1 · Book', val: '₦5,000', t: 'Productivity Management Method', when: 'Use it when:', d: 'the plan is made but the week is chaos. Systems to sort priorities, build routines and track output.' },
              { img: b2Image, tag: 'Bonus 2 · Book', val: '₦5,000', t: 'Organizational Leadership Method', when: 'Use it when:', d: 'you need people to follow the plan. How to communicate decisions, delegate and lead change.' },
              { img: b3Image, tag: 'Bonus 3 · Templates', val: '₦5,000', t: 'Management Template Kit', when: 'Use it when:', d: 'you want to start today, not design forms. Editable templates for processes, KPIs and action plans.' },
              { img: b4Image, tag: 'Bonus 4 · Book', val: '₦3,750', t: 'Decision Criteria', when: 'Use it when:', d: 'you have two good options and cannot choose. A scoring guide for feasibility, impact, effort and risk.' },
              { img: b5Image, tag: 'Bonus 5 · Book', val: '₦3,750', t: "The Consultant's Mindset", when: 'Use it when:', d: 'you want to sound and think like a pro. Hypothesis-led thinking, sharp questions, building client trust.' },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 40}>
                <div style={{ backgroundColor: C.white, display: 'grid', gridTemplateColumns: '220px 1fr', alignItems: 'stretch' }} className="sc-bonus-row">
                  <div style={{ backgroundColor: C.off, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', borderRight: `1px solid ${C.border}` }}>
                    <img src={b.img} alt={b.t} style={{ width: '100%', maxWidth: '140px', height: '180px', objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.15))' }} />
                  </div>
                  <div style={{ padding: '36px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold }}>{b.tag}</span>
                      <span style={{ fontSize: '13px', color: C.subtle }}>Worth {b.val}</span>
                    </div>
                    <p style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 800, color: C.ink, lineHeight: 1.25, margin: 0 }}>{b.t}</p>
                    <p style={{ fontSize: '16px', color: C.muted, margin: 0, lineHeight: 1.7 }}>
                      <strong style={{ color: C.ink, fontWeight: 700 }}>{b.when}</strong> {b.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ════════════════════════════════════ */}
      <section style={{ backgroundColor: C.off, padding: '120px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px', marginBottom: '48px' }}>
          <Reveal>
            <Eye t="What Readers Say" />
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
              From the people who've used it.
            </h2>
          </Reveal>
        </div>

        <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '4px 48px 24px', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="sc-testi-scroll">
          {[
            { photo: thankgodPhoto, outcome: 'Changed how he advises clients', q: 'I have read a lot of business books, but what I like about Think Like a Consultant is how practical it is. It gives you a simple way to look at a business problem, break it down and know what to do next.', n: 'ThankGod Akpa', t: 'Founder · Impakt100' },
            { photo: petersonPhoto, outcome: 'Applied it the same week', q: 'The ideas are simple, but they make you think differently. It has changed the way I approach some of the decisions I make in business.', n: 'Peterson Akodi', t: 'Co-Founder · SPacebox' },
            { photo: davidPhoto, outcome: 'Restructured how he diagnoses problems', q: "Sometimes the problem is not that you don't have a solution. The problem is that you have not properly understood the problem. This book gives you a practical process for thinking through difficult situations.", n: 'David Utulor', t: 'Director · Mc Dave Schools' },
            { photo: augustPhoto, outcome: 'Uses it with every client now', q: 'As someone who works with businesses, I found the frameworks in this book very useful. It gives you a structured way to think when things are unclear instead of just relying on experience or instinct.', n: 'August Ojile', t: 'CEO · Cueball Digital Agency' },
          ].map((item, i) => (
            <div key={i} style={{ flex: '0 0 400px', scrollSnapAlign: 'start', backgroundColor: C.white, border: `1px solid ${C.border}`, padding: '36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Large photo + outcome */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <img src={item.photo} alt={item.n} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: C.ink, margin: 0 }}>{item.n}</p>
                  <p style={{ fontSize: '13px', color: C.subtle, margin: '2px 0 0' }}>{item.t}</p>
                </div>
              </div>
              {/* Outcome pill */}
              <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.gold, border: `1px solid ${C.gold}`, padding: '5px 12px', alignSelf: 'flex-start' }}>
                {item.outcome}
              </span>
              {/* Quote */}
              <p style={{ fontSize: '16px', lineHeight: 1.85, color: C.muted, margin: 0, flex: 1, fontStyle: 'italic' }}>"{item.q}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ WHO IT'S FOR ════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '120px 48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Reveal>
            <Eye t="Who It Is For" />
            <h2 style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.045em', lineHeight: 1.0, marginBottom: '16px' }}>
              Who it is for
            </h2>
            <p style={{ fontSize: '18px', color: C.muted, marginBottom: '56px', maxWidth: '500px' }}>
              This book suits people who own a problem and want a repeatable way to solve it.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: C.border }} className="sc-who">
            <Reveal>
              <div style={{ backgroundColor: C.white, padding: '48px' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.gold, marginBottom: '20px' }}>Good fit</p>
                {['A business owner who wants fixed criteria for big decisions', 'A manager or team lead who must organise a messy problem', 'A consultant or freelancer who wants a structure for client projects', 'A business student who wants consulting tools without jargon'].map((item, i, arr) => (
                  <div key={i} style={{ padding: '16px 0', borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : 'none', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.gold, fontWeight: 900, flexShrink: 0, fontSize: '16px' }}>✓</span>
                    <p style={{ fontSize: '16px', color: C.ink, margin: 0, lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div style={{ backgroundColor: C.off, padding: '48px' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.subtle, marginBottom: '20px' }}>Not for you if</p>
                {['You want a magic formula that works without thinking or effort', 'You want a shortcut around learning the process', 'You prefer to keep improvising every problem from zero'].map((item, i, arr) => (
                  <div key={i} style={{ padding: '16px 0', borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : 'none', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.subtle, fontWeight: 900, flexShrink: 0, fontSize: '16px' }}>·</span>
                    <p style={{ fontSize: '16px', color: C.muted, margin: 0, lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
                <p style={{ fontSize: '16px', fontWeight: 700, color: C.ink, marginTop: '24px', lineHeight: 1.5 }}>
                  The method is simple, but it only pays off when you apply it to a real problem.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ OFFER ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.black, padding: '120px 48px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <Eye t="The Offer" light />
            <h2 style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, color: C.white, letterSpacing: '-0.045em', lineHeight: 1.0, marginBottom: '48px' }}>
              The full system plus five bonuses, one payment.
            </h2>
          </Reveal>
          <Reveal delay={40}>
            <img src={stackImage} alt="Complete bundle" style={{ width: '100%', maxWidth: '520px', display: 'block', margin: '0 auto 56px', filter: 'drop-shadow(0 24px 64px rgba(0,0,0,0.7))' }} />
          </Reveal>
          <Reveal delay={80}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'left', marginBottom: '0' }}>
              {[
                { label: 'Think Like a Consultant (6-step system, 25+ frameworks, solved case)', val: '₦8,750', bold: true },
                { label: 'Bonus 1: Productivity Management Method', val: '₦5,000' },
                { label: 'Bonus 2: Organizational Leadership Method', val: '₦5,000' },
                { label: 'Bonus 3: Management Template Kit', val: '₦5,000' },
                { label: 'Bonus 4: Decision Criteria', val: '₦3,750' },
                { label: "Bonus 5: The Consultant's Mindset", val: '₦3,750' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)', gap: '16px' }}>
                  <p style={{ fontSize: '15px', fontWeight: row.bold ? 700 : 400, color: row.bold ? C.white : 'rgba(255,255,255,0.5)', margin: 0 }}>
                    {row.bold ? <em>{row.label}</em> : row.label}
                  </p>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)', margin: 0, flexShrink: 0, textDecoration: 'line-through' }}>{row.val}</p>
                </div>
              ))}

              {/* Price block */}
              <div style={{ padding: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 'clamp(52px, 8vw, 80px)', fontWeight: 900, color: C.white, letterSpacing: '-0.05em', lineHeight: 1 }}>₦12,500</span>
                  <span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.25)', textDecoration: 'line-through' }}>₦31,250</span>
                  <span style={{ backgroundColor: C.red, color: C.white, fontSize: '13px', fontWeight: 800, padding: '6px 14px', letterSpacing: '0.06em' }}>60% OFF</span>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)', marginBottom: '28px' }}>60% off · you save ₦18,750</p>
                <Cta text="Get the book + 5 bonuses for ₦12,500 →" full />
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', marginTop: '12px', textAlign: 'center', letterSpacing: '0.03em' }}>
                  One payment · Instant download · No subscription · Launch price ends soon
                </p>
              </div>

              {/* Guarantee */}
              <div style={{ padding: '28px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{ fontSize: '15px', fontWeight: 700, color: C.white, marginBottom: '8px' }}>The "one real problem" guarantee</p>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.75 }}>
                  Run steps 1 to 3 on a real problem. If you don't finish with a clearer problem and a sharper list of priorities, email within 30 days for a full refund. No forms. You keep the files.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '120px 48px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '48px' }}>
              Questions before you buy
            </h2>
          </Reveal>
          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {[
              { q: 'What exactly do I receive, and in what format?', a: 'The main book plus five bonuses, delivered as a digital download. Templates are editable.' },
              { q: 'How do I get it?', a: 'Immediately after payment, by download link and email. Nothing is shipped.' },
              { q: 'I have no consulting background. Will I keep up?', a: 'Yes. Every framework is explained in plain words and shown on one business case. No prior knowledge needed.' },
              { q: 'Will it work for my kind of business?', a: 'The method is about how you think, so it applies to any business, team or project. The steps are the same everywhere.' },
              { q: 'Is this a subscription?', a: 'No. You pay once, and the files are yours for good.' },
              { q: 'How long will it take me to read?', a: 'Most readers apply steps 1 to 3 to a live problem on the first day.' },
              { q: 'What if it is not for me?', a: 'Email us within 30 days for a full refund. See the guarantee above.' },
            ].map((f, i) => <Reveal key={i} delay={i * 20}><FAQ q={f.q} a={f.a} /></Reveal>)}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═══════════════════════════════════════ */}
      <section style={{ backgroundColor: C.black, padding: '140px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(36px, 6.5vw, 72px)', fontWeight: 900, color: C.white, letterSpacing: '-0.045em', lineHeight: 1.0, marginBottom: '24px' }}>
              Your next problem is coming whether you have a method or not.
            </h2>
            <p style={{ fontSize: 'clamp(17px, 1.8vw, 20px)', color: 'rgba(255,255,255,0.45)', marginBottom: '48px', maxWidth: '520px', margin: '0 auto 48px' }}>
              You can meet it with a hunch and a meeting, or with a structure that gets you from confusion to a plan in six steps.
            </p>
            <Cta text="Get Think Like a Consultant + 5 bonuses, ₦12,500 →" />
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.2)', marginTop: '24px', lineHeight: 1.7, maxWidth: '480px', margin: '24px auto 0' }}>
              <strong style={{ color: 'rgba(255,255,255,0.3)' }}>P.S.</strong> You risk nothing. Run steps 1 to 3 on one real problem. If it doesn't sharpen your thinking, you get a full refund within 30 days. The cost of another month of guessing is almost certainly higher than ₦12,500.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════ */}
      <footer style={{ backgroundColor: '#050505', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', margin: 0, letterSpacing: '0.04em' }}>THINK LIKE A CONSULTANT</p>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.15)', margin: 0 }}>© {new Date().getFullYear()} Quick Learn Plus · All rights reserved</p>
      </footer>

      {/* ══ STICKY ══════════════════════════════════════════ */}
      <div className="sc-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 300,
        display: 'none', padding: '14px 24px',
        backgroundColor: C.black, borderTop: `1px solid rgba(255,255,255,0.1)`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
        boxShadow: '0 -4px 32px rgba(0,0,0,0.5)',
      }}>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: C.goldBg, color: C.black, fontSize: '15px', fontWeight: 800, padding: '17px', textDecoration: 'none', letterSpacing: '-0.01em' }}>
          Get the bundle — ₦12,500 →
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .sc-testi-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 900px) {
          .sc-hero   { grid-template-columns: 1fr !important; }
          .sc-who    { grid-template-columns: 1fr !important; }
          .sc-step-row { grid-template-columns: 48px 1fr !important; }
          .sc-bonus-row { grid-template-columns: 160px 1fr !important; }
        }
        @media (max-width: 640px) {
          .sc-stats  { grid-template-columns: 1fr 1fr !important; }
          .sc-3col   { grid-template-columns: 1fr !important; }
          .sc-fw-row { grid-template-columns: 1fr !important; }
          .sc-bonus-row { grid-template-columns: 1fr !important; }
          .sc-sticky { display: block !important; }
        }
      `}</style>
    </div>
  )
}
