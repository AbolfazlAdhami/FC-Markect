import { CART_ADD, CART_REMOVE, PRODUCT_DETAILS_REQUESTED, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_REQUESTED, PRODUCT_LIST_SUCCESS } from "./ActionType";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUESTED:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: [...action.payload] };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUESTED:
      return { loading: true, product: {} };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    default:
      return state;
  }
};
export const cartReducer = (state = { productList: [], totalPrice: 0 }, action) => {
  switch (action.type) {
    case CART_ADD:
      const newList = [...state.productList, action.payload];
      const Addprice = state.totalPrice + action.payload.price;
      return { productList: newList, totalPrice: Addprice };
    case CART_REMOVE:
      const Removeprice = state.totalPrice - action.payload.price;

      const filterList = [...state.productList].filter((item) => (item.id != action.payload.id));
      console.log(filterList);
      return { productList: filterList, totalPrice: Removeprice };
    default:
      return state;
  }
};
