<?php include'head.php'; ?>
<body class="destinations">
<?php
get_header(); 
$term = get_queried_object();
?>
<div id="cover-categorie" class="overflow col-xs-48">
    <div id="cover-container" class="col-xs-48 col-md-48 col-md-offset-0">    
        <?php
            $thumbnail = get_field('thumbnail', $term);
            $thumbnail_url = $thumbnail['sizes']['large'];
            $destination_code = get_field('destination_code', $term);
            $term_url = get_term_link($term);
            $term_name = $term->name;
        ?>
        <div class="table">
            <div id="cover-container-text" class="table-cell">
                <h1><?php echo the_archive_title(); ?></h1>
                </div>
            </div>
            <div class="country-code">
                <div id="marquee" class="marquee3k" data-speed="1.5" data-reverse="true">
                    <h5><?php echo $destination_code; ?></h5>
                </div>
            </div>
            <div class="cover-image" style="background-image: url('<?php echo $thumbnail_url; ?>');"></div>
            <div class="cover-gradient"></div>
        </div>
    </div>
</div>
    <div class="sous-cat col-xs-40 col-xs-offset-4">
    <div class="list-sous-cat">    
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

<div class="grid scroll-reveal col-xs-48 col-md-push-3 col-md-44">
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
                        <?php _e( 'Sorry, no posts matched your criteria.' ); ?>
                    </p>
                <?php endif;}
        else{
            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
            $title = get_the_archive_title();
            $args = array('post_type'=> array('carnets' , 'guides', 'conseils'),
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
                        <?php _e( 'Sorry, no posts matched your criteria.' ); ?>
                    </p>
                <?php endif; }?>
                                             
                                                                    
</div>

<?php
    $why_we_like = get_field('why_we_like', $term);
    if (!empty($why_we_like)) :
?>
        <div id="why-we-like" class="container col-xs-48">
            <div id="why-we-like__content" class="col-xs-34 col-xs-offset-7">
                <h4>Pourquoi on aime ?</h4>
                <p> <?php echo $why_we_like ?></p>
            </div>
            <div class="stamp">
                <img src="<?php bloginfo('template_url') ?>/assets/img/wave.png"/>
            </div>
        </div>
<?  endif;
?>
<?php
    $what_we_like = get_field('what_we_like', $term);
    if (!empty($what_we_like)) :
        echo  '
        <div id="what-we-like" class="container col-xs-48">
            <h4 class="col-xs-42 col-xs-offset-3">Nos endroits favoris</h4>
            <div id="what-we-like__content" class="col-xs-48">
            ';
            while (have_rows('what_we_like', $term)): the_row();
                $image = get_sub_field('image');
                $image_url = $image['sizes']['medium'];
                $title  = get_sub_field('title');
                $link = get_sub_field('link');
                ?>
                <div class="favorite-place col-xs-11 col-xs-offset-1">
                    <div class="image" style="background-image: url('<?php echo $image_url; ?>');">
                        <div class="table">
                            <a class="table-cell" href="<?php echo $link; ?>">
                                <h3><?php echo $title; ?></h3>
                            </a>
                        </div>

            <div class="cover-gradient"></div>
                    </div>
                </div><div class="favorite-place col-xs-11 col-xs-offset-1">
                    <div class="image" style="background-image: url('<?php echo $image_url; ?>');">
                        <div class="table">
                            <a class="table-cell" href="<?php echo $link; ?>">
                                <h3><?php echo $title; ?></h3>
                            </a>
                        </div>

            <div class="cover-gradient"></div>
                    </div>
                </div><div class="favorite-place col-xs-11 col-xs-offset-1">
                    <div class="image" style="background-image: url('<?php echo $image_url; ?>');">
                        <div class="table">
                            <a class="table-cell" href="<?php echo $link; ?>">
                                <h3><?php echo $title; ?></h3>
                            </a>
                        </div>

            <div class="cover-gradient"></div>
                    </div>
                </div>
                <?php
            endwhile;
            echo  '
            </div>
        </div>';
    endif;
?>
<?php get_footer(); ?>
<script type="text/javascript">
Marquee3k.init();Marquee3k.refreshAll();
</script>
<?php include'end.php' ?>