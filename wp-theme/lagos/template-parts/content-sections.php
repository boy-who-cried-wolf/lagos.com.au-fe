<?php
/**
 * Content sections — matches ContentSections.tsx
 *
 * @package Lagos_Financial
 *
 * @var array<string, mixed> $lagos_page
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

if ( empty( $lagos_page ) && is_page() ) {
	$lagos_page = lagos_fe_get_page_data( get_post_field( 'post_name', get_queried_object_id() ) );
}

if ( ! empty( $lagos_page['contentHtml'] ) ) {
	get_template_part( 'template-parts/page', 'content', array( 'lagos_page' => $lagos_page ) );
	return;
}

if ( empty( $lagos_page['sections'] ) ) {
	return;
}

$is_legal      = ! empty( $lagos_page['is_legal'] );
$eyebrow       = $lagos_page['eyebrow'] ?? 'Details';
$sidebar_title = $is_legal ? 'Important Information' : 'How We Help';
$accent        = $lagos_page['accent'] ?? '';
$sections      = $lagos_page['sections'];
?>
<section class="content-sections">
	<div class="container">
		<div class="content-sections__cta-top">
			<a class="content-sections__book-btn" href="<?php echo esc_url( lagos_fe_url( '/contact' ) ); ?>">
				Book a Complimentary Assessment
			</a>
		</div>

		<div class="content-sections__grid">
			<aside <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 0, 'content-sections__sidebar' ); ?>>
				<div class="content-sections__sidebar-badge"><?php echo esc_html( $eyebrow ); ?></div>
				<h2 class="content-sections__sidebar-title">
					<span class="font-neulis"><?php echo esc_html( $sidebar_title ); ?></span>
					<?php if ( $accent ) : ?>
						<span class="content-sections__sidebar-accent font-neuliscursive"><?php echo esc_html( $accent ); ?></span>
					<?php endif; ?>
				</h2>
				<p class="content-sections__sidebar-text">
					Expert guidance from our Bondi and Launceston teams, with access to 60+ lenders across Australia.
				</p>
			</aside>

			<div class="content-sections__cards">
				<?php foreach ( $sections as $index => $section ) : ?>
					<article <?php echo lagos_fe_aos_attrs( 'animate-slide-right', ( $index % 3 ) * 100 + 100, 'content-sections__card' ); ?>>
						<div class="content-sections__card-number"><?php echo esc_html( (string) ( $index + 1 ) ); ?></div>
						<div>
							<h3 class="content-sections__card-title"><?php echo esc_html( $section['title'] ); ?></h3>
							<p class="content-sections__card-text"><?php echo esc_html( $section['content'] ); ?></p>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
