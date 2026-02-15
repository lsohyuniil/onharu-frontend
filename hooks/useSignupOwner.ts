"use client";

import { SignupFormValues } from "@/app/signup/types";
import { signupOwner, SignupError, SignupOwnerResponse } from "@/lib/api/signup";
import { useMutation } from "@tanstack/react-query";

export const useSignupOwner = () => {
  return useMutation<SignupOwnerResponse, SignupError, { formData: SignupFormValues }>({
    mutationFn: async ({ formData }) => {
      return signupOwner({
        loginId: formData.email,
        password: formData.password,
        passwordConfirm: formData.passwordConfirm,
        phone: formData.phone,
        storeName: formData.storeName ?? "",
        businessNumber: formData.businessNumber ?? "",
      });
    },
  });
};
