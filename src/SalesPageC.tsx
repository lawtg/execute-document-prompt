import { useEffect, useRef, useState } from 'react'
import consultantCover from './-like-a-consultant-cover.png'

/* ─── tokens ─────────────────────────────────────────── */
const T = {
  bg:      '#FAF8F3',
  cream:   '#F3F0E8',
  navy:    '#0D2137',
  gold:    '#B89B5E',
  ink:     '#1C1C1E',
  muted:   '#6B6760',
  border:  '#D8D3C8',
  white:   '#FFFFFF',
}

const SELAR = 'https://selar.com/978m069577'

/* ─── helpers ─────────────────────────────────────────── */
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
      transform: vis ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

function CTABtn({ text, id, light }: { text: string; id?: string; light?: boolean }) {
  return (
    <a
      href={SELAR}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      style={{
        display: 'inline-block',
        backgroundColor: light ? T.gold : T.navy,
        color: T.white,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '14px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '18px 48px',
        textDecoration: 'none',
        transition: 'opacity 0.15s',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '2px',
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      {text}
    </a>
  )
}

/* Book mockup with 3D tilt */
function BookMockup({ width = 220 }: { width?: number }) {
  return (
    <div style={{ perspective: '800px', display: 'inline-block' }}>
      <img
        src={consultantCover}
        alt="Think Like a Consultant"
        style={{
          width: `${width}px`,
          display: 'block',
          borderRadius: '3px 6px 6px 3px',
          boxShadow: '10px 18px 48px rgba(0,0,0,0.35), 2px 4px 14px rgba(0,0,0,0.18)',
          transform: 'rotateY(-8deg)',
          transformOrigin: 'left center',
        }}
      />
    </div>
  )
}

const benefits = [
  "Discover what really makes a business decision valuable — and why having information isn't enough. Learn how to move from simply having opinions about your business to thinking through problems in a structured way.",
  "The one skill that can make you better at solving business problems than knowing dozens of business frameworks. Learn why the way you think about a problem can matter more than how many business concepts you know.",
  "How to break down a complicated business problem into smaller pieces without getting overwhelmed. So instead of staring at one giant problem, you'll know exactly where to start.",
  "How to turn a messy business situation into a clear story before making a decision. Learn how to separate what is happening, what changed, and what question actually needs to be answered.",
  'The simple 6-step process you can use to approach almost any business problem. So when something goes wrong in your business, you have a process to help you figure out what to investigate first.',
  'How to quickly understand what is really happening inside your business — without relying entirely on guesswork or assumptions.',
  'How to identify the external forces that could affect your business — including changes in the economy, technology, regulations, society, and competition.',
  'How to determine how attractive or difficult your industry really is before making major strategic decisions.',
  'How to estimate the size of a business opportunity without needing an expensive research team. So you can answer a question every serious business owner needs to ask: "Is this opportunity actually big enough to pursue?"',
  'How to find where your business is actually creating value — and where that value is being lost.',
  'Why the problem you see on the surface may NOT be the real problem — and how to dig deeper until you find what is actually causing it.',
  "How to find the 20% of causes responsible for 80% of your biggest business headaches. So you can focus your attention on the things most likely to make a meaningful difference.",
  "How to uncover where your business is leaking money, time, and resources — even when the problem isn't immediately obvious.",
  'How to map the way work actually moves through your business and identify where things are getting stuck.',
  'How to stop solving isolated symptoms and start seeing your entire business as a connected system.',
  'How to generate multiple possible solutions instead of jumping at the first idea that comes to mind.',
  "How to think about where your business should compete and how it can win — without making strategy unnecessarily complicated.",
  'What to do when everything feels urgent and you want to fix everything at once. Learn how to identify what should actually come first.',
  'How to think through what could go wrong BEFORE committing money and resources to a strategy.',
  'How to test an idea before betting the entire business on it.',
  "How to tell whether a business model actually makes sense — before investing more money into it.",
  'How to think beyond the immediate quarter without losing sight of the bigger picture.',
  "Why pricing may be one of the fastest ways to change your business's performance — and how to think about pricing strategically.",
  'How to identify problems that can appear when a business starts growing before they become expensive emergencies.',
  'How to lead your people through change without losing the people you need to make the change happen.',
  "How to turn a good decision into actual execution. Because a great strategy that nobody implements doesn't create business value.",
  'How to manage projects without drowning yourself and your team in unnecessary processes.',
  "How to get your team to support important decisions even when they weren't part of the original decision-making process.",
  'How to know whether your decisions and strategies are actually working — using simple ways to track progress instead of relying on feelings.',
  'How to build a business that continuously improves instead of solving the same problems over and over again.',
  'The quick-reference checklist you can use whenever a new business problem lands on your desk.',
]

const bonuses = [
  { num: '01', title: "The Business Owner's Quick-Reference Cheat Sheet", value: '₦5,000', desc: "You shouldn't have to read through an entire book every time a new business problem comes your way. This quick-reference sheet gives you the key questions and frameworks you need to quickly determine where to start, what to investigate, and what to do next. Keep it beside you whenever you're dealing with an important business decision." },
  { num: '02', title: 'The Business Problem Diagnosis Worksheet', value: '₦7,500', desc: "Sometimes the hardest part of solving a business problem isn't finding the solution — it's figuring out what the problem actually is. This practical worksheet helps you work through a business problem step by step, ask better questions, separate symptoms from root causes, and organize your thinking before making a decision." },
  { num: '03', title: 'The Business Problem-Solving Checklist', value: '₦5,000', desc: "Before you commit to an important decision, run through this checklist. Have you defined the problem correctly? Have you identified the root cause? Have you considered alternative explanations? Have you generated more than one possible solution? This checklist helps you catch the gaps that can turn an otherwise good decision into an expensive mistake." },
  { num: '04', title: '3 Complete Business Problem Walkthroughs', value: '₦10,000', desc: "Don't just learn the theory — see how the thinking works. You'll get three complete examples showing how the problem-solving system can be applied from the initial problem all the way to the final recommendation. This gives you something to study when you're facing a real business problem." },
  { num: '05', title: 'The Framework Selection Guide', value: '₦5,000', desc: "One of the biggest mistakes business owners make is trying to use every business framework they know on every problem. This guide helps you understand which type of thinking tool to reach for depending on the problem you're trying to solve. Because the goal isn't to sound intelligent — the goal is to solve the problem." },
]

const faqs = [
  { q: 'Is this only for business owners?', a: "This guide was written for anyone who makes business decisions and wants a clearer way to think through problems. Whether you run a business, manage a team, or advise clients, the frameworks inside are practical and immediately applicable." },
  { q: 'Do I need a business background to understand this?', a: "Not at all. The guide is written in plain language with practical examples. You don't need an MBA or formal business training to benefit from it." },
  { q: 'What format will I receive?', a: "You will receive an instant digital PDF download immediately after purchase. You can read it on your phone, tablet, laptop, or print it out." },
  { q: 'What if the guide does not work for me?', a: "If you go through the guide and feel it didn't deliver on its promise, reach out within 7 days and we will give you a full refund. No complicated process." },
  { q: 'How is this different from other business books?', a: "Most business books explain what to do. This guide focuses on how to think — giving you a repeatable system you can apply to any problem, not just the examples in the book." },
  { q: 'How quickly can I start using what I learn?', a: "Immediately. Each chapter has practical frameworks you can apply to a real business problem the same day. You don't have to finish the entire book before you start using the ideas." },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: `1px solid ${T.border}`, cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', gap: '16px' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 600, margin: 0, color: T.ink, lineHeight: 1.4 }}>{q}</p>
        <span style={{ color: T.gold, fontSize: '22px', fontWeight: 300, flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(45deg)' : 'none', lineHeight: 1 }}>+</span>
      </div>
      {open && <p style={{ fontSize: '15px', lineHeight: 1.8, color: T.muted, paddingBottom: '20px', margin: 0 }}>{a}</p>}
    </div>
  )
}

export default function SalesPageC() {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 600)
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

      {/* ── HERO — two-column ── */}
      <section style={{ backgroundColor: T.bg, padding: '80px 24px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '80px', alignItems: 'center' }} className="ownerC-hero-grid">

          {/* Left: copy */}
          <div>
            <Reveal>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.muted, marginBottom: '20px' }}>
                Quick Learn Plus
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.gold, marginBottom: '16px' }}>
                If you are serious about solving any business problem without the guesswork, you should read this book today.
              </p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em', color: T.ink, marginBottom: '32px' }}>
                To Every Business Owner Who Wants to Solve Their Business Problems Without Always Hiring A Consultant.
              </h1>
            </Reveal>
            <Reveal delay={60}>
              {/* Price breakdown */}
              <div style={{ marginBottom: '32px' }}>
                {[
                  { label: 'Book Price', value: '₦3,500' },
                  { label: 'Bonuses Value', value: '₦32,500' },
                  { label: 'Total Value', value: '₦36,000' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${T.border}`, maxWidth: '320px' }}>
                    <span style={{ fontSize: '13px', color: i === 2 ? T.ink : T.muted, fontWeight: i === 2 ? 700 : 400 }}>{item.label}</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: i === 2 ? T.navy : T.muted, fontFamily: "'Playfair Display', serif" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <CTABtn text="Get Think Like a Consultant — ₦3,500" id="order" />
            </Reveal>
          </div>

          {/* Right: book */}
          <Reveal delay={120}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <BookMockup width={240} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section style={{ backgroundColor: T.bg, padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, lineHeight: 1.2, color: T.ink, marginBottom: '16px', textAlign: 'center' }}>
              What's Inside <em>Think Like a Consultant</em>?
            </h2>
            <p style={{ fontSize: '16px', color: T.muted, textAlign: 'center', marginBottom: '56px', maxWidth: '580px', margin: '0 auto 56px' }}>
              A complete system for thinking through, diagnosing, and solving any business problem — with clarity and confidence.
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {benefits.map((benefit, i) => (
              <Reveal key={i} delay={Math.min(i * 15, 150)}>
                <div style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: `1px solid ${T.border}`, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '12px', fontWeight: 700, color: T.gold, minWidth: '28px', paddingTop: '3px', letterSpacing: '0.04em', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, margin: 0, color: T.ink }}>{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR PURCHASE INCLUDES — dark banner ── */}
      <section style={{ backgroundColor: T.navy, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: T.white, textAlign: 'center', marginBottom: '56px', letterSpacing: '0.02em' }}>
              YOUR PURCHASE INCLUDES
            </h2>
          </Reveal>

          {/* Book + bonuses layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '56px', alignItems: 'flex-start', marginBottom: '56px' }} className="ownerC-purchase-grid">

            {/* Book stack */}
            <Reveal delay={60}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <BookMockup width={180} />
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
                  Think Like a Consultant
                </p>
              </div>
            </Reveal>

            {/* Bonuses grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} className="ownerC-bonuses-grid">
              {bonuses.map((bonus, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '24px 20px' }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: 'rgba(255,255,255,0.08)', lineHeight: 1, marginBottom: '12px' }}>{bonus.num}</div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.gold, marginBottom: '8px' }}>
                      Bonus #{bonus.num} · Value {bonus.value}
                    </p>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: T.white, lineHeight: 1.4, marginBottom: '8px' }}>{bonus.title}</p>
                    <p style={{ fontSize: '12px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', margin: 0 }}>{bonus.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={100}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Quick Learn Plus</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '16px', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>Think Like a Consultant</p>
              <CTABtn text="Get Think Like a Consultant — ₦3,500" light />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRICING SECTION — two-column ── */}
      <section style={{ backgroundColor: T.cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '64px', alignItems: 'center' }} className="ownerC-price-grid">

          <Reveal>
            <BookMockup width={200} />
          </Reveal>

          <Reveal delay={80}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.gold, marginBottom: '12px' }}>
                The Guide
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, lineHeight: 1.25, color: T.ink, marginBottom: '20px' }}>
                Think Like a Consultant
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: T.muted, marginBottom: '28px' }}>
                A practical guide that teaches business owners how to approach any business problem systematically — so you can move from guesswork to clarity and make better decisions with confidence.
              </p>

              {/* Price breakdown */}
              <div style={{ marginBottom: '28px' }}>
                {[
                  { label: 'Book Price', value: '₦3,500' },
                  { label: 'Bonuses Value', value: '₦32,500' },
                  { label: 'You Get Everything For', value: '₦3,500', highlight: true },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${T.border}` }}>
                    <span style={{ fontSize: '13px', color: item.highlight ? T.ink : T.muted, fontWeight: item.highlight ? 700 : 400 }}>{item.label}</span>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: item.highlight ? '20px' : '14px', fontWeight: 700, color: item.highlight ? T.navy : T.muted }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <CTABtn text="Get Instant Access — ₦3,500" />
              <p style={{ fontSize: '12px', color: T.muted, marginTop: '12px' }}>Instant digital download · 7-day money-back guarantee</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section style={{ backgroundColor: T.bg, padding: '64px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ backgroundColor: T.navy, padding: '40px 36px', display: 'flex', gap: '28px', alignItems: 'flex-start' }} className="ownerC-guarantee">
              <div style={{ fontSize: '32px', lineHeight: 1, flexShrink: 0 }}>🛡</div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.gold, marginBottom: '10px' }}>
                  30-Day Money-Back Guarantee
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', margin: 0 }}>
                  Go through the guide. Use the frameworks. Apply the tools. If you don't find it valuable within 7 days, let us know and we'll refund your money. No arguments. No stress.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: T.bg, padding: '80px 24px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.gold, marginBottom: '12px', textAlign: 'center' }}>
              Frequently Asked Questions
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, lineHeight: 1.3, color: T.ink, marginBottom: '40px', textAlign: 'center' }}>
              Questions You Might Have
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
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>
              Your business problems deserve real solutions, not more guesses.
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.15, color: T.white, marginBottom: '12px' }}>
              Sometimes, it needs
            </h2>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.15, color: T.gold, fontStyle: 'italic', marginBottom: '40px' }}>
              a better way to think.
            </h2>
            <CTABtn text="Get Started Now →" light />
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '16px' }}>
              ₦3,500 · Instant access · 7-day guarantee
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#0A1826', padding: '28px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: 0, letterSpacing: '0.06em' }}>
          © {new Date().getFullYear()} Quick Learn Plus · Think Like a Consultant
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
          Get Think Like a Consultant — ₦3,500
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 768px) {
          .ownerC-hero-grid     { grid-template-columns: 1fr !important; }
          .ownerC-purchase-grid { grid-template-columns: 1fr !important; }
          .ownerC-price-grid    { grid-template-columns: 1fr !important; }
          .ownerC-bonuses-grid  { grid-template-columns: 1fr 1fr !important; }
          .ownerC-guarantee     { flex-direction: column !important; }
        }
        @media (max-width: 520px) {
          .ownerC-bonuses-grid  { grid-template-columns: 1fr !important; }
          .ownerC-sticky        { display: block !important; }
        }
      `}</style>
    </div>
  )
}
