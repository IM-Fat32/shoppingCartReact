import React from 'react';

import {
  Container, containerVariants
} from '../../components/Basic.jsx';

import {
  TextWrapper,
  HelloText,
  WarnTextBig,
  WarnTextSmall,
  MyP
} from './styledComponents.js';

const HomePage = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <TextWrapper>
        <HelloText
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Cześć, jestem Dawid
        </HelloText>
        <WarnTextBig
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Witryna pełni funkcję portfolio!
        </WarnTextBig>
        <WarnTextSmall
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Co oznacza, że nie można zakupić umieszczonego w portfolio towaru!
        </WarnTextSmall>
        <MyP
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Strona powstała przy użyciu React, React-Redux, Javascript, HTML5, Framer Motion API oraz CSS.
          Wykorzystane zdjęcia, opisy produktów oraz cena są przypadkowe. Nie jest to witryna oferująca towar z oferty!
          W razie jakichkolwiek zastrzeżeń proszę o kontakt na mail <b>dawid.neumann.official@gmail.com</b>.
        </MyP>
      </TextWrapper>
    </Container >
  );
}

export default HomePage;