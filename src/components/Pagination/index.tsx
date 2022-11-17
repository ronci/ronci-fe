import styled from 'styled-components';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { PaginationProps } from './type';
import usePagination from './usePagination';

const Pagination = ({ currentPage, startPage, endPage, pageUnit, totalPages }: PaginationProps) => {
  const { pageArray, handleClickPageButton, handleClickChangePageSetButton } = usePagination({
    startPage,
    endPage,
    pageUnit,
  });

  return (
    <Container>
      <Button
        type='button'
        onClick={() => handleClickChangePageSetButton(-1)}
        disabled={startPage === 1}
      >
        <VscChevronLeft />
      </Button>
      <PageWrapper>
        {pageArray.map((page) => (
          <Page
            type='button'
            key={page}
            value={page}
            selected={page === currentPage}
            onClick={handleClickPageButton}
            disabled={page === currentPage}
          >
            {page}
          </Page>
        ))}
      </PageWrapper>
      <Button
        type='button'
        onClick={() => handleClickChangePageSetButton(1)}
        disabled={totalPages === endPage}
      >
        <VscChevronRight />
      </Button>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 40px;
  margin-left: -20px;
`;

const Button = styled.button`
  &:disabled {
    color: #e2e2ea;
    cursor: default;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  margin: 0 16px;
`;

type PageType = {
  selected: boolean;
};

const Page = styled.button<PageType>`
  padding: 4px 6px;
  background-color: ${({ selected }) => (selected ? '#000' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  font-size: 20px;

  & + & {
    margin-left: 4px;
  }

  &:disabled {
    cursor: default;
  }
`;
