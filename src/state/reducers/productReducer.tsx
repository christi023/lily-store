// always take a initial state and an action
import { Action, productsState } from '../actions/productActions';
import { ActionType } from '../action-types';

const initialState: productsState = {
  products: [],
};

export const productReducer = (state: productsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
