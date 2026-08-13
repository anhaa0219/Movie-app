import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const HeroSectionLoading = () => {
  return (
    <SkeletonTheme baseColor="#E4E4E7" highlightColor="#F4F4F5">
      <div className="relative w-full mt-6 h-125 rounded-xl overflow-hidden">
        <Skeleton width="100%" height="100%" />

        <div className="absolute inset-0 flex items-end p-8 md:p-16">
          <div className="w-full max-w-xl flex flex-col gap-3 pb-6">
            <Skeleton width={100} height={20} />

            <Skeleton width="75%" height={48} />

            <div className="flex items-center gap-2">
              <Skeleton circle width={20} height={20} />
              <Skeleton width={50} height={20} />
            </div>

            <div className="flex flex-col gap-1 pt-1">
              <Skeleton width="100%" height={14} />
              <Skeleton width="92%" height={14} />
              <Skeleton width="80%" height={14} />
            </div>

            <div className="pt-2">
              <Skeleton width={145} height={40} borderRadius={6} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Skeleton width={24} height={8} borderRadius={999} />
          <Skeleton circle width={8} height={8} />
          <Skeleton circle width={8} height={8} />
          <Skeleton circle width={8} height={8} />
          <Skeleton circle width={8} height={8} />
        </div>

        <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2">
          <Skeleton circle width={40} height={40} />
        </div>
      </div>
    </SkeletonTheme>
  );
};