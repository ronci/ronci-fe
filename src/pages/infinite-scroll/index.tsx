import type { NextPage } from 'next';
import styled from 'styled-components';

import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import useInfiniteScrollPage from './useInfiniteScrollPage';

const InfiniteScrollPage: NextPage = () => {
  const { productListData, targetRef } = useInfiniteScrollPage();

  if (typeof productListData === 'undefined') {
    return null;
  }

  const products = productListData.pages.flatMap((page) => page.data.data.products);

  return (
    <>
      <Header />
      <Container>
        <ProductList products={products} />
        <div ref={targetRef} />
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
