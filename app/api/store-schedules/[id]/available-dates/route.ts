import { NextResponse } from "next/server";

export async function GET(storeId: string) {
  const url = `http://onharu-api.votex.co.kr:15080/api/store-schedules/${storeId}/available-dates`;

  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  if (!res.ok) {
    return NextResponse.json({ message: "예약 스케줄 조회 실패" }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
