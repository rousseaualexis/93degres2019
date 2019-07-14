<div id="layout" class="col-xs-48">

    <?php
        if( have_rows('layout') ):
            while ( have_rows('layout') ) : the_row();
                if( get_row_layout() == 'deux_tiers_un_tiers' ):
                    echo '<div class="deux-tiers--un-tiers col-xs-48">';
                    if (have_rows('deux_tiers')) :
                        echo '<div class="deux-tiers--container col-md-26 col-md-offset-4">';
                        while (have_rows('deux_tiers')): the_row();
                            $template = get_sub_field('bloc');
                            get_template_part('assets/views/template-parts/deuxtiers', $template);
                        endwhile;
                        echo '</div>';
                    endif;
                    
                    if (have_rows('un_tiers')) :
                        echo '<div class="un-tiers--container col-xs-42 col-xs-offset-3 col-md-14 col-md-offset-2">';
                        while (have_rows('un_tiers')): the_row();
                            $template = get_sub_field('bloc');
                            get_template_part('assets/views/template-parts/untiers', $template);
                        endwhile;
                        echo '</div>';
                    endif;
                    echo '</div>';
                endif;
                
                if( get_row_layout() == 'full_width' ):
                    if (have_rows('full_width')) :
                        echo '<div class="full-width--container col-md-48">';
                        while (have_rows('full_width')): the_row();
                            $template = get_sub_field('bloc');
                            get_template_part('assets/views/template-parts/fullwidth', $template);
                        endwhile;
                        echo '</div>';
                    endif;

                endif;
            endwhile;
        endif;
        
        get_template_part('assets/views/content-realated', $template); 
    ?>
</div>
