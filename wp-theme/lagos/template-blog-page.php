<?php
/**
 * Template Name: Lagos Blog Page
 * Template Post Type: page
 *
 * @package Lagos_Financial
 */

get_header();

$lagos_slug = lagos_fe_current_page_slug();
if ( ! $lagos_slug ) {
	$lagos_slug = 'blog';
}

$lagos_page = lagos_fe_get_page_data( $lagos_slug );
if ( ! $lagos_page ) {
	$lagos_page = lagos_fe_get_page_data( 'blog' );
}

$lagos_part_args = array(
	'lagos_page' => $lagos_page,
	'lagos_slug' => $lagos_slug,
);

get_template_part( 'template-parts/page', 'hero', $lagos_part_args );
get_template_part( 'template-parts/blog', 'grid', $lagos_part_args );
get_template_part( 'template-parts/cta', 'section', $lagos_part_args );

get_footer();
