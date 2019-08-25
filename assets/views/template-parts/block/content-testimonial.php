<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$avatar = get_field('avatar');

// create id attribute for specific styling
$id = 'testimonial-' . $block['id'];

// create align class ("alignwide") from block setting ("wide")
$align_class = $block['align'] ? 'align--' . $block['align'] : '';

?>
<div class="acf--testimonial content row">
	<div class="col-xs-10 col-xs-offset-2">
		<blockquote class="testimonial <?php echo $align_class; ?>" style="background: <?php the_field('background_color'); ?>; color: <?php the_field('text_color'); ?>;">
		    <p><?php the_field('testimonial'); ?></p>
		    <cite>
		        <img src="<?php echo $avatar['url']; ?>" alt="<?php echo $avatar['alt']; ?>" />
		        <span><?php the_field('author'); ?></span>
		    </cite>
		</blockquote>
	</div>
</div>