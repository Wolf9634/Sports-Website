let swiperCards = new Swiper('.card__content', {
  
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600:{
            slidePerView: 2,
        },
        969:{
            slidesPerView: 3,
        }

    },
  });