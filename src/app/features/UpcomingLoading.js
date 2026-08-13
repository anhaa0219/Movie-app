import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const UpcomingLoading = () => {
  return (
    <SkeletonTheme baseColor="#E4E4E7" highlightColor="#F4F4F5">
      <div className="w-full flex flex-col px-4 md:px-8 gap-8">
        <div className="w-full flex flex-col gap-8">
          <div className="w-full h-9 flex justify-between items-center">
            <Skeleton width={130} height={32} />

            <div className="w-40 h-9 rounded-md flex justify-center items-center gap-2">
              <Skeleton width={100} height={20} />
              <Skeleton width={20} height={20} />
            </div>
          </div>
          
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-110 flex flex-col rounded-lg gap-1 overflow-hidden"
              >
                <div className="w-full h-85">
                  <Skeleton width="100%" height="100%" />
                </div>

                <div className="w-full flex flex-col py-2 px-2 gap-2">
                  <div className="w-full flex gap-1 items-center">
                    <Skeleton circle width={20} height={20} />
                    <Skeleton width={40} height={20} />
                  </div>

                  <div className="w-full">
                    <Skeleton width="80%" height={28} />
                    <Skeleton width="60%" height={28} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};