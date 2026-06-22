import { useEffect, useState } from 'react'

export function Preloader() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const hide = () => {
      setHidden(true)
      document.body.classList.add('loaded')
      setTimeout(() => setRemoved(true), 300)
    }

    if (document.readyState === 'complete') {
      hide()
    } else {
      window.addEventListener('load', hide)
      return () => window.removeEventListener('load', hide)
    }
  }, [])

  if (removed) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-300 ${
        hidden ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
      aria-hidden={hidden}
    >
      <div
        className="h-[50px] w-[50px] rounded-full border-4 border-[#f3f3f3] border-t-accent animate-[spin_1s_linear_infinite]"
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}
