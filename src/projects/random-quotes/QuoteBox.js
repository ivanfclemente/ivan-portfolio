import React, { useState } from "react";
import classes from "./QuoteBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import { quotes, colors } from "./variables";

const RandomQuote = () => {
  const randomIndexQuote = () => Math.floor(Math.random() * quotes.length);
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const [quote, setQuote] = useState(quotes[randomIndexQuote()]);
  const [backgroundColor, setBackgroundColor] = useState(randomColor());

  const handleNewQuote = () => {
    setQuote(quotes[randomIndexQuote()]);
    setBackgroundColor(randomColor());
  };

  return (
    <div
      className={classes.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={classes.quoteBox}>
        <div className={classes.text}>
          <FontAwesomeIcon icon={faQuoteLeft} />
          <span> {quote.quote}</span>
        </div>
        <div className={classes.quoteAuthor}>
          - <span className={classes.author}>{quote.author}</span>
        </div>
        <div className={classes.buttons}>
          <a
            className={classes.tweetQuote}
            href="https://twitter.com/intent/tweet"
            title="Tweet this quote!"
            target="_top"
          >
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
          </a>
          <a
            className={classes.tumblrQuote}
            href="https://www.tumblr.com/privacy/consent/begin"
            title="Post this quote on tumblr!"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faTumblr} />
            </button>
          </a>
          <span>
            <button
              className={`btn btn-primary ${classes.newQuote}`}
              onClick={handleNewQuote}
            >
              New Quote
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
