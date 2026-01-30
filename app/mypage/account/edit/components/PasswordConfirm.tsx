"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import AccountEditForm, { EditForm, UserRole } from "./AccountEditForm";
import useModal from "@/hooks/useModal";
import { Modal } from "@/components/ui/Modal";

interface PasswordConfirmForm {
  password: string;
}

export default function EditAccountFlow() {
  const [step, setStep] = useState<"confirm" | "edit">("confirm");
  const [serverError, setServerError] = useState("");
  const [editData, setEditData] = useState<EditForm | null>(null);
  const [userRole, setUserRole] = useState<UserRole>("child"); // 나중에 로그인 유저 정보로 변경
  const [nicknameError, setNicknameError] = useState("");

  const router = useRouter();

  const { open, handleOpenModal, handleCloseModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetPasswordForm,
  } = useForm<PasswordConfirmForm>();

  // mock fetch function
  const fetchEditData = async (): Promise<EditForm> => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (userRole === "child") {
          resolve({ name: "홍길동", nickname: "홍홍홍", phone: "01012341234" });
        } else {
          resolve({ name: "가게주인", phone: "01098765432", businessNumber: "1234567890" });
        }
      }, 300);
    });
  };

  const handleModalConfirm = () => {
    handleCloseModal();
    setStep("confirm");
    setEditData(null);
    resetPasswordForm();
  };

  // 비밀번호 확인
  const onSubmitPassword = async (data: PasswordConfirmForm) => {
    setServerError("");
    if (data.password === "1234") {
      const fetchedData = await fetchEditData();
      setEditData(fetchedData);
      setStep("edit");
    } else {
      setServerError("비밀번호가 일치하지 않습니다.");
    }
  };

  // 회원 정보 수정
  const onSubmitEdit = async (data: EditForm) => {
    setNicknameError("");

    const isNicknameDuplicate = data.nickname === "홍홍홍"; // mock

    if (isNicknameDuplicate) {
      setNicknameError("이미 사용 중인 닉네임입니다.");
      return;
    }

    console.log("회원정보 수정 데이터:", data);
    handleOpenModal();
  };

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6">
      {/* 비밀번호 확인 */}
      {step === "confirm" && (
        <>
          <div className="sm:text-md text-center text-sm font-medium">
            <p>회원정보를 안전하게 보호하기 위해</p>
            <p>비밀번호를 한 번 더 입력해주세요.</p>
          </div>

          <Input label="이메일" id="email" placeholder="test@test.com" disabled />

          <Input
            label="비밀번호"
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            isRequired
            register={register("password", { required: "비밀번호는 필수입니다." })}
            error={
              errors.password ||
              (serverError ? { type: "server", message: serverError } : undefined)
            }
          />

          <div className="grid grid-cols-2 gap-2 sm:gap-5">
            <Button
              onClick={() => router.push("/mypage")}
              varient="light"
              fontSize="md"
              width="lg"
              height="md"
            >
              취소
            </Button>

            <Button
              type="submit"
              onClick={handleSubmit(onSubmitPassword)}
              varient="default"
              fontSize="md"
              width="lg"
              height="md"
            >
              확인
            </Button>
          </div>
        </>
      )}

      {/* 회원정보 수정 */}
      {step === "edit" && editData && (
        <AccountEditForm
          defaultValues={editData}
          userRole={userRole}
          onSubmit={onSubmitEdit}
          serverNicknameError={nicknameError}
        />
      )}

      {/* 수정 완료 모달 */}
      {open && (
        <Modal onClick={handleModalConfirm}>
          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <p className="mb-5 text-center font-medium break-keep sm:mb-10 sm:text-lg">
              회원정보가 성공적으로 수정되었습니다.
            </p>
            <Button
              varient="default"
              width="lg"
              height="md"
              fontSize="sm"
              onClick={handleModalConfirm}
            >
              확인
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
