import { useEffect, useRef, useState } from 'react'
import consultantCover from './-like-a-consultant-cover.png'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

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
        color: '#FAF8F3',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '15px',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '18px 48px',
        borderRadius: '3px',
        textDecoration: 'none',
        transition: 'background-color 0.2s ease, transform 0.15s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#a08848'
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#B89B5E'
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
      }}
    >
      {text}
    </a>
  )
}

const benefits = [
  'Understand what is really driving your business performance — beyond simply having more information or ideas.',
  'Learn how to think through business problems clearly, so you can make better decisions instead of jumping from one solution to another.',
  'Break down complicated business problems into smaller, manageable pieces so you know exactly where to start.',
  'Turn a messy business situation into a clear picture of what is happening, what changed, and what actually needs to be fixed.',
  'Use a simple 6-step process to approach almost any business problem without wondering, "Where do I even begin?"',
  'Quickly understand what is really happening in your business without relying entirely on assumptions or guesswork.',
  'Understand how changes in the economy, technology, regulations, society, and competition could affect your business.',
  'Assess how attractive or difficult your industry really is before investing more money, time, or resources into it.',
  'Estimate the size of a business opportunity without needing an expensive research team — and determine whether it is actually worth pursuing.',
  'Find where your business is creating value — and where money, time, and opportunities are being lost.',
  'Discover why the problem you see on the surface may not be the real problem — and learn how to find what is actually causing it.',
  'Identify the few causes responsible for most of your biggest business problems, so you can focus your energy where it matters most.',
  'Uncover where your business is leaking money, time, and resources — even when the leak isn\'t immediately obvious.',
  'Map how work actually moves through your business and identify where delays, bottlenecks, and inefficiencies are costing you.',
  'Stop treating business problems as isolated issues and start seeing how different parts of your business affect one another.',
  'Generate multiple possible solutions before making a decision, instead of automatically choosing the first idea that comes to mind.',
  'Make clearer decisions about where to compete, who to serve, and how your business can win in its market.',
  'Know what to fix first when everything feels urgent — instead of trying to solve everything at the same time.',
  'Identify what could go wrong before committing money and resources to a strategy.',
  'Test a business idea before putting significant money behind it, so you can learn what works before taking a bigger risk.',
  'Determine whether your business model actually makes sense before investing more money into it.',
  'Make decisions that solve today\'s problems without sacrificing the long-term direction of your business.',
  'Understand how pricing can affect revenue, profit, demand, and overall business performance — and how to think about it strategically.',
  'Recognize the problems that often appear as a business grows, before they become expensive emergencies.',
  'Lead your people through business changes without losing the people you need to make those changes happen.',
  'Turn good recommendations into actions that actually get implemented — because an idea that never gets executed creates no business value.',
  'Manage important business projects without drowning yourself in unnecessary processes, meetings, and complexity.',
  'Get your team and other stakeholders to support important decisions, even when they weren\'t involved in making the original decision.',
  'Know whether your decisions and strategies are actually working by tracking the right measures instead of relying on feelings.',
  'Build a culture of continuous improvement so your business can solve problems internally instead of depending on a consultant every time something goes wrong.',
  'Get a practical checklist you can use whenever a new business problem lands on your desk — so you can diagnose it before rushing to a solution.',
]

const bonuses = [
  {
    title: 'The Quick-Reference Cheat Sheet',
    desc: 'Key questions and frameworks to quickly determine where to start with any business problem.',
    value: '₦5,000',
  },
  {
    title: 'The Business Problem Diagnosis Worksheet',
    desc: 'A step-by-step worksheet to work through any problem, separate symptoms from root causes, and organise your thinking.',
    value: '₦3,700',
  },
  {
    title: 'The Problem-Solving Checklist',
    desc: 'Run through this before making any major decision to catch gaps that could weaken your plan.',
    value: '₦5,000',
  },
  {
    title: '3 Complete Business Problem Walkthroughs',
    desc: 'See exactly how the problem-solving system works applied to three real business problems from start to finish.',
    value: '₦10,000',
  },
  {
    title: 'The Framework Selection Guide',
    desc: 'Know which thinking tool to reach for depending on the problem you\'re trying to solve.',
    value: '₦5,000',
  },
]

const faqs = [
  {
    q: 'Is this only for consultants?',
    a: 'No. While the book uses consulting frameworks, it was written to be useful to anyone who runs a business or makes business decisions. If you face business problems and want a clearer way to think through them, this guide is for you.',
  },
  {
    q: 'Do I need a business background to understand this?',
    a: 'Not at all. The guide is written in plain language with practical examples. You do not need an MBA or formal business training to benefit from it.',
  },
  {
    q: 'What format will I receive?',
    a: 'You will receive a digital PDF download immediately after purchase. You can read it on your phone, tablet, laptop, or print it out.',
  },
  {
    q: 'What if the guide does not work for me?',
    a: 'If you go through the guide and feel it did not deliver on its promise, reach out within 30 days and we will give you a full refund. No complicated process.',
  },
  {
    q: 'How is this different from other business books?',
    a: 'Most business books explain what to do. This guide focuses on how to think — giving you a repeatable system you can apply to any problem, not just the examples in the book.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        borderBottom: '1px solid var(--border)',
        cursor: 'pointer',
      }}
      onClick={() => setOpen(o => !o)}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '22px 0',
        gap: '16px',
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '17px',
          fontWeight: 600,
          margin: 0,
          color: 'var(--foreground)',
          lineHeight: 1.5,
        }}>
          {q}
        </p>
        <span style={{
          color: '#B89B5E',
          fontSize: '22px',
          fontWeight: 300,
          flexShrink: 0,
          lineHeight: 1,
          transition: 'transform 0.2s ease',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          +
        </span>
      </div>
      {open && (
        <p style={{
          fontSize: '16px',
          lineHeight: 1.8,
          color: 'var(--muted-foreground)',
          paddingBottom: '22px',
          margin: 0,
        }}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function SalesPageB() {
  const [showStickyMobile, setShowStickyMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowStickyMobile(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav style={{
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '18px 0',
        backgroundColor: '#0D2137',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(250,248,243,0.6)' }}>
            Quick Learn Plus
          </span>
          <CTAButton text="Get the Guide — ₦3,700" />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: '#0D2137', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '64px', alignItems: 'center' }} className="hero-grid">
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#B89B5E',
              marginBottom: '24px',
            }}>
              Quick Learn Plus
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(30px, 4.5vw, 52px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#FAF8F3',
              marginBottom: '24px',
            }}>
              Stop Guessing Your Way Through Business Problems
            </h1>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(250,248,243,0.75)',
              marginBottom: '40px',
              maxWidth: '520px',
            }}>
              A practical guide that gives business owners a clear, repeatable system for diagnosing problems, making better decisions, and knowing exactly what to do next.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
              {[
                "Stop guessing what's wrong — learn to find the real cause",
                'Know where to focus when everything feels urgent',
                'Make decisions you can defend with confidence',
                'Fix problems before they become expensive emergencies',
              ].map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#B89B5E', fontWeight: 700, fontSize: '16px', flexShrink: 0, paddingTop: '3px' }}>✓</span>
                  <span style={{ fontSize: '16px', color: 'rgba(250,248,243,0.85)', lineHeight: 1.6 }}>{point}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <CTAButton text="Get Instant Access — ₦3,700" id="order" />
              <p style={{ fontSize: '13px', color: 'rgba(250,248,243,0.5)', margin: 0 }}>30-day money-back guarantee</p>
            </div>
          </div>

          {/* Book cover */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="hero-book">
            <img
              src={consultantCover}
              alt="Think Like a Consultant"
              style={{
                width: '320px',
                borderRadius: '3px 10px 10px 3px',
                boxShadow: '12px 20px 60px rgba(0,0,0,0.5)',
                transform: 'rotateY(-6deg)',
                transformOrigin: 'left center',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{ backgroundColor: '#FAF8F3', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B89B5E',
              marginBottom: '20px',
              textAlign: 'center',
            }}>
              Inside this book, you will learn how to:
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.35,
              textAlign: 'center',
              marginBottom: '32px',
            }}>
              Think through any business problem with clarity — and know exactly what to do next
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.85, textAlign: 'center', color: 'var(--muted-foreground)', maxWidth: '580px', margin: '0 auto' }}>
              Most business owners don't lack effort. They lack a clear system for diagnosing what's wrong and deciding what to do about it. This guide gives you that system.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section style={{ backgroundColor: '#F3F0E8', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <FadeIn>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B89B5E',
              marginBottom: '16px',
            }}>
              What's Inside Think Like a Consultant?
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '56px',
            }}>
              Here's What You'll Learn
            </h2>
          </FadeIn>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1px',
            backgroundColor: 'var(--border)',
          }}>
            {benefits.map((benefit, i) => (
              <FadeIn key={i} delay={Math.min(i * 15, 150)}>
                <div style={{
                  backgroundColor: '#FAF8F3',
                  padding: '28px 24px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  height: '100%',
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#B89B5E',
                    minWidth: '28px',
                    paddingTop: '2px',
                    letterSpacing: '0.04em',
                    flexShrink: 0,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: '15px', lineHeight: 1.75, margin: 0, color: 'var(--foreground)' }}>
                    {benefit}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR PURCHASE INCLUDES ── */}
      <section style={{ backgroundColor: '#0D2137', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <FadeIn>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              lineHeight: 1.3,
              color: '#FAF8F3',
              textAlign: 'center',
              marginBottom: '16px',
            }}>
              Your Purchase Includes
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(250,248,243,0.65)', textAlign: 'center', marginBottom: '64px' }}>
              Everything you need to start solving business problems differently — today.
            </p>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            {/* Main guide */}
            <FadeIn delay={0}>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(184,155,94,0.4)',
                borderRadius: '4px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                <div style={{ width: '36px', height: '3px', backgroundColor: '#B89B5E' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '19px', fontWeight: 700, color: '#FAF8F3', lineHeight: 1.3, margin: 0 }}>
                  Think Like a Consultant
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(250,248,243,0.7)', margin: 0 }}>
                  The complete guide — a practical problem-solving system you can apply to any business challenge.
                </p>
              </div>
            </FadeIn>

            {bonuses.map((bonus, i) => (
              <FadeIn key={i} delay={(i + 1) * 60}>
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#B89B5E',
                      margin: 0,
                    }}>
                      Bonus {String(i + 1).padStart(2, '0')}
                    </p>
                    <span style={{ fontSize: '12px', color: '#B89B5E', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      Value: {bonus.value}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', fontWeight: 700, color: '#FAF8F3', lineHeight: 1.3, margin: 0 }}>
                    {bonus.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'rgba(250,248,243,0.65)', margin: 0 }}>
                    {bonus.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div style={{ textAlign: 'center' }}>
              <CTAButton text="Get Everything — ₦3,700" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── THIS BOOK IS FOR YOU IF ── */}
      <section style={{ backgroundColor: '#FAF8F3', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B89B5E',
              marginBottom: '20px',
            }}>
              This book is for you if...
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '48px',
            }}>
              You're the right person for this guide
            </h2>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              'You run a business and often feel like you\'re solving the same problems over and over again.',
              'You make important decisions but don\'t always feel confident they are the right ones.',
              'You find it hard to separate the real problem from the symptoms — so your solutions don\'t always stick.',
              'You feel overwhelmed when multiple things go wrong at once and don\'t know what to fix first.',
              'You want to make better use of the advice, consultants, or information you already have access to.',
              'You want a clear thinking system you can apply to any business challenge — not just a list of tips.',
            ].map((point, i) => (
              <FadeIn key={i} delay={i * 40}>
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '24px 0',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'flex-start',
                }}>
                  <span style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#B89B5E',
                    color: '#FAF8F3',
                    fontSize: '12px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}>
                    ✓
                  </span>
                  <p style={{ fontSize: '17px', lineHeight: 1.8, margin: 0 }}>{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ backgroundColor: '#F3F0E8', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }} className="price-grid">
              <div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#B89B5E',
                  marginBottom: '16px',
                }}>
                  Think Like a Consultant
                </p>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginBottom: '24px',
                }}>
                  Get the complete guide and all bonuses
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
                  {[
                    'The complete Think Like a Consultant guide',
                    'Quick-Reference Cheat Sheet (₦5,000 value)',
                    'Business Problem Diagnosis Worksheet (₦3,700 value)',
                    'Problem-Solving Checklist (₦5,000 value)',
                    '3 Complete Business Problem Walkthroughs (₦10,000 value)',
                    'Framework Selection Guide (₦5,000 value)',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#B89B5E', fontWeight: 700, flexShrink: 0, paddingTop: '3px' }}>✓</span>
                      <span style={{ fontSize: '16px', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <CTAButton text="Get Instant Access — ₦3,700" />
                <p style={{ fontSize: '13px', color: 'var(--muted-foreground)', marginTop: '14px' }}>
                  30-day money-back guarantee. No questions asked.
                </p>
              </div>

              <div style={{ textAlign: 'center', flexShrink: 0 }} className="price-book">
                <img
                  src={consultantCover}
                  alt="Think Like a Consultant"
                  style={{
                    width: '160px',
                    borderRadius: '3px 8px 8px 3px',
                    boxShadow: '8px 16px 40px rgba(0,0,0,0.2)',
                  }}
                />
                <div style={{
                  marginTop: '20px',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '40px',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  lineHeight: 1,
                }}>
                  ₦3,700
                </div>
                <p style={{ fontSize: '13px', color: 'var(--muted-foreground)', marginTop: '8px' }}>
                  One-time payment
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: '#FAF8F3', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B89B5E',
              marginBottom: '16px',
            }}>
              Frequently Asked Questions
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(24px, 3.5vw, 34px)',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '48px',
            }}>
              Questions you might have
            </h2>
          </FadeIn>
          <div style={{ borderTop: '1px solid var(--border)' }}>
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 40}>
                <FAQItem q={faq.q} a={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section style={{ backgroundColor: '#0D2137', paddingTop: '100px', paddingBottom: '100px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <FadeIn>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B89B5E',
              marginBottom: '24px',
            }}>
              The bottom line
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4.5vw, 50px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#FAF8F3',
              marginBottom: '32px',
            }}>
              Sometimes, it needs a better way to think.
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(250,248,243,0.72)',
              marginBottom: '48px',
              maxWidth: '540px',
              margin: '0 auto 48px',
            }}>
              Every business problem you've been carrying has a structure. Once you can see it clearly, you'll know what to do. This guide shows you how.
            </p>
            <CTAButton text="Get Think Like a Consultant — ₦3,700" />
            <p style={{ fontSize: '13px', color: 'rgba(250,248,243,0.4)', marginTop: '20px' }}>
              Instant digital download · 30-day money-back guarantee
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '32px 0', backgroundColor: '#0D2137' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(250,248,243,0.35)', letterSpacing: '0.06em' }}>
            © {new Date().getFullYear()} Quick Learn Plus · Think Like a Consultant
          </p>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div
        className="mobile-sticky"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '14px 16px',
          backgroundColor: '#0D2137',
          borderTop: '1px solid rgba(184,155,94,0.3)',
          zIndex: 100,
          display: 'none',
          transform: showStickyMobile ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <a
          href="https://selar.com/978m069577"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'center',
            backgroundColor: '#B89B5E',
            color: '#FAF8F3',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '16px',
            textDecoration: 'none',
            borderRadius: '2px',
          }}
        >
          Get Think Like a Consultant — ₦3,700
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-book {
            display: none !important;
          }
          .price-grid {
            grid-template-columns: 1fr !important;
          }
          .price-book {
            display: none !important;
          }
          .mobile-sticky {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}
