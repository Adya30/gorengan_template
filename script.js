const navLinks = document.querySelectorAll('.nav-menu .nav-link');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu');
});

menuCloseButton.addEventListener('click', () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener('click', () => menuOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grapCursor: true,
  spaceBetween: 25, 

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
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});