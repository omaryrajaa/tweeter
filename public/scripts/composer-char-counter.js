//decrement the counter when text entered and change it's color if to red when text longer than 140 chars

$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const text = $(this).val();
    const lengthText = text.length;
    const counter = $($(this).parent().children()[3].children[1]);
    counter.html(140 - lengthText);
    if (counter.val() < 0) {
      counter.css("color" , "red");
    } else {
      counter.css("color" , "grey");
    }
  });
});