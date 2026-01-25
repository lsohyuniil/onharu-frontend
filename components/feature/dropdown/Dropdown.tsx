"use client";
import { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine, RiCheckLine } from "@remixicon/react";
import clsx from "clsx";

const SelectData = [
  {
    value: "recommand",
    label: "추천순",
  },
  {
    value: "wish",
    label: "인기순",
  },
  {
    value: "distance",
    label: "거리순",
  },
];
export const BgrDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("추천순");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const listboxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      listboxRef.current?.focus();
      const index = SelectData.findIndex(d => d.label === selected);
      setHighlightedIndex(index >= 0 ? index : 0);
    }
  }, [open, selected]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex(prev => (prev + 1) % SelectData.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex(prev => (prev - 1 + SelectData.length) % SelectData.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      setSelected(SelectData[highlightedIndex].label);
      setOpen(false);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  };

  // 드롭다운 외 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mt-7 ml-auto w-fit" ref={containerRef}>
      <button
        onKeyDown={e => e.key === "ArrowDown" && setOpen(true)}
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="border-main text-main border-main focus-visible:outline-main-900 flex items-center gap-1.5 rounded-full border bg-white px-3 py-1"
      >
        <span className="text-sm font-bold">{selected}</span>
        <RiArrowDownSLine size={18} className={clsx("duration-200", open && "rotate-180")} />
      </button>

      {open && (
        <div
          ref={listboxRef}
          role="listbox"
          tabIndex={0}
          aria-activedescendant={SelectData[highlightedIndex].value}
          onKeyDown={handleKeyDown}
          className="absolute top-10 z-30 w-full rounded-md border border-gray-300 bg-white shadow-md focus:outline-none"
        >
          {SelectData.map((data, index) => (
            <button
              key={data.value}
              id={data.value}
              role="option"
              aria-selected={selected === data.label}
              className={clsx(
                "flex w-full items-center gap-2 rounded-sm px-2 py-1 text-left text-sm",
                selected === data.label && "bg-main-100 text-main",
                highlightedIndex === index && "bg-gray-100"
              )}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => {
                setSelected(data.label);
                setOpen(false);
              }}
            >
              {data.label}
              {selected === data.label && <RiCheckLine size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
