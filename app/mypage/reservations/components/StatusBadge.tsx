import { ReservationStatus } from "../types";

const STATUS_UI: Record<ReservationStatus, { label: string; badge: string }> = {
  CONFIRMED: { label: "예약 확정", badge: "text-main border-main" },
  PENDING: { label: "예약 대기중", badge: "text-sub-sub-600 border-sub-sub-600" },
  COMPLETED: { label: "이용 완료", badge: "text-main border-main" },
  CANCELED: { label: "예약 취소", badge: "text-danger border-danger" },
  SHARE_DONE: { label: "나눔 완료", badge: "text-main border-main" },
};

interface Props {
  status: ReservationStatus;
}

export default function StatusBadge({ status }: Props) {
  const { label, badge } = STATUS_UI[status];

  return (
    <div className={`${badge} rounded-full border bg-white px-2 py-0.5 text-sm font-medium`}>
      {label}
    </div>
  );
}
