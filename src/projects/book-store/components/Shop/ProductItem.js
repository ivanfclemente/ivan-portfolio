import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { useStore } from "../../hooks-store/store";
import { useState } from "react";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const dispatchFav = useStore(false)[1];
  const [showDescription, setShowDescription] = useState(false);

  const toggleFavHandler = () => {
    dispatchFav("TOGGLE_FAV", props.id);
  };
  const handleToggleShowDescription = () => {
    setShowDescription((prev) => !prev);
  };

  const { author, title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>
            {title} by {author}
          </h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        {showDescription && <p>{description}</p>}
        <button
          className={classes.showDescription}
          onClick={handleToggleShowDescription}
        >
          {showDescription ? "- hide description" : "+ show description"}
        </button>
        <div className={classes.actions}>
          <button
            className={
              !props.isFav ? `${classes.button}` : `${classes.buttonClear}`
            }
            onClick={toggleFavHandler}
          >
            {props.isFav ? "Un-Favorite" : "Favorite"}
          </button>
          <button className={classes.button} onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
