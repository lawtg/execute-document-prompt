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
      href="https://selar.com/978m069577"
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
  'Discover what consultants actually get paid for — and why having knowledge isn\'t enough to make a business owner see you as worth paying for.',
  'The one skill that can make you more valuable as a consultant than knowing dozens of business frameworks. Learn why the way you think about a problem can matter more than how many frameworks you know.',
  'How to break down a complicated business problem into smaller pieces without getting overwhelmed. So instead of staring at one giant problem, you\'ll know exactly where to start.',
  'How to turn a messy business situation into a clear story before recommending a solution. Learn how to separate what is happening, what changed, and what question actually needs to be answered.',
  'The simple 6-step process you can use to approach almost any business problem. So you don\'t have to sit in front of a client wondering, "Where do I even begin?"',
  'How to quickly understand what is really happening inside a business — without relying entirely on guesswork or assumptions.',
  'How to identify the external forces that could affect your client\'s business — including changes in the economy, technology, regulations, society and competition.',
  'How to determine how attractive or difficult an industry really is before telling a client what they should do.',
  'How to estimate the size of a business opportunity without needing an expensive research team. This can help you answer the question every serious business owner wants answered: "Is this opportunity actually big enough to pursue?"',
  'How to find where a business is actually creating value — and where that value is being lost.',
  'Why the problem your client brings to you is often NOT the real problem — and how to dig deeper until you find what is actually causing it.',
  'How to find the 20% of causes responsible for 80% of your client\'s biggest headaches. So you can focus your recommendations on what can make the biggest difference.',
  'How to uncover where a business is leaking money, time and resources — even when the problem isn\'t immediately obvious.',
  'How to map the way work actually moves through a business and identify where things are getting stuck.',
  'How to stop solving isolated symptoms and start seeing the entire business as a connected system.',
  'How to generate multiple possible solutions instead of presenting your client with the first idea that comes to mind.',
  'How to help a business decide where to compete and how to win — without making strategy sound unnecessarily complicated.',
  'What to do when everything looks urgent and your client wants everything fixed at once. Learn how to identify what should actually come first.',
  'How to think through what could go wrong BEFORE recommending a strategy — so your client isn\'t discovering the risks after money has already been spent.',
  'How to test an idea before your client bets the entire business on it.',
  'How to tell whether a business model actually makes sense — before recommending that the business invest more money into it.',
  'How to think beyond the immediate quarter without losing sight of the bigger picture.',
  'Why pricing may be one of the fastest ways to change a business\'s performance — and how to think about it strategically.',
  'How to see the problems that can appear when a business starts growing before those problems become expensive emergencies.',
  'How to help a business lead its people through change without losing the people it needs to make the change happen.',
  'How to turn a brilliant recommendation into something people actually execute. Because a recommendation that never gets implemented doesn\'t create business value.',
  'How to manage projects without drowning yourself — or your client — in unnecessary processes.',
  'How to get people to support your recommendation even when they weren\'t part of the original decision-making process.',
  'How to know whether your recommendation is actually working — using simple ways to track progress instead of relying on feelings.',
  'How to help businesses continuously improve without needing to hire a consultant every time they want to solve a problem.',
  'The quick-reference checklist you can use whenever a new business problem lands on your desk.',
]

const bonuses = [
  {
    num: '01',
    title: 'The Consultant\'s Quick-Reference Cheat Sheet',
    value: '₦5,000',
    desc: 'You shouldn\'t have to read through an entire book every time a new business problem comes your way. This quick-reference sheet gives you the key questions and frameworks you need to quickly determine where to start, what to investigate, and what to do next. Keep it beside you whenever you\'re working with a client.',
  },
  {
    num: '02',
    title: 'The Business Problem Diagnosis Worksheet',
    value: '₦7,500',
    desc: 'Sometimes the hardest part of consulting isn\'t solving the problem — it\'s figuring out what the problem actually is. This practical worksheet helps you work through a business problem step by step, ask better questions, separate symptoms from root causes, and organize your thinking before jumping to a recommendation. So you can spend less time guessing and more time diagnosing.',
  },
  {
    num: '03',
    title: 'The Consultant\'s Problem-Solving Checklist',
    value: '₦5,000',
    desc: 'Before you present your recommendation to a client, run through this checklist. Have you defined the problem correctly? Have you identified the root cause? Have you considered alternative explanations? Have you generated more than one possible solution? This checklist helps you catch the gaps that can turn an otherwise good recommendation into a weak one.',
  },
  {
    num: '04',
    title: '3 Complete Business Problem Walkthroughs',
    value: '₦10,000',
    desc: 'Don\'t just learn the theory — see how the thinking works. You\'ll get three complete examples showing how the problem-solving system can be applied from the initial problem all the way to the final recommendation. This gives you something you can study when you\'re faced with a real client problem.',
  },
  {
    num: '05',
    title: 'The Consultant\'s Framework Selection Guide',
    value: '₦5,000',
    desc: 'One of the biggest mistakes new consultants make is trying to use every framework they know on every problem. This guide helps you understand which type of thinking tool to reach for depending on the problem you\'re trying to solve. Because the goal isn\'t to impress your client with frameworks — the goal is to solve the problem.',
  },
]

export default function App() {
  const [showStickyMobile, setShowStickyMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyMobile(window.scrollY > 600)
    }
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
              To Every Consultant in Nigeria Who Wants to Genuinely Help Businesses Solve Problems — and Charge Premium Without Feeling Guilty
            </h1>

            <p style={{ fontSize: '17px', color: 'var(--muted-foreground)', marginBottom: '48px', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
              Dear Consultant,
            </p>

            <div style={{ fontSize: '19px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p>Let me start with a simple question:</p>

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
                Are you genuinely passionate about helping businesses and organizations solve real problems?
              </p>

              <p>Not just carrying the title "Consultant."</p>
              <p>Not just giving opinions.</p>
              <p>Not just telling business owners what you think they should do.</p>
              <p>But actually being able to sit with a difficult business problem, break it down, find what is really causing it, and recommend a solution the business can act on.</p>
              <p>If your answer is yes, then you may have just found one of the most useful resources you'll come across today.</p>
              <p>But if you simply like the title "Consultant" more than the responsibility that comes with it, you can stop reading here.</p>
              <p style={{ fontWeight: 600 }}>Because this is for the consultant who wants to become genuinely valuable.</p>

              <p>The consultant who wants clients to look at their recommendations and say:</p>

              <blockquote style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontStyle: 'italic',
                lineHeight: 1.5,
                color: 'var(--primary)',
                margin: '24px 0',
                padding: '0 0 0 24px',
                borderLeft: '2px solid #B89B5E',
              }}>
                "This makes sense. Now we know what to do."
              </blockquote>

              <p>And eventually:</p>

              <blockquote style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontStyle: 'italic',
                lineHeight: 1.5,
                color: 'var(--primary)',
                margin: '24px 0',
                padding: '0 0 0 24px',
                borderLeft: '2px solid #B89B5E',
              }}>
                "This person is worth paying for."
              </blockquote>
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
              <p>So you are not simply taking one person's opinion and hoping it works. You're learning practical ways of thinking that have been used across different areas of business and problem-solving.</p>
              <p>And recently, we put these ideas into a book created for people like you.</p>
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
              <p>We created a book that teaches consultants and business owners how to approach business problems systematically.</p>
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
                <div style={{
                  position: 'relative',
                  perspective: '800px',
                  display: 'inline-block',
                }}>
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
              <p>Plus, the common traps that even trained consultants fall into — so you can recognize them before they weaken your recommendations.</p>
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
              <p>Because the goal isn't for you to memorize a collection of frameworks. The goal is for you to develop a way of thinking that helps you walk into a business problem and know what to do next.</p>
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
              If you're serious about becoming better at solving business problems, I don't want to just give you the guide and leave you to figure out the rest yourself. That's why I'm adding these bonuses to your download.
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
              <p>You're not just getting a book. You're getting a practical problem-solving toolkit you can return to whenever you encounter a difficult business problem.</p>
              <p style={{ fontWeight: 600 }}>And the best part? These bonuses are included FREE with your guide.</p>
              <p>So you can start applying what you've learned instead of simply reading it and forgetting it.</p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '20px',
                lineHeight: 1.6,
                color: 'var(--primary)',
              }}>
                Your next business problem could be the first one you solve differently.
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
                Read It. Apply It. If You Don't Find It Valuable, Ask for Your Money Back.
              </h2>
              <div style={{ fontSize: '18px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p>I'm confident that <em style={{ fontFamily: "'Playfair Display', serif" }}>Think Like a Consultant</em> can give you practical ways to approach business problems more systematically.</p>
                <p>But I don't want you to feel like you're taking a blind risk.</p>
                <p>Go through the guide. Study the frameworks. Work through the examples. Use the tools.</p>
                <p style={{ fontWeight: 600 }}>If you genuinely go through the material and feel that you didn't get the practical value you expected from it, simply let us know within 7 days of your purchase. We'll give you your money back. No long arguments. No trying to convince you.</p>
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
              Don't Put This Off Until Later.
            </h2>

            <div style={{ fontSize: '19px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p>Let's be honest.</p>
              <p>You've probably read enough business books, watched enough videos, and saved enough resources to know that "I'll do it later" can easily become "I never did it."</p>
              <p>And that's exactly what I don't want to happen with this guide.</p>
              <p>Because the next time a business owner comes to you with a problem... you have two choices.</p>

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
                  <p style={{ fontSize: '17px', lineHeight: 1.7, margin: 0 }}>Continue relying on instinct, experience, and whatever comes to mind in the moment...</p>
                </div>
                <div style={{
                  padding: '28px',
                  backgroundColor: 'var(--primary)',
                  color: '#FAF8F3',
                  border: '1px solid var(--primary)',
                }}>
                  <p style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#B89B5E', marginBottom: '12px' }}>With the guide</p>
                  <p style={{ fontSize: '17px', lineHeight: 1.7, margin: 0, color: '#FAF8F3' }}>Have a practical system for breaking the problem down and figuring out what to do next.</p>
                </div>
              </div>

              <p>That's why if you've been thinking, "I'll get the guide later" — I'd encourage you not to.</p>
              <p>Because you might never come across this page again.</p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: 1.5,
                color: 'var(--primary)',
              }}>
                The question isn't whether you'll face another business problem. You will. The question is whether you'll be better prepared when it comes.
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
              So, How Much Would All of This Cost You?
            </h2>

            <div style={{ fontSize: '18px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '56px' }}>
              <p>Think about what it could cost a business when you give the wrong advice. A business owner could spend months chasing the wrong problem. Thousands of naira could be wasted on the wrong marketing strategy. And sometimes, a consultant can lose the confidence of a client simply because the recommendation wasn't properly thought through.</p>
              <p>The ability to think through business problems systematically is valuable. And that's exactly what you're getting here.</p>

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

              <p>If you were to pay separately for professional training on all these areas, the cost could quickly run into tens or even hundreds of thousands of naira. But you don't have to.</p>
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
                ₦7,500
              </div>
              <p style={{
                fontSize: '15px',
                color: 'var(--muted-foreground)',
                marginBottom: '40px',
                maxWidth: '400px',
                margin: '0 auto 40px',
                lineHeight: 1.6,
              }}>
                You're not buying another book you'll read once and forget. You're investing in a practical system you can keep coming back to.
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
                { step: 'STEP 2', action: 'Complete your payment using the available payment option, you will be redirected to your download page.' },
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
              That's it. You can start learning and applying the system immediately.
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
              <p>You started reading this because you want to become better at helping businesses solve real problems. Don't lose sight of that.</p>
              <p>The goal isn't to become the consultant who has the fanciest title. It's not to impress clients by throwing complicated business terminology around. And it's certainly not about having an answer for everything.</p>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(20px, 2.5vw, 26px)',
                fontWeight: 600,
                lineHeight: 1.5,
                color: 'var(--primary)',
                margin: '16px 0',
              }}>
                It's about becoming the person who can walk into a difficult business situation, make sense of what is happening, identify what really matters, and help the business decide what to do next.
              </p>
              <p>That's what this guide is designed to help you develop.</p>
              <p>So if that's the kind of consultant you want to become...</p>
              <p style={{ fontWeight: 600, fontSize: '20px' }}>Get your copy of Think Like a Consultant today.</p>
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
                <p>You'll learn how to break problems apart, find root causes, generate options, prioritize what matters, think through risks, and turn recommendations into action. Plus, you'll get the additional tools and bonuses included with the offer.</p>
                <p>And with the money back guarantee, you don't have to make the decision blindly.</p>
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
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '16px',
            textDecoration: 'none',
            borderRadius: '2px',
          }}
        >
          Get Think Like a Consultant — ₦7,500
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
