$(document).ready(function(){
  $(".pins-style-door").mouseover(function(){
    $("#rightcol ul li a").css("background-color", "black");
  });
  $(".pins-style-door").mouseout(function(){
    $("#rightcol ul li a").css("background-color", "white");
  });
});