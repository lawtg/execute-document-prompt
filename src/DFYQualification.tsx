import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/* ─── Design tokens — completely fresh identity ─────── */
const C = {
  bg:      '#FFFFFF',
  surface: '#F7F5F0',
  ink:     '#111111',
  sub:     '#555550',
  muted:   '#888882',
  border:  '#E2DDD5',
  accent:  '#C8A96E',   /* warm gold */
  dark:    '#0F0F0D',
  btnBg:   '#111111',
  btnTxt:  '#FFFFFF',
}

const WA_NUMBER = '2348035062181'
const WA_MSG    = encodeURIComponent('Hi, I just went through the Digital Product Business offer and I\'m interested in getting started.')
const WA_URL    = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

/* ─── questions ─────────────────────────────────────── */
const QUESTIONS = [
  {
    id: 1,
    text: 'ARE YOU READY TO INVEST ₦100,000 INTO BUILDING A DIGITAL PRODUCT BUSINESS?',
    options: ['YES — I\'M READY', 'NOT YET'],
  },
  {
    id: 2,
    text: 'WHICH SOUNDS MOST LIKE YOU?',
    options: [
      'I HAVE MONEY, BUT I DON\'T KNOW WHAT BUSINESS TO START.',
      'I WANT ANOTHER SOURCE OF INCOME.',
      'I WANT TO SELL DIGITAL PRODUCTS, BUT I DON\'T HAVE THE TIME.',
      'I HAVE TRIED ONLINE BUSINESS BEFORE AND WANT A BETTER SYSTEM.',
    ],
  },
  {
    id: 3,
    text: 'HOW SOON WOULD YOU LIKE TO START?',
    options: ['I\'M READY NOW', 'WITHIN THE NEXT 30 DAYS', 'I\'M EXPLORING MY OPTIONS'],
  },
]

export default function DFYQualification() {
  const navigate  = useNavigate()
  const [step, setStep]       = useState(0) // 0 = hero, 1-3 = questions
  const [selected, setSelected] = useState<string | null>(null)
  const [leaving, setLeaving]   = useState(false)

  /* auto-redirect after Q3 answer */
  useEffect(() => {
    if (step === 3 && selected !== null) {
      const t = setTimeout(() => navigate('/dfy'), 420)
      return () => clearTimeout(t)
    }
  }, [step, selected, navigate])

  const advance = (option: string) => {
    setSelected(option)
    if (step < 3) {
      setLeaving(true)
      setTimeout(() => {
        setStep(s => s + 1)
        setSelected(null)
        setLeaving(false)
      }, 320)
    }
    /* step === 3: useEffect handles redirect */
  }

  const q = step >= 1 ? QUESTIONS[step - 1] : null

  return (
    <div style={{ backgroundColor: C.bg, minHeight: '100vh', fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif", color: C.ink }}>

      {/* ── NAV ── */}
      <nav style={{ borderBottom: `1px solid ${C.border}`, height: '58px', display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.03em', color: C.dark }}>
          THE DIGITAL<span style={{ color: C.accent }}>.</span>
        </span>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.sub, textDecoration: 'none' }}>
          WhatsApp
        </a>
      </nav>

      {/* ── HERO (step 0) ── */}
      {step === 0 && (
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '80px 24px 60px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent, marginBottom: '24px' }}>
            A Done-For-You Digital Product Business
          </p>
          <h1 style={{
            fontSize: 'clamp(36px, 8vw, 64px)', fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '-0.03em', color: C.dark, marginBottom: '16px',
          }}>
            YOU HAVE THE CAPITAL.
            <br />
            <span style={{ color: C.sub }}>YOU JUST DON'T HAVE THE TIME.</span>
          </h1>
          <p style={{ fontSize: '20px', fontWeight: 700, color: C.ink, marginBottom: '16px', lineHeight: 1.4 }}>
            So we build the business for you.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.75, color: C.sub, marginBottom: '48px', maxWidth: '480px', margin: '0 auto 48px' }}>
            We research the opportunity, create the digital product, set up the selling system and prepare the marketing — while you provide the capital.
          </p>
          <button onClick={() => setStep(1)} style={{
            backgroundColor: C.btnBg, color: C.btnTxt,
            fontFamily: 'inherit', fontSize: '14px', fontWeight: 800,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '18px 48px', border: 'none', cursor: 'pointer',
            width: '100%', maxWidth: '360px',
            transition: 'opacity 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            See If This Is For You →
          </button>
          <p style={{ fontSize: '12px', color: C.muted, marginTop: '16px' }}>3 quick questions. Takes under 60 seconds.</p>
        </div>
      )}

      {/* ── QUESTIONS (steps 1-3) ── */}
      {step >= 1 && q && (
        <div style={{
          maxWidth: '640px', margin: '0 auto', padding: '64px 24px',
          opacity: leaving ? 0 : 1,
          transform: leaving ? 'translateY(-10px)' : 'translateY(0)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}>

          {/* Progress */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', color: C.accent }}>
              {String(step).padStart(2, '0')} / 03
            </span>
            <div style={{ flex: 1, height: '2px', backgroundColor: C.border, borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: `${(step / 3) * 100}%`, height: '100%', backgroundColor: C.accent, transition: 'width 0.4s ease' }} />
            </div>
          </div>

          {/* Question */}
          <h2 style={{
            fontSize: 'clamp(22px, 5vw, 36px)', fontWeight: 900,
            lineHeight: 1.15, letterSpacing: '-0.02em',
            color: C.dark, marginBottom: '40px',
          }}>
            {q.text}
          </h2>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {q.options.map((opt, i) => (
              <button key={i} onClick={() => advance(opt)}
                style={{
                  backgroundColor: selected === opt ? C.btnBg : C.bg,
                  color: selected === opt ? C.btnTxt : C.ink,
                  border: `2px solid ${selected === opt ? C.btnBg : C.border}`,
                  fontFamily: 'inherit', fontSize: '13px', fontWeight: 700,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  padding: '20px 24px', cursor: 'pointer',
                  textAlign: 'left', lineHeight: 1.4,
                  transition: 'all 0.15s ease',
                  display: 'flex', alignItems: 'center', gap: '14px',
                }}
                onMouseEnter={e => {
                  if (selected !== opt) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = C.accent
                    ;(e.currentTarget as HTMLButtonElement).style.color = C.accent
                  }
                }}
                onMouseLeave={e => {
                  if (selected !== opt) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = C.border
                    ;(e.currentTarget as HTMLButtonElement).style.color = C.ink
                  }
                }}
              >
                <span style={{
                  width: '24px', height: '24px', flexShrink: 0, borderRadius: '50%',
                  border: `2px solid ${selected === opt ? C.btnTxt : C.border}`,
                  backgroundColor: selected === opt ? C.accent : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.15s',
                }}>
                  {selected === opt && <span style={{ color: '#fff', fontSize: '10px', fontWeight: 900 }}>✓</span>}
                </span>
                {opt}
              </button>
            ))}
          </div>

          {step === 3 && selected && (
            <p style={{ fontSize: '13px', color: C.muted, marginTop: '24px', textAlign: 'center' }}>
              Taking you to the offer…
            </p>
          )}
        </div>
      )}

      {/* ── FOOTER ── */}
      <div style={{ borderTop: `1px solid ${C.border}`, padding: '24px', textAlign: 'center', marginTop: '40px' }}>
        <p style={{ fontSize: '12px', color: C.muted, margin: 0 }}>
          © {new Date().getFullYear()} Quick Learn Plus
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
      `}</style>
    </div>
  )
}
