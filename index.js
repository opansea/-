const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);

// slider

var swiper = new Swiper(".slide-content", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 0, // Set the delay between slides in milliseconds
    disableOnInteraction: false, // Set to false if you want autoplay to continue even when user interacts with swiper
  },
  speed: 10000, // Set the speed of the slide transition in milliseconds (for example, 1000 milliseconds = 1 second)
  centerSlide: true,
  fade: true,
  grabCursor: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
    dynamicBullets: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowTouchMove: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
  },
});
