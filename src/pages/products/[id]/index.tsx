import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

import EmptyContents from '../../../components/EmptyContents';
import { BLUR_DATA_URL } from '../../../constants';
import useProductIdPage from './useProductsIdPage';

const ProductDetailPage: NextPage = () => {
  const { productData, isProductError } = useProductIdPage();

  if (isProductError) {
    return <EmptyContents>존재하지 않는 상품입니다.</EmptyContents>;
  }

  if (typeof productData === 'undefined') {
    return null;
  }

  const {
    product: { name, price, thumbnail },
  } = productData.data.data;

  return (
    <>
      <Image
        src={thumbnail || '/defaultThumbnail.jpg'}
        placeholder='blur'
        blurDataURL={BLUR_DATA_URL}
        width={420}
        height={420}
        alt=''
      />
      <ProductInfoWrapper>
        <Name>{name}</Name>
        <Price>{price.toLocaleString()}원</Price>
      </ProductInfoWrapper>
    </>
  );
};

export default ProductDetailPage;

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
