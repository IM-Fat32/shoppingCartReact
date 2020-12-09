import React from 'react';
import { useDispatch } from 'react-redux';

import { checkProductIsNotAvailable } from '../Cart/Cart.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { addToCart } from '../../../actions/cartActions.js';

import {
  ProductWrapper,
  StyledLink,
  ProductTitle,
  ProductInteractiveWrapper,
  StyledImg,
  ProductAddToCartButton,
  ProductAddToCartButtonSpan,
  ProductPrice,
} from './styledComponents.js';

const Product = ({ nameOfProduct, price, image, id, magazine, numOfProducts }) => { //utworzenie komponentu Product

  const dispatch = useDispatch(); //hook do actions
  const handleAddToCart = () => { //obluga eventu dodania 1 elementu do koszyka
    const itemObject = {
      nameOfProduct,
      price,
      id,
      image,
      magazine,
    }
    dispatch(addToCart(itemObject)) //wykorzystanie hooka
  }
  return (
    <ProductWrapper>
      <StyledLink to={`/shop/product/${id}`} style={{ textDecoration: "none" }}>
        <ProductTitle>{nameOfProduct}</ProductTitle>
        <StyledImg src={image} alt={`${nameOfProduct}`} />
      </StyledLink>
      <ProductInteractiveWrapper>
        <ProductAddToCartButton
          onClick={handleAddToCart}
          disabled={checkProductIsNotAvailable(magazine, numOfProducts)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <FontAwesomeIcon icon={faCartPlus} />
          <ProductAddToCartButtonSpan>dodaj do koszyka</ProductAddToCartButtonSpan>
        </ProductAddToCartButton>
        <ProductPrice>Cena: {price}zł</ProductPrice>
      </ProductInteractiveWrapper>
    </ProductWrapper >
  );
};

export default Product;