<?php
/**
 * Front page template.
 *
 * @package Lagos_Financial
 */

get_header();

get_template_part( 'template-parts/home/hero' );
get_template_part( 'template-parts/home/lenders' );
get_template_part( 'template-parts/home/challenges' );
get_template_part( 'template-parts/home/services' );
get_template_part( 'template-parts/home/approach' );
get_template_part( 'template-parts/home/exclusive' );
get_template_part( 'template-parts/home/loan-types' );
get_template_part( 'template-parts/home/podcast' );
get_template_part( 'template-parts/home/testimonials' );
get_template_part( 'template-parts/contact', 'form' );
get_template_part( 'template-parts/cta', 'section' );

get_footer();
