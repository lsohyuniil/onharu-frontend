"use client";

import { useState } from "react";
import styles from "./Calendar.module.css";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import { Dispatch, SetStateAction } from "react";

interface CalendarProps {
  filterDate?: (date: Date) => boolean;
  selectedDate?: Date | null;
  setSelectedDate?: Dispatch<SetStateAction<Date | null>>;
}
export default function Calendar({ filterDate, selectedDate, setSelectedDate }: CalendarProps) {
  return (
    <div className={styles.wrapper}>
      <DatePicker
        locale={ko}
        selected={selectedDate}
        onChange={setSelectedDate}
        minDate={new Date()}
        inline
        showDisabledMonthNavigation
        filterDate={filterDate}
      />
    </div>
  );
}
