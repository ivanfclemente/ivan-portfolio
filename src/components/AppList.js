import Card from "../projects/book-store/components/UI/Card";
import { Link } from "react-router-dom";

import classes from "./AppList.module.css";

const AppList = () => {
  return (
    <div className={classes.appList}>
      <Card>
        <h3>React Apps</h3>
        <p>
          <Link to="clock">25+5 Clock</Link>
        </p>
        <p>
          <Link to="book-store">Book Store</Link>
        </p>
        <p>
          <Link to="calculator">Calculator</Link>
        </p>
        <p>
          <Link to="drum-machine">Drum Machine</Link>
        </p>
        <p>
          <Link to="favorites">Favorites</Link>
        </p>
        <p>
          <Link to="food-order">Food Order</Link>
        </p>
        <p>
          <Link to="markdown-previewer">Markdown Previewer</Link>
        </p>
        <p>
          <Link to="random-quotes">Random Quotes</Link>
        </p>
        <p>
          <a href="https://ivan-meetups.netlify.app">Meetups (NextJS)</a>
        </p>
      </Card>
      <Card>
        <h3>Vanilla JavaScript</h3>
        <p>
          <a href="bankins/index.html">Bank</a>
        </p>
        <p>
          <a href="https://ivan-forkify.netlify.app/">Forkify</a>
        </p>
        <p>
          <a href="mapty/index.html">Mapty</a>
        </p>
        <p>
          <a href="pigGame/index.html">Pig Game</a>
        </p>
      </Card>
      <Card>
        <p>
          Note: These are neither professional nor original works.
          <br />
          The projects were built during several courses.
        </p>
      </Card>
    </div>
  );
};

export default AppList;
