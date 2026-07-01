<?php
/**
 * Template Name: Lagos Content Page
 * Template Post Type: page
 *
 * Service/location pages — matches ContentPage.tsx
 *
 * @package Lagos_Financial
 */

get_header();

while ( have_posts() ) :
	the_post();

	$lagos_slug = get_post_field( 'post_name', get_the_ID() );
	$lagos_page = lagos_fe_get_page_data( $lagos_slug );

	if ( $lagos_page ) {
		$lagos_related_links = lagos_fe_get_related_links( $lagos_slug, $lagos_page );
		$lagos_related_title = 'Explore Related Services';

		$lagos_part_args = array(
			'lagos_page'          => $lagos_page,
			'lagos_slug'          => $lagos_slug,
			'lagos_related_links' => $lagos_related_links,
			'lagos_related_title' => $lagos_related_title,
		);

		get_template_part( 'template-parts/page', 'hero', $lagos_part_args );
		get_template_part( 'template-parts/content', 'sections', $lagos_part_args );

		if ( ! empty( $lagos_page['show_testimonials'] ) ) {
			get_template_part( 'template-parts/home/testimonials' );
		}

		get_template_part( 'template-parts/related', 'links', $lagos_part_args );
	} else {
		?>
		<div class="container page-shell">
			<article class="entry">
				<h1 class="entry__title"><?php the_title(); ?></h1>
				<div class="entry__content"><?php the_content(); ?></div>
			</article>
		</div>
		<?php
	}

	get_template_part( 'template-parts/cta', 'section' );
endwhile;

get_footer();
