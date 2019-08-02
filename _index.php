<?php
/*
Template Name: Homepage
*/
?>
<?php include'head.php'; ?>
<body class="homepage">
<?php get_header(); ?>
<div id="home-posts" class="overflow col-xs-48">
    <div class="col-xs-48 col-xs-push-0 col-md-push-3">
        <?php
            $args = array(
                'post_type' => array('conseils', 'guides', 'carnets'),
                'posts_per_page' => 4
            );
            $myquery = new WP_Query( $args );
            if ($myquery->have_posts()) :
                $post = $posts[0]; $count=0;
                while ($myquery->have_posts()) : $myquery->the_post();
                    $count++;
                    if($count == 1) :
        ?>
                    <?php if('guides' === get_post_type()): ?>
                        <div class="first-post post post--guide col-xs-pull-0 col-xs-48 col-md-pull-12">
                    <?php elseif('conseils' === get_post_type()): ?>
                        <div class="first-post post post--conseil col-xs-pull-0 col-xs-48 col-md-pull-12">
                    <?php elseif('carnets' === get_post_type()):  ?>
                        <div class="first-post post post--article col-xs-pull-0 col-xs-48 col-md-pull-12">
                    <?php endif; ?>
                            <div class="first-post-texte col-xs-42 col-xs-pull-0 col-xs-offset-3 col-sm-24 col-sm-push-6 col-md-push-16 col-md-offset-0">
                                <?php
                                    $id = get_the_id();
                                    $terms = get_the_terms( $id, 'category' );
                                    foreach($terms as $term) {
                                        $destination_code = get_field('destination_code', $term);
                                        $flag = get_field('flag', $term);
                                        $flag_url = $flag['sizes']['thumbnail'];
                                        $term_url = get_term_link($term);
                                        $term_name = $term->name;
                                    }
                                ?>
                                <a class="categories" href="<?php echo $term_url; ?>"><img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ ><div><?php echo $term_name; ?></div></a>
                                <div id="title">
                                <?php if('guides' === get_post_type()): ?>
                                    <div class="label">
                                        <img src="<?php bloginfo('template_url') ?>/assets/img/label__nos-petites-adresses.svg"/>
                                    </div>
                                <?php elseif('conseils' === get_post_type()): ?>
                                    <div class="label">
                                        <img src="<?php bloginfo('template_url') ?>/assets/img/label__conseils.svg"/>
                                    </div>
                                <?php elseif('carnets' === get_post_type()):  ?>
                                    <div class="label">
                                        <img src="<?php bloginfo('template_url') ?>/assets/img/label__carnets-de-voyage.svg"/>
                                    </div>
                                <?php endif; ?>
                                <h1 class="h1"><?php the_title(); ?></h1><?php if(!empty(get_field('subtitle'))){echo '<p><strong>' . get_field('subtitle') . '</strong></p>';}?></div>
                                <a class="a-cta col-xs-offset-0 col-sm-offset-13 col-md-offset-12" href="<?php the_permalink(); ?>"><div class="cta">Découvrir</div>
                                </a>
                                <?php 
                                    $thumbnail = get_field( 'thumbnail' );
                                    $thumbnail_url = $thumbnail['sizes']['large'];
                                ?>
                                <div class="country-code">
                                <div id="marquee" class="marquee3k" data-speed="1.5" data-reverse="true">
                                    <h5><?php echo $destination_code; ?></h5>
                                </div>
                            </div>
                            </div>
                            <div class="first-post-image col-xs-31 col-xs-offset-0 col-md-offset-23">
                                <div class="image" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
                                </div>
                            </div>

                        </div>
                        <div class="grid scroll-reveal col-md-46 col-md-pull-1">
                            <?php
                            else :
                                get_template_part( 'assets/views/content-grid' );
                            endif;
                endwhile;
            endif;
        ?>
                        </div>
    </div>
</div>
<div id="destinations" class="container col-xs-48">
    
<h5 class="col-xs-48">Destinations</h5>
   <div class="col-xs-42 col-xs-offset-3">
    <?php
        $args = array(
        'orderby' => 'name',
        'parent' => 0,
        );
        $categories = get_categories( $args );
        foreach ( $categories as $category ) {
            $category_link = get_category_link( $category );
    ?>
        <li class="scroll-reveal">
            <a href="<?php echo esc_url( $category_link ); ?>"> <?php echo $category->name; ?></a>
        </li>
    <?php } ?>
</div>
</div>
<div id="about" class="container col-xs-48">
    <div class="texte--center col-xs-42 col-xs-offset-3 col-sm-32 col-sm-offset-8">
        <h2 class="scroll-reveal">Nous sommes Agathe&nbsp&&nbspAlexis, deux directeurs artistiques parisiens, passionnés de&nbspvoyage, de design et de photographie.</h2>
        <a class="scroll-reveal a-cta" href="<?php echo get_bloginfo( 'wpurl' );?>/a-propos"><div class="cta">En savoir plus</div></a>
    </div>
</div>

<?php include'assets/views/content-instagram.php'; ?>
<?php get_footer(); ?>
<script type="text/javascript">
Marquee3k.init();Marquee3k.refreshAll();
$(function(){$('.auto-slide').infiniteslide({
    speed: 50,
    direction: 'left',
    clone: 2,
    pauseonhover: false

})});


</script>
<?php include'end.php'; ?>
