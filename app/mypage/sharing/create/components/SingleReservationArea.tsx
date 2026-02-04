import { format } from "date-fns";
import { Dispatch, SetStateAction } from "react";
import Calendar from "@/components/feature/calendar/Calendar";
import { ReservationTime } from "@/components/feature/reservation/ReservationTime";
import { ReservationSelectInfo } from "@/components/feature/reservation/ReservationSelectInfo";
import { TIMES } from "../constants/schedule";
import { GroupedReservations } from "@/components/feature/reservation/type/ReservationType";

export function SingleReservationArea({
  selectedDate,
  setSelectedDate,
  selectedTime,
  handleSelectTime,
}: {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  selectedTime: string | null;
  handleSelectTime: (time: string) => void;
}) {
  const dataForReservation: GroupedReservations = selectedDate
    ? { [format(selectedDate, "yyyy-MM-dd")]: TIMES }
    : {};

  return (
    <>
      <div className="sm:text-md mb-2 text-base font-medium sm:mb-5">나눔 일정</div>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <div className="mt-1.25 mb-3.75 sm:mt-2.5 sm:mb-7.5">
        <ReservationTime
          data={dataForReservation}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          handleSelectTime={handleSelectTime}
        />
      </div>
      <div className="bg-white">
        <ReservationSelectInfo selectedDate={selectedDate} selectedTime={selectedTime} />
      </div>
    </>
  );
}
