<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$image = get_field('image');

?>
<div class="acf--image-full content row">
	<div class="col-xs-24">
        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
        <span class="h5 caption"><?php the_field('caption'); ?></span>
	</div>
</div>