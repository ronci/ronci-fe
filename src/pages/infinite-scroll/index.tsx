import type { NextPage } from 'next';
import styled from 'styled-components';
import EmptyContents from '../../components/EmptyContents';

import ProductList from '../../components/ProductList';
import useInfiniteScrollPage from './useInfiniteScrollPage';

const InfiniteScrollPage: NextPage = () => {
  const { productListData, targetRef } = useInfiniteScrollPage();

  if (typeof productListData === 'undefined') {
    return null;
  }

  const products = productListData.pages.flatMap((page) => page.data.data.products);

  if (products.length === 0) {
    return <EmptyContents>아직 등록된 상품이 없습니다.</EmptyContents>;
  }

  return (
    <Container>
      <ProductList products={products} />
      <div ref={targetRef} />
    </Container>
  );
};

export default InfiniteScrollPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
