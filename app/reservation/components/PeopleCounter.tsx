import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import { useEffect, useState } from "react";

interface PeopleCounter {
  counter: number;
  handleSubtract: () => void;
  handleAdd: () => void;
}

export const PeopleCounter = ({ counter, handleSubtract, handleAdd }: PeopleCounter) => {
  return (
    <div className="flex items-center justify-between">
      <p className="md:text-md text-sm font-semibold">방문 예정 인원</p>

      <div className="flex h-9 overflow-hidden rounded-md border border-gray-300 md:h-12.5">
        <button className="flex w-10 items-center justify-center md:w-15" onClick={handleSubtract}>
          <RiSubtractLine size={18} />
        </button>
        <div className="md:text-md flex w-[50px] items-center justify-center border-r border-l border-r-gray-300 border-l-gray-300 text-sm font-semibold md:w-[85px]">
          {counter}
        </div>
        <button className="flex w-10 items-center justify-center md:w-15" onClick={handleAdd}>
          <RiAddLine size={18} />
        </button>
      </div>
    </div>
  );
};
