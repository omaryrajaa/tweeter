$(document).ready(function() {

  $("#tweet-text").on('input', function() {
    const text = $(this).val();;
    const lengthText = text.length;
    const counter = $($(this).parent().children()[3].children[1]);
   
    const newcounter = counter.html(140 - lengthText);
    console.log(counter.val());
    if (counter.val() < 0) {
      counter.css("color" , "red")
    } else {
      counter.css("color" , "grey")
    }

  });

});