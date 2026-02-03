"use client";
import { ReactNode } from "react";
import { useBottomSheetDrag } from "./useBottomsheetDrag";

type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function BottomSheet({ open, onClose, children }: BottomSheetProps) {
  const { sheetRef, ScrollRef, contentRef, handleRef, height, phase, handlers } =
    useBottomSheetDrag({ open });

  if (!open) return null;

  return (
    <div
      ref={sheetRef}
      className="fixed right-0 bottom-0 left-0 z-60 w-full duration-100"
      style={{
        height: height > 0 ? `${height}px` : "0",
        transition: phase === "settling" ? "height 300ms ease-out" : "none",
        touchAction: "none",
        userSelect: "none",
      }}
      {...handlers}
    >
      <div
        ref={ScrollRef}
        className="scrollbar-thin h-full overflow-y-auto rounded-t-xl border bg-white shadow-xl"
      >
        <div
          ref={handleRef}
          className="sticky top-0 z-61 flex h-8 w-full cursor-grab items-center justify-center bg-white active:cursor-grabbing"
        >
          <span className="inline-block h-1 w-9 rounded-md bg-gray-400" />
        </div>
        <div ref={contentRef} className="px-4 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
}
