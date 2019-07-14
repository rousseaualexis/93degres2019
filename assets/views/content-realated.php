<?php
$posts = get_field('realated');
if ($posts): ?>
<div id="realated" class="col-xs-48">
    <div class="title"><h3>Découvrir</h3></div>
    <div class="trait"></div>
    <div class="grid scroll-reveal">
<?php 
    foreach($posts as $post): // variable must be called $post (IMPORTANT)
        setup_postdata($post);
        include'content-grid.php';
    endforeach;
    wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly
?>
</div>
</div>
<?
endif;
?>