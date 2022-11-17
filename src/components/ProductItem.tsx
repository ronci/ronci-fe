import Link from 'next/link';
import styled from 'styled-components';
import { memo } from 'react';

import { Product } from '../types/product';
import Image from 'next/image';
import { BLUR_DATA_URL } from '../constants';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product: { id, name, thumbnail, price } }: ProductItemProps) => {
  return (
    <Link href={`/products/${id}`}>
      <Container>
        <Image
          src={thumbnail || '/defaultThumbnail.jpg'}
          placeholder='blur'
          blurDataURL={BLUR_DATA_URL}
          width={180}
          height={180}
          alt=''
        />
        <Name>{name}</Name>
        <Price>{price.toLocaleString()}원</Price>
      </Container>
    </Link>
  );
};

export default memo(ProductItem);

const Container = styled.div`
  width: 180px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Name = styled.div`
  margin-top: 8px;
  font-size: 16px;
`;

const Price = styled.div`
  margin-top: 4px;
`;
