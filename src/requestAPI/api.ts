import axios from 'axios';
import {
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
