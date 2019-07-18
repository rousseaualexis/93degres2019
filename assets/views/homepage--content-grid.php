<?php if ('articles' === get_post_type()): ?>
    <div class="col-xs-5 col-xs-offset-1">
            <?php
                $thumbnail = get_field('thumbnail');
                $thumbnail_url = $thumbnail['sizes']['thumbnail'];
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
                <div class="image image--3-2 image_thumbnail" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
                    <div class="image_thumbnail--hover">
                        
                    </div>
                </div>
            </a>
                <span class="categories h4"><img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ ><?php echo $term_name; ?> — <?php the_time(get_option('date_format')); ?>
                </span>
                <a href="<?php the_permalink(); ?>">
                <h1><?php the_title(); ?><?php if(!empty(get_field('subtitle'))){echo '<br><span>' . get_field('subtitle') . '</span>';}?></h1>
                <p><?php echo get_field('summary'); ?></p>
                </a>
    </div>
<?php endif; ?>
