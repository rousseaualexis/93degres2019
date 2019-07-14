<?php
$page_id = '5748305008';

$access_token = '5748305008.1677ed0.8a7a9cfb55b04e339e089cf75ce45f36';
$json_object = @file_get_contents('https://api.instagram.com/v1/users/' . $page_id . 
'/media/recent/?access_token=' . $access_token . '&count=4');
$indata = json_decode($json_object);
// for low res echo $indata->data[0]->images->low_resolution->url; 
// echo $indata->data[0]->images->thumbnail->url;      //for thumbnail
//for standard res echo $indata->data[0]->images->standard_resolution->url; 
// for low res echo $indata->data[1]->images->low_resolution->url; 
// echo $indata->data[1]->images->thumbnail->url;      //for thumbnail
//for standard res echo $indata->data[1]->images->standard_resolution->url; 
// for low resecho $indata->data[2]->images->low_resolution->url; 
// echo $indata->data[2]->images->thumbnail->url;      //for thumbnail
//for standard res echo $indata->data[2]->images->standard_resolution->url; 
// for low res echo $indata->data[3]->images->low_resolution->url; 
// echo $indata->data[3]->images->thumbnail->url;      //for thumbnail
//for standard res echo $indata->data[3]->images->standard_resolution->url; 
?>
<div id="instagram" class="container col-xs-42 col-xs-offset-3">
    <h3 class="col-xs-48">Actuellement sur Instagram</h3>
    <ul class="scroll-reveal instagram_shots">
        <li class="anime">
            <a href="<?php echo $indata->data[0]->link; ?>" class="instalink" target="_blank">
                <img src="<?php echo $indata->data[0]->images->standard_resolution->url; ?>" />
            </a>
        </li>
        <li class="anime">
            <a href="<?php echo $indata->data[1]->link; ?>" class="instalink" target="_blank">
                <img src="<?php echo $indata->data[1]->images->standard_resolution->url; ?>" />
            </a>
        </li>
        <li class="anime">
            <a href="<?php echo $indata->data[2]->link; ?>" class="instalink" target="_blank">
                <img src="<?php echo $indata->data[2]->images->standard_resolution->url; ?>" />
            </a>
        </li>
        <li class="anime">
            <a href="<?php echo $indata->data[3]->link; ?>" class="instalink" target="_blank">
                <img src="<?php echo $indata->data[3]->images->standard_resolution->url; ?>" />
            </a>
        </li>
    </ul>
    <a href="https://www.instagram.com/93.degres/" target="_blank"><div class="cta">Suivez-nous</div></a>
</div>
