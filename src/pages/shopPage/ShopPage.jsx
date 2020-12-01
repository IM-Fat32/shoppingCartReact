import React from 'react';

import ProductsList from '../../components/shop/ProductsList/ProductsList.jsx';
import ShopMenu from '../../components/shop/ShopMenu/ShopMenu.jsx';

const ShopPage = (props) => {
  return (
    <>
      <ShopMenu />
      <ProductsList props={props} />
    </>

  );
}

export default ShopPage;