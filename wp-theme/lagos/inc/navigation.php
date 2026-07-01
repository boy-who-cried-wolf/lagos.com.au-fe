<?php
/**
 * Navigation data — mirrors src/data/navigation.ts
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Build a site URL from a path slug.
 *
 * @param string $path Path like /contact or contact.
 */
function lagos_fe_url( $path ) {
	$path = '/' . ltrim( $path, '/' );
	return home_url( trailingslashit( ltrim( $path, '/' ) ) );
}

/**
 * Primary header navigation.
 *
 * @return array<int, array<string, mixed>>
 */
function lagos_fe_main_nav() {
	return array(
		array(
			'type'  => 'dropdown',
			'label' => 'Location',
			'items' => array(
				array( 'label' => 'Bondi', 'href' => lagos_fe_url( '/bondi' ) ),
				array( 'label' => 'Launceston', 'href' => lagos_fe_url( '/launceston' ) ),
			),
		),
		array(
			'type'  => 'dropdown',
			'label' => 'Services',
			'items' => array(
				array( 'label' => 'Buy Your First Property', 'href' => lagos_fe_url( '/buying-a-property' ) ),
				array( 'label' => 'Refinance Your Home', 'href' => lagos_fe_url( '/refinance-your-home' ) ),
				array( 'label' => 'Investment Property', 'href' => lagos_fe_url( '/property-investment' ) ),
				array( 'label' => 'Construction Loans', 'href' => lagos_fe_url( '/construction-loan' ) ),
				array( 'label' => 'Commercial Property', 'href' => lagos_fe_url( '/commercial-property' ) ),
				array( 'label' => 'SMSF Property Investment', 'href' => lagos_fe_url( '/smsf-loans-property-investment' ) ),
			),
		),
		array( 'type' => 'link', 'label' => 'Blog', 'href' => lagos_fe_url( '/blog' ) ),
		array( 'type' => 'link', 'label' => 'Podcast', 'href' => lagos_fe_url( '/podcast' ) ),
		array( 'type' => 'link', 'label' => "FAQ's", 'href' => lagos_fe_url( '/frequently-asked-questions' ) ),
		array( 'type' => 'link', 'label' => 'About', 'href' => lagos_fe_url( '/about-us' ) ),
	);
}

/**
 * Footer link columns — mirrors footerColumns in navigation.ts
 *
 * @return array<int, array<string, mixed>>
 */
function lagos_fe_footer_columns() {
	return array(
		array(
			'title' => 'Services',
			'links' => array(
				array( 'label' => 'Buy a Property', 'href' => lagos_fe_url( '/buying-a-property' ) ),
				array( 'label' => 'Refinance Your Home', 'href' => lagos_fe_url( '/refinance-your-home' ) ),
				array( 'label' => 'Investment Property', 'href' => lagos_fe_url( '/property-investment' ) ),
				array( 'label' => 'Construction Loan', 'href' => lagos_fe_url( '/construction-loan' ) ),
				array( 'label' => 'Commercial Property', 'href' => lagos_fe_url( '/commercial-property' ) ),
				array( 'label' => 'SMSF Property Loans', 'href' => lagos_fe_url( '/smsf-loans-property-investment' ) ),
			),
		),
		array(
			'title' => 'About',
			'links' => array(
				array( 'label' => 'Contact Us', 'href' => lagos_fe_url( '/contact' ) ),
				array( 'label' => 'Call Us', 'href' => 'tel:0468010679' ),
				array( 'label' => 'Ecosystem', 'href' => lagos_fe_url( '/partners' ) ),
			),
		),
		array(
			'title' => 'Quick Links',
			'links' => array(
				array( 'label' => 'All Services', 'href' => lagos_fe_url( '/finance' ) ),
				array( 'label' => 'Home Loans', 'href' => lagos_fe_url( '/home-loan' ) ),
				array( 'label' => 'Car Loans', 'href' => lagos_fe_url( '/car-loan' ) ),
			),
		),
		array(
			'title' => 'Legal',
			'links' => array(
				array( 'label' => 'Privacy Policy', 'href' => lagos_fe_url( '/privacy-policy' ) ),
				array( 'label' => 'Terms of Use', 'href' => lagos_fe_url( '/terms-of-use' ) ),
			),
		),
	);
}
