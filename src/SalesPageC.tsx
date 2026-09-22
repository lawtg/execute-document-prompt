import { useEffect, useRef, useState } from 'react'
import consultantCover from './-like-a-consultant-cover.png'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
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

function Divider({ gold = false }: { gold?: boolean }) {
  return (
    <div className="reading-col">
      <hr style={{ border: 'none', borderTop: `1px solid ${gold ? '#B89B5E' : '#D8D3C8'}`, margin: '0' }} />
    </div>
  )
}

function CTAButton({ text, id }: { text: string; id?: string }) {
  return (
    <a
      href="https://wa.link/mxw0ow"
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      style={{
        display: 'inline-block',
        backgroundColor: '#0D2137',
        color: '#FAF8F3',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '15px',
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '18px 48px',
        borderRadius: '3px',
        textDecoration: 'none',
        transition: 'background-color 0.2s ease, transform 0.15s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1A3A5C'
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0D2137'
        ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
      }}
    >
      {text}
    </a>
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
  {
    num: '01',
    title: "The Business Owner's Quick-Reference Cheat Sheet",
    value: '₦5,000',
    desc: "You shouldn't have to read through an entire book every time a new business problem comes your way. This quick-reference sheet gives you the key questions and frameworks you need to quickly determine where to start, what to investigate, and what to do next. Keep it beside you whenever you're dealing with an important business decision.",
  },
  {
    num: '02',
    title: 'The Business Problem Diagnosis Worksheet',
    value: '₦7,500',
    desc: "Sometimes the hardest part of solving a business problem isn't finding the solution — it's figuring out what the problem actually is. This practical worksheet helps you work through a business problem step by step, ask better questions, separate symptoms from root causes, and organize your thinking before making a decision. So you can spend less time guessing and more time diagnosing.",
  },
  {
    num: '03',
    title: 'The Business Problem-Solving Checklist',
    value: '₦5,000',
    desc: "Before you commit to an important decision, run through this checklist. Have you defined the problem correctly? Have you identified the root cause? Have you considered alternative explanations? Have you generated more than one possible solution? Have you considered the risks? Do you know how the decision will actually be implemented? This checklist helps you catch the gaps that can turn an otherwise good decision into an expensive mistake.",
  },
  {
    num: '04',
    title: '3 Complete Business Problem Walkthroughs',
    value: '₦10,000',
    desc: "Don't just learn the theory — see how the thinking works. You'll get three complete examples showing how the problem-solving system can be applied from the initial problem all the way to the final recommendation. This gives you something to study when you're facing a real business problem and thinking: \"How exactly am I supposed to apply all this?\"",
  },
  {
    num: '05',
    title: 'The Framework Selection Guide',
    value: '₦5,000',
    desc: "One of the biggest mistakes business owners make is trying to use every business framework they know on every problem. This guide helps you understand which type of thinking tool to reach for depending on the problem you're trying to solve. Because the goal isn't to sound intelligent — the goal is to solve the problem.",
  },
]

export default function SalesPageC() {
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
        borderBottom: '1px solid var(--border)',
        padding: '20px 0',
        backgroundColor: 'var(--background)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>
            Quick Learn Plus
          </span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '13px', fontStyle: 'italic', color: 'var(--foreground)' }}>
            Think Like a Consultant
          </span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <div style={{ opacity: 1 }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--muted-foreground)',
              marginBottom: '48px',
            }}>
              Quick Learn Plus
            </p>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 58px)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: 'var(--foreground)',
              marginBottom: '40px',
              maxWidth: '640px',
            }}>
              To Every Business Owner Who Wants to Solve Their Business Problems Without Always Hiring A Consultant.
            </h1>

            <p style={{ fontSize: '17px', color: 'var(--muted-foreground)', marginBottom: '48px', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
              Dear Business Owner,
            </p>

            <div style={{ fontSize: '19px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p>Do you want to be able to solve problems in your business without having to hire a consultant every single time?</p>

              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(22px, 3vw, 28px)',
                fontWeight: 600,
                lineHeight: 1.4,
                borderLeft: '3px solid #B89B5E',
                paddingLeft: '24px',
                color: 'var(--foreground)',
                margin: '16px 0',
              }}>
                If your answer is yes, then this might be the most useful website you visit today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── WHY QUICK LEARN PLUS ── */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '40px',
            }}>
              Why Are We So Confident This Guide Can Help You?
            </h2>

            <div style={{ fontSize: '19px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p>At Quick Learn Plus, our mission is simple:</p>

              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '22px',
                lineHeight: 1.5,
                color: 'var(--primary)',
                margin: '8px 0',
              }}>
                Take complex business knowledge and turn it into practical ideas that people can actually use.
              </p>

              <p>We bring together business concepts, frameworks, experiences, and practical lessons and distill them into simple tools you can understand and apply.</p>
              <p>So you don't have to depend on complicated business language or someone else's opinion every time you face a difficult decision.</p>
              <p>Instead, you can develop a better way of thinking about your own business.</p>
              <p>And that's exactly what we put into this book.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHAT IS THE BOOK ── */}
      <section style={{ backgroundColor: '#F3F0E8', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B89B5E',
              marginBottom: '24px',
            }}>
              The Guide
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: '40px',
            }}>
              A Practical Guide to Solving Business Problems Without Guesswork
            </h2>

            <div style={{ fontSize: '19px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p>We created a practical guide that teaches business owners how to approach business problems systematically.</p>
              <p>How to move beyond:</p>
              <p style={{ paddingLeft: '24px', borderLeft: '2px solid var(--border)', fontStyle: 'italic', color: 'var(--muted-foreground)' }}>
                "I think this is the problem."
              </p>
              <p>To:</p>
              <p style={{
                paddingLeft: '24px',
                borderLeft: '3px solid #B89B5E',
                fontFamily: "'Playfair Display', serif",
                fontSize: '20px',
                lineHeight: 1.6,
                fontWeight: 600,
              }}>
                "Here is what is actually happening, here is why it is happening, and here is what we should do about it."
              </p>
            </div>

            {/* Book Mockup */}
            <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'center' }}>
              <FadeIn delay={100}>
                <div style={{ position: 'relative', perspective: '800px', display: 'inline-block' }}>
                  <img
                    src={consultantCover}
                    alt="Think Like a Consultant — book cover"
                    style={{
                      width: '260px',
                      display: 'block',
                      borderRadius: '3px 8px 8px 3px',
                      boxShadow: '8px 16px 40px rgba(0,0,0,0.25), 2px 4px 12px rgba(0,0,0,0.15)',
                      transform: 'rotateY(-8deg)',
                      transformOrigin: 'left center',
                    }}
                  />
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* ── WHAT YOU'LL DISCOVER ── */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B89B5E',
              marginBottom: '24px',
            }}>
              Inside the Guide
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '16px',
            }}>
              Here's What You'll Discover Inside This Guide...
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--muted-foreground)', marginBottom: '56px' }}>
              A complete system for thinking through, diagnosing, and solving any business problem — with clarity and confidence.
            </p>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {benefits.map((benefit, i) => (
              <FadeIn key={i} delay={Math.min(i * 20, 200)}>
                <div style={{
                  display: 'flex',
                  gap: '24px',
                  padding: '28px 0',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'flex-start',
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#B89B5E',
                    minWidth: '32px',
                    paddingTop: '3px',
                    letterSpacing: '0.04em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: '17px', lineHeight: 1.75, margin: 0 }}>
                    {benefit}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '18px', lineHeight: 1.8 }}>
              <p>And then you'll see the entire system applied from beginning to end to three real business problems, so you can see how the thinking works in practice — not just read about it in theory.</p>
              <p>You'll also discover when you should use the full problem-solving process — and when a simple shortcut is enough.</p>
              <p>Plus, the common traps business owners fall into when trying to solve problems — so you can recognize them before they lead to expensive decisions.</p>
              <p>And finally...</p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: 1.5,
                color: 'var(--primary)',
                margin: '16px 0',
              }}>
                You'll have a repeatable way to approach whatever business problem comes next.
              </p>
              <p>Because the goal isn't for you to memorize a collection of frameworks.</p>
              <p>The goal is for you to develop a way of thinking that helps you face a difficult business problem and know what to do next.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BONUSES ── */}
      <section style={{ backgroundColor: '#F3F0E8', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B89B5E',
              marginBottom: '24px',
            }}>
              Included Free
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '16px',
            }}>
              But Wait... There's More.
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '56px' }}>
              If you're serious about becoming better at making business decisions, I don't want to just give you the guide and leave you to figure out the rest yourself. That's why I'm adding these bonuses to your download.
            </p>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {bonuses.map((bonus, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div style={{
                  padding: '40px 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: '24px',
                  alignItems: 'flex-start',
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'rgba(13,33,55,0.18)',
                    lineHeight: 1,
                    paddingTop: '4px',
                  }}>
                    {bonus.num}
                  </span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                      <h3 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '20px',
                        fontWeight: 700,
                        lineHeight: 1.3,
                        margin: 0,
                      }}>
                        {bonus.title}
                      </h3>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#B89B5E',
                        letterSpacing: '0.06em',
                        whiteSpace: 'nowrap',
                      }}>
                        Value: {bonus.value}
                      </span>
                    </div>
                    <p style={{ fontSize: '17px', lineHeight: 1.8, margin: 0, color: 'var(--muted-foreground)' }}>
                      {bonus.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '18px', lineHeight: 1.8 }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: 'var(--foreground)',
              }}>
                THAT'S NOT ALL...
              </h3>
              <p>You're not just getting a book. You're getting a practical business problem-solving toolkit you can return to whenever you encounter a difficult business problem.</p>
              <p style={{ fontWeight: 600 }}>And the best part? These bonuses are included FREE with your guide.</p>
              <p>So you can start applying what you've learned instead of simply reading it and forgetting it.</p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '20px',
                lineHeight: 1.6,
                color: 'var(--primary)',
              }}>
                Your next business decision could be the first one you approach differently.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <div style={{
              border: '1px solid #D8D3C8',
              borderTop: '3px solid #0D2137',
              padding: '48px',
              backgroundColor: 'var(--background)',
            }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#B89B5E',
                marginBottom: '20px',
              }}>
                Our Promise
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(24px, 3vw, 34px)',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: '28px',
              }}>
                Read It. Apply It. If You Don't Find It Valuable, Get Your Money Back.
              </h2>
              <div style={{ fontSize: '18px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p>Go through the guide. Use the frameworks. Apply the tools.</p>
                <p style={{ fontWeight: 600 }}>If you don't find it valuable within 7 days, let us know and we'll refund your money. No arguments. No stress.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* ── URGENCY ── */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '40px',
            }}>
              Don't Put It Off.
            </h2>

            <div style={{ fontSize: '19px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p>The next business problem won't wait.</p>
              <p>You can keep relying on instinct and guesswork...</p>
              <p>Or you can have a simple system for figuring out what the real problem is and what to do next.</p>
              <p>The next time something goes wrong in your business, you'll be better prepared.</p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                margin: '16px 0',
              }}
                className="choice-grid"
              >
                <div style={{
                  padding: '28px',
                  backgroundColor: 'var(--muted)',
                  border: '1px solid var(--border)',
                }}>
                  <p style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: '12px' }}>Without the guide</p>
                  <p style={{ fontSize: '17px', lineHeight: 1.7, margin: 0 }}>Continue relying on instinct and guesswork whenever something goes wrong in your business...</p>
                </div>
                <div style={{
                  padding: '28px',
                  backgroundColor: 'var(--primary)',
                  color: '#FAF8F3',
                  border: '1px solid var(--primary)',
                }}>
                  <p style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#B89B5E', marginBottom: '12px' }}>With the guide</p>
                  <p style={{ fontSize: '17px', lineHeight: 1.7, margin: 0, color: '#FAF8F3' }}>Have a simple system for figuring out what the real problem is and exactly what to do next.</p>
                </div>
              </div>

              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: 1.5,
                color: 'var(--primary)',
              }}>
                The question isn't whether you'll face another business problem. You will. The question is whether you'll be prepared for it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PRICE ── */}
      <section style={{ backgroundColor: '#F3F0E8', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B89B5E',
              marginBottom: '24px',
            }}>
              Investment
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '40px',
            }}>
              What Would This Cost You?
            </h2>

            <div style={{ fontSize: '18px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '56px' }}>
              <p>A wrong business decision can cost you far more than ₦3,500. You could waste months solving the wrong problem. Spend money on the wrong strategy. Invest in the wrong opportunity. Or keep treating symptoms without finding the real cause.</p>
              <p>Think Like a Consultant gives you a practical system for thinking through these problems.</p>

              <div style={{ margin: '8px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'The complete Think Like a Consultant guide',
                  'The practical problem-solving frameworks',
                  'The quick-reference tools',
                  'The business problem walkthroughs',
                  'All five bonuses',
                  'A system you can return to whenever a new business problem lands on your desk',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#B89B5E', fontWeight: 700, fontSize: '16px', paddingTop: '3px', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '17px' }}>{item}</span>
                  </div>
                ))}
              </div>

              <p>Instead of paying tens or hundreds of thousands of naira for business problem-solving training, you get everything today for:</p>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '56px 40px',
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)',
              marginBottom: '48px',
            }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--muted-foreground)',
                marginBottom: '16px',
              }}>
                You Can Get Everything Today For Just
              </p>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(56px, 8vw, 80px)',
                fontWeight: 700,
                color: 'var(--primary)',
                lineHeight: 1,
                marginBottom: '16px',
              }}>
                ₦3,500
              </div>
              <p style={{
                fontSize: '15px',
                color: 'var(--muted-foreground)',
                marginBottom: '40px',
                maxWidth: '400px',
                margin: '0 auto 40px',
                lineHeight: 1.6,
              }}>
                One payment. Instant access. You're not buying another book you'll read once and forget. You're investing in a practical system you can keep coming back to.
              </p>
              <CTAButton text="Get Think Like a Consultant Now" id="order" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── HOW TO ORDER ── */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="reading-col">
          <FadeIn>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(24px, 3vw, 34px)',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '48px',
              textAlign: 'center',
            }}>
              Here's How To Get It
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              backgroundColor: 'var(--border)',
              marginBottom: '48px',
            }}>
              {[
                { step: 'STEP 1', action: 'Click the button below and place your order.' },
                { step: 'STEP 2', action: 'Complete your payment.' },
                { step: 'STEP 3', action: 'Get instant access to your guide and bonuses.' },
              ].map((s, i) => (
                <div key={i} style={{
                  backgroundColor: 'var(--background)',
                  padding: '36px 28px',
                  textAlign: 'center',
                }}>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: '#B89B5E',
                    marginBottom: '16px',
                  }}>
                    {s.step}
                  </p>
                  <p style={{ fontSize: '16px', lineHeight: 1.7, margin: 0 }}>{s.action}</p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '18px', lineHeight: 1.8, textAlign: 'center', color: 'var(--muted-foreground)', marginBottom: '40px' }}>
              That's it. Start applying the system today.
            </p>
            <div style={{ textAlign: 'center' }}>
              <CTAButton text="Get Think Like a Consultant Now" />
            </div>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* ── FINAL CLOSE ── */}
      <section style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="reading-col">
          <FadeIn>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: '48px',
              maxWidth: '580px',
            }}>
              One More Thing...
            </h2>

            <div style={{ fontSize: '19px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p>You don't need to know everything about business.</p>
              <p>You need to know how to think when a problem comes.</p>
              <p>How to break it down. Find the real cause. Consider your options. And decide what to do next.</p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(20px, 2.5vw, 26px)',
                fontWeight: 600,
                lineHeight: 1.5,
                color: 'var(--primary)',
                margin: '16px 0',
              }}>
                That's what Think Like a Consultant is designed to help you do.
              </p>
              <p>So when the next business problem comes, you won't have to guess.</p>
              <p style={{ fontWeight: 600, fontSize: '20px' }}>You'll have a system.</p>
            </div>

            <div style={{ marginTop: '56px', textAlign: 'center' }}>
              <CTAButton text="Yes, I Want to Think Like a Consultant" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── P.S. ── */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="reading-col">
          <Divider />
          <FadeIn>
            <div style={{ paddingTop: '48px', maxWidth: '600px' }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '22px',
                fontStyle: 'italic',
                fontWeight: 700,
                color: 'var(--foreground)',
                marginBottom: '20px',
              }}>
                P.S.
              </p>
              <div style={{ fontSize: '17px', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--muted-foreground)' }}>
                <p>If you skipped straight to the bottom of this page, let me make this very simple.</p>
                <p><em style={{ fontFamily: "'Playfair Display', serif", color: 'var(--foreground)' }}>Think Like a Consultant</em> is designed to help you stop approaching business problems with guesswork and start approaching them with a repeatable way of thinking.</p>
                <p>You'll learn how to break problems apart, find root causes, generate options, prioritize what matters, think through risks, and turn decisions into action. Plus, you'll get the additional tools and bonuses included with the offer.</p>
                <p>And with the money-back guarantee, you don't have to make the decision blindly.</p>
                <p style={{ color: 'var(--foreground)', fontWeight: 500 }}>If becoming better at solving real business problems is important to you, this is your opportunity to start.</p>
                <p>Click the button below and get your copy now.</p>
              </div>
              <div style={{ marginTop: '36px' }}>
                <CTAButton text="Get My Copy Now" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '32px 0',
        backgroundColor: '#F3F0E8',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12px',
            color: 'var(--muted-foreground)',
            letterSpacing: '0.06em',
          }}>
            © {new Date().getFullYear()} Quick Learn Plus · Think Like a Consultant
          </p>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px',
        backgroundColor: '#0D2137',
        borderTop: '1px solid rgba(184,155,94,0.3)',
        zIndex: 100,
        display: 'none',
        transition: 'transform 0.3s ease',
        transform: showStickyMobile ? 'translateY(0)' : 'translateY(100%)',
      }}
        className="mobile-sticky"
      >
        <a
          href="https://wa.link/mxw0ow"
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
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '16px',
            textDecoration: 'none',
            borderRadius: '2px',
          }}
        >
          Get Think Like a Consultant — ₦3,500
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .choice-grid {
            grid-template-columns: 1fr !important;
          }
          .mobile-sticky {
            display: block !important;
          }
        }
        @media (max-width: 480px) {
          [style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
