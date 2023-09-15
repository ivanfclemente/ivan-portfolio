import Products from "./components/Shop/Products";

import configureProductsStore from "./hooks-store/products-store";

import MainHeader from "./components/MainHeader/MainHeader";
import Layout from "./components/UI/Layout";
import { useSelector } from "react-redux";
import Notification from "./components/UI/Notification";

configureProductsStore();

const BookStore = (props) => {
  const notification = useSelector((state) => state.ui.notification);

  return (
    <>
      <MainHeader />
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <main>
        <Layout>
          <Products />
        </Layout>
      </main>
    </>
  );
};

export default BookStore;
