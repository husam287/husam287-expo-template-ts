import api from "@/apis";
import { AuthTokenResponse, LoginBody, SignupBody, User } from "../@types/auth";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query<User, void>({
      query: () => ({
        url: "/store-users/me/",
      }),
      providesTags: ["User"],
    }),
    login: build.mutation<AuthTokenResponse, LoginBody>({
      query: (body) => ({
        url: "/auth/login/",
        method: "POST",
        body: { ...body, user_type: "store_user" },
      }),
      invalidatesTags: ["User"],
    }),
    signup: build.mutation<AuthTokenResponse, SignupBody>({
      query: (body) => ({
        url: "/store-users/me/",
        method: "POST",
        body: body,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: "/auth/logout/",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
} = authApi;
