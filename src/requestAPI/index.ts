import { AxiosResponse, AxiosError } from 'axios';
import { UseMutationOptions, useMutation, UseQueryOptions, useQuery } from 'react-query';
import { getUserInfo, postLogin } from './api';
import { QUERY_KEYS } from './constants';
import {
  ErrorResponse,
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
