import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL  = import.meta.env.VITE_SUPABASE_URL  as string
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON)

/* ── Types ────────────────────────────────────────────── */
export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'converted' | 'not_interested'

export interface Lead {
  id:          string
  name:        string
  phone:       string
  q1:          string
  q2:          string
  q3:          string
  status:      LeadStatus
  notes:       string
  created_at:  string
  updated_at:  string
}
