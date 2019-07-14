<?php include'head.php'; ?>
<body class="single">
<?php get_header(); ?>
<?php $thumbnail = get_field('thumbnail');
    if ($thumbnail) :
    $thumbnail_url = $thumbnail['sizes']['large'];
    endif;
    $id = get_the_id();
    $terms = get_the_terms( $id, 'category' );
    if (isset($terms)){
        foreach($terms as $term) {
            $destination_code = get_field('destination_code', $term);
            $flag = get_field('flag', $term);
            $flag_url = $flag['sizes']['thumbnail'];
            $term_url = get_term_link($term);
            $term_name = $term->name;
        }
    }
?>
<div id="introduction" class="col-xs-48 col-xs-offset-0 col-md-39 col-md-offset-6">
    <div id="introduction-title" class="col-xs-28">
        <a class="categories" href="<?php echo $term_url; ?>">
            <img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ >
            <div><?php echo $term_name; ?></div>
        </a>
        <h1><?php the_title(); ?></h1><?php if(!empty(get_field('subtitle'))){echo '<h4>' . wp_encode_emoji(get_field('subtitle')) . '</h4>';}?>
    </div>
    <div id="introduction__thumbnail" class="col-xs-22">
        <div class="random--rotate  image--3-2 ">
            <div class="image" style="background-image: url('<?php echo $thumbnail_url; ?>');">
                <div id="label" class="label">
                <img src="<?php bloginfo('template_url') ?>/assets/img/label__carnets-de-voyage.svg"/>
            </div>
            </div>
            
        </div>
    </div>
    <div id="country-code" class="country-code">
        <h5 class="random"><?php echo $destination_code; ?></h5>
    </div>
    
    <div id="date" class="date">
        <h5 class="random"><? the_time(get_option('date_format')); ?></h5>
    </div>
 </div>

<div id="article" class="container col-xs-48">
     <div id="summary" class="col-xs-42 col-xs-offset-3 col-md-30 col-md-offset-9"><?php echo get_field('introduction');?></div>
    <?php include'assets/views/layout-loop.php'; ?>
</div>

<?php include'assets/views/comments.php'; ?>

<?php get_footer(); ?>
<?php include'end.php'; ?>