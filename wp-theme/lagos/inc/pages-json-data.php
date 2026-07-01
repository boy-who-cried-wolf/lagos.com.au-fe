<?php
/**
 * Content pages loaded from data/pages.json (synced from React pages.json + pageExtras)
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Content page definitions from synced JSON.
 *
 * @return array<string, array<string, mixed>>
 */
function lagos_fe_pages_from_json() {
	static $pages = null;

	if ( null !== $pages ) {
		return $pages;
	}

	$pages = array();
	$path  = get_template_directory() . '/data/pages.json';

	if ( ! file_exists( $path ) ) {
		return $pages;
	}

	$json = file_get_contents( $path );
	$data = json_decode( $json, true );

	if ( is_array( $data ) && ! empty( $data['pages'] ) && is_array( $data['pages'] ) ) {
		$pages = $data['pages'];
	}

	return $pages;
}

/**
 * Rewrite root-relative links in synced page HTML.
 *
 * @param string $html Page HTML.
 * @return string
 */
function lagos_fe_page_content_html( $html ) {
	return lagos_fe_blog_content_html( $html );
}

/**
 * Whether a page slug should show testimonials after content.
 *
 * @param string $slug Page slug.
 * @return bool
 */
function lagos_fe_page_shows_testimonials( $slug ) {
	$page = lagos_fe_get_page_data( $slug );
	return ! empty( $page['show_testimonials'] );
}
