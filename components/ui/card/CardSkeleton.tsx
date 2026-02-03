import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CardSkeleton = () => {
  return (
    <div className="inline-block h-full">
      <div className="h-full overflow-hidden rounded-md border border-gray-300">
        <div className="relative h-[110px] md:h-[183px]">
          <Skeleton className="h-full w-full" style={{ lineHeight: "1.5" }} />
        </div>
        <div className="relative bg-white p-2.5 md:p-4">
          <Skeleton height={30} count={2} className="mb-2 w-full" style={{ lineHeight: "1.5" }} />
        </div>
      </div>
    </div>
  );
};
