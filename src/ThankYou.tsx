import consultantCover from './-like-a-consultant-cover.png'

export default function ThankYou() {
  return (
    <div style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav style={{
        borderBottom: '1px solid var(--border)',
        padding: '20px 0',
        backgroundColor: 'var(--background)',
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

      {/* ── MAIN ── */}
      <section style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>

          {/* Gold accent line */}
          <div style={{ width: '40px', height: '3px', backgroundColor: '#B89B5E', margin: '0 auto 40px' }} />

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#B89B5E',
            marginBottom: '24px',
          }}>
            Order Confirmed
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: 'var(--foreground)',
            marginBottom: '24px',
          }}>
            Thank You for Your Purchase
          </h1>

          <p style={{
            fontSize: '18px',
            lineHeight: 1.8,
            color: 'var(--muted-foreground)',
            marginBottom: '48px',
          }}>
            Your copy of <em style={{ fontFamily: "'Playfair Display', serif", color: 'var(--foreground)' }}>Think Like a Consultant</em> — along with all your bonuses — is ready for download.
          </p>

          {/* Book cover */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '56px' }}>
            <img
              src={consultantCover}
              alt="Think Like a Consultant — book cover"
              style={{
                width: '180px',
                display: 'block',
                borderRadius: '3px 8px 8px 3px',
                boxShadow: '8px 16px 40px rgba(0,0,0,0.2)',
              }}
            />
          </div>

          {/* Download button */}
          <a
            href="https://drive.google.com/drive/folders/1F62_3eUBcHsZsSu8OGt6AZiLxKmdPlkt?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#0D2137',
              color: '#FAF8F3',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '20px 56px',
              borderRadius: '3px',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease, transform 0.15s ease',
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
            Access Your Downloads
          </a>

          <p style={{
            fontSize: '13px',
            color: 'var(--muted-foreground)',
            marginTop: '20px',
          }}>
            Opens in Google Drive — all files are ready to download.
          </p>

          {/* Divider */}
          <div style={{ borderTop: '1px solid var(--border)', margin: '64px 0 48px' }} />

          {/* What's included */}
          <div style={{ textAlign: 'left' }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B89B5E',
              marginBottom: '24px',
              textAlign: 'center',
            }}>
              What's Inside Your Folder
            </p>

            {[
              'Think Like a Consultant — the complete guide',
              'The Consultant\'s Quick-Reference Cheat Sheet',
              'The Business Problem Diagnosis Worksheet',
              'The Consultant\'s Problem-Solving Checklist',
              '3 Complete Business Problem Walkthroughs',
              'The Consultant\'s Framework Selection Guide',
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                padding: '14px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ color: '#B89B5E', fontWeight: 700, fontSize: '15px', flexShrink: 0, paddingTop: '2px' }}>✓</span>
                <span style={{ fontSize: '16px', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--border)', margin: '64px 0 40px' }} />

          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '18px',
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: 'var(--muted-foreground)',
          }}>
            We hope this guide helps you become the consultant who walks into any business problem with clarity and confidence. Good luck.
          </p>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--foreground)',
            marginTop: '24px',
          }}>
            — Quick Learn Plus
          </p>
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
    </div>
  )
}
