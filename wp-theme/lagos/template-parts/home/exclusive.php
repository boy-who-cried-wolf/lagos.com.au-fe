<?php
/**
 * Exclusive services section.
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$lagos_exclusive_delays = array( 100, 200, 300 );
?>
<section id="exclusive" class="home-exclusive">
	<div class="container">
		<div class="home-exclusive__header">
			<div class="home-exclusive__eyebrow">Exclusive</div>
			<h2 class="home-exclusive__title">
				<span class="font-neuliscursive home-exclusive__title-accent">Free Services</span>
				<span class="font-neulis">from Lagos</span>
			</h2>
		</div>

		<div class="home-exclusive__grid">
			<?php foreach ( lagos_fe_exclusive_services() as $index => $service ) : ?>
				<article <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', $lagos_exclusive_delays[ $index ] ?? 100, 'home-exclusive__card' ); ?>>
					<div class="home-exclusive__icon <?php echo esc_attr( $service['icon_bg'] ); ?>">
						<?php lagos_fe_render_exclusive_icon( $service['icon'] ); ?>
					</div>
					<div class="home-exclusive__body">
						<h3><?php echo esc_html( $service['title'] ); ?></h3>
						<?php if ( ! empty( $service['subtitle'] ) ) : ?>
							<span class="home-exclusive__subtitle"><?php echo esc_html( $service['subtitle'] ); ?></span>
						<?php endif; ?>
						<p><?php echo esc_html( $service['description'] ); ?></p>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
