$(document).ready(function() {

  $("#tweet-text").on('input', function() {
    const text = $(this).val();;
    const lengthText = text.length;
   
    const counter = $($(this).parent().children()[2].children[1]).html(140 - lengthText);
    console.log(counter.val());
    if (counter.val() < 0) {
      $($(this).parent().children()[2].children[1]).css("color" , "red")
    } else {
      $($(this).parent().children()[2].children[1]).css("color" , "grey")
    }

  });

});