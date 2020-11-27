import { combineReducers } from 'redux';

import {cartReducer} from './cartReducer.js';
import {productReducer} from './productsReducer.js';
import {filtrReducer} from './filtrReducer.js';

//główny reducer wykorzystywany w storze
export const mapReducers = combineReducers({
  cart: cartReducer,
  products: productReducer,
  filtr: filtrReducer,
})