window.onload = go;

function go() {
  $("#new-quote").click(function () {
    genRandQuote();
  });

  $("#tweet-quote").click(function () {

  });
  genRandQuote();
}

function genRandQuote() {
  let quotes = [
  {
    "id": 1,
    "quote": "Life isn’t about getting and having, it’s about giving and being.",
    "author": "Kevin Kruse" },

  {
    "id": 2,
    "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
    "author": "Napoleon Hill" },

  {
    "id": 3,
    "quote": "Strive not to be a success, but rather to be of value.",
    "author": "Albert Einstein" },

  {
    "id": 4,
    "quote": "Two roads diverged in a wood, and I—I took the one…raveled by, And that has made all the difference.",
    "author": "Robert Frost" },

  {
    "id": 5,
    "quote": "I attribute my success to this: I never gave or took any excuse.",
    "author": "Florence Nightingale" },

  {
    "id": 6,
    "quote": "You miss 100% of the shots you don’t take.",
    "author": "Wayne Gretzky" },

  {
    "id": 7,
    "quote": "I’ve missed more than 9000 shots in my career. I’v…over again in my life. And that is why I succeed.",
    "author": "Michael Jordan" },

  {
    "id": 8,
    "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "author": "Amelia Earhart" },

  {
    "id": 9,
    "quote": "Every strike brings me closer to the next home run.",
    "author": "Babe Ruth" },

  {
    "id": 10,
    "quote": "Definiteness of purpose is the starting point of all achievement.",
    "author": "W. Clement Stone" },

  {
    "id": 11,
    "quote": "We must balance conspicuous consumption with conscious capitalism.",
    "author": "Kevin Kruse" },

  {
    "id": 12,
    "quote": "Life is what happens to you while you’re busy making other plans.",
    "author": "John Lennon" },

  {
    "id": 13,
    "quote": "We become what we think about.",
    "author": "Earl Nightingale" },

  {
    "id": 14,
    "quote": "Twenty years from now you will be more disappointe…e winds in your sails.  Explore, Dream, Discover.",
    "author": "Mark Twain" },

  {
    "id": 15,
    "quote": "Life is 10% what happens to me and 90% of how I react to it.",
    "author": "Charles Swindoll" },

  {
    "id": 16,
    "quote": "The most common way people give up their power is by thinking they don’t have any.",
    "author": "Alice Walker" },

  {
    "id": 17,
    "quote": "The mind is everything. What you think you become.",
    "author": "Buddha" },

  {
    "id": 18,
    "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
    "author": "Chinese Proverb" },

  {
    "id": 19,
    "quote": "An unexamined life is not worth living.",
    "author": "Socrates" },

  {
    "id": 20,
    "quote": "Eighty percent of success is showing up.",
    "author": "Woody Allen" },

  {
    "id": 21,
    "quote": "Your time is limited, so don’t waste it living someone else’s life.",
    "author": "Steve Jobs" },

  {
    "id": 22,
    "quote": "Winning isn’t everything, but wanting to win is.",
    "author": "Vince Lombardi" },

  {
    "id": 23,
    "quote": "I am not a product of my circumstances. I am a product of my decisions.",
    "author": "Stephen Covey" },

  {
    "id": 24,
    "quote": "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    "author": "Pablo Picasso" },

  {
    "id": 25,
    "quote": "You can never cross the ocean until you have the courage to lose sight of the shore.",
    "author": "Christopher Columbus" },

  {
    "id": 26,
    "quote": "I’ve learned that people will forget what you said… people will never forget how you made them feel.",
    "author": "Maya Angelou" },

  {
    "id": 27,
    "quote": "Either you run the day, or the day runs you.",
    "author": "Jim Rohn" },

  {
    "id": 28,
    "quote": "Whether you think you can or you think you can’t, you’re right.",
    "author": "Henry Ford" },

  {
    "id": 29,
    "quote": "The two most important days in your life are the day you are born and the day you find out why.",
    "author": "Mark Twain" },

  {
    "id": 30,
    "quote": "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    "author": "Johann Wolfgang von Goethe" },

  {
    "id": 31,
    "quote": "The best revenge is massive success.",
    "author": "Frank Sinatra" },

  {
    "id": 32,
    "quote": "People often say that motivation doesn’t last. Wel… does bathing.  That’s why we recommend it daily.",
    "author": "Zig Ziglar" },

  {
    "id": 33,
    "quote": "Life shrinks or expands in proportion to one’s courage.",
    "author": "Anais Nin" },

  {
    "id": 34,
    "quote": "If you hear a voice within you say “you cannot pai… all means paint and that voice will be silenced.",
    "author": "Vincent Van Gogh" },

  {
    "id": 35,
    "quote": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    "author": "Aristotle" },

  {
    "id": 36,
    "quote": "Ask and it will be given to you; search, and you w… find; knock and the door will be opened for you.",
    "author": "Jesus" },

  {
    "id": 37,
    "quote": "The only person you are destined to become is the person you decide to be.",
    "author": "Ralph Waldo Emerson" },

  {
    "id": 38,
    "quote": "Go confidently in the direction of your dreams.  Live the life you have imagined.",
    "author": "Henry David Thoreau" },

  {
    "id": 39,
    "quote": "When I stand before God at the end of my life, I w…eft and could say, I used everything you gave me.",
    "author": "Erma Bombeck" },

  {
    "id": 40,
    "quote": "Few things can help an individual more than to pla…y on him, and to let him know that you trust him.",
    "author": "Booker T. Washington" },

  {
    "id": 41,
    "quote": "Certain things catch your eye, but pursue only those that capture the heart.",
    "author": " Ancient Indian Proverb" },

  {
    "id": 42,
    "quote": "Believe you can and you’re halfway there.",
    "author": "Theodore Roosevelt" },

  {
    "id": 43,
    "quote": "Everything you’ve ever wanted is on the other side of fear.",
    "author": "George Addair" },

  {
    "id": 44,
    "quote": "We can easily forgive a child who is afraid of the…gedy of life is when men are afraid of the light.",
    "author": "Plato" },

  {
    "id": 45,
    "quote": "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
    "author": "Maimonides" },

  {
    "id": 46,
    "quote": "Start where you are. Use what you have.  Do what you can.",
    "author": "Arthur Ashe" },

  {
    "id": 47,
    "quote": "When I was 5 years old, my mother always told me t…ent, and I told them they didn’t understand life.",
    "author": "John Lennon" },

  {
    "id": 48,
    "quote": "Fall seven times and stand up eight.",
    "author": "Japanese Proverb" },

  {
    "id": 49,
    "quote": "When one door of happiness closes, another opens, …e do not see the one that has been opened for us.",
    "author": "Helen Keller" },

  {
    "id": 50,
    "quote": "Everything has beauty, but not everyone can see.",
    "author": "Confucius" }];



  let randQuote = quotes[Math.floor(Math.random() * quotes.length)];
  $("#text").html(randQuote.quote);
  $("#author").html(randQuote.author);
  $("#tweet-quote").attr("href", stringToClickToTweetURL('"' + randQuote.quote + '" - ' + randQuote.author));
}

function stringToClickToTweetURL(str) {
  let stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");
  let resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

  return resultString;
}