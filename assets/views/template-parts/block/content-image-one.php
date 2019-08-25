<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$image = get_field('image');
$small_description = strip_tags(get_field('small_description'), '<br><em><strong>');

?>
<div class="acf--image-one content row">
	<div class="col-xs-4 col-xs-offset-1">
		<p class="h5"><?php echo $small_description; ?></p class="h5">
	</div>
	<div class="col-xs-6 col-xs-offset-1">
        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
        <span class="h5 caption"><?php the_field('caption'); ?></span>
	</div>
</div>