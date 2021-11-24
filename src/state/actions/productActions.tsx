import { ActionType } from '../action-types/index';
// create a action type for every action we can omit with interfaces

interface setProductsAction {
  type: ActionType.SET_PRODUCTS;
  payload: {}; // products
}

interface selectedProductsAction {
  type: ActionType.SELECTED_PRODUCT;
  payload: {};
}

interface removeProductAction {
  type: ActionType.REMOVE_PRODUCT;
}

export type Action = setProductsAction | selectedProductsAction | removeProductAction;
