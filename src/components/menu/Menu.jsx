import React from 'react';
import {
  NavLink
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faShoppingBasket, faMeteor } from '@fortawesome/free-solid-svg-icons'

import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu--container">
      <ul>
        <li><NavLink to="/"><FontAwesomeIcon icon={faIgloo} /></NavLink></li>
        <li><NavLink to="/shop"><FontAwesomeIcon icon={faShoppingBasket} /></NavLink></li>
        <li><NavLink to="/shop"><FontAwesomeIcon icon={faMeteor} /></NavLink></li>
      </ul>
    </nav>
  );
}

export default Menu;