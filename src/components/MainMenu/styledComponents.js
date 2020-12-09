import {NavLink} from 'react-router-dom';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import { mainTheme } from '../../Themes.js';

export const MenuContainer = styled.nav`
  position: sticky;
  background-color: ${mainTheme.primary};
  top: 0;
  left:0;
  height: 100vh;
  z-index: 55;
`;

export const StyledUl = styled.ul`
  list-style: none;
`;

export const StyledNavLinks = styled(NavLink)`
  text-decoration: none;
  display: block;
  color: white;
  padding: 2rem 2rem;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
`;

export const MyNavLink = ({ path, icon }) => (
  <motion.li
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <StyledNavLinks to={path} exact>
      <FontAwesomeIcon icon={icon} />
    </StyledNavLinks>
  </motion.li>
);