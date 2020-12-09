import { mainTheme } from '../../../Themes.js';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import {motion} from 'framer-motion';

export const DivCart = styled(motion.div)`
  z-index: 30;
  overflow: hidden;
`;
//Styled Components
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  padding: .2rem .6rem;
  color: ${mainTheme.primary};
  border: .2rem solid black;
  font-weight: 600;
  border-radius: 20%;
  align-self:flex-start;
`;

export const DarkBackgroundStyle = styled(motion.div)`
    background-color: black;
    opacity: .7;
    position: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
  `;

export const FaviconButtonStyle = styled(motion.button)`
  background-color: ${mainTheme.primary};
  color: white;
  font-size: 1.5rem;
  padding: 0.2rem 0.4rem;
  border: none;
  cursor: pointer;
  outline:none;
`;

export const SearchInputStyle = styled.input`
  font-size: 0.8rem;
  padding: 0px 1rem;
  height: 2rem;
  border: 1px solid ${mainTheme.primary};
  min-width: 15rem;
  outline:none;
`;

export const ToolsToRightWrapperStyle = styled.div`
  padding: 0.2rem 0.3rem;
  background-color: ${mainTheme.primary};
  display: flex;
  align-items: center;
`;

export const ShopToolsWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 9;
  display: flex;
  padding: 1rem 3rem;
  width:100%;
`;
//
export const cartVariants = {
  open: { x: 0 },
  closed: { x: '100vh' }
}