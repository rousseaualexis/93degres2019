<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$image_gauche = get_field('image_gauche');
$image_droite = get_field('image_droite');

?>
<div class="acf--image-full-split content row">
	<div class="col-xs-9">
        <img src="<?php echo $image_gauche['url']; ?>" alt="<?php echo $image_gauche['alt']; ?>" />
        <span class="h5 caption"><?php the_field('caption'); ?></span>
	</div>
	<div class="col-xs-9">
        <img src="<?php echo $image_droite['url']; ?>" alt="<?php echo $image_droite['alt']; ?>" />
        <span class="h5 caption"><?php the_field('caption'); ?></span>
	</div>
</div>