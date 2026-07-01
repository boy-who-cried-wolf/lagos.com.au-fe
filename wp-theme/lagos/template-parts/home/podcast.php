<?php
/**
 * Podcast section.
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$lagos_podcast = lagos_fe_podcast_content();
?>
<section class="home-podcast">
	<div class="container">
		<div class="home-podcast__header">
			<div class="home-exclusive__eyebrow"><?php echo esc_html( $lagos_podcast['eyebrow'] ); ?></div>
			<h2 class="home-podcast__title font-neuliscursive"><?php echo esc_html( $lagos_podcast['title'] ); ?></h2>
		</div>

		<div <?php echo lagos_fe_aos_attrs( 'animate-on-scroll', 0, 'home-podcast__card' ); ?>>
			<p><strong><?php echo esc_html( $lagos_podcast['description'] ); ?></strong></p>
			<?php foreach ( $lagos_podcast['paragraphs'] as $paragraph ) : ?>
				<p><?php echo esc_html( $paragraph ); ?></p>
			<?php endforeach; ?>
			<a class="home-podcast__btn" href="<?php echo esc_url( lagos_fe_url( '/podcast' ) ); ?>">Episode Show Notes</a>
		</div>
	</div>
</section>
