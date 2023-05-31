import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import RootLayout from "./pages/Root";

import "bootstrap/dist/css/bootstrap.min.css";

import CalculatorPage from "./pages/Calculator";
import ClockPage from "./pages/Clock";
import DrumMachinePage from "./pages/DrumMachine";
import MarkdownPreviewerPage from "./pages/MarkdownPreviewer";
import QuoteBoxPage from "./pages/QuoteBox";
import Favorites from "./projects/favorites/App";
import BookStorePage from "./pages/BookStore";
import FoodOrderPage from "./pages/FoodOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <div className="App">
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
              <Link to="https://ivan-meetups.netlify.app">
                Meetups (NextJS)
              </Link>
            </p>
            <br />
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
          </div>
        ),
      },
      {
        path: "clock",
        element: <ClockPage />,
      },
      {
        path: "book-store",
        element: <BookStorePage />,
      },
      {
        path: "calculator",
        element: <CalculatorPage />,
      },
      {
        path: "drum-machine",
        element: <DrumMachinePage />,
      },
      {
        path: "favorites",
        element: <Favorites />,
        children: [
          {
            index: true,
            element: <Favorites />,
          },
          {
            path: "favorites",
            element: <Favorites />,
          },
        ],
      },
      {
        path: "food-order",
        element: <FoodOrderPage />,
      },
      {
        path: "markdown-previewer",
        element: <MarkdownPreviewerPage />,
      },
      {
        path: "random-quotes",
        element: <QuoteBoxPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
