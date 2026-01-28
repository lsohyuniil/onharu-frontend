import { FieldErrors, UseFormRegister } from "react-hook-form";
import { RiCheckLine } from "@remixicon/react";
import { SignupFormValues } from "@/app/signup/data/signup";
import clsx from "clsx";

type TermsFieldProps = {
  register: UseFormRegister<SignupFormValues>;
  errors: FieldErrors<SignupFormValues>;
};

export default function TermsField({ register, errors }: TermsFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* 이용약관 */}
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          {...register("agreeTerms", { required: "이용 약관에 동의해야 합니다." })}
          className="peer hidden"
        />
        <span
          className={clsx(
            "flex h-4 w-4 items-center justify-center rounded border",
            "peer-checked:bg-main peer-checked:border-main",
            "border-[#E0E0E0] bg-white"
          )}
        >
          <RiCheckLine color="rgba(255,255,255,1)" size={14} />
        </span>
        이용약관에 동의합니다.
      </label>
      {errors.agreeTerms && <p className="text-danger text-sm">{errors.agreeTerms.message}</p>}

      {/* 개인정보 */}
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          {...register("agreePrivacy", { required: "개인정보 수집 및 이용에 동의해야 합니다." })}
          className="peer hidden"
        />
        <span
          className={clsx(
            "flex h-4 w-4 items-center justify-center rounded border",
            "peer-checked:bg-main peer-checked:border-main",
            "border-[#E0E0E0] bg-white"
          )}
        >
          <RiCheckLine color="rgba(255,255,255,1)" size={14} />
        </span>
        개인정보 수집 및 이용에 동의합니다.
      </label>
      {errors.agreePrivacy && <p className="text-danger text-sm">{errors.agreePrivacy.message}</p>}
    </div>
  );
}
