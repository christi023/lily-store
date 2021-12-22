import { ActionType } from '../action-types';
import { Action, ProductList } from '../actions/productActions';
import { Dispatch } from 'redux';

// action-creators are functions that dispatch actions
export const setProducts = (products: ProductList[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_PRODUCTS,
      payload: products,
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

export const removeSelectedProduct = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_PRODUCT,      
    });
  };
};
