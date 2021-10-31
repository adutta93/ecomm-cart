import { ActionTypes } from "../actions/ACTION_TYPES";

const { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } = ActionTypes;
const initialState = {
  products: [
    {
      id: 1,
      title: "Akash",
      category: "Software Engineer",
    },
  ],
};
export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS:
      return state;
    case SELECTED_PRODUCT:
      return state;
    case REMOVE_SELECTED_PRODUCT:
      return state;
    default:
      return state;
  }
};
