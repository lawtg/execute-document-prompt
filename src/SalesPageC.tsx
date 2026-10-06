import { useRef, useState, useEffect } from 'react'
import consultantCover from './-like-a-consultant-cover.png'

/* ─── Google Fonts injected via <style> below ─────────
   Anton  — display headings
   Poppins — body, labels, buttons
──────────────────────────────────────────────────────── */

const C = {
  purple:     '#2D1B69',   // dominant deep purple
  purpleMid:  '#3D2A80',
  purpleLight:'#4E3894',
  yellow:     '#FFD600',   // vivid yellow
  yellowHover:'#E6C000',
  white:      '#FFFFFF',
  offWhite:   '#F9F8FF',
  lightGrey:  '#F4F3FC',
  ink:        '#1A1033',
  bodyText:   '#3D3557',
  muted:      '#7B72A0',
  border:     '#E2DFF4',
}

const SELAR = 'https://selar.com/978m069577'

/* ─── helpers ────────────────────────────────────────── */
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

function Reveal({ children, delay = 0, y = 28 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const { ref, vis } = useInView()
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? 'none' : `translateY(${y}px)`,
      transition: `opacity .65s ease ${delay}ms, transform .65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── CTA Button ─────────────────────────────────────── */
function CTABtn({ text, id, small }: { text: string; id?: string; small?: boolean }) {
  return (
    <a href={SELAR} target="_blank" rel="noopener noreferrer" id={id}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: C.yellow, color: C.purple,
        fontFamily: "'Poppins', sans-serif",
        fontSize: small ? '14px' : '17px',
        fontWeight: 800,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: small ? '14px 32px' : '20px 52px',
        textDecoration: 'none',
        transition: 'background-color 0.15s, transform 0.12s',
        cursor: 'pointer',
        lineHeight: 1.2,
        boxSizing: 'border-box' as const,
        boxShadow: '0 6px 24px rgba(255,214,0,0.35)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.yellowHover
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.yellow
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
      }}
    >
      {text}
    </a>
  )
}

/* ─── CSS-drawn book mockup ──────────────────────────── */
function BookMockup({ size = 280 }: { size?: number }) {
  return (
    <div style={{ perspective: '900px', display: 'inline-block' }}>
      <img
        src={consultantCover}
        alt="Think Like a Consultant"
        style={{
          width: `${size}px`,
          display: 'block',
          borderRadius: '2px 6px 6px 2px',
          boxShadow: `
            ${size * 0.06}px ${size * 0.1}px ${size * 0.22}px rgba(0,0,0,0.55),
            ${size * 0.015}px ${size * 0.02}px ${size * 0.05}px rgba(0,0,0,0.3),
            0 0 ${size * 0.15}px rgba(255,214,0,0.12)
          `,
          transform: 'rotateY(-12deg) rotateX(2deg)',
          transformOrigin: 'left center',
        }}
      />
    </div>
  )
}

/* ─── Section label ──────────────────────────────────── */
function Label({ text, light }: { text: string; light?: boolean }) {
  return (
    <p style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: '11px', fontWeight: 700,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: light ? 'rgba(255,255,255,0.45)' : C.purpleLight,
      marginBottom: '16px',
    }}>
      {text}
    </p>
  )
}

/* ─── Divider ─────────────────────────────────────────── */
function Rule({ yellow }: { yellow?: boolean }) {
  return <div style={{ height: '2px', backgroundColor: yellow ? C.yellow : C.border, margin: '0' }} />
}

/* ─── PAGE ────────────────────────────────────────────── */
export default function SalesPageC() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 700)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ backgroundColor: C.offWhite, color: C.ink, fontFamily: "'Poppins', sans-serif" }}>

      {/* ════════════════════════════════════════════════
          § 1 — HERO
      ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.purple, padding: '80px 24px 72px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '72px', alignItems: 'center' }} className="pc-hero-grid">

          {/* Left copy */}
          <div>
            <Reveal>
              <Label text="Think Like a Consultant" light />
              <h1 style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(38px, 7vw, 76px)',
                fontWeight: 400,   /* Anton is inherently bold */
                lineHeight: 1.05,
                color: C.white,
                letterSpacing: '0.01em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                Become one of the{' '}
                <span style={{ color: C.yellow }}>Top 1%</span>{' '}
                Consultants in Africa.
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(16px, 2.2vw, 20px)',
                fontWeight: 600,
                lineHeight: 1.55,
                color: 'rgba(255,255,255,0.75)',
                marginBottom: '14px',
              }}>
                Are you struggling to deliver{' '}
                <span style={{ color: C.yellow, fontWeight: 700 }}>consistent solutions</span>{' '}
                for all your clients?
              </p>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(15px, 1.9vw, 18px)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '40px',
                maxWidth: '520px',
              }}>
                Learn how to think through complex business problems, eliminate guesswork and deliver solutions your clients can't stop talking about.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <CTABtn text="Get the Book Now" id="order" />
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '12px',
                color: 'rgba(255,255,255,0.35)',
                marginTop: '14px',
                letterSpacing: '0.04em',
              }}>
                Instant digital access&nbsp;•&nbsp;Practical framework&nbsp;•&nbsp;Built for consultants
              </p>
            </Reveal>
          </div>

          {/* Right book */}
          <Reveal delay={200}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <BookMockup size={280} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          § 2 — THE PROBLEM
      ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '100px 24px' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Label text="The Reality" />
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(32px, 5.5vw, 60px)',
              fontWeight: 400,
              color: C.ink,
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: '12px',
              letterSpacing: '0.01em',
            }}>
              Your practice is about to transform.
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(17px, 2.2vw, 22px)',
              fontWeight: 600,
              color: C.purpleLight,
              marginBottom: '48px',
            }}>
              Avoid continued frustration with client results.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div style={{
              backgroundColor: C.purple,
              padding: '32px 36px',
              marginBottom: '56px',
            }}>
              <p style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(20px, 3vw, 30px)',
                fontWeight: 400,
                color: C.yellow,
                letterSpacing: '0.02em',
                lineHeight: 1.3,
                margin: 0,
              }}>
                Every missed result costs you more than you think.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                'Valuable clients walk away',
                'Hours disappear into solutions that don\'t work',
                'Retention drops and referrals dry up',
                'Revenue slips through your fingers',
                'Your practice stalls while others grow',
                'Confidence erodes with every engagement',
                'Stress and burnout creep in',
                'You start wondering if you\'re cut out for this',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: '16px',
                  alignItems: 'center',
                  padding: '20px 0',
                  borderBottom: `1px solid ${C.border}`,
                }}>
                  <span style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: '28px',
                    color: `rgba(45,27,105,${0.08 + i * 0.1})`,
                    lineHeight: 1,
                    letterSpacing: '0.01em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 'clamp(16px, 2vw, 19px)',
                    fontWeight: 500,
                    color: C.bodyText,
                    margin: 0,
                    lineHeight: 1.5,
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ marginTop: '56px', textAlign: 'center' }}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(16px, 2vw, 19px)',
                color: C.muted,
                marginBottom: '12px',
              }}>
                You didn't become a consultant to feel stuck.
              </p>
              <h3 style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(28px, 4.5vw, 50px)',
                fontWeight: 400,
                color: C.purple,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                marginBottom: '36px',
              }}>
                There's a better way to think.
              </h3>
              <CTABtn text="Buy the Ebook Now" />
            </div>
          </Reveal>
        </div>
      </section>

      <Rule yellow />

      {/* ════════════════════════════════════════════════
          § 3 — THE TRANSFORMATION
      ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.purple, padding: '100px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="pc-split-grid">

          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <BookMockup size={260} />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Label text="The Transformation" light />
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 400,
              color: C.white,
              textTransform: 'uppercase',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              marginBottom: '12px',
            }}>
              Confidently solve any business problem.
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(15px, 1.9vw, 18px)',
              fontWeight: 600,
              color: C.yellow,
              marginBottom: '28px',
            }}>
              Walk Into Every Engagement Knowing Exactly What To Do.
            </p>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '40px',
            }}>
              <em>Think Like a Consultant</em> gives you the mindset and method top consultants use to cut through complexity, think clearly and deliver solutions clients can't stop talking about.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { n: '01', t: 'GAIN CLARITY', b: 'Use a straightforward six-step process to make sense of complex problems.' },
                { n: '02', t: 'ELIMINATE GUESSWORK', b: 'Know what questions to ask, what to analyze and what to do next.' },
                { n: '03', t: 'BUILD YOUR REPUTATION', b: 'Become the consultant clients trust when the problem is difficult.' },
                { n: '04', t: 'DELIVER BETTER SOLUTIONS', b: 'Turn your thinking into practical solutions clients can actually use.' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '48px 1fr', gap: '16px',
                  padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.1)',
                  alignItems: 'flex-start',
                }}>
                  <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '22px', color: C.yellow, lineHeight: 1 }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 700, color: C.yellow, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{item.t}</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.6vw, 16px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          § 4 — THE FRAMEWORK
      ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.lightGrey, padding: '100px 24px' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Label text="The 6-Step Framework" />
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(30px, 5vw, 56px)',
              fontWeight: 400,
              color: C.ink,
              textTransform: 'uppercase',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              marginBottom: '16px',
            }}>
              Stop guessing. Start thinking like a consultant.
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: C.muted,
              marginBottom: '64px',
              maxWidth: '560px',
            }}>
              Great consultants don't magically know the answer. They know how to find it.
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { n: '01', t: 'DEFINE THE PROBLEM', b: 'Clarify exactly what you\'re trying to solve before reaching for any solution.' },
              { n: '02', t: 'BREAK IT DOWN', b: 'Decompose the problem into smaller, manageable parts you can investigate independently.' },
              { n: '03', t: 'FIND THE ROOT CAUSE', b: 'Dig beneath the symptoms to discover what is actually driving the issue.' },
              { n: '04', t: 'ANALYZE THE EVIDENCE', b: 'Separate facts from assumptions and build your understanding on solid ground.' },
              { n: '05', t: 'DEVELOP THE SOLUTION', b: 'Generate multiple options before committing to the most effective path forward.' },
              { n: '06', t: 'TURN THINKING INTO ACTION', b: 'Package your recommendation so clients understand it, trust it and can act on it.' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 50}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: '24px',
                  padding: '36px 0',
                  borderBottom: `1px solid ${C.border}`,
                  alignItems: 'flex-start',
                }}>
                  <div>
                    <span style={{
                      fontFamily: "'Anton', sans-serif",
                      fontSize: 'clamp(48px, 7vw, 80px)',
                      fontWeight: 400,
                      color: i % 2 === 0 ? C.yellow : `rgba(45,27,105,0.12)`,
                      lineHeight: 1,
                      display: 'block',
                    }}>
                      {step.n}
                    </span>
                  </div>
                  <div style={{ paddingTop: '8px' }}>
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: C.purple,
                      marginBottom: '8px',
                    }}>
                      {step.t}
                    </p>
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 'clamp(15px, 1.8vw, 17px)',
                      lineHeight: 1.75,
                      color: C.bodyText,
                      margin: 0,
                    }}>
                      {step.b}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          § 5 — EMPATHY + TESTIMONIALS
      ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '100px 24px' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Label text="We Understand" />
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(30px, 5vw, 54px)',
              fontWeight: 400,
              color: C.ink,
              textTransform: 'uppercase',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              marginBottom: '24px',
            }}>
              We know how this feels.
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: 1.8,
              color: C.bodyText,
              marginBottom: '12px',
              maxWidth: '620px',
            }}>
              You care about your clients. You put in the hours. But when the results don't match the effort, it's frustrating.
            </p>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: 1.8,
              color: C.bodyText,
              marginBottom: '56px',
              maxWidth: '620px',
            }}>
              We've been there, and we wrote this book to help you fix it.
            </p>
          </Reveal>

          {/* Testimonials */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '56px' }} className="pc-testi-grid">
            {[
              { quote: "I have read a lot of business books, but what I like about Think Like a Consultant is how practical it is. It gives you a simple way to look at a business problem, break it down and know what to do next.", name: "ThankGod Akpa", title: "Founder, Impakt100" },
              { quote: "The ideas are simple, but they make you think differently. It has changed the way I approach some of the decisions I make in business.", name: "Peterson Akodi", title: "Co-Founder, SPacebox" },
              { quote: "Sometimes the problem is not that you don't have a solution. The problem is that you have not properly understood the problem. This book gives you a practical process for thinking through difficult situations.", name: "David Utulor", title: "Director, Mc Dave Schools" },
              { quote: "As someone who works with businesses, I found the frameworks in this book very useful. It gives you a structured way to think when things are unclear instead of just relying on experience or instinct.", name: "August Ojile", title: "CEO, Cueball Digital Agency" },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  backgroundColor: C.lightGrey,
                  borderLeft: `4px solid ${i % 2 === 0 ? C.purple : C.yellow}`,
                  padding: '28px 24px',
                }}>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 'clamp(14px, 1.6vw, 16px)',
                    lineHeight: 1.8,
                    color: C.bodyText,
                    fontStyle: 'italic',
                    marginBottom: '20px',
                  }}>
                    "{t.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      backgroundColor: i % 2 === 0 ? C.purple : C.yellow,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <span style={{
                        fontFamily: "'Anton', sans-serif",
                        fontSize: '14px',
                        color: i % 2 === 0 ? C.yellow : C.purple,
                        lineHeight: 1,
                      }}>
                        {t.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 700, color: C.ink, margin: 0 }}>{t.name}</p>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: C.muted, margin: 0 }}>{t.title}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          § 6 — BEFORE / AFTER
      ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.purple, padding: '100px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 400,
              color: C.white,
              textTransform: 'uppercase',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              marginBottom: '56px',
              textAlign: 'center',
            }}>
              Imagine walking into your next client meeting differently.
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: 'rgba(255,255,255,0.1)' }} className="pc-ba-grid">
            {/* Before */}
            <Reveal>
              <div style={{ backgroundColor: C.purpleMid, padding: '40px 32px' }}>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)', marginBottom: '28px',
                }}>
                  Before
                </p>
                {[
                  "You don't know where to start.",
                  "You overthink the problem.",
                  "You rely on instinct.",
                  "You struggle to explain your recommendation.",
                  "You worry whether your solution will work.",
                ].map((t, i) => (
                  <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 700, flexShrink: 0, paddingTop: '2px' }}>—</span>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.7vw, 16px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>{t}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* After */}
            <Reveal delay={80}>
              <div style={{ backgroundColor: C.purpleLight, padding: '40px 32px' }}>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '11px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: C.yellow, marginBottom: '28px',
                }}>
                  After
                </p>
                {[
                  "You know exactly where to start.",
                  "You break complex problems into manageable parts.",
                  "You have a repeatable process.",
                  "You can explain your thinking clearly.",
                  "You deliver solutions with confidence.",
                ].map((t, i) => (
                  <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.yellow, fontWeight: 700, flexShrink: 0, paddingTop: '2px', fontSize: '14px' }}>✓</span>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.7vw, 16px)', color: C.white, lineHeight: 1.6, margin: 0 }}>{t}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          § 7 — WHO IT'S FOR
      ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Is This For You?" />
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 400,
              color: C.ink,
              textTransform: 'uppercase',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              marginBottom: '48px',
            }}>
              This book is for you if…
            </h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              "You're a consultant who wants to deliver better results.",
              "You're tired of relying on guesswork.",
              "You want clients to trust your recommendations.",
              "You want a repeatable process for solving difficult problems.",
              "You're building a consulting practice and want to become known for results.",
              "You're an expert who wants to think more strategically.",
            ].map((item, i) => (
              <Reveal key={i} delay={i * 40}>
                <div style={{
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                  padding: '22px 0', borderBottom: `1px solid ${C.border}`,
                }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    backgroundColor: C.yellow, flexShrink: 0, marginTop: '9px',
                    boxShadow: `0 0 0 3px ${C.purple}20`,
                  }} />
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 'clamp(16px, 2vw, 19px)',
                    lineHeight: 1.65,
                    color: C.bodyText,
                    margin: 0,
                  }}>
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          § 8 — HOW IT WORKS
      ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.lightGrey, padding: '100px 24px' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <Reveal>
            <Label text="Getting Started" />
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 400,
              color: C.ink,
              textTransform: 'uppercase',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              marginBottom: '56px',
            }}>
              3 Simple Steps to Start Thinking Like a Consultant
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: C.border }} className="pc-steps-grid">
            {[
              { n: '01', t: 'Get the Book', b: 'Add the ebook to your cart. One click and it\'s yours.' },
              { n: '02', t: 'Complete Checkout', b: 'Complete your secure checkout quickly and safely.' },
              { n: '03', t: 'Start Learning', b: 'Get instant access and start applying the framework to your next client challenge.' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ backgroundColor: C.white, padding: '40px 28px' }}>
                  <span style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: '64px',
                    fontWeight: 400,
                    color: i === 1 ? C.yellow : `rgba(45,27,105,0.1)`,
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '16px',
                  }}>
                    {step.n}
                  </span>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '13px', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: C.purple, marginBottom: '10px',
                  }}>
                    {step.t}
                  </p>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 'clamp(14px, 1.6vw, 16px)',
                    lineHeight: 1.75,
                    color: C.bodyText,
                    margin: 0,
                  }}>
                    {step.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          § 9 — FINAL SALES
      ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.purple, padding: '100px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(28px, 5vw, 56px)',
              fontWeight: 400,
              color: C.white,
              textTransform: 'uppercase',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              marginBottom: '24px',
            }}>
              Are you tired of struggling to deliver results?
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '16px',
              maxWidth: '620px',
              margin: '0 auto 16px',
            }}>
              You're not alone. Many consultants struggle to meet client expectations, not because they lack talent, but because they lack a clear process.
            </p>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '40px',
              maxWidth: '620px',
              margin: '0 auto 40px',
            }}>
              <em>Think Like a Consultant</em> simplifies how you solve business problems with a practical, easy-to-follow six-step framework. Apply it, and you'll address client issues with confidence, build stronger relationships and become known as the consultant who delivers.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: `1px solid rgba(255,214,0,0.3)`,
              padding: '32px',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
            }}>
              <p style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(22px, 3.5vw, 36px)',
                fontWeight: 400,
                color: C.yellow,
                textTransform: 'uppercase',
                lineHeight: 1.2,
                marginBottom: '4px',
                letterSpacing: '0.02em',
              }}>
                Your next client deserves your best thinking.
              </p>
              <p style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(20px, 3vw, 30px)',
                fontWeight: 400,
                color: C.white,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                margin: 0,
              }}>
                Give it to them.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <CTABtn text="Get Think Like a Consultant Now" />
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '12px',
              color: 'rgba(255,255,255,0.3)',
              marginTop: '14px',
              letterSpacing: '0.06em',
            }}>
              Instant digital access
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          § 10 — FINAL BOOK DISPLAY
      ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: C.white, padding: '100px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
              <BookMockup size={220} />
            </div>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: C.purpleLight, marginBottom: '8px',
            }}>
              Think Like a Consultant
            </p>
            <h3 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(20px, 3.5vw, 36px)',
              fontWeight: 400,
              color: C.ink,
              textTransform: 'uppercase',
              lineHeight: 1.2,
              letterSpacing: '0.02em',
              marginBottom: '12px',
            }}>
              A Practical Guide to Solving Business Problems
            </h3>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              color: C.muted,
              marginBottom: '36px',
              fontStyle: 'italic',
            }}>
              Think better. Solve faster. Deliver more value.
            </p>
            <CTABtn text="Buy the Book" />
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: C.ink, padding: '36px 24px', textAlign: 'center' }}>
        <p style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: '18px',
          fontWeight: 400,
          letterSpacing: '0.08em',
          color: C.white,
          marginBottom: '6px',
        }}>
          THINK LIKE A CONSULTANT
        </p>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          color: 'rgba(255,255,255,0.3)',
          margin: '0 0 6px',
        }}>
          Helping consultants think better, solve faster and deliver more value.
        </p>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '11px',
          color: 'rgba(255,255,255,0.2)',
          margin: 0,
        }}>
          © {new Date().getFullYear()} Quick Learn Plus
        </p>
      </footer>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="pc-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 300,
        display: 'none',
        padding: '12px 16px',
        backgroundColor: C.purple,
        borderTop: `3px solid ${C.yellow}`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'block', width: '100%', textAlign: 'center',
            backgroundColor: C.yellow, color: C.purple,
            fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 800,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '16px', textDecoration: 'none',
          }}
        >
          Get the Book Now
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 860px) {
          .pc-hero-grid  { grid-template-columns: 1fr !important; }
          .pc-split-grid { grid-template-columns: 1fr !important; }
          .pc-ba-grid    { grid-template-columns: 1fr !important; }
          .pc-testi-grid { grid-template-columns: 1fr !important; }
          .pc-steps-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .pc-sticky { display: block !important; }
        }
      `}</style>
    </div>
  )
}
