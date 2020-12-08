import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Product from '../Product/Product.jsx';

import styled from 'styled-components';

//styled components
const LinkStyled = styled(NavLink)`
  padding: 1rem .5rem;
  text-decoration: none;
  color: black;
  transition: .3s; 
  &.active{
    font-weight: 600;
  }
`;

const LinksWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px;
  align-self: flex-end;
`;

const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 90vh;
  justify-content: space-around;
  padding: 6rem 4rem 0 4rem;
  flex-grow: 1;
  height: 100%;
`;
//

const maxItemsOnPage = 6;


//filtrowanie produktow do pokazania i render produktow

const ProductList = ({ props }) => { //props filter z parent komponentu 
  let productsListToShow = []
  const pageButtons = [];
  const pageNumber = props.match.params.page;
  const filtr = useSelector(store => store.filtr);
  const products = useSelector(store => store.products); //wczytanie stanu glownego produktow

  let productsList = products.map(product => {
    if (product.nameOfProduct.includes(filtr)) {
      //jakos filtorwac po produktach
      const { nameOfProduct, price, id, images, magazine } = product;
      return (
        <Product
          nameOfProduct={nameOfProduct}
          price={price}
          key={id}
          image={images.showImage}
          id={id}
          magazine={magazine}
        />
      )
    }
    return null;
  });

  productsListToShow = productsList.filter(item => item !== null);

  const firstProduct = pageNumber * maxItemsOnPage - maxItemsOnPage;
  const lastProduct = pageNumber * maxItemsOnPage;
  const numberPageButtons = productsListToShow.length / maxItemsOnPage;

  for (let i = 0; i < numberPageButtons; i++) {
    pageButtons.push(
      <LinkStyled key={`page${i + 1}`} to={`/shop/${i + 1}`} >{i + 1}</LinkStyled>
    )
  }
  productsListToShow = productsListToShow.slice(firstProduct, lastProduct);
  return (
    <ProductsListContainer>
      { productsListToShow.length > 0 ? productsListToShow : <p>Brak produktów</p>}
      <LinksWrapper>
        {pageButtons}
      </LinksWrapper>
    </ProductsListContainer>
  );

}


export default ProductList;