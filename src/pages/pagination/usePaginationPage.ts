import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useGetProductList } from '../../requestAPI';

const usePaginationPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const { data: productListData, refetch: refetchProductList } = useGetProductList(
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

  return { page, productListData };
};

export default usePaginationPage;
