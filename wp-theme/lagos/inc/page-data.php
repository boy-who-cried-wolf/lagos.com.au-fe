<?php
/**
 * Page content data — mirrors src/data/pages.ts and pageExtras.ts
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default related links when none defined for a page.
 *
 * @return array<int, array{label: string, href: string}>
 */
function lagos_fe_default_related_links() {
	return array(
		array( 'label' => 'Buy Your First Property', 'href' => lagos_fe_url( '/buying-a-property' ) ),
		array( 'label' => 'Refinance Your Home', 'href' => lagos_fe_url( '/refinance-your-home' ) ),
		array( 'label' => 'Book a Consultation', 'href' => lagos_fe_url( '/contact' ) ),
	);
}

/**
 * All content page definitions keyed by slug (no leading slash).
 *
 * @return array<string, array<string, mixed>>
 */
function lagos_fe_pages_data() {
	static $pages = null;

	if ( null !== $pages ) {
		return $pages;
	}

	$pages = array_merge( lagos_fe_pages_from_json(), lagos_fe_specialized_pages_data() );

	return $pages;
}

/**
 * Template-driven pages (contact, FAQ, blog, podcast) — not in synced pages.json.
 *
 * @return array<string, array<string, mixed>>
 */
function lagos_fe_specialized_pages_data() {
	return array(
		'contact' => array(
			'template'            => 'contact',
			'title'               => 'Contact Lagos Financial | Book a Complimentary Assessment',
			'description'         => 'Speak with a Lagos Financial mortgage broker in Bondi or Launceston. Book your complimentary assessment today.',
			'eyebrow'             => 'Contact',
			'heading'             => 'Contact',
			'accent'              => "Let's Talk.",
			'subheading'          => 'contact@lagosfinancial.com.au — Open 8.30am – 5.30pm Monday to Friday. Book a complimentary assessment or get in touch with our Bondi or Launceston team.',
			'cta_label'           => 'Book a Complimentary Assessment',
			'cta_href'            => '#contact-form',
			'secondary_cta_label' => "View FAQ's",
			'secondary_cta_href'  => '/frequently-asked-questions',
			'hero_image'          => 'challenges-img.png',
		),
		'frequently-asked-questions' => array(
			'template'            => 'faq',
			'title'               => 'Frequently Asked Questions - Lagos Financial',
			'description'         => 'Answers to common questions about mortgage broking, buying property, refinancing, investment, commercial finance, and SMSF loans.',
			'eyebrow'             => "FAQ's",
			'heading'             => 'Frequently Asked Questions',
			'accent'              => 'Got Questions?',
			'subheading'          => 'Your Questions Answered, Your Property Journey Simplified',
			'secondary_cta_label' => 'Contact Us',
			'secondary_cta_href'  => '/contact',
			'hero_image'          => 'challenges-img.png',
		),
		'podcast' => array(
			'template'            => 'podcast',
			'title'               => 'Debt to Financial Freedom Podcast | Lagos Financial',
			'description'         => 'Listen to the Debt to Financial Freedom Podcast hosted by Victor Lagos. Honest stories and lessons on the path to financial freedom.',
			'eyebrow'             => 'Podcast',
			'heading'             => 'Debt to Financial Freedom Podcast',
			'accent'              => 'Real Stories.',
			'subheading'          => 'Hosted by Victor Lagos — sharing raw, honest stories and lessons from 17 years in finance to help you take control of your finances and create lasting financial freedom.',
			'secondary_cta_label' => 'Contact Us',
			'secondary_cta_href'  => '/contact',
			'hero_image'          => 'services/service_5.png',
		),
		'blog' => array(
			'template'            => 'blog',
			'title'               => 'Finance Blog | Lagos Financial',
			'description'         => 'Mortgage tips, investment guides, and finance insights from Lagos Financial brokers.',
			'eyebrow'             => 'Blog',
			'heading'             => 'Insights & Guides',
			'accent'              => 'Learn & Grow.',
			'subheading'          => 'Practical finance articles to help you make confident property and lending decisions.',
			'secondary_cta_label' => 'All Services',
			'secondary_cta_href'  => '/finance',
			'hero_image'          => 'services/service_4.png',
		),
	);
}

/**
 * Related links keyed by slug.
 *
 * @return array<string, array<int, array{label: string, href: string}>>
 */
function lagos_fe_related_links_map() {
	return array(
		'buying-a-property' => array(
			array( 'label' => 'Home Loans', 'href' => lagos_fe_url( '/home-loan' ) ),
			array( 'label' => 'Refinance Your Home', 'href' => lagos_fe_url( '/refinance-your-home' ) ),
			array( 'label' => 'Construction Loans', 'href' => lagos_fe_url( '/construction-loan' ) ),
		),
		'refinance-your-home' => array(
			array( 'label' => 'Home Equity Loan', 'href' => lagos_fe_url( '/home-equity-loan' ) ),
			array( 'label' => 'Investment Property', 'href' => lagos_fe_url( '/property-investment' ) ),
			array( 'label' => 'Home Loans', 'href' => lagos_fe_url( '/home-loan' ) ),
		),
		'property-investment' => array(
			array( 'label' => 'Commercial Property', 'href' => lagos_fe_url( '/commercial-property' ) ),
			array( 'label' => 'SMSF Property Investment', 'href' => lagos_fe_url( '/smsf-loans-property-investment' ) ),
			array( 'label' => 'Refinance Your Home', 'href' => lagos_fe_url( '/refinance-your-home' ) ),
		),
		'construction-loan' => array(
			array( 'label' => 'Buy Your First Property', 'href' => lagos_fe_url( '/buying-a-property' ) ),
			array( 'label' => 'Home Loans', 'href' => lagos_fe_url( '/home-loan' ) ),
			array( 'label' => 'Refinance Your Home', 'href' => lagos_fe_url( '/refinance-your-home' ) ),
		),
		'commercial-property' => array(
			array( 'label' => 'SMSF Property Investment', 'href' => lagos_fe_url( '/smsf-loans-property-investment' ) ),
			array( 'label' => 'Investment Property', 'href' => lagos_fe_url( '/property-investment' ) ),
			array( 'label' => 'Business Finance', 'href' => lagos_fe_url( '/finance' ) ),
		),
		'smsf-loans-property-investment' => array(
			array( 'label' => 'Investment Property', 'href' => lagos_fe_url( '/property-investment' ) ),
			array( 'label' => 'Commercial Property', 'href' => lagos_fe_url( '/commercial-property' ) ),
			array( 'label' => 'Home Loans', 'href' => lagos_fe_url( '/home-loan' ) ),
		),
		'bondi' => array(
			array( 'label' => 'Launceston Office', 'href' => lagos_fe_url( '/launceston' ) ),
			array( 'label' => 'All Services', 'href' => lagos_fe_url( '/finance' ) ),
			array( 'label' => 'Contact Us', 'href' => lagos_fe_url( '/contact' ) ),
		),
		'launceston' => array(
			array( 'label' => 'Bondi Office', 'href' => lagos_fe_url( '/bondi' ) ),
			array( 'label' => 'All Services', 'href' => lagos_fe_url( '/finance' ) ),
			array( 'label' => 'Contact Us', 'href' => lagos_fe_url( '/contact' ) ),
		),
		'home-loan' => array(
			array( 'label' => 'Buy Your First Property', 'href' => lagos_fe_url( '/buying-a-property' ) ),
			array( 'label' => 'Refinance Your Home', 'href' => lagos_fe_url( '/refinance-your-home' ) ),
			array( 'label' => 'Investment Property', 'href' => lagos_fe_url( '/property-investment' ) ),
		),
		'car-loan' => array(
			array( 'label' => 'Personal Finance', 'href' => lagos_fe_url( '/finance' ) ),
			array( 'label' => 'Home Loans', 'href' => lagos_fe_url( '/home-loan' ) ),
			array( 'label' => 'Contact Us', 'href' => lagos_fe_url( '/contact' ) ),
		),
		'finance' => array(
			array( 'label' => 'Buy Your First Property', 'href' => lagos_fe_url( '/buying-a-property' ) ),
			array( 'label' => 'Commercial Property', 'href' => lagos_fe_url( '/commercial-property' ) ),
			array( 'label' => 'Investment Property', 'href' => lagos_fe_url( '/property-investment' ) ),
		),
		'about-us' => array(
			array( 'label' => 'Our Services', 'href' => lagos_fe_url( '/finance' ) ),
			array( 'label' => 'Bondi Office', 'href' => lagos_fe_url( '/bondi' ) ),
			array( 'label' => 'Launceston Office', 'href' => lagos_fe_url( '/launceston' ) ),
		),
	);
}

/**
 * Get page data for a slug.
 *
 * @param string $slug Page slug.
 * @return array<string, mixed>|null
 */
function lagos_fe_get_page_data( $slug ) {
	$slug  = trim( $slug, '/' );
	$pages = lagos_fe_pages_data();
	return isset( $pages[ $slug ] ) ? $pages[ $slug ] : null;
}

/**
 * Resolve a page CTA href (path, hash, or absolute URL).
 *
 * @param string $href Href from page data.
 * @return string
 */
function lagos_fe_resolve_href( $href ) {
	if ( empty( $href ) ) {
		return lagos_fe_url( '/contact' );
	}

	if ( str_starts_with( $href, '#' ) ) {
		return get_permalink() . $href;
	}

	if ( str_starts_with( $href, 'http' ) ) {
		return $href;
	}

	return lagos_fe_url( $href );
}

/**
 * Get page data for the current queried page.
 *
 * @return array<string, mixed>|null
 */
function lagos_fe_get_current_page_data() {
	$slug = lagos_fe_current_page_slug();
	if ( ! $slug ) {
		return null;
	}

	return lagos_fe_get_page_data( $slug );
}

/**
 * Hero image URL for a page definition.
 *
 * @param array<string, mixed> $page Page data.
 * @return string
 */
function lagos_fe_hero_image_url( $page ) {
	$relative = isset( $page['hero_image'] ) ? $page['hero_image'] : 'challenges-img.png';
	return lagos_fe_theme_image_url( $relative, 'challenges-img.png' );
}

/**
 * Related links for current page.
 *
 * @param string               $slug Page slug.
 * @param array<string, mixed> $page Page data.
 * @return array<int, array{label: string, href: string}>
 */
function lagos_fe_get_related_links( $slug, $page ) {
	if ( ! empty( $page['is_legal'] ) ) {
		return array();
	}
	$map = lagos_fe_related_links_map();
	return isset( $map[ $slug ] ) ? $map[ $slug ] : lagos_fe_default_related_links();
}
