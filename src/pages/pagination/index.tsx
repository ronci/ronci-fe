import type { NextPage } from 'next';
import styled from 'styled-components';

import ProductList from '../../components/ProductList';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';
import { findPageNumbers } from '../../utilities';
import usePaginationPage from './usePaginationPage';
import { PAGE_SIZE } from '../../requestAPI/constants';
import EmptyContents from '../../components/EmptyContents';

const PAGE_UNIT = 5;

const PaginationPage: NextPage = () => {
  const { page, productListData, isProductListError } = usePaginationPage();

  if (isProductListError) {
    return <EmptyContents>존재하지 않는 페이지입니다.</EmptyContents>;
  }

  if (typeof productListData === 'undefined') {
    return null;
  }

  const { products, totalCount } = productListData.data.data;
  const currentPage = Number(page);
  const totalPages = Math.ceil(totalCount / PAGE_SIZE.PRODUCT_LIST);
  const { startPage, endPage } = findPageNumbers({ currentPage, pageUnit: PAGE_UNIT, totalPages });

  if (products.length === 0) {
    return <EmptyContents>아직 등록된 상품이 없습니다.</EmptyContents>;
  }

  return (
    <>
      <Header />
      <Container>
        <ProductList products={products} />
        <Pagination
          currentPage={currentPage}
          startPage={startPage}
          endPage={endPage}
          pageUnit={PAGE_UNIT}
          totalPages={totalPages}
        />
      </Container>
    </>
  );
};

export default PaginationPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
`;
