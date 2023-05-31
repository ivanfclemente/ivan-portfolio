import React from "react";

import { Route, Routes } from "react-router-dom";

import configureProductsStore from "./hooks-store/products-store";

import "./App.css";

import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

configureProductsStore();

const App = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        {/* <ProductsPage />
        <FavoritesPage /> */}
        <Routes>
          <Route path="/" element={<ProductsPage />} exact />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
