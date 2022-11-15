import { AxiosResponse, AxiosError } from 'axios';
import { UseMutationOptions, useMutation } from 'react-query';
import { postLogin } from './api';
import { ErrorResponse, PostLoginPayload } from './type';

export const usePostLogin = (
  options?: UseMutationOptions<AxiosResponse, AxiosError<ErrorResponse>, PostLoginPayload>
) => useMutation<AxiosResponse, AxiosError<ErrorResponse>, PostLoginPayload>(postLogin, options);
