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
/**
 * 공통 Calendar 컴포넌트를 사용하기 전 날짜 데이터를 가공하는 곳입니다.
 * @param filterDate Calendar가 어떤 날짜를 필터링 할지 결정해줍니다.
 * @param selectedDate 커스텀 훅에서 전달받은 선택된 날짜입니다.
 * @param setSelectedDate 커스텀 훅에서 전달받은 선택 날짜를 바꿔주는 함수입니다.
 */

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
