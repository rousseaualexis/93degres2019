<?php include'head.php'; ?>
<body class="page--category">
<main>
<?php get_header(); ?>
<div data-scroll>
    <div class="container display">
    <p>
        Screen X: <span class="clientX">0</span>
        <br>
        Screen Y: <span class="clientY">0</span>        
    </p>
    <p>
        Offset X: <span class="offsetX">0</span>
        <br>
        Offset Y: <span class="offsetY">0</span>        
    </p>
</div>


<!-- <div class="container half">
    <h3>I'm empty, roll over the bellow containers.</h3>
</div> -->


<div class="container parent">
    <div class="follower">
        <p>0</p>
    </div>
</div>

<div class="container parent">
    <div class="follower">
        <p>0</p>
    </div>
</div>


</div>
<?php get_footer(); ?>
<?php include'end.php' ?>