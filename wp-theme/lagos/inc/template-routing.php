<?php
/**
 * Template routing — maps Lagos page slugs to theme templates.
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Map legacy WP slugs to Lagos page-data keys.
 *
 * @param string $slug Raw page slug.
 * @return string
 */
function lagos_fe_resolve_page_slug( $slug ) {
	$slug    = trim( (string) $slug, '/' );
	$aliases = array(
		'debt-to-financial-freedom-podcast' => 'podcast',
		'podcasts'                          => 'podcast',
	);

	return isset( $aliases[ $slug ] ) ? $aliases[ $slug ] : $slug;
}

/**
 * Slugs for Lagos landing pages that may conflict with categories.
 *
 * @return array<int, string>
 */
function lagos_fe_reserved_landing_slugs() {
	return array( 'blog', 'podcast' );
}

/**
 * Specialized Lagos page templates keyed by template id.
 *
 * @return array<string, string>
 */
function lagos_fe_specialized_templates() {
	return array(
		'contact' => 'template-contact-page.php',
		'faq'     => 'template-faq-page.php',
		'podcast' => 'template-podcast-page.php',
		'blog'    => 'template-blog-page.php',
	);
}

/**
 * Resolve a Lagos template file path for a page slug.
 *
 * @param string $slug Page slug.
 * @return string|null
 */
function lagos_fe_get_page_template_path( $slug ) {
	$slug = lagos_fe_resolve_page_slug( $slug );
	if ( ! $slug ) {
		return null;
	}

	$page = lagos_fe_get_page_data( $slug );
	if ( ! $page ) {
		return null;
	}

	$special = lagos_fe_specialized_templates();
	if ( ! empty( $page['template'] ) && isset( $special[ $page['template'] ] ) ) {
		$file = get_template_directory() . '/' . $special[ $page['template'] ];
		return file_exists( $file ) ? $file : null;
	}

	$content = get_template_directory() . '/template-content-page.php';
	return file_exists( $content ) ? $content : null;
}

/**
 * Current page slug when viewing a Lagos page.
 *
 * @return string
 */
function lagos_fe_queried_page_slug() {
	if ( ! is_page() ) {
		return '';
	}

	$page_id = get_queried_object_id();
	if ( ! $page_id ) {
		return '';
	}

	return lagos_fe_resolve_page_slug( get_post_field( 'post_name', $page_id ) );
}

/**
 * Current page slug when viewing a Lagos page.
 *
 * @return string
 */
function lagos_fe_current_page_slug() {
	$page_slug = lagos_fe_queried_page_slug();
	if ( $page_slug ) {
		return $page_slug;
	}

	if ( is_home() && ! is_front_page() ) {
		return 'blog';
	}

	if ( is_category( 'blog' ) ) {
		return 'blog';
	}

	if ( is_category( 'podcast' ) ) {
		return 'podcast';
	}

	if ( is_post_type_archive( 'podcast' ) ) {
		return 'podcast';
	}

	return '';
}

/**
 * Whether the current request should show the Lagos blog listing.
 */
function lagos_fe_is_blog_listing_view() {
	if ( lagos_fe_resolve_blog_post_slug() ) {
		return false;
	}

	if ( lagos_fe_parse_blog_slug_from_request() ) {
		return false;
	}

	if ( is_home() && ! is_front_page() ) {
		return true;
	}

	if ( is_page( 'blog' ) ) {
		$queried = get_queried_object();
		if ( $queried instanceof WP_Post && 'blog' === $queried->post_name ) {
			return true;
		}
	}

	if ( is_category( 'blog' ) ) {
		return true;
	}

	return false;
}

/**
 * Whether the current request should show the Lagos podcast landing page.
 */
function lagos_fe_is_podcast_listing_view() {
	if ( lagos_fe_resolve_podcast_episode_slug() ) {
		return false;
	}

	if ( lagos_fe_parse_podcast_slug_from_request() ) {
		return false;
	}

	if ( is_page( 'podcast' ) ) {
		return true;
	}

	if ( 'podcast' === lagos_fe_queried_page_slug() ) {
		return true;
	}

	if ( is_category( 'podcast' ) ) {
		return true;
	}

	if ( is_post_type_archive( 'podcast' ) ) {
		return true;
	}

	return false;
}

/**
 * Path to the Lagos podcast landing template.
 *
 * @return string|null
 */
function lagos_fe_get_podcast_listing_template() {
	$file = get_template_directory() . '/template-podcast-page.php';
	return file_exists( $file ) ? $file : null;
}

/**
 * Resolve a Lagos podcast episode slug for the current request.
 */
function lagos_fe_resolve_podcast_episode_slug() {
	$slug = get_query_var( 'lagos_podcast_slug' );
	if ( $slug && lagos_fe_get_podcast_episode( $slug ) ) {
		return $slug;
	}

	if ( is_singular( 'podcast' ) ) {
		$episode_slug = get_post_field( 'post_name', get_queried_object_id() );
		if ( $episode_slug && lagos_fe_get_podcast_episode( $episode_slug ) ) {
			return $episode_slug;
		}
	}

	$slug = lagos_fe_parse_podcast_slug_from_request();
	if ( $slug ) {
		return $slug;
	}

	return '';
}

/**
 * Path to the Lagos podcast single template.
 *
 * @return string|null
 */
function lagos_fe_get_podcast_single_template() {
	$file = get_template_directory() . '/template-podcast-single.php';
	return file_exists( $file ) ? $file : null;
}

/**
 * Resolve a Lagos blog post slug for the current request.
 */
function lagos_fe_resolve_blog_post_slug() {
	$slug = get_query_var( 'lagos_blog_slug' );
	if ( $slug && lagos_fe_get_blog_post( $slug ) ) {
		return $slug;
	}

	if ( is_singular( 'post' ) ) {
		$post_slug = get_post_field( 'post_name', get_queried_object_id() );
		if ( $post_slug && lagos_fe_get_blog_post( $post_slug ) ) {
			return $post_slug;
		}
	}

	$slug = lagos_fe_parse_blog_slug_from_request();
	if ( $slug ) {
		return $slug;
	}

	return '';
}

/**
 * Load a template part with explicit args (reliable across WP versions).
 *
 * @param string               $slug Template slug under template-parts/.
 * @param string|null          $name Optional template name.
 * @param array<string, mixed> $args Variables to expose in the part.
 */
function lagos_fe_load_template_part( $slug, $name = null, $args = array() ) {
	foreach ( $args as $key => $value ) {
		set_query_var( $key, $value );
	}

	get_template_part( $slug, $name, $args );
}

/**
 * Path to the Lagos blog listing template.
 *
 * @return string|null
 */
function lagos_fe_get_blog_listing_template() {
	$file = get_template_directory() . '/template-blog-page.php';
	return file_exists( $file ) ? $file : null;
}

/**
 * Path to the Lagos blog single template.
 *
 * @return string|null
 */
function lagos_fe_get_blog_single_template() {
	$file = get_template_directory() . '/template-blog-single.php';
	return file_exists( $file ) ? $file : null;
}

/**
 * Prefer Lagos landing pages over same-slug category archives.
 *
 * @param array<string, mixed> $query_vars Query vars.
 * @return array<string, mixed>
 */
function lagos_fe_request_prefer_lagos_pages( $query_vars ) {
	if ( is_admin() ) {
		return $query_vars;
	}

	foreach ( lagos_fe_reserved_landing_slugs() as $slug ) {
		if ( isset( $query_vars['pagename'] ) && $slug === $query_vars['pagename'] ) {
			unset( $query_vars['category_name'], $query_vars['cat'] );
			return $query_vars;
		}
	}

	if ( empty( $query_vars['category_name'] ) || ! in_array( $query_vars['category_name'], lagos_fe_reserved_landing_slugs(), true ) ) {
		return $query_vars;
	}

	$slug  = $query_vars['category_name'];
	$page  = get_page_by_path( $slug );
	if ( ! $page ) {
		return $query_vars;
	}

	unset( $query_vars['category_name'], $query_vars['cat'], $query_vars['name'] );
	$query_vars['page_id']  = $page->ID;
	$query_vars['pagename'] = $slug;

	return $query_vars;
}
add_filter( 'request', 'lagos_fe_request_prefer_lagos_pages' );

/**
 * Render Lagos template parts for a page slug (fallback when page.php is used).
 *
 * @param string $slug Page slug.
 * @return bool True when Lagos content was rendered.
 */
function lagos_fe_render_page_content( $slug ) {
	$slug = lagos_fe_resolve_page_slug( $slug );
	$page = lagos_fe_get_page_data( $slug );
	if ( ! $page ) {
		return false;
	}

	$args = array(
		'lagos_page' => $page,
		'lagos_slug' => $slug,
	);

	if ( ! empty( $page['template'] ) && 'contact' === $page['template'] ) {
		$args['lagos_related_links'] = array();
		get_template_part( 'template-parts/page', 'hero', $args );
		get_template_part( 'template-parts/office', 'cards', $args );
		get_template_part( 'template-parts/contact', 'form', $args );
		get_template_part( 'template-parts/cta', 'section', $args );
		return true;
	}

	if ( ! empty( $page['template'] ) && 'faq' === $page['template'] ) {
		get_template_part( 'template-parts/page', 'hero', $args );
		get_template_part( 'template-parts/faq', 'section', $args );
		get_template_part( 'template-parts/cta', 'section', $args );
		return true;
	}

	if ( ! empty( $page['template'] ) && 'podcast' === $page['template'] ) {
		get_template_part( 'template-parts/page', 'hero', $args );
		get_template_part( 'template-parts/podcast', 'section', $args );
		get_template_part( 'template-parts/cta', 'section', $args );
		return true;
	}

	if ( ! empty( $page['template'] ) && 'blog' === $page['template'] ) {
		get_template_part( 'template-parts/page', 'hero', $args );
		get_template_part( 'template-parts/blog', 'grid', $args );
		get_template_part( 'template-parts/cta', 'section', $args );
		return true;
	}

	$args['lagos_related_links'] = lagos_fe_get_related_links( $slug, $page );
	$args['lagos_related_title'] = 'Explore Related Services';

	get_template_part( 'template-parts/page', 'hero', $args );
	get_template_part( 'template-parts/content', 'sections', $args );

	if ( ! empty( $page['show_testimonials'] ) ) {
		get_template_part( 'template-parts/home/testimonials' );
	}

	get_template_part( 'template-parts/related', 'links', $args );
	get_template_part( 'template-parts/cta', 'section', $args );

	return true;
}
