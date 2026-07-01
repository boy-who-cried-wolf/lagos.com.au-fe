<?php
/**
 * Footer template — matches src/components/layout/Footer.tsx
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$lagos_footer_logo = get_template_directory_uri() . '/assets/images/footer-logo.svg';
if ( ! file_exists( get_template_directory() . '/assets/images/footer-logo.svg' ) ) {
	$lagos_footer_logo = get_template_directory_uri() . '/assets/images/services/footer-logo.svg';
}
if ( ! file_exists( get_template_directory() . '/assets/images/footer-logo.svg' ) && ! file_exists( get_template_directory() . '/assets/images/services/footer-logo.svg' ) ) {
	$lagos_footer_logo = get_template_directory_uri() . '/assets/images/header-logo.svg';
}

$lagos_offices = array(
	array(
		'name'    => 'Sydney Office',
		'phone'   => '0468 010 679',
		'tel'     => '0468010679',
		'address' => 'Level 1, 9-13 Bronte Road Bondi Junction 2022',
	),
	array(
		'name'    => 'Launceston Office',
		'phone'   => '0468 010 679',
		'tel'     => '0468010679',
		'address' => '45 Cameron Street, Launceston TAS 7250',
	),
);
?>
</main>

<footer class="site-footer">
	<div class="container">
		<div class="site-footer__columns">
			<?php foreach ( lagos_fe_footer_columns() as $lagos_column ) : ?>
				<div>
					<h3 class="site-footer__heading"><?php echo esc_html( $lagos_column['title'] ); ?></h3>
					<ul class="site-footer__links">
						<?php foreach ( $lagos_column['links'] as $lagos_link ) : ?>
							<li>
								<a href="<?php echo esc_url( $lagos_link['href'] ); ?>">
									<?php echo esc_html( $lagos_link['label'] ); ?>
								</a>
							</li>
						<?php endforeach; ?>
					</ul>
				</div>
			<?php endforeach; ?>
		</div>

		<div class="site-footer__contact-row">
			<div class="site-footer__email-block">
				<span class="site-footer__label">Email Us</span>
				<a class="site-footer__email" href="mailto:customer@lagosfinancial.com.au">customer@lagosfinancial.com.au</a>
			</div>

			<?php foreach ( $lagos_offices as $lagos_office ) : ?>
				<div class="site-footer__office">
					<span class="site-footer__label"><?php echo esc_html( $lagos_office['name'] ); ?></span>
					<p class="site-footer__office-phone">
						<a href="tel:<?php echo esc_attr( $lagos_office['tel'] ); ?>"><?php echo esc_html( $lagos_office['phone'] ); ?></a>
					</p>
					<p class="site-footer__office-address"><?php echo esc_html( $lagos_office['address'] ); ?></p>
				</div>
			<?php endforeach; ?>

			<div class="site-footer__office">
				<p class="site-footer__tagline">Ready to take the next step in your financial journey?</p>
			</div>
		</div>

		<div class="site-footer__logo-wrap">
			<img class="site-footer__logo" src="<?php echo esc_url( $lagos_footer_logo ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" width="1140" height="241" loading="lazy">
		</div>

		<div class="site-footer__legal">
			<p>Lagos Financial Pty Ltd (Australian Credit Licence number 546774)</p>
			<p>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> Lagos Financial. All rights reserved.</p>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
