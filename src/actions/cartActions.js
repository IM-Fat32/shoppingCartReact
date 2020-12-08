export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const EDIT_NUMBER_CART = "EDIT_NUMBER_CART";

//uchwyty dispatchow
export const addToCart = ({nameOfProduct, numOfProduct = 1, price, id, image, magazine}) => ({
  type: ADD_TO_CART,
  payload: {
    nameOfProduct,
    numOfProduct,
    price,
    id,
    image,
    magazine,
  }
});

export const editNumberCart = ({nameOfProduct, numOfProduct, price, id, image, magazine}) => ({
  type: EDIT_NUMBER_CART,
  payload: {
    nameOfProduct,
    numOfProduct,
    price,
    id,
    image,
    magazine,
  }
});

export const deleteFromCart = id => ({
  type: DELETE_FROM_CART,
  payload: {
    id,
  }
})

