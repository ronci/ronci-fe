import { AxiosResponse, AxiosError } from 'axios';
import { UseMutationOptions, useMutation, UseQueryOptions, useQuery } from 'react-query';
import { getProduct, getProductList, getUserInfo, postLogin } from './api';
import { QUERY_KEYS } from './constants';
import {
  ErrorResponse,
  GetProductListParams,
  GetProductListResponse,
  GetProductParams,
  GetProductResponse,
  GetUserInfoParams,
  GetUserInfoResponse,
  PostLoginPayload,
  PostLoginResponse,
} from './type';

export const usePostLogin = (
  options?: UseMutationOptions<
    AxiosResponse<PostLoginResponse>,
    AxiosError<ErrorResponse>,
    PostLoginPayload
  >
) =>
  useMutation<AxiosResponse<PostLoginResponse>, AxiosError<ErrorResponse>, PostLoginPayload>(
    postLogin,
    options
  );

export const useGetUserInfo = (
  { userId }: GetUserInfoParams,
  options?: UseQueryOptions<AxiosResponse<GetUserInfoResponse>, AxiosError<ErrorResponse>>
) =>
  useQuery<AxiosResponse<GetUserInfoResponse>, AxiosError<ErrorResponse>>(
    [QUERY_KEYS.getUserInfo, userId],
    () => getUserInfo({ userId }),
    options
  );

export const useGetProductList = (
  { page }: GetProductListParams,
  options?: UseQueryOptions<AxiosResponse<GetProductListResponse>, AxiosError<ErrorResponse>>
) =>
  useQuery<AxiosResponse<GetProductListResponse>, AxiosError<ErrorResponse>>(
    [QUERY_KEYS.getProductList, page],
    () => getProductList({ page }),
    {
      keepPreviousData: true,
      ...options,
    }
  );

export const useGetProduct = (
  { productId }: GetProductParams,
  options?: UseQueryOptions<AxiosResponse<GetProductResponse>, AxiosError<ErrorResponse>>
) =>
  useQuery<AxiosResponse<GetProductResponse>, AxiosError<ErrorResponse>>(
    [QUERY_KEYS.getProduct, productId],
    () => getProduct({ productId }),
    options
  );
