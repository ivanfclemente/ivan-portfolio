import Card from "../projects/book-store/components/UI/Card";
import { Link } from "react-router-dom";

import classes from "./AppList.module.css";

const AppList = () => {
  return (
    <div className={classes.appList}>
      <Card>
        <h3>React Apps</h3>
        <p>
          <Link to="atomic-blog">Atomic Blog</Link>
        </p>
        <p>
          <Link to="book-store">Book Store</Link>
        </p>
        <p>
          <Link to="eat-n-split">Eat-N-Split</Link>
        </p>
        <p>
          <Link to="far-away">Far Away Travel List</Link>
        </p>
        <p>
          <a
            href="https://ivan-fast-pizza.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fast React Pizza
          </a>
        </p>
        <p>
          <Link to="food-order">Food Order</Link>
        </p>
        <p>
          <Link to="react-quiz">React Quiz</Link>
        </p>
        <p>
          <Link to="use-popcorn">usePopcorn</Link>
        </p>
        <p>
          <a
            href="https://ivan-worldwise.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WorldWise Travel
          </a>
        </p>
        <p>
          <a
            href="https://ivan-meetups.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetups (NextJS)
          </a>
        </p>
      </Card>
      <Card>
        <h3>Mini React Apps</h3>
        <p>
          <Link to="clock">25+5 Clock</Link>
        </p>
        <p>
          <Link to="calculator">Calculator</Link>
        </p>
        <p>
          <Link to="drum-machine">Drum Machine</Link>
        </p>
        <p>
          <Link to="markdown-previewer">Markdown Previewer</Link>
        </p>
        <p>
          <Link to="random-quotes">Random Quotes</Link>
        </p>
      </Card>
      <Card>
        <h3>Vanilla JavaScript</h3>
        <p>
          <a
            href="bankins/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bank
          </a>
        </p>
        <p>
          <a
            href="https://ivan-forkify.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forkify
          </a>
        </p>
        <p>
          <a href="mapty/index.html" target="_blank" rel="noopener noreferrer">
            Mapty
          </a>
        </p>
        <p>
          <a
            href="pigGame/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pig Game
          </a>
        </p>
      </Card>
      <Card>
        <p>
          Note: These are neither professional nor original works.
          <br />
          The projects were built during several courses.
          <br />
          <a href="https://github.com/ivanfclemente?tab=repositories">GitHub</a>
        </p>
      </Card>
    </div>
  );
};

export default AppList;
