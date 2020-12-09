import styled from 'styled-components';
import {motion} from 'framer-motion';

export const TextWrapper = styled.div`
  position: relative;
  margin: auto auto;
  width: 80%;
  min-height: 100vh;
  overflow: hidden;
`;

export const HelloText = styled(motion.p)`
  position: absolute;
  font-size: 4rem;
  font-weight: 600;
  top: 15%;
`;

export const WarnTextBig = styled(motion.p)`
  color: red;
  font-size: 2.5rem;
  font-weight: 600;
  position: absolute;
  top: 30%;
  width: 100%;
  text-align: end;
`;

export const WarnTextSmall =  styled(motion.p)`
  color: red;
  font-size: 1.5rem;
  font-weight: 600;
  position: absolute;
  top:42%;
`;

export const MyP =  styled(motion.p)`
  padding: 3rem;
  text-align: justify;
  font-size: 1.2rem;
  position: absolute;
  bottom: 5%;
`;