$(function () {



  // アコーディオンメニュー
  $('.faq-item').click(function () {
    var answer = $(this).find('.answer-wrapper'); //answer-wrapperのクラスを持つ要素を探す
    var icon = $(this).find('.close-btn');

    // プラスとマイナスの切り替え
    icon.toggleClass('active');

    // 回答を表示
    if (answer.hasClass('.open')) {
      answer.removeClass('.open');
      answer.slideUp(400);
    } else {
      answer.addClass('.open');
      answer.slideDown(400);
    }
  });


  // swiper
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    slidesPerView: 'auto',
    initialSlide: 1,
  

  });



  //drawer.jsの利用宣言
  $(document).ready(function () {
    $('.drawer').drawer();
  });


  //アクセスの地図の位置を移動
  //   アクセスのhtmlの順番を変える
  $(window).resize(function(){
    var width = $('.container').width(); //divの幅の値を取得(変数divwidth)
    var sp    = 767;
    if (width < sp){
        $("#map").after($("#access-btn"));
    }
});

//   フローティングメニュー
jQuery(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.floating').show();
  } else {
    jQuery('.floating').hide();
  }
});

jQuery('.floating').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

// ページ内リンクをクリック＋スムーススクロール
$('a[href^=#]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});





});


