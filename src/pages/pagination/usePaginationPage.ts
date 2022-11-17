import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useGetProductList } from '../../requestAPI';

const usePaginationPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const {
    data: productListData,
    refetch: refetchProductList,
    isError: isProductListError,
  } = useGetProductList(
    { page: Number(page) },
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (isNaN(Number(page))) {
      return;
    }
    refetchProductList();
  }, [page]);

  return { page, productListData, isProductListError };
};

export default usePaginationPage;
