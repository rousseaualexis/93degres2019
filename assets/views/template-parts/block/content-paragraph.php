<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */


$small_description = strip_tags(get_field('small_description'), '<br><em><strong>');
$paragraph = get_field('paragraph');

?>
<div class="acf--testimonial content row">
	<div class="col-xs-4 col-xs-offset-1">
		<p class="h5"><?php echo $small_description; ?></p>
	</div>
	<div class="col-xs-6 col-xs-offset-1">
        <?php echo $paragraph; ?>
	</div>
</div>