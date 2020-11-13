$(function(){
    // Scrollbar custom 
    new SimpleBar($('#scrollBarElement')[0]);
    // Owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
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

