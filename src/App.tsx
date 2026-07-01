import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { HomePage } from './pages/HomePage'
import { ContentPage } from './pages/ContentPage'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { PodcastPage } from './pages/PodcastPage'
import { PodcastPostPage } from './pages/PodcastPostPage'
import { pages } from './data/pages'
import { blogPosts } from './data/blogs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="frequently-asked-questions" element={<FaqPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          {blogPosts.map((post) => (
            <Route
              key={post.slug}
              path={post.slug}
              element={<Navigate to={`/blog/${post.slug}`} replace />}
            />
          ))}
          <Route path="podcast" element={<PodcastPage />} />
          <Route path="podcast/:slug" element={<PodcastPostPage />} />
          <Route path="terms-and-conditions" element={<Navigate to="/terms-of-use" replace />} />
          <Route path="book-complimentary-assessment" element={<Navigate to="/contact" replace />} />
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
