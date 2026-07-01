<?php
/**
 * Loan types pills section.
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<section class="home-loantypes">
	<div class="container">
		<div class="home-loantypes__card">
			<div <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', 0, 'home-loantypes__header' ); ?>>
				<div class="home-loantypes__badge">Loan Types We Specialise In</div>
				<h2 class="home-loantypes__title font-neulis">
					Expert Mortgage Solutions<br class="home-loantypes__break"> for Every Property Goal
				</h2>
			</div>

			<div <?php echo lagos_fe_aos_attrs( 'animate-fade-up', 200, 'home-loantypes__pills' ); ?>>
				<?php foreach ( lagos_fe_loan_pills() as $pill ) : ?>
					<span
						class="home-loantypes__pill"
						style="background-color: <?php echo esc_attr( $pill['bg'] ); ?>; color: <?php echo esc_attr( $pill['text'] ); ?>;"
					>
						<?php echo esc_html( $pill['label'] ); ?>
					</span>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
