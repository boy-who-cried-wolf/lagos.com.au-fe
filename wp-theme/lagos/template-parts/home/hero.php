<?php
/**
 * Homepage hero section.
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$lagos_hero_cards = lagos_fe_hero_cards();
$lagos_border     = lagos_fe_theme_image_url( 'header-border-img.png', '' );
$has_border       = file_exists( get_template_directory() . '/assets/images/header-border-img.png' );
?>
<section id="about-us" class="home-hero page-hero-gradient-bg">
	<div class="container">
		<div class="home-hero__grid">
			<div class="home-hero__content">
				<div <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 0, 'home-hero__eyebrow' ); ?>>Why Choose Lagos Financial — 60+ Lenders</div>
				<h1 <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 100, 'home-hero__title font-neulis' ); ?>>Your Mortgage Broker for Financial Freedom</h1>
				<p <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 200, 'home-hero__accent font-neuliscursive' ); ?>>Let&apos;s Find It.</p>
				<p <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 300, 'home-hero__text' ); ?>>
					With financial services offices now available in both Launceston and Bondi, Sydney, we&apos;re here to
					help you reach your goals. Work with specialists who truly care.
				</p>
				<div <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 0, 'home-hero__actions' ); ?>>
					<a class="btn-primary" href="<?php echo esc_url( lagos_fe_url( '/contact' ) ); ?>">Book a Complimentary Assessment</a>
					<a class="btn-outline" href="<?php echo esc_url( lagos_fe_url( '/about-us' ) ); ?>">Learn More</a>
				</div>
			</div>

			<div <?php echo lagos_fe_aos_attrs( 'animate-slide-right', 0, 'home-hero__cards' ); ?>>
				<?php foreach ( $lagos_hero_cards as $index => $card ) : ?>
					<button
						type="button"
						class="home-hero__card"
						data-hero-card
						data-action="<?php echo esc_attr( $card['action'] ); ?>"
					>
						<div class="home-hero__card-icon" aria-hidden="true">
							<?php lagos_fe_render_hero_icon( $index ); ?>
						</div>
						<span class="home-hero__card-prefix font-neulis"><?php echo esc_html( $card['prefix'] ); ?></span>
						<span class="home-hero__card-label font-neulis"><?php echo esc_html( $card['label'] ); ?></span>
					</button>
				<?php endforeach; ?>
			</div>
		</div>
	</div>

	<?php if ( $has_border ) : ?>
		<div class="home-hero__border">
			<img src="<?php echo esc_url( $lagos_border ); ?>" alt="Happy homeowners" loading="lazy" width="3840" height="430">
		</div>
	<?php endif; ?>
</section>
