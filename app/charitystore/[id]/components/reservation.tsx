import { RiCalendar2Line } from "@remixicon/react";

interface ReservationProps {
  status: "short" | "long" | "empty";
}

/**
 * status에따라 다른 UI가 노출됩니다.
 * @param {status} short - 1회성 나눔 제공 매장입니다.
 * @param {status} long - 장기 나눔 제공 매장입니다.
 * @param {status} empty - 나눔 제공하지 않는 매장입니다.

 */

export const Reservation = ({ status }: ReservationProps) => {
  const time = ["11:00", "12:00", "15:00"];

  if (status === "short") {
    return (
      <>
        <p className="lg:text-md flex items-center gap-1.5 text-base font-semibold">
          <RiCalendar2Line size={20} /> 예약 가능 날짜
        </p>

        {/* 그룹 날짜별 그루핑 */}
        <div className="mt-3 md:mt-6">
          <p>2025년 12월 30일</p>
          <div className="mt-4 flex gap-2">
            {time.map(t => (
              <span
                key={t}
                className="rounded-md border border-gray-300 px-5 py-1 text-sm md:px-10 md:py-2 md:text-base"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (status === "long") {
    const day = ["월요일", "화요일", "금요일"];
    const time = ["11:00", "12:00", "15:00"];
    return (
      <>
        <p className="lg:text-md flex items-center gap-1.5 text-base font-semibold">
          <RiCalendar2Line size={20} /> 예약 가능 날짜
        </p>
        <div className="mt-3 md:mt-6">
          매주{" "}
          {day.map((day, idx) => (
            <span className="font-semibold" key={day}>
              {day}
              {idx < day.length - 1 && ", "}
            </span>
          ))}
        </div>
        <div>
          {time.map((day, idx) => (
            <span key={day}>
              {day}
              {idx < time.length - 1 && ", "}
            </span>
          ))}{" "}
          에 나눔이 제공됩니다. :)
        </div>
      </>
    );
  }

  return <p className="lg:text-md flex items-center gap-1.5 text-base">나눔 준비중입니다.</p>;
};
