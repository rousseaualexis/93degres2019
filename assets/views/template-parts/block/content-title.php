<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$title = strip_tags(get_field('title'), '<br><em><strong>');
$small_description = strip_tags(get_field('small-description'), '<br><em><strong>');
?>
<div class="acf--title content">
	<div class="col-xs-5 col-xs-offset-6">
		<h2 class="h3"><?php echo $title; ?></h2>
	</div>
</div>