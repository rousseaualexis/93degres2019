<?php if ('guides' === get_post_type()): ?>
    <div class="post post--guide col-xs-42 col-xs-offset-3 col-md-15 col-md-offset-1">
            <?php
                $thumbnail = get_field('thumbnail');
                $thumbnail_url = $thumbnail['sizes']['thumbnail'];
                $id = get_the_id();
                $terms = get_the_terms( $id, 'category' );
                if (isset($terms)){
                    foreach($terms as $term) {
                        $destination_code = get_field('destination_code', $term);
                        $flag = get_field('flag', $term);
                        $flag_url = $flag['sizes']['thumbnail'];
                        $term_url = get_term_link($term);
                        $term_name = $term->name;
                    }}
            ?>  
            <a href="<?php the_permalink(); ?>">
                <div class="image image--3-2 image_thumbnail" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
                    <div class="image_thumbnail--hover">
                        <div class="table">
                            <div class="table-cell">&#x1F441</div>
                        </div>
                        <div class="country-code">
                            <h5 class="randomize"><?php echo $destination_code; ?></h5>
                        </div>
                        <div class="label">
                            <img class="randomize" src="<?php bloginfo('template_url') ?>/assets/img/label__nos-petites-adresses.svg"/>
                        </div>
                        <div class="date">
                            <h5 class="randomize"> <?php the_time(get_option('date_format')); ?></h5>
                        </div>
                    </div>
                </div>
            </a>
                <a class="categories" href="<?php echo $term_url; ?>"><img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ ><?php echo $term_name; ?></a>
                <a href="<?php the_permalink(); ?>">
                <h1><?php the_title(); ?><?php if(!empty(get_field('subtitle'))){echo '<br><span>' . get_field('subtitle') . '</span>';}?></h1>
                <p><?php echo get_field('summary'); ?></p>
                </a>
    </div>
<?php elseif ('conseils' === get_post_type()): ?>
    <div class="post post--conseil col-xs-42 col-xs-offset-3 col-md-15 col-md-offset-1">
            <?php
                $thumbnail = get_field('thumbnail');
                $thumbnail_url = $thumbnail['sizes']['thumbnail'];
                $id = get_the_id();
                $terms = get_the_terms( $id, 'category' );
                    foreach($terms as $term) {
                        $destination_code = get_field('destination_code', $term);
                        $flag = get_field('flag', $term);
                        $flag_url = $flag['sizes']['thumbnail'];
                        $term_url = get_term_link($term);
                        $term_name = $term->name;
                    }
            ?>  
            <a href="<?php the_permalink(); ?>">
                <div class="image image--3-2 image_thumbnail" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
                    <div class="image_thumbnail--hover">
                        <div class="table">
                            <div class="table-cell">&#x1F441</div>
                        </div>
                        <div class="country-code">
                            <h5 class="randomize"><?php echo $destination_code; ?></h5>
                        </div>
                        <div class="label">
                            <img class="randomize" src="<?php bloginfo('template_url') ?>/assets/img/label__conseils.svg"/>
                        </div>
                        <div class="date">
                            <h5 class="randomize"> <?php the_time(get_option('date_format')); ?></h5>
                        </div>
                    </div>
                </div>
            </a>
                <a class="categories" href="<?php echo $term_url; ?>"><img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ ><?php echo $term_name; ?></a>
                <a href="<?php the_permalink(); ?>">
                <h1><?php the_title(); ?><?php if(!empty(get_field('subtitle'))){echo '<br><span>' . get_field('subtitle') . '</span>';}?></h1>
                <p><?php echo get_field('summary'); ?></p>
                </a>
    </div>
<?php elseif ('carnets' === get_post_type()): ?>
    <div class="post post--article col-xs-42 col-xs-offset-3 col-md-15 col-md-offset-1">
            <?php
                $thumbnail = get_field('thumbnail');
                $thumbnail_url = $thumbnail['sizes']['thumbnail'];
                $id = get_the_id();
                $terms = get_the_terms( $id, 'category' );
                    foreach($terms as $term) {
                        $destination_code = get_field('destination_code', $term);
                        $flag = get_field('flag', $term);
                        $flag_url = $flag['sizes']['thumbnail'];
                        $term_url = get_term_link($term);
                        $term_name = $term->name;
                    }
            ?>  
            <a href="<?php the_permalink(); ?>">
                <div class="image image--3-2 image_thumbnail" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
                    <div class="image_thumbnail--hover">
                        <div class="table">
                            <div class="table-cell">&#x1F441</div>
                        </div>
                        <div class="country-code">
                            <h5 class="randomize"><?php echo $destination_code; ?></h5>
                        </div>
                        <div class="label">
                            <img class="randomize" src="<?php bloginfo('template_url') ?>/assets/img/label__carnets-de-voyage.svg"/>
                        </div>
                        <div class="date">
                            <h5 class="randomize"> <?php the_time(get_option('date_format')); ?></h5>
                        </div>
                            
                    </div>
                </div>
               
            </a>
            <a class="categories" href="<?php echo $term_url; ?>"><img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/ ><?php echo $term_name; ?></a>
            <a href="<?php the_permalink(); ?>">  
                <h1><?php the_title(); ?><?php if(!empty(get_field('subtitle'))){echo '<br><span>' . get_field('subtitle') . '</span>';}?></h1>
                <p><?php echo get_field('summary'); ?></p>
            </a>
    </div>
<?php endif; ?>
