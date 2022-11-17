import { AxiosResponse, AxiosError } from 'axios';
import {
  UseMutationOptions,
  useMutation,
  UseQueryOptions,
  useQuery,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from 'react-query';
import { getProduct, getProductList, getUserInfo, postLogin } from './api';
import { PAGE_SIZE, QUERY_KEYS } from './constants';
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
  { page, size = PAGE_SIZE.PRODUCT_LIST }: GetProductListParams,
  options?: UseQueryOptions<AxiosResponse<GetProductListResponse>, AxiosError<ErrorResponse>>
) =>
  useQuery<AxiosResponse<GetProductListResponse>, AxiosError<ErrorResponse>>(
    [QUERY_KEYS.getProductList, page],
    () => getProductList({ page, size }),
    {
      keepPreviousData: true,
      ...options,
    }
  );

export const useGetProductListInfinite = (
  options?: UseInfiniteQueryOptions<
    AxiosResponse<GetProductListResponse>,
    AxiosError<ErrorResponse>
  >
) =>
  useInfiniteQuery<AxiosResponse<GetProductListResponse>, AxiosError<ErrorResponse>>(
    QUERY_KEYS.getProductListInfinite,
    ({ pageParam = 1 }) =>
      getProductList({ page: pageParam, size: PAGE_SIZE.PRODUCT_LIST_INFINITE }),
    {
      ...options,
      getNextPageParam: (firstPage, allPages) => {
        const currentPage = allPages.length;
        const { totalCount } = firstPage.data.data;
        const totalPages = Math.ceil(totalCount / PAGE_SIZE.PRODUCT_LIST_INFINITE);

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
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
