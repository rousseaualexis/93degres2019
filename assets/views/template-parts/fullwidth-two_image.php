<?php
	$image_01 = get_sub_field('image_01');
    $image_01_url = $image_01['sizes']['medium'];
    $image_01_caption = $image_01['caption'];
	$image_02 = get_sub_field('image_02');
    $image_02_url = $image_02['sizes']['medium'];
    $image_02_caption = $image_02['caption'];
	$image_03 = get_sub_field('image_03');
    $image_03_url = $image_03['sizes']['medium'];
    $image_03_caption = $image_03['caption'];
?>  
<div class="full-width col-xs-48">
	<div class="scroll-reveal un-tiers un-tiers__image col-xs-42 col-xs-offset-3 col-md-19 col-md-offset-4">
        <img src="<?php echo $image_01_url; ?>" />
        <?php if (!empty($image_01_caption)): ?>
            <p class="caption">
                <?php echo $image_01_caption; ?>
            </p>
        <?php endif; ?>
    </div>
    <div class="scroll-reveal un-tiers un-tiers__image col-xs-42 col-xs-offset-3 col-md-19 col-md-offset-2">
        <img src="<?php echo $image_02_url; ?>" />
        <?php if (!empty($image_02_caption)): ?>
            <p class="caption">
                <?php echo $image_02_caption; ?>
            </p>
        <?php endif; ?>
    </div>
</div>
