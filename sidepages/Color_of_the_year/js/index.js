let moveIndex = 0;
const ratateDeg = 15;
let degValue = 0;
let nthNumber = 0;
let cardNumber = $("#wrap .card_wrap:nth-child(1) .card div"); 
let cardColor = $("#wrap .card_wrap:nth-child(1) .card div");
let cardColorBg = cardColor.css("backgroundColor");
const year_1 = $(".year_board .year_1"),
            year_2 = $(".year_board .year_2"),
            year_3 = $(".year_board .year_3"),
            year_4 = $(".year_board .year_4");

            year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 2)");
        year_4.css("top", "calc(-45px * 1)");

        
$('#board').css({'transform': 'rotate(0deg)'});

$(document).ready(function () {

        
    $(document).on("mousewheel", function (event) {
        if(event.originalEvent.wheelDelta > 0){
            degValue = degValue - ratateDeg;
        } else {
            degValue = degValue + ratateDeg;
        }
    })
});




function wheelWork() {
    $('#board').css({
        'transform': 'rotate(' + degValue + 'deg)'
    });
    const card = $("#wrap .card_wrap .card");
    card.css("width", "200px");
    card.css("height", "300px");
    card.css("top", "0px");
    card.css("backgroundColor", "none");
    card.css("zIndex", "0");
    $("#wrap .card_wrap").css("zIndex", "0");
    $("#wrap .card_wrap .card ul li:nth-child(1)").css("fontSize","22px");
    $("#wrap .card_wrap .card ul li:nth-child(2)").css("fontSize","18px");
    $("#wrap .card_wrap .card ul li:nth-child(3)").css("fontSize","18px");



    let nthNumber = moveIndex + 1;

    const cardNumber = $("#wrap .card_wrap:nth-child(" + nthNumber + ") .card");
    const cardColor = $("#wrap .card_wrap:nth-child(" + nthNumber + ") .card .color");

    if($( window ).width() > 760){
        cardNumber.css("width", "300px");
        cardNumber.css("height", "450px");
        $("#wrap .card_wrap:nth-child(" + nthNumber + ") .card ul li:nth-child(1)").css("fontSize","34px");
        $("#wrap .card_wrap:nth-child(" + nthNumber + ") .card ul li:nth-child(2)").css("fontSize","28px");
        $("#wrap .card_wrap:nth-child(" + nthNumber + ") .card ul li:nth-child(3)").css("fontSize","28px");
        cardNumber.css("top", "-100px");
    } else {
        cardNumber.css("width", "250px");
        cardNumber.css("height", "375px");
        cardNumber.css("top", "-50px");    
        $("#wrap .card_wrap:nth-child(" + nthNumber + ") .card ul li:nth-child(1)").css("fontSize","28px");
        $("#wrap .card_wrap:nth-child(" + nthNumber + ") .card ul li:nth-child(2)").css("fontSize","22px");
        $("#wrap .card_wrap:nth-child(" + nthNumber + ") .card ul li:nth-child(3)").css("fontSize","22px");
    };
    cardNumber.css("backgroundColor", "none");
    $("#wrap .card_wrap:nth-child(" + nthNumber + ")").css("zIndex", "1");
    cardNumber.css("zIndex", "2");
    //console.log(moveIndex);
    
    //font section

    


  
    const jbText = $("#wrap .card_wrap:nth-child(" + nthNumber + ") .color_name").text();
    $(".name_result .span p").html( jbText );
    
    
        

    if (nthNumber === 1) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 2)");
        year_4.css("top", "calc(-45px * 1)");
    };
    if (nthNumber === 2) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 2)");
        year_4.css("top", "calc(-45px * 0)");
    };
    if (nthNumber === 3) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 1)");
        year_4.css("top", "calc(-45px * 9)");
    };
    if (nthNumber === 4) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 1)");
        year_4.css("top", "calc(-45px * 8)");
    };
    if (nthNumber === 5) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 1)");
        year_4.css("top", "calc(-45px * 7)");
    };
    if (nthNumber === 6) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 1)");
        year_4.css("top", "calc(-45px * 6)");
    };
    if (nthNumber === 7) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 1)");
        year_4.css("top", "calc(-45px * 6)");
    };
    if (nthNumber === 8) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 1)");
        year_4.css("top", "calc(-45px * 5)");
    };
    if (nthNumber === 9) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 1)");
        year_4.css("top", "calc(-45px * 4)");
    };
    if (nthNumber === 10) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 1)");
        year_4.css("top", "calc(-45px * 3)");
    };
    if (nthNumber === 11) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 1)");
        year_4.css("top", "calc(-45px * 2)");
    };
    if (nthNumber === 12) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 1)");
        year_4.css("top", "calc(-45px * 1)");
    };
    if (nthNumber === 13) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 1)");
        year_4.css("top", "calc(-45px * 0)");
    };
    if (nthNumber === 14) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 0)");
        year_4.css("top", "calc(-45px * 9)");
    };
    if (nthNumber === 15) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 0)");
        year_4.css("top", "calc(-45px * 8)");
    };
    if (nthNumber === 16) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 0)");
        year_4.css("top", "calc(-45px * 7)");
    };
    if (nthNumber === 17) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 0)");
        year_4.css("top", "calc(-45px * 6)");
    };
    if (nthNumber === 18) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 0)");
        year_4.css("top", "calc(-45px * 5)");
    };
    if (nthNumber === 19) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 0)");
        year_4.css("top", "calc(-45px * 4)");
    };
    if (nthNumber === 20) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 0)");
        year_4.css("top", "calc(-45px * 3)");
    };
    if (nthNumber === 21) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 0)");
        year_4.css("top", "calc(-45px * 2)");
    };
    if (nthNumber === 22) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 0)");
        year_4.css("top", "calc(-45px * 1)");
    };
    if (nthNumber === 23) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 0)");
        year_4.css("top", "calc(-45px * 0)");
    };
    if (nthNumber === 24) {
        year_1.css("top", "calc(-45px * 1)");
        year_2.css("top", "calc(-45px * 0)");
        year_3.css("top", "calc(-45px * 2)");
        year_4.css("top", "calc(-45px * 1)");
    };
    

    $(".background").css("width","0%");
   // $(document.body).css("color", "black");

    cardNumber.on("click", function() {
        const cardColorBg = cardColor.css("backgroundColor");
        $(".background").css("backgroundColor", cardColorBg);
        $(".background").css("width","100%");
        $(".background .bg_wrap .bg_section").css("display","none");
        $(".background .bg_wrap .bg_section:nth-child(" + nthNumber + ")").css("display","block");
        $(".fake_header .inner_space").css("backgroundColor", cardColorBg);
        $(".fake_header .span").css("backgroundColor", cardColorBg);
        console.log(nthNumber);

    });
}
cardNumber.on("click", function() {
    const cardColorBg = cardColor.css("backgroundColor");
    $(".background").css("backgroundColor", cardColorBg);
    $(".background").css("width","100%");
    $(".background .bg_wrap .bg_section").css("display","none");
    $(".background .bg_wrap .bg_section:nth-child(1)").css("display","block");
    $(".fake_header .inner_space").css("backgroundColor", cardColorBg);
    $(".fake_header .span").css("backgroundColor", cardColorBg);
});





$(document).ready(function () {

        let startX, endX;
        $(document).on('touchstart',function(event){
            startX = event.originalEvent.changedTouches[0].screenX;
        });
        $(document).on('touchend',function(event){
            endX=event.originalEvent.changedTouches[0].screenX;
        if (startX - endX > 50) {
            degValue = degValue - ratateDeg;
            moveIndex = moveIndex + 1;
            if (moveIndex > 23) {
                moveIndex = 0;
            }
            wheelWork()
        } else if (endX - startX > 50) {
            degValue = degValue + ratateDeg;
            moveIndex = moveIndex - 1;
            if (moveIndex < 0) {
                moveIndex = 23;
            }
            wheelWork()
        }
        });

    $(document).on("mousewheel", function (event) {
        if (event.originalEvent.wheelDelta < 0) {
            moveIndex = moveIndex - 1;
        } else {
            moveIndex = moveIndex + 1;
        };
        if (moveIndex < 0) {
            moveIndex = 23;
        }
        if (moveIndex > 23) {
            moveIndex = 0;
        }

        wheelWork();
        
    });
});
