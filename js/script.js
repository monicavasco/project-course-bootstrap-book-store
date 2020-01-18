$(document).ready(function () {
   $('.hamburger-menu').click(function () {
      $('.navigation').toggleClass('change');
   });

   lightbox.option({
      'wrapAround': true
   });


   $(window).scroll(function () {
      let position = $(this).scrollTop();

      if (position >= 350) {
         $('.gallery').addClass('change');
      } else {
         $('.gallery').removeClass('change');
      }
   });

   $('.writers.accordion').click(function (event) {

      if (event.target.id.split('-')[0] === 'button') {

         $('#mbook-1').attr('src', '/img/writers/' +
            event.target.id.split('-')[1] + '-book1.jpg');
         $('#mbook-2').attr('src', '/img/writers/' +
            event.target.id.split('-')[1] + '-book2.jpg');
      }
   });
});