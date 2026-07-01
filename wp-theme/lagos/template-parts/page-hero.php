<?php
/**
 * Page hero — matches PageHero.tsx
 *
 * @package Lagos_Financial
 *
 * @var array<string, mixed> $lagos_page
 * @var string               $lagos_slug
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

if ( empty( $lagos_page ) && is_page() ) {
	$lagos_slug = get_post_field( 'post_name', get_queried_object_id() );
	$lagos_page = lagos_fe_get_page_data( $lagos_slug );
}

if ( empty( $lagos_page ) ) {
	$lagos_page = get_query_var( 'lagos_page' );
}

if ( empty( $lagos_page ) ) {
	$lagos_blog_slug = lagos_fe_resolve_blog_post_slug();
	$lagos_blog_post = $lagos_blog_slug ? lagos_fe_get_blog_post( $lagos_blog_slug ) : null;
	if ( $lagos_blog_post ) {
		$lagos_page = lagos_fe_blog_single_page_data( $lagos_blog_post );
	}
}

if ( empty( $lagos_page ) ) {
	return;
}

$is_legal           = ! empty( $lagos_page['is_legal'] );
$eyebrow            = $lagos_page['eyebrow'] ?? '';
$heading            = $lagos_page['heading'] ?? get_the_title();
$accent             = $lagos_page['accent'] ?? '';
$subheading         = $lagos_page['subheading'] ?? '';
$cta_label          = $lagos_page['cta_label'] ?? 'Book a Complimentary Assessment';
$cta_href           = lagos_fe_resolve_href( $lagos_page['cta_href'] ?? '/contact' );
$secondary_label    = $lagos_page['secondary_cta_label'] ?? ( $is_legal ? 'Contact Us' : 'All Services' );
$secondary_href     = lagos_fe_resolve_href( $lagos_page['secondary_cta_href'] ?? ( $is_legal ? '/contact' : '/finance' ) );
$hero_image         = ! empty( $lagos_page['hero_image_url'] ) ? $lagos_page['hero_image_url'] : lagos_fe_hero_image_url( $lagos_page );
$hero_fallback      = lagos_fe_theme_image_url( 'challenges-img.png', 'challenges-img.png' );
$cta_external       = str_starts_with( $cta_href, 'http' );
$secondary_external = str_starts_with( $secondary_href, 'http' );
$breadcrumb_current = $eyebrow ? $eyebrow : $heading;
$actions_delay      = $accent ? 0 : 200;
?>
<section class="section-page-hero page-hero page-hero-gradient-bg">
	<div class="container">
		<nav <?php echo lagos_fe_aos_attrs( 'animate-fade-in', 0, 'page-hero__breadcrumb' ); ?> aria-label="Breadcrumb">
			<ol>
				<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
				<li aria-hidden="true">/</li>
				<li class="page-hero__breadcrumb-current"><?php echo esc_html( $breadcrumb_current ); ?></li>
			</ol>
		</nav>

		<div class="page-hero__grid">
			<div class="page-hero__content">
				<?php if ( $eyebrow ) : ?>
					<div <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 0, 'page-hero__eyebrow' ); ?>><?php echo esc_html( $eyebrow ); ?></div>
				<?php endif; ?>

				<h1 <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 100, 'page-hero__title' ); ?>><?php echo esc_html( $heading ); ?></h1>

				<?php if ( $accent ) : ?>
					<p <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 200, 'page-hero__accent font-neuliscursive' ); ?>><?php echo esc_html( $accent ); ?></p>
				<?php endif; ?>

				<?php if ( $subheading ) : ?>
					<p <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 300, 'page-hero__subheading' ); ?>><?php echo esc_html( $subheading ); ?></p>
				<?php endif; ?>

				<div <?php echo lagos_fe_aos_attrs( 'animate-slide-left', $actions_delay, 'page-hero__actions' ); ?>>
					<a class="btn-primary" href="<?php echo esc_url( $cta_href ); ?>"<?php echo $cta_external ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>><?php echo esc_html( $cta_label ); ?></a>
					<a class="btn-outline" href="<?php echo esc_url( $secondary_href ); ?>"<?php echo $secondary_external ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>><?php echo esc_html( $secondary_label ); ?></a>
				</div>

				<div <?php echo lagos_fe_aos_attrs( 'animate-fade-in', 400, 'page-hero__trust' ); ?>>
					<span>60+ Lenders</span>
					<span class="page-hero__trust-divider" aria-hidden="true"></span>
					<span>Bondi &amp; Launceston</span>
				</div>
			</div>

			<div <?php echo lagos_fe_aos_attrs( 'animate-slide-right', 0, 'page-hero__media' ); ?>>
				<div class="page-hero__media-shadow" aria-hidden="true"></div>
				<div class="page-hero__media-frame">
					<img
						src="<?php echo esc_url( $hero_image ); ?>"
						alt="<?php echo esc_attr( $heading ); ?>"
						width="640"
						height="512"
						loading="eager"
						decoding="async"
						data-hero-fallback="<?php echo esc_url( $hero_fallback ); ?>"
					>
				</div>
			</div>
		</div>
	</div>
</section>
