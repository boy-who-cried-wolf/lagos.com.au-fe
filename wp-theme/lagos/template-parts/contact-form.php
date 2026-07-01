<?php
/**
 * Contact form section — matches ContactFormSection.tsx
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$lagos_sent = isset( $_GET['contact'] ) && 'sent' === $_GET['contact'];
?>
<section class="home-form section-contact-form" id="contact-form">
	<div <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', 0, 'home-form__inner' ); ?>>
		<div class="home-form__header">
			<h2 class="home-form__title">
				<span class="font-neuliscursive home-form__title-accent">Ready To Find Out</span>
				<span class="font-neuliscursive home-form__title-primary">What You Can Borrow?</span>
			</h2>
			<p class="home-form__subtitle">Free, no obligation consultation with an experienced mortgage specialist.</p>
		</div>

		<?php if ( $lagos_sent ) : ?>
			<div class="home-form__success motion-page-enter">
				<p class="home-form__success-title font-neulis">Thank you!</p>
				<p>A mortgage expert will contact you shortly.</p>
			</div>
		<?php else : ?>
			<form class="home-form__form motion-page-enter" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" data-contact-form novalidate>
				<input type="hidden" name="action" value="lagos_contact">
				<?php wp_nonce_field( 'lagos_contact', 'lagos_contact_nonce' ); ?>
				<input type="text" name="honeypot" value="" class="home-form__honeypot" tabindex="-1" autocomplete="off">

				<div class="home-form__field">
					<label for="form_name">First Name <span class="home-form__required">*</span></label>
					<input id="form_name" name="full_name" type="text" placeholder="Enter your first name" required data-field="full_name">
					<span class="home-form__error" data-error="full_name"></span>
				</div>

				<div class="home-form__field">
					<label for="form_phone">Phone Number <span class="home-form__required">*</span></label>
					<input id="form_phone" name="contact_number" type="tel" placeholder="Enter your phone number" maxlength="10" inputmode="numeric" required data-field="contact_number">
					<span class="home-form__error" data-error="contact_number"></span>
				</div>

				<div class="home-form__field">
					<label for="form_email">Email Address <span class="home-form__required">*</span></label>
					<input id="form_email" name="email" type="email" placeholder="Enter your email" required data-field="email">
					<span class="home-form__error" data-error="email"></span>
				</div>

				<div class="home-form__field">
					<label for="form_loan">Loan Type <span class="home-form__required">*</span></label>
					<div class="home-form__select-wrap">
						<select id="form_loan" name="loanOption" required data-field="loanOption">
							<option value="" disabled selected>Select loan type</option>
							<?php foreach ( lagos_fe_loan_options() as $option ) : ?>
								<option value="<?php echo esc_attr( $option ); ?>"><?php echo esc_html( $option ); ?></option>
							<?php endforeach; ?>
						</select>
					</div>
					<span class="home-form__error" data-error="loanOption"></span>
				</div>

				<button type="submit" class="home-form__submit">Check My Borrowing Power</button>

				<p class="home-form__note">No obligation. A mortgage expert will contact you shortly.</p>
				<div class="home-form__secure">
					<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8 1L2 3.5V8c0 3.3 2.5 5.8 6 7 3.5-1.2 6-3.7 6-7V3.5L8 1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M5.5 8l1.8 1.8L10.5 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
					<span>Your details are safe and secure</span>
				</div>
			</form>
		<?php endif; ?>
	</div>
</section>
