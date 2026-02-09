"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import EmailAuthField from "@/components/feature/EmailAuthField";
import { FIELD_CONFIG } from "@/components/form-fields/fieldConfig";
import { FormField } from "@/components/form-fields/FormField";

type FindPasswordFormValues = {
  name: string;
  email: string;
  phone: string;
  authCode: string;
};

export default function FindPasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
    trigger,
  } = useForm<FindPasswordFormValues>({ mode: "onSubmit" });

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const onSubmit = (data: FindPasswordFormValues) => {
    if (!isCodeSent) {
      setError("email", { type: "manual", message: "이메일 인증을 진행해주세요." });
      return;
    }

    if (!isEmailVerified) {
      setError("authCode", { type: "manual", message: "인증 확인을 완료해 주세요." });
      return;
    }

    console.log("비밀번호 찾기 요청:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* 이름 */}
      <FormField<FindPasswordFormValues>
        name="name"
        config={FIELD_CONFIG.name}
        register={register}
        errors={errors}
      />

      {/* 이메일 */}
      <EmailAuthField<FindPasswordFormValues>
        register={register}
        errors={errors}
        setError={setError}
        clearErrors={clearErrors}
        trigger={trigger}
        watch={watch}
        emailName="email"
        codeName="authCode"
        onVerifiedChange={setIsEmailVerified}
        onCodeSentChange={setIsCodeSent}
      />

      {/* 연락처  */}
      <FormField<FindPasswordFormValues>
        name="phone"
        config={FIELD_CONFIG.phone}
        register={register}
        errors={errors}
      />

      <div className="mt-2.5 sm:mt-7.5">
        <Button type="submit" varient="default" width="lg" height="md" fontSize="md">
          비밀번호 찾기
        </Button>
      </div>
    </form>
  );
}
