import { MouseEventHandler } from 'react';
import { useRouter } from 'next/router';
import { HandleClickChangePageSetButtonFunction, PaginationProps } from './type';

const usePagination = ({
  startPage,
  endPage,
  pageUnit,
}: Pick<PaginationProps, 'startPage' | 'endPage' | 'pageUnit'>) => {
  const router = useRouter();
  const pageArray = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handleClickPageButton: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newPage = Number(event.currentTarget.value);
    router.push({ pathname: '/pagination', query: { page: newPage } });
  };

  const handleClickChangePageSetButton: HandleClickChangePageSetButtonFunction = (direction) => {
    router.push({ pathname: '/pagination', query: { page: startPage + direction * pageUnit } });
  };

  return { pageArray, handleClickPageButton, handleClickChangePageSetButton };
};

export default usePagination;
