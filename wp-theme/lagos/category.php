<?php
/**
 * Category archives — route Lagos landing slugs to theme templates.
 *
 * @package Lagos_Financial
 */

if ( is_category( 'blog' ) ) {
	$blog_template = lagos_fe_get_blog_listing_template();
	if ( $blog_template ) {
		require $blog_template;
		return;
	}
}

if ( is_category( 'podcast' ) ) {
	$podcast_template = lagos_fe_get_podcast_listing_template();
	if ( $podcast_template ) {
		require $podcast_template;
		return;
	}
}

get_header();
?>
<div class="container page-shell">
	<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : ?>
			<?php the_post(); ?>
			<article class="entry">
				<h1 class="entry__title"><?php the_title(); ?></h1>
				<div class="entry__content"><?php the_content(); ?></div>
			</article>
		<?php endwhile; ?>
	<?php else : ?>
		<p>No posts found.</p>
	<?php endif; ?>
</div>
<?php
get_footer();
