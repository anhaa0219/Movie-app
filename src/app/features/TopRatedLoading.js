export const TopRatedLoading = () => {
  return (
    <div className="w-full flex flex-col gap-8 animate-pulse">
      <div className="w-full h-9 flex justify-between items-center">
        <div className="h-8 w-32 bg-zinc-200 dark:bg-zinc-700 rounded-md" />
        <div className="w-28 h-9 bg-zinc-200 dark:bg-zinc-700 rounded-md" />
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className="w-57.5 h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] dark:bg-zinc-900 overflow-hidden shrink-0 border border-transparent dark:border-zinc-800"
          >
            <div className="w-full h-85px bg-zinc-200 dark:bg-zinc-800 shrink-0" />

            <div className="w-full h-23.75 flex flex-col py-2 px-2 gap-2 justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-600" />

                <div className="h-4 w-12 bg-zinc-300 dark:bg-zinc-600 rounded" />
              </div>

              <div className="flex flex-col gap-1.5 pb-1">
                <div className="h-4 w-full bg-zinc-300 dark:bg-zinc-600 rounded" />

                <div className="h-4 w-3/4 bg-zinc-300 dark:bg-zinc-600 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
