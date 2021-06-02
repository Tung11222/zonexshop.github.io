$(".slide-owl").owlCarousel({
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  margin: 0,
  loop: true,
  items: 1,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

const owl_1 = $(".featured-owl-carousel");
owl_1.owlCarousel({
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: false,
  margin: 30,
  loop: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    400: {
      items: 2,
      nav: false,
    },
    740: {
      items: 3,
      nav: false,
    },
    1023: {
      items: 4,
      nav: false,
    },
    1200: {
      items: 5,
      nav: false,
      loop: false,
      autoplay: false,
    },
  },
});

const owl_2 = $(".more-owl-carousel");
owl_2.owlCarousel({
  animateOut: "fadeOut",
  lazyLoad: true,
  loop: false,
  margin: 30,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    400: {
      items: 2,
      nav: false,
    },
    740: {
      items: 3,
      nav: false,
    },
    900: {
      items: 4,
      nav: false,
    },
    1200: {
      items: 5,
      nav: false,
    },
    1400: {
      items: 6,
      nav: false,
      loop: false,
    },
  },
});

window.addEventListener("scroll", function () {
  let header = document.querySelector(".heading");
  header.classList.toggle("fixed", window.scrollY >= 60);
});

let overlay = document.querySelector(".overlay");
let click = document.querySelector(".ti-align-justify");
click.addEventListener("click", () => {
  overlay.classList.toggle("show");
  document.querySelector(".main-box").classList.toggle("show");
});
