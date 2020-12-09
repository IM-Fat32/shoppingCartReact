export const EDIT_PRODUCT_NUMBER = "EDIT_PRODUCT_NUMBER";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const editProductNumber = ({id, numOfProduct}) => ({
  type: EDIT_PRODUCT_NUMBER,
  payload: {
    id,
    numOfProduct,
  }
});

export const deleteProduct = ({id}) => ({
  type: DELETE_PRODUCT,
  payload: {
    id,
  }
});