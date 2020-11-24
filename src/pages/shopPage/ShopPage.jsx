import React, { useState } from 'react';

import ProductsList from '../../components/shop/ProductsList/ProductsList.jsx';
import Cart from '../../components/shop/ProductsList/Cart/Cart.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faSearch } from '@fortawesome/free-solid-svg-icons'

import './ShopPage.css';

const ShopPage = () => {
  const [itemToSearch, setItemToSearch] = useState('');

  let filter = '';

  const handleSearchInputChange = (e) => {
    setItemToSearch(e.target.value);
  }

  const handleSeachButtonClick = () => {
    //pokazuje towar o danej nazwie

    filter = itemToSearch;
  }

  //getting by classname cart element and changing visibility, style.display
  //first version, may be changed
  const handleChangeCartVisibility = () => {
    //operating on calsses
    const cart = document.querySelector(".Cart");
    const shop = document.querySelector("[data-bgc]");
    cart.classList.toggle('active');
    shop.classList.toggle('black-backgorund');
  }

  return (
    <>
      <div data-bgc></div>
      <div className="shopToolsWrapper">
        <div className="toRightTools search">
          <input type="text" className="searchInputShop" onChange={handleSearchInputChange} value={itemToSearch} />
          <button className="favIconButton"><FontAwesomeIcon icon={faSearch} onClick={handleSeachButtonClick} /></button>
        </div>
        <label>
          <div className="toRightTools cartButton">
            <button className="favIconButton" onClick={handleChangeCartVisibility}>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </button>
          </div>
        </label>
      </div>
      {<Cart callback={handleChangeCartVisibility} />}
      {/* {!itemToSearch ? <ProductsList /> : null} */}
      {<ProductsList filter={filter} />}
    </>
  );
}

export default ShopPage;