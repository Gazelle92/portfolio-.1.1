
$(".menuBar").hover(function(){
    $(".subMenuBg").css("display", "block");


})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 35,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".nextSwiper", {
    
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
      },    
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".keywordSlide", {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
      },    
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".controlArea a:nth-child(1)",
        prevEl: ".controlArea a:nth-child(2)",
    },
});

$(document).ready(function(){
    const menuOff = function(){
        $(".mobileMenu").css("left", "-320px");
        $(".bg").css("display","none");
        $(".mobileMenuUnder li ul").removeClass("buttonOff")
        $("body").css("overflow","auto");
        $(".mobileSearchWrap").css("top","-120px");
        $(".mobileClose").css("display","none");
    };
    $(".libraryLink").click(function () {
        $(".libraryLink ul").toggleClass("buttonOff")
    })
    $(".languageLink").click(function () {
        $(".languageLink ul").toggleClass("buttonOff")

    });
    $(".mobileClose").click(function(){
        menuOff()

    })

    $("#mobile").click(function(){
        $(".mobileMenu").css("left", "00px");
        $(".bg").css("display","block");
        $(".mobileClose").css("display","block")
        $("body").css("overflow","hidden");
    })
    $(".bg").click(function(){
        menuOff();
    })

    $(".mobileMenuUnder li a").click(function(){
        $(".mobileMenuUnder li ul").removeClass("buttonOff")
        $(this).next("ul").toggleClass("buttonOff");
    })

    $(".searchButton").click(function(){
        $(".mobileSearchWrap").css("top","0px");
        $(".bg").css("display","block");
        $("body").css("overflow","hidden");
    })
    $(".tab li a").click(function(){
        $(".tab_1").addClass("tab_2");
        $(".tab_1").removeClass("tab_1");
        $(this).addClass("tab_1");
        $(this).removeClass("tab_2");
    });
    $(".tab li:nth-child(1) a").click(function(){
        $(".nbUnder_1").css("display","block");
        $(".nbUnder_2").css("display","none");
    });
    $(".tab li:nth-child(2) a").click(function(){
        $(".nbUnder_2").css("display","block");
        $(".nbUnder_1").css("display","none");
    });
    $(".menuButtonWrap .menuBar").click(function(){
        $(".menuButtonWrap .menuBar").toggleClass("buttonOn");
        if($(".menuButtonWrap .menuBar").hasClass("buttonOn")){
            $(".menu .subMenuWrap .subMenu ul").css("display","block");
        } else {
            $(".menu .subMenuWrap .subMenu ul").css("display","none");
        }
    });
});