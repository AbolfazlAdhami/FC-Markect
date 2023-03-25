import axios from "axios";
import { PRODUCT_DETAILS_REQUESTED, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_REQUESTED, PRODUCT_LIST_SUCCESS } from "./ActionType";

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUESTED });
    const { status, data } = await axios.get(`https://fakestoreapi.com/products`);

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const productDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUESTED });

    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
