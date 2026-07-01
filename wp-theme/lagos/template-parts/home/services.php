<?php
/**
 * Services grid section.
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<section id="services" class="home-services">
	<div class="container">
		<div <?php echo lagos_fe_aos_attrs( 'animate-fade-in', 0, 'home-services__header' ); ?>>
			<div class="home-services__eyebrow">Our Services</div>
			<h2 class="home-services__title font-neuliscursive">Finance Solutions for Every Goal</h2>
			<p class="home-services__subtitle">With offices in Launceston and Bondi, Sydney — we&apos;re here to help you reach your goals.</p>
		</div>

		<div class="home-services__grid">
			<?php foreach ( lagos_fe_home_services() as $index => $service ) : ?>
				<a
					<?php echo lagos_fe_aos_attrs( 'animate-fade-up', $index * 100, 'home-services__card' . ( ! empty( $service['wide'] ) ? ' home-services__card--wide' : '' ) ); ?>
					href="<?php echo esc_url( lagos_fe_url( $service['href'] ) ); ?>"
				>
					<img
						src="<?php echo esc_url( lagos_fe_theme_image_url( $service['image'] ) ); ?>"
						alt="<?php echo esc_attr( $service['title'] ); ?>"
						loading="lazy"
					>
					<div class="home-services__card-overlay"></div>
					<div class="home-services__card-body">
						<div class="home-services__card-top">
							<h3 class="home-services__card-title font-neulis"><?php echo esc_html( $service['title'] ); ?></h3>
							<span class="home-services__card-plus" aria-hidden="true">
								<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2V14M2 8H14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
							</span>
						</div>
						<p class="home-services__card-text"><?php echo esc_html( $service['description'] ); ?></p>
					</div>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>
