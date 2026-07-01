<?php
/**
 * Homepage content — mirrors src/data/content.ts
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme image URL with fallback when file is missing.
 *
 * @param string $relative Path under assets/images/.
 * @param string $fallback Fallback filename.
 * @return string
 */
function lagos_fe_theme_image_url( $relative, $fallback = 'header-logo.svg' ) {
	$relative = ltrim( $relative, '/' );
	$path     = get_template_directory() . '/assets/images/' . $relative;
	if ( ! file_exists( $path ) ) {
		$relative = ltrim( $fallback, '/' );
	}
	return get_template_directory_uri() . '/assets/images/' . $relative;
}

/**
 * Hero quick-action cards.
 *
 * @return array<int, array<string, string>>
 */
function lagos_fe_hero_cards() {
	return array(
		array( 'label' => 'Buy a home', 'prefix' => 'I need to', 'action' => 'hailo' ),
		array( 'label' => 'Pre-approval', 'prefix' => 'I need', 'action' => 'hailo' ),
		array( 'label' => 'Refinance', 'prefix' => 'I need to', 'action' => 'hailo' ),
		array( 'label' => 'Calculate Equity', 'prefix' => 'I need to', 'action' => 'equity' ),
	);
}

/**
 * Lender logos for marquee.
 *
 * @return array<int, array<string, int|string>>
 */
function lagos_fe_lenders() {
	$items = array(
		array( 'file' => 'partners/img_1.png', 'alt' => 'Commonwealth Bank', 'width' => 193, 'height' => 37 ),
		array( 'file' => 'partners/img_2.png', 'alt' => 'Westpac', 'width' => 132, 'height' => 42 ),
		array( 'file' => 'partners/img_3.png', 'alt' => 'ANZ', 'width' => 111, 'height' => 42 ),
		array( 'file' => 'partners/img_4.png', 'alt' => 'NAB', 'width' => 219, 'height' => 66 ),
		array( 'file' => 'partners/img_5.png', 'alt' => 'Macquarie', 'width' => 128, 'height' => 72 ),
		array( 'file' => 'partners/img_6.png', 'alt' => 'ING', 'width' => 147, 'height' => 88 ),
		array( 'file' => 'partners/img_7.png', 'alt' => 'Suncorp', 'width' => 255, 'height' => 48 ),
	);

	foreach ( $items as $i => $item ) {
		$items[ $i ]['src'] = lagos_fe_theme_image_url( $item['file'] );
	}

	return $items;
}

/**
 * Office locations — mirrors src/data/content.ts offices
 *
 * @return array<int, array<string, string>>
 */
function lagos_fe_offices() {
	return array(
		array(
			'name'    => 'Sydney Office',
			'phone'   => '0468 010 679',
			'tel'     => '0468010679',
			'address' => 'Level 1, 9-13 Bronte Road Bondi Junction 2022',
		),
		array(
			'name'    => 'Launceston Office',
			'phone'   => '0468 010 679',
			'tel'     => '0468010679',
			'address' => '45 Cameron Street, Launceston TAS 7250',
		),
	);
}

/**
 * Challenge section pain points.
 *
 * @return array<int, array<string, string>>
 */
function lagos_fe_pain_points() {
	return array(
		array(
			'strong' => '',
			'text'   => 'Invest in properties that will give you a positive cash flow.',
		),
		array(
			'strong' => '',
			'text'   => 'Feel confident knowing that you have a team of experts with you all the way.',
		),
		array(
			'strong' => '',
			'text'   => 'Set your family up for a brighter future by equipping yourself with the financial education you were never given.',
		),
	);
}

/**
 * Floating badges on challenges image.
 *
 * @return array<int, array<string, string>>
 */
function lagos_fe_challenge_badges() {
	return array(
		array( 'text' => 'Transparency', 'class' => 'challenges__badge challenges__badge--1' ),
		array( 'text' => 'Results', 'class' => 'challenges__badge challenges__badge--2' ),
		array( 'text' => 'Freedom', 'class' => 'challenges__badge challenges__badge--3' ),
	);
}

/**
 * Service cards on homepage.
 *
 * @return array<int, array<string, mixed>>
 */
function lagos_fe_home_services() {
	return array(
		array(
			'title'       => 'Buy Your First Property',
			'description' => 'First home buyer guidance, pre-approval support, and access to grants and exemptions.',
			'image'       => 'services/service_1.png',
			'wide'        => false,
			'href'        => '/buying-a-property',
		),
		array(
			'title'       => 'Refinance Your Home',
			'description' => 'Review your current mortgage, reduce repayments, and unlock equity with the right lender.',
			'image'       => 'services/service_2.png',
			'wide'        => false,
			'href'        => '/refinance-your-home',
		),
		array(
			'title'       => 'Investment Property',
			'description' => 'Residential investment loans structured for cash flow, growth, and long-term portfolio success.',
			'image'       => 'services/service_3.png',
			'wide'        => false,
			'href'        => '/property-investment',
		),
		array(
			'title'       => 'Commercial Property',
			'description' => 'Full doc, lease doc, and development finance for commercial investors and owner occupiers.',
			'image'       => 'services/service_4.png',
			'wide'        => true,
			'href'        => '/commercial-property',
		),
		array(
			'title'       => 'SMSF Property Investment',
			'description' => 'SMSF property loans for investors and owner occupiers, structured to meet compliance requirements.',
			'image'       => 'services/service_5.png',
			'wide'        => true,
			'href'        => '/smsf-loans-property-investment',
		),
	);
}

/**
 * Approach steps.
 *
 * @return array<int, array<string, mixed>>
 */
function lagos_fe_approach_steps() {
	return array(
		array(
			'number'      => 1,
			'title'       => 'Transparency',
			'description' => 'Clear advice, honest conversations, and no surprises — so you always understand your options and next steps.',
		),
		array(
			'number'      => 2,
			'title'       => 'Results',
			'description' => 'Outcome-focused loan structures designed to move you closer to your property and financial goals.',
		),
		array(
			'number'      => 3,
			'title'       => 'Freedom',
			'description' => 'Build confidence and long-term wealth with financial education and specialist support at every stage.',
		),
	);
}

/**
 * Exclusive free services cards.
 *
 * @return array<int, array<string, string>>
 */
function lagos_fe_exclusive_services() {
	return array(
		array(
			'title'       => 'Complimentary Assessment',
			'subtitle'    => 'No Charge',
			'description' => 'Book a complimentary assessment and understand your borrowing position before you begin.',
			'icon'        => 'calculator',
			'icon_bg'     => 'home-exclusive__icon--pink',
		),
		array(
			'title'       => 'Expert Mortgage Support',
			'subtitle'    => '',
			'description' => 'Work with specialists who truly care and guide you from first conversation through to settlement.',
			'icon'        => 'chat',
			'icon_bg'     => 'home-exclusive__icon--accent',
		),
		array(
			'title'       => 'Financial Education',
			'subtitle'    => '',
			'description' => 'Equip yourself with the practical lending knowledge you need to make confident decisions.',
			'icon'        => 'document',
			'icon_bg'     => 'home-exclusive__icon--slate',
		),
	);
}

/**
 * Loan type pills.
 *
 * @return array<int, array<string, string>>
 */
function lagos_fe_loan_pills() {
	return array(
		array( 'label' => 'Refinancing', 'bg' => '#3758D3', 'text' => '#ffffff' ),
		array( 'label' => 'First Home Buyer', 'bg' => '#70A2E1', 'text' => '#ffffff' ),
		array( 'label' => 'Construction Loans', 'bg' => '#FFD37D', 'text' => '#262121' ),
		array( 'label' => 'SMSF Lending', 'bg' => '#76C6B3', 'text' => '#ffffff' ),
		array( 'label' => 'Commercial Property', 'bg' => '#3861F9', 'text' => '#ffffff' ),
		array( 'label' => 'Investment Property', 'bg' => '#23395B', 'text' => '#ffffff' ),
		array( 'label' => 'Car Loans', 'bg' => '#FFA37C', 'text' => '#ffffff' ),
		array( 'label' => 'Business Finance', 'bg' => '#FFBAB9', 'text' => '#ffffff' ),
	);
}

/**
 * Client testimonials.
 *
 * @return array<int, array<string, string>>
 */
function lagos_fe_testimonials() {
	return array(
		array(
			'quote'  => 'Highly recommend Victor and the team at Lagos Financial. Victor was professional, clear, and incredibly supportive throughout our home purchase. Communication was excellent and the whole process was smooth.',
			'author' => 'Jake Spencer',
			'image'  => 'reviews/img_1.png',
		),
		array(
			'quote'  => "We've used Lagos Financial twice now, and both times the experience has been excellent. Victor and Isoa made securing a loan for our block of land easy and stress-free with clear, practical advice.",
			'author' => 'Kellie Gardner',
			'image'  => 'reviews/img_2.png',
		),
		array(
			'quote'  => 'Victor was incredibly thorough and provided clear explanations about loan structures. The video walkthrough was fantastic and helped us understand exactly how everything worked as first-time investment buyers.',
			'author' => 'Vicky Sun',
			'image'  => 'reviews/img_3.png',
		),
		array(
			'quote'  => 'Victor and Lagos Financial have worked with us for a number of years. We have gained investment properties and made significant savings on our own home. Highly recommended.',
			'author' => 'Pete L',
			'image'  => 'reviews/img_1.png',
		),
	);
}

/**
 * Contact form loan options.
 *
 * @return array<int, string>
 */
function lagos_fe_loan_options() {
	return array(
		'Refinancing',
		'First Home Buyer',
		'Self-Employed',
		'Upgrading Home',
		'SMSF Lending',
		'Commercial Property',
		'Investment Property',
		'Construction Loans',
	);
}
