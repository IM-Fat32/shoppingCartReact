import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import { addToCart, deleteFromCart } from '../../../../actions/cartActions.js';

const Cart = ({ callback }) => { //callback , fukcja zamykająca okno koszyka
  let totalPrice = 0; //całkowita cena produktów w koszyku
  const productsInCart = useSelector(store => store.cart); //wczytanie głównego stanu ze store-a
  const dispatch = useDispatch(); //hook do wykonywania akcji

  const handleDeleteFromCart = (id) => { //obsługa zdarzenia przycisku usuń 1 element z koszyka
    dispatch(deleteFromCart(id)); //jako parametr przyjmuje id elementu
  }

  const handleAddToCart = (elementToAdd) => {//obsługa zdarzenia przycisku dodaj 1 element do koszyka zarówno z poziomu produktu jak i koszyka
    dispatch(addToCart(elementToAdd)); //jako parametr przyjmuje obiekt, który jest następnie destryktyrozywany
  }

  const showCartArray = productsInCart.map(item => { //tworzenie elementów w koszyku jako Array
    const { nameOfProduct, numOfProduct, id, price } = item; //destruktaryzacja parametrow obiektu 
    totalPrice += item.price * item.numOfProduct; //zwiekszanie totalPrice
    return (
      <div key={id} className="Cart-item">
        <div className="Cart-item-name">
          <p className='name'>{nameOfProduct}</p>
        </div>
        <div>
          <p className="price">{price} zł</p>
        </div>
        <div className="numberofproducts">
          <p>Ilość: </p>
          <div className="counter">
            <FontAwesomeIcon icon={faMinus} onClick={() => { handleDeleteFromCart(id) }} />
            <p className="numberOfProducts">{numOfProduct}</p>
            <FontAwesomeIcon icon={faPlus} onClick={() => {
              const elementToAdd = { nameOfProduct, numOfProduct, id, price };
              handleAddToCart(elementToAdd);
            }} />
          </div>
        </div>
      </div >
    )
  });
  return (
    <div className="Cart">
      {showCartArray}
      <p>Total: {totalPrice}</p>
      <button className="exitCart" onClick={callback}>X</button>
    </div>
  );
}

export default Cart;