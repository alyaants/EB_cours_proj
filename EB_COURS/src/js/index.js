new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 45,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-paginationn",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

new Swiper(".mySwiper6", {
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 4000, // задержка в миллисекундах между сменой слайдов
  },
  loop: true, //  бесконечный цикл слайдера

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
