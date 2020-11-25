import React from 'react';
import { useSelector } from 'react-redux';

import Product from '../Product.jsx';

import './ProductsList.css';

//filtrowanie produktow do pokazania i render produktow
const ProductList = ({ filtr }) => { //props filter z parent komponentu 
  const products = useSelector(store => store.products); //wczytanie stanu glownego produktow
  const productsList = products.map(product => {
    if (product.nameOfProduct.includes(filtr)) {
      //jakos filtorwac po produktach
      const { nameOfProduct, price, id, image } = product;
      return (
        <Product
          nameOfProduct={nameOfProduct}
          price={price}
          key={id}
          image={image}
          id={id}
        />
      )
    }
    return null;
  });

  return (
    <div className="container--productsList">
      { productsList}
    </div>
  );
}

export default ProductList;