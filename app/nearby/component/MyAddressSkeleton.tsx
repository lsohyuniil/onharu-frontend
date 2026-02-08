import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const MyAddressSkeleton = () => {
  const BaseClasses = "px-0 pt-3 pb-4 md:px-7 md:pt-12.5 md:pb-0 bg-white";

  return (
    <div className={BaseClasses}>
      <Skeleton height={40} style={{ lineHeight: "1.5" }} />
    </div>
  );
};
