<div id="pagination_container" class="anime col-xs-48">
    <?php
        the_posts_pagination( array(
            'type' => 'list',
            'screen_reader_text' => ' ', 
            'prev_text'          => __( 'Précédente'),
            'next_text'          => __( 'Suivante'),
        ) );
    ?>
 </div>