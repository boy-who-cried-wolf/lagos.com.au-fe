import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { HomePage } from './pages/HomePage'
import { ContentPage } from './pages/ContentPage'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { BlogPage } from './pages/BlogPage'
import { PodcastPage } from './pages/PodcastPage'
import { pages } from './data/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="frequently-asked-questions" element={<FaqPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="podcast" element={<PodcastPage />} />
          {Object.keys(pages).map((pageKey) => {
            const path = pageKey.replace(/^\//, '')
            return <Route key={pageKey} path={path} element={<ContentPage pageKey={pageKey} />} />
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
