$(function() {
  $('.Toggle').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
        $('.NavMenu').addClass('active'); //クラスを付与
      } else {
        $('.NavMenu').removeClass('active'); //クラスを外す
      }
    });

  $('.NavMenu-item').click(function() {
    $('.NavMenu').removeClass('active');
    $('.Toggle').removeClass('active');
  })


});
