"use client";

import { Reservation } from "../types";
import { RiArrowRightSLine } from "@remixicon/react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function OwnerReservationCard({ reservations }: { reservations?: Reservation[] }) {
  const router = useRouter();

  return (
    <div className="bg-secondary flex-1 rounded-[10px] p-7">
      <div className="mb-8 text-lg font-bold">진행중인 예약</div>

      {reservations && reservations.length > 0 ? (
        reservations.map((reservation, idx) => (
          <div
            key={idx}
            onClick={() => router.push("/mypage/sharing/reservations")}
            className="mb-5 flex cursor-pointer items-center justify-between rounded-[10px] border bg-white p-5"
          >
            <div className="flex flex-col gap-2.5">
              <p className="text-base font-medium">
                {reservation.date} · {reservation.time} · {reservation.people}인
              </p>
              <p className="text-md text-main font-bold">예약 {reservation.status}</p>
            </div>
            <RiArrowRightSLine size={30} className="text-text-secondary" />
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-[10px] border bg-white py-10 text-center">
          <p className="text-md font-medium">현재 진행중인 예약이 없어요.</p>
          <p className="text-text-secondary text-sm">나눔 등록 후 예약을 받아보세요!</p>

          <Button
            onClick={() => router.push("/mypage/sharing/create")}
            varient="default"
            width="md"
            height="md"
            fontSize="sm"
          >
            나눔 하러 가기
          </Button>
        </div>
      )}
    </div>
  );
}
