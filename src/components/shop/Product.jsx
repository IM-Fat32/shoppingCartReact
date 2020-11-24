import React from 'react';

import { useDispatch } from 'react-redux';

import { addToCart } from '../../actions/cartActions.js'

const Product = ({ nameOfProduct, price, image, id }) => {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const itemObject = {
      nameOfProduct,
      price,
      id,
    }

    dispatch(addToCart(itemObject))



  }
  return (
    <div className="item">
      <h2 className="productListH2">{nameOfProduct}</h2>
      <img src={image} alt="cube_image" />
      <div className="board">
        <h3>Cena: {price} zł</h3>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>


    </div >
  );
}

export default Product;