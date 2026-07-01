<?php
/**
 * Podcast listing grid — matches PodcastPage.tsx
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<section class="section-blog section-podcast-list">
	<div class="container">
		<div class="section-blog__header">
			<div class="section-blog__eyebrow">Latest Episodes</div>
			<h2 class="section-blog__title font-neuliscursive">Debt to Financial Freedom</h2>
		</div>

		<div class="section-blog__grid">
			<?php foreach ( lagos_fe_podcast_episodes() as $index => $episode ) : ?>
				<div <?php echo lagos_fe_aos_attrs( 'animate-fade-up', $index * 80, 'section-blog__card-wrap' ); ?>>
					<a class="blog-card" href="<?php echo esc_url( lagos_fe_podcast_episode_url( $episode['slug'] ) ); ?>">
						<div class="blog-card__media">
							<img src="<?php echo esc_url( $episode['image'] ); ?>" alt="<?php echo esc_attr( $episode['title'] ); ?>" loading="lazy">
							<div class="blog-card__media-overlay" aria-hidden="true"></div>
							<time class="blog-card__date" datetime="<?php echo esc_attr( $episode['date'] ); ?>">
								<?php echo esc_html( lagos_fe_format_blog_date_short( $episode['date'] ) ); ?>
							</time>
						</div>

						<div class="blog-card__body">
							<div class="blog-card__title-row">
								<h2 class="font-neulis"><?php echo esc_html( $episode['title'] ); ?></h2>
								<span class="blog-card__icon" aria-hidden="true">
									<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1v12M1 7h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
								</span>
							</div>
							<p class="blog-card__author">by <?php echo esc_html( $episode['author'] ); ?> · Podcast</p>
							<p class="blog-card__excerpt"><?php echo esc_html( $episode['excerpt'] ); ?></p>
							<span class="blog-card__more">Read more →</span>
						</div>
					</a>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
