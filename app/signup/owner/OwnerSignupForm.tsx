"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { SignupFormValues } from "@/app/signup/types";
import TermsField from "../components/fields/TermsField";
import BusinessNumberField from "../components/fields/BusinessNumberField";
import EmailAuthField from "@/components/feature/EmailAuthField";
import { FormField } from "@/components/form-fields/FormField";
import { FIELD_CONFIG } from "@/components/form-fields/fieldConfig";

export default function OwnerSignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    trigger,
    clearErrors,
  } = useForm<SignupFormValues>({ mode: "onSubmit" });

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const passwordValue = watch("password");

  const onSubmit = (data: SignupFormValues) => {
    if (!isCodeSent) {
      setError("email", { type: "manual", message: "이메일 인증을 진행해주세요." });
      return;
    }

    if (!isEmailVerified) {
      setError("authCode", { type: "manual", message: "인증 확인을 완료해 주세요." });
      return;
    }

    console.log("회원가입 데이터:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* 이메일 */}
      <EmailAuthField<SignupFormValues>
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

      {/* 비밀번호 */}
      <FormField<SignupFormValues>
        name="password"
        config={FIELD_CONFIG.password}
        register={register}
        errors={errors}
      />

      {/* 비밀번호 확인 */}
      <FormField<SignupFormValues>
        name="passwordConfirm"
        config={FIELD_CONFIG.passwordConfirm(passwordValue)}
        register={register}
        errors={errors}
      />

      {/* 매장명 */}
      <FormField<SignupFormValues>
        name="storeName"
        config={FIELD_CONFIG.storeName}
        register={register}
        errors={errors}
      />

      {/* 연락처 */}
      <FormField<SignupFormValues>
        name="phone"
        config={FIELD_CONFIG.phone}
        register={register}
        errors={errors}
      />

      {/* 사업자등록번호 */}
      <BusinessNumberField register={register} errors={errors} trigger={trigger} />

      {/* 이용 약관 */}
      <TermsField register={register} errors={errors} />

      <div className="mt-2.5 sm:mt-7.5">
        <Button type="submit" varient="default" width="lg" height="md" fontSize="md">
          회원가입
        </Button>
      </div>
    </form>
  );
}
