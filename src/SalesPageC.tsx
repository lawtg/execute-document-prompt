import { useRef, useState, useEffect } from 'react'
import consultantCover from './-like-a-consultant-cover.png'

/* ─── Design tokens — SBBM-inspired ─────────────────── */
const C = {
  dark:    '#0A0F1E',       /* deep navy background */
  darkAlt: '#111827',       /* slightly lighter navy */
  light:   '#F5F0E8',       /* warm off-white */
  white:   '#FFFFFF',
  gold:    '#F5C842',       /* bright gold — SBBM yellow */
  goldDark:'#D4A817',
  red:     '#C0392B',
  ink:     '#1A1A2E',
  muted:   '#8A8FA8',
  border:  '#2A3050',
}

const SELAR = 'https://selar.com/978m069577'

/* ─── Helpers ────────────────────────────────────────── */
function useInView(threshold = 0.08) {
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
      transform: vis ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
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
        display: 'inline-block',
        backgroundColor: C.gold,
        color: C.ink,
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: 'clamp(15px, 2vw, 18px)',
        fontWeight: 700,
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
        padding: '20px 48px',
        textDecoration: 'none',
        transition: 'background-color 0.15s, transform 0.1s',
        cursor: 'pointer',
        border: `2px solid ${C.goldDark}`,
        boxShadow: '0 4px 16px rgba(245,200,66,0.35)',
        textAlign: 'center' as const,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.goldDark
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.gold
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
      }}
    >
      {text}
    </a>
  )
}

/* ─── Section divider line ───────────────────────────── */
function HDivider({ gold }: { gold?: boolean }) {
  return <div style={{ height: '2px', backgroundColor: gold ? C.gold : C.border, margin: '0' }} />
}

/* ─── Numbered benefit ───────────────────────────────── */
function Benefit({ num, title, body }: { num: number; title: string; body: string }) {
  return (
    <Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '20px', padding: '32px 0', borderBottom: `1px solid ${C.border}`, alignItems: 'flex-start' }}>
        <div style={{
          width: '48px', height: '48px', backgroundColor: C.gold, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <span style={{ fontFamily: "'Georgia', serif", fontSize: '18px', fontWeight: 700, color: C.ink, lineHeight: 1 }}>{num}</span>
        </div>
        <div>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(14px, 2vw, 17px)', fontWeight: 700, color: C.gold, marginBottom: '10px', lineHeight: 1.3, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
            {title}
          </p>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
            {body}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

/* ─── Testimonial card ───────────────────────────────── */
function Testimonial({ quote, name, title }: { quote: string; name: string; title: string }) {
  return (
    <Reveal>
      <div style={{
        backgroundColor: C.darkAlt,
        border: `1px solid ${C.border}`,
        borderLeft: `4px solid ${C.gold}`,
        padding: '32px 28px',
      }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.85, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', marginBottom: '20px' }}>
          "{quote}"
        </p>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: '15px', fontWeight: 700, color: C.gold, marginBottom: '2px' }}>{name}</p>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: '13px', color: C.muted }}>{title}</p>
      </div>
    </Reveal>
  )
}

/* ─── PAGE ───────────────────────────────────────────── */
export default function SalesPageC() {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const fn = () => setSticky(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ backgroundColor: C.dark, color: C.white, fontFamily: "'Georgia', 'Times New Roman', serif", lineHeight: 1.75 }}>

      {/* ── NAV ── */}
      <nav style={{ backgroundColor: C.dark, borderBottom: `1px solid ${C.border}`, padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <span style={{ fontFamily: "'Georgia', serif", fontSize: '13px', fontWeight: 700, color: C.gold, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Quick Learn Plus</span>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "'Georgia', serif", fontSize: '12px', fontWeight: 700, color: C.gold, textDecoration: 'none', border: `1px solid ${C.gold}`, padding: '8px 20px', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'all 0.15s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.gold; (e.currentTarget as HTMLAnchorElement).style.color = C.ink }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = C.gold }}
        >
          Get The Book
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: C.dark, padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '64px', alignItems: 'center' }} className="ownerC-hero-grid">

          {/* Left */}
          <div>
            <Reveal>
              <div style={{ display: 'inline-block', backgroundColor: C.red, padding: '6px 16px', marginBottom: '24px' }}>
                <span style={{ fontFamily: "'Georgia', serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.white }}>
                  New Release — Quick Learn Plus
                </span>
              </div>
              <h1 style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: 'clamp(26px, 4.5vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: C.gold,
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
              }}>
                GIVE ME 3 HOURS AND I WILL SHOW YOU HOW TO THINK THROUGH ALMOST ANY BUSINESS PROBLEM
              </h1>
            </Reveal>
            <Reveal delay={60}>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.85, color: 'rgba(255,255,255,0.85)', marginBottom: '16px' }}>
                Whether you are a consultant helping clients solve business problems or a business owner trying to solve problems in your own company, this book will give you a simple way to think.
              </p>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.85, color: 'rgba(255,255,255,0.85)', marginBottom: '40px' }}>
                <em>Think Like a Consultant</em> shows you how to take a confusing business problem, break it down, find out what is really wrong and work towards a solution.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <CTABtn text="Get Think Like a Consultant Now" id="order" />
            </Reveal>
          </div>

          {/* Right: book */}
          <Reveal delay={120}>
            <div style={{ flexShrink: 0 }}>
              <div style={{ perspective: '800px', display: 'inline-block' }}>
                <img src={consultantCover} alt="Think Like a Consultant"
                  style={{
                    width: 'clamp(180px, 22vw, 280px)',
                    display: 'block',
                    borderRadius: '3px 8px 8px 3px',
                    boxShadow: '12px 20px 56px rgba(0,0,0,0.6), 0 0 40px rgba(245,200,66,0.15)',
                    transform: 'rotateY(-6deg)',
                    transformOrigin: 'left center',
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <HDivider gold />

      {/* ── PROBLEM SECTION ── */}
      <section style={{ backgroundColor: C.darkAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 700, color: C.gold, textTransform: 'uppercase', marginBottom: '40px', lineHeight: 1.25 }}>
              BUSINESS PROBLEMS WILL ALWAYS COME.
            </h2>
          </Reveal>
          <Reveal delay={40}>
            <div style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                'Sales are going down.',
                'Your staff are not performing.',
                'Customers are leaving.',
                'Costs are too high.',
                'You have a big decision to make.',
                'Your business is growing, but things are becoming harder to manage.',
                'You have tried a few things, but you are still not sure what is actually working.',
              ].map((line, i) => (
                <div key={i} style={{ padding: '12px 0', borderBottom: `1px solid ${C.border}`, display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ color: C.gold, fontWeight: 700, flexShrink: 0, paddingTop: '2px' }}>›</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ marginTop: '40px', fontFamily: "'Georgia', serif", fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>So what do you do?</p>
              <p>You can keep guessing.</p>
              <p>You can try one solution after another.</p>
              <p>Or you can learn how to properly solve business problems.</p>
              <p style={{ color: C.gold, fontWeight: 700, fontSize: 'clamp(16px, 2.2vw, 19px)' }}>That is what this book is about.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <HDivider />

      {/* ── WHY WE WROTE THIS BOOK ── */}
      <section style={{ backgroundColor: C.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 700, color: C.gold, textTransform: 'uppercase', marginBottom: '36px', lineHeight: 1.25 }}>
              WHY DID WE WRITE THIS BOOK?
            </h2>
          </Reveal>
          <Reveal delay={40}>
            <div style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>Good consultants are not valuable simply because they know a lot of business terms.</p>
              <p>They are valuable because they know how to think through difficult problems.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', margin: '8px 0' }}>
                {[
                  'They know how to ask the right questions.',
                  'They know how to separate symptoms from the real problem.',
                  'They know how to break complicated situations into smaller pieces.',
                  'They know how to compare different solutions.',
                  'And they know how to turn all of this into a clear recommendation.',
                ].map((line, i) => (
                  <div key={i} style={{ padding: '12px 0', borderBottom: `1px solid ${C.border}`, display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.gold, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
              <p>We put these ideas into <em>Think Like a Consultant</em> so you can learn the same way of thinking without spending years trying to figure it out yourself.</p>
              <p style={{ color: C.gold, fontWeight: 700 }}>Whether you are a consultant or a business owner, you can use these ideas immediately.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <HDivider gold />

      {/* ── WHAT YOU WILL LEARN ── */}
      <section style={{ backgroundColor: C.darkAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 700, color: C.gold, textTransform: 'uppercase', marginBottom: '12px', lineHeight: 1.25 }}>
              HERE ARE SOME OF THE THINGS YOU WILL LEARN
            </h2>
          </Reveal>

          <div style={{ marginTop: '16px' }}>
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
          </div>

          <Reveal>
            <div style={{ marginTop: '48px', padding: '32px', backgroundColor: C.dark, border: `1px solid ${C.gold}` }}>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: 700, color: C.gold, marginBottom: '16px', textTransform: 'uppercase' }}>
                AND THERE IS MUCH MORE.
              </p>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: '12px' }}>
                These are not ideas you are supposed to read and forget.
              </p>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(14px, 1.8vw, 16px)', lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                They are frameworks you can take into a meeting, use with a client, apply to your business and come back to whenever you have a difficult problem to solve.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <HDivider gold />

      {/* ── MID CTA ── */}
      <section style={{ backgroundColor: C.dark, padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <Reveal>
            <CTABtn text="Get Think Like a Consultant Now" />
          </Reveal>
        </div>
      </section>

      <HDivider />

      {/* ── FOR CONSULTANTS ── */}
      <section style={{ backgroundColor: C.darkAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 700, color: C.gold, textTransform: 'uppercase', marginBottom: '32px', lineHeight: 1.25 }}>
              IF YOU ARE A CONSULTANT, THIS BOOK IS FOR YOU.
            </h2>
          </Reveal>
          <Reveal delay={40}>
            <div style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>Your clients don't pay you because you know big words.</p>
              <p>They pay you because they expect you to help them solve problems.</p>
              <p>The better you become at understanding problems, asking good questions, analysing situations and developing solutions, the more useful you become to your clients.</p>
              <p style={{ color: C.gold, fontWeight: 700 }}>This book gives you practical frameworks you can use in your consulting work.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <HDivider />

      {/* ── FOR BUSINESS OWNERS ── */}
      <section style={{ backgroundColor: C.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 700, color: C.gold, textTransform: 'uppercase', marginBottom: '32px', lineHeight: 1.25 }}>
              IF YOU ARE A BUSINESS OWNER, THIS BOOK IS ALSO FOR YOU.
            </h2>
          </Reveal>
          <Reveal delay={40}>
            <div style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>You cannot hire a consultant every time something goes wrong in your business.</p>
              <p>Sometimes you need to be able to sit down, look at the problem and figure out what is really going on.</p>
              <p>This book can help you do that.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', margin: '8px 0' }}>
                {[
                  "You don't need an MBA.",
                  "You don't need to work for a big consulting firm.",
                  "You don't even need to call yourself a consultant.",
                ].map((line, i) => (
                  <div key={i} style={{ padding: '12px 0', borderBottom: `1px solid ${C.border}`, display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{ color: C.red, fontWeight: 700, flexShrink: 0 }}>✗</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: C.gold, fontWeight: 700, fontSize: 'clamp(16px, 2.2vw, 19px)', marginTop: '8px' }}>
                You simply need to learn how to think through problems properly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <HDivider gold />

      {/* ── TESTIMONIALS ── */}
      <section style={{ backgroundColor: C.darkAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 700, color: C.gold, textTransform: 'uppercase', marginBottom: '48px', lineHeight: 1.3, textAlign: 'center' }}>
              A FEW WORDS FROM PEOPLE WHO HAVE READ IT
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="ownerC-testi-grid">
            <Testimonial
              quote="I have read a lot of business books, but what I like about Think Like a Consultant is how practical it is. It gives you a simple way to look at a business problem, break it down and know what to do next."
              name="ThankGod Akpa"
              title="Founder, Impakt100"
            />
            <Testimonial
              quote="The ideas are simple, but they make you think differently. It has changed the way I approach some of the decisions I make in business."
              name="Peterson Akodi"
              title="Co-Founder, SPacebox"
            />
            <Testimonial
              quote="Sometimes the problem is not that you don't have a solution. The problem is that you have not properly understood the problem. This book gives you a practical process for thinking through difficult situations before making a decision."
              name="David Utulor"
              title="Director, Mc Dave Schools"
            />
            <Testimonial
              quote="As someone who works with businesses, I found the frameworks in this book very useful. It gives you a structured way to think when things are unclear instead of just relying on experience or instinct."
              name="August Ojile"
              title="CEO, Cueball Digital Agency"
            />
          </div>
        </div>
      </section>

      <HDivider />

      {/* ── ABOUT QUICK LEARN PLUS ── */}
      <section style={{ backgroundColor: C.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 700, color: C.gold, textTransform: 'uppercase', marginBottom: '32px', lineHeight: 1.3 }}>
              ABOUT QUICK LEARN PLUS
            </h2>
          </Reveal>
          <Reveal delay={40}>
            <div style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>Quick Learn Plus is a business education company that turns complex business ideas into simple and practical lessons.</p>
              <p>We create books and learning resources around business, strategy, problem-solving and other useful business skills.</p>
              <p>The goal is simple:</p>
              <p style={{ color: C.gold, fontWeight: 700, fontStyle: 'italic', fontSize: 'clamp(15px, 2.2vw, 18px)', borderLeft: `3px solid ${C.gold}`, paddingLeft: '20px' }}>
                Help you learn useful ideas quickly and apply them in the real world.
              </p>
              <p><em>Think Like a Consultant</em> is one of our practical books designed to help consultants, entrepreneurs and business owners develop a better way of solving business problems.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <HDivider gold />

      {/* ── FINAL CLOSE ── */}
      <section style={{ backgroundColor: C.darkAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(22px, 3.5vw, 38px)', fontWeight: 700, color: C.gold, textTransform: 'uppercase', marginBottom: '36px', lineHeight: 1.2 }}>
              THE NEXT BUSINESS PROBLEM WILL COME.
            </h2>
          </Reveal>
          <Reveal delay={40}>
            <div style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '48px' }}>
              <p>It may be next week.</p>
              <p>It may be tomorrow.</p>
              <p>It may already be sitting on your desk.</p>
              <p>When it comes, you can guess.</p>
              <p>You can panic.</p>
              <p>You can keep trying random solutions.</p>
              <p style={{ color: C.gold, fontWeight: 700, fontSize: 'clamp(16px, 2.2vw, 19px)' }}>
                Or you can have a process that helps you understand the problem and work towards the right solution.
              </p>
              <p><em>Think Like a Consultant</em> gives you that process.</p>
              <p style={{ fontWeight: 700, color: C.white }}>Get your copy now.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ textAlign: 'center' }}>
              <CTABtn text="Get Think Like a Consultant" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#06080F', padding: '32px 24px', textAlign: 'center', borderTop: `1px solid ${C.border}` }}>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: '13px', color: 'rgba(255,255,255,0.3)', margin: '0 0 8px' }}>
          © {new Date().getFullYear()} Quick Learn Plus · Think Like a Consultant
        </p>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: '12px', color: 'rgba(255,255,255,0.2)', margin: 0, maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          Results depend on your circumstances, industry and effort. No specific business outcome is guaranteed.
        </p>
      </footer>

      {/* ── MOBILE STICKY ── */}
      <div className="ownerC-sticky" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
        display: 'none', padding: '12px 16px',
        backgroundColor: C.dark, borderTop: `2px solid ${C.gold}`,
        transform: sticky ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}>
        <a href={SELAR} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'block', width: '100%', textAlign: 'center',
            backgroundColor: C.gold, color: C.ink,
            fontFamily: "'Georgia', serif", fontSize: '14px', fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '16px', textDecoration: 'none',
          }}
        >
          Get Think Like a Consultant Now
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ownerC-hero-grid  { grid-template-columns: 1fr !important; }
          .ownerC-testi-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .ownerC-sticky { display: block !important; }
        }
      `}</style>
    </div>
  )
}
