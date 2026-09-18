import { useEffect } from 'react'

export default function MetaPixel() {
  useEffect(() => {
    // Avoid double injection
    if ((window as any).fbq) return

    // Inject fbevents.js
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)

    // Bootstrap fbq
    const fbq: any = function (...args: any[]) {
      fbq.callMethod
        ? fbq.callMethod.apply(fbq, args)
        : fbq.queue.push(args)
    }
    const win = window as any
    win.fbq = fbq
    win._fbq = fbq
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []

    fbq('init', '1089854867312597')
    fbq('track', 'PageView')
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
