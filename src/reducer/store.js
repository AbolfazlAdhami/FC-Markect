import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { productListReducer, productDetailsReducer } from "./reducer";

const reducers = combineReducers({
  productReducer: productListReducer,
  detailsReducer: productDetailsReducer,
});
const middleware = [thunk];
const initState = [];

const store = createStore(reducers, initState, applyMiddleware(...middleware));

export default store;
