import { useState } from "react";

export function useCalendarSelect() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return { selectedDate, setSelectedDate };
}
