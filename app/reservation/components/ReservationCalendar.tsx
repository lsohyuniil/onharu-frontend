"use client";

import { parseISO, isSameDay } from "date-fns";
import Calendar from "@/components/feature/calendar/Calendar";
import { Dispatch, SetStateAction } from "react";

interface ReservationCalendar {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

export const ReservationCalendar = ({ selectedDate, setSelectedDate }: ReservationCalendar) => {
  const availableDates = ["2026-02-01", "2026-02-05", "2026-02-12"];
  const filterDate = (d: Date) => availableDates.some(ad => isSameDay(d, parseISO(ad)));

  return (
    <Calendar
      filterDate={filterDate}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
};
