import { ActionTypes } from "./ACTION_TYPES";

const { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } = ActionTypes;

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setProducts = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const setProducts = (product) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};
