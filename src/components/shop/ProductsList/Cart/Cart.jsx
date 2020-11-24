import React from 'react';

import { addToCart, deleteFromCart } from '../../../../actions/cartActions.js';

import { useSelector, useDispatch } from 'react-redux';


const Cart = ({ callback }) => {
  let totalPrice = 0;
  const productsInCart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const handleDeleteFromCart = (id) => {
    dispatch(deleteFromCart(id));
  }

  const handleAddToCart = (elementToAdd) => {
    dispatch(addToCart(elementToAdd));
  }

  const showCartArray = productsInCart.map(item => {
    const { nameOfProduct, numOfProduct, id, price } = item;
    totalPrice += item.price * item.numOfProduct;
    return (
      <div key={id} className="Cart-item">
        <div className="Cart-item-name">
          <p className='name'>{nameOfProduct}</p>
        </div>
        <div>
          <p className="price">{price} zł</p>
        </div>
        <div className="counter">
          <p>Ilość: </p>
          <button onClick={() => { handleDeleteFromCart(id) }}>-</button>
          <p className="numberOfProducts">{numOfProduct}</p>
          <button onClick={() => {
            const elementToAdd = { nameOfProduct, numOfProduct, id, price };
            handleAddToCart(elementToAdd);
          }}>
            +
            </button>
        </div>
      </div >
    )
  });
  return (
    <div className="Cart">
      {showCartArray}
      <p>Total: {totalPrice}</p>
      <button onClick={callback}>X</button>
    </div>
  );
}

export default Cart;