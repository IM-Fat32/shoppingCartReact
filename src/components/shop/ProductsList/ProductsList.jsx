import React from 'react';

import { useSelector } from 'react-redux';

import Product from '../Product.jsx';

import './ProductsList.css';

const ProductList = ({ filter }) => {
  console.log(filter);
  const products = useSelector(store => store.products);
  const productsList = products.map(product => {
    const { nameOfProduct, price, id, image } = product;
    //jakos filtorwac po produktach
    return (
      <Product
        nameOfProduct={nameOfProduct}
        price={price}
        key={id}
        image={image}
        id={id}
      />
    )
  });

  return (
    <div className="container--productsList">
      { productsList}
    </div>
  );
}

export default ProductList;