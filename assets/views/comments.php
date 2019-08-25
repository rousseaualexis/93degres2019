<div id="comments" class="col-xs-48">
    <div class="col-xs-12 col-xs-offset-1 col-sm-6 col-sm-offset-4">
        <?php
            if (comments_open() || get_comments_number()): comments_template();
            endif;
        ?>
    </div>
</div>