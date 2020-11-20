$(document).ready(function(){
  $(".fa-clickable").click(function(){
    $(".new-tweet").toggle("fast");
    $("output").val(140);
    $("#tweet-text").val(""); 
    $("#error-msg").slideUp();
    $("output").css("color" , "grey");
  });
});