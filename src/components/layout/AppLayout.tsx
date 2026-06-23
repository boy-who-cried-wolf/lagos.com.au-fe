import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Preloader } from './Preloader'
import { Header } from './Header'
import { Footer } from './Footer'
import { PageTransition } from './PageTransition'
import { useScrollAnimations } from '../../hooks/useScrollAnimations'

export function AppLayout() {
  const location = useLocation()
  useScrollAnimations()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Preloader />
      <Header />
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}
