import { useEffect } from 'react'

export default function MetaPixel() {
  useEffect(() => {
    const win = window as any

    // Already initialised (e.g. HMR re-run) — just fire PageView
    if (win.fbq) {
      win.fbq('track', 'PageView')
      return
    }

    // 1. Set up the fbq stub and queue FIRST — fbevents.js expects this
    //    to exist when it loads, so it can replay the queued calls.
    const fbq: any = function () {
      // eslint-disable-next-line prefer-rest-params
      fbq.callMethod
        ? fbq.callMethod.apply(fbq, arguments)
        : fbq.queue.push(arguments)
    }
    win.fbq = fbq
    win._fbq = fbq
    fbq.push    = fbq
    fbq.loaded  = true
    fbq.version = '2.0'
    fbq.queue   = []

    // 2. Queue init + PageView BEFORE the script loads
    fbq('init', '1089854867312597')
    fbq('track', 'PageView')

    // 3. NOW inject the script — it will replay the queue on load
    const s = document.getElementsByTagName('script')[0]
    const t = document.createElement('script')
    t.async = true
    t.src   = 'https://connect.facebook.net/en_US/fbevents.js'
    s.parentNode!.insertBefore(t, s)
  }, [])

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1089854867312597&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  )
}
