<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$title = strip_tags(get_field('title'), '<br><em><strong>');
$small_description = strip_tags(get_field('small_description'), '<br><em><strong>');
?>
<div class="acf--big-title content row">
	<div class="col-xs-8 col-xs-offset-5">
	    <span class="h2"><?php echo $title ?></span>
	</div>
</div>