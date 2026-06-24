import blogsData from './blogs.json'

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
  contentHtml: string
  author: string
}

export const blogPosts: readonly BlogPost[] = blogsData.posts

export function getBlogPost(slug: string | undefined) {
  return blogPosts.find((post) => post.slug === slug)
}
