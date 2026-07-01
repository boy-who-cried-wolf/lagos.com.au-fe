<?php
/**
 * Fallback template.
 *
 * @package Lagos_Financial
 */

get_header();

if ( have_posts() ) :
	while ( have_posts() ) :
		the_post();

		if ( is_singular( 'page' ) ) {
			$lagos_slug = get_post_field( 'post_name', get_the_ID() );
			if ( lagos_fe_render_page_content( $lagos_slug ) ) {
				continue;
			}
		}
		?>
		<div class="container page-shell">
			<article class="entry">
				<h1 class="entry__title"><?php the_title(); ?></h1>
				<div class="entry__content"><?php the_content(); ?></div>
			</article>
		</div>
		<?php
	endwhile;
else :
	?>
	<div class="container page-shell">
		<p>No content found.</p>
	</div>
	<?php
endif;

get_footer();
