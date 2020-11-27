export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

//uchwyty dispatchow
export const addToCart = ({nameOfProduct, numOfProduct = 1, price, id}) => ({
  type: ADD_TO_CART,
  payload: {
    nameOfProduct,
    numOfProduct,
    price,
    id,
  }
});

export const deleteFromCart = id => ({
  type: DELETE_FROM_CART,
  payload: {
    id,
  }
})

