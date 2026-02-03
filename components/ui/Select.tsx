"use client";

import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { RiArrowUpSLine, RiCheckLine } from "@remixicon/react";

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface Props {
  value: string | number | "";
  options: SelectOption[];
  onChange: (value: string | number) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export default function Select({
  value,
  options,
  onChange,
  placeholder = "선택해 주세요",
  disabled,
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  // 바깥 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={clsx("relative w-full", className)}>
      {/* 선택 영역 */}
      <button
        type="button"
        onClick={() => !disabled && setOpen(prev => !prev)}
        className={clsx(
          "hover:border-main focus:border-main active:border-main w-full rounded-[10px] border bg-white px-4 py-2.5 text-left text-sm transition focus:border-2 sm:text-base",
          "flex items-center justify-between",
          "focus:border-primary",
          disabled && "cursor-not-allowed bg-gray-100"
        )}
      >
        <span className={clsx(!selectedOption && "text-text-secondary")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <span
          className={clsx("transition-transform duration-200", open ? "rotate-0" : "rotate-180")}
        >
          <RiArrowUpSLine className="h-6 w-6" />
        </span>
      </button>

      {/* 드롭다운 리스트 */}
      {open && (
        <ul className="border-border absolute z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-[10px] border bg-white p-2 shadow-md">
          {options.map(opt => (
            <li
              key={opt.value}
              onClick={() => {
                if (opt.disabled) return;
                onChange(opt.value);
                setOpen(false);
              }}
              className={clsx(
                "cursor-pointer px-4 py-2 text-sm transition sm:text-base",
                "hover:bg-main-100",
                opt.value === value && "text-main flex items-center justify-between",
                opt.disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {opt.label}
              {opt.value === value && <RiCheckLine className="text-main h-5 w-5" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
