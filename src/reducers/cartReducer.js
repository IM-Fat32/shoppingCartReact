import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  EDIT_NUMBER_CART,
  CLEAR_CART,
} from '../actions/cartActions.js';

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case CLEAR_CART: 
    return state=[];
    //dodawanie 1 elementu do listy, jak istnieje to zwieksza numer produktow
    case ADD_TO_CART:
      let isInCart = false;
      state.forEach(item => {
        if(item.id === action.payload.id){
          isInCart = true;
        }
      });
      if(isInCart)
        return[...state];
      return [...state, action.payload];
    //usuwanie 1 elementu z listy, jak jest 1 element usuwa calkowicie ze stora koszyka
    case DELETE_FROM_CART: 
    console.log("here")
      let moreThan1 = false; //falga
      state.forEach(item => { //szukanie elementu o konkretnym id
        if(item.id === action.payload.id && item.numOfProduct > 1){
          item.numOfProduct -= 1;
          moreThan1 = true; //falga ustawianie true
        }
      });
      if(moreThan1) //wykorzystanie flagi 
        return [...state]; //zmiana stanu z innym numerem produktow
      return state.filter(item => item.id !== action.payload.id); //usuniecie elementu
      //edycja ilosci towaru
      case EDIT_NUMBER_CART:
        let isInCartEdit = false;
        state.forEach(item => {
          if(item.id === action.payload.id){
            item.numOfProduct += 1;
            isInCartEdit = true;
          }
        });
        if(isInCartEdit)
          return[...state];
        return [...state, action.payload];
      default:
      console.warn(`Brak akcji ${action.type} w cartActions`)
      return state;
  }
}
