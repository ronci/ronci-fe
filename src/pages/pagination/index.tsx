import type { NextPage } from 'next';
import styled from 'styled-components';

import ProductList from '../../components/ProductList';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';
import { findPageNumbers } from '../../utilities';
import usePaginationPage from './usePaginationPage';
import { PAGE_SIZE } from '../../requestAPI/constants';

const PAGE_UNIT = 5;

const PaginationPage: NextPage = () => {
  const { page, productListData } = usePaginationPage();

  if (typeof productListData === 'undefined') {
    return null;
  }

  const { products, totalCount } = productListData.data.data;
  const currentPage = Number(page);
  const totalPages = Math.ceil(totalCount / PAGE_SIZE.PRODUCT_LIST);
  const { startPage, endPage } = findPageNumbers({ currentPage, pageUnit: PAGE_UNIT, totalPages });

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
