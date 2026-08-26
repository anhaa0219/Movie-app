import { Footer } from "../../features/Footer";
import { Header } from "../../features/Header";

export const MorelikethisSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen overflow-x-hidden dark:bg-[#09090B]">
      <Header />

      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col flex-1 animate-pulse">
        <div className="w-full flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-10 mb-16">
          <div className="w-full flex justify-between items-center">
            <div className="h-7 sm:h-8 w-36 sm:w-44 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="w-full flex flex-col rounded-lg bg-[#F4F4F5] dark:bg-[#18181B] overflow-hidden"
              >
                <div className="relative w-full aspect-2/3 shrink-0 bg-zinc-200 dark:bg-zinc-800" />

                <div className="flex flex-col p-2.5 sm:p-3 gap-2 flex-1 justify-between">
                  <div className="h-3.5 bg-zinc-300 dark:bg-zinc-700 rounded w-16" />
                  <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-full" />
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-end mt-4">
            <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
              <div className="h-9 sm:h-10 w-20 sm:w-24 bg-zinc-200 dark:bg-zinc-800 rounded-md border border-[#E4E4E7] dark:border-zinc-700" />

              <div className="flex items-center gap-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-zinc-300 dark:bg-zinc-700" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-zinc-200 dark:bg-zinc-800" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-zinc-200 dark:bg-zinc-800" />
              </div>

              <div className="h-9 sm:h-10 w-16 sm:w-20 bg-zinc-200 dark:bg-zinc-800 rounded-md border border-[#E4E4E7] dark:border-zinc-700" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
