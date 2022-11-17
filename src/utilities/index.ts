export const parseQueryString = (search: string): Record<string, string> =>
  (search || '')
    .replace(/^\?/g, '')
    .split('&')
    .reduce((acc, query) => {
      const [key, value] = query.split('=');

      if (key) {
        acc[key] = decodeURIComponent(value);
      }

      return acc;
    }, {} as Record<string, string>);

type FindPageNumbersFunction = (props: {
  currentPage: number;
  pageUnit: number;
  totalPages: number;
}) => {
  startPage: number;
  endPage: number;
};

export const findPageNumbers: FindPageNumbersFunction = ({ currentPage, pageUnit, totalPages }) => {
  const isLastPageNumberInSet = currentPage % pageUnit ? 0 : 1;
  const pageSetStartNumber =
    Math.floor((currentPage - isLastPageNumberInSet) / pageUnit) * pageUnit;
  const startPage = pageSetStartNumber + 1;
  const endPage =
    pageSetStartNumber + pageUnit > totalPages ? totalPages : pageSetStartNumber + pageUnit;

  return { startPage, endPage };
};
