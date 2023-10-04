var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 62,
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


  var swiper6 = new Swiper(".mySwiper6", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
      delay: 4000, // Задержка в миллисекундах между сменой слайдов (в данном случае, 2000 мс = 2 секунды)
    },
    loop: true, // Включить бесконечный цикл слайдера

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });