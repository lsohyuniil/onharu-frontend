import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const StoreSearchSkeleton = () => {
  return (
    <div className="my-7.5 px-7">
      <Skeleton height={50} style={{ lineHeight: "1.5" }} />
    </div>
  );
};
