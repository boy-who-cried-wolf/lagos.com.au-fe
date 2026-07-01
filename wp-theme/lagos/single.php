<?php
/**
 * Single post — use Lagos JSON blog template when slug matches.
 *
 * @package Lagos_Financial
 */

$lagos_blog_slug = lagos_fe_resolve_blog_post_slug();
if ( $lagos_blog_slug ) {
	set_query_var( 'lagos_blog_slug', $lagos_blog_slug );
	$single_template = lagos_fe_get_blog_single_template();
	if ( $single_template ) {
		require $single_template;
		return;
	}
}

get_header();

while ( have_posts() ) :
	the_post();
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
