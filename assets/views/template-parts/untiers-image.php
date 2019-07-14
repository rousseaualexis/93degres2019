<?php
	$image = get_sub_field('image');
    $image_url = $image['sizes']['medium'];
    $image_caption = $image['caption'];
?>
	<div class="scroll-reveal un-tiers un-tiers__image col-xs-48 col-md-41">
        <img src="<?php echo $image_url; ?>" />
        <?php if (!empty($image_caption)): ?>
            <p class="caption">
                <?php echo $image_caption; ?>
            </p>
        <?php endif; ?>
    </div>
