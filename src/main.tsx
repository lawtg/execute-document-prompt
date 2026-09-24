import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import ThankYou from './ThankYou'
import SalesPageB from './SalesPageB'
import SalesPageC from './SalesPageC'
import DFY from './DFY'
import DFYQualification from './DFYQualification'
import CRM from './CRM'
import MetaPixel from './MetaPixel'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MetaPixel />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/business-owner" element={<SalesPageB />} />
        <Route path="/owner" element={<SalesPageC />} />
        <Route path="/dfy" element={<DFY />} />
        <Route path="/dfy/start" element={<DFYQualification />} />
        <Route path="/crm" element={<CRM />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>,
)
