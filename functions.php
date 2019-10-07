<?php

// Add scripts and stylesheets
function startwordpress_scripts() {
    wp_enqueue_style( 'blog', get_template_directory_uri() . '/style.css' );
 }

add_action( 'wp_enqueue_scripts', 'startwordpress_scripts' );


// Support Global name of the Website
add_theme_support( 'title-tag' );


// REMOVE BASE TEXTE EDITOR
/*
function remove_pages_editor(){
    remove_post_type_support( 'post', 'editor' );
}   
add_action( 'init', 'remove_pages_editor' );
*/

// FUNCTIONS TO REMOVE BASE POST FROM THE ADMIN

function remove_menus(){
  remove_menu_page( 'edit.php', 'users.php', 'tools.php');
}
add_action( 'admin_menu', 'remove_menus' );

add_action( 'admin_bar_menu', 'remove_default_post_type_menu_bar', 999 );

function remove_default_post_type_menu_bar( $wp_admin_bar ) {
    $wp_admin_bar->remove_node( 'new-post' );
}


add_action( 'wp_dashboard_setup', 'remove_draft_widget', 999 );

function remove_draft_widget(){
    remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
}


// ADD CUSTOM POST TYPES




add_action('init', 'my_custom_init');
function my_custom_init()
{
register_post_type(
  'Articles',
  array(
    'label' => 'article',
    'labels' => array(
      'name' => 'Articles',
      'singular_name' => 'Article',
      'all_items' => 'Tous les Articles',
      'add_new_item' => 'Ajouter un Article',
      'edit_item' => 'Éditer le Article',
      'new_item' => 'Nouveau Article',
      'view_item' => 'Voir le Article',
      'search_items' => 'Rechercher parmi les Article',
      'not_found' => 'Pas de Article trouvé',
      'not_found_in_trash'=> 'Pas de Article dans la corbeille'
      ),
    'public' => true,
    'show_in_rest' => true, // Important !
    'capability_type' => 'post',
    'supports' => array(
      'title', 'comments', 'editor'
    ),
    'has_archive' => true,
    'taxonomies' => array('category', 'post_tag'),
    'menu_position' => 4,
    'rewrite' => array(
        'slug' => 'articles')
  )
);/*

register_post_type(
  'guides',
  array(
    'label' => 'Guides',
    'labels' => array(
      'name' => 'Guides',
      'singular_name' => 'Guide',
      'all_items' => 'Tous les Guides',
      'add_new_item' => 'Ajouter un Guide',
      'edit_item' => 'Éditer le Guide',
      'new_item' => 'Nouveau Guide',
      'view_item' => 'Voir le Guide',
      'search_items' => 'Rechercher parmi les Guides',
      'not_found' => 'Pas de Guide trouvé',
      'not_found_in_trash'=> 'Pas de Guide dans la corbeille'
      ),
    'public' => true,
    'capability_type' => 'post',
    'supports' => array(
      'title', 'comments'
    ),
    'has_archive' => true,
      'taxonomies' => array('category'),
    'menu_position' => 4,
    'rewrite' => array(
        'slug' => 'nos-petites-adresses')
  )
);

register_post_type(
  'conseils',
  array(
    'label' => 'Conseil',
    'labels' => array(
      'name' => 'Conseil',
      'singular_name' => 'Conseil',
      'all_items' => 'Tous les Conseils',
      'add_new_item' => 'Ajouter un Conseil',
      'edit_item' => 'Éditer  le Conseil',
      'new_item' => 'Nouveau Conseil',
      'view_item' => 'Voir le Conseil',
      'search_items' => 'Rechercher parmi les Conseil',
      'not_found' => 'Pas de Conseil trouvé',
      'not_found_in_trash'=> 'Pas de Conseil dans la corbeille'
      ),
    'public' => true,
    'capability_type' => 'post',
    'supports' => array(
      'title', 'comments'
    ),
    'has_archive' => true,
    'taxonomies' => array('category'),
    'menu_position' => 5,
    'rewrite' => array(
        'slug' => 'nos-conseils')
  )
);
    */

}




/* Show Custom post Types on categorie page */
function custom_post_type_cat_filter($query) {
  if ( !is_admin() && $query->is_main_query() ) {
    if ($query->is_category()) {
      $query->set( 'post_type', array( 'articles', 'guides', 'conseils' ) );
    }
  }
}

add_action('pre_get_posts','custom_post_type_cat_filter');


// REMOVE WP EMOJI
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

/*
 * Modify TinyMCE editor to remove H1.
 */
add_filter('tiny_mce_before_init', 'tiny_mce_remove_unused_formats' );
function tiny_mce_remove_unused_formats($init) {
    // Add block format elements you want to show in dropdown
    $init['block_formats'] = 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Address=address;Pre=pre';
    return $init;
}


/*
 * -----------------------------------------------------------------------------
 * Advanced Custom Fields Modifications of the height of tge WYSIWIG
 * -----------------------------------------------------------------------------
*/
function PREFIX_apply_acf_modifications() {
?>
  <style>
    .acf-editor-wrap iframe {
      min-height: 0;
    }
  </style>
  <script>
    (function($) {
      // (filter called before the tinyMCE instance is created)
      acf.add_filter('wysiwyg_tinymce_settings', function(mceInit, id, $field) {
        // enable autoresizing of the WYSIWYG editor
        mceInit.wp_autoresize_on = true;
        return mceInit;
      });
      // (action called when a WYSIWYG tinymce element has been initialized)
      acf.add_action('wysiwyg_tinymce_init', function(ed, id, mceInit, $field) {
        // reduce tinymce's min-height settings
        ed.settings.autoresize_min_height = 0;
        // reduce iframe's 'height' style to match tinymce settings
        $('.acf-editor-wrap iframe').css('height', '0');
      });
    })(jQuery)
  </script>
<?php
}
/*
 * -----------------------------------------------------------------------------
 * WordPress hooks
 * -----------------------------------------------------------------------------
*/
add_action('acf/input/admin_footer', 'PREFIX_apply_acf_modifications');





// ADD STYLE TO TINY MCE
add_filter( 'acf/fields/wysiwyg/toolbars' , 'my_toolbars'  );
function my_toolbars( $toolbars )
{
    // Uncomment to view format of $toolbars
/*
    echo '< pre >';
        print_r($toolbars);
    echo '< /pre >';
    die;
    */

    // Add a new toolbar called "Very Simple"
    // - this toolbar has only 1 row of buttons
    $toolbars['Very Simple' ] = array();
    $toolbars['Very Simple' ][1] = array('bold' , 'italic' , 'underline', 'link' );
    $toolbars['Chapter' ] = array();
    $toolbars['Chapter' ][1] = array('bold' , 'italic' , 'underline', 'bloc');
    $toolbars['Title' ] = array();
    $toolbars['Title' ][1] = array('bold');
    $toolbars['Code'][2] = array('code');

    // Edit the "Full" toolbar and remove 'code'
    // - delet from array code from http://stackoverflow.com/questions/7225070/php-array-delete-by-value-not-key
    if( ($key = array_search('code' , $toolbars['Full' ][2])) !== false )
    {
        unset( $toolbars['Full' ][2][$key] );
    }

    // remove the 'Basic' toolbar completely
    //unset( $toolbars['Basic' ] );

    // return $toolbars - IMPORTANT!
    return $toolbars;
};


/**
* Safe Pasting for TinyMCE (automatically clean up MS Word HTML)
*/
function tinymce_paste_options($init) {
    $init['paste_auto_cleanup_on_paste'] = true;
    $init['paste_convert_headers_to_strong'] = true;
        $init['paste_as_text'] = true;

    // omit the pastetext button so that the user can't change it manually, current toolbar2 content as of 4.1.1 is "formatselect,underline,alignjustify,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help"
    $init["toolbar2"] = "formatselect,underline,alignjustify,forecolor,removeformat,charmap,outdent,indent,undo,redo,wp_help";

    return $init;
}
if( is_admin() ) add_filter('tiny_mce_before_init', 'tinymce_paste_options');



//MON THEME DE COMMENTAIRE
      function comment_theme($comment, $args, $depth) {
          if ( 'div' === $args['style'] ) {
              $tag       = 'div';
              $add_below = 'comment';
          } else {
              $tag       = 'li';
              $add_below = 'div-comment';
          }
          ?>
          <<?php echo $tag ?> <?php comment_class( empty( $args['has_children'] ) ? '' : 'parent' ) ?> id="comment-<?php comment_ID() ?>">
          <?php if ( 'div' != $args['style'] ) : ?>
              <div id="div-comment-<?php comment_ID() ?>" class="comment-body">
          <?php endif; ?>
          <div class="comment-author vcard">
              <div class="round_avatar">
              <?php if ( $args['avatar_size'] != 0 ) echo get_avatar( $comment, $args['avatar_size'] ); ?></div>
              <?php printf( __( '<cite class="fn">%s</cite>' ), get_comment_author_link() ); ?>
              
          </div>
          <?php if ( $comment->comment_approved == '0' ) : ?>
               <em class="comment-awaiting-moderation"><?php _e( 'Your comment is awaiting moderation.' ); ?></em>
                <br />
          <?php endif; ?>
                  

          <div class="comment-meta commentmetadata">
              <h4>&#8226;</h4>
              <a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ); ?>">
              <?php
          
              $d = "d.m.y";
              /* translators: 1: date, 2: time */
              printf( __(' %1$s'), get_comment_date( $d, $comment_ID )); ?></a>
              <?php edit_comment_link( __( '(Edit)' ), '  ', '' );
              ?>
          </div>

          <?php comment_text(); ?>

          <div class="reply">
              <?php comment_reply_link( array_merge( $args, array( 'add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
          </div>
          <?php if ( 'div' != $args['style'] ) : ?>
          </div>
          <?php endif; ?>
          <?php
          }




// COMMENT FORM
      function alter_comment_form_fields($fields){
         

          
          $fields   =  array(
                  
              'author' => '<p class="comment-form-author">' .
                          '<input id="author" name="author" type="text" placeholder= ' . __( 'Name' ) . ' value="' . esc_attr( $commenter['comment_author'] ) . '" size="30" maxlength="245"' . $aria_req . $html_req . ' /></p>',
              'email'  => '<p class="comment-form-email">' . 
                          '<input id="email" name="email"  '  . ( $html5 ? 'type="email"' : 'type="text"' ) . 'placeholder= ' . __( 'Email' ) . ' value="' . esc_attr(  $commenter['comment_author_email'] ) . '" size="30" maxlength="100" aria-describedby="email-notes"' . $aria_req . $html_req  . ' /></p>',
              'url'    => '<p class="comment-form-url">' .
                          '<input id="url" name="url" ' . ( $html5 ? 'type="url"' : 'type="text"' ) . 'placeholder= ' . __( 'Website' ) . ' value="' . esc_attr( $commenter['comment_author_url'] ) . '" size="30" maxlength="200" /></p>',
              

              
          );
          


          return $fields;
      }

      add_filter('comment_form_default_fields','alter_comment_form_fields');



      function wpsites_modify_comment_form_text_area($arg) {
          $arg['comment_field'] = '<p class="comment-form-comment"><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" placeholder= ' . _x( 'Comment', 'noun' ) . '></textarea></p>';
          return $arg;
      }

      add_filter('comment_form_defaults', 'wpsites_modify_comment_form_text_area');

      function wpb_move_comment_field_to_bottom( $fields ) {
          
      $comment_field = $fields['comment'];
      unset( $fields['comment'] );
      $fields['comment'] = $comment_field;
      return $fields;
      }

      add_filter( 'comment_form_fields', 'wpb_move_comment_field_to_bottom' );

      function wpsites_modify_text_before_comment_form($arg) {
          $arg['comment_notes_before'] = '';
          return $arg;
      }

      add_filter('comment_form_defaults', 'wpsites_modify_text_before_comment_form');



// DELETE CATEGORY MARK such as category:
// Remove the Category: prefix from category archive titles
// Return an alternate title, without prefix, for every type used in the get_the_archive_title().
add_filter('get_the_archive_title', function ($title) {
    if ( is_category() ) {
        $title = single_cat_title( '', false );
    } elseif ( is_tag() ) {
        $title = single_tag_title( '', false );
    } elseif ( is_author() ) {
        $title = '<span class="vcard">' . get_the_author() . '</span>';
    } elseif ( is_year() ) {
        $title = get_the_date( _x( 'Y', 'yearly archives date format' ) );
    } elseif ( is_month() ) {
        $title = get_the_date( _x( 'F Y', 'monthly archives date format' ) );
    } elseif ( is_day() ) {
        $title = get_the_date( _x( 'F j, Y', 'daily archives date format' ) );
    } elseif ( is_tax( 'post_format' ) ) {
        if ( is_tax( 'post_format', 'post-format-aside' ) ) {
            $title = _x( 'Asides', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) {
            $title = _x( 'Galleries', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-image' ) ) {
            $title = _x( 'Images', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-video' ) ) {
            $title = _x( 'Videos', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-quote' ) ) {
            $title = _x( 'Quotes', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-link' ) ) {
            $title = _x( 'Links', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-status' ) ) {
            $title = _x( 'Statuses', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-audio' ) ) {
            $title = _x( 'Audio', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-chat' ) ) {
            $title = _x( 'Chats', 'post format archive title' );
        }
    } elseif ( is_post_type_archive() ) {
        $title = post_type_archive_title( '', false );
    } elseif ( is_tax() ) {
        $title = single_term_title( '', false );
    } else {
        $title = __( 'Archives' );
    }
    return $title;
});






// PAGINATION
function pagination($query) {  
    
    $baseURL="http://".$_SERVER['HTTP_HOST'];
    if($_SERVER['REQUEST_URI'] != "/"){
        $baseURL = $baseURL.$_SERVER['REQUEST_URI'];
    }
 
    // Suppression de '/page' de l'URL
    $sep = strrpos($baseURL, '/page/');
    if($sep != FALSE){
        $baseURL = substr($baseURL, 0, $sep);
    }
 
  // Suppression des paramètres de l'URL
    $sep = strrpos($baseURL, '?');
    if($sep != FALSE){
    // On supprime le caractère avant qui est un '/'
        $baseURL = substr($baseURL, 0, ($sep-1));
    }   
    
    $page = $query->query_vars["paged"];  
    if ( !$page ) $page = 1;  
    $qs = $_SERVER["QUERY_STRING"] ? "?".$_SERVER["QUERY_STRING"] : "";  
    
    // Nécessaire uniquement si on a plus de posts que de posts par page admis 
    if ( $query->found_posts > $query->query_vars["posts_per_page"] ) {  
        echo '<ul class="pagination">'; 
        // lien précédent si besoin
        if ( $page > 1 ) { 
            echo '<li class="next_prev prev"><a title="Revenir à la page précédente (vous êtes à la page '.$page.')" href="'.$baseURL.'/page/'.($page-1).'/'.$qs.'">« précédente</a></li>'; 
        } 
        // la boucle pour les pages
        for ( $i=1; $i <= $query->max_num_pages; $i++ ) { 
            // ajout de la classe active pour la page en cours de visualisation
            if ( $i == $page ) { 
                echo '<li class="active"><a href="#pagination" title="Vous êtes sur cette page '.$i.'">'.$i.'</a></li>'; 
            } else { 
                echo '<li><a title="Rejoindre la page '.$i.'" href="'.$baseURL.'/page/'.$i.'/'.$qs.'">'.$i.'</a></li>'; 
            } 
        } 
        // le lien next si besoin
        if ( $page < $query->max_num_pages ) { 
            echo '<li class="next_prev next"><a title="Passer à la page suivante (vous êtes à la page '.$page.')" href="'.$baseURL.'/page/'.($page+1).'/'.$qs.'">suivante »</a></li>'; 
        } 
        echo '</ul>';  
    }  
}



function pressPagination($pages = '', $range = 2)
{
    global $paged;
    $showitems= ($range * 2)+1;
 
    if(empty($paged)) $paged = 1;
    if($pages == '')
    {
        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if(!$pages)
        {
                   $pages = 1;
        }
    }
 
    if(1 != $pages)
    {
        echo "<div class='pagination'>";
        if($paged > 2 && $paged > $range+1 && $showitems < $pages) echo "<a href='".get_pagenum_link(1)."'>&laquo;</a>";
        if($paged > 1 && $showitems < $pages) echo "<a href='".get_pagenum_link($paged - 1)."'>&lsaquo;</a>";
         
        for ($i=1; $i <= $pages; $i++)
        {
            if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems ))
            {
                echo ($paged == $i)? "<span class='current'>".$i."</span>":"<a href='".get_pagenum_link($i)."' class='inactive' >".$i."</a>";
            }
        }
 
        if ($paged < $pages && $showitems < $pages) echo "<a href='".get_pagenum_link($paged + 1)."'>&rsaquo;</a>";
           if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) echo "<a href='".get_pagenum_link($pages)."'>&raquo;</a>";
           echo "</div>n";
       }
 
    }
       /////////////////////////
      /**
       * Wordpress has a known bug with the posts_per_page value and overriding it using
       * query_posts. The result is that although the number of allowed posts_per_page
       * is abided by on the first page, subsequent pages give a 404 error and act as if
       * there are no more custom post type posts to show and thus gives a 404 error.
       *
       * This fix is a nicer alternative to setting the blog pages show at most value in the
       * WP Admin reading options screen to a low value like 1.
       *
       */
      add_action( 'pre_get_posts', 'wpsites_cpt_archive_items' );
      function wpsites_cpt_archive_items( $query ) {
      if( $query->is_main_query() && !is_admin() && is_post_type_archive( 'articles' ) ) {
              $query->set( 'posts_per_page', '9' );
          }
      if( $query->is_main_query() && !is_admin() && is_post_type_archive( 'guides' ) ) {
              $query->set( 'posts_per_page', '9' );
          }
      if( $query->is_main_query() && !is_admin() && is_post_type_archive( 'conseils' ) ) {
              $query->set( 'posts_per_page', '9' );
          }

      }
/*-------------------------------------------------------------------------------
    Custom Columns - Pour éditer la vue des colonne dans l'edite
-------------------------------------------------------------------------------*/
/*
add_filter('manage_guides_posts_columns' , 'mysite_add_columns');
add_filter('manage_conseils_posts_columns' , 'mysite_add_columns');
add_filter('manage_carnets_posts_columns' , 'mysite_add_columns');

function mysite_add_columns( $columns ) {

  $columns = array(
    'cb'           => '<input type="checkbox" />',
    'title'        => 'Title',
    'subtitle'     => 'Subtitle',
    'categories'   => 'Categories',
    'date'         =>  'Date',
  );
  return $columns;
}

add_action( 'manage_guides_posts_custom_column', 'mysite_custom_columns', 10, 2 );
add_action( 'manage_conseils_posts_custom_column', 'mysite_custom_columns', 10, 2 );
add_action( 'manage_carnets_posts_custom_column', 'mysite_custom_columns', 10, 2 );

function mysite_custom_columns( $column ) {

  global $post;

  switch ( $column ) {
    case 'subtitle':
      echo get_field( "subtitle", $post->ID );
      break;
  }

}

*/

/*--------------------------------------------------------------------------------
    list categories to custom post type
--------------------------------------------------------------------------------*/
add_filter( 'terms_clauses', 'jdn_post_type_terms_clauses', 10, 3 );
function jdn_post_type_terms_clauses( $clauses, $taxonomy, $args ) {
 // Make sure we have a post_type argument to run with.
 if( !isset( $args['post_type'] ) || empty( $args['post_type'] ) )
 return $clauses;
 
 global $wpdb;
 // Setup the post types in an array
 $post_types = array();
 
 // If the argument is an array, check each one and cycle through the post types
 if( is_array( $args['post_type'] ) ) {
 
 // All possible, public post types
 $possible_post_types = get_post_types( array( 'public' => true ) );
 
 // Cycle through the post types, add them to our array if they are public
 foreach( $args['post_type'] as $post_type ) {
 if( in_array( $post_type, $possible_post_types ) )
 $post_types[] = "'" . esc_attr( $post_type ) . "\'";
 }
 
 // If the post type argument is a string, not an array
 } elseif( is_string( $args['post_type'] ) ) {
 $post_types[] = "'" . esc_attr( $args['post_type'] ) . "'";
 }
 // If we have valid post types, build the new sql
 if( !empty( $post_types ) ) {
 $post_types_string = implode( ',', $post_types );
 $fields = str_replace( 'tt.*', 'tt.term_taxonomy_id, tt.term_id, tt.taxonomy, tt.description, tt.parent', $clauses['fields'] );
 
 $clauses['fields'] = 'DISTINCT ' . esc_sql( $fields ) . ', COUNT(t.term_id) AS count';
 $clauses['join'] .= ' INNER JOIN ' . $wpdb->term_relationships . ' AS r ON r.term_taxonomy_id = tt.term_taxonomy_id INNER JOIN ' . $wpdb->posts . ' AS p ON p.ID = r.object_id';
 $clauses['where'] .= ' AND p.post_type IN (' . $post_types_string . ')';
 $clauses['orderby'] = 'GROUP BY t.term_id ' . $clauses['orderby'];
 }
 return $clauses;
}

function register_my_menus() {
  register_nav_menus(
    array(
      'footer-menu' => __( 'Footer Menu' ),
      'nav-menu' => __( 'Nav Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );


/*--------------------------------------------------------------------------------
    ACF Block
--------------------------------------------------------------------------------*/

function wds_gutenberg_assets() {
  wp_enqueue_style( 'wds-gutenberg-admin', get_stylesheet_directory_uri() . '/gutenberg.css', array(), '1.0.0' );
}
add_action( 'enqueue_block_assets', 'wds_gutenberg_assets' );

/*
add_filter( 'allowed_block_types', 'misha_allowed_block_types' );
 
function misha_allowed_block_types( $allowed_blocks ) {
 
  return array(
    'core/heading',
    'core/paragraph'
  );
 
}
*/

add_action('acf/init', 'my_acf_init');
function my_acf_init() {
  
  // check function exists
  if( function_exists('acf_register_block') ) {
    
    
    // register Quote block
    acf_register_block(array(
      'name'        => 'big-title',
      'title'       => __('Big Title'),
      'description'   => __('A custom pig title block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-quote',
      'keywords'      => array( 'intro', 'quote', 'text' ),
    ));
    // register Image Full block
    acf_register_block(array(
      'name'        => 'image-full',
      'title'       => __('Image Full'),
      'description'   => __('A custom Image full block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'full', 'picture' ),
    ));
    // register Image Full Split block
    acf_register_block(array(
      'name'        => 'image-full-split',
      'title'       => __('Image Full Split'),
      'description'   => __('A custom Image full Split block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'full', 'picture', 'split' ),
    ));
    // register Deux tiers un tiers block
    acf_register_block(array(
      'name'        => 'image-deux-tiers-',
      'title'       => __('Image Deux Tiers'),
      'description'   => __('A custom image block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'deux tiers'),
    ));
    // register One Image block
    acf_register_block(array(
      'name'        => 'image-one',
      'title'       => __('One Image'),
      'description'   => __('A custom Image block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'one', 'one image' ),
    ));
    // register Two Image block
    acf_register_block(array(
      'name'        => 'image-two',
      'title'       => __('Two Image'),
      'description'   => __('A custom Image block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'two', 'two image' ),
    ));
    // register Three Image block
    acf_register_block(array(
      'name'        => 'image-three',
      'title'       => __('Three Image'),
      'description'   => __('A custom Image block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'three', 'three image' ),
    ));
    // register Paragraph block
    acf_register_block(array(
      'name'        => 'paragraph',
      'title'       => __('Paragraph'),
      'description'   => __('A custom paragraph block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'editor-alignleft',
      'keywords'      => array( 'paragraph', 'text' ),
    ));
    // register Title block
    acf_register_block(array(
      'name'        => 'title',
      'title'       => __('Title'),
      'description'   => __('A custom title block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'editor-bold',
      'keywords'      => array( 'paragraph', 'text' ),
    ));
    // register Slider block
    acf_register_block(array(
      'name'        => 'slider',
      'title'       => __('Slider'),
      'description'   => __('A custom Slider block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'Slider', 'Gallery' ),
    ));
    // register Separator block
    acf_register_block(array(
      'name'        => 'separator',
      'title'       => __('Separator'),
      'description'   => __('A custom Separator block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'separator'),
    ));
  }
}

function my_acf_block_render_callback( $block ) {
  
  // convert name ("acf/testimonial") into path friendly slug ("testimonial")
  $slug = str_replace('acf/', '', $block['name']);
  
  // include a template part from within the "template-parts/block" folder
  if( file_exists( get_theme_file_path("/assets/views/template-parts/block/content-{$slug}.php") ) ) {
    include( get_theme_file_path("/assets/views/template-parts/block/content-{$slug}.php") );
  }
}