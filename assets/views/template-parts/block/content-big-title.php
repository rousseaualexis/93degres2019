<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$title = strip_tags(get_field('title'), '<br><em><strong>');
?>
<div class="acf--big-title content row">
	<div class="col-xs-16 col-xs-offset-1 col-sm-18 col-sm-offset-2">
	    <span class="h2"><?php echo $title ?></span>
	</div>
</div>