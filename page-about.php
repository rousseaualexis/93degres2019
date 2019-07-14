<?php
/*
Template Name: À propos
*/
?>
<?php include'head.php'; ?>
<body class="about">
<?php get_header(); ?>
<div class="about--content col-xs-48">
<h1 id="introduction-title">À propos</h1>

<?php $summary = get_field('summary'); ?>

<div id="summary" class="col-xs-42 col-xs-offset-3 col-sm-18 col-sm-offset-24">
    <?php echo $summary; ?>
</div>
<div id="contact" class="col-xs-42 col-xs-offset-3 col-sm-18 col-sm-offset-24">
    <h3>Contact</h3>
    <p>hello93degres [at] gmail.com</p>
</div>
<div id="social" class="col-xs-42 col-xs-offset-3 col-sm-18 col-sm-offset-24">
    <h3>Social</h3>
    <p><a href="" target="_blank">Twitter</a></p>
    <p><a href="https://www.instagram.com/93.degres/" target="_blank">Instagram</a></p>
</div>
</div>

<?php include'assets/views/content-instagram.php'; ?>

<?php get_footer(); ?>
<?php include'end.php' ?>