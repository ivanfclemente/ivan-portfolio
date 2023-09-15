import { useState } from "react";
import { useStore } from "../../hooks-store/store";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import Card from "../UI/Card";

const Products = (props) => {
  const [showFavorites, setShowFavorites] = useState(false);

  const products = useStore()[0].products;
  const favoriteProducts = products.filter((p) => p.isFavorite);

  function handleToggleFavorites() {
    setShowFavorites((prev) => !prev);
  }

  return (
    <section className={classes.products}>
      {showFavorites ? (
        <h2>Your favorites products</h2>
      ) : (
        <h2>Buy your favorite products</h2>
      )}
      <button className={classes.button} onClick={handleToggleFavorites}>
        {showFavorites ? " Show all products" : "Show favorites"}
      </button>
      <ul>
        {showFavorites && favoriteProducts.length === 0 && (
          <Card>
            <p className={classes.placeholder}>Got no favorites yet!</p>
          </Card>
        )}
        {showFavorites &&
          favoriteProducts.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              author={product.author}
              price={product.price}
              description={product.description}
              isFav={product.isFavorite}
            />
          ))}
        {!showFavorites &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              author={product.author}
              price={product.price}
              description={product.description}
              isFav={product.isFavorite}
            />
          ))}
      </ul>
    </section>
  );
};

export default Products;
