import { Header } from "@/app/features/Header";
import { Footer } from "@/app/features/Footer";

export const Pageskeleton = () => {
  return (
    <div className="w-full flex flex-col items-center relative min-h-screen overflow-x-hidden">
      <Header />

      <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-6 sm:mt-10 mb-16 relative animate-pulse flex-1">
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex flex-col gap-2 min-w-0 flex-1 w-full">
              <div className="h-8 sm:h-10 bg-zinc-200 rounded-md w-3/4 max-w-md" />
              <div className="h-4 sm:h-5 bg-zinc-200 rounded-md w-36 sm:w-44" />
            </div>

            <div className="flex items-center sm:flex-col sm:items-end gap-3 sm:gap-2 shrink-0">
              <div className="h-3.5 bg-zinc-200 rounded w-12 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-200" />
                <div className="flex sm:flex-col items-baseline sm:items-start gap-1 sm:gap-1">
                  <div className="h-4 sm:h-5 bg-zinc-200 rounded w-12 sm:w-14" />
                  <div className="h-3 bg-zinc-200 rounded w-8 sm:w-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6">
            <div className="hidden sm:block sm:w-60 md:w-72 aspect-2/3 shrink-0 rounded-lg bg-zinc-200" />

            <div className="w-full flex-1 aspect-video sm:aspect-auto sm:min-h-85 md:h-107.5 rounded-lg bg-zinc-200 relative">
              <div className="flex gap-2.5 sm:gap-3 items-center absolute left-4 sm:left-6 bottom-4 sm:bottom-6 bg-white/40 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/70" />
                <div className="h-3.5 sm:h-4 w-20 sm:w-24 bg-white/70 rounded" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 mt-6 sm:mt-8">
          <div className="flex flex-wrap gap-2">
            <div className="h-6 sm:h-7 w-16 sm:w-20 bg-zinc-200 rounded-full" />
            <div className="h-6 sm:h-7 w-20 sm:w-24 bg-zinc-200 rounded-full" />
            <div className="h-6 sm:h-7 w-14 sm:w-16 bg-zinc-200 rounded-full" />
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="h-4 bg-zinc-200 rounded w-full" />
            <div className="h-4 bg-zinc-200 rounded w-11/12" />
            <div className="h-4 bg-zinc-200 rounded w-4/5" />
          </div>

          <div className="w-full flex flex-col gap-3 sm:gap-4 mt-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <div className="w-24 h-4 bg-zinc-200 rounded shrink-0" />
                <div className="h-4 bg-zinc-200 rounded w-44 sm:w-48 mt-1 sm:mt-0" />
              </div>
              <div className="w-full h-px bg-[#E4E4E7]" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <div className="w-24 h-4 bg-zinc-200 rounded shrink-0" />
                <div className="h-4 bg-zinc-200 rounded w-56 sm:w-64 mt-1 sm:mt-0" />
              </div>
              <div className="w-full h-px bg-[#E4E4E7]" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <div className="w-24 h-4 bg-zinc-200 rounded shrink-0" />
                <div className="h-4 bg-zinc-200 rounded w-64 sm:w-80 mt-1 sm:mt-0" />
              </div>
              <div className="w-full h-px bg-[#E4E4E7]" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 mt-10 sm:mt-14">
          <div className="w-full flex justify-between items-center">
            <div className="h-6 sm:h-7 w-32 sm:w-36 bg-zinc-200 rounded-md" />
            <div className="h-5 sm:h-6 w-16 sm:w-20 bg-zinc-200 rounded-md" />
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg bg-[#F4F4F5] overflow-hidden"
              >
                <div className="w-full aspect-2/3 bg-zinc-200" />
                <div className="flex flex-col p-2.5 sm:p-3 gap-2">
                  <div className="h-3.5 bg-zinc-300 rounded w-14" />
                  <div className="h-4 bg-zinc-300 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
