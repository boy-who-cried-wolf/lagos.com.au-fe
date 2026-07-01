<?php
/**
 * Testimonials carousel — matches TestimonialsSection.tsx (Swiper)
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$lagos_testimonials = array_merge( lagos_fe_testimonials(), lagos_fe_testimonials() );
?>
<section id="testimonials" class="home-testimonials">
	<div <?php echo lagos_fe_aos_attrs( 'animate-fade-in', 0, 'home-testimonials__header' ); ?>>
		<div class="home-testimonials__eyebrow">Our Client&apos;s</div>
		<h2 class="home-testimonials__title font-neulis">What Our Clients Say</h2>
	</div>

	<div class="reviews-swiper-wrap">
		<div class="reviews-swiper swiper">
			<div class="swiper-wrapper">
				<?php foreach ( $lagos_testimonials as $testimonial ) : ?>
					<div class="swiper-slide">
						<div class="reviews-card">
							<div class="reviews-card__photo">
								<img
									src="<?php echo esc_url( lagos_fe_theme_image_url( $testimonial['image'] ) ); ?>"
									alt="<?php echo esc_attr( $testimonial['author'] ); ?>"
									loading="lazy"
								>
							</div>
							<div class="reviews-card__content">
								<div class="reviews-card__quote-icon" aria-hidden="true">
									<?php lagos_fe_render_quote_icon(); ?>
								</div>
								<p class="reviews-card__quote">&ldquo;<?php echo esc_html( $testimonial['quote'] ); ?>&rdquo;</p>
								<p class="reviews-card__author">&mdash; <?php echo esc_html( $testimonial['author'] ); ?></p>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
		<div class="reviews-pagination" aria-label="Testimonial slides"></div>
	</div>
</section>
