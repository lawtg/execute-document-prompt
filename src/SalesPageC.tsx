import { useRef, useState, useEffect } from 'react'
import consultantCover from './-like-a-consultant-cover.png'

const C = {
  purple:     '#2D1B69',
  purpleMid:  '#3D2A80',
  purpleLight:'#4E3894',
  yellow:     '#FFD600',
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
      transform: vis ? 'none' : 'translateY(24px)',
      transition: `opacity .65s ease ${delay}ms, transform .65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

function CTABtn({ text, id }: { text: string; id?: string }) {
  return (
    <a href={SELAR} target="_blank" rel="noopener noreferrer" id={id}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: C.yellow, color: C.purple,
        fontFamily: "'Poppins', sans-serif",
        fontSize: '17px', fontWeight: 800,
        letterSpacing: '0.06em', textTransform: 'uppercase',
        padding: '20px 52px', textDecoration: 'none',
        transition: 'background-color 0.15s, transform 0.12s',
        cursor: 'pointer', lineHeight: 1.2,
        boxShadow: '0 6px 24px rgba(255,214,0,0.35)',
        boxSizing: 'border-box' as const,
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

function BookMockup({ size = 240 }: { size?: number }) {
  return (
    <div style={{ perspective: '900px', display: 'inline-block' }}>
      <img src={consultantCover} alt="Think Like a Consultant"
        style={{
          width: `${size}px`, display: 'block',
          borderRadius: '2px 6px 6px 2px',
          boxShadow: `${size * 0.06}px ${size * 0.1}px ${size * 0.22}px rgba(0,0,0,0.5), 0 0 ${size * 0.15}px rgba(255,214,0,0.1)`,
          transform: 'rotateY(-10deg) rotateX(2deg)',
          transformOrigin: 'left center',
        }}
      />
    </div>
  )
}

const P: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: 'clamp(16px, 2vw, 19px)',
  lineHeight: 1.85,
  color: C.bodyText,
  marginBottom: '18px',
}

const PW: React.CSSProperties = {
  ...P,
  color: 'rgba(255,255,255,0.75)',
}

function Rule() {
  return <div style={{ height: '2px', backgroundColor: C.yellow, margin: '0' }} />
}

export default function SalesPageC() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ backgroundColor: C.offWhite, color: C.ink, fontFamily: "'Poppins', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: C.purple, padding: '96px 24px 88px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>
              The Practical Guide For Solving Any Business Problem
            </p>
            <h1 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(36px, 7vw, 80px)',
              fontWeight: 400, lineHeight: 1.05,
              color: C.white, letterSpacing: '0.01em',
              textTransform: 'uppercase', marginBottom: '24px',
            }}>
              Become one of the{' '}
              <span style={{ color: C.yellow }}>Top 1%</span>{' '}
              Consultants in Africa.
            </h1>
          </Reveal>
          <Reveal delay={60}>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(17px, 2.5vw, 22px)',
              fontWeight: 600, lineHeight: 1.55,
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '16px',
            }}>
              Are you struggling to deliver{' '}
              <span style={{ color: C.yellow }}>consistent solutions</span>{' '}
              for all your clients?
            </p>
            <p style={{ ...PW, maxWidth: '600px', margin: '0 auto 40px', textAlign: 'center' }}>
              Learn how to think through complex business problems, eliminate guesswork and deliver solutions your clients can trust.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CTABtn text="Get the Book Now" id="order" />
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '14px', letterSpacing: '0.04em' }}>
              Instant digital access&nbsp;•&nbsp;Practical framework&nbsp;•&nbsp;Built for consultants
            </p>
          </Reveal>
        </div>
      </section>

      <Rule />

      {/* ── THE PROBLEM ── */}
      <section style={{ backgroundColor: C.white, padding: '96px 24px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(30px, 5vw, 56px)',
              fontWeight: 400, color: C.ink,
              textTransform: 'uppercase', lineHeight: 1.1,
              letterSpacing: '0.01em', marginBottom: '12px',
            }}>
              Your practice is about to transform.
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(17px, 2.2vw, 21px)',
              fontWeight: 600, color: C.purpleLight,
              marginBottom: '48px',
            }}>
              Avoid continued frustration with client results.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div style={{ backgroundColor: C.purple, padding: '28px 32px', marginBottom: '52px' }}>
              <p style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(20px, 3vw, 30px)',
                fontWeight: 400, color: C.yellow,
                letterSpacing: '0.02em', lineHeight: 1.3, margin: 0,
              }}>
                Every missed result costs you more than you think.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '52px' }}>
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
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: '16px', alignItems: 'center', padding: '20px 0', borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '26px', color: `rgba(45,27,105,${0.08 + i * 0.08})`, lineHeight: 1 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 500, color: C.bodyText, margin: 0, lineHeight: 1.5 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', color: C.muted, marginBottom: '12px' }}>
                You didn't become a consultant to feel stuck.
              </p>
              <h3 style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(26px, 4.5vw, 48px)',
                fontWeight: 400, color: C.purple,
                textTransform: 'uppercase', letterSpacing: '0.02em',
                marginBottom: '36px',
              }}>
                There's a better way to think.
              </h3>
              <CTABtn text="Buy the Ebook Now" />
            </div>
          </Reveal>
        </div>
      </section>

      <Rule />

      {/* ── WHAT'S INSIDE ── */}
      <section style={{ backgroundColor: C.lightGrey, padding: '96px 24px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 400, color: C.ink,
              textTransform: 'uppercase', lineHeight: 1.1,
              letterSpacing: '0.01em', marginBottom: '16px',
            }}>
              Stop Guessing. Start Thinking Like a Consultant.
            </h2>
            <p style={{ ...P, fontWeight: 600, color: C.purpleLight, marginBottom: '12px' }}>
              Great consultants don't magically know the answer. They know how to find it.
            </p>
            <p style={{ ...P, marginBottom: '48px' }}>
              <em>Think Like a Consultant</em> gives you the mindset and method top consultants use to cut through complexity, think clearly and deliver solutions clients can't stop talking about.
            </p>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { n: '01', t: 'GAIN CLARITY', b: 'Use a straightforward six-step process to make sense of complex problems.' },
              { n: '02', t: 'ELIMINATE GUESSWORK', b: 'Know what questions to ask, what to analyze and what to do next.' },
              { n: '03', t: 'BUILD YOUR REPUTATION', b: 'Become the consultant clients trust when the problem is difficult.' },
              { n: '04', t: 'DELIVER BETTER SOLUTIONS', b: 'Turn your thinking into practical solutions clients can actually use.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: '20px', padding: '28px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '32px', color: C.yellow, lineHeight: 1 }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.purple, marginBottom: '6px' }}>{item.t}</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.75, color: C.bodyText, margin: 0 }}>{item.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ backgroundColor: C.white, padding: '96px 24px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 400, color: C.ink,
              textTransform: 'uppercase', lineHeight: 1.1,
              letterSpacing: '0.01em', marginBottom: '48px',
            }}>
              This Book Is For You If…
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
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '22px 0', borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: C.yellow, flexShrink: 0, marginTop: '9px', boxShadow: `0 0 0 4px rgba(45,27,105,0.12)` }} />
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.65, color: C.bodyText, margin: 0 }}>
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── HOW IT WORKS ── */}
      <section style={{ backgroundColor: C.lightGrey, padding: '96px 24px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              fontWeight: 400, color: C.ink,
              textTransform: 'uppercase', lineHeight: 1.1,
              letterSpacing: '0.01em', marginBottom: '56px',
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
                <div style={{ backgroundColor: C.white, padding: '36px 24px' }}>
                  <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '56px', fontWeight: 400, color: i === 1 ? C.yellow : 'rgba(45,27,105,0.1)', lineHeight: 1, display: 'block', marginBottom: '14px' }}>{step.n}</span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.purple, marginBottom: '8px' }}>{step.t}</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.75, color: C.bodyText, margin: 0 }}>{step.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ backgroundColor: C.white, padding: '96px 24px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(28px, 4.5vw, 48px)',
              fontWeight: 400, color: C.ink,
              textTransform: 'uppercase', lineHeight: 1.1,
              letterSpacing: '0.01em', marginBottom: '48px',
            }}>
              What People Are Saying
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="pc-testi-grid">
            {[
              { q: "I have read a lot of business books, but what I like about Think Like a Consultant is how practical it is. It gives you a simple way to look at a business problem, break it down and know what to do next.", n: "ThankGod Akpa", t: "Founder, Impakt100" },
              { q: "The ideas are simple, but they make you think differently. It has changed the way I approach some of the decisions I make in business.", n: "Peterson Akodi", t: "Co-Founder, SPacebox" },
              { q: "Sometimes the problem is not that you don't have a solution. The problem is that you have not properly understood the problem. This book gives you a practical process for thinking through difficult situations.", n: "David Utulor", t: "Director, Mc Dave Schools" },
              { q: "As someone who works with businesses, I found the frameworks in this book very useful. It gives you a structured way to think when things are unclear instead of just relying on experience or instinct.", n: "August Ojile", t: "CEO, Cueball Digital Agency" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{ backgroundColor: C.lightGrey, borderLeft: `4px solid ${i % 2 === 0 ? C.purple : C.yellow}`, padding: '28px 24px' }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.8, color: C.bodyText, fontStyle: 'italic', marginBottom: '20px' }}>
                    "{item.q}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: i % 2 === 0 ? C.purple : C.yellow, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '13px', color: i % 2 === 0 ? C.yellow : C.purple, lineHeight: 1 }}>
                        {item.n.split(' ').map((w: string) => w[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 700, color: C.ink, margin: 0 }}>{item.n}</p>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: C.muted, margin: 0 }}>{item.t}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL SALES ── */}
      <section style={{ backgroundColor: C.purple, padding: '96px 24px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(28px, 5vw, 56px)',
              fontWeight: 400, color: C.white,
              textTransform: 'uppercase', lineHeight: 1.1,
              letterSpacing: '0.01em', marginBottom: '24px',
            }}>
              Are you tired of struggling to deliver results?
            </h2>
            <p style={{ ...PW, maxWidth: '600px', margin: '0 auto 16px' }}>
              You're not alone. Many consultants struggle to meet client expectations, not because they lack talent, but because they lack a clear process.
            </p>
            <p style={{ ...PW, maxWidth: '600px', margin: '0 auto 40px' }}>
              <em>Think Like a Consultant</em> simplifies how you solve business problems with a practical, easy-to-follow six-step framework. Apply it, and you'll address client issues with confidence, build stronger relationships and become known as the consultant who delivers.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: `1px solid rgba(255,214,0,0.3)`, padding: '28px 32px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(20px, 3.5vw, 34px)', fontWeight: 400, color: C.yellow, textTransform: 'uppercase', lineHeight: 1.2, marginBottom: '4px', letterSpacing: '0.02em' }}>
                Your next client deserves your best thinking.
              </p>
              <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(18px, 2.8vw, 28px)', fontWeight: 400, color: C.white, textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>
                Give it to them.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <CTABtn text="Get Think Like a Consultant Now" />
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '14px', letterSpacing: '0.06em' }}>
              Instant digital access
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── BOOK DISPLAY ── */}
      <section style={{ backgroundColor: C.white, padding: '96px 24px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
              <BookMockup size={220} />
            </div>
            <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 400, color: C.ink, textTransform: 'uppercase', lineHeight: 1.2, letterSpacing: '0.02em', marginBottom: '8px' }}>
              Think Like a Consultant
            </h3>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.8vw, 17px)', color: C.muted, marginBottom: '8px' }}>
              A Practical Guide to Solving Business Problems
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(14px, 1.6vw, 16px)', color: C.muted, fontStyle: 'italic', marginBottom: '32px' }}>
              Think better. Solve faster. Deliver more value.
            </p>
            <CTABtn text="Buy the Book" />
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: C.ink, padding: '36px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Anton', sans-serif", fontSize: '18px', fontWeight: 400, letterSpacing: '0.08em', color: C.white, marginBottom: '6px' }}>
          THINK LIKE A CONSULTANT
        </p>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
          Helping consultants think better, solve faster and deliver more value.
        </p>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: '6px 0 0' }}>
          © {new Date().getFullYear()} Quick Learn Plus
        </p>
      </footer>

      {/* ── STICKY MOBILE ── */}
      <div className="pc-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 300,
        display: 'none', padding: '12px 16px',
        backgroundColor: C.purple, borderTop: `3px solid ${C.yellow}`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: C.yellow, color: C.purple, fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '16px', textDecoration: 'none' }}>
          Get the Book Now
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @media (max-width: 760px) {
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
