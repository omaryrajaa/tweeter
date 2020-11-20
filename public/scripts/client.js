
$(document).ready(() => {

  const createHTMLTweet = tweets => renderTweets(tweets, createTweetElement);
  fetchTweets(createHTMLTweet);
  submitTweet();

});

/**Get data from the form and submit it, if no text entered or if text length > 140 get an error message */
const submitTweet = () => {
  $("form").submit(function(event) {
    event.preventDefault();
    const tweetText = $("#tweet-text").val();
    let validTweet = validateCounter(tweetText);
    if (validTweet === true) {
      $
        .ajax({
          url: "/tweets",
          method: "POST",
          data: $(this).serialize()
        })
        .then(function() {
          fetchTweets();
          $("output").val(140);
          $("#tweet-text").val(""); 
          $("#error-msg").slideUp();
        });
    }
  });
};

/**Render all the tweets */
const fetchTweets = () => {
  $
    .ajax('/tweets')
    .then(tweets => renderTweets(tweets));
};

/**Create a new section for the tweet */
const createTweetElement = (tweet) => {
  
  const name = $('<span>').text(tweet.user.name);
  const handle = $('<span>').text(tweet.user.handle);
  const avatar = $('<img>').attr("src", tweet.user.avatars);
  const content = $('<p>').text(tweet.content.text);
  const createdAt = $('<footer><span>').text(tweet["created_at"]);
  
  const newArticle = $('<article>');
  const header = $('<header>');
  const divHeader = $('<div>');
  const divUsername = $('<div>');
  const divContent = $('<div>');
  const divTweetContent = $('<div>');
  const divBorder = $('<div>');
  const footer = $('<footer>');
  const divTime = $('<div>');
  const divIcons = $('<div>');
  const icon1 = $('<i>');
  const icon2 = $('<i>');
  const icon3 = $('<i>');
  
  //append Header
  divHeader.append(avatar);
  divHeader.append(name);
  divHeader.addClass("user fade");
  header.append(divHeader);
  divUsername.append(handle);
  divUsername.addClass("username");
  header.append(divUsername);
  newArticle.append(header);
  //apppend Content
  divTweetContent.append(content);
  divContent.addClass("tweet-content fade");
  divBorder.addClass("ac-brdr");
  divContent.append(divTweetContent);
  divContent.append(divBorder);
  newArticle.append(divContent);

  //append Footer
  divTime.append(createdAt);
  divTime.addClass("time fade");
  icon1.addClass("fa fa-flag");
  icon2.addClass("fa fa-retweet");
  icon3.addClass("fa fa-heart");
  divIcons.append(icon1);
  divIcons.append(icon2);
  divIcons.append(icon3);
  divIcons.addClass("icons fade");
  footer.append(divTime);
  footer.append(divIcons);
  newArticle.append(footer);
  newArticle.addClass('tweets');
  
  return newArticle;
};
  
const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $('section.tweets-container').empty();
  for (const tweet of Object.values(tweets)) {
    const newArticle = createTweetElement(tweet);
    $('section.tweets-container').prepend(newArticle);
  }
};

/**Validate if length tweet entered respect the rules */
const validateCounter = (tweet) => {
  const tweetLength = tweet.length;
  const errorspan = $($("#error-msg").children()[1]);
  if (tweetLength === 0 || tweet === "" || tweet === null) {
    errorspan.text("Tweet EMPTY!");
    $("#error-msg").slideDown();
  } else if (tweetLength > 140) {
    errorspan.text("Your Tweet is Too Long! Max 140 chars!");
    $("#error-msg").slideDown();
  } else {
    return true;
  }
};