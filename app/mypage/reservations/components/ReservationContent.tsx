"use client";

import { CHILD_RESERVATION_TABS, OWNER_RESERVATION_TABS } from "../constants/reservationTabs";
import FilteredTabSection from "@/components/feature/filtered-tab-section/FilteredTabSection";
import DateGroupedPaginatedSection from "@/components/feature/date-grouped-pagination/DateGroupedPaginatedSection";
import ReservationCard from "./ReservationCard";
import { UserRole } from "@/lib/api/types/auth";
import { ChildReservation, OwnerReservation, ReservationsData } from "@/lib/api/types/reservation";

interface Props {
  items: ReservationsData<OwnerReservation | ChildReservation>;
  role: UserRole;
}

export default function ReservationContent({ items, role }: Props) {
  const tabs = role === "OWNER" ? OWNER_RESERVATION_TABS : CHILD_RESERVATION_TABS;

  return (
    <FilteredTabSection tabs={tabs}>
      <DateGroupedPaginatedSection
        items={items.reservations}
        totalPage={items.totalPages}
        getDate={item => item.reservationAt}
        emptyText="예약 내역이 없습니다."
        render={item => <ReservationCard key={item.id} {...item} role={role} />}
      />
    </FilteredTabSection>
  );
}
