import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { changeFiltr } from '../../../actions/filtrActions.js';

import Cart from '../../../components/shop/Cart/Cart.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  DarkBackgroundStyle,
  ShopToolsWrapper,
  StyledLink,
  ToolsToRightWrapperStyle,
  SearchInputStyle,
  FaviconButtonStyle,
} from './styledComponents.js';

const ShopMenu = () => {
  const dispatch = useDispatch();
  const [itemToSearch, setItemToSearch] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleChangeCartVisibility = () => {
    setIsCartOpen(prev => !prev);
    console.log(isCartOpen)
  }

  const handleSearchInputChange = (e) => {
    setItemToSearch(e.target.value);
  }

  const handleSearchButtonClick = () => {
    //pokazuje towar o danym filtrze
    dispatch(changeFiltr(itemToSearch));
  }

  const handleResetButton = () => {
    dispatch(changeFiltr(''));
    setItemToSearch('');
  }
  //szukanie po klawiszu enter
  const handleSearchEnterPressed = (e) => {
    if (e.keyCode === 13) {
      handleSearchButtonClick();
    }
  }
  return (
    <>
      <DarkBackgroundStyle
        initial={{ x: '100vw' }}
        animate={isCartOpen ? { x: 0 } : { x: '100vw' }}
        transition={{ duration: .5 }}
      />
      <ShopToolsWrapper>
        <StyledLink to="/shop/1" onClick={handleResetButton}>D</StyledLink>
        <div style={{ flexGrow: 0.9 }}></div>
        <ToolsToRightWrapperStyle>
          <SearchInputStyle
            type="text"
            onChange={handleSearchInputChange}
            value={itemToSearch}
            onKeyUp={handleSearchEnterPressed}
          />
          <FaviconButtonStyle
            whileHover={{ scale: 0.8 }}
            whileTap={{ scale: 1 }}
          >
            <FontAwesomeIcon icon={faSearch} onClick={handleSearchButtonClick} />
          </FaviconButtonStyle>
        </ToolsToRightWrapperStyle>
        <label>
          <ToolsToRightWrapperStyle style={{ cursor: "pointer" }}>
            <FaviconButtonStyle
              onClick={handleChangeCartVisibility}
              whileHover={{ scale: 0.8 }}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </FaviconButtonStyle>
          </ToolsToRightWrapperStyle>
        </label>
      </ShopToolsWrapper>
      <Cart callback={handleChangeCartVisibility} state={isCartOpen} />
    </>
  );
};

export default ShopMenu;