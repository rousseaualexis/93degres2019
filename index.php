<?php
/*
Template Name: Homepage
*/
?>
<?php include'head.php'; ?>
<body class="homepage">
<?php get_header(); ?>
<div class="container">
    <div class="row">
    <div class="h1 col-xs-10 col-xs-offset-1">Trois jours à la découverte de <span>New&nbsp;York</span></div>
    </div>
</div>
<?php get_footer(); ?>
<script type="text/javascript">
Marquee3k.init();Marquee3k.refreshAll();
$(function(){$('.auto-slide').infiniteslide({
    speed: 50,
    direction: 'left',
    clone: 2,
    pauseonhover: false

})});


</script>
<?php include'end.php'; ?>
