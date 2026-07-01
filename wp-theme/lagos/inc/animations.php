<?php
/**
 * Scroll animation helpers — mirrors AnimateOnScroll.tsx
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Build class/style attributes for scroll-triggered animations.
 *
 * @param string $animation Animation class (e.g. animate-slide-left).
 * @param int    $delay     Delay in ms. Use 100, 200, or 300 for preset classes.
 * @param string $class     Additional CSS classes.
 * @return string HTML attribute string.
 */
function lagos_fe_aos_attrs( $animation = 'animate-on-scroll', $delay = 0, $class = '' ) {
	$classes = array_filter( array( $animation, $class ) );
	$style   = '';

	if ( in_array( (int) $delay, array( 100, 200, 300 ), true ) ) {
		$classes[] = 'animate-delay-' . (int) $delay;
	} elseif ( $delay ) {
		$style = '--aos-delay: ' . (int) $delay . 'ms';
	}

	$attrs = 'class="' . esc_attr( implode( ' ', $classes ) ) . '"';

	if ( $style ) {
		$attrs .= ' style="' . esc_attr( $style ) . '"';
	}

	return $attrs;
}
