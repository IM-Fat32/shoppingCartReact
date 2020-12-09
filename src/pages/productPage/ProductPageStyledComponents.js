import styled from 'styled-components';
import { mainTheme } from '../../Themes.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';

export const ProductWrappper = styled.div`
  padding: 4rem 7rem;
  min-height: 100vh;
`;

export const SliderWrapper = styled.div`
position: relative;
width: 60%;
margin: auto;
user-select: none;
text-align: center;
`;

export const StyledButton = styled(FontAwesomeIcon)`
  font-size: 2rem;
  cursor: pointer;
  color: ${mainTheme.primary};
`;

export const Arrows = styled.div`
  position: absolute;
  top: 50%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledImage = styled.img`
  width: 40rem;
  height: 30rem;

`;

export const MiniMenuWarapper = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const MiniImage = styled.img`
  display: inline-block;
  width: 6rem;
  height: 4.5rem;
  padding: 0;
  border: 2px solid ${mainTheme.primary};
  border-radius: .5rem;
  margin-left: 1rem;
  cursor: pointer;

  ${(props) => props.active ? `border-color: ${mainTheme.secondary}` : null};
`;

export const StyledNameProduct = styled.h4`
  font-weight: 400;
  font-size: 1.3rem;
  letter-spacing: .1rem;
`;

export const StyledPrice = styled.h4`
  font-size: 1.4rem;
  color: green;
  font-weight: 500;
`;

export const Info = styled.p`
  font-size: .7rem;
`;

export const Title = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  font-weight:500;
`;

export const PanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding : .5rem 5rem;
`;

export const MyWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  height: 2.5rem;
  line-height: 2.5rem;
`;

export const MyButtonWrapper = styled(motion.div)`
`;
//