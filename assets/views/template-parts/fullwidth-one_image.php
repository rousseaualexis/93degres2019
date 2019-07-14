<?php
	$image_01 = get_sub_field('image');
    $image_01_url = $image_01['sizes']['large'];
    $image_01_caption = $image_01['caption'];
?>  
<div class="full-width col-xs-48">
	<div class="scroll-reveal un-tiers un-tiers__image col-xs-42 col-xs-offset-3 col-md-40 col-md-offset-4">
        <img src="<?php echo $image_01_url; ?>" />
        <?php if (!empty($image_01_caption)): ?>
            <p class="caption">
                <?php echo $image_01_caption; ?>
            </p>
        <?php endif; ?>
    </div>
</div>
