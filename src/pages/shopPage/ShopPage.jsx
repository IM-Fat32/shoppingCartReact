import React from 'react';

import ProductsList from '../../components/shop/ProductsList/ProductsList.jsx';
import ShopMenu from '../../components/shop/ShopMenu/ShopMenu.jsx';

import './ShopPage.css';

const ShopPage = () => {
  return (
    <>
      <ShopMenu />
      <ProductsList />
    </>

  );
}

export default ShopPage;