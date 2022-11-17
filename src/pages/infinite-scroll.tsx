import type { NextPage } from 'next';
import styled from 'styled-components';

import Header from '../components/Header';
import ProductList from '../components/ProductList';
import useIntersect from '../hooks/useIntersect';
import { useGetProductListInfinite } from '../requestAPI';

const InfiniteScrollPage: NextPage = () => {
  const {
    data: productListData,
    hasNextPage: hasNextProductListPage,
    fetchNextPage: fetchNextProductListPage,
  } = useGetProductListInfinite();
  const targetRef = useIntersect<HTMLDivElement>((entry, observer) => {
    if (hasNextProductListPage) {
      fetchNextProductListPage();
    }
    observer.unobserve(entry.target);
  });

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
