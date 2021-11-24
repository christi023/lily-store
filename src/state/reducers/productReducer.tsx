// always take a initial state and an action
import { Action } from '../actions/productActions';
import { ActionType } from '../action-types';

const initialState = {
  products: [
    {
      id: 1,
      title: 'Nike',
      category: 'shoes',
    },
  ],
};

export const productReducer = (state: {} = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
