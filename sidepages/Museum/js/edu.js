function getCheckboxValue() {
    const query = 'input[name="option"]:checked';
    const selectedEls = document.querySelectorAll(query);

    let result = '';
    selectedEls.forEach((el) => {
      result += el.value + ' ';
    });
    document.getElementById('result').innerText = result;
  }

  $(document).ready(function () {
    $(".reset_button").click(function () {
      $(".edu_option").prop("checked", false);
      $("#result").text("");
      $(".board_edu").css("display","flex");
    });
  });

  function filter() {
    let value, name, item, i, writer;
    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("item");

    for (i = 0; i < item.length; i++) {
      name = item[i].getElementsByClassName("name");
      writer = item[i].getElementsByClassName("writer");

      if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
        item[i].style.display = "flex"

      } else {
        item[i].style.display = "none";

      };

    }
  }


  const searchButton = document.getElementById("search_button");
  searchButton.addEventListener('click', filter);
  
$(function(){
  $('.option_box input').click(function(){
    if($('.option_box input').is(":checked") == true){
      $('.board_edu').css("display","none");
      $('.board_edu').removeClass("item");
      filter();

      $("#adult").css("color","red");
      if($("#adult").is(":checked") == true){
        $(".adult").addClass("item");
          $(".adult").css("display","flex")
      } else {
        $(".adult").css("display","none");
      };

      $("#teen").css("color","red");
      if($("#teen").is(":checked") == true){
        $(".teen").addClass("item");
          $(".teen").css("display","flex")
      } else {
        $(".teen").css("display","none");
      };

      $("#student").css("color","red");
      if($("#student").is(":checked") == true){
        $(".student").addClass("item");
          $(".student").css("display","flex")
      } else {
        $(".student").css("display","none");
      };

      $("#teacher").css("color","red");
      if($("#teacher").is(":checked") == true){
        $(".teacher").addClass("item");
          $(".teacher").css("display","flex")
      } else {
        $(".teacher").css("display","none");
      };

      $("#inpaired").css("color","red");
      if($("#inpaired").is(":checked") == true){
        $(".inpaired").addClass("item");
          $(".inpaired").css("display","flex")
      } else {
        $(".inpaired").css("display","none");
      };

      $("#culture").css("color","red");
      if($("#culture").is(":checked") == true){
        $(".culture").addClass("item");
          $(".culture").css("display","flex")
      } else {
        $(".culture").css("display","none");
      };

      $("#military").css("color","red");
      if($("#military").is(":checked") == true){
        $(".military").addClass("item");
          $(".military").css("display","flex")
      } else {
        $(".military").css("display","none");
      };

      $("#family").css("color","red");
      if($("#family").is(":checked") == true){
        $(".family").addClass("item");
          $(".family").css("display","flex")
      } else {
        $(".family").css("display","none");
      };

      $("#group").css("color","red");
      if($("#group").is(":checked") == true){
        $(".group").addClass("item");
          $(".group").css("display","flex")
      } else {
        $(".group").css("display","none");
      };

      $("#child").css("color","red");
      if($("#child").is(":checked") == true){
        $(".child").addClass("item");
          $(".child").css("display","flex")
      } else {
        $(".child").css("display","none");
      };


    } else {
      $('.board_edu').css("display","flex");
      $('.board_edu').addClass("item");
    }
  });
});

  $('.option_search_cover .openSearch').click(function(){
    $(this).addClass('closeSearch');
    $(this).removeClass('openSearch');
    $('.option_box').css("display","flex");
    $('.option_filter').css("display","flex");
  });


  $('.option_search_cover .closeSearch').click(function(){
    $(this).addClass('openSearch'); 
    $(this).removeClass('closeSearch'); 
    $('.option_box').css("display","none");
    $('.option_filter').css("display","none"); 
    });