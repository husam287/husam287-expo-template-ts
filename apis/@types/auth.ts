export interface AuthTokenResponse {
  refresh: string;
  access: string;
}

export interface GetStoreUserParams {
  page_size: number;
}

export interface LoginBody {
  phone: string;
  code: string;
}

export interface User {
  first_name: string;
  last_name: string;
  image: string;
  birth_date: string;
}

type CombinedBody = Partial<User> & LoginBody;
export interface SignupBody extends CombinedBody {}
