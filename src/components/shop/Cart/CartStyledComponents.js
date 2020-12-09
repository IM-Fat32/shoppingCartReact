import { mainTheme } from '../../../Themes.js';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
//Styled components

export const ItemInCartStyle = styled.div`
  border-bottom: 1px solid black;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const ImageWrapper = styled.div`
  flex-basis: 30%;
  position: relative;
`;

export const ItemImgStyle = styled.img`
  display : block;
  max-width: 7rem;
  max-height:7rem;
`;

export const ItemsWrapper = styled.div`
  display: flex;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-basis: 60%;
  justify-content: center;
  flex-direction: column;
`;

export const ExitCartStyled = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  font-size: .8rem;
  padding: 0.3rem 0.4rem;
  border: none; 
  color: ${mainTheme.primary};
  background-color: white;
  cursor: pointer;
  font-weight: 600;
  outline: none;
`;

export const CartWrapper = styled(motion.div)`
  background-color: white;
  position: fixed;
  top: 4rem;
  right: 1rem;
  padding: 1rem 2rem;
  z-index: 30;
  transition: .5s;
  min-width: 30rem;
`;

export const TitleStyle = styled.p`
  letter-spacing: 0.1rem;
`;

export const PriceStyle = styled.p`
  color: green;
  font-weight: 300;
`;

export const NumberOfProductsDivStyle = styled.div`
  display: flex;
`;

export const Counter = styled.div`
  display: flex;
  margin-left: .5rem;
`;

export const NumberOfProducts = styled.div`
  display: flex;
  margin-left: .5rem;
`;

export const StyledButton = styled(motion.button)`
  padding : 0 .4rem;
  margin-left: .5rem;
  border: none;
  background-color: ${({ add = false }) => (add ? '#05D88E' : '#c40015')};
  color: white;
  border-radius: .3rem;
  cursor: pointer;
  outline: none;
  font-size: .9rem;
`;

export const StyledLink = styled(Link)`
  color : #119e58;
  text-decoration: none;
  padding: 2rem  0;
`;
//