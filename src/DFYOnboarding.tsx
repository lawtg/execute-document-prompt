import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const T = {
  bg:       '#F9F7F3',
  ink:      '#1A1A18',
  inkLight: '#4A4A45',
  border:   '#DDD9D0',
  accent:   '#2D5016',
  cream:    '#F3F0E8',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  fontSize: '16px',
  fontFamily: "'DM Sans', sans-serif",
  color: '#1A1A18',
  backgroundColor: '#fff',
  border: '1px solid #DDD9D0',
  borderRadius: '2px',
  outline: 'none',
  boxSizing: 'border-box',
  lineHeight: 1.5,
  transition: 'border-color 0.2s',
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: '#1A1A18', letterSpacing: '0.04em' }}>{label}</label>
      {hint && <p style={{ fontSize: '12px', color: '#4A4A45', margin: 0, lineHeight: 1.5 }}>{hint}</p>}
      {children}
    </div>
  )
}

export default function DFYOnboarding() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '', whatsapp: '', email: '',
    occupation: '', audience: '', problems: '',
    soldBefore: '', goal: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // In production: POST to backend / webhook
    setTimeout(() => navigate('/dfy/confirmation'), 800)
  }

  return (
    <div style={{ backgroundColor: T.bg, color: T.ink, minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── NAV ── */}
      <nav style={{ borderBottom: `1px solid ${T.border}`, padding: '0 2rem', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/dfy" style={{ fontFamily: "'Playfair Display', serif", fontSize: '16px', fontWeight: 700, color: T.ink, textDecoration: 'none' }}>
          QuickLearn<span style={{ color: T.accent }}>+</span>
        </Link>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {['Payment', 'Onboarding', 'Confirmation'].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: i === 1 ? T.accent : i < 1 ? T.accent : 'transparent',
                border: `1px solid ${i <= 1 ? T.accent : T.border}`,
              }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: i <= 1 ? '#fff' : T.inkLight }}>{i < 1 ? '✓' : i + 1}</span>
              </div>
              <span style={{ fontSize: '12px', fontWeight: i === 1 ? 700 : 400, color: i === 1 ? T.ink : T.inkLight }}>{s}</span>
              {i < 2 && <span style={{ color: T.border, fontSize: '12px' }}>›</span>}
            </div>
          ))}
        </div>
      </nav>

      {/* ── FORM ── */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '64px 2rem' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.accent, marginBottom: '16px' }}>
          Step 2 of 3 — Onboarding
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: '16px' }}>
          Welcome. Let's build.
        </h1>
        <p style={{ fontSize: '17px', lineHeight: 1.8, color: T.inkLight, marginBottom: '56px' }}>
          Your next step is simple: tell us a little about you and we'll take it from there.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

          <Field label="Full Name">
            <input required value={form.fullName} onChange={set('fullName')} placeholder="Your full name" style={inputStyle}
              onFocus={e => (e.target.style.borderColor = T.accent)}
              onBlur={e => (e.target.style.borderColor = T.border)} />
          </Field>

          <Field label="WhatsApp Number" hint="We'll send you next steps on WhatsApp.">
            <input required type="tel" value={form.whatsapp} onChange={set('whatsapp')} placeholder="+234 800 000 0000" style={inputStyle}
              onFocus={e => (e.target.style.borderColor = T.accent)}
              onBlur={e => (e.target.style.borderColor = T.border)} />
          </Field>

          <Field label="Email Address">
            <input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" style={inputStyle}
              onFocus={e => (e.target.style.borderColor = T.accent)}
              onBlur={e => (e.target.style.borderColor = T.border)} />
          </Field>

          <Field label="Current Occupation or Business">
            <input required value={form.occupation} onChange={set('occupation')} placeholder="e.g. Civil engineer, business owner, student..." style={inputStyle}
              onFocus={e => (e.target.style.borderColor = T.accent)}
              onBlur={e => (e.target.style.borderColor = T.border)} />
          </Field>

          <Field label="What type of audience are you interested in serving?" hint="Think about the kind of people whose problems you understand or find interesting.">
            <textarea required value={form.audience} onChange={set('audience')} rows={3} placeholder="e.g. Young professionals, small business owners, students, parents..." style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => (e.target.style.borderColor = T.accent)}
              onBlur={e => (e.target.style.borderColor = T.border)} />
          </Field>

          <Field label="What problems do you see people around you paying to solve?" hint="These could be problems in any area — business, career, relationships, health, money, skills.">
            <textarea required value={form.problems} onChange={set('problems')} rows={3} placeholder="e.g. People pay to learn how to make money online, how to get jobs, how to cook healthy food..." style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => (e.target.style.borderColor = T.accent)}
              onBlur={e => (e.target.style.borderColor = T.border)} />
          </Field>

          <Field label="Have you sold anything online before?">
            <select required value={form.soldBefore} onChange={set('soldBefore')} style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
              onFocus={e => (e.target.style.borderColor = T.accent)}
              onBlur={e => (e.target.style.borderColor = T.border)}>
              <option value="">Select an option</option>
              <option value="yes-digital">Yes — digital products</option>
              <option value="yes-physical">Yes — physical products or services</option>
              <option value="no">No — this will be my first time</option>
            </select>
          </Field>

          <Field label="What would you like this business to achieve?" hint="Be as specific as you'd like — monthly income target, timeline, or what it would mean for you.">
            <textarea required value={form.goal} onChange={set('goal')} rows={3} placeholder="e.g. Generate ₦200,000 per month within 3 months, replace my salary, build a side income..." style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => (e.target.style.borderColor = T.accent)}
              onBlur={e => (e.target.style.borderColor = T.border)} />
          </Field>

          <div style={{ paddingTop: '8px' }}>
            <button
              type="submit"
              disabled={submitting}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: submitting ? '#7A9B5E' : T.accent, color: '#fff',
                fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '18px 48px', border: 'none', borderRadius: '2px',
                cursor: submitting ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s',
                width: '100%', justifyContent: 'center',
              }}
            >
              {submitting ? 'Submitting...' : 'Start My Onboarding →'}
            </button>
            <p style={{ fontSize: '12px', color: T.inkLight, marginTop: '12px', textAlign: 'center' }}>
              Your information is kept private and used only to build your business.
            </p>
          </div>
        </form>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  )
}
