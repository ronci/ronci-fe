import type { NextPage } from 'next';
import styled from 'styled-components';

import EmptyContents from '../../../components/EmptyContents';
import Header from '../../../components/Header';
import useProductIdPage from './useProductsIdPage';

const ProductDetailPage: NextPage = () => {
  const { productData, isProductError } = useProductIdPage();

  if (isProductError) {
    return <EmptyContents>존재하지 않는 상품입니다.</EmptyContents>;
  }

  if (typeof productData === 'undefined') {
    return null;
  }

  const { product } = productData.data.data;

  return (
    <>
      <Header />
      <Thumbnail src={product.thumbnail ? product.thumbnail : '/defaultThumbnail.jpg'} />
      <ProductInfoWrapper>
        <Name>{product.name}</Name>
        <Price>{product.price}원</Price>
      </ProductInfoWrapper>
    </>
  );
};

export default ProductDetailPage;

const Thumbnail = styled.img`
  width: 100%;
  height: 420px;
`;

const ProductInfoWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 18px;
  margin-top: 8px;
`;
