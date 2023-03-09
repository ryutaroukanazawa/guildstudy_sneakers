// ハンバーガーメニュー
$(function() {
    $('.btn-gNav').on("click", function() {
        $(this).toggleClass('open');
        $('#gNav').toggleClass('open');
    });
});

// メニューをクリックされたら、非表示にする
$(function() {
    $('gNav-menu li a').on("click", function() {
        $('#gNav').removeClass('open');
    });
});

// Swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    breakpoints: {
      575: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    },
    spaceBetween: 25,
    centeredSlides: true,
    loop: true,
    effect: "slide",
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
    },
  });