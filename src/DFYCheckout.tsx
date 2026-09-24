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

export default function DFYCheckout() {
  return (
    <div style={{ backgroundColor: T.bg, color: T.ink, minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── MINIMAL NAV ── */}
      <nav style={{ borderBottom: `1px solid ${T.border}`, padding: '0 2rem', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/dfy" style={{ fontFamily: "'Playfair Display', serif", fontSize: '16px', fontWeight: 700, color: T.ink, textDecoration: 'none' }}>
          QuickLearn<span style={{ color: T.accent }}>+</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: T.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: '10px', fontWeight: 700 }}>🔒</span>
          </div>
          <span style={{ fontSize: '12px', color: T.inkLight }}>Secure Checkout</span>
        </div>
      </nav>

      {/* ── BODY ── */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 2rem', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'flex-start' }} className="dfy-checkout-grid">

        {/* LEFT — ORDER SUMMARY */}
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.accent, marginBottom: '16px' }}>
            Your Order
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: '48px' }}>
            Let's build your digital product business.
          </h1>

          {/* Product block */}
          <div style={{ border: `1px solid ${T.border}`, borderTop: `3px solid ${T.accent}`, padding: '36px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.accent, marginBottom: '8px' }}>Done-For-You Digital Product Business</p>
                <p style={{ fontSize: '13px', color: T.inkLight, margin: 0 }}>One-time setup & implementation</p>
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 700, color: T.ink, lineHeight: 1 }}>₦100,000</div>
            </div>

            <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Market research',
                'Product research & creation',
                'Professional ebook design',
                'Selar setup & configuration',
                'Sales copy',
                'Ad creatives',
                'Meta Ads setup & launch',
                'Campaign management',
                'Initial optimization',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: T.accent, fontWeight: 700, flexShrink: 0, fontSize: '14px' }}>✓</span>
                  <span style={{ fontSize: '14px', color: T.inkLight, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advertising note */}
          <div style={{ backgroundColor: T.cream, border: `1px solid ${T.border}`, padding: '24px', marginBottom: '32px' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.inkLight, marginBottom: '8px' }}>Advertising Budget — Separate</p>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: T.inkLight, margin: 0 }}>
              Your advertising budget is separate from the ₦100,000 service fee. We recommend starting with <strong style={{ color: T.ink }}>₦50,000–₦100,000+</strong> to acquire your first customers.
            </p>
          </div>

          {/* Guarantee */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ width: '36px', height: '36px', border: `2px solid ${T.accent}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: T.accent, fontSize: '14px', fontWeight: 700 }}>✓</span>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 700, color: T.ink, marginBottom: '4px' }}>Our Guarantee</p>
              <p style={{ fontSize: '13px', lineHeight: 1.7, color: T.inkLight, margin: 0 }}>If we don't deliver what we promised within the agreed scope, we make it right.</p>
            </div>
          </div>
        </div>

        {/* RIGHT — PAYMENT */}
        <div style={{ position: 'sticky', top: '80px' }}>
          <div style={{ border: `1px solid ${T.border}`, backgroundColor: '#fff', padding: '36px' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.inkLight, marginBottom: '20px' }}>Order Summary</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: `1px solid ${T.border}`, marginBottom: '16px' }}>
              <span style={{ fontSize: '14px', color: T.inkLight }}>Done-For-You Digital Product Business</span>
              <span style={{ fontSize: '16px', fontWeight: 700, color: T.ink }}>₦100,000</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', fontWeight: 700, color: T.ink }}>Total Due Today</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: T.ink }}>₦100,000</span>
            </div>

            {/* Selar Pay button */}
            <a
              href="https://selar.com/978m069577"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block', width: '100%', textAlign: 'center',
                backgroundColor: T.accent, color: '#fff',
                fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '18px', textDecoration: 'none', borderRadius: '2px',
                transition: 'background-color 0.2s',
                marginBottom: '12px',
                boxSizing: 'border-box',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3D6B1F')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = T.accent)}
            >
              Pay ₦100,000 & Get Started →
            </a>

            <p style={{ fontSize: '12px', color: T.inkLight, textAlign: 'center', lineHeight: 1.6, margin: 0 }}>
              Secure payment via Selar. After payment you'll complete a short onboarding form.
            </p>

            <div style={{ borderTop: `1px solid ${T.border}`, marginTop: '24px', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['One-time payment — no recurring fees', 'Advertising budget billed separately', 'Onboarding begins immediately after payment'].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: T.accent, fontSize: '12px', flexShrink: 0, paddingTop: '2px' }}>—</span>
                  <span style={{ fontSize: '12px', color: T.inkLight, lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: '12px', color: T.inkLight, textAlign: 'center', marginTop: '16px' }}>
            Questions? <a href="https://wa.link/mxw0ow" target="_blank" rel="noopener noreferrer" style={{ color: T.accent, textDecoration: 'none', fontWeight: 600 }}>Chat with us on WhatsApp</a>
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap');
        @media (max-width: 768px) {
          .dfy-checkout-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
