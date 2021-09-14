const fstSec = $(".content .cnt00");
const vida = $(".introVideo").get(0);
fstSec.addClass("sectionOn");
$(".introVideo").get(0).play(0);

$(document).ready(function(aaa){
    $(".arrow").click(function(){
        $(".cnt .detail_wrap").toggleClass("detail_wrap_on");
        $(".arrow .material-icons").toggleClass("page_on");
    });
});

const resetMain = function(){
    moveIndex = 0;
    $("html ,body").scrollTop(0);
    fstSec.addClass("sectionOn");
    $(".introVideo").get(0).play(0);
    $(".header_cover").css("height","00px");  
    $(".footer_bg").removeClass("footer_on");
    $(".bg_1 div:nth-child(1)").css("width", "100%");
    $(".bg_2 div:nth-child(1)").css("height", "100%");
    $(".bg_3 div:nth-child(1)").css("width", "100%");
};
let $nav = null,
        $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false;

const scroll = function(){
    
     // 새로 만든 변수

    $(document).ready(function(){
        init();
        initEvent();
    });
    
    const init = function(){
        $cnt = $(".content");
        bodySection = $("content .cnt");
    };
    
    const initEvent = function(){
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function(){
            winResize();
        });
        
        $cnt.on("mousewheel", function(e){
            if(time === false){
                wheel(e);
            }    

            $(".wrap .detail_wrap_on").removeClass("detail_wrap_on");
            $(".arrow .material-icons").removeClass("page_on");
        });




        
        let startY, endY;
        $(".sec_1").on('touchstart',function(event){
            if(time === false){
            startY = event.originalEvent.changedTouches[0].screenY;
            }
        });
        console.log(time);
        $(".sec_1").on('touchend',function(event){

                endY=event.originalEvent.changedTouches[0].screenY;
                if (startY - endY > 50) {
                    if (moveIndex < 4) {
                        moveIndex += 1;
                        moving(moveIndex);
                        fstSec.removeClass("sectionOn");
                        $(".introVideo").get(0).pause(0)
                        $(".introVideo")[0].currentTime = 0;
                        $(".header_cover").css("height", "100%");
                    };
                    scrollAction();
                    console.log(moveIndex);

                } else if (endY - startY > 50) {
                    if (moveIndex > 0) {
                        moveIndex -= 1;
                        moving(moveIndex);
                        $(".header_cover").css("height", "100%");
                    };
                    if (moveIndex === 0) {
                        resetMain();
                    }
                    scrollAction();
                    console.log(moveIndex);
                };
                console.log(time);
        });
        
    };

    const winResize = function(){
        winH = $(window).height();
        //$cnt.children(".cnt").height(winH);
        $cnt.children(".cnt").css("height","100vh");
        //bodySection.height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    const moving = function(index){
        time = true 
        moveCnt = $cnt.children("div").eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        },300, function(){
          time = false;
        });
    };
    

    const scrollAction =  function(){

            if(moveIndex === 1){
                $(".bg_1 div:nth-child(1)").css("width", "100%");
                $(".bg_2 div:nth-child(1)").css("height", "100%");
                $(".bg_3 div:nth-child(1)").css("width", "100%");
            };
            if(moveIndex === 2){           
                $(".bg_1 div:nth-child(1)").css("width", "0%"); 
                $(".bg_1 div:nth-child(2)").css("height", "100%");

                $(".bg_2 div:nth-child(1)").css("height", "0%"); 
                $(".bg_2 div:nth-child(2)").css("width", "100%");
                
                $(".bg_3 div:nth-child(1)").css("width", "0%"); 
                $(".bg_3 div:nth-child(2)").css("height", "100%");
            };
            if(moveIndex === 3){           
                $(".bg_1 div:nth-child(2)").css("height", "0%"); 
                $(".bg_1 div:nth-child(3)").css("width", "100%");

                $(".bg_2 div:nth-child(2)").css("width", "0%"); 
                $(".bg_2 div:nth-child(3)").css("height", "100%");

                $(".bg_3 div:nth-child(2)").css("height", "0%"); 
                $(".bg_3 div:nth-child(3)").css("width", "100%");
                $(".mobileButton span").css("backgroundColor","#000");
            };
            if(moveIndex === 4){           
                $(".bg_1 div:nth-child(3)").css("width", "0%"); 
                $(".bg_1 div:nth-child(4)").css("height", "100%");

                $(".bg_2 div:nth-child(3)").css("height", "0%"); 
                $(".bg_2 div:nth-child(4)").css("width", "100%");
                
                $(".bg_3 div:nth-child(3)").css("width", "0%"); 
                $(".bg_3 div:nth-child(4)").css("height", "100%");
                $(".bg_cover").css("opacity","0")
                $(".bg_cover").css("z-index","-1")
                $(".footer_bg").addClass("footer_on");
                $(".mobileButton span").css("backgroundColor","#fff");
            };
            if(moveIndex < 4){
                $(".bg_cover").css("opacity","1")
                $(".bg_cover").css("z-index","0")
                $(".footer_bg").removeClass("footer_on");
            };
    };

        const wheel = function(e){
            if(e.originalEvent.wheelDelta < 0){
                if(moveIndex < 4){
                    moveIndex += 1;
                    moving(moveIndex);
                    fstSec.removeClass("sectionOn");
                    $(".introVideo").get(0).pause(0)
                    $(".introVideo")[0].currentTime = 0;
                    $(".header_cover").css("height","100%");

                };
            }else{
                if(moveIndex > 0){
                    moveIndex -= 1;
                    moving(moveIndex);
                    $(".header_cover").css("height","100%");
                };
                if(moveIndex === 0){
                    resetMain();  
                }  
            };    
            scrollAction();        
        };
    
    

    const resetTop = function(){
        $("html ,body").scrollTop(0);
        fstSec.removeClass("sectionOn");
        $(".introVideo").get(0).pause(0)
        $(".introVideo")[0].currentTime = 0;
        moveIndex = 1;
        console.log(moveIndex);
        console.log("worked!");
        $(".header_cover").css("height","100%");
        $(".bg_cover").css("opacity","0");
        $(".footer_bg").removeClass("footer_on");
        $(".support_bg").removeClass("footer_on");
        if($(".mobileButton span").hasClass("menuOn")){
            $("header ul li a").click(function(){
                $(".mobileButton span").css("backgroundColor","#000");
                $(".mobileButton span").removeClass("menuOn");
                $(".header_cover").css("display","none");
                $("header ul").css("display","none");
            })
        }
    };
    $(document).ready(function(){
        $(".head_product").click(function(){
            resetTop();
            $(".layout").css("left","0");
            fstSec.addClass("sectionOn");
            console.log(moveIndex);
            $("header").removeClass("second_page");
            $(".bg_cover").css("opacity","1");
            resetMain();
            $(".mobileButton span").css("backgroundColor","#000");
            if($(".mobileButton span").hasClass("menuOn")){
                
                $(".mobileButton span").removeClass("menuOn")
                $("header .header_cover").css("display","none");
                $("header ul").css("display","none");
            }
        });
        $(".head_about").click(function(){
            resetTop();
            $(".layout").css("left","-100vw");
            $("header").addClass("second_page");
            $("header").addClass("second_page");
            $("header a").css("color","#fff");            
            $(".mobileButton span").css("backgroundColor","#000");
            if($(".mobileButton span").hasClass("menuOn")){
                
                $(".mobileButton span").removeClass("menuOn")
                $("header .header_cover").css("display","none");
                $("header ul").css("display","none");
            }
        });
        $(".head_ecology").click(function(){
            $(".layout").css("left","-200vw");
            $("header").removeClass("second_page");
            resetTop();
            $(".header_cover").css("height","100%");
            $("header a").css("color","#fff");
            $(".mobileButton span").css("backgroundColor","#000");
            if($(".mobileButton span").hasClass("menuOn")){
                
                $(".mobileButton span").removeClass("menuOn")
                $("header .header_cover").css("display","none");
                $("header ul").css("display","none");
            }
        });
        $(".head_support").click(function(){
            $(".support_bg").addClass("footer_on");
            $("header a").css("color","#fff");
            $(".mobileButton span").css("backgroundColor","#fff");
            if($(".mobileButton span").hasClass("menuOn")){
                
                $(".mobileButton span").removeClass("menuOn")
                $("header .header_cover").css("display","none");
                $("header ul").css("display","none");
            }
        });

        $("header .header_cover").click(function(){
            if($(".mobileButton span").hasClass("menuOn")){
                $(".mobileButton span").removeClass("menuOn")
                $("header .header_cover").css("display","none");
                $("header ul").css("display","none");
            }
        });
    });
};

scroll();

$(".mobileButton").click(function(){
    $(".mobileButton span").toggleClass("menuOn");
    if($(".mobileButton span").hasClass("menuOn")){
        $(".header_cover").css("display","block");
        $("header ul").css("display","flex");
    } else {
        $(".header_cover").css("display","none");
        $("header ul").css("display","none");
    }
    
});
