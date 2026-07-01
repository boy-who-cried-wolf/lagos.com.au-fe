<?php
/**
 * Blog posts — loaded from data/blogs.json (synced from src/data/blogs.json)
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * All blog posts.
 *
 * @return array<int, array<string, mixed>>
 */
function lagos_fe_blog_posts() {
	static $posts = null;

	if ( null !== $posts ) {
		return $posts;
	}

	$posts = array();
	$path  = get_template_directory() . '/data/blogs.json';

	if ( ! file_exists( $path ) ) {
		return $posts;
	}

	$json = file_get_contents( $path );
	$data = json_decode( $json, true );

	if ( is_array( $data ) && ! empty( $data['posts'] ) && is_array( $data['posts'] ) ) {
		$posts = $data['posts'];
	}

	return $posts;
}

/**
 * Request path relative to the WordPress site home (handles /stage/ installs).
 *
 * @return string
 */
function lagos_fe_request_path() {
	$request_uri = isset( $_SERVER['REQUEST_URI'] ) ? wp_unslash( $_SERVER['REQUEST_URI'] ) : '';
	$path        = (string) parse_url( $request_uri, PHP_URL_PATH );
	$path        = trim( $path, '/' );

	$home_path = (string) parse_url( home_url( '/' ), PHP_URL_PATH );
	$home_path = trim( $home_path, '/' );

	if ( $home_path && ( $path === $home_path || str_starts_with( $path, $home_path . '/' ) ) ) {
		$path = trim( substr( $path, strlen( $home_path ) ), '/' );
	}

	return $path;
}

/**
 * Parse /blog/{slug} from the current request URI.
 *
 * @return string
 */
function lagos_fe_parse_blog_slug_from_request() {
	$path = lagos_fe_request_path();

	if ( ! preg_match( '#^blog/([^/]+)/?$#', $path, $matches ) ) {
		return '';
	}

	$slug = sanitize_title( $matches[1] );
	if ( ! $slug || ! lagos_fe_get_blog_post( $slug ) ) {
		return '';
	}

	return $slug;
}

/**
 * Hero/page data for a JSON blog post.
 *
 * @param array<string, mixed> $post Blog post row.
 * @return array<string, mixed>
 */
function lagos_fe_blog_single_page_data( $post ) {
	return array(
		'eyebrow'             => 'Blog',
		'heading'             => $post['title'] ?? '',
		'accent'              => 'Expert Insights.',
		'subheading'          => $post['excerpt'] ?? '',
		'hero_image_url'      => $post['image'] ?? '',
		'secondary_cta_label' => 'All Articles',
		'secondary_cta_href'  => '/blog',
	);
}

/**
 * Get a single blog post by slug.
 *
 * @param string $slug Post slug.
 * @return array<string, mixed>|null
 */
function lagos_fe_get_blog_post( $slug ) {
	$slug = trim( (string) $slug, '/' );
	if ( ! $slug ) {
		return null;
	}

	foreach ( lagos_fe_blog_posts() as $post ) {
		if ( isset( $post['slug'] ) && $post['slug'] === $slug ) {
			return $post;
		}
	}

	return null;
}

/**
 * Blog post URL.
 *
 * @param string $slug Post slug.
 * @return string
 */
function lagos_fe_blog_post_url( $slug ) {
	return lagos_fe_url( '/blog/' . ltrim( $slug, '/' ) );
}

/**
 * Format blog date for cards.
 *
 * @param string $date_str ISO date.
 * @return string
 */
function lagos_fe_format_blog_date_short( $date_str ) {
	$timestamp = strtotime( $date_str );
	if ( ! $timestamp ) {
		return $date_str;
	}

	return wp_date( 'j M Y', $timestamp );
}

/**
 * Format blog date for article header.
 *
 * @param string $date_str ISO date.
 * @return string
 */
function lagos_fe_format_blog_date_long( $date_str ) {
	$timestamp = strtotime( $date_str );
	if ( ! $timestamp ) {
		return $date_str;
	}

	return wp_date( 'j F Y', $timestamp );
}

/**
 * Rewrite root-relative links in blog HTML for the current site URL.
 *
 * @param string $html Article HTML.
 * @return string
 */
function lagos_fe_blog_content_html( $html ) {
	if ( ! $html ) {
		return '';
	}

	$html = preg_replace_callback(
		'/href="\/([^"]*)"/',
		static function ( $matches ) {
			$path = trim( $matches[1], '/' );
			return 'href="' . esc_url( $path ? home_url( '/' . $path . '/' ) : home_url( '/' ) ) . '"';
		},
		$html
	);

	$html = preg_replace(
		'/<table(\s[^>]*)?>/i',
		'<div class="blog-article__table-wrap"><table$1>',
		$html
	);
	$html = str_replace( '</table>', '</table></div>', $html );

	return wp_kses_post( $html );
}
