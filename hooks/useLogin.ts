import { useMutation } from "@tanstack/react-query";
import { LoginReq } from "@/lib/api/types/auth";
import { ApiError, SuccessResponse } from "@/lib/api/types/common";
import { login } from "@/lib/api/auth";

export const useLogin = () => {
  return useMutation<SuccessResponse<null>, ApiError, LoginReq>({
    mutationFn: body => login(body),
  });
};
