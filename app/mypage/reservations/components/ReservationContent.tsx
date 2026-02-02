"use client";

import { useState } from "react";
import TabFilter from "@/components/ui/TabFilter";
import ReservationDetails from "./ReservationDetails";
import { ReservationItem } from "../types";

interface Props {
  items: ReservationItem[];
  role: "child" | "owner";
}

// 아동용 탭
const CHILD_TABS = [
  { label: "전체", value: "ALL" },
  { label: "예약 확정", value: "CONFIRMED" },
  { label: "예약 대기중", value: "PENDING" },
  { label: "이용 완료", value: "COMPLETED" },
  { label: "예약 취소", value: "CANCELED" },
];

// 가게용 탭
const OWNER_TABS = [
  { label: "전체", value: "ALL" },
  { label: "예약 확정", value: "CONFIRMED" },
  { label: "예약 대기중", value: "PENDING" },
  { label: "나눔 완료", value: "SHARE_DONE" },
  { label: "예약 취소", value: "CANCELED" },
];

export default function ReservationContent({ items, role }: Props) {
  const [status, setStatus] = useState<string>("ALL");

  const tabs = role === "owner" ? OWNER_TABS : CHILD_TABS;

  const filteredItems = items.filter(item => (status === "ALL" ? true : item.status === status));

  return (
    <>
      <TabFilter tabs={tabs} status={status} setStatus={setStatus} />
      <ReservationDetails items={filteredItems} status={status} />
    </>
  );
}
