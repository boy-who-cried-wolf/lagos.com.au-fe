<?php
/**
 * Synced page body — matches ContentPage.tsx PageArticleContent section
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

if ( empty( $lagos_page['contentHtml'] ) ) {
	return;
}

$variant = isset( $lagos_page['variant'] ) ? $lagos_page['variant'] : 'default';
?>
<section class="section-page-content">
	<div class="container">
		<div class="section-page-content__inner page-article page-article--<?php echo esc_attr( $variant ); ?>" data-page-content-sections>
				<?php echo lagos_fe_page_content_html( $lagos_page['contentHtml'] ); ?>
			</div>
	</div>
</section>
