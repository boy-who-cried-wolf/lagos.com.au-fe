<?php
/**
 * FAQ accordion section — matches FaqPage.tsx
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$lagos_faq_categories = lagos_fe_faq_categories();
?>
<section class="section-faq section-faq--categories">
	<div class="container">
		<div <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', 0, 'section-faq__intro' ); ?>>
			<p class="section-faq__intro-text">
				Explore our FAQs to find valuable insights, or speak directly with a mortgage expert for personalised advice.
			</p>
			<a class="section-faq__intro-btn" href="<?php echo esc_url( lagos_fe_url( '/contact' ) ); ?>">
				Book Your Complimentary Assessment
			</a>
		</div>

		<div class="section-faq__categories">
			<?php foreach ( $lagos_faq_categories as $category_index => $category ) : ?>
				<div <?php echo lagos_fe_aos_attrs( 'animate-fade-up', $category_index * 60, 'section-faq__category' ); ?>>
					<div class="section-faq__category-badge"><?php echo esc_html( $category['title'] ); ?></div>

					<div class="section-faq__category-list" data-faq-accordion>
						<?php foreach ( $category['items'] as $item_index => $item ) : ?>
							<?php
							$item_id  = $category_index . '-' . $item_index;
							$is_first = 0 === $category_index && 0 === $item_index;
							?>
							<div <?php echo lagos_fe_aos_attrs( 'animate-fade-up', ( $item_index % 4 ) * 80, 'accordion-item' . ( $is_first ? ' is-open' : '' ) ); ?> data-accordion-item>
								<button
									type="button"
									class="accordion-trigger"
									id="faq-<?php echo esc_attr( $item_id ); ?>-trigger"
									aria-expanded="<?php echo $is_first ? 'true' : 'false'; ?>"
									aria-controls="faq-<?php echo esc_attr( $item_id ); ?>-panel"
									data-accordion-trigger
								>
									<span class="accordion-trigger__title font-neulis"><?php echo esc_html( $item['question'] ); ?></span>
									<span class="accordion-icon" aria-hidden="true">▾</span>
								</button>
								<div
									class="accordion-panel"
									id="faq-<?php echo esc_attr( $item_id ); ?>-panel"
									role="region"
									aria-labelledby="faq-<?php echo esc_attr( $item_id ); ?>-trigger"
									<?php echo $is_first ? '' : 'hidden'; ?>
									data-accordion-panel
								>
									<p><?php echo esc_html( $item['answer'] ); ?></p>
								</div>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section-faq-cta">
	<div class="container">
		<div <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', 0, 'section-faq-cta__card' ); ?>>
			<p class="section-faq-cta__title font-neulis">Still have questions?</p>
			<p class="section-faq-cta__text">Book a complimentary assessment and speak with a mortgage specialist today.</p>
			<a class="section-faq-cta__btn" href="<?php echo esc_url( lagos_fe_url( '/contact' ) ); ?>">Contact Us</a>
		</div>
	</div>
</section>
