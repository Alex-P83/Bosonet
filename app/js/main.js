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
    

  //Click

  var widthTitle = document.querySelector('.services_02 .title h6');

  $('.services_02 .arrow').on('click',function(){
    $('.inner_block').slideToggle();
    $('.services_02_back').toggleClass('active');
  })
  
});

