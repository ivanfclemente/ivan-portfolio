import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "../Cart/Cart";
import { sendCartData, fetchCartData } from "../../store/cart-actions";

import classes from "./Layout.module.css";

import configureProductsStore from "../../hooks-store/products-store";
let isInitial = true;

configureProductsStore();

function Layout({ children }) {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <div className={classes.container}>
      {showCart && <Cart />}
      {/* <Products /> */}
      {children}
    </div>
  );
}

export default Layout;
