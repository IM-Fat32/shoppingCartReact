import productsInitList from '../products/productsInitList.js';
import {EDIT_PRODUCT_NUMBER, DELETE_PRODUCT} from '../actions/productsActions.js';

//dodatnie produktow z listy do stanu aplikacji
export const productReducer = (state = productsInitList, action) => {
    switch(action.type) {
        case DELETE_PRODUCT:
            const {id} = action.payload;
         return state.filter(item => item.id !== id);
        case EDIT_PRODUCT_NUMBER:
            const newState = state.map( item => {

                if(item.id === action.payload.id)
                    item.magazine -= action.payload.numOfProduct;
                return item;
            })
            return newState;
        default: 
            return state;
    }
}
