$(function(){
    // Scrollbar custom 
    new SimpleBar($('#scrollBarElement')[0]);

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
    }
    else{
      team_carousel.owlCarousel(team_settings);
      logotype_carousel.owlCarousel(logotype_settings);
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
    