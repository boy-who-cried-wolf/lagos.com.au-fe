<?php
/**
 * CTA section — matches CtaSection.tsx
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$cta_border = get_template_directory_uri() . '/assets/images/footer-border-img.png';
$has_border = file_exists( get_template_directory() . '/assets/images/footer-border-img.png' );
?>
<section class="section-cta">
	<div <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', 0, 'container section-cta__inner' ); ?>>
		<div class="section-cta__badge">Ready to take the next step?</div>
		<h2 class="section-cta__title font-neulis">Book a Complimentary Assessment</h2>
		<div class="section-cta__actions">
			<a class="section-cta__btn section-cta__btn--dark" href="<?php echo esc_url( lagos_fe_url( '/contact' ) ); ?>">Let&apos;s Talk</a>
			<a class="section-cta__btn section-cta__btn--light" href="<?php echo esc_url( lagos_fe_url( '/about-us' ) ); ?>">Learn More</a>
		</div>
	</div>
	<?php if ( $has_border ) : ?>
		<div class="section-cta__border">
			<img src="<?php echo esc_url( $cta_border ); ?>" alt="" loading="lazy" width="2185" height="300">
		</div>
	<?php endif; ?>
</section>
