<?php
/*
Template Name: Guides
*/
?>
<?php include'head.php';?>
<body class="archive">
<?php get_header(); ?>

<div class="cover-archive cover-archive--carnets col-xs-48"><h5>Carnets de voyage</h5></div>
    <div class="sous-cat sous-cat__carnets col-xs-40 col-xs-offset-4">
        <div class="list-sous-cat">
            <?php
                $post_type = 'carnets';
                $taxonomy = 'category';
                $args = array(
                    'taxonomy' => $taxonomy,
                    'post_type' => $post_type
                );
                $categories = get_categories($args);
                foreach( $categories as $category ) {
                    $category_link = sprintf( 
                        '<a href="%1$s?type=carnets" alt="%2$s">%3$s<span>(%4$s)</span></a>',
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

<div class="grid scroll-reveal col-xs-48 col-md-43 col-md-push-2">
    <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $args = array('post_type' => array('carnets'), 'posts_per_page' => 9, 'paged' => $paged );
        $wp_query = new WP_Query($args);
        while ( have_posts() ) : the_post();
            get_template_part('assets/views/content-grid');
        endwhile;
        get_template_part('assets/views/content-pagination');
        ?>    
</div>

<?php get_footer(); ?>
<?php include'end.php' ?>