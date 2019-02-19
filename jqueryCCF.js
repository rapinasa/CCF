
$(document).ready(function(){
  $("#button-money").click(function(){
    $("#question1,#question3").hide("high", function(){
      $("#question2, #question4").show("high");
    });
  });
});

$(document).ready(function(){
  $("#button-friends").click(function(){
    $("#button-namefriends").show("high");
  });
});




$(document).ready(function(){
  $("#button-namefriends").click(function(){
    $("#button-namefriends,#question2,#question4,#friend1,#friend2,#friend3,#friend4,#friends5").hide("high");
  });
});






