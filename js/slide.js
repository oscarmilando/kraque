
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:4000,
        disableOnInteration: false,
    },
    breakpoints: {
        640:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1068:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
  });

