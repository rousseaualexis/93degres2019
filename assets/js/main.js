
// ====================================== RANDOMIZE ================================== //
/*$( document ).ready(function() {
    $( '.randomize' ).each(function() {
        $minRotate = -45;
        $maxRotate = 45;
        $holder    = $(this).parent();
        $divWidth  = $holder.width() * 0.15;
        $divHeight = $holder.height()* 0.15;
        $degree = Math.floor(Math.random()*( $maxRotate - $minRotate + 1 ) + $minRotate);

           $(this).css({
                "position" : "absolute",
                "left": Math.floor( Math.random() * 100 ) + "%",
                "top" : Math.floor( Math.random() * 100 ) + "%",
                "-webkit-transform": "rotate(" + $degree + "deg)",
                "-moz-transform": "rotate(" + $degree + "deg)",
                "-ms-transform": "rotate(" + $degree + "deg)",
                "-o-transform": "rotate(" + $degree + "deg)",
                "transform": "rotate(" + $degree + "deg)"
           });        
    })
});
*/
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







{
    // helper functions
    const MathUtils = {
        // map number x from range [a, b] to [c, d]
        map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b
    };

    // body element
    const body = document.body;
    
    // calculate the viewport size
    let winsize;
    const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
    calcWinsize();
    // and recalculate on resize
    window.addEventListener('resize', calcWinsize);

    // scroll position and update function
    let docScroll;
    const getPageYScroll = () => docScroll = window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener('scroll', getPageYScroll);

    // Item
    class Item {
        constructor(el) {
            // the .item element
            this.DOM = {el: el};
            // the inner image
            this.DOM.image = this.DOM.el.querySelector('.item__img');
            this.renderedStyles = {
                // here we define which property will change as we scroll the page and the items is inside the viewport
                // in this case we will be translating the image on the y-axis
                // we interpolate between the previous and current value to achieve a smooth effect
                innerTranslationY: {
                    // interpolated value
                    previous: 0, 
                    // current value
                    current: 0, 
                    // amount to interpolate
                    ease: 0.1,
                    // the maximum value to translate the image is set in a CSS variable (--overflow)
                    maxValue: parseInt(getComputedStyle(this.DOM.image).getPropertyValue('--overflow'), 10),
                    // current value setter
                    // the value of the translation will be:
                    // when the item's top value (relative to the viewport) equals the window's height (items just came into the viewport) the translation = minimum value (- maximum value)
                    // when the item's top value (relative to the viewport) equals "-item's height" (item just exited the viewport) the translation = maximum value
                    setValue: () => {
                        const maxValue = this.renderedStyles.innerTranslationY.maxValue;
                        const minValue = -1 * maxValue;
                        return Math.max(Math.min(MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, minValue, maxValue), maxValue), minValue)
                    }
                }
            };
            // set the initial values
            this.update();
            // use the IntersectionObserver API to check when the element is inside the viewport
            // only then the element translation will be updated
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => this.isVisible = entry.intersectionRatio > 0);
            });
            this.observer.observe(this.DOM.el);
            // init/bind events
            this.initEvents();
        }
        update() {
            // gets the item's height and top (relative to the document)
            this.getSize();
            // sets the initial value (no interpolation)
            for (const key in this.renderedStyles ) {
                this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
            }
            // translate the image
            this.layout();
        }
        getSize() {
            const rect = this.DOM.el.getBoundingClientRect();
            this.props = {
                // item's height
                height: rect.height,
                // offset top relative to the document
                top: docScroll + rect.top 
            }
        }
        initEvents() {
            window.addEventListener('resize', () => this.resize());
        }
        resize() {
            // on resize rest sizes and update the translation value
            this.update();
        }
        render() {
            // update the current and interpolated values
            for (const key in this.renderedStyles ) {
                this.renderedStyles[key].current = this.renderedStyles[key].setValue();
                this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
            }
            // and translates the image
            this.layout();
        }
        layout() {
            // translates the image
            this.DOM.image.style.transform = `translate3d(0,${this.renderedStyles.innerTranslationY.previous}px,0)`;
        }
    }

    // SmoothScroll
    class SmoothScroll {
        constructor() {
            // the <main> element
            this.DOM = {main: document.querySelector('main')};
            // the scrollable element
            // we translate this element when scrolling (y-axis)
            this.DOM.scrollable = this.DOM.main.querySelector('div[data-scroll]');
            // the items on the page
            this.items = [];
            [...this.DOM.main.querySelectorAll('.content > .item')].forEach(item => this.items.push(new Item(item)));
            // here we define which property will change as we scroll the page
            // in this case we will be translating on the y-axis
            // we interpolate between the previous and current value to achieve the smooth scrolling effect
            this.renderedStyles = {
                translationY: {
                    // interpolated value
                    previous: 0, 
                    // current value
                    current: 0, 
                    // amount to interpolate
                    ease: 0.1,
                    // current value setter
                    // in this case the value of the translation will be the same like the document scroll
                    setValue: () => docScroll
                }
            };
            // set the body's height
            this.setSize();
            // set the initial values
            this.update();
            // the <main> element's style needs to be modified
            this.style();
            // init/bind events
            this.initEvents();
            // start the render loop
            requestAnimationFrame(() => this.render());
        }
        update() {
            // sets the initial value (no interpolation) - translate the scroll value
            for (const key in this.renderedStyles ) {
                this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
            }   
            // translate the scrollable element
            this.layout();
        }
        layout() {
            // translates the scrollable element
            this.DOM.scrollable.style.transform = `translate3d(0,${-1*this.renderedStyles.translationY.previous}px,0)`;
        }
        setSize() {
            // set the heigh of the body in order to keep the scrollbar on the page
            body.style.height = `${this.DOM.scrollable.scrollHeight}px`;
        }
        style() {
            // the <main> needs to "stick" to the screen and not scroll
            // for that we set it to position fixed and overflow hidden 
            this.DOM.main.style.position = 'fixed';
            this.DOM.main.style.width = this.DOM.main.style.height = '100%';
            this.DOM.main.style.top = this.DOM.main.style.left = 0;
            this.DOM.main.style.overflow = 'hidden';
        }
        initEvents() {
            // on resize reset the body's height
            window.addEventListener('resize', () => this.setSize());
        }
        render() {
            // update the current and interpolated values
            for (const key in this.renderedStyles ) {
                this.renderedStyles[key].current = this.renderedStyles[key].setValue();
                this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
            }
            // and translate the scrollable element
            this.layout();
            
            // for every item
            for (const item of this.items) {
                // if the item is inside the viewport call it's render function
                // this will update the item's inner image translation, based on the document scroll value and the item's position on the viewport
                if ( item.isVisible ) {
                    item.render();
                }
            }
            
            // loop..
            requestAnimationFrame(() => this.render());
        }
    }

    /***********************************/
    /********** Preload stuff **********/

    // Preload images
    const preloadImages = () => {
        return new Promise((resolve, reject) => {
            imagesLoaded(document.querySelectorAll('.item__img'), {background: true}, resolve);
        });
    };
    
    // And then..
    preloadImages().then(() => {
        // Remove the loader
        document.body.classList.remove('loading');
        // Get the scroll position
        getPageYScroll();
        // Initialize the Smooth Scrolling
        new SmoothScroll();
    });
}





    /*  =============================================================================
        PRELOADER
    ============================================================================== */

    /**
     * Show preloader
     */
    var showPreloader = function() {

        TweenLite.to($(".mask"), 0.8, {y:"-100%", ease:Power2.easeOut, delay:0.75, onComplete:function(){
        
            $(".mask").remove();
        }});

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
                    tl.from(mask, 0.3, {display: "none", top: "100%", onComplete:function(){
                        setTimeout(function(){ 
                            window.location = url;
                        }, 200, url);
                    }});        
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
        $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
    }

    var scrollRevealHandler = function(){
        var $el = $(this);

        if ($el.hasClass('scroll-reveal--revealed'))
            return;

        if ($el.is('.grid')) {
            tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
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
        var $coverArchive = $('.cover-archive h5'),
            $sousCat = $('.list-sous-cat'),
            split = new SplitText($coverArchive,{charsClass: "charsplit", wordsClass: "wordsplit"});
        var tl = new TimelineLite();
            tl.staggerFrom($coverArchive.find('.charsplit'), 1.2, {y:'300%', ease:Power4.easeOut}, 0.02, 0.6);
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
            /*$('.post').each(function(index, element){
                if ($('.post').hasClass('scroll-reveal--revealed'))
                    return false;
                else{tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
                }  
            })*/
        }
    }

    return {
            init: init
    }
})();

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

var allDestinations = (function() {
    
    var init = function() {
        top();
    }

    var top = function(){     
        var $coverDestinations = $('.all-destinations--title h1'),
            split = new SplitText($coverDestinations,{charsClass: "charsplit", wordsClass: "wordsplit"});
        var tl = new TimelineLite();
            tl.staggerFrom($coverDestinations.find('.charsplit'), 1.2, {y:'300%', ease:Power4.easeOut}, 0.02, 0.6);
    }
    return {
            init: init
    }
})();

var single = (function() {
    
    var init = function() {
        introduction();
        $('body').on('reveal', '.scroll-reveal', scrollRevealHandler);
    }

    var introduction = function(){
        var $title = $("#introduction h1"),
        $subtitle = $("#introduction h4"),
        $categories = $("#introduction .categories"),
        $categoriesImg = $("#introduction .categories img"),
        $thumbnail = $("#introduction__thumbnail");
        var splitTitle = new SplitText($title,{wordsClass: "wordsplit"});
        var splitSubtitle = new SplitText($subtitle,{charsClass: "charsplit", wordsClass: "wordsplit"});
        //var splitSummary = new SplitText($summary,{wordsClass: "wordsplit"});
        var splitCategories = new SplitText($categories.find('div'),{charsClass: "charsplit", wordsClass: "wordsplit"});

            
            var tl = new TimelineLite();
            $( '.random' ).each(function() {
                $minRotate = -45;
                $maxRotate = 45;
                $randomX = Math.floor( Math.random() * 50 ) + "%"
                $randomY = Math.floor( Math.random() * 50 ) + "%"
                $degree = Math.floor(Math.random()*( $maxRotate - $minRotate + 1 ) + $minRotate);
                tl.to($(this), 2, {rotation:$degree, y:$randomY, x:$randomX, ease:Power4.easeOut}, 0.5);
            })
           $( '.random--rotate' ).each(function() {
                minRotate = -10;
                maxRotate = 10;
                degree = Math.floor(Math.random()*( maxRotate - minRotate + 1 ) + minRotate);
                tl.to($(this), 2, {rotation:degree, ease:Power4.easeOut}, 0);
            })
            tl.from($thumbnail.find('.image'), 2.5, {y:'100%', rotation: -10, ease:Power4.easeOut}, '-=2');
            tl.from($categoriesImg, 0.6, {y:'250%', ease:Power4.easeOut}, '-=2');
            tl.staggerFrom($categories.find('.wordsplit'), 0.6, {y:'200%', ease:Power2.easeOut}, 0.07, '-=1.8');
            tl.staggerFrom($title.find('.wordsplit'), 1.2, {y:'250%', ease:Power4.easeOut}, 0.07, '-=1.8');
            tl.staggerFrom($subtitle.find('.charsplit'), 1, {y:'250%', ease:Power4.easeOut}, 0.01, '-=0.8');
            
    }


    $(window).bind('scroll',function(e){
        parallaxScroll();
    });

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('#date').css({"transform" : "translateY(" + (0-(scrolled* 1.2))+"px)"});
        $('#country-code').css({"transform":"translateY(" + (0-(scrolled* 0.9))+"px)"});
        $('#introduction__thumbnail').css({"transform":"translateY(" + (0-(scrolled*1.4))+"px)" + "rotate(" + (0+(scrolled*0.02)) + "deg)"});

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
            /*$('.post').each(function(index, element){
                if ($('.post').hasClass('scroll-reveal--revealed'))
                    return false;
                else{tl = new TimelineLite();
            tl.staggerFrom($el.find('.post .image'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.2);
            tl.staggerFrom($el.find('.post .categories'), 1.8, {alpha:'0', ease:Power4.easeOut}, 0.2, 0.4);
            tl.staggerFrom($el.find('.post h1'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 0.8);
            tl.staggerFrom($el.find('.post p'), 1.8, {y:'200%', ease:Power4.easeOut}, 0.2, 1.2);
                }  
            })*/
        }
    }


    return {
        init: init
    }

})();
// Launch site
window.onload = function(){

    site.showPreloader();
    
    if( $('body').hasClass('homepage') === true ) {

        setTimeout(function(){
            homepage.init();
        }, 200);
    };
    
    if( $('body').hasClass('archive') === true ){

        setTimeout(function(){
            archive.init();
        }, 200);
    };

    if( $('body').hasClass('destinations') === true ){

        setTimeout(function(){
            destinations.init();
        }, 200);
    };
    if( $('body').hasClass('all-destinations') === true ){
        setTimeout(function(){
            allDestinations.init();
        }, 200);
    };

    if( $('body').hasClass('single') === true ){

        setTimeout(function(){
            single.init();
        }, 200);
    };

    if( $('body').hasClass('about') === true ){

        setTimeout(function(){
            about.init();
        }, 200);
    };
}