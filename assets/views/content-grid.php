<?php if ('articles' === get_post_type()): ?>
    <div class="item push-article col-xs-16 col-xs-offset-1 col-sm-6 col-sm-offset-1">
            <?php
                $thumbnail = get_field('thumbnail');
                $thumbnail_url = $thumbnail['sizes']['large'];
                $id = get_the_id();
                $terms = get_the_terms( $id, 'category' );
                if (isset($terms)){
                    foreach($terms as $term) {
                        $flag = get_field('flag', $term);
                        $flag_url = $flag['sizes']['large'];
                        $term_url = get_term_link($term);
                        $term_name = $term->name;
                    }}
            ?>  
            <a href="<?php the_permalink(); ?>">
                <div class="item__img-wrap">
                <div class="item__img" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
                </div></div>
                            
            </a>

                <div class="categories"><img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ ><span><?php echo $term_name; ?> — <?php the_time('d.m.Y'); ?></span></div>
                <a href="<?php the_permalink(); ?>">
                <span class="h3"><?php the_title(); ?><?php if(!empty(get_field('subtitle'))){echo '<br><span>' . get_field('subtitle') . '</span>';}?></span>
                </a>
    </div>
<?php endif; ?>
