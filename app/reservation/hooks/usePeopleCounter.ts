import { useState } from "react";

export const usePeopleCounter = ({ availableCounter }: { availableCounter: number }) => {
  const [counter, setCounter] = useState(1);

  const MIN_COUNTER = 1;
  const AVAILABLE_COUNTER = availableCounter;
  //발행자가 설정한 최대 예약 가능 인원

  const handleAdd = () => {
    if (counter + 1 > AVAILABLE_COUNTER) {
      alert("예약 가능 인원 초과");
      return;
    }
    setCounter(prev => prev + 1);
  };

  const handleSubtract = () => {
    if (counter - 1 < MIN_COUNTER) {
      alert("최소 한 명 이상 선택 필수");
      return;
    }
    setCounter(prev => prev - 1);
  };

  return { counter, handleAdd, handleSubtract };
};
