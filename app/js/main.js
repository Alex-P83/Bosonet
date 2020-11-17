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
        margin:10,
        nav:false,
        dots:false,
        items:1,
        thumbs: true,
        thumbsPrerendered: true,
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
    
    let team_carousel = $('.services_02 .team_tiles');
    let team_settings = {
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  };

  if(window.innerWidth < 992){
      team_carousel.owlCarousel(team_settings);
  }
  
  //Resize slider
  $(window).resize(function (e) {
    if (window.innerWidth < 768) {
      if ($(pc__slider).hasClass('slick-initialized')) {
        $(pc__slider).slick('unslick');
      }
    }
    else {
        if(!$(pc__slider).hasClass('slick-initialized')){
          $(pc__slider).slick(pc__slider__settings);
      }    
    }
  });
  //Click

  var widthTitle = document.querySelector('.services_02 .title h6');

  $('.services_02 .arrow').on('click',function(){
    $('.inner_block').slideToggle();
    $('.services_02_back').toggleClass('active');
  })


  

  
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
      $(window).resize(function(){
          var wid = $(window).width();
          if(wid > 570 && menu.is(':hidden')) {
              menu.removeAttr('style');      
          }
      });  