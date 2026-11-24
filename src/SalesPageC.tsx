import { useRef, useState, useEffect } from 'react'
import consultantCover from './-like-a-consultant-cover.png'
import thankgodPhoto  from './ThankGod-Akpa.jpeg'
import petersonPhoto  from './Peterson-Akodi.jpeg'
import davidPhoto     from './David-Utulor.jpeg'
import augustPhoto    from './Yusuf Kabiru.jpeg'

/* ─── Tokens — reference design ──────────────────────── */
const C = {
  bg:        '#FFFFFF',
  surface:   '#F8F8FA',
  ink:       '#0D0D1A',
  body:      '#3D3B52',
  muted:     '#8A8AA8',
  border:    '#E4E4EE',
  borderDark:'#CBCBDF',
  accent:    '#1A6B4A',   /* green — section labels */
  navy:      '#0D1A3A',   /* deep navy headlines */
  yellow:    '#FFD600',   /* CTA buttons */
  yellowHov: '#E6C000',
  tagBg:     '#EEF0FF',
  tagInk:    '#2D2A6E',
  purple:    '#2D1B69',   /* testimonial accents */
  lightGrey: '#F4F3FC',
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
      transform: vis ? 'none' : 'translateY(18px)',
      transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── CTA button ──────────────────────────────────────── */
function CTABtn({ text, id, full }: { text: string; id?: string; full?: boolean }) {
  return (
    <a href={SELAR} target="_blank" rel="noopener noreferrer" id={id}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: C.navy, color: '#fff',
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: '15px', fontWeight: 700,
        letterSpacing: '0.01em',
        padding: '16px 36px', textDecoration: 'none',
        transition: 'opacity 0.15s, transform 0.1s',
        cursor: 'pointer', lineHeight: 1.2,
        width: full ? '100%' : 'auto',
        boxSizing: 'border-box' as const,
        gap: '8px',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
    >
      {text} <span style={{ fontSize: '16px' }}>→</span>
    </a>
  )
}

/* ─── Section label ───────────────────────────────────── */
function Label({ text }: { text: string }) {
  return (
    <p style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '12px', fontWeight: 700,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color: C.accent, marginBottom: '14px',
    }}>
      {text}
    </p>
  )
}

/* ─── Thin divider ─────────────────────────────────────── */
function Rule() { return <div style={{ height: '1px', backgroundColor: C.border }} /> }

/* ─── FAQ ─────────────────────────────────────────────── */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${C.border}`, cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', gap: '12px' }}>
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', fontWeight: 600, color: C.ink, margin: 0, lineHeight: 1.4 }}>{q}</p>
        <span style={{ color: C.muted, fontSize: '20px', fontWeight: 300, flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none', lineHeight: 1 }}>+</span>
      </div>
      {open && <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '14px', lineHeight: 1.8, color: C.body, paddingBottom: '18px', margin: 0 }}>{a}</p>}
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

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section style={{ padding: '72px 24px 64px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 220px', gap: '64px', alignItems: 'center' }} className="oc-hero-grid">

          <div>
            <Reveal>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.accent, marginBottom: '16px' }}>
                Think Like a Consultant
              </p>
              <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.1, color: C.navy, marginBottom: '20px', letterSpacing: '-0.03em' }}>
                From confusion<br />to a clear action plan.
              </h1>
              <p style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', fontWeight: 500, color: C.muted, marginBottom: '20px', letterSpacing: '0.02em' }}>
                For consultants · business owners · managers · advisors
              </p>
              <p style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.8, color: C.body, marginBottom: '12px', maxWidth: '500px' }}>
                Stop improvising. Think like a consultant.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.8, color: C.body, marginBottom: '32px', maxWidth: '500px' }}>
                A 6-step method to identify and evaluate the underlying causes of a business problem and turn it into a measurable, ready-to-execute plan.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                {[
                  { label: 'Understand:', desc: 'define the right problem and break it into clear, structured parts.' },
                  { label: 'Investigate:', desc: 'read the market, focus on what matters and evaluate possible root causes.' },
                  { label: 'Solve:', desc: 'compare options, select the best course of action and turn it into an executable plan.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: C.navy, flexShrink: 0 }}>{item.label}</span>
                    <span style={{ fontSize: '14px', color: C.body, lineHeight: 1.6 }}>{item.desc}</span>
                  </div>
                ))}
              </div>
              <CTABtn text="Get instant access" id="order" />
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ perspective: '800px', display: 'inline-block' }}>
                <img src={consultantCover} alt="Think Like a Consultant"
                  style={{
                    width: '200px', display: 'block',
                    borderRadius: '2px 6px 6px 2px',
                    boxShadow: '8px 16px 48px rgba(13,26,58,0.18), 2px 4px 10px rgba(13,26,58,0.1)',
                    transform: 'rotateY(-6deg)',
                    transformOrigin: 'left center',
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ STATS STRIP ═════════════════════════════════════ */}
      <section style={{ borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="oc-stats-grid">
          {[
            { n: '6 steps', l: 'From problem to recommendation' },
            { n: '25+', l: 'Frameworks explained with examples' },
            { n: '5 bonuses', l: '2 extra books + 3 resources' },
            { n: '30 days', l: 'Refund policy' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '22px 24px', borderRight: i < 3 ? `1px solid ${C.border}` : 'none' }}>
              <p style={{ fontSize: '16px', fontWeight: 800, color: C.navy, margin: '0 0 4px', letterSpacing: '-0.01em' }}>{s.n}</p>
              <p style={{ fontSize: '12px', color: C.muted, margin: 0, lineHeight: 1.4 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ THE PROBLEM ═════════════════════════════════════ */}
      <section style={{ padding: '72px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Label text="The starting point" />
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: C.navy, letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '12px' }}>
              Business problems rarely come with instructions.
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: C.body, marginBottom: '40px', maxWidth: '580px' }}>
              When something isn't working, the usual reaction is to jump straight to solutions. The symptom gets treated while the underlying cause remains unaddressed.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', backgroundColor: C.border }} className="oc-3col">
              {[
                { h: 'Decisions based on gut feeling', b: 'Without a clear framework, decisions depend on the mood of the day instead of consistent criteria.' },
                { h: 'Effort without focus', b: 'A lot of work spread across everything at once, with no clarity on what to move first.' },
                { h: 'Ideas that never get executed', b: 'Good intentions that stay on paper because they never become a concrete plan.' },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: C.surface, padding: '24px 22px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: C.ink, marginBottom: '8px', lineHeight: 1.35 }}>{item.h}</p>
                  <p style={{ fontSize: '13px', color: C.body, margin: 0, lineHeight: 1.7 }}>{item.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ marginTop: '32px', padding: '20px 24px', backgroundColor: C.surface, borderLeft: `3px solid ${C.navy}` }}>
              <p style={{ fontSize: '15px', fontWeight: 600, color: C.navy, margin: 0, lineHeight: 1.5 }}>
                Consulting frameworks bring structure to analysis and decision-making.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ THE SYSTEM ══════════════════════════════════════ */}
      <section style={{ padding: '72px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Label text="The system" />
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: C.navy, letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '12px' }}>
              One clear process, from start to finish.
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: C.body, marginBottom: '48px', maxWidth: '560px' }}>
              Six steps to work through a business challenge: from understanding what is happening to executing and measuring the result.
            </p>
          </Reveal>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { phase: 'Understand', n: '1', label: 'Define', desc: 'Agree on the exact problem, the goal and how success will be measured.' },
              { phase: 'Understand', n: '2', label: 'Structure', desc: 'Break the problem into clear, separate parts that can be analysed one by one.' },
              { phase: 'Investigate', n: '3', label: 'Prioritise', desc: 'Read the environment and focus the effort on the highest-priority areas.' },
              { phase: 'Investigate', n: '4', label: 'Analyse', desc: 'Test each branch and evaluate possible root causes using available data.' },
              { phase: 'Solve', n: '5', label: 'Synthesise', desc: 'Turn findings into options, compare them under the same criteria and choose one.' },
              { phase: 'Solve', n: '6', label: 'Recommend', desc: 'Turn the decision into a plan with actions, owners, deadlines and KPIs.' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 45}>
                <div style={{ display: 'grid', gridTemplateColumns: '100px 48px 1fr', gap: '0', borderBottom: `1px solid ${C.border}`, alignItems: 'stretch' }}>
                  {/* Phase label */}
                  <div style={{ padding: '20px 16px', display: 'flex', alignItems: 'center', borderRight: `1px solid ${C.border}` }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.accent }}>{step.phase}</span>
                  </div>
                  {/* Number */}
                  <div style={{ padding: '20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${C.border}` }}>
                    <span style={{ fontSize: '20px', fontWeight: 900, color: C.navy, lineHeight: 1 }}>{step.n}</span>
                  </div>
                  {/* Content */}
                  <div style={{ padding: '20px 24px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 800, color: C.navy, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{step.label}</p>
                    <p style={{ fontSize: '14px', color: C.body, margin: 0, lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div style={{ marginTop: '36px' }}>
              <CTABtn text="Get instant access" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FRAMEWORKS ══════════════════════════════════════ */}
      <section style={{ padding: '72px 24px', borderBottom: `1px solid ${C.border}`, backgroundColor: C.surface }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Inside the book" />
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: C.navy, letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '12px' }}>
              A complete system, not a handful of tips.
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: C.body, marginBottom: '32px', maxWidth: '540px' }}>
              More than 25 tools and frameworks used by consultants, explained in plain language, with examples applied to real business cases.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['OKRs · KPIs', '80/20 Rule', 'Root Cause Analysis', 'Pyramid Principle', 'Process Mapping', 'MECE', 'Value Chain', 'Kanban · Gantt', 'Pricing Strategy', 'BCG Matrix', 'Ansoff Matrix', 'TAM · SAM · SOM', 'SWOT', "Porter's Five Forces", 'PESTLE', 'Stakeholder Mapping', 'Issue Tree', 'Hypothesis Thinking', 'KPI Trees', 'Decision Matrix'].map((tag, i) => (
                <span key={i} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '13px', fontWeight: 600, color: C.tagInk, backgroundColor: C.tagBg, padding: '6px 14px', borderRadius: '4px', letterSpacing: '0.01em' }}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ BONUSES ══════════════════════════════════════════ */}
      <section style={{ padding: '72px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Label text="5 bonuses included" />
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: C.navy, letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '12px' }}>
              Two extra books and three resources to take action.
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: C.body, marginBottom: '40px', maxWidth: '540px' }}>
              The method to decide, plus the systems to execute and lead the team.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: C.border }} className="oc-bonus-grid">
            {[
              { tag: 'Bonus 1 · Extra book', t: "The Consultant's Quick-Reference Cheat Sheet", items: ['Key questions and frameworks', 'Where to start on any problem', 'What to investigate and what to do next'] },
              { tag: 'Bonus 2 · Extra book', t: 'The Business Problem Diagnosis Worksheet', items: ['Step-by-step problem breakdown', 'Separate symptoms from root causes', 'Organise your thinking before deciding'] },
              { tag: 'Bonus 3 · Resource', t: 'The Business Problem-Solving Checklist', items: ['Run through before any recommendation', 'Catch the gaps that weaken your plan', 'Have you considered all alternatives?'] },
              { tag: 'Bonus 4 · Resource', t: '3 Complete Business Problem Walkthroughs', items: ['See the system applied start to finish', 'Three real business problem examples', 'From initial diagnosis to final recommendation'] },
              { tag: 'Bonus 5 · Resource', t: "The Framework Selection Guide", items: ['Know which tool to reach for', 'Match the framework to the problem type', 'Stop over-applying frameworks that don\'t fit'] },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 50}>
                <div style={{ backgroundColor: C.bg, padding: '28px 24px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.accent, marginBottom: '10px' }}>{b.tag}</p>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: C.navy, marginBottom: '14px', lineHeight: 1.35 }}>{b.t}</p>
                  {b.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '6px 0', borderTop: j === 0 ? `1px solid ${C.border}` : 'none' }}>
                      <span style={{ color: C.accent, fontWeight: 700, flexShrink: 0, fontSize: '13px', paddingTop: '1px' }}>·</span>
                      <span style={{ fontSize: '13px', color: C.body, lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}

            {/* Span last bonus full width if odd */}
            <div style={{ backgroundColor: C.surface, padding: '28px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontSize: '14px', color: C.muted, textAlign: 'center', margin: 0, fontStyle: 'italic', maxWidth: '240px', lineHeight: 1.7 }}>
                All five bonuses are included with the book at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ════════════════════════════════════ */}
      <section style={{ padding: '72px 0', borderBottom: `1px solid ${C.border}`, backgroundColor: C.surface }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px', marginBottom: '32px' }}>
          <Reveal>
            <Label text="What readers say" />
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: C.navy, letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              From people who've used it.
            </h2>
          </Reveal>
        </div>

        {/* Scrolling row */}
        <div style={{
          display: 'flex', overflowX: 'auto', gap: '16px',
          padding: '4px 24px 16px',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }} className="oc-testi-scroll">
          {[
            { photo: thankgodPhoto, outcome: 'Changed how he advises clients', q: 'I have read a lot of business books, but what I like about Think Like a Consultant is how practical it is. It gives you a simple way to look at a business problem, break it down and know what to do next.', n: 'ThankGod Akpa', t: 'Founder, Impakt100' },
            { photo: petersonPhoto, outcome: 'Applied the framework immediately', q: 'The ideas are simple, but they make you think differently. It has changed the way I approach some of the decisions I make in business.', n: 'Peterson Akodi', t: 'Co-Founder, SPacebox' },
            { photo: davidPhoto, outcome: 'Restructured how he diagnoses problems', q: "Sometimes the problem is not that you don't have a solution. The problem is that you have not properly understood the problem. This book gives you a practical process for thinking through difficult situations.", n: 'David Utulor', t: 'Director, Mc Dave Schools' },
            { photo: augustPhoto, outcome: 'Now uses it with every client', q: 'As someone who works with businesses, I found the frameworks in this book very useful. It gives you a structured way to think when things are unclear instead of just relying on experience or instinct.', n: 'August Ojile', t: 'CEO, Cueball Digital Agency' },
          ].map((item, i) => (
            <div key={i} style={{
              flex: '0 0 300px', scrollSnapAlign: 'start',
              backgroundColor: C.bg,
              border: `1px solid ${C.border}`,
              borderTop: `3px solid ${i % 2 === 0 ? C.navy : C.accent}`,
              padding: '24px 20px',
              display: 'flex', flexDirection: 'column', gap: '14px',
            }}>
              <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: i % 2 === 0 ? C.navy : C.accent, margin: 0 }}>
                {item.outcome}
              </p>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: C.body, fontStyle: 'italic', margin: 0, flex: 1 }}>"{item.q}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: `1px solid ${C.border}`, paddingTop: '14px' }}>
                <img src={item.photo} alt={item.n} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: C.ink, margin: 0 }}>{item.n}</p>
                  <p style={{ fontSize: '11px', color: C.muted, margin: 0 }}>{item.t}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', paddingTop: '8px' }}>
          {[0,1,2,3].map(i => <div key={i} style={{ width: i === 0 ? '18px' : '6px', height: '5px', borderRadius: '3px', backgroundColor: i === 0 ? C.navy : C.border }} />)}
        </div>
      </section>

      {/* ══ WHO IT'S FOR ════════════════════════════════════ */}
      <section style={{ padding: '72px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Before deciding" />
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: C.navy, letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '32px' }}>
              Who is it for?
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: C.border }} className="oc-who-grid">
            <Reveal>
              <div style={{ backgroundColor: C.bg, padding: '28px 24px' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.accent, marginBottom: '16px' }}>Ideal for</p>
                {[
                  "Consultants who want to deliver better, more structured results",
                  "Business owners who want a repeatable way to fix what isn't working",
                  "Managers and team leads who need to know where to start",
                  "Professionals building a reputation for solving difficult problems",
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '10px 0', borderBottom: i < 3 ? `1px solid ${C.border}` : 'none' }}>
                    <span style={{ color: C.accent, fontWeight: 700, flexShrink: 0, fontSize: '13px' }}>✓</span>
                    <p style={{ fontSize: '14px', color: C.body, margin: 0, lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div style={{ backgroundColor: C.surface, padding: '28px 24px' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, marginBottom: '16px' }}>Not ideal for</p>
                {[
                  "Anyone looking for a magic formula with no work involved",
                  "Anyone looking for a shortcut instead of a structured process",
                  "Anyone who prefers to keep improvising every problem from scratch",
                  "Anyone not willing to apply a method to real situations",
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '10px 0', borderBottom: i < 3 ? `1px solid ${C.border}` : 'none' }}>
                    <span style={{ color: C.muted, fontWeight: 700, flexShrink: 0, fontSize: '13px' }}>·</span>
                    <p style={{ fontSize: '14px', color: C.muted, margin: 0, lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ PRICING ═════════════════════════════════════════ */}
      <section style={{ padding: '72px 24px', borderBottom: `1px solid ${C.border}`, backgroundColor: C.surface }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Full access" />
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, color: C.navy, letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '12px' }}>
              One payment. The complete package.
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: C.body, marginBottom: '36px', maxWidth: '480px' }}>
              Think Like a Consultant plus two extra books and three resources. No subscription.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, maxWidth: '520px' }}>
              {/* What's included */}
              <div style={{ padding: '24px 28px', borderBottom: `1px solid ${C.border}` }}>
                {[
                  { label: 'Think Like a Consultant', main: true },
                  { label: 'The complete 6-step system' },
                  { label: '25+ frameworks with examples' },
                  { label: "The Consultant's Quick-Reference Cheat Sheet" },
                  { label: 'The Business Problem Diagnosis Worksheet' },
                  { label: 'The Business Problem-Solving Checklist' },
                  { label: '3 Complete Business Problem Walkthroughs' },
                  { label: 'The Framework Selection Guide' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: i === 0 ? '0 0 12px' : '8px 0', borderBottom: i === 0 ? `1px solid ${C.border}` : 'none', marginTop: i === 1 ? '12px' : '0' }}>
                    <span style={{ color: C.accent, fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>✓</span>
                    <p style={{ fontSize: item.main ? '15px' : '13px', fontWeight: item.main ? 700 : 400, color: item.main ? C.navy : C.body, margin: 0 }}>{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div style={{ padding: '24px 28px' }}>
                <p style={{ fontSize: '12px', color: C.muted, marginBottom: '8px' }}>
                  Instant access · one-time payment
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '42px', fontWeight: 900, color: C.navy, letterSpacing: '-0.03em', lineHeight: 1 }}>₦3,700</span>
                  <span style={{ fontSize: '14px', color: C.muted }}>Book + 5 bonuses</span>
                </div>
                <CTABtn text="Get the complete package" full />
                <p style={{ fontSize: '12px', color: C.muted, marginTop: '10px', textAlign: 'center' }}>
                  One-time payment · Instant access · No subscription
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div style={{ marginTop: '24px', maxWidth: '520px', padding: '20px 24px', border: `1px solid ${C.border}`, backgroundColor: C.bg, display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>🛡</span>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 700, color: C.navy, marginBottom: '4px' }}>Buy with confidence</p>
                <p style={{ fontSize: '13px', color: C.body, margin: 0, lineHeight: 1.65 }}>
                  30 days to explore the material. If it's not the right fit, a full refund is available. No forms. No arguments.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════ */}
      <section style={{ padding: '72px 24px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Frequently asked questions" />
            <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 800, color: C.navy, letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '32px' }}>
              Questions before buying
            </h2>
          </Reveal>
          <div style={{ borderTop: `1px solid ${C.border}`, maxWidth: '640px' }}>
            {[
              { q: 'What is included and in what format?', a: 'Think Like a Consultant digital book in PDF, plus five bonus resources, also in digital format. No classes, coaching or physical copies.' },
              { q: 'How is the material delivered?', a: 'After payment is confirmed, a download link appears on the confirmation page and is also sent to the email used at checkout.' },
              { q: 'Is previous knowledge needed?', a: 'No. Each framework is explained from scratch in plain language, with an applied example.' },
              { q: 'What types of business is it for?', a: 'The method is a general process for diagnosis and decision-making. It applies to consulting work, businesses of any size and management roles.' },
              { q: 'Is it a one-time payment or a subscription?', a: 'A one-time payment. There are no recurring charges.' },
              { q: 'How does the refund policy work?', a: 'A refund can be requested within 30 days of purchase. No forms. No arguments.' },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 20}>
                <FAQ q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═══════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', backgroundColor: C.navy }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>
              Think Like a Consultant
            </p>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 800, color: C.bg, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}>
              The next problem, approached with a method.
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', marginBottom: '32px' }}>
              From confusion to a clear action plan. Think like a consultant and decide with structure.
            </p>
            <a href={SELAR} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: C.yellow, color: C.navy, fontFamily: "'Inter', system-ui, sans-serif", fontSize: '15px', fontWeight: 800, padding: '18px 40px', textDecoration: 'none', transition: 'opacity 0.15s', marginBottom: '12px' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Get the book + 5 bonuses <span style={{ fontSize: '16px' }}>→</span>
            </a>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
              Think Like a Consultant · ₦3,700 · Instant access
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════ */}
      <footer style={{ padding: '24px', textAlign: 'center', borderTop: `1px solid ${C.border}` }}>
        <p style={{ fontSize: '13px', fontWeight: 600, color: C.navy, margin: '0 0 4px' }}>Think Like a Consultant</p>
        <p style={{ fontSize: '12px', color: C.muted, margin: 0 }}>© {new Date().getFullYear()} Quick Learn Plus · All rights reserved</p>
      </footer>

      {/* ══ STICKY MOBILE ═══════════════════════════════════ */}
      <div className="oc-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 300,
        display: 'none', padding: '12px 16px',
        backgroundColor: C.bg, borderTop: `1px solid ${C.border}`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
      }}>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: C.navy, color: C.bg, fontSize: '14px', fontWeight: 700, padding: '15px', textDecoration: 'none', letterSpacing: '0.01em' }}>
          Get instant access → ₦3,700
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .oc-testi-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 760px) {
          .oc-hero-grid  { grid-template-columns: 1fr !important; }
          .oc-who-grid   { grid-template-columns: 1fr !important; }
          .oc-3col       { grid-template-columns: 1fr !important; }
          .oc-bonus-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .oc-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .oc-sticky     { display: block !important; }
        }
      `}</style>
    </div>
  )
}
