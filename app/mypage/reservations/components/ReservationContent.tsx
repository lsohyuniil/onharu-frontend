"use client";

import { CHILD_RESERVATION_TABS, OWNER_RESERVATION_TABS } from "../constants/reservationTabs";
import FilteredTabSection from "@/components/feature/filtered-tab-section/FilteredTabSection";
import { ReservationItem } from "../types";
import DateGroupedPaginatedSection from "@/components/feature/date-grouped-pagination/DateGroupedPaginatedSection";
import ReservationCard from "./ReservationCard";

interface Props {
  items: ReservationItem[];
  role: "child" | "owner";
}

export default function ReservationContent({ items, role }: Props) {
  const tabs = role === "owner" ? OWNER_RESERVATION_TABS : CHILD_RESERVATION_TABS;

  return (
    <FilteredTabSection
      items={items}
      tabs={tabs}
      filterKey="status"
      render={filtered => (
        <DateGroupedPaginatedSection
          items={filtered}
          getDate={item => item.date}
          emptyText="예약 내역이 없습니다."
          render={item => (
            <ReservationCard key={item.id} {...item} role={item.role} status={item.status} />
          )}
        />
      )}
    />
  );
}
