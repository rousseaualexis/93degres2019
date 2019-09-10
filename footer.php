 

<div id="footer" class="content row">
    <div id="list-destinations" class="col-xs-18">
            <?php
                $taxonomy = 'category';
                $args = array(
                    'taxonomy' => $taxonomy,
                    'hide_empty' => true
                );
                $categories = get_categories($args);
                foreach( $categories as $category ) {
                    if (0 != $category->parent){
                    $category_link = sprintf( 
                        '<a href="%1$s?type=guides" alt="%2$s"><span>#</span> %3$s</a>',
                        esc_url( get_category_link( $category->term_id ) ),
                        esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ),
                        esc_html( $category->name )
                    );
                    echo sprintf( esc_html__( '%s', 'textdomain' ), $category_link );
                } }
            ?>   
    </div>
    <div class="col-xs-18">
        <a href="<?php echo get_bloginfo( 'wpurl' );?>" class="big_title">93° Degrés</a>
    </div>
    <div class="col-xs-8 col-xs-offset-1">
        <?php 
            $args = array(
            'depth'       => 0,
            'sort_column' => 'menu_order',
            'theme_location' => 'footer-menu',
            'menu_class'  => 'menu',
            'include'     => '',
            'exclude'     => '',
            'echo'        => true,
            'show_home'   => false,
            'link_before' => '',
            'link_after'  => ''
            );
            wp_nav_menu( $args ); ?>
    </div>
    <div id="copyright" class="col-xs-8">
        <p> ©93.Degrés – by Alexis & Agathe</p>
    </div>
    
</div>
<!--
<div class="bootstrap--grid container">
    <div class="row">
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
    <div class="col-xs-1"><div></div></div>
</div>!-->
</main>


	<script src="<?php bloginfo('template_url') ?>/assets/js/jquery.js"></script>
    <script src="<?php bloginfo('template_url') ?>/assets/js/TweenMax.min.js"></script>
	<script src="<?php bloginfo('template_url') ?>/assets/js/lining.js" type="text/javascript"></script>
	<script src="<?php bloginfo('template_url') ?>/assets/js/imagesloaded.pkgd.min.js" type="text/javascript"></script>
    <script src="<?php bloginfo('template_url') ?>/assets/js/flickity.js" type="text/javascript"></script>

    <script src="<?php bloginfo('template_url') ?>/assets/js/smoothscroll.js"></script>
<!--
    <script src="https:ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="<?php bloginfo('template_url') ?>/assets/js/tiny-slider.js" type="text/javascript"></script>
<script src="<?php bloginfo('template_url') ?>/assets/js/jquery.nicescroll.min.js"></script>
<script src="<?php bloginfo('template_url') ?>/assets/js/marquee3k.js"></script>
<script src="<?php bloginfo('template_url') ?>/assets/js/spliddit.js" type="text/javascript"></script>
<script src="<?php bloginfo('template_url') ?>/assets/js/txtsplitr.min.js" type="text/javascript"></script>
<script src="<?php bloginfo('template_url') ?>/assets/js/infiniteslidev2.js" type="text/javascript"></script>
!-->
<script src="<?php bloginfo('template_url') ?>/assets/js/main.js"></script>