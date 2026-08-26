import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const WatchlistLoading = ({ count = 5 }) => {
  return (
    <SkeletonTheme baseColor="#27272A" highlightColor="#3F3F46">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {Array.from({ length: Math.min(count, 10) }).map((_, index) => (
          <div
            key={index}
            className="w-full flex flex-col rounded-lg bg-[#27272A] overflow-hidden"
          >
            <div className="relative w-full aspect-2/3 bg-[#18181B]">
              <Skeleton
                containerClassName="w-full h-full"
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col p-2.5 sm:p-3 gap-1">
              <Skeleton width={70} height={14} />

              <Skeleton width="90%" height={16} />

              <Skeleton width="65%" height={16} />
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};
