import React from 'react';
import { Container, containerVariants } from '../../components/Basic.jsx'

const DonePage = () => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <h4>Gratulacje transakcja zakończona</h4>
    </Container>

  );
}

export default DonePage;