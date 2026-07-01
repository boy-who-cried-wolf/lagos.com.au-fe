<?php
/**
 * Podcast episodes — loaded from data/podcasts.json (synced from src/data/podcasts.json)
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Podcast intro copy — mirrors podcastContent in content.ts
 *
 * @return array{eyebrow: string, title: string, description: string, paragraphs: array<int, string>}
 */
function lagos_fe_podcast_content() {
	return array(
		'eyebrow'     => 'Podcast',
		'title'       => 'Debt to Financial Freedom Podcast',
		'description' => "Welcome to the Debt Financial Freedom Podcast. I'm your host Victor Lagos and the founder of Lagos Financial.",
		'paragraphs'  => array(
			"I've been in the finance and lending industry for 17 years and I've personally made financial mistakes and learned from them.",
			"I've started this Podcast to share stories and lessons on my own journey, and to share insight that may help others on their journey, and I interviewed people that I connected with, that share my values and mission to help other create financial freedom.",
			'My goal in this podcast is to share raw, honest, transparent, and helpful stories that you can relate to, and inspires you to take control of your finances.',
			'And only have debt that brings you closer to financial freedom.',
		),
	);
}

/**
 * All podcast episodes.
 *
 * @return array<int, array<string, mixed>>
 */
function lagos_fe_podcast_episodes() {
	static $episodes = null;

	if ( null !== $episodes ) {
		return $episodes;
	}

	$episodes = array();
	$path     = get_template_directory() . '/data/podcasts.json';

	if ( ! file_exists( $path ) ) {
		return $episodes;
	}

	$json = file_get_contents( $path );
	$data = json_decode( $json, true );

	if ( is_array( $data ) && ! empty( $data['episodes'] ) && is_array( $data['episodes'] ) ) {
		$episodes = $data['episodes'];
	}

	return $episodes;
}

/**
 * Parse /podcast/{slug} from the current request URI.
 *
 * @return string
 */
function lagos_fe_parse_podcast_slug_from_request() {
	$path = lagos_fe_request_path();

	if ( ! preg_match( '#^podcast/([^/]+)/?$#', $path, $matches ) ) {
		return '';
	}

	$slug = sanitize_title( $matches[1] );
	if ( ! $slug || ! lagos_fe_get_podcast_episode( $slug ) ) {
		return '';
	}

	return $slug;
}

/**
 * Hero/page data for a JSON podcast episode.
 *
 * @param array<string, mixed> $episode Podcast episode row.
 * @return array<string, mixed>
 */
function lagos_fe_podcast_single_page_data( $episode ) {
	return array(
		'eyebrow'             => 'Podcast',
		'heading'             => $episode['title'] ?? '',
		'accent'              => 'Real Stories.',
		'subheading'          => $episode['excerpt'] ?? '',
		'hero_image_url'      => $episode['image'] ?? '',
		'secondary_cta_label' => 'All Episodes',
		'secondary_cta_href'  => '/podcast',
	);
}

/**
 * Get a single podcast episode by slug.
 *
 * @param string $slug Episode slug.
 * @return array<string, mixed>|null
 */
function lagos_fe_get_podcast_episode( $slug ) {
	$slug = trim( (string) $slug, '/' );
	if ( ! $slug ) {
		return null;
	}

	foreach ( lagos_fe_podcast_episodes() as $episode ) {
		if ( isset( $episode['slug'] ) && $episode['slug'] === $slug ) {
			return $episode;
		}
	}

	return null;
}

/**
 * Podcast episode URL.
 *
 * @param string $slug Episode slug.
 * @return string
 */
function lagos_fe_podcast_episode_url( $slug ) {
	return lagos_fe_url( '/podcast/' . ltrim( $slug, '/' ) );
}

/**
 * Rewrite root-relative links in podcast HTML for the current site URL.
 *
 * @param string $html Episode HTML.
 * @return string
 */
function lagos_fe_podcast_content_html( $html ) {
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

	return wp_kses_post( $html );
}
