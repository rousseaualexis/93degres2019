<?php
/*
Template Name: Destinations
*/
?>
<?php include'head.php'; ?>
<body class="page--destinations">
<main>
<?php get_header(); ?>
<div data-scroll>
<div class="container">
<div class="row content">
<div class="col-xs-20 col-xs-offset-2 page--destinations--names">
	<span class="col-xs-24 h4">Destinations</span>


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
        <div class="col-xs-24">
            <a href=" <?php echo get_category_link( $category->term_id ); ?> " >
                <h2 class="h1"><?php echo $category->name; ?></h2>
                <div class="image" style="background-image: url('<?php echo $thumbnail_url; ?>')"></div>
            </a>
        </div>
    
    <?php } ?>

  </div> 
</div>
</div>
<?php get_footer(); ?>
<?php include'end.php'; ?>  
   