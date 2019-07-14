<?php
        $paragraph = get_sub_field('paragraph');
        $chapter = strip_tags(get_sub_field('chapter'), '<br><em><strong>');
?> 
<div class="scroll-reveal deux-tiers deux-tiers__aside col-xs-42 col-xs-offset-3 col-sm-42 col-md-48 col-md-offset-0">
	<div class="col-md-40 col-md-offset-4">
	    <?php if(!empty($chapter)) : echo '<h3>' . $chapter . '</h3>'; endif;
	    echo $paragraph;
	    ?>
	</div>
</div>
