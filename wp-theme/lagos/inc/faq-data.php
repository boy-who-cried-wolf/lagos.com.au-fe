<?php
/**
 * FAQ content — loaded from data/faq.json (synced from src/data/faq.json)
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Full FAQ page data from synced JSON.
 *
 * @return array{heading: string, subheading: string, categories: array<int, array{title: string, items: array<int, array{question: string, answer: string}>}>}
 */
function lagos_fe_faq_page_data() {
	static $data = null;

	if ( null !== $data ) {
		return $data;
	}

	$data = array(
		'heading'    => 'Frequently Asked Questions',
		'subheading' => 'Your Questions Answered, Your Property Journey Simplified',
		'categories' => array(),
	);

	$path = get_template_directory() . '/data/faq.json';
	if ( ! file_exists( $path ) ) {
		return $data;
	}

	$json = file_get_contents( $path );
	$parsed = json_decode( $json, true );

	if ( is_array( $parsed ) ) {
		$data = array_merge( $data, $parsed );
	}

	return $data;
}

/**
 * FAQ categories with accordion items.
 *
 * @return array<int, array{title: string, items: array<int, array{question: string, answer: string}>}>
 */
function lagos_fe_faq_categories() {
	$page = lagos_fe_faq_page_data();
	return isset( $page['categories'] ) && is_array( $page['categories'] ) ? $page['categories'] : array();
}

/**
 * Flat FAQ list (legacy helper).
 *
 * @return array<int, array{question: string, answer: string}>
 */
function lagos_fe_faq_items() {
	$items = array();
	foreach ( lagos_fe_faq_categories() as $category ) {
		if ( empty( $category['items'] ) || ! is_array( $category['items'] ) ) {
			continue;
		}
		foreach ( $category['items'] as $item ) {
			$items[] = $item;
		}
	}
	return $items;
}
