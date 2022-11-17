import styled from 'styled-components';

import { Product } from '../types/product';
import ProductItem from './ProductItem';

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => (
  <Container as='ul'>
    {products.map((product) => (
      <li key={product.id}>
        <ProductItem product={product} />
      </li>
    ))}
  </Container>
);

export default ProductList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin-left: -20px;
`;
