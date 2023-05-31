import React from "react";
import { useStore } from "../hooks-store/store";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import classes from "./Products.module.css";

const Favorites = (props) => {
  const state = useStore()[0];

  const favoriteProducts = state.products.filter((p) => p.isFavorite);
  let content = <p className={classes.placeholder}>Got no favorites yet!</p>;
  console.log(favoriteProducts);
  if (favoriteProducts.length > 0) {
    content = (
      <ul className={classes.productsList}>
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
