import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  speed: 1000,
  spaceBetween: 20,
  centeredSlides: true,

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-pagination",
    // type: "fraction",
  },

  navigation: {
    nextEl: "#swiper-arrow__right",
    prevEl: "#swiper-arrow__left",
  },
});

export default swiper;
