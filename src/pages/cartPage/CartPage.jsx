import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, containerVariants } from '../../components/Basic.jsx';

import styled from 'styled-components';
import { editNumberCart, deleteFromCart, clearCart } from '../../actions/cartActions.js';
import ShopMenu from '../../components/shop/ShopMenu/ShopMenu.jsx';

import { deleteProduct, editProductNumber } from '../../actions/productsActions.js';

import { checkProductIsNotAvailable } from '../../components/shop/Cart/Cart.jsx';

//importing styled components
import { StyledButton, NumberOfProducts } from '../../components/shop/Cart/CartStyledComponents.js';
import { StyledNameProduct, StyledPrice } from '../productPage/ProductPageStyledComponents.js';
//styled components

const NumberAndButtonsWrapper = styled.div`
  display: flex;
`;

const StyledNameProductCartPage = styled(StyledNameProduct)`
font-size: 1rem;
width: 25rem;
text-overflow: ellipsis;
padding: 1rem 0;
`;

const StyledPriceCartPage = styled(StyledPrice)`
font-size: 1.1rem;
`;

const StyledImg = styled.img`
  height: 10rem;
  width: 12rem;
  display: block;
  padding: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductWrapper = styled.div`
  border-bottom: 1px solid black;
  padding: 1rem 1rem;
  display: flex;
  position: relative;
  width: 60%;
  margin: auto;
  justify-content: space-around;
`;

const StyledContainer = styled(Container)`
  margin-top: 4rem;
  position: relative;
  min-height: 85vh;
`;

const BuyPanel = styled.div`
  width: 50%;
  margin: auto;
  padding: 1rem 0;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const BuyNowButton = styled.button`
  font-size: 1.4rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  background-color: #05D88E;
  border: none;
  border-radius: 1rem;
  color: white;
`;

//

const CartPage = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector(store => store.cart);
  let totalPrice = 0;
  const itemsToBuy = [];

  const cartProducts = cartStore.map(product => {
    const { nameOfProduct, price, image, numOfProduct, id, magazine } = product;
    itemsToBuy.push({ id, numOfProduct, magazine })
    const handleAddButton = () => {
      dispatch(editNumberCart(product));
    }
    const handleDeleteButton = () => {
      dispatch(deleteFromCart(id));
    }
    totalPrice += price * numOfProduct;

    return (
      <ProductWrapper key={id}>
        <TextWrapper>
          <StyledNameProductCartPage>{nameOfProduct}</StyledNameProductCartPage>
          <StyledPriceCartPage>{price} zł</StyledPriceCartPage>
          <NumberAndButtonsWrapper>
            <StyledButton
              onClick={handleDeleteButton}>
              {numOfProduct > 1 ? "-" : "x"}
            </StyledButton>
            <NumberOfProducts> {numOfProduct}</NumberOfProducts>
            <StyledButton
              onClick={handleAddButton}
              add="true"
              disabled={checkProductIsNotAvailable(magazine, numOfProduct)} >
              +
            </StyledButton>
          </NumberAndButtonsWrapper>
        </TextWrapper>
        <StyledImg src={image} alt="" />
      </ProductWrapper>
    )
  });

  const handleReduceNumberOfProducts = () => {

    itemsToBuy.forEach(el => {
      if (el.numOfProduct === el.magazine)
        dispatch(deleteProduct(el));
      else
        dispatch(editProductNumber(el));
      dispatch(clearCart());
    });
  }

  return (
    <>
      <Container
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
        <ShopMenu />
        <StyledContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {cartProducts.length > 0 ?
            <> {cartProducts.reverse()}
              <BuyPanel>
                <StyledPrice>Łączna kwota: {totalPrice} zł</StyledPrice>
                <Link to="/done">
                  <BuyNowButton onClick={handleReduceNumberOfProducts}>
                    Kup teraz
            </BuyNowButton>
                </Link>
              </BuyPanel>
            </>
            : <p>Koszyk jest pusty, dodaj trochę produktów</p>}
        </StyledContainer>
      </Container>
    </>

  );
}

export default CartPage;