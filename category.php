<?php include'head.php'; ?>
<body class="page--category">
<main> 

<div data-scroll>
    <?php get_header(); ?>
<div class="container">
<?php
$term = get_queried_object();
?>

<div id="categorie--cover" class="row">    
    <?php
        $thumbnail = get_field('thumbnail', $term);
        $thumbnail_url = $thumbnail['sizes']['large'];
        $destination_code = get_field('destination_code', $term);
        $term_url = get_term_link($term);
        $term_name = $term->name;
    ?>
        <h1 class="h1 col-xs-16 col-xs-offset-1"><?php echo the_archive_title(); ?></h1>
</div>



<div class="sous-cat col-xs-40 col-xs-offset-4">
    <div class="list-destinations">    
        <?php 
    $this_category = get_category( $cat );
    $child_categories=get_categories( array( 
        'child_of' => $this_category->cat_ID,
        'post_type' => $_GET['type'],
        'taxonomy' => 'category',
        'hide_empty' => 1));
        
    foreach ($child_categories as $category) {
        $category_link = sprintf('
            <a href="%1$s" alt="%2$s">%3$s<span>(%4$s)</span></a>',
            esc_url(get_category_link($category->term_id)), esc_attr(sprintf(__('View all posts in %s', 'textdomain'), $category->name)),
            esc_html($category->name), esc_html($category->category_count));
            echo sprintf(esc_html__('%s', 'textdomain'), $category_link); }

    ?>
    </div>
</div>

<div class="categorie--articles row">
    <?php 
        if (isset($_GET['type'])){
            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
            $title = get_the_archive_title();
            $args = array('post_type'=> array($_GET['type']),
                          'category_name' => $title,
                          'paged' => $paged );
            $wp_query = new WP_Query($args);
                if ( have_posts() ) :
            
                    while ( have_posts() ) : the_post();
                        get_template_part( 'assets/views/content-grid' );
                    endwhile;
                        //<!-- pagination here -->
                    get_template_part('assets/views/content-pagination');
                    wp_reset_postdata();
                else : ?>
                    <p>
                        <?php _e( 'Sorry' ); ?>
                    </p>
                <?php endif;}
        else{
            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
            $title = get_the_archive_title();
            $args = array('post_type'=> array('articles'),
                          
                          'paged' => $paged );
            $wp_query = new WP_Query($args);       
            
                if ( have_posts() ) :
        
                    while ( have_posts() ) : the_post();
                        get_template_part( 'assets/views/content-grid' );
                    endwhile;
                        //<!-- pagination here -->
                    get_template_part('assets/views/content-pagination');
                    wp_reset_postdata();
                else : ?>
                    <p>
                        <?php _e( 'Sorry, your criteria.' ); ?>
                    </p>
                <?php endif; }?>
                                             
                                                                    
</div>
<?php get_footer(); ?>
<?php include'end.php' ?>