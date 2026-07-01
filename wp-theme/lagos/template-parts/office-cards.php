<?php
/**
 * Office location cards — matches OfficeCardsSection.tsx
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<section class="section-offices">
	<div class="container">
		<div <?php echo lagos_fe_aos_attrs( 'animate-fade-in', 0, 'section-offices__header' ); ?>>
			<div class="section-offices__eyebrow">Our Offices</div>
			<h2 class="section-offices__title">
				<span class="font-neuliscursive section-offices__title-accent">Serving Our Community</span>
				<span class="font-neulis">Bondi &amp; Launceston</span>
			</h2>
		</div>

		<div class="section-offices__grid">
			<?php foreach ( lagos_fe_offices() as $index => $office ) : ?>
				<div <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', ( $index + 1 ) * 100, 'section-offices__card' ); ?>>
					<h3 class="font-neulis"><?php echo esc_html( $office['name'] ); ?></h3>
					<a class="section-offices__phone" href="<?php echo esc_url( 'tel:' . $office['tel'] ); ?>"><?php echo esc_html( $office['phone'] ); ?></a>
					<p class="section-offices__address"><?php echo esc_html( $office['address'] ); ?></p>
					<a class="section-offices__btn" href="<?php echo esc_url( lagos_fe_url( '/contact' ) ); ?>">Get In Touch</a>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
