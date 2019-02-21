
$(document).ready(function(){
  $("#button-money").click(function(){
    $("#question1,#question3").hide("high", function(){
      $("#question2, #question4").show("high");
    });
  });
});

$(document).ready(function(){
  $("#button-friends").click(function(){
     $("#question2, #button-friends, #friends, label").hide("high", function(){
    $("#button-namefriends, #question5, #question6, #friendsName").show("high");
  });
});
});

$(document).ready(function(){
  $("#button-namefriends").click(function(){
    $("#button-namefriends,#friendsName,#question2,#question4,#question5, #question6,#friend1,#friend2,#friend3,#friend4,#friend5").hide("high");
  });
});

  var friendsName = document.getElementById('friendsName');

$(document).ready(function(){
  $("#friendsName1").click(function(){
    $("#fr1").attr("placeholder", friendsName.value);
  });
});

$(document).ready(function(){
  $("#friendsName2").click(function(){
    $("#fr2").attr("placeholder", friendsName.value);
  });
});

$(document).ready(function(){
  $("#friendsName3").click(function(){
    $("#fr3").attr("placeholder", friendsName.value);
  });
});

$(document).ready(function(){
  $("#friendsName4").click(function(){
    $("#fr4").attr("placeholder", friendsName.value);
  });
});

$(document).ready(function(){
  $("#friendsName5").click(function(){
    $("#fr5").attr("placeholder", friendsName.value);
  });
});

$('input:text').focus(function(){ $(this).val('');});






