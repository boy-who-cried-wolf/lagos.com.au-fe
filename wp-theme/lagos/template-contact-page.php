<?php
/**
 * Template Name: Lagos Contact Page
 * Template Post Type: page
 *
 * @package Lagos_Financial
 */

get_header();

while ( have_posts() ) :
	the_post();

	$lagos_slug = get_post_field( 'post_name', get_the_ID() );
	$lagos_page = lagos_fe_get_page_data( $lagos_slug );

	if ( ! $lagos_page ) {
		$lagos_page = lagos_fe_get_page_data( 'contact' );
	}

	$lagos_related_links = array();

	$lagos_part_args = array(
		'lagos_page' => $lagos_page,
		'lagos_slug' => $lagos_slug,
	);

	get_template_part( 'template-parts/page', 'hero', $lagos_part_args );
	get_template_part( 'template-parts/office', 'cards', $lagos_part_args );
	get_template_part( 'template-parts/contact', 'form', $lagos_part_args );
	get_template_part( 'template-parts/cta', 'section', $lagos_part_args );
endwhile;

get_footer();
