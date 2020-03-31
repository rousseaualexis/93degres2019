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
        
        if ( this.dataset.mouse === 'size' ){
            mouse.classList.add("mouse--size");
            mouse.classList.remove("mouse--discover");
            //lottie.play("Mouse wink");
        }
        
        else if ( this.dataset.mouse === 'discover' ){
            mouse.classList.add("mouse--discover");
            mouse.classList.remove("mouse--size");
            //lottie.play("Mouse heart");
        }

    }
    
    mouses.item(me).onmouseout = function(){
        mouse.classList.remove("hovert");
        
    }   
}

function followCursor(event){

    var curX = event.clientX;
    var curY = event.clientY;

    mouse.style.transform = "translate(calc(" + curX + "px - 50vw),calc(" + curY + "px - 50vh))";

    if (mouseLoad === 0){
        mouse.classList.add("inload");
        mouseLoad = 1;
    }
}

document.body.onmousemove = followCursor;
