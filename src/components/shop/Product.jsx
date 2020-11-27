import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart } from '../../actions/cartActions.js'

const Product = ({ nameOfProduct, price, image, id }) => { //utworzenie komponentu Product

  const dispatch = useDispatch(); //hook do actions

  const handleAddToCart = () => { //obluga eventu dodania 1 elementu do koszyka
    const itemObject = {
      nameOfProduct,
      price,
      id,
    }
    dispatch(addToCart(itemObject)) //wykorzystanie hooka
  }
  return (
    <div className="item">
      <h2 className="productListH2">{nameOfProduct}</h2>
      <img src={image} alt="cube_image" />
      <div className="board">
        <h3>Cena: {price} zł</h3>
        <button onClick={handleAddToCart}>Add to cart</button>
        <Link to={`/product/${id}`}>Read more</Link>
      </div>
    </div >
  );
};

export default Product;