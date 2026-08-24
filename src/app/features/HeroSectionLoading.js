import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const HeroSectionLoading = () => {
  return (
    <SkeletonTheme baseColor="#E4E4E7" highlightColor="#F4F4F5">
      <div className="relative w-screen min-w-full h-115 sm:h-135 md:h-155 lg:h-180 xl:h-200 overflow-hidden select-none">
        <Skeleton width="100%" height="100%" />

        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pb-12 sm:pb-16 md:pb-20">
            <div className="w-full max-w-2xl flex flex-col gap-2.5 sm:gap-3.5">
              <Skeleton width={90} height={16} />

              <Skeleton width="80%" height={40} className="sm:!h-12 md:!h-14" />

              <div className="flex items-center gap-2">
                <Skeleton circle width={20} height={20} />
                <Skeleton width={50} height={20} />
              </div>

              <div className="flex flex-col gap-1.5 pt-1 max-w-xl">
                <Skeleton width="100%" height={14} />
                <Skeleton width="90%" height={14} />
                <Skeleton width="75%" height={14} />
              </div>

              <div className="pt-2">
                <Skeleton width={140} height={40} borderRadius={8} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2">
          <Skeleton width={28} height={8} borderRadius={999} />
          <Skeleton circle width={8} height={8} />
          <Skeleton circle width={8} height={8} />
          <Skeleton circle width={8} height={8} />
          <Skeleton circle width={8} height={8} />
        </div>

        <div className="hidden sm:block absolute right-6 md:right-12 top-1/2 -translate-y-1/2">
          <Skeleton circle width={44} height={44} />
        </div>
      </div>
    </SkeletonTheme>
  );
};
