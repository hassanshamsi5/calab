//////////// Navbar Background Change
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

///////// Navbar disappear while scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.transition = "500ms all";
  } else {
    document.getElementById("navbar").style.top = "-1500px";
    document.getElementById("navbar").style.transition = "500ms all";
  }
  prevScrollpos = currentScrollPos;
}

////////// Loader
// const myTimeout = setTimeout(() => {
//   $('#loader').hide();
//   $('#main').show();
// }, 1200);

///////// Swiper element
const swiperEl1 = document.querySelector('.swiper-mobile-1');

// swiper parameters
const swiperParams = {
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    }
  },
  on: {
    init() {
      // ...
    },
  },
};