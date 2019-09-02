<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$deux_tiers = get_field('image-deux-tiers');
$un_tiers = get_field('image-un-tiers');


?>
<div class="acf--image-deux-tiers-un-tiers content row">
	<div class="col-xs-9 col-xs-offset-0">
        <img src="<?php echo $deux_tiers['url']; ?>" alt="<?php echo $deux_tiers['alt']; ?>" />
        <span class="h5 caption"><?php the_field('caption-deux-tiers'); ?></span>
	</div>
	<div class="col-xs-5 col-xs-offset-2">
        <img src="<?php echo $un_tiers['url']; ?>" alt="<?php echo $un_tiers['alt']; ?>" />
        <span class="h5 caption"><?php the_field('caption-un-tiers'); ?></span>
	</div>
</div>