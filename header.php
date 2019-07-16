<div class="mask"></div>
    <div id="header" class="col-xs-14">
        <div class="col-xs-5 col-xs-offset-1">
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
        <div id="logo" class="col-xs-2">
            <a href="<?php echo get_bloginfo( 'wpurl' );?>"><img src="<?php bloginfo('template_url') ?>/assets/img/logo_2.svg" alt="93degres"/></a>
        </div>
        <div class="menu-secondary-container col-xs-5">
            <ul>
                <li><a href="<?php echo get_bloginfo( 'wpurl' );?>/a-propos">À propos</a></li>
                <li ><a id="link--instagram" href="https://www.instagram.com/93.degres/" target="_blank"></a></li>
            </ul>
        </div>
        <div id="mobile-menu" class="mobile-menu">
            <span></span>
        </div>


    </div>
 
