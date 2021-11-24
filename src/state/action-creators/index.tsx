import { ActionType } from '../action-types';
import { Action } from '../actions/productActions';
import { Dispatch } from 'redux';

// action-creators are functions that dispatch actions
export const setProducts = (products: {}) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_PRODUCTS,
      payload: products,
    });
  };
};

export const selectedProducts = (product: {}) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SELECTED_PRODUCT,
      payload: product,
    });
  };
};
