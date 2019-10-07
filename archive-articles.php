<?php
/*
Template Name: Guides
*/
?>
<?php include'head.php'; ?>
<body class="page--category">
<main>
<div data-scroll>
<?php get_header(); ?>

<div class="row container">
    <div class="col-xs-12 col-xs-offset-2"><span class="h1">Articles</span></div>

    <div class="col-xs-20 col-xs-offset-2">
        <div class="page--category__tags">
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
<div class="row container">
    <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $args = array('post_type' => array('articles'), 'posts_per_page' => 9, 'paged' => $paged );
        $wp_query = new WP_Query($args);
        while ( have_posts() ) : the_post();
            get_template_part('assets/views/content-grid');
        endwhile;
        //get_template_part('assets/views/content-pagination');
        ?>    
</div>

<?php get_footer(); ?>
<?php include'end.php'; ?>  