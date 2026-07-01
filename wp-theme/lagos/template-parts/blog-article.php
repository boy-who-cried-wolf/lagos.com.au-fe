<?php
/**
 * Blog article body — matches BlogPostPage.tsx article section
 *
 * @package Lagos_Financial
 *
 * @var array<string, mixed> $lagos_blog_post
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

if ( empty( $lagos_blog_post ) ) {
	$lagos_blog_post = get_query_var( 'lagos_blog_post' );
}

if ( empty( $lagos_blog_post ) ) {
	$lagos_blog_slug = lagos_fe_resolve_blog_post_slug();
	$lagos_blog_post = $lagos_blog_slug ? lagos_fe_get_blog_post( $lagos_blog_slug ) : null;
}

if ( empty( $lagos_blog_post ) ) {
	return;
}
?>
<article class="section-blog-article">
	<div class="container">
		<div <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', 0, 'section-blog-article__inner' ); ?>>
			<div class="section-blog-article__meta">
				<div class="section-blog-article__meta-info">
					<time datetime="<?php echo esc_attr( $lagos_blog_post['date'] ); ?>">
						<?php echo esc_html( lagos_fe_format_blog_date_long( $lagos_blog_post['date'] ) ); ?>
					</time>
					<span aria-hidden="true">·</span>
					<span><?php echo esc_html( $lagos_blog_post['author'] ); ?></span>
				</div>
				<a class="section-blog-article__back" href="<?php echo esc_url( lagos_fe_url( '/blog' ) ); ?>">← Back to Blog</a>
			</div>

			<div class="blog-article">
				<?php echo lagos_fe_blog_content_html( $lagos_blog_post['contentHtml'] ); ?>
			</div>
		</div>
	</div>
</article>
