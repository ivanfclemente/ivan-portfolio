import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";

import "bootstrap/dist/css/bootstrap.min.css";

import AppList from "./components/AppList";
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
        element: <AppList />,
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
