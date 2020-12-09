import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { checkProductIsNotAvailable } from '../Cart/Cart.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { addToCart } from '../../../actions/cartActions.js';


//Styled Components 
const ProductWrapper = styled.div` //wraper na cały obiekt produktu
  flex-basis: 40%;
  padding: 30px;
  position: relative;
  margin-bottom: 30px;
  cursor: pointer;
  transition: .3s;
  &:hover{
    border: 1px solid black;
  }
`;

const ProductTitle = styled.p` //styl dla nazwy produktu
  font-size: 1.1rem;
  font-weight: 500;
  color: black;
  max-width: 20rem;
  text-overflow: ellipsis;
  //usuniecie text decoration bezposrednio w Link
`;

export const ProductInteractiveWrapper = styled.div` //styl dla pojemnika na interaktywne elementy
  display: flex;
  justify-content: space-around;
  height: 2.5rem;
  line-height: 2.5rem;
`;

export const ProductAddToCartButton = styled.button`
  background-color: green;
  border: none;
  border-radius: .4rem;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  padding: .1rem .5rem ;
`;

const StyledLink = styled(Link)`
  text-decoration: "none";
`;

export const ProductAddToCartButtonSpan = styled.span`
  padding: .4rem; 
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const ProductPrice = styled.p`
  font-weight: 500;
`;

const StyledImg = styled.img`
  position: relative;
  height: 40vh;
  width: 35vh;
  left: 50%;
  object-fit: cover;
  transform: translate(-50%, 0);
  padding: 20px;
`;
//

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
        >
          <FontAwesomeIcon icon={faCartPlus} />
          <ProductAddToCartButtonSpan>add to cart</ProductAddToCartButtonSpan>
        </ProductAddToCartButton>
        <ProductPrice>Cena: {price}zł</ProductPrice>
      </ProductInteractiveWrapper>
    </ProductWrapper >
  );
};

export default Product;