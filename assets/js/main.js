// ===================================== INITIAL ===================================== //
var tools = (function() { 

    /**
     * Check if device is desktop
     */
    var isDesktop = function() {
        return ($(window).width() >= 992);
    }

    /**
     * Check if device is tablet
     */
    var isTablet = function() {
        return ($(window).width() < 992 && $(window).width() >= 768);
    }

    /**
     * Check if device is smartphone
     */
    var isSmartphone = function() {
        return ($(window).width() < 768);
    }

    /**
     * Check if device is handheld
     */
    var isTabletOrSmart = function() {
        return (isTablet() || isSmartphone());
    }

    var scrollPos = {
        y:$(window).scrollTop(),
        x:0
    }

  return {
        isDesktop: isDesktop,
        isTablet: isTablet,
        isSmartphone: isSmartphone,
    }


})();
var site = (function() { 

    /*  =============================================================================
        PRELOADER
    ============================================================================== */

    /**
     * Show preloader
     */
    var showPreloader = function() {

        var tl = new TimelineLite();

        tl.staggerTo($(".mask"), 1, {y:"-100%", ease:Expo.easeOut, delay:0.75, onComplete:function(){
        
            $(".mask").remove();
        }});
        tl.staggerFrom($('header'), 1.5 , {y:'200%', ease:Expo.easeOut}, 0, 1);
        tl.staggerFrom($('.container'), 1.5 , {y:'10%', ease:Expo.easeOut}, 0, 0.8);

        setTimeout(function(){
            init();
        }, 100);
    }

    var init = function() {

        onClick();
        pageInit();
    }


    var onClick = function() {
        $("body").on("click", "a", function(e){
        var url = $(this).attr('href');
        var isblank = this.target === '_blank';
        // check if the link has a hash
                if (isblank) {
                e.preventDefault();
                // if the link has only "#"
                window.open(url);
                return;

            }
            else{     
                e.preventDefault();  
                mask = $("<div/>").appendTo("body").addClass("mask");
                var tl = new TimelineLite();
    
                    tl.staggerFrom(mask, 0.5, {display: "none", top: "100%", ease:Expo.easeOut, onComplete:function(){
                        setTimeout(function(){ 
                            window.location = url;
                        }, 200, url);
                    }}, 0, 0.2);

                    tl.staggerTo($('.container'), 2, {y:'-5%', ease:Expo.easeOut}, 0, 0.2);
                    tl.staggerTo($('header'), 3, {y:'-400%', ease:Expo.easeOut}, 0, 0.2); 
            }
        });
            $("#mobile-menu").on('click', function() {
            $('.menu-principal-container').toggleClass('active-menu');
            $('.rotate').toggleClass('active-menu');
        });
    }

    /**
     * Init page
     */
    var pageInit = function() {
        setTimeout(function(){
            allModules();
        }, 200);
    }


    /*============================================================
            Events
    ============================================================== */

    


 /*  =============================================================================
        MODULES INIT - Les modules à lancer à chaque fois qu'une page est chargée
    ============================================================================== */

  var allModules = function() {

        scrollReveal();
    

    }



 /*  =============================================================================
        MODULES
    ============================================================================== */

    /*
    var navItem = function(){

        var $el = $('#header'),
            $text = $('.menu a'),
            split = new SplitText($text,{charsClass: 'charsplit', wordsClass: 'wordsplit'}),
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.wordsplit'), 1.2, {y:'400%', ease:Power4.easeOut}, 0.03, 1);
        }



    var randomize = function(){
        var tl = new TimelineLite();
        $( '.randomize' ).each(function() {
            var minRotate = -45,
            maxRotate = 45,
            randomX = Math.floor( Math.random() * 100 ) + "%",
            randomY = Math.floor( Math.random() * 100 ) + "%",
            degree = Math.floor(Math.random()*( maxRotate - minRotate + 1 ) + minRotate);
            tl.to($(this), 0.1, {rotation:degree, y:randomY, x:randomX, ease:Power2.easeOut}, 0.1);
        })
    }
 */

    var cursor = function() {
            

    }


    var scrollReveal = function() {
        //get viewport size
        var windowHeight = $(window).innerHeight(),
            windowWidth = $(window).width(),
            initialScroll = $(window).scrollTop(),
            items = $('.scroll-reveal'),
            bottomScreen = initialScroll + windowHeight
            scroll;
        //hide anything not in the viewport
        items.each(function(){
            if( (bottomScreen - 35) > $(this).offset().top){
                var $self = $(this);
                setTimeout(function(){
                    $self.trigger('reveal');
                    $self.addClass('scroll-reveal--revealed')
                }, 400);
            }
        });
        //on scroll
        $(window).scroll(function (event) {
            //get the current scroll position
            scroll = $(window).scrollTop();
            items.each( function(){
            //show anything that is now in view (scroll + windowHeight)
            var $self = $(this);
            if ($self.hasClass('scroll-reveal--revealed')) {
                        return;
                    }
            var offsetTop = $self.offset().top;
            if (scroll + windowHeight >= offsetTop) {
                $self.trigger('reveal');
                $self.addClass('scroll-reveal--revealed')
                        }   
            });
         });
    }

    return {
        showPreloader: showPreloader
    }
})();

var homepage = (function() {
    
    var init = function() {
        firstPost();
        /*$('body').on('reveal', '.scroll-reveal', scrollRevealHandler);*/
    }
/*
    var scrollRevealHandler = function(){
        var $el = $(this);

        if ($el.hasClass('scroll-reveal--revealed'))
            return;

        if ($el.is('#other_articles')) {
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.item__img'), 0.8, {backgroundSize:'contain', ease:Expo.easeInOut}, 0.2, 0.4);
        }

        else if ($el.is('#destinations h5')) {
            var split = new SplitText($el,{charsClass: "charsplit", wordsClass: "wordsplit"});
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.charsplit'), 1.2, {y:'200%', ease:Power4.easeOut}, 0.04, 0.2);
        }

        else if ($el.is('#destinations li')) {
            tl = new TimelineLite();
            tl.staggerFrom($el, 1.8, {y:'250%', ease:Power4.easeOut}, 0.12, 0);
        }

        else if ($el.is('#about h2')) {
            var split = new SplitText($el,{charsClass: "charsplit", wordsClass: "wordsplit"});
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.wordsplit'), 1, {y:'200%', ease:Power4.easeOut}, 0.05, 0.2);
        }
        else if ($el.is('.instagram_shots')) {
            tl = new TimelineLite();
            tl.staggerFrom($el.find('li'), 1.8, {y:'250%', ease:Power4.easeOut}, 0.12, 0);
        }
    }
*/
    var firstPost = function(){
        var $el = $('#homepage--cover'),
            $text = $("#homepage--cover .h1"),
            $line = $("#homepage--cover .h1 .line");
        var tl = new TimelineLite();
            $('br').remove();
            tl.staggerFrom($el.find('.line'), 1.5, {y:'500%', ease:Expo.easeOut}, 0.1, 0.6);
            tl.staggerFrom($el.find('.categories'), 1.5, {y:'200vh', ease:Expo.easeOut}, 0.15, 0.9);
            tl.staggerFrom($el.find('.cta--circle'), 1.5, {y:'300%', ease:Expo.easeOut}, 0.15, 0.9);
            tl.staggerFrom($el.find('#homepage--cover--image'), 1.5, {y:'150%', ease:Expo.easeOut}, 0.15, 0.9);
            tl.staggerFrom($('.push-article'), 1.5, {y:'300%', ease:Expo.easeOut}, 0.1, 0.9);
            tl.staggerFrom($('#more_articles').find('.h2'), 1.5, {y:'300%', ease:Expo.easeOut}, 0.1, 0.9);
            tl.staggerFrom($('#more_articles').find('.cta--circle'), 1.5, {y:'300%', ease:Expo.easeOut}, 0.1, 0.9);
    }

    return {
            init: init
    }
})();

var archive = (function() {
    
    var init = function() {
        top();
        $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
    }

    var top = function(){     
        var $grid_element = $('.grid__articles'),
            $sousCat = $('.list-sous-cat')
        var tl = new TimelineLite();
            tl.staggerFrom($grid_element, 1.5, {y:'20%', ease:Expo.easeOut}, 0.1, 0.6);
    }
/*
    var scrollRevealHandler = function(){
        var $el = $(this);

        if ($el.hasClass('scroll-reveal--revealed'))
            return;

        if ($el.is('.grid')) {
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'250%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
            /*$('.post').each(function(index, element){
                if ($('.post').hasClass('scroll-reveal--revealed'))
                    return false;
                else{tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
                }  
            })
        }
    }
*/
    return {
            init: init
    }
})();
/*
var destinations = (function() {
    
    var init = function() {
        top();
        $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
    }

    var top = function(){     
        var $coverDestinations = $('#cover-container-text h1'),
            $sousCat = $('.list-sous-cat'),
            split = new SplitText($coverDestinations,{charsClass: "charsplit", wordsClass: "wordsplit"});
        var tl = new TimelineLite();

            tl.staggerFrom($coverDestinations.find('.charsplit'), 1.2, {y:'300%', ease:Power4.easeOut}, 0.02, 0.6);
            tl.from($sousCat, 0.8, {y: '400%', ease:Power2.easeOut}, '-=0.8');
    }

    var scrollRevealHandler = function(){
        var $el = $(this);

        if ($el.hasClass('scroll-reveal--revealed'))
            return;

        if ($el.is('.grid')) {
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'250%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
        }
    }

    return {
            init: init
    }
})();

*/

var allDestinations = (function() {
    
    var init = function() {
        top();
    }

    var top = function(){     
        var $big_title = $('.big_title');
        var tl = new TimelineLite();
            tl.staggerFrom($big_title, 1.5, {y:'250%', ease:Expo.easeOut}, 0.15, 0.6);
    }
    return {
            init: init
    }
})();
/*
var single = (function() {
    
    var init = function() {
        introduction();
        $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
    }

    var introduction = function(){
        var $title = $(".h1"),
        $categories = $("#introduction .categories"),
        $categoriesImg = $("#introduction .categories img");
       

            


            
    }


    $(window).bind('scroll',function(e){
        parallaxScroll();
    });

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('#date').css({"transform" : "translateY(" + (0-(scrolled* 1.2))+"px)"});
        $('#country-code').css({"transform":"translateY(" + (0-(scrolled* 0.9))+"px)"});
    
    }

    var scrollRevealHandler = function(){
        var $el = $(this);

        if ($el.hasClass('scroll-reveal--revealed'))
            return;

        if ($el.is('.deux-tiers')) {
            tl = new TimelineLite();
            tl.from($el, 1.8, {alpha: 0, y:'100%', ease:Power4.easeOut}, 0.2);
        }

        else if ($el.is('.un-tiers')) {
            tl = new TimelineLite();
            tl.from($el, 1.8, {alpha: 0, y:'100%', ease:Power4.easeOut}, 0.2);
        }

        else if ($el.is('#introduction__thumbnail .image')) {    
            tl = new TimelineLite();
            tl.from($el, 1.8, {alpha: 0, y:'100%', ease:Power4.easeOut}, 0.2);
        }

        else if ($el.is('.full-width blockquote')) {
            var splitQuote = new SplitText($el,{charsClass: "charsplit", wordsClass: "wordsplit"});  
            tl = new TimelineLite();
            tl.staggerFrom($el.find('>div'), 1.5, {y:'250%', ease:Power4.easeOut}, 0.1, 0.3);
        }

        else if ($el.is('.grid')) {
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'250%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
        }
    }

    return {
            init: init
        }
})();

*/
/*
var about = (function() {
    
    var init = function() {
        summary();
        $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
    }

    var summary = function(){
        var $title = $(".about--content h1"),
        $social = $("#social"),
        $summary = $("#summary p");
        $contact = $("#contact");
        var splitTitle = new SplitText($title,{charsClass: "charsplit", wordsClass: "wordsplit"});
        var $summaryline = $("#summary > div");
            var tl = new TimelineLite();
            tl.staggerFrom($title.find('.charsplit'), 1.2, {y:'250%', ease:Power4.easeOut}, 0.05, 0.6);
    }

    var scrollRevealHandler = function(){
        var $el = $(this);

        if ($el.hasClass('scroll-reveal--revealed'))
            return;

        if ($el.is('.instagram_shots')) {
            tl = new TimelineLite();
            tl.staggerFrom($el.find('li'), 1.8, {y:'250%', ease:Power4.easeOut}, 0.12, 0);
            $('.post').each(function(index, element){
                if ($('.post').hasClass('scroll-reveal--revealed'))
                    return false;
                else{tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
                }  
            })
        }
    }


    return {
        init: init
    }

})


();
*/
// Launch site
window.onload = function(){

    site.showPreloader();


    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        var element = document.getElementById('text');
        if (isMobile) {
            //Do nothing
        } else {
            //SmoothScroll();
        };
  
    
    if( $('body').hasClass('page--homepage') === true ) {

        setTimeout(function(){
            homepage.init();
        }, 200);
    };

    if( $('body').hasClass('page--destinations') === true ){
        setTimeout(function(){
            allDestinations.init();
        }, 200);
    };


    
    if( $('body').hasClass('page--archive') === true ){

        setTimeout(function(){
            archive.init();
        }, 200);
    };

    /*

    if( $('body').hasClass('destinations') === true ){

        setTimeout(function(){
            destinations.init();
        }, 200);
    };
    

    if( $('body').hasClass('page--single') === true ){
        setTimeout(function(){
            single.init();
        }, 200);
    };

    if( $('body').hasClass('about') === true ){

        setTimeout(function(){
            about.init();
        }, 200);
    };
    */
}