<?php
/*
Template Name: Destinations
*/
?>
<?php include'head.php'; ?>
<body class="all-destinations">
<?php get_header(); ?>
<div class="all-destinations--title col-xs-48">
	<h1>Destinations</h1>
</div>


<div class="grid col-xs-48">
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
	
	$categories = get_categories($args);
	foreach($categories as $category) { 

            $thumbnail = get_field('thumbnail', $category);
            $thumbnail_url = $thumbnail['sizes']['large'];
        ?>
        <div class="scroll-reveal col-xs-42 col-xs-offset-3 col-xs-push-0 col-sm-12 col-sm-offset-0 col-md-13 col-md-offset-1 col-md-push-3">
            <a href=" <?php echo get_category_link( $category->term_id ); ?> " >
                <h4><?php echo $category->name; ?></h4><h5 class="country-code__01"><?php echo get_field('destination_code', $category); ?></h5><h5 class="country-code__02"><?php echo get_field('destination_code', $category); ?></h5>
                <div class="image" style="background-image: url('<?php echo $thumbnail_url; ?>')"></div>
            </a>
        </div>
    
    <?php } ?>

   
    </div>
    
  


<?php get_footer(); ?>
<?php include'end.php' ?>

   