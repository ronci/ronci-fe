import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import products from '../api/data/products.json';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const InfiniteScrollPage: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductList products={products} />
      </Container>
    </>
  );
};

export default InfiniteScrollPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
