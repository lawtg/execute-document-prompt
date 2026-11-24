import { useState } from 'react'
import consultantCover from './-like-a-consultant-cover.png'

function CTAButton({ text, id }: { text: string; id?: string }) {
  return (
    <a
      href="https://selar.com/978m069577"
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      style={{
        display: 'inline-block',
        backgroundColor: '#B89B5E',
        color: '#0A0A0A',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '14px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '16px 40px',
        borderRadius: '4px',
        textDecoration: 'none',
        transition: 'opacity 0.2s ease, transform 0.15s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.opacity = '1'
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
      }}
    >
      {text}
    </a>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        borderBottom: '1px solid #2A2A2A',
        cursor: 'pointer',
      }}
      onClick={() => setOpen(o => !o)}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
        gap: '16px',
      }}>
        <span style={{ fontSize: '15px', fontWeight: 500, color: '#F0EDE6', lineHeight: 1.5 }}>{q}</span>
        <span style={{
          color: '#B89B5E',
          fontSize: '20px',
          lineHeight: 1,
          flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          transition: 'transform 0.2s ease',
        }}>+</span>
      </div>
      {open && (
        <p style={{ fontSize: '14px', lineHeight: 1.75, color: '#888480', margin: '0 0 20px 0', paddingRight: '32px' }}>
          {a}
        </p>
      )}
    </div>
  )
}

const steps = [
  {
    num: '01',
    title: 'Define the Problem',
    desc: 'Separate what is happening, what changed, and what question actually needs answering.',
  },
  {
    num: '02',
    title: 'Diagnose Root Causes',
    desc: 'Break the situation into pieces. Find the 20% causing 80% of the pain.',
  },
  {
    num: '03',
    title: 'Generate Options',
    desc: 'Build multiple possible solutions instead of presenting the first idea that comes to mind.',
  },
  {
    num: '04',
    title: 'Evaluate & Prioritize',
    desc: 'Assess what should come first, what could go wrong, and how to test before committing.',
  },
  {
    num: '05',
    title: 'Recommend & Implement',
    desc: 'Turn your recommendation into something people actually execute.',
  },
]

const whatYouLearn = [
  'The one skill that makes you more valuable than knowing dozens of frameworks',
  'How to break down complex business problems without getting overwhelmed',
  'A 6-step system you can apply to almost any business problem',
  'How to identify what\'s really happening inside a business — fast',
  'How to map external forces affecting your client\'s industry',
  'How to estimate market opportunity without an expensive research team',
  'Why your client\'s stated problem is often NOT the real problem',
  'How to find where a business is leaking money, time, and resources',
  'How to generate multiple solutions instead of defaulting to your first idea',
  'How to think through risk before recommending a strategy',
  'How to turn a recommendation into something people actually implement',
  'How to measure whether your recommendation is working',
]

const bonuses = [
  {
    title: 'Quick-Reference Cheat Sheet',
    value: '₦5,000',
    desc: 'Key questions and frameworks to quickly determine where to start and what to do next.',
  },
  {
    title: 'Problem Diagnosis Worksheet',
    value: '₦7,500',
    desc: 'Step-by-step worksheet to separate symptoms from root causes before jumping to solutions.',
  },
  {
    title: 'Problem-Solving Checklist',
    value: '₦5,000',
    desc: 'Run through this before every client presentation to catch gaps before they weaken your work.',
  },
  {
    title: '3 Complete Business Walkthroughs',
    value: '₦10,000',
    desc: 'See how the full system applies from initial problem to final recommendation.',
  },
  {
    title: 'Framework Selection Guide',
    value: '₦5,000',
    desc: 'Know which thinking tool to reach for depending on the problem you\'re solving.',
  },
]

const faqs = [
  {
    q: 'Who is this guide for?',
    a: 'It\'s for consultants, aspiring consultants, and business owners in Nigeria who want to approach business problems more systematically — not just rely on instinct.',
  },
  {
    q: 'Is this a physical book or a digital download?',
    a: 'It\'s a digital guide. After payment you\'ll be redirected to your download page immediately.',
  },
  {
    q: 'What if I already know some frameworks?',
    a: 'The guide isn\'t about memorizing frameworks — it\'s about developing a way of thinking. Even if you know SWOT or Porter\'s Five Forces, the system here shows you how to actually apply structured thinking from problem to recommendation.',
  },
  {
    q: 'What is the refund policy?',
    a: 'Go through the material. If within 7 days you feel you didn\'t get the practical value you expected, contact us and we\'ll refund you — no arguments.',
  },
  {
    q: 'How is this different from other consulting books?',
    a: 'Most books teach you what frameworks exist. This guide teaches you how to think — how to move from a messy client situation to a clear, defensible recommendation using a repeatable process.',
  },
]

export default function App() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', color: '#F0EDE6', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── NAV ── */}
      <nav style={{ borderBottom: '1px solid #1E1E1E', padding: '16px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888480' }}>
            Quick Learn Plus
          </span>
          <CTAButton text="Get It Now — ₦7,500" />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: '80px 1.5rem 64px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '64px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B89B5E', marginBottom: '24px' }}>
              Quick Learn Plus · Digital Guide
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              marginBottom: '32px',
            }}>
              Stop guessing.<br />
              <span style={{ color: '#B89B5E' }}>Think like a<br />consultant.</span>
            </h1>

            <p style={{ fontSize: '17px', lineHeight: 1.75, color: '#888480', marginBottom: '16px', maxWidth: '480px' }}>
              A practical system for breaking down any business problem — from diagnosis to recommendation — without relying on instinct or guesswork.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                '31 problem-solving frameworks explained simply',
                '5 practical bonus tools included free',
                '3 complete business problem walkthroughs',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#C8C4BD' }}>
                  <span style={{ color: '#B89B5E', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <CTAButton text="Get the Guide Now →" id="order" />
              <span style={{ fontSize: '13px', color: '#888480' }}>₦7,500 · Instant download · 7-day guarantee</span>
            </div>
          </div>

          {/* Book cover */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ position: 'relative', perspective: '800px', display: 'inline-block' }}>
              <img
                src={consultantCover}
                alt="Think Like a Consultant — book cover"
                style={{
                  width: '220px',
                  display: 'block',
                  borderRadius: '3px 8px 8px 3px',
                  boxShadow: '12px 20px 60px rgba(0,0,0,0.8), 2px 4px 16px rgba(0,0,0,0.5)',
                  transform: 'rotateY(-8deg)',
                  transformOrigin: 'left center',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ── */}
      <section style={{ borderTop: '1px solid #1E1E1E', borderBottom: '1px solid #1E1E1E', padding: '64px 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: '20px',
          }}>
            Business problems rarely come with instructions.
          </h2>
          <p style={{ fontSize: '16px', color: '#888480', lineHeight: 1.75, marginBottom: '48px' }}>
            When a business owner brings you a problem, you can't just Google the answer. You need a structured way to think through it — or you're guessing.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: '#1E1E1E' }}>
            {[
              { label: 'Without structure', text: 'You react to symptoms, miss root causes, and hope your recommendation sticks.' },
              { label: 'With frameworks alone', text: 'You have tools but no system for which to use, when, and in what order.' },
              { label: 'With this guide', text: 'You move from messy situation to clear recommendation using a repeatable process.' },
            ].map((col, i) => (
              <div key={i} style={{
                backgroundColor: i === 2 ? '#141400' : '#0D0D0D',
                padding: '32px 24px',
                borderTop: `2px solid ${i === 2 ? '#B89B5E' : '#1E1E1E'}`,
              }}>
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: i === 2 ? '#B89B5E' : '#888480', marginBottom: '12px' }}>{col.label}</p>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: i === 2 ? '#C8C4BD' : '#666260', margin: 0 }}>{col.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section style={{ padding: '80px 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B89B5E', marginBottom: '12px' }}>The System</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.3 }}>
            One clear process, from start to finish.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px', backgroundColor: '#1E1E1E' }} className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} style={{ backgroundColor: '#0D0D0D', padding: '28px 20px' }}>
              <span style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#2A2A2A', marginBottom: '12px', lineHeight: 1 }}>{step.num}</span>
              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F0EDE6', marginBottom: '10px', lineHeight: 1.4 }}>{step.title}</h3>
              <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#888480', margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <CTAButton text="Get the Guide Now →" />
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ── */}
      <section style={{ backgroundColor: '#0D0D0D', padding: '80px 1.5rem', borderTop: '1px solid #1E1E1E', borderBottom: '1px solid #1E1E1E' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B89B5E', marginBottom: '12px' }}>Inside the Guide</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.3 }}>
              A complete system, not a handful of tips.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: '#1E1E1E' }} className="learn-grid">
            {whatYouLearn.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#0A0A0A', padding: '20px 24px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#B89B5E', fontWeight: 700, fontSize: '14px', flexShrink: 0, marginTop: '2px' }}>✓</span>
                <span style={{ fontSize: '14px', lineHeight: 1.65, color: '#C8C4BD' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BONUSES ── */}
      <section style={{ padding: '80px 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B89B5E', marginBottom: '12px' }}>Included Free</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.3 }}>
            Five extra tools to take action.
          </h2>
          <p style={{ fontSize: '15px', color: '#888480', marginTop: '12px' }}>Everything you need to stop reading and start applying.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="bonus-grid">
          {bonuses.map((bonus, i) => (
            <div key={i} style={{
              backgroundColor: '#111',
              border: '1px solid #1E1E1E',
              borderRadius: '6px',
              padding: '28px 24px',
              ...(i >= 3 ? {} : {}),
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', gap: '8px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '16px', fontWeight: 700, lineHeight: 1.4, margin: 0 }}>{bonus.title}</h3>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#B89B5E', letterSpacing: '0.04em', whiteSpace: 'nowrap', flexShrink: 0 }}>+{bonus.value}</span>
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.7, color: '#888480', margin: 0 }}>{bonus.desc}</p>
            </div>
          ))}
          {/* Filler card for grid alignment */}
          <div style={{
            backgroundColor: '#0D0D0D',
            border: '1px dashed #2A2A2A',
            borderRadius: '6px',
            padding: '28px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <p style={{ fontSize: '13px', color: '#444', textAlign: 'center', margin: 0, lineHeight: 1.6 }}>Total bonus value:<br /><span style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: '#B89B5E' }}>₦32,500</span><br /><span style={{ color: '#555' }}>All included free</span></p>
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR ── */}
      <section style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid #1E1E1E', borderBottom: '1px solid #1E1E1E', padding: '80px 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B89B5E', marginBottom: '12px' }}>Fit Check</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.3 }}>Who is it for?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="who-grid">
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B89B5E', marginBottom: '20px' }}>This is for you if…</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'You\'re a consultant who wants to charge premium — and genuinely earn it',
                  'You feel unsure where to start when a business problem lands on your desk',
                  'You know some frameworks but struggle to apply them coherently',
                  'You want clients to say "this makes sense" instead of nodding politely',
                  'You\'re building a consulting practice and want a repeatable process',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: '#C8C4BD', lineHeight: 1.6 }}>
                    <span style={{ color: '#B89B5E', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555', marginBottom: '20px' }}>This is NOT for you if…</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'You just want a fancy title without the responsibility that comes with it',
                  'You\'re looking for shortcuts that skip the actual thinking',
                  'You\'re not willing to apply what you learn with real clients',
                  'You already have a proven system you\'re happy with',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: '#666260', lineHeight: 1.6 }}>
                    <span style={{ color: '#444', fontWeight: 700, flexShrink: 0 }}>✕</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ padding: '80px 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B89B5E', marginBottom: '12px' }}>Pricing</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.3 }}>
            One payment. The complete package.
          </h2>
        </div>

        <div style={{
          backgroundColor: '#111',
          border: '1px solid #2A2A2A',
          borderRadius: '8px',
          padding: '48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'start',
        }} className="pricing-inner">
          {/* Left — what's included */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888480', marginBottom: '20px' }}>What's included</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Think Like a Consultant — the complete guide',
                '31 problem-solving frameworks, explained simply',
                '3 full business problem walkthroughs',
                'Quick-Reference Cheat Sheet (₦5,000 value)',
                'Problem Diagnosis Worksheet (₦7,500 value)',
                'Problem-Solving Checklist (₦5,000 value)',
                'Framework Selection Guide (₦5,000 value)',
                '3 Complete Business Walkthroughs (₦10,000 value)',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: '#C8C4BD', lineHeight: 1.6 }}>
                  <span style={{ color: '#B89B5E', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — price + CTA */}
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888480', marginBottom: '8px' }}>Total value: <span style={{ color: '#555', textDecoration: 'line-through' }}>₦40,000+</span></p>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(56px, 8vw, 80px)', fontWeight: 700, color: '#F0EDE6', lineHeight: 1 }}>
                ₦7,500
              </div>
            </div>
            <CTAButton text="Get This Consulting Package →" id="buy" />
            <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.6, maxWidth: '260px' }}>
              Instant download · Secure payment · 7-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid #1E1E1E', padding: '80px 1.5rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B89B5E', marginBottom: '12px' }}>Before you buy</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, lineHeight: 1.3 }}>Questions before buying</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '80px 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.25, marginBottom: '20px' }}>
            From confusion to a clear action plan.
          </h2>
          <p style={{ fontSize: '16px', color: '#888480', lineHeight: 1.75, marginBottom: '36px' }}>
            The next time a business problem lands on your desk, you'll know exactly what to do — step by step.
          </p>
          <CTAButton text="Get Think Like a Consultant Now →" />
          <p style={{ fontSize: '12px', color: '#444', marginTop: '16px' }}>₦7,500 · Instant download · 7-day guarantee</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid #1E1E1E', padding: '24px 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#444', letterSpacing: '0.06em' }}>
          © {new Date().getFullYear()} Quick Learn Plus · Think Like a Consultant
        </p>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .learn-grid { grid-template-columns: 1fr 1fr !important; }
          .bonus-grid { grid-template-columns: 1fr 1fr !important; }
          .pricing-inner { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .learn-grid { grid-template-columns: 1fr !important; }
          .bonus-grid { grid-template-columns: 1fr !important; }
          .who-grid { grid-template-columns: 1fr !important; }
          [style*="gridTemplateColumns: '1fr auto'"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
