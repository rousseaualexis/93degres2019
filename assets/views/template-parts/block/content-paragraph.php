<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */


$small_description = strip_tags(get_field('small_description'), '<br><em><strong>');
$paragraph = get_field('paragraph');

?>
<div class="acf--paragraph content row">
	<div class="col-sm-5 col-sm-offset-1">
		<p class="h5"><?php echo $small_description; ?></p>
	</div>
	<div class="col-sm-9 col-sm-offset-1">
        <?php echo $paragraph; ?>
	</div>
</div>