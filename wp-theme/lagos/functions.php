<?php
/**
 * Lagos Financial theme.
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'LAGOS_FE_VERSION', '1.6.0' );

require_once __DIR__ . '/inc/navigation.php';
require_once __DIR__ . '/inc/home-data.php';
require_once __DIR__ . '/inc/blog-data.php';
require_once __DIR__ . '/inc/pages-json-data.php';
require_once __DIR__ . '/inc/page-data.php';
require_once __DIR__ . '/inc/hero-icons.php';
require_once __DIR__ . '/inc/animations.php';
require_once __DIR__ . '/inc/faq-data.php';
require_once __DIR__ . '/inc/podcast-data.php';
require_once __DIR__ . '/inc/template-routing.php';

function lagos_fe_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'lagos_fe_setup' );

function lagos_fe_enqueue_assets() {
	$theme_uri = get_template_directory_uri();

	wp_enqueue_style(
		'lagos-fe-fonts',
		$theme_uri . '/assets/css/fonts.css',
		array(),
		LAGOS_FE_VERSION
	);

	wp_enqueue_style(
		'lagos-fe-main',
		$theme_uri . '/assets/css/main.css',
		array( 'lagos-fe-fonts' ),
		LAGOS_FE_VERSION
	);

	wp_enqueue_style(
		'lagos-fe-animations',
		$theme_uri . '/assets/css/animations.css',
		array( 'lagos-fe-main' ),
		LAGOS_FE_VERSION
	);

	wp_enqueue_style(
		'lagos-fe-mobile',
		$theme_uri . '/assets/css/mobile.css',
		array( 'lagos-fe-main' ),
		LAGOS_FE_VERSION
	);

	wp_enqueue_style(
		'lagos-fe-page-content',
		$theme_uri . '/assets/css/page-content.css',
		array( 'lagos-fe-main' ),
		LAGOS_FE_VERSION
	);

	wp_enqueue_script(
		'lagos-fe-animations',
		$theme_uri . '/assets/js/animations.js',
		array(),
		LAGOS_FE_VERSION,
		true
	);

	wp_enqueue_script(
		'lagos-fe-main',
		$theme_uri . '/assets/js/main.js',
		array(),
		LAGOS_FE_VERSION,
		true
	);

	wp_enqueue_script(
		'lagos-fe-contact-form',
		$theme_uri . '/assets/js/contact-form.js',
		array(),
		LAGOS_FE_VERSION,
		true
	);

	$load_home_assets = is_front_page() || ( is_page() && 'contact' === get_post_field( 'post_name', get_queried_object_id() ) );

	if ( $load_home_assets ) {
		wp_enqueue_style(
			'lagos-fe-home',
			$theme_uri . '/assets/css/home.css',
			array( 'lagos-fe-main', 'lagos-fe-mobile' ),
			LAGOS_FE_VERSION
		);
	}

	if ( is_front_page() ) {

		wp_enqueue_style(
			'lagos-fe-swiper',
			$theme_uri . '/assets/css/swiper-bundle.min.css',
			array(),
			'12.2.0'
		);

		wp_enqueue_script(
			'lagos-fe-swiper',
			$theme_uri . '/assets/js/swiper-bundle.min.js',
			array(),
			'12.2.0',
			true
		);

		wp_enqueue_script(
			'lagos-fe-home',
			$theme_uri . '/assets/js/home.js',
			array(),
			LAGOS_FE_VERSION,
			true
		);

		wp_enqueue_script(
			'lagos-fe-testimonials',
			$theme_uri . '/assets/js/testimonials.js',
			array( 'lagos-fe-swiper' ),
			LAGOS_FE_VERSION,
			true
		);

		wp_localize_script(
			'lagos-fe-home',
			'lagosFeHome',
			array(
				'contactUrl' => lagos_fe_url( '/contact' ),
			)
		);
	}

	lagos_fe_maybe_enqueue_testimonials();
}
add_action( 'wp_enqueue_scripts', 'lagos_fe_enqueue_assets' );

/**
 * Swiper assets for testimonials on homepage and selected content pages.
 */
function lagos_fe_maybe_enqueue_testimonials() {
	$load = is_front_page();

	if ( ! $load && is_page() ) {
		$slug = lagos_fe_current_page_slug();
		$load = in_array( $slug, array( 'about-us', 'bondi', 'launceston' ), true );
	}

	if ( ! $load ) {
		return;
	}

	$theme_uri = get_template_directory_uri();

	if ( ! is_front_page() ) {
		wp_enqueue_style(
			'lagos-fe-home',
			$theme_uri . '/assets/css/home.css',
			array( 'lagos-fe-main', 'lagos-fe-mobile' ),
			LAGOS_FE_VERSION
		);
	}

	wp_enqueue_style(
		'lagos-fe-swiper',
		$theme_uri . '/assets/css/swiper-bundle.min.css',
		array(),
		'12.2.0'
	);

	wp_enqueue_script(
		'lagos-fe-swiper',
		$theme_uri . '/assets/js/swiper-bundle.min.js',
		array(),
		'12.2.0',
		true
	);

	wp_enqueue_script(
		'lagos-fe-testimonials',
		$theme_uri . '/assets/js/testimonials.js',
		array( 'lagos-fe-swiper' ),
		LAGOS_FE_VERSION,
		true
	);
}

/**
 * Legacy URL redirects — mirrors React App.tsx routes.
 */
function lagos_fe_legacy_redirects() {
	if ( is_admin() ) {
		return;
	}

	$path = lagos_fe_request_path();

	if ( 'terms-and-conditions' === $path ) {
		wp_safe_redirect( lagos_fe_url( '/terms-of-use' ), 301 );
		exit;
	}

	if ( 'book-complimentary-assessment' === $path ) {
		wp_safe_redirect( lagos_fe_url( '/contact' ), 301 );
		exit;
	}

	if ( ! $path || str_contains( $path, '/' ) ) {
		return;
	}

	if ( lagos_fe_get_page_data( $path ) ) {
		return;
	}

	if ( lagos_fe_get_blog_post( $path ) ) {
		wp_safe_redirect( lagos_fe_url( '/blog/' . $path ), 301 );
		exit;
	}
}
add_action( 'template_redirect', 'lagos_fe_legacy_redirects', 1 );

function lagos_fe_favicon() {
	$icon = get_template_directory_uri() . '/assets/images/favicon.svg';
	echo '<link rel="icon" href="' . esc_url( $icon ) . '" type="image/svg+xml">' . "\n";
}
add_action( 'wp_head', 'lagos_fe_favicon', 5 );

function lagos_fe_body_class( $classes ) {
	$classes[] = 'loaded';
	return $classes;
}
add_filter( 'body_class', 'lagos_fe_body_class' );

/**
 * Register blog post rewrite rules.
 */
function lagos_fe_register_rewrites() {
	add_rewrite_rule( '^blog/([^/]+)/?$', 'index.php?lagos_blog_slug=$matches[1]', 'top' );
	add_rewrite_rule( '^podcast/([^/]+)/?$', 'index.php?lagos_podcast_slug=$matches[1]', 'top' );
}
add_action( 'init', 'lagos_fe_register_rewrites' );

/**
 * Register lagos_blog_slug early from the request path (rewrite fallback).
 *
 * @param WP $wp Current WordPress environment instance.
 */
function lagos_fe_parse_blog_request( $wp ) {
	if ( is_admin() ) {
		return;
	}

	$slug = lagos_fe_parse_blog_slug_from_request();
	if ( $slug ) {
		$wp->query_vars['lagos_blog_slug'] = $slug;
	}

	$podcast_slug = lagos_fe_parse_podcast_slug_from_request();
	if ( $podcast_slug ) {
		$wp->query_vars['lagos_podcast_slug'] = $podcast_slug;
	}
}
add_action( 'parse_request', 'lagos_fe_parse_blog_request' );

/**
 * Flush rewrite rules after theme updates.
 */
function lagos_fe_maybe_flush_rewrites() {
	$stored = get_option( 'lagos_fe_rewrite_version', '' );
	if ( LAGOS_FE_VERSION === $stored ) {
		return;
	}

	lagos_fe_register_rewrites();
	flush_rewrite_rules( false );
	update_option( 'lagos_fe_rewrite_version', LAGOS_FE_VERSION );
}
add_action( 'init', 'lagos_fe_maybe_flush_rewrites', 20 );

/**
 * @param array<int, string> $vars Query vars.
 * @return array<int, string>
 */
function lagos_fe_query_vars( $vars ) {
	$vars[] = 'lagos_blog_slug';
	$vars[] = 'lagos_podcast_slug';
	return $vars;
}
add_filter( 'query_vars', 'lagos_fe_query_vars' );

/**
 * Flush rewrite rules when the theme is activated.
 */
function lagos_fe_activate_theme() {
	lagos_fe_register_rewrites();
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'lagos_fe_activate_theme' );

/**
 * Auto-use content page template when slug matches page data.
 *
 * @param string $template Path to template file.
 * @return string
 */
function lagos_fe_template_include( $template ) {
	$blog_slug = lagos_fe_resolve_blog_post_slug();
	if ( $blog_slug ) {
		set_query_var( 'lagos_blog_slug', $blog_slug );
		$single_template = lagos_fe_get_blog_single_template();
		if ( $single_template ) {
			return $single_template;
		}
	}

	$podcast_slug = lagos_fe_resolve_podcast_episode_slug();
	if ( $podcast_slug ) {
		set_query_var( 'lagos_podcast_slug', $podcast_slug );
		$single_template = lagos_fe_get_podcast_single_template();
		if ( $single_template ) {
			return $single_template;
		}
	}

	if ( lagos_fe_is_blog_listing_view() ) {
		$blog_template = lagos_fe_get_blog_listing_template();
		if ( $blog_template ) {
			return $blog_template;
		}
	}

	if ( lagos_fe_is_podcast_listing_view() ) {
		$podcast_template = lagos_fe_get_podcast_listing_template();
		if ( $podcast_template ) {
			return $podcast_template;
		}
	}

	if ( is_page() ) {
		$slug   = lagos_fe_current_page_slug();
		$custom = lagos_fe_get_page_template_path( $slug );
		if ( $custom ) {
			return $custom;
		}
	}

	return $template;
}
add_filter( 'template_include', 'lagos_fe_template_include', 99 );

/**
 * SEO document title from page data.
 *
 * @param string $title Document title.
 * @return string
 */
function lagos_fe_document_title( $title ) {
	if ( is_front_page() ) {
		return 'Lagos Financial | Mortgage Broker Bondi & Launceston';
	}

	$blog_slug = lagos_fe_resolve_blog_post_slug();
	if ( $blog_slug ) {
		$post = lagos_fe_get_blog_post( $blog_slug );
		if ( $post && ! empty( $post['title'] ) ) {
			return $post['title'] . ' | Lagos Financial Blog';
		}
	}

	$podcast_slug = lagos_fe_resolve_podcast_episode_slug();
	if ( $podcast_slug ) {
		$episode = lagos_fe_get_podcast_episode( $podcast_slug );
		if ( $episode && ! empty( $episode['title'] ) ) {
			return $episode['title'] . ' | Lagos Financial Podcast';
		}
	}

	$page = lagos_fe_get_current_page_data();
	if ( $page && ! empty( $page['title'] ) ) {
		return $page['title'];
	}
	return $title;
}
add_filter( 'pre_get_document_title', 'lagos_fe_document_title' );

/**
 * Meta description from page data or homepage default.
 */
function lagos_fe_meta_description() {
	if ( is_front_page() ) {
		echo '<meta name="description" content="Mortgage brokers in Bondi and Launceston. Access 60+ lenders, expert home loan advice, and complimentary assessments from Lagos Financial.">' . "\n";
		return;
	}

	$blog_slug = lagos_fe_resolve_blog_post_slug();
	if ( $blog_slug ) {
		$post = lagos_fe_get_blog_post( $blog_slug );
		if ( $post && ! empty( $post['excerpt'] ) ) {
			echo '<meta name="description" content="' . esc_attr( $post['excerpt'] ) . '">' . "\n";
			return;
		}
	}

	$podcast_slug = lagos_fe_resolve_podcast_episode_slug();
	if ( $podcast_slug ) {
		$episode = lagos_fe_get_podcast_episode( $podcast_slug );
		if ( $episode && ! empty( $episode['excerpt'] ) ) {
			echo '<meta name="description" content="' . esc_attr( $episode['excerpt'] ) . '">' . "\n";
			return;
		}
	}

	$page = lagos_fe_get_current_page_data();
	if ( $page && ! empty( $page['description'] ) ) {
		echo '<meta name="description" content="' . esc_attr( $page['description'] ) . '">' . "\n";
	}
}
add_action( 'wp_head', 'lagos_fe_meta_description', 1 );

/**
 * Redirect after contact form submission.
 *
 * @param string $status sent|error
 */
function lagos_fe_contact_form_redirect( $status = 'sent' ) {
	$url = wp_get_referer();
	if ( ! $url ) {
		$url = home_url( '/' );
	}

	$url = remove_query_arg( 'contact', $url );
	if ( 'error' === $status ) {
		$url = add_query_arg( 'contact', 'error', $url );
	} else {
		$url = add_query_arg( 'contact', 'sent', $url );
	}

	$url = strtok( $url, '#' );
	wp_safe_redirect( $url . '#contact-form' );
	exit;
}

/**
 * Handle contact form submission.
 */
function lagos_fe_handle_contact_form() {
	if ( ! isset( $_POST['lagos_contact_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['lagos_contact_nonce'] ) ), 'lagos_contact' ) ) {
		wp_die( esc_html__( 'Invalid request.', 'lagos-financial' ) );
	}

	if ( ! empty( $_POST['honeypot'] ) ) {
		lagos_fe_contact_form_redirect( 'sent' );
	}

	$name  = isset( $_POST['full_name'] ) ? sanitize_text_field( wp_unslash( $_POST['full_name'] ) ) : '';
	$phone = isset( $_POST['contact_number'] ) ? sanitize_text_field( wp_unslash( $_POST['contact_number'] ) ) : '';
	$email = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$loan  = isset( $_POST['loanOption'] ) ? sanitize_text_field( wp_unslash( $_POST['loanOption'] ) ) : '';

	if ( ! $name || ! $phone || ! is_email( $email ) || ! $loan ) {
		lagos_fe_contact_form_redirect( 'error' );
	}

	$to      = get_option( 'admin_email' );
	$subject = sprintf( 'New borrowing inquiry from %s', $name );
	$body    = sprintf(
		"Name: %s\nPhone: %s\nEmail: %s\nLoan type: %s\n",
		$name,
		$phone,
		$email,
		$loan
	);
	$headers = array(
		'Content-Type: text/plain; charset=UTF-8',
		'Reply-To: ' . $email,
	);

	wp_mail( $to, $subject, $body, $headers );

	lagos_fe_contact_form_redirect( 'sent' );
}
add_action( 'admin_post_nopriv_lagos_contact', 'lagos_fe_handle_contact_form' );
add_action( 'admin_post_lagos_contact', 'lagos_fe_handle_contact_form' );
