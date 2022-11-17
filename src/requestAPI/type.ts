import { Product } from '../types/product';

export interface ErrorResponse {
  error: {
    message: string;
  };
}

export interface PostLoginPayload {
  id: string;
  password: string;
}

interface User {
  ID: string;
  NAME: string;
}

export interface PostLoginResponse {
  data: {
    accessToken: string;
    user: User;
  };
}

export interface GetUserInfoParams {
  userId: string;
}

export interface GetUserInfoResponse {
  data: {
    user: User;
  };
}

export interface GetProductListParams {
  page: number;
}

export interface GetProductListResponse {
  data: {
    products: Product[];
    totalCount: number;
  };
}

export interface GetProductParams {
  productId: number;
}

export interface GetProductResponse {
  data: {
    product: Product;
  };
}
