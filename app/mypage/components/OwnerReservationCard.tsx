import { Reservation } from "../types";
import CardList from "./CardList";

export default function OwnerReservationCard({ reservations }: { reservations?: Reservation[] }) {
  return (
    <div className="bg-secondary flex-1 rounded-[10px] p-5 lg:p-7">
      <CardList
        title="진행중인 예약"
        items={reservations?.map(r => ({
          title: `예약 ${r.status}`,
          subtitle: `${r.date} · ${r.time} · ${r.people}인`,
        }))}
        link="/review"
        emptyTitle="현재 진행중인 예약이 없어요."
        emptySubtitle="나눔 등록 후 예약을 받아보세요!"
        emptyButtonText="나눔 하러 가기"
        emptyLink="/mypage/sharing/create"
      />
    </div>
  );
}
