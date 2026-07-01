<?php
/**
 * Approach section.
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<section id="how-it-works" class="home-approach">
	<div class="container">
		<div class="home-approach__cta-top">
			<a class="content-sections__book-btn" href="<?php echo esc_url( lagos_fe_url( '/contact' ) ); ?>">Book a Complimentary Assessment</a>
		</div>

		<div class="home-approach__grid">
			<div <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 0, 'home-approach__sidebar' ); ?>>
				<div class="content-sections__sidebar-badge">Our Approach</div>
				<h2 class="home-approach__title">
					<span class="font-neuliscursive home-approach__title-accent">Transparency.</span>
					<span class="home-approach__title-row">
						<span class="font-neuliscursive home-approach__title-accent">Results.</span>
						<span class="font-neulis home-approach__title-primary"> Freedom.</span>
					</span>
				</h2>
				<div class="home-approach__actions">
					<a class="content-sections__book-btn" href="<?php echo esc_url( lagos_fe_url( '/contact' ) ); ?>">Let&apos;s Talk</a>
					<a class="btn-outline" href="<?php echo esc_url( lagos_fe_url( '/about-us' ) ); ?>">Learn More</a>
				</div>
			</div>

			<div class="home-approach__steps">
				<?php foreach ( lagos_fe_approach_steps() as $step ) : ?>
					<article <?php echo lagos_fe_aos_attrs( 'animate-slide-right', ( ( $step['number'] - 1 ) % 3 ) * 100 + 100, 'content-sections__card' ); ?>>
						<div class="content-sections__card-number"><?php echo esc_html( (string) $step['number'] ); ?></div>
						<div>
							<h3 class="content-sections__card-title"><?php echo esc_html( $step['title'] ); ?></h3>
							<p class="content-sections__card-text"><?php echo esc_html( $step['description'] ); ?></p>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
