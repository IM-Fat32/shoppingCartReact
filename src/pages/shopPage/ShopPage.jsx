import React, { useState } from 'react';

import ProductsList from '../../components/shop/ProductsList/ProductsList.jsx';
import Cart from '../../components/shop/ProductsList/Cart/Cart.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faSearch } from '@fortawesome/free-solid-svg-icons'

import './ShopPage.css';

const ShopPage = () => {
  const [itemToSearch, setItemToSearch] = useState('');
  const [filtr, setFiltr] = useState('');
  const handleSearchInputChange = (e) => {
    setItemToSearch(e.target.value);
  }

  const handleSearchButtonClick = () => {
    //pokazuje towar o danej nazwie
    setFiltr(itemToSearch);
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

  const handleResetButton = () => {
    setFiltr('');
    setItemToSearch('');
  }

  const handleSearchEnterPressed = (e) => {
    if (e.keyCode === 13) {
      handleSearchButtonClick();
    }
  }

  return (
    <>
      <div data-bgc></div>
      <div className="shopToolsWrapper">
        <button onClick={handleResetButton}>Reset</button>
        <div className="toRightTools search">
          <input
            type="text"
            className="searchInputShop"
            onChange={handleSearchInputChange}
            value={itemToSearch}
            onKeyUp={handleSearchEnterPressed}
          />
          <button className="favIconButton">
            <FontAwesomeIcon icon={faSearch} onClick={handleSearchButtonClick} />
          </button>
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
      <ProductsList filtr={filtr} />
    </>
  );
}

export default ShopPage;