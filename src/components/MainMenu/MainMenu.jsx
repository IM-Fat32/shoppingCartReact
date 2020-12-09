import React from 'react';

import { faIgloo, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import { MenuContainer, StyledUl, MyNavLink } from './styledComponents.js';

//styled components

const Menu = () => {
  return (
    <MenuContainer>
      <StyledUl>
        <MyNavLink path="/" icon={faIgloo} />
        <MyNavLink path="/shop/1" icon={faShoppingBasket} />
      </StyledUl>
    </MenuContainer >
  );
}

export default Menu;