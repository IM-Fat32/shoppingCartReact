import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { editNumberCart, deleteFromCart } from '../../../actions/cartActions.js';

//importing styled components
import {
  ItemInCartStyle,
  ImageWrapper,
  ItemImgStyle,
  ItemsWrapper,
  TextWrapper,
  ExitCartStyled,
  CartWrapper,
  TitleStyle,
  PriceStyle,
  NumberOfProductsDivStyle,
  Counter,
  NumberOfProducts,
  StyledButton,
  StyledLink
} from '../Cart/CartStyledComponents.js';

export const checkProductIsNotAvailable = (productsMagazine, numberOfProducts) => {
  if (numberOfProducts >= productsMagazine) {
    return true;
  }
  return false;
}

const Cart = ({ callback, state }) => { //callback , fukcja zamykająca okno koszyka
  let totalPrice = 0; //całkowita cena produktów w koszyku
  let productsInCart = useSelector(store => store.cart); //wczytanie głównego stanu ze store-a
  const dispatch = useDispatch(); //hook do wykonywania akcji

  const handleDeleteFromCart = (id) => { //obsługa zdarzenia przycisku usuń 1 element z koszyka
    dispatch(deleteFromCart(id)); //jako parametr przyjmuje id elementu
  }

  const handleEditCart = (elementToEdit) => {//obsługa zdarzenia przycisku dodaj 1 element do koszyka zarówno z poziomu produktu jak i koszyka
    dispatch(editNumberCart(elementToEdit)); //jako parametr przyjmuje obiekt, który jest następnie destryktyrozywany
  }
  productsInCart = productsInCart.slice(Math.max(productsInCart.length - 3, 0));
  productsInCart.reverse();
  const showCartArray = productsInCart.map(item => { //tworzenie elementów w koszyku jako Array
    const { nameOfProduct, numOfProduct, id, price, image, magazine } = item; //destruktaryzacja parametrow obiektu 
    totalPrice += item.price * item.numOfProduct; //zwiekszanie totalPrice
    return ( //tworzenie elementu 
      <ItemInCartStyle key={id}>
        <ItemsWrapper>
          <ImageWrapper>
            <ItemImgStyle src={image} alt="opis" />
          </ImageWrapper>
          <TextWrapper>
            <TitleStyle>{nameOfProduct}</TitleStyle>
            <PriceStyle>{price} zł</PriceStyle>
            <NumberOfProductsDivStyle>
              <p>Ilość: </p>
              <Counter>
                <StyledButton onClick={() => { handleDeleteFromCart(id) }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                > {numOfProduct > 1 ? "-" : "x"} </StyledButton>
                <NumberOfProducts>{numOfProduct}</NumberOfProducts>
                <StyledButton
                  add="true"
                  onClick={() => {
                    const elementToAdd = { nameOfProduct, numOfProduct, id, price };
                    handleEditCart(elementToAdd, magazine, numOfProduct);
                  }}
                  disabled={checkProductIsNotAvailable(magazine, numOfProduct)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                > + </StyledButton>
              </Counter>
            </NumberOfProductsDivStyle>
          </TextWrapper>
        </ItemsWrapper>
      </ItemInCartStyle >
    )
  });

  const cartVariants = {
    open: { x: 0 },
    closed: { x: '100vw' }
  }

  return (
    <CartWrapper
      variants={cartVariants}
      initial={{ x: '40rem' }}
      animate={state ? "open" : "closed"}
      transition={{ duration: .1 }}
    >
      {
        showCartArray.length > 0 ?
          <>
            {showCartArray}
            <StyledLink to="/cart">Zobacz cały koszyk</StyledLink>
            <p>Total: {totalPrice}zł</p>
          </>
          : <p>Twój koszyk jest pusty</p>
      }
      < ExitCartStyled onClick={callback} > X</ExitCartStyled >
    </CartWrapper >
  );
}
export default Cart;