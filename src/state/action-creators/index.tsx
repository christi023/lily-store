import { ActionType } from '../action-types';
import { Action, ProductList } from '../actions/productActions';
import { Dispatch } from 'redux';
import fakeStoreApi from '../../apis/fakeStoreApi';

// action-creators are functions that dispatch actions
// middleware thunk helps to make async call inside action creator
export const fetchProducts = () => async (dispatch: Dispatch<Action>) =>{
 const response = await fakeStoreApi.get("/products")
  dispatch({type:ActionType.FETCH_PRODUCTS, payload:response.data})
  } 

  // get a product detail
export const fetchProduct = (id: string) => async (dispatch: Dispatch<Action>) =>{
 const response = await fakeStoreApi.get(`/products/${id}`)
  console.log('rrr', response)
  dispatch({type:ActionType.SELECTED_PRODUCT, payload:response.data})
  } 

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
