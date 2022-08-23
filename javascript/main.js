$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > $("#nav").height()) {
      $("#nav").addClass("nav-scrolled");
      // $("#logo").addClass("logo-scrolled");
      // $(".nav-link").addClass("nav-link-scrolled");
    } else {
      $("#nav").removeClass("nav-scrolled");
      // $("#logo").removeClass("logo-scrolled");
      // $(".nav-link").removeClass("nav-link-scrolled");
    }
  });
});
