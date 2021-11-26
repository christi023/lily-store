import { ActionType } from '../action-types';
import { Action, ProductList } from '../actions/productActions';
import { Dispatch } from 'redux';

// action-creators are functions that dispatch actions
export const setProducts = (product: ProductList[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_PRODUCTS,
      payload: product,
    });
  };
};

export const selectedProducts = (product: ProductList[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SELECTED_PRODUCT,
      payload: product,
    });
  };
};
