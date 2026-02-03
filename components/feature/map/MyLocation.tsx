import { moveToCurrentLocation } from "./utils/moveCurrentLocation";
import { cn } from "@/lib/utils";
import { RiCrosshairLine } from "@remixicon/react";
import { RefObject } from "react";

export const MyLocation = ({
  originLocation,
  handleMyLocation,
  mapReady,
}: {
  originLocation: RefObject<{ lat: number; lng: number }> | null;
  handleMyLocation: ((lat: number, lng: number) => void) | null;
  mapReady: boolean;
}) => {
  const BaseClassess =
    "flex h-10 w-10 items-center-safe duration-200 border border-gray-300 justify-center rounded-full bg-white shadow-xl";
  const FocusClassess = "focus-visible:outline-3 focus-visible:outline-main";
  const HoverClassess = "hover:bg-gray-100";

  const handleMoveMyLocation = async () => {
    if (!originLocation || !handleMyLocation) return;

    handleMyLocation(originLocation.current.lat, originLocation.current.lng);
  };

  return (
    <div className="fixed top-80 right-7 z-60">
      <button
        className={cn(BaseClassess, FocusClassess, HoverClassess, !mapReady && "-z-10 opacity-0")}
        onClick={handleMoveMyLocation}
        aria-label="현재 내 위치로 이동합니다"
      >
        <RiCrosshairLine size={26} className="text-main" />
      </button>
    </div>
  );
};
