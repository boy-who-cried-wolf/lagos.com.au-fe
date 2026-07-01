<?php
/**
 * Related links — matches RelatedLinksSection.tsx
 *
 * @package Lagos_Financial
 *
 * @var array<int, array{label: string, href: string}> $lagos_related_links
 */

if ( ! defined( 'ABSPATH' ) || empty( $lagos_related_links ) ) {
	return;
}

$title = $lagos_related_title ?? 'Explore Related Services';
?>
<section class="related-links">
	<div class="container">
		<div class="related-links__card">
			<div <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', 0, 'related-links__header' ); ?>>
				<div class="related-links__badge">Quick Links</div>
				<h2 class="related-links__title font-neulis"><?php echo esc_html( $title ); ?></h2>
			</div>
			<div class="related-links__buttons">
				<?php foreach ( $lagos_related_links as $index => $link ) : ?>
					<a <?php echo lagos_fe_aos_attrs( 'animate-fade-up', $index * 80, 'related-links__btn' ); ?> href="<?php echo esc_url( $link['href'] ); ?>">
						<?php echo esc_html( $link['label'] ); ?>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
