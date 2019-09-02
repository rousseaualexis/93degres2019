<div id="comments" class="col-xs-18">
    <div class="col-xs-12 col-xs-offset-1 col-sm-8 col-sm-offset-5">
        <?php
            if (comments_open() || get_comments_number()): comments_template();
            endif;
        ?>
    </div>
</div>