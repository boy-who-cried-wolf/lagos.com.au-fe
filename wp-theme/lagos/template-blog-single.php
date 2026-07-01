<?php
/**
 * Single blog post — matches BlogPostPage.tsx
 *
 * @package Lagos_Financial
 */

get_header();

$lagos_blog_slug = lagos_fe_resolve_blog_post_slug();
$lagos_blog_post = lagos_fe_get_blog_post( $lagos_blog_slug );

if ( ! $lagos_blog_post ) {
	?>
	<div class="container page-shell">
		<div class="blog-not-found">
			<h1 class="font-neulis">Article not found</h1>
			<p><a class="blog-not-found__link" href="<?php echo esc_url( lagos_fe_url( '/blog' ) ); ?>">Back to Blog</a></p>
		</div>
	</div>
	<?php
	get_template_part( 'template-parts/cta', 'section' );
	get_footer();
	return;
}

$lagos_page = lagos_fe_blog_single_page_data( $lagos_blog_post );

$lagos_part_args = array(
	'lagos_page'      => $lagos_page,
	'lagos_blog_post' => $lagos_blog_post,
);

lagos_fe_load_template_part( 'template-parts/page', 'hero', $lagos_part_args );
lagos_fe_load_template_part( 'template-parts/blog', 'article', $lagos_part_args );
lagos_fe_load_template_part( 'template-parts/blog', 'related', $lagos_part_args );
lagos_fe_load_template_part( 'template-parts/cta', 'section', $lagos_part_args );

get_footer();
