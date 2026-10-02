import { useRef, useState, useEffect } from 'react'
import consultantCover from './-like-a-consultant-cover.png'

/* ─── Design tokens — reference page style ──────────── */
const C = {
  heroBg:   '#0A0A0A',   /* near-black hero */
  sectionBg:'#FFFFFF',   /* white body sections */
  altBg:    '#F2F2F2',   /* light grey alternating */
  darkBg:   '#111111',   /* dark sections */
  ink:      '#1A1A1A',   /* body text */
  body:     '#333333',
  red:      '#CC1111',   /* primary red — buttons, highlights */
  redDark:  '#A50D0D',
  white:    '#FFFFFF',
  muted:    '#666666',
  border:   '#DDDDDD',
  yellow:   '#FFD700',   /* highlight text */
}

const SELAR = 'https://selar.com/978m069577'

/* ─── helpers ────────────────────────────────────────── */
function useInView(threshold = 0.07) {
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
      transform: vis ? 'translateY(0)' : 'translateY(22px)',
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── CTA Button ─────────────────────────────────────── */
function CTABtn({ text, id }: { text: string; id?: string }) {
  return (
    <a href={SELAR} target="_blank" rel="noopener noreferrer" id={id}
      style={{
        display: 'block',
        width: '100%',
        backgroundColor: C.red,
        color: C.white,
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: '20px',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        padding: '22px 32px',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'background-color 0.15s',
        cursor: 'pointer',
        lineHeight: 1.3,
        boxSizing: 'border-box' as const,
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.redDark)}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.red)}
    >
      {text}
    </a>
  )
}

/* ─── Red banner label ───────────────────────────────── */
function RedBanner({ text }: { text: string }) {
  return (
    <div style={{ backgroundColor: C.red, padding: '14px 24px', textAlign: 'center', margin: '0' }}>
      <span style={{
        fontFamily: "'Georgia', serif",
        fontSize: 'clamp(16px, 2.5vw, 20px)',
        fontWeight: 700,
        color: C.white,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
      }}>
        {text}
      </span>
    </div>
  )
}

/* ─── Section headline ───────────────────────────────── */
function SHead({ children, center, dark }: { children: React.ReactNode; center?: boolean; dark?: boolean }) {
  return (
    <h2 style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontSize: 'clamp(22px, 3.8vw, 32px)',
      fontWeight: 700,
      color: dark ? C.yellow : C.ink,
      textTransform: 'uppercase',
      lineHeight: 1.25,
      marginBottom: '28px',
      letterSpacing: '0.03em',
      textAlign: center ? 'center' : 'left',
    }}>
      {children}
    </h2>
  )
}

/* ─── Body text ──────────────────────────────────────── */
const P: React.CSSProperties = {
  fontFamily: "'Georgia', 'Times New Roman', serif",
  fontSize: 'clamp(17px, 2.2vw, 20px)',
  lineHeight: 1.9,
  color: C.body,
  marginBottom: '18px',
}

const PW: React.CSSProperties = {
  ...P,
  color: 'rgba(255,255,255,0.88)',
}

/* ─── Bullet item ────────────────────────────────────── */
function Bullet({ text, dark }: { text: string; dark?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '12px 0', borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : C.border}` }}>
      <span style={{ color: C.red, fontWeight: 900, fontSize: '18px', flexShrink: 0, paddingTop: '3px', lineHeight: 1 }}>›</span>
      <span style={{ ...(dark ? PW : P), marginBottom: 0 }}>{text}</span>
    </div>
  )
}

/* ─── Testimonial card ───────────────────────────────── */
const INITIALS_COLORS = ['#1A6B3C', '#1A3A8F', '#7B1A1A', '#4A1A6B']

function TestiCard({ quote, name, title, index }: { quote: string; name: string; title: string; index: number }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  const bgColor = INITIALS_COLORS[index % INITIALS_COLORS.length]

  return (
    <Reveal delay={index * 60}>
      <div style={{
        backgroundColor: C.sectionBg,
        border: `1px solid ${C.border}`,
        borderTop: `4px solid ${C.red}`,
        padding: '28px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      }}>
        {/* Quote marks */}
        <p style={{ fontFamily: "'Georgia', serif", fontSize: '64px', color: C.red, lineHeight: 0.6, marginBottom: '20px', opacity: 0.6 }}>"</p>

        {/* Quote */}
        <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.85, color: C.body, fontStyle: 'italic', marginBottom: '24px' }}>
          {quote}
        </p>

        {/* Author row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: `1px solid ${C.border}`, paddingTop: '16px' }}>
          {/* Avatar with initials */}
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            backgroundColor: bgColor,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            border: `2px solid ${C.red}`,
          }}>
            <span style={{ fontFamily: "'Georgia', serif", fontSize: '16px', fontWeight: 700, color: '#fff' }}>{initials}</span>
          </div>
          <div>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: '16px', fontWeight: 700, color: C.ink, margin: 0 }}>{name}</p>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: '14px', color: C.muted, margin: 0 }}>{title}</p>
          </div>
        </div>
      </div>
    </Reveal>
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
    <div style={{ backgroundColor: C.sectionBg, color: C.ink, fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ── HERO — dark background ── */}
      <section style={{ backgroundColor: C.heroBg, padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            {/* Eyebrow */}
            <p style={{ fontFamily: "'Georgia', serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
              Quick Learn Plus Presents
            </p>

            {/* Red italic subhead */}
            <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(14px, 2vw, 17px)', fontWeight: 700, color: C.red, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              The Practical Guide For Solving Any Business Problem
            </p>

            {/* Main title */}
            <h1 style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 'clamp(30px, 6vw, 54px)',
              fontWeight: 700,
              color: C.white,
              lineHeight: 1.15,
              letterSpacing: '0.02em',
              marginBottom: '24px',
            }}>
              Think Like a Consultant
            </h1>

            {/* Sub-headline */}
            <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: 1.7, color: C.yellow, fontWeight: 700, marginBottom: '32px' }}>
              How To Find Where Your Business Is Leaking Money, Fix What Matters First, And Solve Any Business Problem With A Simple 6-Step Process, Even If You Have Never Worked As A Consultant
            </p>
          </Reveal>

          {/* Book cover */}
          <Reveal delay={80}>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 36px' }}>
              <div style={{ perspective: '900px', display: 'inline-block' }}>
                <img src={consultantCover} alt="Think Like a Consultant"
                  style={{
                    width: 'clamp(160px, 38vw, 260px)',
                    display: 'block',
                    borderRadius: '2px 8px 8px 2px',
                    boxShadow: '12px 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(204,17,17,0.18)',
                    transform: 'rotateY(-5deg)',
                    transformOrigin: 'left center',
                  }}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <CTABtn text="Get My Copy Now" id="order" />
          </Reveal>
        </div>
      </section>

      {/* ── LETTER SECTION — white ── */}
      <section style={{ backgroundColor: C.sectionBg, padding: '64px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Reveal>
            <p style={{ ...P, fontWeight: 700 }}>Dear Friend,</p>
            <p style={P}>Let me ask you a quick question.</p>
            <p style={{ ...P, fontWeight: 600 }}>When last did something go wrong in your business and you didn't know where to start?</p>
            <p style={P}>Sales dropping. Costs climbing. Staff not performing. Everything looks urgent, and everyone has an opinion.</p>
            <p style={P}>So what do most people do? They guess. They copy a competitor. They throw money at the problem and hope it goes away.</p>
            <p style={{ ...P, color: C.red, fontWeight: 700 }}>If that sounds familiar, keep reading.</p>
            <p style={P}>My name is Lawrence. Over the last 7 years, I've worked with many businesses across Nigeria, Europe and North America.</p>
            <p style={{ ...P, fontWeight: 600 }}>Here is what I have learned.</p>
          </Reveal>

          {/* Pull quote box */}
          <Reveal delay={60}>
            <div style={{ backgroundColor: C.heroBg, border: `2px solid ${C.red}`, padding: '28px 32px', margin: '28px 0' }}>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(18px, 2.8vw, 24px)', fontWeight: 700, color: C.yellow, lineHeight: 1.5, margin: 0, textAlign: 'center' }}>
                Big companies pay consultants millions of Naira for one thing: a clear way of thinking.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p style={P}>Not magic. Not secret information. Just a method for taking a messy problem and breaking it down until the answer becomes obvious.</p>
            <p style={{ ...P, fontWeight: 700 }}>And that method can be learned.</p>
            <p style={{ ...P, fontWeight: 700, color: C.red }}>That is why I wrote this book.</p>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT'S INSIDE — light grey ── */}
      <section style={{ backgroundColor: C.altBg, padding: '64px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Reveal>
            <SHead>What Is Inside?</SHead>
            <p style={P}>
              <em>Think Like a Consultant</em> is a practical guide that shows you, step by step, how to investigate a problem, find the real cause, and decide what to do about it. No jargon. No theory for theory's sake.
            </p>
            <p style={{ ...P, fontWeight: 700 }}>Here are some of the things you will discover:</p>
          </Reveal>

          <div style={{ marginBottom: '32px' }}>
            {[
              'Why the problem is almost NEVER where you think it is, and how to find where your business is really leaking money, time and resources',
              'How to break a giant, scary problem into small questions you can actually answer, so you stop staring and start fixing',
              'When everything looks urgent, how to know exactly which problem deserves your attention FIRST',
              'How to test an idea before you bet the business on it. Not every good idea is a good business idea, and this can save you from an expensive mistake',
              'How to separate facts from assumptions and opinions, so you stop making big decisions based on feelings',
              'Why copying your competitor\'s price is dangerous, and how to think about pricing so you protect your profit',
              'How to know if a market is worth entering, without hiring an expensive research team',
              'How to know your strategy is working or failing without waiting until December to find out',
              'How to get your team to understand and support your decisions, because a good decision means nothing if nobody follows it',
              'The simple 6-step process you can use every time a difficult problem comes up, so you never have to start from zero again',
            ].map((t, i) => <Bullet key={i} text={t} />)}
          </div>
        </div>
      </section>

      {/* ── RED ICEBERG BANNER ── */}
      <RedBanner text="THIS IS JUST A TIP OF THE ICEBERG" />

      {/* ── MID CTA ── */}
      <section style={{ backgroundColor: C.sectionBg, padding: '48px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Reveal>
            <CTABtn text="Yes, I Want to Think Like a Consultant" />
          </Reveal>
        </div>
      </section>

      {/* ── MORE CONTENT — white ── */}
      <section style={{ backgroundColor: C.altBg, padding: '48px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Reveal>
            <p style={P}>
              And lots more. The book also shows you how to generate better solutions than the first idea in your head, how to manage projects without making them complicated, how to spot outside forces that can hurt your business, and how to turn a messy situation into a clear story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── WHO IS THIS FOR — dark ── */}
      <section style={{ backgroundColor: C.darkBg, padding: '64px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Reveal>
            <SHead dark>Who Is This Book For?</SHead>
          </Reveal>
          <div>
            {[
              'Business owners who are tired of guessing and want a clear way to fix what is not working',
              'Managers and team leads who want to solve problems faster and get noticed for it',
              'Professionals who want to be the person everyone turns to when things get complicated',
              'Aspiring consultants who want to learn how the best do it',
            ].map((t, i) => <Bullet key={i} text={t} dark />)}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ backgroundColor: C.altBg, padding: '64px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <RedBanner text="WHAT PEOPLE ARE SAYING" />
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <TestiCard
              index={0}
              quote="I have read a lot of business books, but what I like about Think Like a Consultant is how practical it is. It gives you a simple way to look at a business problem, break it down and know what to do next."
              name="ThankGod Akpa"
              title="Founder, Impakt100"
            />
            <TestiCard
              index={1}
              quote="The ideas are simple, but they make you think differently. It has changed the way I approach some of the decisions I make in business."
              name="Peterson Akodi"
              title="Co-Founder, SPacebox"
            />
            <TestiCard
              index={2}
              quote="Sometimes the problem is not that you don't have a solution. The problem is that you have not properly understood the problem. This book gives you a practical process for thinking through difficult situations before making a decision."
              name="David Utulor"
              title="Director, Mc Dave Schools"
            />
            <TestiCard
              index={3}
              quote="As someone who works with businesses, I found the frameworks in this book very useful. It gives you a structured way to think when things are unclear instead of just relying on experience or instinct."
              name="August Ojile"
              title="CEO, Cueball Digital Agency"
            />
          </div>
        </div>
      </section>

      {/* ── GUARANTEE — dark ── */}
      <section style={{ backgroundColor: C.darkBg, padding: '64px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <RedBanner text='NOW LET&apos;S TALK ABOUT THE GUARANTEE' />
            </div>

            {/* Guarantee shield */}
            <div style={{ backgroundColor: '#1A1A1A', border: `2px solid ${C.red}`, padding: '40px 32px', marginBottom: '36px', textAlign: 'center' }}>
              <div style={{ fontSize: '56px', marginBottom: '16px', lineHeight: 1 }}>🛡</div>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700, color: C.yellow, lineHeight: 1.45, marginBottom: '0' }}>
                If You Buy This Book, Read It, And You Don't Believe It Can Help You Solve Business Problems Faster And Better, I Will Refund Your Money. And You Can Keep The Book.
              </p>
            </div>

            <p style={{ ...PW, fontWeight: 700 }}>Yes, you read that correctly.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '24px' }}>
              {[
                'No need to explain...',
                'No need to shalaye...',
                'I will not argue with you...',
                'I will just return your money.',
              ].map((line, i) => (
                <p key={i} style={{ ...PW, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: 0 }}>{line}</p>
              ))}
            </div>

            <p style={{ ...PW, fontWeight: 700, color: C.yellow }}>Why am I so confident?</p>
            <p style={PW}>Because one problem solved properly can save your business more than you will ever pay for this book.</p>
            <p style={PW}>The only way you lose is by doing nothing. And if you do nothing, the next problem will come, and you will face it the same way you faced the last one.</p>
            <p style={{ ...PW, fontWeight: 700, color: C.red, fontSize: 'clamp(18px, 2.5vw, 22px)' }}>Is that what you want?</p>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA — light ── */}
      <section style={{ backgroundColor: C.sectionBg, padding: '64px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700, color: C.ink, marginBottom: '8px' }}>
              Price:
            </p>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 700, color: C.red, lineHeight: 1, marginBottom: '32px' }}>
              ₦3,700
            </p>
            <CTABtn text="Send Me My Copy Now!" id="buy" />
          </Reveal>

          <Reveal delay={60}>
            <div style={{ backgroundColor: C.altBg, border: `1px solid ${C.border}`, padding: '28px', marginTop: '40px', textAlign: 'left' }}>
              <p style={{ ...P, marginBottom: 0 }}>
                <strong>P.S.</strong> Consultants charge millions for a few hours of their time. This book puts their way of thinking in your hands for a fraction of that. Grab your copy, and the next time a problem lands on your desk, you will know exactly where to start.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: C.heroBg, padding: '28px 24px', textAlign: 'center', borderTop: `3px solid ${C.red}` }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: '13px', color: 'rgba(255,255,255,0.3)', margin: '0 0 8px' }}>
          © {new Date().getFullYear()} Quick Learn Plus · Think Like a Consultant
        </p>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: '11px', color: 'rgba(255,255,255,0.18)', margin: 0, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          Results depend on your circumstances, industry and effort. No specific business outcome is guaranteed.
        </p>
      </footer>

      {/* ── MOBILE STICKY ── */}
      <div className="ownerC-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
        display: 'none', padding: '10px 16px',
        backgroundColor: C.heroBg, borderTop: `2px solid ${C.red}`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'block', width: '100%', textAlign: 'center',
            backgroundColor: C.red, color: C.white,
            fontFamily: "'Georgia', serif", fontSize: '15px', fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '16px', textDecoration: 'none',
          }}
        >
          Get Think Like a Consultant — ₦3,700
        </a>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .ownerC-sticky { display: block !important; }
        }
      `}</style>
    </div>
  )
}
