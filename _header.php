<div class="mask"></div>
    <div id="header" class="col-xs-48">
        <div id="logo" class="col-xs-8 col-xs-offset-2 col-sm-5 col-md-3 col-md-offset-3">
            <a href="<?php echo get_bloginfo( 'wpurl' );?>"><img src="<?php bloginfo('template_url') ?>/assets/img/logo_2.svg" alt="93degres"/></a>
        </div>
        <div id="mobile-menu" class="mobile-menu">
            <span></span>
        </div>
            <?php 
            $args = array(
            'depth'       => 0,
            'sort_column' => 'menu_order',
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
     <div class="rotate">
    <div class="scroll-down"></div>
    <div id="link--about"><a href="<?php echo get_bloginfo( 'wpurl' );?>/a-propos">À propos</a></div>
    <a id="link--instagram" href="https://www.instagram.com/93.degres/" target="_blank"></a>
    <a id="link--twitter" href="https://twitter.com/93degres" target="_blank"></a>
</div>