<?php
/*
Template Name: Homepage
*/
?>
<?php include'head.php'; ?>
<body class="homepage">
    <main>
<div data-scroll>
<?php get_header(); ?>
<div class="container">
    <?php
    $args = array(
        'post_type' => array('articles'),
        'posts_per_page' => 4
    );
    $myquery = new WP_Query( $args );
    if ($myquery->have_posts()) :
        $post = $posts[0]; $count=0;
        while ($myquery->have_posts()) : $myquery->the_post();
            $count++;
            if($count == 1) :
    ?>
            <div id="homepage--cover" class="content row">



                <?php
                    $id = get_the_id();
                    $terms = get_the_terms( $id, 'category' );
                    foreach($terms as $term) {
                        $flag = get_field('flag', $term);
                        $flag_url = $flag['sizes']['large'];
                        $term_url = get_term_link($term);
                        $term_name = $term->name;
                    }
                ?>
                
                <div class="h1 col-xs-10 col-xs-offset-1" data-lining><?php the_title(); ?></div>
                <?php 
                    $thumbnail = get_field( 'thumbnail' );
                    $thumbnail_url = $thumbnail['sizes']['large'];
                ?>
              
                
                <div class="categories col-xs-offset-1"><img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ ><span><?php echo $term_name; ?> — <?php the_date('d.m.Y'); ?></span></div>
                <div class="cta--circle col-xs-offset-1">
                    <a class="" href="<?php the_permalink(); ?>"><span>Découvrir</span><div class="circle"></div></a>
                </div>

                <div id="homepage--cover--image" class="item col-xs-9">
                    <div class="item__img-wrap image--21-9">
                    <div class="item__img" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
                    </div></div>
                    <div id="h1--seo"><h1>93 Degrés, blog de voyage, aventure et photographie</h1></div>
                </div>

            </div>

            <div id="other_articles" class="content row">
    <?php
            else :
                get_template_part( 'assets/views/homepage--content-grid' );
            endif;
        endwhile;
    endif;
    ?>
            </div>

            <div id="more_articles" class="row">
                <div class="col-xs-10 col-xs-offset-2">
                    <span class="h2">Envie de voir plus d’articles ?</span>
                    <div class="cta--circle">
                        <a class="" href="#"><span>Voir plus</span><div class="circle"></div></a>
                    </div>
                </div>
            </div>


            <div class="row homepage--destinations">
                    <span class="h4 col-xs-10 col-xs-offset-2">Nos destinations préférées</span>
                    <?php
                        $cat = get_query_var('cat');
                        $args = array(
                            'child_of' => $cat,
                            'orderby' => 'name',
                            'order' => 'ASC',
                            
                          'hierarchical' => 1,
                          'taxonomy' => 'category',
                          'hide_empty' => 1,
                          'parent' => 0,
                            );
                            
                            $categories = get_categories($args); ?>
            
                                    
                    <ul class="col-xs-14">
                           <?php foreach($categories as $category) {
                            $thumbnail = get_field('paper_flag', $category);
                                    $thumbnail_url = $thumbnail['sizes']['large'];
                                ?>
                                <a href="<?php echo get_category_link( $category->term_id ); ?> " class="big_title homepage--destinations--names menu__link"> <?php echo $category->name; ?>
                                     <div class="homepage--destinations--image__container"><div class="homepage--destinations--image" style="background-image: url(<?php echo $thumbnail_url; ?>);"></div></div>
                                </a>
                        <?php } ?>
                    </ul>

            </div>
            
            <div id="about" class="row">
                    <span class="h4 col-xs-4 col-xs-offset-1">Nos destinations préférées</span>
                    <span class="h2 col-xs-8">Nous sommes <strong>Agathe & Alexis</strong>, deux directeurs artistiques parisiens, passionnés de voyage, de design et de photographie.</span>
            </div>
 
</div>

<?php get_footer(); ?>
<?php include'end.php'; ?>
