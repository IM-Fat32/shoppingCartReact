import { combineReducers } from 'redux';

import {cartReducer} from './cartReducer.js';
import {productReducer} from './productsReducer.js';

//główny reducer wykorzystywany w storze
export const mapReducers = combineReducers({
  cart: cartReducer,
  products: productReducer,
})