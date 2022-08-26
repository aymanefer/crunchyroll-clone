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

  function showbg1(name) {
    let image_path = "url(assets/backgrounds/" + name + ".jpg)";
    $("#anime-background1").css("opacity", "1");
    $("#anime-background1").css("background-image", image_path);
  }

  function hidebg1() {
    $("#anime-background1").css("opacity", "0");
  }

  function showbg2(name) {
    let image_path = "url(assets/backgrounds/" + name + ".jpg)";
    $("#anime-background2").css("opacity", "1");
    $("#anime-background2").css("background-image", image_path);
  }

  function hidebg2() {
    $("#anime-background2").css("opacity", "0");
  }

  $("#popular .item-image").hover(function () {
    let id = $(this).attr("id");
    console.log("the image is", id);
    showbg1(id);
  }, hidebg1);

  $("#upcoming .item-image").hover(function () {
    let id = $(this).attr("id");
    console.log("the image is", id);
    showbg2(id);
  }, hidebg2);

});
