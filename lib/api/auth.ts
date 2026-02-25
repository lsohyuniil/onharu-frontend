import { apiClient } from "./clientApiClient";
import { ChildData, LoginReq, OwnerData, SignupReq, SignupRes, UserMeReq } from "./types/auth";
import { SuccessResponse } from "./types/common";

export async function login(body: LoginReq): Promise<SuccessResponse<null>> {
  return apiClient.post<SuccessResponse<null>>("/users/login", body);
}

export const logout = (): Promise<SuccessResponse<null>> =>
  apiClient.post<SuccessResponse<null>>("/users/logout");

export const userMe = (): Promise<SuccessResponse<UserMeReq>> =>
  apiClient.get<SuccessResponse<UserMeReq>>("/users/me");

export const signupChild = (body: SignupReq & ChildData): Promise<SuccessResponse<SignupRes>> => {
  return apiClient.post<SuccessResponse<SignupRes>, SignupReq & ChildData>(
    "/users/signup/child",
    body
  );
};

export const signupOwner = (body: SignupReq & OwnerData): Promise<SuccessResponse<SignupRes>> => {
  return apiClient.post<SuccessResponse<SignupRes>, SignupReq & OwnerData>(
    "/users/signup/owner",
    body
  );
};
