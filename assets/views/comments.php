<div id="comments" class="col-xs-48">
    <div class="col-xs-42 col-xs-offset-3 col-sm-32 col-sm-offset-8 col-md-24 col-md-offset-12  ">
        <?php
            if (comments_open() || get_comments_number()): comments_template();
            endif;
        ?>
    </div>
</div>