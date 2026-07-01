<?php
/**
 * Lenders marquee section.
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$lagos_lenders = array_merge( lagos_fe_lenders(), lagos_fe_lenders() );
?>
<section class="home-lenders">
	<div <?php echo lagos_fe_aos_attrs( 'animate-fade-in', 0, 'container home-lenders__header' ); ?>>
		<p class="home-lenders__title font-neulis">Why Choose Lagos Financial</p>
		<p class="home-lenders__title font-neulis">Access to <span class="home-lenders__accent">60+ lenders</span></p>
	</div>

	<div class="home-lenders__marquee" aria-hidden="true">
		<div class="home-lenders__track">
			<?php foreach ( $lagos_lenders as $lender ) : ?>
				<div class="home-lenders__slide">
					<img
						src="<?php echo esc_url( $lender['src'] ); ?>"
						alt="<?php echo esc_attr( $lender['alt'] ); ?>"
						width="<?php echo esc_attr( (string) $lender['width'] ); ?>"
						height="<?php echo esc_attr( (string) $lender['height'] ); ?>"
						loading="lazy"
					>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
