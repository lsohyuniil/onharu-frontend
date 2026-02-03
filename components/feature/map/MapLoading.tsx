import { cn } from "@/lib/utils";

export const MapLoading = ({ ready }: { ready: boolean }) => {
  return (
    <div
      className={cn(
        "absolute top-0 right-0 z-45 flex h-full w-full flex-col items-center justify-center gap-6.5 bg-white/95 md:w-[calc(100%-435px)]",
        ready && "-z-10 opacity-0"
      )}
      aria-hidden={ready}
    >
      <div className="flex items-center justify-center">
        <div className="relative h-10 w-10">
          <div className="bg-main absolute inset-0 animate-ping rounded-full opacity-75" />
          <div className="bg-main relative h-full w-full animate-pulse rounded-full" />
        </div>
      </div>
      <p className="text-md font-semibold">내 위치 찾는중..</p>
    </div>
  );
};
