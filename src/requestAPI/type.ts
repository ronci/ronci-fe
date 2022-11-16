export interface ErrorResponse {
  error: {
    message: string;
  };
}

export interface PostLoginPayload {
  id: string;
  password: string;
}

export interface PostLoginResponse {
  data: {
    accessToken: string;
    user: {
      ID: string;
      NAME: string;
    };
  };
}

export interface GetUserInfoParams {
  userId: string;
}

export interface GetUserInfoResponse {
  data: {
    user: {
      ID: string;
      NAME: string;
    };
  };
}
