$(document).ready(function(){
  $(".tabs").lightTabs();


  $('.menu__catalog').click(function(){
    if ($('.overlay').is(":hidden")) {
      $('.nav-md__block').fadeOut(200);
      $('.menu__catalog__block').slideDown(200);
      $('.overlay').fadeIn(200);
    } else {
      $('.menu__catalog__block').fadeOut(200);
      $('.nav-md__block').fadeOut(200);
      $('.overlay, .overlay2').fadeOut(200);
    };
  });

  $('.menu__catalog-sm').click(function(){
    $('.menu__catalog__block-sm').slideToggle(200);
  });


  $('.nav-md').click(function(){
    if ($('.overlay2').is(":hidden")) {
      $('.nav-md__block').slideDown(200);
      $('.overlay2').fadeIn(200);
    } else {
      $('.menu__catalog__block').fadeOut(200);
      $('.nav-md__block').fadeOut(200);
      $('.overlay, .overlay2').fadeOut(200);
    };
  });



  $('.overlay, .overlay2').click(function(){
    $('.menu__catalog__block').fadeOut(200);
    $('.nav-md__block').fadeOut(200);
    $('.overlay, .overlay2').fadeOut(200);
  });

});
