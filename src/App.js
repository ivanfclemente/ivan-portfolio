import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";

import "bootstrap/dist/css/bootstrap.min.css";

import AppList from "./components/AppList";
import CalculatorPage from "./pages/Calculator";
import ClockPage from "./pages/Clock";
import DrumMachinePage from "./pages/DrumMachine";
import MarkdownPreviewerPage from "./pages/MarkdownPreviewer";
import QuoteBoxPage from "./pages/QuoteBox";
import BookStorePage from "./pages/BookStore";
import FoodOrderPage from "./pages/FoodOrder";
import EatNSplitPage from "./pages/EatNSplitPage";
import FarAwayPage from "./pages/FarAwayPage";
import UsePopcornPage from "./pages/UsePopcornPage";
import ReactQuizPage from "./pages/ReactQuizPage";
import AtomicBlogPage from "./pages/AtomicBlog";

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
        path: "atomic-blog",
        element: <AtomicBlogPage />,
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
        path: "eat-n-split",
        element: <EatNSplitPage />,
      },
      {
        path: "far-away",
        element: <FarAwayPage />,
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
      {
        path: "react-quiz",
        element: <ReactQuizPage />,
      },
      {
        path: "use-popcorn",
        element: <UsePopcornPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
