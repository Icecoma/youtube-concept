const swiper = new Swiper('.sub_slider', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints:{
      1900:{
        slidesPerView: 6,
      },
      1600:{
        slidesPerView: 5,
      },
      1300:{
        slidesPerView: 4,
      },
      992:{
        slidesPerView: 3,
      },
      860:{
        slidesPerView: 2,
      },
      320:{
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: '.swiper_button_next',
      prevEl: '.swiper_button_prev',
    },
  
  });
  const swiper2 = new Swiper('.rec_slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints:{
      1020:{
        slidesPerView: 3,
      },
      860:{
        slidesPerView: 2,
      },
      320:{
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: '.recswiper_button_next',
      prevEl: '.recswiper_button_prev',
    },
  
  });
  const swiper3 = new Swiper('.fooddrink_slider', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints:{
      1900:{
        slidesPerView: 6,
      },
      1600:{
        slidesPerView: 5,
      },
      1300:{
        slidesPerView: 4,
      },
      992:{
        slidesPerView: 3,
      },
      860:{
        slidesPerView: 2,
      },
      320:{
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: '.fdswiper_button_next',
      prevEl: '.fdswiper_button_prev',
    },
  });
const searchBtn = document.querySelector('.mobile_search');
const mobileSearch = document.querySelector('.search')
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is_open');
});
if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  swiper2.destroy();
  swiper3.destroy();
}