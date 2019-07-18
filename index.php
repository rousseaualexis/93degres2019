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
    <div id="homepage--cover" class="content row">
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
                              
                                
                                <a class="categories col-xs-offset-1" href="<?php echo $term_url; ?>"><img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ ><span><?php echo $term_name; ?> — <?php the_date('d.m.Y'); ?></span></a>
                                <div class="cta--circle col-xs-offset-1">
                                    <a class="" href="<?php the_permalink(); ?>"><div>Découvrir</div>
                                    </a>
                                </div>

                                <div id="homepage--cover--image" class="item col-xs-9">
                                    <div class="item__img-wrap">
                                    <div class="item__img" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
                                    </div></div>
                                </div>



                
                        <div class="grid scroll-reveal col-md-46 col-md-pull-1">
        <?php
                            else :
                                get_template_part( 'assets/views/homepage--content-grid' );
                            endif;
                endwhile;
            endif;
        ?>
                        </div>
    </div>
</div>

<?php get_footer(); ?>
<?php include'end.php'; ?>
