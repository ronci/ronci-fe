import axios from 'axios';
import { PostLoginPayload } from './type';

export const postLogin = async ({ id, password }: PostLoginPayload) => {
  return axios.post('/login', { id, password });
};
