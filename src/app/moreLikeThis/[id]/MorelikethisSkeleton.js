import { Footer } from "../../features/Footer";
import { Header } from "../../features/Header";

export const MorelikethisSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen">
      <Header />

      <div className="w-full max-w-270 px-4 mx-auto flex flex-col items-center animate-pulse">
        <div className="w-full flex flex-col gap-6 mt-12">
          <div className="w-full flex justify-between items-center">
            <div className="h-7 w-44 bg-[#E4E4E7] rounded-md" />
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center justify-items-center">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="w-full flex flex-col rounded-lg bg-[#F4F4F5] overflow-hidden"
              >
                <div className="relative w-full aspect-2/3 shrink-0 bg-[#E4E4E7]" />

                <div className="flex flex-col p-3 gap-2">
                  <div className="h-3.5 bg-[#E4E4E7] rounded w-16" />
                  <div className="h-4 bg-[#E4E4E7] rounded w-full" />
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-7xl h-10 flex justify-end mb-16">
            <div className="h-10 flex items-center gap-2">
              <div className="h-10 w-24 border border-[#E4E4E7] rounded-md bg-[#F4F4F5]" />

              <div className="h-10 flex gap-1">
                <div className="w-10 h-10 rounded-md bg-[#E4E4E7]" />
                <div className="w-10 h-10 rounded-md bg-[#F4F4F5]" />
                <div className="w-10 h-10 rounded-md bg-[#F4F4F5]" />
                <div className="w-10 h-10 rounded-md bg-[#F4F4F5]" />
              </div>

              <div className="h-10 w-20 border border-[#E4E4E7] rounded-md bg-[#F4F4F5]" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
