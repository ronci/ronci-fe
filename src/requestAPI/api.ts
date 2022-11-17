import axios from 'axios';
import { PAGE_SIZE } from './constants';
import {
  GetProductListParams,
  GetProductListResponse,
  GetProductParams,
  GetProductResponse,
  GetUserInfoParams,
  GetUserInfoResponse,
  PostLoginPayload,
  PostLoginResponse,
} from './type';

export const postLogin = async ({ id, password }: PostLoginPayload) => {
  return axios.post<PostLoginResponse>('/login', { id, password });
};

export const getUserInfo = async ({ userId }: GetUserInfoParams) => {
  return axios.get<GetUserInfoResponse>(`/users/${userId}`);
};

export const getProductList = async ({ page }: GetProductListParams) => {
  return axios.get<GetProductListResponse>(`/products?page=${page}&size=${PAGE_SIZE.PRODUCT_LIST}`);
};

export const getProduct = async ({ productId }: GetProductParams) => {
  return axios.get<GetProductResponse>(`/products/${productId}`);
};
