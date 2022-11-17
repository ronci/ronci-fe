import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useGetProduct } from '../../../requestAPI';

const useProductIdPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: productData,
    refetch: refetchProduct,
    isError: isProductError,
  } = useGetProduct(
    { productId: Number(id) },
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (isNaN(Number(id))) {
      return;
    }
    refetchProduct();
  }, [id]);

  return { productData, isProductError };
};

export default useProductIdPage;
