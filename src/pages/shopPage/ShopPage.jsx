import React from 'react';

import ProductsList from '../../components/shop/ProductsList/ProductsList.jsx';
import ShopMenu from '../../components/shop/ShopMenu/ShopMenu.jsx';

import {
  Container, containerVariants
} from '../../components/Basic.jsx';

const ShopPage = (props) => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <ShopMenu />
      <ProductsList props={props} />
    </Container>

  );
}

export default ShopPage;