<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$title = strip_tags(get_field('title'), '<br><em><strong>');
$small_description = strip_tags(get_field('small-description'), '<br><em><strong>');
$images = get_field('gallery');
if( $images ):
?>
<div class="acf--slider content row">
	<ul class="my-slider">
	        <!-- Slides -->
	    <?php foreach( $images as $image ): ?>
	        <li class="slide">
	        	<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"/>
	        	<span class="h5 caption"><?php the_field('caption'); ?></span>
	    	</li>
	    <?php endforeach; ?>
	    <li class="slide--ghost"></li>
	</ul>
</div>
<?php endif; ?>