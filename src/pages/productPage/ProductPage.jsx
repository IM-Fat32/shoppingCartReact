import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../actions/cartActions';

import ShopMenu from '../../components/shop/ShopMenu/ShopMenu.jsx';

import { ProductAddToCartButton, ProductInteractiveWrapper, ProductAddToCartButtonSpan } from '../../components/shop/Product/Product.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { Container, containerVariants } from '../../components/Basic.jsx';

//importing styled components
import {
  ProductWrappper,
  SliderWrapper,
  StyledButton,
  StyledImage,
  MiniMenuWarapper,
  MiniImage,
  StyledNameProduct,
  StyledPrice,
  Info,
  Title,
  PanelWrapper,
  Arrows
} from './ProductPageStyledComponents.js';

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const idFromUrl = Number(props.match.params.id);
  const products = useSelector(store => store.products);//pobranie produktow ze store
  let currentProduct = '';
  let imagesToShow = [];

  products.map(item => { //szukanie currentProduct
    if (item.id === idFromUrl) //jezeli id produktu ze store jest identyczny jak id z url
      currentProduct = item; //przypisanie wartosci do currentProduct

    return null
  });

  const {
    nameOfProduct,
    price,
    images,
    magazine,
    id,
    screen,
    processor,
    memory,
    color,
  } = currentProduct;
  const tabImages = [images.showImage, images.frontImage, images.backImage];
  const image = images.showImage;
  const [currentImage, setCurrrentImage] = useState(0);

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

  const nextImageButton = () => {
    if (currentImage === 2) {
      setCurrrentImage(0);
      return;
    }
    setCurrrentImage(prev => prev += 1);
  }

  const prevImageButton = () => {
    if (currentImage === 0) {
      setCurrrentImage(2);
      return;
    }
    setCurrrentImage(prev => prev -= 1);
  }

  const switchImageOnClick = (imageNumber) => {
    setCurrrentImage(imageNumber);
  }

  for (let i = 0; i < tabImages.length; i++)
    imagesToShow.push(<MiniImage key={i} src={tabImages[i]} active={currentImage === i ? 'true' : false} onClick={() => { switchImageOnClick(i) }} />);

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ShopMenu />
      <ProductWrappper>
        <StyledNameProduct>{nameOfProduct}</StyledNameProduct>
        <StyledPrice>{price} zł</StyledPrice>
        <SliderWrapper>
          <Arrows>
            <StyledButton icon={faArrowLeft} left="true" onClick={prevImageButton}>prev</StyledButton>
            <StyledButton icon={faArrowRight} left="false" onClick={nextImageButton} > next</StyledButton>
          </Arrows>
          <StyledImage src={tabImages[currentImage]} alt="" />
          <MiniMenuWarapper>
            {imagesToShow}
          </MiniMenuWarapper>
        </SliderWrapper>'
        <PanelWrapper>
          <Title>Dostępne sztuki: {magazine} </Title>
          <ProductInteractiveWrapper>
            <ProductAddToCartButton onClick={handleAddToCart}>
              <FontAwesomeIcon icon={faCartPlus} />
              <ProductAddToCartButtonSpan>add to cart</ProductAddToCartButtonSpan>
            </ProductAddToCartButton>
          </ProductInteractiveWrapper>
        </PanelWrapper>
        <Title style={{ marginBottom: ".5rem" }}>Specyfikacja:</Title>
        <Info>Ekran: {screen}"</Info>
        <Info>Procesor: {processor}</Info>
        <Info>Pamięć: {memory}GB</Info>
        <Info>Kolor: {color}</Info>
      </ProductWrappper>
    </Container>
  );
}

export default ProductPage;