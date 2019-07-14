<div class="scroll-reveal deux-tiers deux-tiers__one-image col-xs-48 col-xs-offset-0 col-md-48">
<?php
$image = get_sub_field('image');
$image_url = $image['sizes']['large'];
$image_caption = $image['caption'];
?>
    <img src="<?php echo $image_url ?>" />
    <?php if (!empty($image_caption)) : ?>
        <p class="caption">
            <?php echo $image_caption; ?>
        </p>
    <?php endif; ?>
</div>