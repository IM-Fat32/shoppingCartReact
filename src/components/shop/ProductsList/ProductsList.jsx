import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Product from '../Product/Product.jsx';

import styled from 'styled-components';
import './ProductsList.css';
//styled components
const LinkStyled = styled(Link)`
  padding: 1rem .5rem;
  text-decoration: none;
  color: black;
`;

const LinksWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
//

const maxItemsOnPage = 6;


//filtrowanie produktow do pokazania i render produktow

const ProductList = ({ props }) => { //props filter z parent komponentu 
  const pageButtons = [];
  const pageNumber = props.match.params.page;
  const filtr = useSelector(store => store.filtr);
  const products = useSelector(store => store.products); //wczytanie stanu glownego produktow

  let productsList = products.map(product => {
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
  const firstProduct = pageNumber * maxItemsOnPage - maxItemsOnPage;
  const lastProduct = pageNumber * maxItemsOnPage;

  const numberPageButtons = productsList.length / maxItemsOnPage;

  for (let i = 0; i < numberPageButtons; i++) {
    pageButtons.push(
      <LinkStyled key={`page${i + 1}`} to={`/shop/${i + 1}`} >{i + 1}</LinkStyled>
    )
  }
  productsList = productsList.slice(firstProduct, lastProduct);
  return (
    <>
      <div className="container--productsList">
        {productsList}
      </div>
      <LinksWrapper>
        {pageButtons}
      </LinksWrapper>
    </>
  );

}


export default ProductList;