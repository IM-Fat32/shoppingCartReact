import {
  ADD_TO_CART,
  DELETE_FROM_CART,
} from '../actions/cartActions.js';

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let isInCart = false;
      state.forEach(item => {
        if(item.id === action.payload.id){
          item.numOfProduct += 1;
          isInCart = true;
        }
      });
      if(isInCart)
        return[...state];

      return [...state, action.payload];
    case DELETE_FROM_CART: 
      let moreThan1 = false;
      state.forEach(item => {
        if(item.id === action.payload.id && item.numOfProduct > 1){
          item.numOfProduct -= 1;
          moreThan1 = true;
        }
      });
      if(moreThan1)
        return [...state];
      return state.filter(item => item.id !== action.payload.id);
    default:
      console.warn(`Brak akcji ${action.type} w cartActions`)
      return state;
  }
}
