"use client";

import { useSearchParams } from "next/navigation";
import { PageSection } from "../components/PageSection";
import ReservationContent from "./components/ReservationContent";
import { useAuthProfile } from "@/hooks/useAuth";
import { ReservationStatus } from "@/lib/api/types/reservation";
import { useReservations } from "@/hooks/useReservations";

export default function ReservationPage() {
  const { data: user } = useAuthProfile();
  const searchParams = useSearchParams();

  const pageNum = Number(searchParams.get("pageNum") ?? 1);
  const statusFilter = (searchParams.get("statusFilter") ?? "ALL") as ReservationStatus;

  const baseParams = {
    pageNum,
    perPage: 4,
    statusFilter,
    sortField: "id" as const,
    sortDirection: "desc" as const,
  };

  const reservationParams = user
    ? user.userType === "OWNER"
      ? { ...baseParams, storeId: user.stores[0] }
      : { ...baseParams }
    : undefined;

  const { data } = useReservations(user?.userType, reservationParams);

  return (
    <PageSection title="예약 내역" className="bg-white">
      {user && data?.success && <ReservationContent items={data.data} role={user.userType} />}
    </PageSection>
  );
}
