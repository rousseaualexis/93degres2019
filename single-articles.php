<?php include'head.php'; ?>
<body class="page--single">
    <main>
        <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>  
<div data-scroll>
<?php get_header(); ?>
<div class="container">
<?php $thumbnail = get_field('thumbnail');
    if ($thumbnail) :
    $thumbnail_url = $thumbnail['sizes']['large'];
    endif;
    $id = get_the_id();
    $terms = get_the_terms( $id, 'category' );
        foreach($terms as $term) {
            $flag = get_field('flag', $term);
            $flag_url = $flag['sizes']['large'];
            $term_url = get_term_link($term);
            $term_name = $term->name;
        }
?>

<div id="single--introduction" class="content row">
    <div class="categories col-xs-offset-1"><img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ ><span><?php echo $term_name; ?> — <?php the_date('d.m.Y'); ?></span></div>
    <h1 class="h1 col-xs-16 col-xs-offset-1" data-lining><?php the_title(); ?></h1>
    <div id="single--introduction__thumbnail" class="item col-xs-18">
        <div class="item__img-wrap image--21-9">
            <div class="item__img" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
            </div>
        </div>
    </div>
    <div id="summary" class="col-xs-42 col-xs-offset-3 col-md-28 col-md-offset-10"><?php echo get_field('introduction');?></div>
</div>

<div id="single--content">
    <?php
    while ( have_posts() ) : the_post();
        the_content(
        );
    endwhile; // End of the loop.
    ?>

<!--<?php include'assets/views/layout-loop.php'; ?> !-->
<?php include'assets/views/comments.php'; ?>

</div>

<?php get_footer(); ?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css">
<script>

    window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


    var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  freeScroll: true,
  lazyLoad: 3,
  percentPosition: false
});

/*

    var slider = tns({
    container: '.my-slider',
    items: 1,
    loop: false,
    autoWidth: true,
    mouseDrag: true,
    swipeAngle: false,
    navPosition: "bottom",
    speed: 600
  });
*/

</script>
<?php include'end.php'; ?>  