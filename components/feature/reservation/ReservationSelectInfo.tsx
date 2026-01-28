import { format } from "date-fns";
import { FormatKoreanDate } from "./utils/FormatKoreanDate";

interface ReservationSelectInfoProps {
  selectedTime: string | null;
  selectedDate?: Date | null;
}

export const ReservationSelectInfo = ({
  selectedTime,
  selectedDate,
}: ReservationSelectInfoProps) => {
  const baseClasses = "rounded-md border border-gray-300 py-3 text-center md:py-5";
  if (selectedDate && selectedTime) {
    const formatDate = format(selectedDate, "yyyy-MM-dd");
    const koDate = FormatKoreanDate(formatDate);
    /**
     * 날짜별로 시간을 그룹핑
     * @param koDate 날짜 데이터를 한국어로 변환해주는 유틸함수입니다.
     * 예를들어 2025-12-12 라면 2025년 12월 12일로 변환해줍니다.
     */
    return (
      <div className={baseClasses}>
        <p className="md:text-md text-sm font-semibold">
          선택된 일정 :{" "}
          <span className="text-main">
            {koDate} {selectedTime}
          </span>
        </p>
      </div>
    );
  }

  if (!selectedDate || !selectedTime) {
    return (
      <div className={baseClasses}>
        <p className="md:text-md text-sm font-semibold">선택된 일정이 없습니다.</p>
      </div>
    );
  }
};
