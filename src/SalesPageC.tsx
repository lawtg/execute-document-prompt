import { useRef, useState, useEffect } from 'react'
import consultantCover from './-like-a-consultant-cover.png'

/* ─── tokens ─────────────────────────────────────────── */
const C = {
  bg:      '#FFFFFF',
  surface: '#F5F5F5',
  ink:     '#111111',
  body:    '#333333',
  yellow:  '#1A1A1A',   /* headlines now near-black */
  accent:  '#B89B5E',   /* gold accent */
  red:     '#CC0000',
  muted:   '#777777',
  border:  '#E0E0E0',
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
      transform: vis ? 'translateY(0)' : 'translateY(20px)',
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
        backgroundColor: '#0D2137',
        color: '#FFFFFF',
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: '20px',
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        padding: '20px 32px',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'background-color 0.15s',
        cursor: 'pointer',
        border: 'none',
        lineHeight: 1.3,
        boxSizing: 'border-box' as const,
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1A3A5C')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0D2137')}
    >
      {text}
    </a>
  )
}

/* ─── Yellow rule ─────────────────────────────────────── */
function YRule() {
  return <div style={{ height: '2px', backgroundColor: C.accent, margin: '48px 0' }} />
}

/* ─── Section headline ────────────────────────────────── */
function SHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontSize: 'clamp(24px, 4vw, 34px)',
      fontWeight: 700,
      color: C.ink,
      textTransform: 'uppercase',
      lineHeight: 1.25,
      marginBottom: '28px',
      letterSpacing: '0.02em',
    }}>
      {children}
    </h2>
  )
}

const body: React.CSSProperties = {
  fontFamily: "'Georgia', 'Times New Roman', serif",
  fontSize: 'clamp(17px, 2.2vw, 20px)',
  lineHeight: 1.9,
  color: C.body,
}

/* ─── Numbered benefit ────────────────────────────────── */
function Benefit({ num, title, body: bodyText }: { num: number; title: string; body: string }) {
  return (
    <Reveal>
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: '28px 0' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '10px' }}>
          <span style={{
            backgroundColor: '#0D2137', color: '#fff',
            fontFamily: "'Georgia', serif", fontSize: '14px', fontWeight: 700,
            width: '32px', height: '32px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, lineHeight: 1,
          }}>{num}</span>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(16px, 2.2vw, 19px)', fontWeight: 700, color: C.ink, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.35, margin: 0 }}>
            {title}
          </p>
        </div>
        <p style={{ ...body, margin: '0 0 0 48px' }}>{bodyText}</p>
      </div>
    </Reveal>
  )
}

/* ─── Testimonial ─────────────────────────────────────── */
function Testi({ quote, name, title }: { quote: string; name: string; title: string }) {
  return (
    <Reveal>
      <div style={{ borderLeft: `3px solid ${C.accent}`, paddingLeft: '20px', marginBottom: '32px' }}>
        <p style={{ ...body, fontStyle: 'italic', marginBottom: '10px' }}>"{quote}"</p>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: '17px', fontWeight: 700, color: C.ink, margin: 0 }}>{name}</p>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: '15px', color: C.muted, margin: 0 }}>{title}</p>
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
    <div style={{ backgroundColor: C.bg, color: C.ink, fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: C.bg, padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>

          <Reveal>
            {/* Red urgency tag */}
            <div style={{ display: 'inline-block', backgroundColor: C.red, padding: '6px 18px', marginBottom: '28px' }}>
              <span style={{ fontFamily: "'Georgia', serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.ink }}>
                Quick Learn Plus — New Release
              </span>
            </div>

            {/* Big yellow headline */}
            <h1 style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 'clamp(28px, 5.5vw, 48px)',
              fontWeight: 700,
              color: C.ink,
              textTransform: 'uppercase',
              lineHeight: 1.2,
              letterSpacing: '0.02em',
              marginBottom: '28px',
            }}>
              GIVE ME 3 HOURS AND I WILL SHOW YOU HOW TO THINK THROUGH ALMOST ANY BUSINESS PROBLEM
            </h1>
          </Reveal>

          <Reveal delay={60}>
            {/* Book cover */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 32px' }}>
              <div style={{ perspective: '800px', display: 'inline-block' }}>
                <img src={consultantCover} alt="Think Like a Consultant"
                  style={{
                    width: 'clamp(160px, 40vw, 260px)',
                    display: 'block',
                    borderRadius: '2px 6px 6px 2px',
                    boxShadow: '8px 16px 48px rgba(255,215,0,0.2), 0 4px 24px rgba(0,0,0,0.8)',
                    transform: 'rotateY(-4deg)',
                    transformOrigin: 'left center',
                  }}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p style={{ ...body, marginBottom: '16px' }}>
              Whether you are a consultant helping clients solve business problems or a business owner trying to solve problems in your own company, this book will give you a simple way to think.
            </p>
            <p style={{ ...body, marginBottom: '36px' }}>
              <em>Think Like a Consultant</em> shows you how to take a confusing business problem, break it down, find out what is really wrong and work towards a solution.
            </p>
            <CTABtn text="Get Think Like a Consultant Now" id="order" />
          </Reveal>
        </div>
      </section>

      {/* ── REST OF PAGE ── */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>

        <YRule />

        {/* ── PROBLEM ── */}
        <Reveal>
          <SHeadline>BUSINESS PROBLEMS WILL ALWAYS COME.</SHeadline>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '28px' }}>
            {[
              'Sales are going down.',
              'Your staff are not performing.',
              'Customers are leaving.',
              'Costs are too high.',
              'You have a big decision to make.',
              'Your business is growing, but things are becoming harder to manage.',
              'You have tried a few things, but you are still not sure what is actually working.',
            ].map((line, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
                <span style={{ color: C.accent, fontWeight: 700, flexShrink: 0, paddingTop: '3px', fontSize: '14px' }}>›</span>
                <span style={body}>{line}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', ...body }}>
            <p>So what do you do?</p>
            <p>You can keep guessing.</p>
            <p>You can try one solution after another.</p>
            <p>Or you can learn how to properly solve business problems.</p>
            <p style={{ color: C.accent, fontWeight: 700, fontSize: 'clamp(16px, 2.2vw, 19px)' }}>That is what this book is about.</p>
          </div>
        </Reveal>

        <YRule />

        {/* ── WHY ── */}
        <Reveal>
          <SHeadline>WHY DID WE WRITE THIS BOOK?</SHeadline>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', ...body }}>
            <p>Good consultants are not valuable simply because they know a lot of business terms.</p>
            <p>They are valuable because they know how to think through difficult problems.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', margin: '20px 0' }}>
            {[
              'They know how to ask the right questions.',
              'They know how to separate symptoms from the real problem.',
              'They know how to break complicated situations into smaller pieces.',
              'They know how to compare different solutions.',
              'And they know how to turn all of this into a clear recommendation.',
            ].map((line, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
                <span style={{ color: C.accent, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={body}>{line}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', ...body }}>
            <p>We put these ideas into <em>Think Like a Consultant</em> so you can learn the same way of thinking without spending years trying to figure it out yourself.</p>
            <p style={{ color: C.accent, fontWeight: 700 }}>Whether you are a consultant or a business owner, you can use these ideas immediately.</p>
          </div>
        </Reveal>

        <YRule />

        {/* ── WHAT YOU WILL LEARN ── */}
        <Reveal>
          <SHeadline>HERE ARE SOME OF THE THINGS YOU WILL LEARN</SHeadline>
        </Reveal>

        <Benefit num={1} title="HOW TO FIND WHERE YOUR BUSINESS IS LEAKING MONEY, TIME AND RESOURCES"
          body="Sometimes the problem is not where you think it is. Learn how to investigate a business problem properly and find what is really causing it." />
        <Benefit num={2} title="HOW TO BREAK DOWN A BIG BUSINESS PROBLEM"
          body="Some problems look so big that you don't even know where to start. Learn how to break complicated problems into smaller parts so you can deal with them one at a time." />
        <Benefit num={3} title="HOW TO GENERATE BETTER SOLUTIONS"
          body="Don't fall in love with the first idea that comes to your mind. Learn how to develop several possible solutions before deciding what to do." />
        <Benefit num={4} title="HOW TO KNOW WHAT TO FIX FIRST"
          body="Everything can look urgent when you run a business. Learn how to decide which problems deserve your attention first." />
        <Benefit num={5} title="HOW TO TEST AN IDEA BEFORE BETTING THE BUSINESS ON IT"
          body="Not every good idea is a good business idea. Learn how to test your thinking before putting serious money, time and resources behind it." />
        <Benefit num={6} title="HOW TO MAKE BETTER BUSINESS DECISIONS"
          body="Learn how to separate facts, assumptions and opinions so you can make decisions with more clarity." />
        <Benefit num={7} title="HOW TO KNOW IF YOUR STRATEGY IS ACTUALLY WORKING"
          body="Don't wait until the end of the year to discover that your strategy failed. Learn simple ways to track progress and know what is working." />
        <Benefit num={8} title="HOW TO GET YOUR TEAM TO SUPPORT YOUR DECISIONS"
          body="A good decision means very little if your team does not understand it or support it. Learn how to bring people along when important decisions are made." />
        <Benefit num={9} title="HOW TO MANAGE PROJECTS WITHOUT MAKING THEM COMPLICATED"
          body="Learn how to structure projects, keep people accountable and move work forward without unnecessary processes." />
        <Benefit num={10} title="HOW TO THINK ABOUT PRICING"
          body="Your price affects your revenue, profit, customers and position in the market. Learn how to think about pricing instead of simply copying what your competitors charge." />
        <Benefit num={11} title="HOW TO ESTIMATE A BUSINESS OPPORTUNITY"
          body="Before you enter a market, you need to know if the opportunity is actually worth pursuing. Learn how to estimate the size of an opportunity without hiring an expensive research team." />
        <Benefit num={12} title="HOW TO SEE WHAT IS HAPPENING OUTSIDE YOUR BUSINESS"
          body="The economy changes. Technology changes. Customers change. Competition changes. Regulations change. Learn how to identify external forces that could affect your business." />
        <Benefit num={13} title="HOW TO SOLVE PROBLEMS WITHOUT GETTING OVERWHELMED"
          body="Instead of staring at one giant problem and wondering what to do, learn how to break it into smaller questions you can actually answer." />
        <Benefit num={14} title="HOW TO TURN A MESSY SITUATION INTO A CLEAR STORY"
          body="Before you make an important decision, you need to understand what is actually happening. Learn how to separate what happened, what changed and what question you really need to answer." />
        <Benefit num={15} title="THE 6-STEP PROCESS FOR SOLVING BUSINESS PROBLEMS"
          body="You will learn a simple process you can use whenever a difficult problem comes up. So the next time something goes wrong, you don't have to start from zero. You have a process to follow." />

        <Reveal>
          <div style={{ backgroundColor: C.surface, border: `1px solid ${C.accent}`, padding: '28px', margin: '16px 0' }}>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: 700, color: C.accent, marginBottom: '14px', textTransform: 'uppercase' }}>
              AND THERE IS MUCH MORE.
            </p>
            <p style={{ ...body, marginBottom: '12px' }}>
              These are not ideas you are supposed to read and forget.
            </p>
            <p style={{ ...body, margin: 0 }}>
              They are frameworks you can take into a meeting, use with a client, apply to your business and come back to whenever you have a difficult problem to solve.
            </p>
          </div>
        </Reveal>

        <YRule />

        {/* ── MID CTA ── */}
        <Reveal>
          <CTABtn text="Get Think Like a Consultant Now" />
        </Reveal>

        <YRule />

        {/* ── FOR CONSULTANTS ── */}
        <Reveal>
          <SHeadline>IF YOU ARE A CONSULTANT, THIS BOOK IS FOR YOU.</SHeadline>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', ...body }}>
            <p>Your clients don't pay you because you know big words.</p>
            <p>They pay you because they expect you to help them solve problems.</p>
            <p>The better you become at understanding problems, asking good questions, analysing situations and developing solutions, the more useful you become to your clients.</p>
            <p style={{ color: C.accent, fontWeight: 700 }}>This book gives you practical frameworks you can use in your consulting work.</p>
          </div>
        </Reveal>

        <YRule />

        {/* ── FOR BUSINESS OWNERS ── */}
        <Reveal>
          <SHeadline>IF YOU ARE A BUSINESS OWNER, THIS BOOK IS ALSO FOR YOU.</SHeadline>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', ...body }}>
            <p>You cannot hire a consultant every time something goes wrong in your business.</p>
            <p>Sometimes you need to be able to sit down, look at the problem and figure out what is really going on.</p>
            <p>This book can help you do that.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', margin: '20px 0' }}>
            {[
              "You don't need an MBA.",
              "You don't need to work for a big consulting firm.",
              "You don't even need to call yourself a consultant.",
            ].map((line, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
                <span style={{ color: C.red, fontWeight: 700, flexShrink: 0 }}>✗</span>
                <span style={body}>{line}</span>
              </div>
            ))}
          </div>
          <p style={{ ...body, color: C.accent, fontWeight: 700, fontSize: 'clamp(16px, 2.2vw, 19px)', marginTop: '16px' }}>
            You simply need to learn how to think through problems properly.
          </p>
        </Reveal>

        <YRule />

        {/* ── TESTIMONIALS ── */}
        <Reveal>
          <SHeadline>A FEW WORDS FROM PEOPLE WHO HAVE READ IT</SHeadline>
        </Reveal>

        <Testi
          quote="I have read a lot of business books, but what I like about Think Like a Consultant is how practical it is. It gives you a simple way to look at a business problem, break it down and know what to do next."
          name="ThankGod Akpa"
          title="Founder, Impakt100"
        />
        <Testi
          quote="The ideas are simple, but they make you think differently. It has changed the way I approach some of the decisions I make in business."
          name="Peterson Akodi"
          title="Co-Founder, SPacebox"
        />
        <Testi
          quote="Sometimes the problem is not that you don't have a solution. The problem is that you have not properly understood the problem. This book gives you a practical process for thinking through difficult situations before making a decision."
          name="David Utulor"
          title="Director, Mc Dave Schools"
        />
        <Testi
          quote="As someone who works with businesses, I found the frameworks in this book very useful. It gives you a structured way to think when things are unclear instead of just relying on experience or instinct."
          name="August Ojile"
          title="CEO, Cueball Digital Agency"
        />

        <YRule />

        {/* ── ABOUT ── */}
        <Reveal>
          <SHeadline>ABOUT QUICK LEARN PLUS</SHeadline>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', ...body }}>
            <p>Quick Learn Plus is a business education company that turns complex business ideas into simple and practical lessons.</p>
            <p>We create books and learning resources around business, strategy, problem-solving and other useful business skills.</p>
            <p>The goal is simple:</p>
            <p style={{ color: C.accent, fontWeight: 700, fontStyle: 'italic', borderLeft: `3px solid ${C.accent}`, paddingLeft: '18px' }}>
              Help you learn useful ideas quickly and apply them in the real world.
            </p>
            <p><em>Think Like a Consultant</em> is one of our practical books designed to help consultants, entrepreneurs and business owners develop a better way of solving business problems.</p>
          </div>
        </Reveal>

        <YRule />

        {/* ── FINAL CLOSE ── */}
        <Reveal>
          <SHeadline>THE NEXT BUSINESS PROBLEM WILL COME.</SHeadline>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', ...body, marginBottom: '36px' }}>
            <p>It may be next week.</p>
            <p>It may be tomorrow.</p>
            <p>It may already be sitting on your desk.</p>
            <p>When it comes, you can guess.</p>
            <p>You can panic.</p>
            <p>You can keep trying random solutions.</p>
            <p style={{ color: C.accent, fontWeight: 700, fontSize: 'clamp(16px, 2.2vw, 19px)' }}>
              Or you can have a process that helps you understand the problem and work towards the right solution.
            </p>
            <p><em>Think Like a Consultant</em> gives you that process.</p>
            <p style={{ fontWeight: 700, color: C.ink }}>Get your copy now.</p>
          </div>
          <CTABtn text="Get Think Like a Consultant" />
        </Reveal>

        <div style={{ height: '64px' }} />
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#050505', padding: '28px 24px', textAlign: 'center', borderTop: `1px solid ${C.border}` }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: '12px', color: C.muted, margin: '0 0 8px' }}>
          © {new Date().getFullYear()} Quick Learn Plus · Think Like a Consultant
        </p>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: '11px', color: '#555', margin: 0, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          Results depend on your circumstances, industry and effort. No specific business outcome is guaranteed.
        </p>
      </footer>

      {/* ── MOBILE STICKY ── */}
      <div className="ownerC-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
        display: 'none', padding: '10px 16px',
        backgroundColor: '#fff', borderTop: `2px solid ${C.accent}`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'block', width: '100%', textAlign: 'center',
            backgroundColor: C.accent, color: '#fff',
            fontFamily: "'Georgia', serif", fontSize: '14px', fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '15px', textDecoration: 'none',
          }}
        >
          Get Think Like a Consultant Now
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
