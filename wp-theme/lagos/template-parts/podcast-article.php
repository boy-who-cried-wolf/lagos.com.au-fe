<?php
/**
 * Podcast episode body — matches PodcastPostPage.tsx article section
 *
 * @package Lagos_Financial
 *
 * @var array<string, mixed> $lagos_podcast_episode
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

if ( empty( $lagos_podcast_episode ) ) {
	$lagos_podcast_episode = get_query_var( 'lagos_podcast_episode' );
}

if ( empty( $lagos_podcast_episode ) ) {
	$lagos_podcast_slug = lagos_fe_resolve_podcast_episode_slug();
	$lagos_podcast_episode = $lagos_podcast_slug ? lagos_fe_get_podcast_episode( $lagos_podcast_slug ) : null;
}

if ( empty( $lagos_podcast_episode ) ) {
	return;
}
?>
<article class="section-blog-article">
	<div class="container">
		<div <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', 0, 'section-blog-article__inner' ); ?>>
			<div class="section-blog-article__meta">
				<div class="section-blog-article__meta-info">
					<time datetime="<?php echo esc_attr( $lagos_podcast_episode['date'] ); ?>">
						<?php echo esc_html( lagos_fe_format_blog_date_long( $lagos_podcast_episode['date'] ) ); ?>
					</time>
					<span aria-hidden="true">·</span>
					<span><?php echo esc_html( $lagos_podcast_episode['author'] ); ?></span>
					<span aria-hidden="true">·</span>
					<span>Podcast</span>
				</div>
				<a class="section-blog-article__back" href="<?php echo esc_url( lagos_fe_url( '/podcast' ) ); ?>">← Back to Podcast</a>
			</div>

			<div class="blog-article">
				<?php echo lagos_fe_podcast_content_html( $lagos_podcast_episode['contentHtml'] ); ?>
			</div>
		</div>
	</div>
</article>
