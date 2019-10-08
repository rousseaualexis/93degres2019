<?php
/*
Template Name: Guides
*/
?>
<?php include'head.php'; ?>
<body class="page--archive">
<main>
<?php get_header(); ?>
<div data-scroll>
<div class="container">
<div class="row content page--archive__cover">
    <div class="col-xs-20 col-xs-offset-2">
        <span class="h1">Articles</span>
        <div class="page--archive__all-destinations">
            <a href="">Toutes les destinations </a>
        </div>
    </div>

    <div class="col-xs-20 col-xs-offset-2">
        <div class="page--archive__tags">
            <?php
                $post_type = 'articles';
                $taxonomy = 'post_tag';
                $args = array(
                    'taxonomy' => $taxonomy,
                    'post_type' => $post_type
                );
                $categories = get_categories($args);
                foreach( $categories as $category ) {
                    $category_link = sprintf( 
                        '<a href="%1$s?type=articles" alt="%2$s">%3$s<span>(%4$s)</span></a>',
                        esc_url( get_category_link( $category->term_id ) ),
                        esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ),
                        esc_html( $category->name ),
                        esc_html( $category->category_count )
                    );
                    echo sprintf( esc_html__( '%s', 'textdomain' ), $category_link );
                } 
            ?>   
        </div>
    </div>
</div>
<div class="row content">
    <div class="col-xs-24 col-xs-push-1">
            <div class="row">
    <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $args = array('post_type' => array('articles'), 'posts_per_page' => 9, 'paged' => $paged );
        $wp_query = new WP_Query($args);
        $i = 1;
        while ( have_posts() ) : the_post();
            get_template_part('assets/views/content-grid');

        if ( $i % 3 === 0 ) { echo '</div><div class="row">'; }
        $i++; endwhile; wp_reset_query();
        //get_template_part('assets/views/content-pagination');
        ?>  
    </div>  
</div>
</div>
<?php get_footer(); ?>
<?php include'end.php'; ?>  