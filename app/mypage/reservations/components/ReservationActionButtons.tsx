"use client";

import { Button } from "@/components/ui/Button";
import { CancelModalType } from "../types";
import useModal from "@/hooks/ui/useModal";
import ReservationModal from "./ReservationModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UserRole } from "@/lib/api/types/auth";
import { ReservationStatus } from "@/lib/api/types/reservation";

interface Props {
  role: UserRole;
  status: "ALL" | ReservationStatus;
  reservationId: number;
  reservationDate: string;
}

// 취소 가능 여부 계산
function getCancelModalType(
  role: "CHILD" | "OWNER",
  reservationAt: string
): "cancelChild" | "cancelOwner" | "cancelNotAllowed" {
  if (role === "CHILD") {
    const resDate = new Date(reservationAt);
    const diff = resDate.getTime() - Date.now();
    return diff < 24 * 60 * 60 * 1000 ? "cancelNotAllowed" : "cancelChild";
  }

  return "cancelOwner";
}

export default function ReservationActionButtons({
  role,
  status,
  reservationId,
  reservationDate,
}: Props) {
  const [modalType, setModalType] = useState<CancelModalType>();

  const router = useRouter();

  const { open, handleOpenModal, handleCloseModal } = useModal();

  // 예약 상태 업데이트
  const updateReservationStatus = async (newStatus: ReservationStatus, reason?: string) => {
    try {
      console.log(reservationId, newStatus, reason);

      handleCloseModal();
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancelClick = () => {
    setModalType(getCancelModalType(role, reservationDate));
    handleOpenModal();
  };

  const handleConfirmClick = (reason?: string) => {
    if (modalType === "cancelChild" || modalType === "cancelOwner") {
      updateReservationStatus("CANCELED", reason);
    }
  };

  const handleImmediateAction = (type: "CONFIRMED" | "COMPLETED") => {
    updateReservationStatus(type);
  };

  return (
    <>
      {role === "CHILD" && status === "COMPLETED" && (
        <Button
          varient="default"
          width="lg"
          height="sm"
          fontSize="sm"
          onClick={() => router.push("/mypage/activity/reviews")}
        >
          감사 리뷰 작성
        </Button>
      )}

      {role === "CHILD" && (status === "CONFIRMED" || status === "WAITING") && (
        <Button varient="dark" width="lg" height="sm" fontSize="sm" onClick={handleCancelClick}>
          예약 취소
        </Button>
      )}

      {role === "OWNER" && status === "CONFIRMED" && (
        <>
          <Button
            varient="default"
            width="lg"
            height="sm"
            fontSize="sm"
            onClick={() => handleImmediateAction("COMPLETED")}
          >
            나눔 완료
          </Button>
          <Button varient="dark" width="lg" height="sm" fontSize="sm" onClick={handleCancelClick}>
            예약 취소
          </Button>
        </>
      )}

      {role === "OWNER" && status === "WAITING" && (
        <>
          <Button
            varient="default"
            width="lg"
            height="sm"
            fontSize="sm"
            onClick={() => handleImmediateAction("CONFIRMED")}
          >
            예약 확정
          </Button>
          <Button varient="dark" width="lg" height="sm" fontSize="sm" onClick={handleCancelClick}>
            예약 취소
          </Button>
        </>
      )}

      {modalType && (
        <ReservationModal
          open={open}
          modalType={modalType}
          onClose={handleCloseModal}
          onConfirm={handleConfirmClick}
        />
      )}
    </>
  );
}
