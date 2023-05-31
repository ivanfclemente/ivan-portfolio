import React from "react";

import ProductItem from "../components/Products/ProductItem";
import { useStore } from "../hooks-store/store";
import classes from "./Products.module.css";

const Products = (props) => {
  const state = useStore()[0];

  return (
    <ul className={classes.productsList}>
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
