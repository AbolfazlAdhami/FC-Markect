import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { productListReducer, productDetailsReducer, cartReducer } from "./reducer";

const reducers = combineReducers({
  productReducer: productListReducer,
  detailsReducer: productDetailsReducer,
  cartList: cartReducer,
});
const middleware = [thunk];
const initState = [];

const store = createStore(reducers, initState, applyMiddleware(...middleware));

export default store;
