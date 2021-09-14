const main = document.getElementById("main");
let mainHeight = main.offsetHeight;
const bodyHeight = body.offsetHeight;
(function ($) {
  $(".text_section *").css("top", "0");
  $(".text_section *").css("opacity", "1");

  //Parallax            
  function scrollBanner() {
    $(document).on('scroll', function () {
      var scrollPos = $(this).scrollTop();
      $('.text_section *').css({
        'top': -(scrollPos * 1) + 'px',
        'opacity': 1 - (scrollPos / 420)
      });
    });
  }
  scrollBanner();

  //const scrollY = window.pageYOffset;

  $(window).on("scroll", function () {
    if (window.pageYOffset > mainHeight) {
      $('.sec2_h').css('width', "100%");
      $('.sec2_v').css('height', "100%");
    } else {
      $(".sec2_h").css('width', "0%");
      $('.sec2_v').css('height', "0%");
    };
    if ($(window).scrollTop() + 400 >= $(document).height() - $(window).height()) {
      $('.footer_h').css('width', "100%");
      $('.footer_v').css('height', "100%");
      $('.footer').css('opacity', '1');
    } else {
      $('.footer_h').css('width', "0%");
      $('.footer_v').css('height', "0%");
    };
  });

  function mobileOff() {
    $("body").css("overflow", "unset");
    $("header ul").css("zIndex", "-1");
    $("header ul").css("opacity", "0");
    $(".mobileCover").css("zIndex", "-1");
    $(".mobileCover").css("opacity", "0");
    setTimeout(function () {
      $("header ul").css("display", "none");
    }, 300);
    setTimeout(function () {
      $(".mobileCover").css("display", "none");
    }, 300);
  }

  $(".mobileButton").on("click", function () {
    $("header ul").css("display", "block");
    $(".mobileButton span").toggleClass("buttonOn");
    $(".mobileCover").css("display", "block");

    if ($(".mobileButton span").hasClass("buttonOn")) {
      $("body").css("overflow", "hidden");
      $("header ul").css("zIndex", "0");
      $("header ul").css("opacity", "1");
      $(".mobileCover").css("zIndex", "0");
      $(".mobileCover").css("opacity", "0.9");
    } else {
      mobileOff()
    };
  });

  $("body").on("wheel", function () {
    if ($(".mobileButton span").hasClass("buttonOn")) {
      $(".mobileButton span").toggleClass("buttonOn");
      mobileOff()
    };
  });

})


(jQuery);