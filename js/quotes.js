const quotes = [
  {
    quote: "We are none of us infallible--not even the youngest of us.",
    author: "W. H. Thompson",
  },
  {
    quote: "Thinking evil is making evil.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "The worst sin - perhaps the only sin - passion can commit, is to be joyless.",
    author: "Dorothy L. Sayers",
  },
  {
    quote:
      "Statistics are like a drunk with a lamppost: used more for support than illumination.",
    author: "Sir Winston Churchill",
  },
  {
    quote:
      "A 'No' uttered from deepest conviction is better and greater than a 'Yes' merely uttered to please, or what is worse, to avoid trouble.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Give no decision till both sides thou'st heard.",
    author: "Phocylides",
  },
  {
    quote:
      "To be mature means to face, and not evade, every fresh crisis that comes.",
    author: "Fritz Kunkel",
  },
  {
    quote: "One repays a teacher badly if one only remains a pupil.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Whatever you do, do cautiously, and look to the end.",
    author: "Unknown",
  },
  {
    quote: "A discovery is said to be an accident meeting a prepared mind.",
    author: "Albert Szent-Gyorgyi",
  },
];

const quote = document.querySelector("#quotes > span:first-child");
const author = document.querySelector("#quotes > span:last-child");

const choseQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = choseQuotes.quote;
author.innerText = choseQuotes.author;
