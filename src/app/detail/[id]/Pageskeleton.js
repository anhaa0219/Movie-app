import { Header } from "@/app/features/Header";
import { Footer } from "@/app/features/Footer";

export const Pageskeleton = () => {
  return (
    <div className="w-full flex flex-col items-center relative min-h-screen">
      <Header />

      <main className="w-full max-w-270 px-4 flex flex-col items-center mt-10 mb-16 relative animate-pulse">
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex justify-between items-start gap-4">
            <div className="flex flex-col gap-2 min-w-0 flex-1">
              <div className="h-9 sm:h-10 bg-[#E4E4E7] rounded-md w-3/4 max-w-md" />

              <div className="h-5 bg-[#E4E4E7] rounded-md w-40" />
            </div>

            <div className="flex flex-col gap-2 shrink-0 items-end">
              <div className="h-3.5 bg-[#E4E4E7] rounded w-12" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#E4E4E7]" />
                <div className="flex flex-col gap-1">
                  <div className="h-4 bg-[#E4E4E7] rounded w-14" />
                  <div className="h-3 bg-[#E4E4E7] rounded w-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-6 h-auto md:h-107.5">
            <div className="w-full md:w-72.5 h-100 md:h-full shrink-0 rounded-lg bg-[#E4E4E7]" />

            <div className="w-full flex-1 h-65 md:h-full rounded-lg bg-[#E4E4E7] relative">
              <div className="flex gap-3 items-center absolute left-6 bottom-6 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full">
                <div className="w-9 h-9 rounded-full bg-white/70" />
                <div className="h-4 w-24 bg-white/70 rounded" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 mt-8">
          <div className="flex flex-wrap gap-2">
            <div className="h-7 w-20 bg-[#E4E4E7] rounded-full" />
            <div className="h-7 w-24 bg-[#E4E4E7] rounded-full" />
            <div className="h-7 w-16 bg-[#E4E4E7] rounded-full" />
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="h-4 bg-[#E4E4E7] rounded w-full" />
            <div className="h-4 bg-[#E4E4E7] rounded w-11/12" />
            <div className="h-4 bg-[#E4E4E7] rounded w-4/5" />
          </div>

          <div className="w-full flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-2">
              <div className="flex gap-8 items-center">
                <div className="w-20 h-4 bg-[#E4E4E7] rounded shrink-0" />
                <div className="h-4 bg-[#E4E4E7] rounded w-48" />
              </div>
              <div className="w-full h-px bg-[#E4E4E7]" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-8 items-center">
                <div className="w-20 h-4 bg-[#E4E4E7] rounded shrink-0" />
                <div className="h-4 bg-[#E4E4E7] rounded w-64" />
              </div>
              <div className="w-full h-px bg-[#E4E4E7]" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-8 items-center">
                <div className="w-20 h-4 bg-[#E4E4E7] rounded shrink-0" />
                <div className="h-4 bg-[#E4E4E7] rounded w-80" />
              </div>
              <div className="w-full h-px bg-[#E4E4E7]" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 mt-12">
          <div className="w-full flex justify-between items-center">
            <div className="h-6 w-36 bg-[#E4E4E7] rounded-md" />
            <div className="h-5 w-20 bg-[#E4E4E7] rounded-md" />
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg bg-[#F4F4F5] overflow-hidden"
              >
                <div className="w-full aspect-2/3 bg-[#E4E4E7]" />

                <div className="flex flex-col p-3 gap-2">
                  <div className="h-3.5 bg-[#E4E4E7] rounded w-16" />
                  <div className="h-4 bg-[#E4E4E7] rounded w-full" />
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
