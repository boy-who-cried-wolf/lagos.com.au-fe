<?php
/**
 * Page template — falls back to Lagos sections when slug matches page data.
 *
 * @package Lagos_Financial
 */

get_header();

	while ( have_posts() ) :
		the_post();

		$lagos_slug = lagos_fe_resolve_page_slug( get_post_field( 'post_name', get_the_ID() ) );

		if ( lagos_fe_render_page_content( $lagos_slug ) ) {
		continue;
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

get_footer();
