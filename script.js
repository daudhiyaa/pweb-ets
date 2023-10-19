const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
};

const loginForm = document.querySelector(".login-form-container");
const loginBtn = document.querySelector("#login-btn");
const closeLoginBtn = document.querySelector("#close-login-btn");

loginBtn.onclick = () => {
  loginForm.classList.toggle("active");
};

closeLoginBtn.onclick = () => {
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

// swiperjs
var swiper = new Swiper(".books-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  loopFillGroupWithBlank: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,

  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
    reverseDirection: true,
    onlyInViewport: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  fade: true,
  grabCursor: true,

  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
    reverseDirection: true,
    onlyInViewport: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  fade: true,
  grabCursor: true,

  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
    reverseDirection: true,
    onlyInViewport: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
