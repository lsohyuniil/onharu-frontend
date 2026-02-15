"use client";

import { SignupFormValues } from "@/app/signup/types";
import { signupChild, SignupError, SignupChildResponse } from "@/lib/api/signup";
import { useMutation } from "@tanstack/react-query";

export const useSignupChild = () => {
  return useMutation<
    SignupChildResponse,
    SignupError,
    { formData: SignupFormValues; documentUrl: string }
  >({
    mutationFn: async ({ formData, documentUrl }) => {
      return signupChild({
        loginId: formData.email,
        password: formData.password,
        passwordConfirm: formData.passwordConfirm,
        name: formData.name ?? "",
        phone: formData.phone,
        nickname: formData.nickname ?? "",
        certificate: documentUrl,
      });
    },
  });
};
