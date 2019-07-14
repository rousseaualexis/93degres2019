<?php
    $image_01= get_sub_field('image_02');
    $image_01_url = $image_01['sizes']['medium'];
    $image_01_caption = $image_01['caption'];
    $image_02 = get_sub_field('image_01');
    $image_02_url = $image_02['sizes']['medium'];
    $image_02_caption = $image_02['caption'];
?> 
    
<div class="deux-tiers">
    <div class="deux-tiers__two-image col-xs-48 col-xs-offset-0  col-sm-15 col-sm-offset-3 col-md-22 col-md-offset-0">
        <img src="<?php echo $image_01_url; ?>"/>
        <?php if (!empty($image_01_caption)): ?>
            <p class="caption">
                <?php echo $image_01_caption; ?>
            </p>
        <?php endif; ?>
    </div>
    <div class="deux-tiers__two-image col-xs-48 col-xs-offset-0 col-sm-24 col-sm-offset-3 col-md-22 col-md-offset-4">
        <img src="<?php echo $image_02_url; ?>"/>
        <?php if (!empty($image_02_caption)): ?>
            <p class="caption">
                <?php echo $image_02_caption; ?>
            </p>
        <?php endif; ?>
    </div>
</div>

