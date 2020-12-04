$(function(){
    // Owl carousel
    $('.testimonials_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:1,
        navText : ['<svg width="21" height="18"><use xlink:href="img/icons.svg#arrow"></use></svg>','<svg width="21" height="18"><use xlink:href="img/icons.svg#arrow"></use></svg>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
     
    $('.project_slider').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:40,
        nav:false,
        dots:false,
        items:1,
        thumbs: true,
        thumbsPrerendered: true,
        responsive:{
            0:{
                items:1,
                stagePadding:0,
                nav:true,
                autoHeight:true,
                navText : ['<svg width="21" height="18"><use xlink:href="img/icons.svg#arrow"></use></svg>','<svg width="21" height="18"><use xlink:href="img/icons.svg#arrow"></use></svg>'],  
            },
            767:{
              stagePadding:0,
              nav:false
            },
            1200:{
                items:1
            }
        }
    }); 


    // Services slider

    const servicesSlider =  $('.services_slider');

    servicesSlider.owlCarousel({
        onInitialized: onIn,
        onChanged: onIn,
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        items:1,
        thumbs: true,
        thumbsPrerendered: true,
        animateOut: 'fadeOut',
        smartSpeed:0,
        dotsContainer:'.counter_block .dots',
        navContainer:'.navy',
        navText : ['<svg width="21" height="18"><use xlink:href="img/icons.svg#arrow"></use></svg> פיתוח מערכות ניהול מותאמות','ניהול ופיתוח פרויקטים <svg width="21" height="18"><use xlink:href="img/icons.svg#arrow"></use></svg>']
    });
    function getActiveSlideIndex(event) {
      if (!event.item) {
          return null;
      }
  
      var count  = event.item.count,
          offset = Math.floor((count + 1) / 2),
          index  = event.item.index;
  
      if (index > 0) {
          index -= offset;
      }
  
      if (index >= count) {
          index -= count;
      }
  
      if (index < 0) {
          index = count - 1;
      }
  
      if (count === 2) {
          index = index === 0 ? 1 : 0;
      }
  
      return index;
  }
    function onIn(event){
        const count = event.item.count;
        const currentItem = getActiveSlideIndex(event);
        const text = `${currentItem < 9 ? 0 : ''}${currentItem + 1}/${count}`;
        // const textDiv = $('.owl-dots');
        $('.counter_block .page').text(text);
    }

    

// Project sample 

    const projectSampleDesktop = $('.project_sample_desktop_slider');
    const projectSampleMobile = $('.project_sample_mobile_slider');

    // function triggerSlider(event, slider){
    //   if(event.item.index < 0){
    //     return;
    //   }

    //   slider.trigger('to.owl.carousel', event.item.index);
    // }

    projectSampleMobile.owlCarousel({
        // onChanged: (e) => { triggerSlider(e, projectSampleDesktop) },
        loop:true,
        margin:100,
        nav:false,
        dots:false,
        items:3,
        responsive:{
            0:{
                items:1,
                stagePadding:0
            },
            576:{
              items:2,
              stagePadding:0,
              nav:false
            },
            1200:{
                items:3
            }
        }
    });

    projectSampleDesktop.owlCarousel({
        //onInitialized: (e) => { triggerSlider(e, projectSampleMobile) },
       // onChanged: (e) => { triggerSlider(e, projectSampleMobile) },
        stagePadding: 465,
        loop:true,
        nav:false,
        dots:false,
        items:1,
        responsive:{
            0:{
                items:1,
                stagePadding:15
            },
            576:{
                items:1,
                stagePadding:50,
                margin:40,
            },            
            767:{
              stagePadding:200,
              margin:100,
            },
            1200:{
                stagePadding: 300,
                margin:100,
            },                     
            1800:{
              margin:100,
              stagePadding: 465,
              items:1
            }            
        }
    });



    let team_carousel = $('.services_02 .team_tiles');
    let team_settings = {
      stagePadding: 30,
      loop:true,
      margin:10,
      nav:false,
      thumbs: false,
      items:2,
      responsive:{
          576:{
            stagePadding: 50
          }
      }
    };

    if(window.innerWidth < 992){
        team_carousel.owlCarousel(team_settings);
    }

    let project_tile_carousel = $('.project_detail .project_tile');
    let project_tile_settings = {
      stagePadding: 30,
      loop:true,
      margin:10,
      nav:false,
      thumbs: false,
      items:2,
      responsive:{
          576:{
            stagePadding: 50
          }
      }
    };

    if(window.innerWidth < 992){
      project_tile_carousel.owlCarousel(project_tile_settings);
    }
    
    let logotype_carousel = $('.who_we_work .logotypes');
    let logotype_settings = {
      loop:true,
      margin:20,
      nav:false,
      autoWidth:true,
      thumbs: false
    };   
    
    if(window.innerWidth < 992){
        logotype_carousel.owlCarousel(logotype_settings);
    }    

  


  //Resize slider
  $(window).on('resize',function (e) {
    if(window.innerWidth > 992){
      team_carousel.trigger('destroy.owl.carousel');
      logotype_carousel.trigger('destroy.owl.carousel');
      project_tile_carousel.trigger('destroy.owl.carousel');    
    }
    else{
      team_carousel.owlCarousel(team_settings);
      logotype_carousel.owlCarousel(logotype_settings);
      project_tile_carousel.owlCarousel(project_tile_settings);
    }
  });

  //Click

  var widthTitle = document.querySelector('.services_02 .title h6');

  $('.services_02 .arrow').on('click',function(){
    $('.inner_block').slideToggle();
    $('.services_02_back').toggleClass('active');
  })

  // Hidden services text
  var services_block = $('.services_02 .inner_block'); 
  $(window).on('resize',function(){
      var wid = $(window).width();
      if(wid < 992 && services_block.is(':hidden')) {
          services_block.removeAttr('style'); 
          $('.services_02_back').removeClass('active');    
      }
  });  

});

 // Menu button
 (function() {
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
  })();

///Drop menu
$(function(){
    $('.colapse-menu-button .c-hamburger').on('click',function(){
      $('header .menu-wrapper').slideToggle();
    });
  });
  
// Hidden menu
var menu = $('header .menu-wrapper'); 
$(window).on('resize',function(){
    var wid = $(window).width();
    if(wid > 570 && menu.is(':hidden')) {
        menu.removeAttr('style');      
    }
});

const lazyContent = new LazyLoad({
  use_native: false 
});



var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function initDatBaget(container, rootName) {
  const contexts = document.getElementsByClassName(container);

  function inits() {
    for (let i = 0; i < contexts.length; i++) {
      init(contexts[i]);
    }
  }

  function init(context) {
    canvas = context.getElementsByClassName("canvas")[0];
    anim_container = context.getElementsByClassName("animation_container")[0];
    dom_overlay_container = context.getElementsByClassName("dom_overlay_container")[0];
    var comp = AdobeAn.getComposition("67D7CAC628F84AD894D58C8B414E8F7E");
    var lib = comp.getLibrary();
    handleComplete({}, comp);
  }
  function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    exportRoot = new lib[rootName]();
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
      stage.addChild(exportRoot);
      createjs.Ticker.framerate = lib.properties.fps;
      createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, anim_container, dom_overlay_container]);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
  }

  function loadScript(path, callback) {
    let script = document.createElement('script');
    script.src = path;
    document.head.append(script);
    script.onload = callback;
  }

  loadScript(`js/${rootName}.js`, inits);
};

function initBagets() {
  initDatBaget('colors', 'RGB');
  initDatBaget('fonts', 'FONT');
  initDatBaget('date', 'DATE');
}





function initAnime(){
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
}

//Upload files

 const uploadBtn = $('.upload_form_field button');
 const uploadInput = $('.upload_form_field input[type="file"]');
 const btnDefault = uploadBtn.html();

uploadBtn.on('click',function(){
  uploadInput.trigger('click');
})

uploadInput.on('change', function(){
  const fileName = $(this).val().split('\\').pop();
  if(!fileName){
    uploadBtn.html(btnDefault);
    return;
  }
  uploadBtn.html(`<span class="file_name">${fileName}</span><span class="btn_text">Change file</span>`)
})

//Change language hebrew

const langLink = $('.language a');
  const $html = $('html');

  langLink.on('click', function(e){
      e.preventDefault();

      const isHebrew = $(this).hasClass('hebrew');

      if (isHebrew) {
        $html.attr('dir', 'rtl');
      } else {
        $html.removeAttr('dir');
      }
});