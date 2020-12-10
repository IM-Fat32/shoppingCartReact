import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {motion} from 'framer-motion';

//Styled Components 
export const ProductWrapper = styled.div` //wraper na cały obiekt produktu
  flex-basis: 40%;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  cursor: pointer;
  transition: .3s;
  min-height: 30rem;
`;

export const ProductTitle = styled.p` //styl dla nazwy produktu
  font-size: 1.1rem;
  font-weight: 500;
  color: black;
  max-width: 20rem;
  text-overflow: ellipsis;
  //usuniecie text decoration bezposrednio w Link
`;

export const ProductInteractiveWrapper = styled.div` //styl dla pojemnika na interaktywne elementy
  display: flex;
  width: 90%;
  justify-content: space-around;
  height: 2.5rem;
  line-height: 2.5rem;
  position: absolute;
  bottom: 2rem;
`;

export const ProductAddToCartButton = styled(motion.button)`
  background-color: #05D88E;
  border: none;
  border-radius: .4rem;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  padding: .1rem .5rem ;
  outline: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: "none";
`;

export const ProductAddToCartButtonSpan = styled.span`
  padding: .4rem; 
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const ProductPrice = styled.p`
  font-weight: 500;
`;

export const StyledImg = styled.img`
  position: relative;
  height: 40vh;
  width: 35vh;
  left: 50%;
  object-fit: cover;
  transform: translate(-50%, 0);
  padding: 20px;
`;
//