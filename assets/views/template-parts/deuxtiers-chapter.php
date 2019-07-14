<?php
        $chapter = strip_tags(get_sub_field('chapter'), '<br><em><strong>');
        $anchor = get_sub_field('anchor');
?> 
<div class="scroll-reveal deux-tiers deux-tiers__chapter col-xs-42 col-xs-offset-3 col-sm-42 col-md-44 col-md-offset-4">
    <?php if(!empty($chapter)) : echo '<h4>' . $anchor . '</h4>'; endif; ?>
    <h3><?php echo $chapter ?></h3>
</div>
