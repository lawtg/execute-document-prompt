import { Link } from 'react-router-dom'

const T = {
  bg:       '#F9F7F3',
  ink:      '#1A1A18',
  inkLight: '#4A4A45',
  border:   '#DDD9D0',
  accent:   '#2D5016',
  cream:    '#F3F0E8',
  charcoal: '#1C1C1A',
}

export default function DFYConfirmation() {
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
                backgroundColor: T.accent, border: `1px solid ${T.accent}`,
              }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#fff' }}>✓</span>
              </div>
              <span style={{ fontSize: '12px', fontWeight: i === 2 ? 700 : 400, color: i === 2 ? T.ink : T.inkLight }}>{s}</span>
              {i < 2 && <span style={{ color: T.border, fontSize: '12px' }}>›</span>}
            </div>
          ))}
        </div>
      </nav>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '100px 2rem', textAlign: 'center' }}>

        {/* Check mark */}
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: T.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 40px' }}>
          <span style={{ color: '#fff', fontSize: '28px', fontWeight: 700 }}>✓</span>
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
          You're in.
        </h1>

        <p style={{ fontSize: '18px', lineHeight: 1.8, color: T.inkLight, marginBottom: '56px', maxWidth: '480px', margin: '0 auto 56px' }}>
          Your onboarding information has been received. We'll contact you on WhatsApp with the next steps.
        </p>

        {/* What happens next */}
        <div style={{ border: `1px solid ${T.border}`, borderTop: `3px solid ${T.accent}`, padding: '40px', textAlign: 'left', marginBottom: '48px' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.accent, marginBottom: '24px' }}>
            What Happens Next
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { n: '01', t: 'WhatsApp Contact', b: "We'll reach out on WhatsApp within 24 hours to confirm your details and kick off the process." },
              { n: '02', t: 'Market Research Begins', b: 'Our team starts researching your market and identifying the right digital product opportunity.' },
              { n: '03', t: 'Product Creation', b: 'We research, write and professionally design your ebook.' },
              { n: '04', t: 'Selar Setup & Launch', b: 'We publish your product, set up the sales infrastructure and launch your Meta Ads campaign.' },
            ].map((step, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '16px', padding: '24px 0', borderBottom: i < 3 ? `1px solid ${T.border}` : 'none', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: 'rgba(0,0,0,0.07)', lineHeight: 1 }}>{step.n}</div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: T.ink, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{step.t}</p>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: T.inkLight, margin: 0 }}>{step.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.link/mxw0ow"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            backgroundColor: T.accent, color: '#fff',
            fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '18px 48px', textDecoration: 'none', borderRadius: '2px',
            transition: 'background-color 0.2s',
            marginBottom: '16px',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3D6B1F')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = T.accent)}
        >
          Continue to WhatsApp →
        </a>

        <p style={{ fontSize: '13px', color: T.inkLight }}>
          Or wait — we'll message you first.
        </p>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${T.border}`, padding: '24px 2rem', textAlign: 'center', backgroundColor: T.cream }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: T.inkLight, margin: 0 }}>
          © {new Date().getFullYear()} Quick Learn Plus · Done-For-You Digital Product Business
        </p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  )
}
