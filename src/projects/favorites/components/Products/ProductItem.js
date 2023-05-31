import React from "react";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useStore } from "../../hooks-store/store";

const ProductItem = (props) => {
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className={classes.productItem}>
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={
            !props.isFav ? `${classes.buttonOutline}` : `${classes.buttonClear}`
          }
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
