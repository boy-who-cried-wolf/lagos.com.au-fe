<?php
/**
 * Single podcast episode — matches PodcastPostPage.tsx
 *
 * @package Lagos_Financial
 */

$lagos_podcast_slug = lagos_fe_resolve_podcast_episode_slug();
$lagos_podcast_episode = lagos_fe_get_podcast_episode( $lagos_podcast_slug );

if ( ! $lagos_podcast_episode ) {
	get_header();
	?>
	<div class="container page-shell">
		<div class="blog-not-found">
			<h1>Episode not found</h1>
			<p><a class="blog-not-found__link" href="<?php echo esc_url( lagos_fe_url( '/podcast' ) ); ?>">Back to Podcast</a></p>
		</div>
	</div>
	<?php
	get_footer();
	return;
}

get_header();

$lagos_page = lagos_fe_podcast_single_page_data( $lagos_podcast_episode );
$lagos_part_args = array(
	'lagos_page'          => $lagos_page,
	'lagos_slug'          => 'podcast',
	'lagos_podcast_episode' => $lagos_podcast_episode,
);

get_template_part( 'template-parts/page', 'hero', $lagos_part_args );
lagos_fe_load_template_part( 'template-parts/podcast', 'article', $lagos_part_args );
lagos_fe_load_template_part( 'template-parts/podcast', 'related', $lagos_part_args );
get_template_part( 'template-parts/cta', 'section', $lagos_part_args );

get_footer();
