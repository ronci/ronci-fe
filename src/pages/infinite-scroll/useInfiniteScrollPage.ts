import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useIntersect from '../../hooks/useIntersect';
import { useGetProductListInfinite } from '../../requestAPI';

const useInfiniteScrollPage = () => {
  const router = useRouter();
  const {
    data: productListData,
    hasNextPage: hasNextProductListPage,
    fetchNextPage: fetchNextProductListPage,
  } = useGetProductListInfinite();
  const targetRef = useIntersect<HTMLDivElement>((entry, observer) => {
    if (hasNextProductListPage) {
      fetchNextProductListPage();
    }
    observer.unobserve(entry.target);
  });

  const handleRouteChangeStart = () => {
    sessionStorage.setItem('scroll', `${window.scrollY}`);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    window.scrollTo(0, Number(sessionStorage.getItem('scroll')));

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { productListData, targetRef, scrollToTop };
};

export default useInfiniteScrollPage;
