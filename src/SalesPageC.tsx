import { useRef, useState, useEffect } from 'react'
import consultantCover from './-like-a-consultant-cover.png'
import bundleImage    from './Quick Learn Plus Business Bundle.png'
import thankgodPhoto  from './ThankGod-Akpa.jpeg'
import petersonPhoto  from './Peterson-Akodi.jpeg'
import davidPhoto     from './David-Utulor.jpeg'
import augustPhoto    from './Yusuf Kabiru.jpeg'

/* ─── Tokens — exact from PDF design ─────────────────── */
const C = {
  navy:    '#0D1B3E',   /* deep navy — primary dark */
  navyAlt: '#122144',   /* slightly lighter navy for cards */
  bg:      '#FFFFFF',
  cream:   '#F5F3EE',   /* warm off-white sections */
  ink:     '#0D1B3E',
  body:    '#3D3B52',
  muted:   '#7B79A0',
  border:  '#E4E3EF',
  yellow:  '#D4A017',   /* warm gold/amber — exact from PDF */
  yellowBg:'#F5C842',   /* lighter yellow for btn bg */
  red:     '#CC2200',
  green:   '#1A6B4A',
  tagBg:   '#EEF0FF',
  tagInk:  '#2D2A6E',
}

const SELAR = 'https://selar.com/978m069577'

/* ─── Helpers ─────────────────────────────────────────── */
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
      transform: vis ? 'none' : 'translateY(16px)',
      transition: `opacity .55s ease ${delay}ms, transform .55s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── CTA button — gold from PDF ─────────────────────── */
function CTABtn({ text, id, full }: { text: string; id?: string; full?: boolean }) {
  return (
    <a href={SELAR} target="_blank" rel="noopener noreferrer" id={id}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: C.yellowBg, color: C.navy,
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: '16px', fontWeight: 700, letterSpacing: '0.01em',
        padding: '18px 36px', textDecoration: 'none',
        transition: 'opacity 0.15s, transform 0.1s',
        cursor: 'pointer', lineHeight: 1.2,
        width: full ? '100%' : 'auto',
        boxSizing: 'border-box' as const,
        borderRadius: '6px',
        gap: '8px',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
    >
      {text}
    </a>
  )
}

/* ─── Section label — small amber uppercase ──────────── */
function Label({ text, light }: { text: string; light?: boolean }) {
  return (
    <p style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '12px', fontWeight: 700,
      letterSpacing: '0.16em', textTransform: 'uppercase',
      color: light ? C.yellowBg : C.yellow,
      marginBottom: '16px',
    }}>
      {text}
    </p>
  )
}

/* ─── FAQ ─────────────────────────────────────────────── */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}`, cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', gap: '12px' }}>
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', fontWeight: 700, color: C.ink, margin: 0, lineHeight: 1.4 }}>{q}</p>
        <span style={{ color: C.muted, fontSize: '20px', flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none', lineHeight: 1 }}>+</span>
      </div>
      {open && <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', lineHeight: 1.8, color: C.body, paddingBottom: '18px', margin: 0 }}>{a}</p>}
    </div>
  )
}

/* ─── PAGE ────────────────────────────────────────────── */
export default function SalesPageC() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 500)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ backgroundColor: C.bg, color: C.ink, fontFamily: "'Inter', system-ui, sans-serif", lineHeight: 1.65 }}>

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#000000', padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 480px', gap: '56px', alignItems: 'center' }} className="oc-hero-grid">

          {/* Left copy */}
          <div>
            <Reveal>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '13px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>
                FOR OWNERS · MANAGERS · CONSULTANTS · STUDENTS
              </p>
              <h1 style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 'clamp(40px, 6.5vw, 72px)',
                fontWeight: 900, lineHeight: 1.0,
                color: '#FFFFFF', letterSpacing: '-0.04em',
                marginBottom: '0',
              }}>
                Walk into any<br />
                business problem<br />
                and know exactly<br />
                <span style={{ color: C.yellowBg }}>where to start.</span>
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(17px, 2vw, 21px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', margin: '28px 0 10px', maxWidth: '520px', fontWeight: 500 }}>
                <em>Think Like a Consultant</em> gives you a 6-step method to find the real cause of a problem, compare your options fairly and turn the decision into a plan with owners, deadlines and numbers.
              </p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(17px, 2vw, 21px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', marginBottom: '36px', fontWeight: 500 }}>
                Plain language. Real examples. Templates you can use this week.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <CTABtn text="Get Think Like a Consultant, ₦12,500 →" id="order" />
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.3)', marginTop: '14px', letterSpacing: '0.02em' }}>
                One payment · Instant download · No subscription
              </p>
            </Reveal>
          </div>

          {/* Right: bundle image */}
          <Reveal delay={140}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={bundleImage}
                alt="Quick Learn Plus Business Bundle"
                style={{
                  width: '100%',
                  maxWidth: '460px',
                  display: 'block',
                  filter: 'drop-shadow(0 24px 64px rgba(0,0,0,0.7))',
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ STATS STRIP ═══════════════════════════════════ */}
      <section style={{ backgroundColor: C.yellow, borderBottom: `1px solid rgba(0,0,0,0.1)` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="oc-stats-grid">
          {[
            { n: '6 steps', l: 'from problem to plan' },
            { n: '25+ frameworks', l: 'explained with examples' },
            { n: '5 bonuses', l: 'included at no extra cost' },
            { n: '30 days', l: 'money-back guarantee' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '20px 24px', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.12)' : 'none' }}>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 900, color: C.navy, margin: '0 0 3px', letterSpacing: '-0.02em' }}>{s.n}</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', color: 'rgba(13,27,62,0.65)', margin: 0, letterSpacing: '0.01em' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ THE PROBLEM ═══════════════════════════════════ */}
      <section style={{ backgroundColor: C.cream, padding: '80px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Reveal>
            <Label text="The Problem" />
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 900, color: C.navy, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '24px', maxWidth: '720px' }}>
              Smart people still guess, because nobody ever taught them a process for thinking through a problem.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.8, color: C.body, marginBottom: '40px', maxWidth: '640px' }}>
              Sales drop. A key hire quits. Margins shrink. The reflex is to grab the nearest fix: a discount, a new tool, a team meeting. Weeks later the symptom is back, because the cause was never found.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '40px' }} className="oc-3col">
              {[
                { h: 'Decisions made on mood', b: 'Without fixed criteria, the loudest opinion or the latest scare wins.' },
                { h: 'Busy, but not moving', b: 'Effort is spread across ten things, and nobody can say which one matters most.' },
                { h: 'Good ideas that die on paper', b: "The plan never gets owners, dates or numbers, so nothing happens." },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, padding: '24px 20px', borderRadius: '4px' }}>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', fontWeight: 700, color: C.navy, marginBottom: '8px', lineHeight: 1.3 }}>{item.h}</p>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', color: C.body, margin: 0, lineHeight: 1.7 }}>{item.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 700, color: C.navy, lineHeight: 1.6, maxWidth: '680px' }}>
              Consultants are paid well for one thing: they replace guessing with structure. That structure is a learnable skill, and it fits in one book.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ THE METHOD ════════════════════════════════════ */}
      <section style={{ backgroundColor: C.navy, padding: '80px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Reveal>
            <Label text="The Method" light />
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 900, color: C.bg, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '16px', maxWidth: '720px' }}>
              Six steps take you from "something is wrong" to "here is exactly what to do."
            </h2>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', marginBottom: '48px', maxWidth: '580px' }}>
              Each step has its own tool in the book and its own clear output, so you always know whether you are done.
            </p>
          </Reveal>

          {/* 2×3 step cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '40px' }} className="oc-steps-grid">
            {[
              { n: '1', t: 'Define', d: 'Turn a vague worry into one precise sentence: "I don\'t yet know ___, which is stopping me from ___."', tool: 'Tool: the Fog Audit. You leave with a problem you can actually solve.' },
              { n: '2', t: 'Structure', d: 'Break the problem into pieces with no overlaps and no gaps.', tool: 'Tool: MECE. You leave with a clean map of what to check.' },
              { n: '3', t: 'Prioritize', d: 'Find the few causes that explain most of the damage.', tool: 'Tool: the 80/20 Rule. You leave with a short list of where to dig first.' },
              { n: '4', t: 'Analyze', d: 'Trace the symptom to a root cause using evidence, not assumption.', tool: 'Tools: KPI trees and the Five Whys. You leave with the real cause.' },
              { n: '5', t: 'Synthesize', d: 'Pull your findings into one clear story and a recommendation.', tool: 'Tool: Situation, Complication, Question, Answer. You leave with a case others can follow.' },
              { n: '6', t: 'Communicate and act', d: 'Turn the decision into tasks, owners, deadlines and a definition of done.', tool: 'Tool: the Action Plan Builder. You leave with a plan someone can start on Monday.' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 40}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px 22px', borderRadius: '4px' }}>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '28px', fontWeight: 900, color: C.yellowBg, lineHeight: 1, marginBottom: '10px', letterSpacing: '-0.03em' }}>{step.n}</p>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: 800, color: C.bg, marginBottom: '8px' }}>{step.t}</p>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '12px' }}>{step.d}</p>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '13px', color: C.yellowBg, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{step.tool}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <CTABtn text="Start with step one today →" />
          </Reveal>
        </div>
      </section>

      {/* ══ INSIDE THE BOOK ═══════════════════════════════ */}
      <section style={{ backgroundColor: C.cream, padding: '80px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Inside the Book" />
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 900, color: C.navy, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '16px' }}>
              A working system, not a collection of tips.
            </h2>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.8, color: C.body, marginBottom: '40px', maxWidth: '580px' }}>
              Every framework is explained in plain words, drawn as a visual and applied to one running business case, so you see it used before you try it.
            </p>
          </Reveal>

          {/* Framework table */}
          <Reveal delay={60}>
            <div style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, borderRadius: '4px', overflow: 'hidden', marginBottom: '24px' }}>
              {[
                { step: 'Frame', tools: 'Problem statement, OKRs, KPIs', output: 'A clear problem and a success measure' },
                { step: 'Break down', tools: 'MECE, issue trees, Pyramid Principle', output: 'A structured map of the problem' },
                { step: 'Focus', tools: "80/20 Rule, SWOT, PESTLE, Porter's Five Forces, TAM · SAM · SOM", output: 'A ranked list of where to look' },
                { step: 'Test', tools: 'Root Cause Analysis, Process Mapping, Value Chain', output: 'The evidenced root cause' },
                { step: 'Decide', tools: 'BCG Matrix, Ansoff Matrix, Pricing Strategy, decision criteria', output: 'One recommended option' },
                { step: 'Plan', tools: 'Kanban, Gantt, Stakeholder Mapping', output: 'Actions, owners, deadlines, KPIs' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 1fr', borderBottom: i < 5 ? `1px solid ${C.border}` : 'none', alignItems: 'center' }} className="oc-fw-row">
                  <div style={{ padding: '14px 20px', borderRight: `1px solid ${C.border}` }}>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', fontWeight: 800, color: C.navy, margin: 0 }}>{row.step}</p>
                  </div>
                  <div style={{ padding: '14px 20px', borderRight: `1px solid ${C.border}` }}>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '13px', color: C.body, margin: 0, lineHeight: 1.5 }}>{row.tools}</p>
                  </div>
                  <div style={{ padding: '14px 20px' }}>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '13px', fontWeight: 700, color: C.navy, margin: 0 }}>{row.output}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', color: C.body, lineHeight: 1.7 }}>
              <strong style={{ color: C.navy }}>Also included:</strong> a fully solved business case from first question to final recommendation, and fill-in templates for every step.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ BONUSES ═══════════════════════════════════════ */}
      <section style={{ backgroundColor: C.cream, padding: '80px 32px', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Reveal>
            <Label text="5 Bonuses Included" />
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 900, color: C.navy, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '12px' }}>
              Deciding is half the job. The bonuses cover the other half: getting it done.
            </h2>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.8, color: C.body, marginBottom: '40px', maxWidth: '560px' }}>
              Each one is tied to a moment where plans usually stall.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="oc-bonus-grid">
            {[
              { tag: 'BONUS 1 · BOOK', val: 'Worth ₦5,000', t: 'Productivity Management Method', when: 'Use it when: the plan is made but the week is chaos.', d: 'Systems to sort priorities, build routines and track output.' },
              { tag: 'BONUS 2 · BOOK', val: 'Worth ₦5,000', t: 'Organizational Leadership Method', when: 'Use it when: you need people to follow the plan.', d: 'How to communicate decisions, delegate, give feedback and lead change.' },
              { tag: 'BONUS 3 · TEMPLATES', val: 'Worth ₦5,000', t: 'Management Template Kit', when: 'Use it when: you want to start today, not design forms.', d: 'Editable templates for processes, KPIs and action plans.' },
              { tag: 'BONUS 4 · BOOK', val: 'Worth ₦3,750', t: 'Decision Criteria', when: 'Use it when: you have two good options and cannot choose.', d: 'A scoring guide for feasibility, impact, effort, risk and assumptions.' },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 50}>
                <div style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, padding: '24px 22px', borderRadius: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.yellow, margin: 0 }}>{b.tag}</p>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', color: C.muted, margin: 0, whiteSpace: 'nowrap' }}>{b.val}</p>
                  </div>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: 800, color: C.navy, marginBottom: '8px', lineHeight: 1.3 }}>{b.t}</p>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', color: C.body, margin: 0, lineHeight: 1.7 }}>
                    <strong style={{ color: C.navy }}>{b.when}</strong> {b.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Bonus 5 — full width */}
          <Reveal delay={200}>
            <div style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, padding: '24px 22px', borderRadius: '4px', marginTop: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.yellow, margin: 0 }}>BONUS 5 · BOOK</p>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', color: C.muted, margin: 0 }}>Worth ₦3,750</p>
              </div>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: 800, color: C.navy, marginBottom: '8px' }}>The Consultant's Mindset</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', color: C.body, margin: 0, lineHeight: 1.7 }}>
                <strong style={{ color: C.navy }}>Use it when: you want to sound and think like a pro.</strong> Hypothesis-led thinking, sharp questions, building client trust.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════ */}
      <section style={{ backgroundColor: C.bg, padding: '80px 0', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 32px', marginBottom: '32px' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, color: C.navy, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              What readers say
            </h2>
          </Reveal>
        </div>

        {/* Scrolling row */}
        <div style={{
          display: 'flex', overflowX: 'auto', gap: '16px',
          padding: '4px 32px 20px',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }} className="oc-testi-scroll">
          {[
            { photo: thankgodPhoto, outcome: 'Changed how he advises clients', q: 'I have read a lot of business books, but what I like about Think Like a Consultant is how practical it is. It gives you a simple way to look at a business problem, break it down and know what to do next.', n: 'ThankGod Akpa', t: 'Founder · Impakt100' },
            { photo: petersonPhoto, outcome: 'Applied the framework immediately', q: 'The ideas are simple, but they make you think differently. It has changed the way I approach some of the decisions I make in business.', n: 'Peterson Akodi', t: 'Co-Founder · SPacebox' },
            { photo: davidPhoto, outcome: 'Restructured how he diagnoses problems', q: "Sometimes the problem is not that you don't have a solution. The problem is that you have not properly understood the problem. This book gives you a practical process for thinking through difficult situations.", n: 'David Utulor', t: 'Director · Mc Dave Schools' },
            { photo: augustPhoto, outcome: 'Now uses it with every client', q: 'As someone who works with businesses, I found the frameworks in this book very useful. It gives you a structured way to think when things are unclear instead of just relying on experience or instinct.', n: 'August Ojile', t: 'CEO · Cueball Digital Agency' },
          ].map((item, i) => (
            <div key={i} style={{
              flex: '0 0 300px', scrollSnapAlign: 'start',
              backgroundColor: C.cream,
              border: `1px solid ${C.border}`,
              borderRadius: '4px',
              padding: '24px 20px',
              display: 'flex', flexDirection: 'column', gap: '14px',
            }}>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.yellow, margin: 0 }}>{item.outcome}</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', lineHeight: 1.8, color: C.body, margin: 0, flex: 1 }}>"{item.q}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: `1px solid ${C.border}`, paddingTop: '14px' }}>
                <img src={item.photo} alt={item.n} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '13px', fontWeight: 700, color: C.navy, margin: 0 }}>{item.n}</p>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', color: C.muted, margin: 0 }}>{item.t}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', paddingTop: '8px' }}>
          {[0,1,2,3].map(i => <div key={i} style={{ width: i === 0 ? '18px' : '6px', height: '5px', borderRadius: '3px', backgroundColor: i === 0 ? C.navy : C.border }} />)}
        </div>
      </section>

      {/* ══ WHO IT'S FOR ══════════════════════════════════ */}
      <section style={{ backgroundColor: C.cream, padding: '80px 32px', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 900, color: C.navy, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '12px' }}>
              Who it is for
            </h2>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.8, color: C.body, marginBottom: '32px' }}>
              This book suits people who own a problem and want a repeatable way to solve it.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="oc-who-grid">
            <Reveal>
              <div style={{ backgroundColor: C.bg, border: `2px solid ${C.yellow}`, padding: '28px 24px', borderRadius: '4px' }}>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: 800, color: C.navy, marginBottom: '20px' }}>It is a good fit if you are</p>
                {[
                  'A business owner who wants fixed criteria for big decisions',
                  'A manager or team lead who must organise a messy problem and knows where to begin',
                  'A consultant or freelancer who wants a structure for client projects',
                  'A business student who wants consulting tools explained without jargon',
                ].map((item, i) => (
                  <div key={i} style={{ padding: '10px 0', borderBottom: i < 3 ? `1px solid ${C.border}` : 'none', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.yellow, fontWeight: 900, flexShrink: 0, fontSize: '14px', paddingTop: '1px' }}>·</span>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', color: C.body, margin: 0, lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, padding: '28px 24px', borderRadius: '4px' }}>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: 800, color: C.navy, marginBottom: '20px' }}>It is not for you if you want</p>
                {[
                  'A magic formula that works without any thinking or effort',
                  'A shortcut around learning the process',
                  'To keep improvising every problem from zero',
                ].map((item, i) => (
                  <div key={i} style={{ padding: '10px 0', borderBottom: i < 2 ? `1px solid ${C.border}` : 'none', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.muted, fontWeight: 900, flexShrink: 0, fontSize: '14px', paddingTop: '1px' }}>·</span>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', color: C.muted, margin: 0, lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', fontWeight: 700, color: C.navy, marginTop: '16px', lineHeight: 1.5, margin: '16px 0 0' }}>
                  The method is simple, but it only pays off when you apply it to a real problem.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ THE OFFER / PRICING ═══════════════════════════ */}
      <section style={{ backgroundColor: C.navy, padding: '80px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Reveal>
            <Label text="The Offer" light />
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 900, color: C.bg, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '40px' }}>
              The full system plus five bonuses, one payment.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0', overflow: 'hidden', maxWidth: '680px' }}>
              {/* Line items */}
              <div style={{ padding: '24px 28px' }}>
                {[
                  { label: 'Think Like a Consultant: the 6-step system, 25+ frameworks, solved case, step templates', val: '₦8,750', bold: true },
                  { label: 'Bonus 1: Productivity Management Method', val: '₦5,000' },
                  { label: 'Bonus 2: Organizational Leadership Method', val: '₦5,000' },
                  { label: 'Bonus 3: Management Template Kit', val: '₦5,000' },
                  { label: 'Bonus 4: Decision Criteria', val: '₦3,750' },
                  { label: "Bonus 5: The Consultant's Mindset", val: '₦3,750' },
                  { label: 'Total value', val: '₦31,250', total: true },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.07)' : 'none', gap: '12px' }}>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: row.total ? '15px' : '14px', fontWeight: row.bold || row.total ? 700 : 400, color: row.total ? C.bg : 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.4 }}>
                      {row.bold ? <em>{row.label}</em> : row.label}
                    </p>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', fontWeight: row.total ? 700 : 400, color: row.total ? C.bg : 'rgba(255,255,255,0.4)', margin: 0, flexShrink: 0 }}>{row.val}</p>
                  </div>
                ))}
              </div>

              {/* Price highlight */}
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Your price today</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
                    <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(36px, 6vw, 52px)', fontWeight: 900, color: C.bg, letterSpacing: '-0.03em', lineHeight: 1 }}>₦12,500</span>
                    <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', color: 'rgba(255,255,255,0.3)', textDecoration: 'line-through' }}>₦31,250</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>60% off · you save ₦18,750</p>
                </div>
                <div style={{ backgroundColor: C.red, color: '#fff', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', fontWeight: 800, padding: '12px 20px', borderRadius: '4px', letterSpacing: '0.04em' }}>
                  60% OFF
                </div>
              </div>

              {/* CTA */}
              <div style={{ padding: '20px 28px' }}>
                <CTABtn text="Get the book + 5 bonuses for ₦12,500 →" full />
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '10px', textAlign: 'center', letterSpacing: '0.02em' }}>
                  One payment · Instant download · No subscription · The ₦12,500 launch price ends soon.
                </p>
              </div>

              {/* Guarantee */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 28px' }}>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', fontWeight: 700, color: C.bg, marginBottom: '8px' }}>The "one real problem" guarantee</p>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.75 }}>
                  Download it and run steps 1 to 3 on a real problem you are facing right now. If you do not finish with a clearer problem and a sharper list of priorities, email us within 30 days and we will refund every cent. No forms, no interrogation. You keep the files.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.bg, padding: '80px 32px', borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 900, color: C.navy, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '32px' }}>
              Questions before you buy
            </h2>
          </Reveal>
          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {[
              { q: 'What exactly do I receive, and in what format?', a: 'The main book plus five bonuses, delivered as a digital download. Templates are editable.' },
              { q: 'How do I get it?', a: 'Immediately after payment, by download link and email. Nothing is shipped.' },
              { q: 'I have no consulting background. Will I keep up?', a: 'Yes. Every framework is explained in plain words and shown on one business case. No prior knowledge is needed.' },
              { q: 'Will it work for my kind of business?', a: 'The method is about how you think, so it applies to any business, team or project. The steps are the same everywhere.' },
              { q: 'Is this a subscription?', a: 'No. You pay once, and the files are yours for good.' },
              { q: 'How long will it take me to read?', a: 'Most readers apply steps 1 to 3 to a live problem on the first day.' },
              { q: 'What if it is not for me?', a: 'Email us within 30 days for a full refund. See the guarantee above.' },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 20}>
                <FAQ q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════ */}
      <section style={{ backgroundColor: C.navy, padding: '88px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(26px, 5vw, 48px)', fontWeight: 900, color: C.bg, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '20px' }}>
              Your next problem is coming whether you have a method or not.
            </h2>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: '36px' }}>
              You can meet it with a hunch and a meeting, or with a structure that gets you from confusion to a plan in six steps.
            </p>
            <CTABtn text="Get Think Like a Consultant + 5 bonuses, ₦12,500 →" />
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginTop: '28px', lineHeight: 1.7 }}>
              <strong style={{ color: 'rgba(255,255,255,0.4)' }}>P.S.</strong> You risk nothing. Run steps 1 to 3 on one real problem, and if it does not sharpen your thinking, you get a full refund within 30 days. The cost of another month of guessing is almost certainly higher than ₦12,500.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════ */}
      <footer style={{ backgroundColor: C.navy, padding: '24px 32px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
          © Quick Learn Plus · Think Like a Consultant
        </p>
      </footer>

      {/* ══ STICKY MOBILE ═════════════════════════════════= */}
      <div className="oc-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 300,
        display: 'none', padding: '12px 16px',
        backgroundColor: C.navy, borderTop: `2px solid ${C.yellowBg}`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: C.yellowBg, color: C.navy, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', fontWeight: 800, padding: '15px', textDecoration: 'none', borderRadius: '4px' }}>
          Get the bundle → ₦12,500
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .oc-testi-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 800px) {
          .oc-hero-grid  { grid-template-columns: 1fr !important; }
          .oc-steps-grid { grid-template-columns: 1fr !important; }
          .oc-who-grid   { grid-template-columns: 1fr !important; }
          .oc-3col       { grid-template-columns: 1fr !important; }
          .oc-bonus-grid { grid-template-columns: 1fr !important; }
          .oc-fw-row     { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .oc-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .oc-sticky     { display: block !important; }
        }
      `}</style>
    </div>
  )
}
