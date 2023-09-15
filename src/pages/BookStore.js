import BookStore from "../projects/book-store/BookStore";
import { Provider } from "react-redux";
import store from "../projects/book-store/store/index";

function BookStorePage() {
  return (
    <Provider store={store}>
      <BookStore />
    </Provider>
  );
}

export default BookStorePage;
