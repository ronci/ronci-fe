import Link from 'next/link';
import styled from 'styled-components';

import { Product } from '../types/product';
import Image from 'next/image';

interface ProductItemProps {
  product: Product;
}

const BLUR_DATA_URL =
  'data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNU0TT+DwACegGB2mW2wwAAAABJRU5ErkJggg==';

const ProductItem = ({ product: { id, name, thumbnail, price } }: ProductItemProps) => {
  return (
    <Link href={`/products/${id}`}>
      <Container>
        <Thumbnail
          src={thumbnail ? thumbnail : '/defaultThumbnail.jpg'}
          placeholder='blur'
          blurDataURL={BLUR_DATA_URL}
          width={180}
          height={180}
        />
        <Name>{name}</Name>
        <Price>{price.toLocaleString()}원</Price>
      </Container>
    </Link>
  );
};

export default ProductItem;

const Container = styled.div`
  width: 180px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Thumbnail = styled(Image)`
  width: 100%;
  height: 180px;
`;

const Name = styled.div`
  margin-top: 8px;
  font-size: 16px;
`;

const Price = styled.div`
  margin-top: 4px;
`;
