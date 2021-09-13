$(document).ready(function() {
  console.log("collaudo");

  let showMenu = false

  $('.menu-btn').click(function () { 
    if (showMenu === false) {
      $('.menu-btn__burger').addClass('open');
      $('.nav').addClass('open');
      $('.menu-nav').addClass('open');
      $('.menu-nav__item').addClass('open');
      showMenu = true;
    }
    else {
      $('.menu-btn__burger').removeClass('open');
      $('.nav').removeClass('open');
      $('.menu-nav').removeClass('open');
      $('.menu-nav__item').removeClass('open');
      showMenu = false;
    }
  });




});
