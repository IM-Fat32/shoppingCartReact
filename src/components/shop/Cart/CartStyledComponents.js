import { mainTheme } from '../../../Themes.js';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
  top: -0.4rem;
  left: -0.4rem;
  font-size: 0.6rem;
  padding: 0.3rem 0.4rem;
  border-radius: 50%;
  border: .1rem solid  ${mainTheme.secondary};
  color: #fff;
  background-color: ${mainTheme.secondary};
  cursor: pointer;
  font-weight: 600;
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

export const StyledButton = styled.button`
  padding : 0 .4rem;
  margin-left: .5rem;
  border: none;
  background-color: red;
  background-color: ${({ add = false }) => (add ? 'green' : 'red')};
  color: white;
  border-radius: .3rem;
`;
//