<?php
/**
 * Header template — matches src/components/layout/Header.tsx
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$lagos_nav       = lagos_fe_main_nav();
$lagos_logo_uri  = get_template_directory_uri() . '/assets/images/header-logo.svg';
$lagos_contact   = lagos_fe_url( '/contact' );
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#23395b">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
	<div class="site-header__shell" data-nav-shell>
		<div class="site-header__nav-row">
			<a class="site-header__logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img src="<?php echo esc_url( $lagos_logo_uri ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" width="209" height="44">
			</a>

			<ul class="site-header__menu" aria-label="<?php esc_attr_e( 'Primary menu', 'lagos-financial' ); ?>">
				<?php foreach ( $lagos_nav as $lagos_item ) : ?>
					<?php if ( 'dropdown' === $lagos_item['type'] ) : ?>
						<li class="site-header__dropdown" data-nav-dropdown>
							<div class="site-header__dropdown-wrap">
								<button type="button" class="site-header__link" data-dropdown-trigger aria-expanded="false" aria-haspopup="true">
									<?php echo esc_html( $lagos_item['label'] ); ?>
									<span class="nav-dropdown-trigger-icon" aria-hidden="true">&#9662;</span>
								</button>
								<div class="nav-dropdown-panel" data-dropdown-panel>
									<ul>
										<?php foreach ( $lagos_item['items'] as $lagos_link ) : ?>
											<li>
												<a href="<?php echo esc_url( $lagos_link['href'] ); ?>">
													<?php echo esc_html( $lagos_link['label'] ); ?>
												</a>
											</li>
										<?php endforeach; ?>
									</ul>
								</div>
							</div>
						</li>
					<?php else : ?>
						<li>
							<a class="site-header__link" href="<?php echo esc_url( $lagos_item['href'] ); ?>">
								<?php echo esc_html( $lagos_item['label'] ); ?>
							</a>
						</li>
					<?php endif; ?>
				<?php endforeach; ?>
			</ul>

			<div class="site-header__actions">
				<a class="site-header__cta" href="<?php echo esc_url( $lagos_contact ); ?>">Speak To Us</a>
				<button type="button" class="site-header__toggle" data-mobile-toggle aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle navigation menu', 'lagos-financial' ); ?>">
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</div>

		<div class="site-header__mobile" data-mobile-panel hidden>
			<ul class="site-header__mobile-menu">
				<?php foreach ( $lagos_nav as $lagos_item ) : ?>
					<?php if ( 'dropdown' === $lagos_item['type'] ) : ?>
						<li data-mobile-group>
							<button type="button" class="site-header__mobile-group-btn" data-mobile-group-trigger aria-expanded="false">
								<?php echo esc_html( $lagos_item['label'] ); ?>
								<span class="nav-dropdown-trigger-icon" aria-hidden="true">&#9662;</span>
							</button>
							<ul class="site-header__mobile-sub" data-mobile-sub hidden>
								<?php foreach ( $lagos_item['items'] as $lagos_link ) : ?>
									<li>
										<a class="site-header__mobile-link" href="<?php echo esc_url( $lagos_link['href'] ); ?>">
											<?php echo esc_html( $lagos_link['label'] ); ?>
										</a>
									</li>
								<?php endforeach; ?>
							</ul>
						</li>
					<?php else : ?>
						<li>
							<a class="site-header__mobile-link" href="<?php echo esc_url( $lagos_item['href'] ); ?>">
								<?php echo esc_html( $lagos_item['label'] ); ?>
							</a>
						</li>
					<?php endif; ?>
				<?php endforeach; ?>
				<li class="site-header__mobile-cta-wrap">
					<a class="site-header__mobile-cta" href="<?php echo esc_url( $lagos_contact ); ?>">Speak To Us</a>
				</li>
			</ul>
		</div>
	</div>
</header>

<main class="site-main" id="content">
