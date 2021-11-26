import { ActionType } from '../action-types/index';
// create a action type for every action we can omit with interfaces

// initialState for product
export interface ProductList {
  id: number; // for mapping
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface productsState {
  products: ProductList[];
}

interface setProductsAction {
  type: ActionType.SET_PRODUCTS;
  payload: ProductList[]; // products
}

interface selectedProductsAction {
  type: ActionType.SELECTED_PRODUCT;
  payload: ProductList[];
}

interface removeProductAction {
  type: ActionType.REMOVE_PRODUCT;
}

export type Action = setProductsAction | selectedProductsAction | removeProductAction;
