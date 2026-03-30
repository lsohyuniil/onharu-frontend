import { format } from "date-fns";
import { GroupedReservations } from "@/components/feature/reservation/type/ReservationType";
import clsx from "clsx";

interface ReservationTimeProps {
  data: GroupedReservations;
  selectedDate: Date | null;
  selectedTime: string | string[] | null;
  handleSelectTime: (value: string) => void;
  existingSchedules?: Record<string, string[]>;
}

export const ReservationTime = ({
  data,
  selectedDate,
  selectedTime,
  handleSelectTime,
}: ReservationTimeProps) => {
  const formatted = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
  const timesForSelectedDate = data[formatted] || [];
  console.log("timesForSelectedDate:", timesForSelectedDate);

  if (timesForSelectedDate.length > 0) {
    return (
      <div className="grid grid-cols-4 gap-2">
        {timesForSelectedDate.map(slot => {
          const isSelected = Array.isArray(selectedTime)
            ? selectedTime.includes(slot.time)
            : selectedTime === slot.time;

          const isDisabled = !slot.isAvailable;

          return (
            <button
              key={`${formatted}-${slot.time}`}
              disabled={isDisabled}
              onClick={() => !isDisabled && handleSelectTime(slot.time)}
              className={clsx(
                "focus-visible:bg-main-300 rounded-md border border-gray-300 bg-white py-2 transition duration-150 md:py-4",
                isSelected && "!bg-main text-white",
                isDisabled
                  ? "cursor-not-allowed bg-gray-200 text-gray-400"
                  : "cursor-pointer hover:bg-gray-50"
              )}
            >
              {slot.time}
            </button>
          );
        })}
      </div>
    );
  }

  return null;
};
