export interface PaginationProps {
  currentPage: number;
  startPage: number;
  endPage: number;
  pageUnit: number;
  totalPages: number;
}

export type HandleClickChangePageSetButtonFunction = (direction: number) => void;
