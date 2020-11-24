import { combineReducers } from 'redux';

import {cartReducer} from './cartReducer.js';
import {productReducer} from './productsReducer.js';

export const mapReducers = combineReducers({
  cart: cartReducer,
  products: productReducer,
})