export interface ErrorResponse {
  error: {
    message: string;
  };
}

export interface PostLoginPayload {
  id: string;
  password: string;
}
