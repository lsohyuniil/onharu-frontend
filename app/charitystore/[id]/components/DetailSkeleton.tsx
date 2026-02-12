import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const DetailSkeleton = () => {
  return (
    <section className="mt-section-sm-top md:mt-section-lg-top mb-section-sm-bottom md:mb-section-lg-bottom">
      <div className="wrapper">
        <Skeleton height={48} />
        <div className="relative mt-5 h-[110px] md:mt-8 md:h-[340px]">
          <Skeleton className="h-full" />
        </div>

        <div className="mt-15 md:mt-21">
          <Skeleton height={48} />
          <div className="relative mt-5 h-[110px] md:mt-8 md:h-[340px]">
            <Skeleton className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
