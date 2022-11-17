import type { NextPage } from 'next';
import styled from 'styled-components';
import EmptyContents from '../../components/EmptyContents';

import ProductList from '../../components/ProductList';
import useInfiniteScrollPage from './useInfiniteScrollPage';

import { BsTriangleFill } from 'react-icons/bs';
import { FlexBox } from '../../components/@shared/FlexBox';

const InfiniteScrollPage: NextPage = () => {
  const { productListData, targetRef, scrollToTop } = useInfiniteScrollPage();

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
      <ScrollToTop as='button' justifyContent='center' alignItems='center' onClick={scrollToTop}>
        <BsTriangleFill size={20} color='#fff' />
      </ScrollToTop>
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

const ScrollToTop = styled(FlexBox)`
  position: fixed;
  right: calc(50% - 193px);
  bottom: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
`;
