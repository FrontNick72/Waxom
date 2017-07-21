$(document).ready(function(){
  $('.slick-slider').slick({
    dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
    prevArrow: '',
    nextArrow: ''
  });

  $('.posts__photo--slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '',
    nextArrow: ''
  });

  $('.posts__slider').slick({
    adaptiveHeight: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: '90px',
    prevArrow: '<div class = "posts__prev"></div>',
    nextArrow: '<div class = "posts__next"></div>',
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '45px'
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  var touch = $('.btn_menu');
  var menu = $('.nav');     
  $(touch).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();

  });

  $(window).resize(function(){
      var wid = $(window).width();
      if(wid > 760 && menu.is(':hidden')) {
          menu.removeAttr('style');
      }
  });
});