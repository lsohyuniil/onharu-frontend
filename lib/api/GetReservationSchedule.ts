export async function GetReservationSchedule(id: string) {
  const res = await fetch(`/api/store-schedules/${id}/available-dates`);

  if (!res.ok) {
    throw new Error("예약 일정 조회 실패");
  }

  const data = await res.json();

  if (data.success === false) {
    throw new Error(data.message || "예약 일정 조회 실패");
  }

  return data;
}
