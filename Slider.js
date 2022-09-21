document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      640: {
        centeredSlides: true,
        slidesPerView: 2,
      },
      1024: {
        centeredSlides: false,
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
  });
});
