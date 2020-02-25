/*
    Mouse 

var buttonlove = document.getElementsByTagName("button");
for (var bl=0; bl < buttonlove.length; bl++) {
    buttonlove.item(bl).setAttribute("data-mouse", "heart");
}

var menulove = document.getElementsByClassName("menu-item");
for (var ml=0; ml < menulove.length; ml++) {
    menulove.item(ml).setAttribute("data-mouse", "wink");
}
*/
var mouseLoad       = 0;
var mouse           = document.getElementById('mouse');
var mouses          = document.querySelectorAll('[data-mouse]');
for (var me=0; me < mouses.length; me++) {  
    
    mouses.item(me).onmouseover = function(){
        mouse.classList.add("hovert");
        
        if ( this.dataset.mouse === 'plus' ){
            mouse.classList.add("plus");
            //lottie.play("Mouse wink");
        }
        
        else if ( this.dataset.mouse === 'heart' ){
            mouse.classList.add("heart");
            mouse.classList.remove("inload", "wink", "laugh", "pointer", "grabber");
            //lottie.play("Mouse heart");
        }
        
        else if ( this.dataset.mouse === 'laugh' ){
            mouse.classList.add("laugh");
            mouse.classList.remove("inload", "wink", "heart", "pointer", "grabber");
            //lottie.play("Mouse laugh");
        }
        
        else if ( this.dataset.mouse === 'pointer' ){
            mouse.classList.add("pointer");
            mouse.classList.remove("inload", "wink", "heart", "laugh", "grabber");
           // lottie.play("Mouse pointer");
        }
        
        else if ( this.dataset.mouse === 'grabber' ){
            mouse.classList.add("grabber");
            mouse.classList.remove("inload", "wink", "heart", "laugh", "pointer");

        }
    }
    
    mouses.item(me).onmouseout = function(){
        mouse.classList.remove("hovert");
        
    }   
}

function followCursor(event){
    mouse.style.left        = event.clientX+'px';
    mouse.style.top         = event.clientY+'px';
    
    if (mouseLoad === 0){
        mouse.classList.add("inload");
        mouseLoad = 1;
    }
}

document.body.onmousemove = followCursor;
