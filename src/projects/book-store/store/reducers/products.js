import { TOGGLE_FAV } from "../actions/products";

const initialState = {
  products: [
    {
      id: "p1",
      price: 6,
      title: "My First Book",
      description: "The first book I ever wrote",
      isFavorite: false,
    },
    {
      id: "p2",
      price: 5,
      title: "My Second Book",
      description: "The second book I ever wrote",
      isFavorite: false,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
