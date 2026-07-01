<?php
/**
 * Related blog posts — matches BlogPostPage.tsx related section
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

$lagos_related = array();
foreach ( lagos_fe_blog_posts() as $post ) {
	if ( $post['slug'] === $lagos_blog_post['slug'] ) {
		continue;
	}
	$lagos_related[] = $post;
	if ( count( $lagos_related ) >= 3 ) {
		break;
	}
}

if ( empty( $lagos_related ) ) {
	return;
}
?>
<section class="section-blog-related">
	<div class="container">
		<div <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', 0, 'section-blog-related__header' ); ?>>
			<div class="section-blog__eyebrow">More Articles</div>
			<h2 class="section-blog-related__title font-neulis">Continue Reading</h2>
		</div>

		<div class="section-blog-related__grid">
			<?php foreach ( $lagos_related as $index => $post ) : ?>
				<div <?php echo lagos_fe_aos_attrs( 'animate-fade-up', $index * 80, 'section-blog__card-wrap' ); ?>>
					<a class="blog-card blog-card--compact" href="<?php echo esc_url( lagos_fe_blog_post_url( $post['slug'] ) ); ?>">
						<div class="blog-card__media">
							<img src="<?php echo esc_url( $post['image'] ); ?>" alt="<?php echo esc_attr( $post['title'] ); ?>" loading="lazy">
							<div class="blog-card__media-overlay" aria-hidden="true"></div>
						</div>

						<div class="blog-card__body">
							<div class="blog-card__title-row">
								<h3 class="font-neulis"><?php echo esc_html( $post['title'] ); ?></h3>
								<span class="blog-card__icon" aria-hidden="true">
									<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1v12M1 7h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
								</span>
							</div>
							<p class="blog-card__excerpt"><?php echo esc_html( $post['excerpt'] ); ?></p>
							<span class="blog-card__more">Read more →</span>
						</div>
					</a>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
