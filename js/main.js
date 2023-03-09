const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 100,

  pagination: {
    // el: ".swiper-pagination",
    // clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },

  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
});

$(".openbtn1").click(function () {
  $(this).toggleClass("active");
});
