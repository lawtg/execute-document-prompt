import { useEffect, useState, useCallback } from 'react'
import { supabase, type Lead, type LeadStatus } from './lib/supabase'

/* ─── Design tokens ─────────────────────────────────── */
const C = {
  bg:      '#F7F7F5',
  surface: '#FFFFFF',
  ink:     '#111111',
  sub:     '#555550',
  muted:   '#888882',
  border:  '#E5E3DE',
  accent:  '#C8A96E',
  dark:    '#0F0F0D',
  danger:  '#DC2626',
}

const STATUS_CONFIG: Record<LeadStatus, { label: string; bg: string; color: string }> = {
  new:            { label: 'New',           bg: '#EFF6FF', color: '#1D4ED8' },
  contacted:      { label: 'Contacted',     bg: '#FFF7ED', color: '#C2410C' },
  qualified:      { label: 'Qualified',     bg: '#F0FDF4', color: '#15803D' },
  converted:      { label: 'Converted',     bg: '#FAF5FF', color: '#7E22CE' },
  not_interested: { label: 'Not Interested',bg: '#FEF2F2', color: '#B91C1C' },
}

const STATUSES = Object.keys(STATUS_CONFIG) as LeadStatus[]

/* ─── Components ─────────────────────────────────────── */
function StatusBadge({ status }: { status: LeadStatus }) {
  const s = STATUS_CONFIG[status]
  return (
    <span style={{
      fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em',
      padding: '3px 10px', borderRadius: '999px',
      backgroundColor: s.bg, color: s.color,
      whiteSpace: 'nowrap',
    }}>
      {s.label}
    </span>
  )
}

function Modal({ lead, onClose, onSave }: {
  lead: Lead
  onClose: () => void
  onSave: (id: string, status: LeadStatus, notes: string) => void
}) {
  const [status, setStatus] = useState<LeadStatus>(lead.status)
  const [notes, setNotes]   = useState(lead.notes ?? '')
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    await onSave(lead.id, status, notes)
    setSaving(false)
    onClose()
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '16px',
    }} onClick={onClose}>
      <div style={{
        backgroundColor: C.surface, width: '100%', maxWidth: '560px',
        maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
      }} onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div style={{ padding: '24px 28px', borderBottom: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: C.ink, marginBottom: '4px' }}>{lead.name}</h2>
            <a href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '14px', color: C.accent, textDecoration: 'none', fontWeight: 600 }}>
              {lead.phone}
            </a>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: C.muted, padding: '4px', lineHeight: 1 }}>✕</button>
        </div>

        {/* Answers */}
        <div style={{ padding: '24px 28px', borderBottom: `1px solid ${C.border}` }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: '16px' }}>Qualification Answers</p>
          {[
            { q: 'Ready to invest ₦100,000?', a: lead.q1 },
            { q: 'Sounds most like?', a: lead.q2 },
            { q: 'Timeline?', a: lead.q3 },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <p style={{ fontSize: '11px', color: C.muted, marginBottom: '4px' }}>{item.q}</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: C.ink }}>{item.a || '—'}</p>
            </div>
          ))}
          <p style={{ fontSize: '12px', color: C.muted, marginTop: '8px' }}>
            Added {new Date(lead.created_at).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>

        {/* Status */}
        <div style={{ padding: '24px 28px', borderBottom: `1px solid ${C.border}` }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: '12px' }}>Status</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {STATUSES.map(s => (
              <button key={s} onClick={() => setStatus(s)} style={{
                fontSize: '12px', fontWeight: 700, padding: '7px 14px',
                border: `2px solid ${status === s ? STATUS_CONFIG[s].color : C.border}`,
                backgroundColor: status === s ? STATUS_CONFIG[s].bg : 'transparent',
                color: status === s ? STATUS_CONFIG[s].color : C.sub,
                cursor: 'pointer', borderRadius: '999px', transition: 'all 0.15s',
              }}>
                {STATUS_CONFIG[s].label}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div style={{ padding: '24px 28px', borderBottom: `1px solid ${C.border}` }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, marginBottom: '12px' }}>Notes</p>
          <textarea
            value={notes} onChange={e => setNotes(e.target.value)}
            rows={4} placeholder="Add follow-up notes here..."
            style={{
              width: '100%', padding: '12px', fontSize: '14px', lineHeight: 1.6,
              border: `1px solid ${C.border}`, outline: 'none', resize: 'vertical',
              fontFamily: 'inherit', color: C.ink, boxSizing: 'border-box',
              backgroundColor: C.bg,
            }}
            onFocus={e => (e.target.style.borderColor = C.accent)}
            onBlur={e => (e.target.style.borderColor = C.border)}
          />
        </div>

        {/* Actions */}
        <div style={{ padding: '20px 28px', display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'flex-end' }}>
          <a href={`https://wa.me/${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent("Hi " + lead.name + ", I'm following up on your interest in the Digital Product Business.")}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              fontSize: '13px', fontWeight: 700, color: '#15803D',
              textDecoration: 'none', border: '1px solid #15803D',
              padding: '10px 20px', transition: 'all 0.15s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#15803D'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#15803D' }}
          >
            WhatsApp →
          </a>
          <button onClick={handleSave} disabled={saving} style={{
            fontSize: '13px', fontWeight: 700, color: '#fff',
            backgroundColor: saving ? C.muted : C.dark,
            border: 'none', padding: '10px 24px', cursor: saving ? 'not-allowed' : 'pointer',
            transition: 'opacity 0.15s',
          }}>
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─── Main CRM ───────────────────────────────────────── */
export default function CRM() {
  const [leads, setLeads]         = useState<Lead[]>([])
  const [loading, setLoading]     = useState(true)
  const [search, setSearch]       = useState('')
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'all'>('all')
  const [activeLead, setActiveLead] = useState<Lead | null>(null)
  const [error, setError]         = useState('')

  /* ── Auth gate ─────────────────────────────────────── */
  const [pin, setPin]             = useState('')
  const [authed, setAuthed]       = useState(false)
  const [pinError, setPinError]   = useState('')
  const ADMIN_PIN = import.meta.env.VITE_CRM_PIN ?? '1234'

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) { setError(error.message); setLoading(false); return }
    setLeads(data as Lead[])
    setLoading(false)
  }, [])

  useEffect(() => {
    if (authed) fetchLeads()
  }, [authed, fetchLeads])

  const handleSave = async (id: string, status: LeadStatus, notes: string) => {
    const { error } = await supabase
      .from('leads')
      .update({ status, notes, updated_at: new Date().toISOString() })
      .eq('id', id)
    if (error) { alert('Save failed: ' + error.message); return }
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status, notes } : l))
  }

  /* ── PIN screen ─────────────────────────────────────── */
  if (!authed) {
    return (
      <div style={{ backgroundColor: C.bg, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', system-ui, sans-serif" }}>
        <div style={{ backgroundColor: C.surface, padding: '48px 40px', width: '100%', maxWidth: '360px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 800, color: C.ink, marginBottom: '6px' }}>CRM</h1>
          <p style={{ fontSize: '13px', color: C.muted, marginBottom: '28px' }}>Enter your PIN to access leads.</p>
          <form onSubmit={e => {
            e.preventDefault()
            if (pin === ADMIN_PIN) { setAuthed(true); setPinError('') }
            else { setPinError('Incorrect PIN. Try again.') }
          }}>
            <input
              type="password" value={pin} onChange={e => setPin(e.target.value)}
              placeholder="PIN" autoFocus
              style={{
                width: '100%', padding: '13px 14px', fontSize: '16px', letterSpacing: '0.3em',
                border: `1px solid ${C.border}`, outline: 'none', marginBottom: '12px',
                fontFamily: 'inherit', boxSizing: 'border-box',
              }}
              onFocus={e => (e.target.style.borderColor = C.accent)}
              onBlur={e => (e.target.style.borderColor = C.border)}
            />
            {pinError && <p style={{ fontSize: '12px', color: C.danger, marginBottom: '12px' }}>{pinError}</p>}
            <button type="submit" style={{
              width: '100%', backgroundColor: C.dark, color: '#fff',
              fontFamily: 'inherit', fontSize: '13px', fontWeight: 800,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '14px', border: 'none', cursor: 'pointer',
            }}>
              Enter →
            </button>
          </form>
        </div>
      </div>
    )
  }

  /* ── Filtered leads ─────────────────────────────────── */
  const filtered = leads.filter(l => {
    const matchSearch = search === '' ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search)
    const matchStatus = filterStatus === 'all' || l.status === filterStatus
    return matchSearch && matchStatus
  })

  const counts = STATUSES.reduce((acc, s) => {
    acc[s] = leads.filter(l => l.status === s).length
    return acc
  }, {} as Record<LeadStatus, number>)

  return (
    <div style={{ backgroundColor: C.bg, minHeight: '100vh', fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── HEADER ── */}
      <div style={{ backgroundColor: C.dark, padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h1 style={{ fontSize: '15px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            THE DIGITAL<span style={{ color: C.accent }}>.</span> CRM
          </h1>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{leads.length} leads</span>
        </div>
        <button onClick={fetchLeads} style={{
          background: 'none', border: '1px solid rgba(255,255,255,0.15)',
          color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: 600,
          padding: '6px 14px', cursor: 'pointer', letterSpacing: '0.06em',
          transition: 'all 0.15s',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#fff'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.4)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.15)' }}
        >
          ↻ Refresh
        </button>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>

        {/* ── STATS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '28px' }} className="crm-stats-grid">
          {STATUSES.map(s => (
            <div key={s} style={{
              backgroundColor: C.surface, padding: '20px',
              border: `1px solid ${C.border}`,
              borderTop: `3px solid ${STATUS_CONFIG[s].color}`,
              cursor: 'pointer',
              opacity: filterStatus !== 'all' && filterStatus !== s ? 0.5 : 1,
              transition: 'opacity 0.15s',
            }} onClick={() => setFilterStatus(prev => prev === s ? 'all' : s)}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: C.ink, lineHeight: 1, marginBottom: '6px' }}>{counts[s]}</div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{STATUS_CONFIG[s].label}</div>
            </div>
          ))}
        </div>

        {/* ── SEARCH + FILTERS ── */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <input
            type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or phone..."
            style={{
              flex: 1, minWidth: '200px', padding: '11px 14px', fontSize: '14px',
              border: `1px solid ${C.border}`, outline: 'none', fontFamily: 'inherit',
              backgroundColor: C.surface,
            }}
            onFocus={e => (e.target.style.borderColor = C.accent)}
            onBlur={e => (e.target.style.borderColor = C.border)}
          />
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value as LeadStatus | 'all')}
            style={{
              padding: '11px 14px', fontSize: '13px', fontWeight: 600,
              border: `1px solid ${C.border}`, outline: 'none', cursor: 'pointer',
              backgroundColor: C.surface, fontFamily: 'inherit', color: C.ink,
            }}>
            <option value="all">All Statuses</option>
            {STATUSES.map(s => <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>)}
          </select>
          {(search || filterStatus !== 'all') && (
            <button onClick={() => { setSearch(''); setFilterStatus('all') }} style={{
              padding: '11px 16px', fontSize: '13px', fontWeight: 600,
              border: `1px solid ${C.border}`, backgroundColor: 'transparent',
              cursor: 'pointer', color: C.sub, fontFamily: 'inherit',
            }}>
              Clear
            </button>
          )}
        </div>

        {/* ── TABLE ── */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px', color: C.muted, fontSize: '14px' }}>Loading leads…</div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '80px', color: C.danger, fontSize: '14px' }}>Error: {error}</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px', color: C.muted, fontSize: '14px' }}>
            {leads.length === 0 ? 'No leads yet. They will appear here when people fill the qualification form.' : 'No leads match your search.'}
          </div>
        ) : (
          <div style={{ backgroundColor: C.surface, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
            {/* Table header */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 140px 1fr 120px 140px 80px',
              padding: '12px 20px', borderBottom: `1px solid ${C.border}`,
              backgroundColor: C.bg,
            }} className="crm-table-header">
              {['Name', 'Phone', 'Timeline', 'Status', 'Date Added', ''].map((h, i) => (
                <span key={i} style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted }}>{h}</span>
              ))}
            </div>

            {/* Rows */}
            {filtered.map((lead, i) => (
              <div key={lead.id}
                style={{
                  display: 'grid', gridTemplateColumns: '1fr 140px 1fr 120px 140px 80px',
                  padding: '16px 20px',
                  borderBottom: i < filtered.length - 1 ? `1px solid ${C.border}` : 'none',
                  alignItems: 'center', cursor: 'pointer',
                  transition: 'background-color 0.1s',
                }}
                className="crm-row"
                onClick={() => setActiveLead(lead)}
              >
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: C.ink, margin: 0 }}>{lead.name}</p>
                  {lead.notes && <p style={{ fontSize: '11px', color: C.muted, margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>{lead.notes}</p>}
                </div>
                <span style={{ fontSize: '13px', color: C.sub }}>{lead.phone}</span>
                <span style={{ fontSize: '12px', color: C.sub, paddingRight: '8px' }}>{lead.q3 || '—'}</span>
                <StatusBadge status={lead.status} />
                <span style={{ fontSize: '12px', color: C.muted }}>{new Date(lead.created_at).toLocaleDateString('en-NG', { day: 'numeric', month: 'short' })}</span>
                <button onClick={e => { e.stopPropagation(); setActiveLead(lead) }}
                  style={{
                    fontSize: '12px', fontWeight: 600, color: C.accent,
                    background: 'none', border: `1px solid ${C.accent}`,
                    padding: '6px 12px', cursor: 'pointer',
                  }}>
                  Open
                </button>
              </div>
            ))}
          </div>
        )}

        <p style={{ fontSize: '12px', color: C.muted, marginTop: '16px', textAlign: 'right' }}>
          Showing {filtered.length} of {leads.length} leads
        </p>
      </div>

      {/* ── MODAL ── */}
      {activeLead && (
        <Modal
          lead={activeLead}
          onClose={() => setActiveLead(null)}
          onSave={handleSave}
        />
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .crm-row:hover { background-color: #F9F9F7 !important; }
        @media (max-width: 900px) {
          .crm-stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .crm-table-header { display: none !important; }
          .crm-row {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto auto auto;
            gap: 8px;
          }
        }
        @media (max-width: 520px) {
          .crm-stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  )
}
