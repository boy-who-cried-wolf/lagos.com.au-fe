type BlogArticleContentProps = {
  html: string
}

export function BlogArticleContent({ html }: BlogArticleContentProps) {
  return <div className="blog-article" dangerouslySetInnerHTML={{ __html: html }} />
}
