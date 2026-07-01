<?php
/**
 * Blog listing grid — matches BlogPage.tsx
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<section class="section-blog">
	<div class="container">
		<div class="section-blog__header">
			<div class="section-blog__eyebrow">Latest Articles</div>
			<h2 class="section-blog__title font-neuliscursive">Finance Tips &amp; Property Guides</h2>
		</div>

		<div class="section-blog__grid">
			<?php foreach ( lagos_fe_blog_posts() as $index => $post ) : ?>
				<div <?php echo lagos_fe_aos_attrs( 'animate-fade-up', $index * 80, 'section-blog__card-wrap' ); ?>>
					<a class="blog-card" href="<?php echo esc_url( lagos_fe_blog_post_url( $post['slug'] ) ); ?>">
						<div class="blog-card__media">
							<img src="<?php echo esc_url( $post['image'] ); ?>" alt="<?php echo esc_attr( $post['title'] ); ?>" loading="lazy">
							<div class="blog-card__media-overlay" aria-hidden="true"></div>
							<time class="blog-card__date" datetime="<?php echo esc_attr( $post['date'] ); ?>">
								<?php echo esc_html( lagos_fe_format_blog_date_short( $post['date'] ) ); ?>
							</time>
						</div>

						<div class="blog-card__body">
							<div class="blog-card__title-row">
								<h2 class="font-neulis"><?php echo esc_html( $post['title'] ); ?></h2>
								<span class="blog-card__icon" aria-hidden="true">
									<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1v12M1 7h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
								</span>
							</div>
							<p class="blog-card__author"><?php echo esc_html( $post['author'] ); ?></p>
							<p class="blog-card__excerpt"><?php echo esc_html( $post['excerpt'] ); ?></p>
							<span class="blog-card__more">Read more →</span>
						</div>
					</a>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
