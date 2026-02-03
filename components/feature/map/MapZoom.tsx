import { cn } from "@/lib/utils";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";

export const MapZoom = ({
  handleZoomIn,
  handleZoomOut,
  mapReady,
}: {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  mapReady: boolean;
}) => {
  const BaseClassess =
    "flex h-10 w-10 items-center-safe duration-200 border border-gray-300 justify-center rounded-full bg-white shadow-xl";

  const FocusClassess = "focus-visible:outline-3 focus-visible:outline-main";
  const HoverClassess = "hover:bg-gray-100";

  return (
    <div className="fixed top-52 right-7 z-60 flex flex-col gap-2">
      <button
        className={cn(BaseClassess, FocusClassess, HoverClassess, !mapReady && "-z-10 opacity-0")}
        onClick={handleZoomIn}
        aria-label="지도를 축소합니다"
      >
        <RiAddLine size={28} />
      </button>
      <button
        className={cn(BaseClassess, FocusClassess, HoverClassess, !mapReady && "-z-10 opacity-0")}
        onClick={handleZoomOut}
        aria-label="지도를 확대합니다"
      >
        <RiSubtractLine size={28} />
      </button>
    </div>
  );
};
