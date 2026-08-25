"use client";
import { StarIcon2 } from "../icons/StarIcon2";
import { useRouter } from "next/navigation";
import { useWatchlist } from "@/app/context/WatchListProvider";

export const Watchlist = () => {
  const router = useRouter();
  const { watchList, toggle, isSaved } = useWatchlist();

  const JumpToDetail = (id) => {
    router.push(`/detail/${id}`);
  };

  const watchListSave = (event, movie) => {
    event.preventDefault();
    event.stopPropagation();
    toggle(movie);
  };

  return (
    <section className="w-full flex flex-col px-4 sm:px-6 lg:px-8 gap-4 sm:gap-6 py-8">
      <div className="w-full flex justify-between items-center">
        <h2 className="font-inter font-semibold text-xl sm:text-2xl text-[#09090B] leading-8">
          Watchlist ({watchList.length})
        </h2>
      </div>

      {watchList.length === 0 ? (
        <div className="p-12 text-center text-zinc-500 font-inter text-sm sm:text-base">
          Your watchlist is empty. Add some movies to watch them later!
        </div>
      ) : (
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {watchList.map((object) => (
            <div
              key={object.id}
              className="w-full flex flex-col rounded-lg bg-[#F4F4F5] overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => JumpToDetail(object.id)}
            >
              <div className="relative w-full aspect-2/3 bg-zinc-200 shrink-0">
                <img
                  alt={object.title || "Movie poster"}
                  src={
                    object.poster_path
                      ? `https://image.tmdb.org/t/p/w500${object.poster_path}`
                      : "/placeholder.png"
                  }
                  className="object-cover w-full h-full relative"
                />
                <button
                  type="button"
                  className="w-7 h-7 rounded-full bg-black/60 border border-white flex items-center justify-center absolute top-2.5 right-2.5 cursor-pointer z-10"
                  onClick={(e) => watchListSave(e, object)}
                >
                  {isSaved(object.id) ? "❤️" : "🤍"}
                </button>
              </div>
              <div className="flex flex-col p-2.5 sm:p-3 gap-1">
                <div className="flex items-center gap-1">
                  <StarIcon2 />
                  <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B]">
                    {object.vote_average
                      ? object.vote_average.toFixed(1)
                      : "N/A"}
                    <span className="text-[#71717A] text-xs">/10</span>
                  </p>
                </div>
                <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B] line-clamp-2 leading-snug">
                  {object.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
