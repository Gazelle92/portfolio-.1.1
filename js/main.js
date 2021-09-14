$(document).ready(function(){

    setTimeout(function(){
      $(".loading").animate({opacity: "0"});
        $(".description:nth-child(1)").animate({top: "0px"});
        $(".description:nth-child(1)").animate({opacity: "1"});
        $(".main .folder").css("top", "0px");
        $(".main .folder").css("opacity", "1");
        setTimeout(function(){
            $(".loading").css("display","none");
            //$("main").css("transform", "scale(1)");
            $("body").css("transform", "scale(1)",5000);
            $(".introLogo").css("backgroundColor", "#fff");
            //$("body").css("overflow", "auto");
            $("body").css("height", "auto");
            $(".main").css("position", "relative");
            $(".main").css("top","0px");
            $(".folder").css("transition","none");
        }, 2000)
    }, 500)

    function descOff(){
      $(".articleSection .description").css("display","none");
      $(".articleSection .introText").css("display","none");
    };
    $(".sectionOn .folder:nth-child(1)").hover(function(){
      if($(".folderSection").hasClass("sectionOn")){
        descOff();
        $(".articleSection .description:nth-child(1)").css("display","block");
      }
    });
    $(".sectionOn .folder:nth-child(2)").hover(function(){
      if($(".folderSection").hasClass("sectionOn")){
        descOff();
        $(".articleSection .description:nth-child(2)").css("display","block");
      }
    });
    $(".sectionOn .folder:nth-child(3)").hover(function(){
      if($(".folderSection").hasClass("sectionOn")){
        descOff();
        $(".articleSection .description:nth-child(3)").css("display","block");
      }
    });
    $(".sectionOn .folder:nth-child(4)").hover(function(){
      if($(".folderSection").hasClass("sectionOn")){
        descOff();
        $(".articleSection .description:nth-child(4)").css("display","block");
      }
    }); 
    
    $(".folderSection .folder:nth-child(1)").click(function () {
      descOff();
      $(".articleSection .description:nth-child(1)").css("display", "block");
    });
    $(".folderSection .folder:nth-child(2)").click(function () {
      descOff();
      $(".articleSection .description:nth-child(2)").css("display", "block");
    });
    $(".folderSection .folder:nth-child(3)").click(function () {
      descOff();
      $(".articleSection .description:nth-child(3)").css("display", "block");
    });
    $(".folderSection .folder:nth-child(4)").click(function () {
      descOff();
      $(".articleSection .description:nth-child(4)").css("display", "block");
    });

function workPageOff(){
  $(".workInner").css("flexDirection","column");
  $(".workOpposite .workInfo").before($('.workOpposite .workImgWrap'));
  $(".workOpposite2 .workInfo").before($('.workOpposite2 .workImgWrap'));
  $(".workOpposite3 .workInfo").before($('.workOpposite3 .workImgWrap'));
}
function workPageOn(){
  if($(".descInner").width() < 400){
    $(".workInner").css("flexDirection","unset");
  };
  
  $(".workOpposite .workImgWrap").before($('.workOpposite .workInfo'));
  $(".workOpposite2 .workImgWrap").before($('.workOpposite2 .workInfo'));
  $(".workOpposite3 .workImgWrap").before($('.workOpposite3 .workInfo'));
}


$(".folderSection .folder").click(function(){
  //여기는 끄는거
  if($(this).hasClass("folderOn")){
    $(".typing").html("C:＼Program Files");
    $(this).removeClass("folderOn");
    $(".folderSection").css("width","calc(100% - 30%)");  
    $(".folderSection").addClass("sectionOn")
    $(".posterSection").css("display","flex");
    workPageOff();

    if($(window).width() > 960){ //여기는 pc버전끄기
      $(".articleSection").css("width","30%");
      $(".articleSection").css("height","100%");
    } else { //여기는 모바일버전 끄기
      $(".folderSection").css("height","50%");
      $(".articleSection").css("width","100%");
      $(".articleSection").css("height","50%");
    }

  } else { //여기가 켜는거
    $(".posterSection").css("display","none");
    $(".folderSection .folder").removeClass("folderOn");
    $(this).toggleClass("folderOn");
    $(".articleSection").css("width","100%");
    $(".folderSection").removeClass("sectionOn")

    if($(window).width() > 960){  // 여기가 pc버전 켜기
      $(".folderSection").css("width","110px");
      $(".folderSection").css("height","100%");
      $(".articleSection").css("height","100%");
      workPageOn();
    } else { //모바일버전 켜기
      $(".folderSection").css("height","90px");
      $(".folderSection").css("width","calc(100% - 30%)");
      $(".articleSection").css("height","calc(100% - 60px)");
      workPageOff();
    }
  }
});
function gallary(){
  if($( window ).width() > 960){
    if($(".folderSection").hasClass("sectionOn")){
      $(".folderSection").css("height","100%");
      $(".folderSection").css("width","calc(100% - 30%)");
      $(".articleSection").css("width","30%");
    } else {
      $(".folderSection").css("height","100%");
      $(".folderSection").css("width","110px");
    };

    if($("folderSection").hasClass("sectionOn")){
      workPageOff();
    } else {
      workPageOn();
    };
  } else {
    if($(".folderSection").hasClass("sectionOn")){
      $(".articleSection").css("height","50%");
      $(".folderSection").css("height","50%");
    } else {
      $(".folderSection").css("height","90px");
    };

    if($("folderSection").hasClass("sectionOn")){
      workPageOn();
    } else {
      workPageOff();
    };
  }
  if($(".posterSection").width() < 900){
    $(".posterSection .poster:nth-child(1)").css("width","60%");
    $(".posterSection .posterInner").css("width","40%");
    $(".posterSection .posterInner .poster").css("width","100%");
    $(".posterSection .posterInner .poster:nth-child(1)").css("borderBottom","10px solid #000");
    $(".posterSection .posterInner .poster").css("height","50%");
    $(".posterSection .posterInner").css("flex-direction","column");
  } else {
    $(".posterSection .poster:nth-child(1)").css("width","calc(100% / 4)");
    $(".posterSection .posterInner").css("width","75%");
    $(".posterSection .posterInner").css("flex-direction","unset");
    $(".posterSection .posterInner .poster:nth-child(1)").css("width", "60%")
    $(".posterSection .posterInner .poster:nth-child(2)").css("width", "40%")
    $(".posterSection .posterInner .poster").css("height","100%");
  };
};
  gallary();
  workPageOff();
  $( window ).resize( function() {
    gallary();
    
  });
  
});


