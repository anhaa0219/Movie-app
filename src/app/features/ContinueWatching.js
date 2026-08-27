"use client";
import { useState, useEffect } from "react";
import { StarIcon2 } from "../icons/StarIcon2";
import { PopularLoading } from "./PopularLoading";
import { useRouter } from "next/navigation";

export const ContinueWatching = () => {
  const [history, setHistory] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const loadData = () => {
    try {
      const savedHistory = localStorage.getItem("moviez:history");
      if (savedHistory) {
        const parsedHistory = JSON.parse(savedHistory);
        if (Array.isArray(parsedHistory)) {
          setHistory(parsedHistory);
        }
      } else {
        setHistory([]);
      }

      const savedWatchlist = localStorage.getItem("moviez:watchlist");
      if (savedWatchlist) {
        const parsedWatchlist = JSON.parse(savedWatchlist);
        if (Array.isArray(parsedWatchlist)) {
          setWatchList(parsedWatchlist);
        }
      }
    } catch (error) {
      console.error("Error reading localStorage:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    const handleStorageChange = () => loadData();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleClearHistory = () => {
    try {
      localStorage.removeItem("moviez:history");
      setHistory([]);
    } catch (error) {
      console.error("Error clearing watch history:", error);
    }
  };

  const jumpToDetail = (id) => {
    router.push(`/detail/${id}`);
  };

  const isSavedInWatchlist = (id) => {
    return watchList.some((item) => item.id === id);
  };

  const toggleWatchlist = (movie) => {
    setWatchList((prevList) => {
      const exists = prevList.some((item) => item.id === movie.id);
      const nextList = exists
        ? prevList.filter((item) => item.id !== movie.id)
        : [{ ...movie, addedAt: Date.now() }, ...prevList];

      localStorage.setItem("moviez:watchlist", JSON.stringify(nextList));
      return nextList;
    });
  };

  const handleWatchListClick = (event, movie) => {
    event.preventDefault();
    event.stopPropagation();
    toggleWatchlist(movie);
  };

  if (loading) {
    return (
      <section className="w-full flex flex-col px-4 sm:px-6 lg:px-8 gap-4 sm:gap-6">
        <PopularLoading />
      </section>
    );
  }

  if (history.length === 0) {
    return null;
  }

  return (
    <section className="w-full flex flex-col px-4 sm:px-6 lg:px-8 gap-4 sm:gap-6">
      <div className="w-full flex flex-col gap-4 sm:gap-6">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-inter font-semibold text-xl sm:text-2xl text-[#09090B] dark:text-white leading-8">
            Continue Watching
          </h2>
          <button
            type="button"
            onClick={handleClearHistory}
            className="font-inter font-medium text-xs sm:text-sm text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/40 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
          >
            Clear all
          </button>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {history.slice(0, 5).map((object) => (
            <div
              key={object.id}
              className="w-full flex flex-col rounded-lg bg-[#F4F4F5] dark:bg-zinc-900 overflow-hidden hover:shadow-md dark:hover:shadow-black/30 transition-shadow cursor-pointer"
              onClick={() => jumpToDetail(object.id)}
            >
              <div className="relative w-full aspect-[2/3] bg-zinc-200 dark:bg-zinc-800 shrink-0">
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
                  aria-label={
                    isSavedInWatchlist(object.id)
                      ? "Remove from watchlist"
                      : "Add to watchlist"
                  }
                  className="w-7 h-7 rounded-full bg-black/60 border border-white dark:border-zinc-500 flex items-center justify-center absolute top-2.5 right-2.5 cursor-pointer z-10 hover:bg-black/80 transition-colors"
                  onClick={(e) => handleWatchListClick(e, object)}
                >
                  {isSavedInWatchlist(object.id) ? "❤️" : "🤍"}
                </button>
              </div>

              <div className="flex flex-col p-2.5 sm:p-3 gap-1 bg-[#F4F4F5] dark:bg-zinc-900">
                <div className="flex items-center gap-1">
                  <StarIcon2 />
                  <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B] dark:text-zinc-100">
                    {object.vote_average
                      ? Number(object.vote_average).toFixed(1)
                      : "N/A"}
                    <span className="text-[#71717A] dark:text-zinc-400 text-xs">
                      /10
                    </span>
                  </p>
                </div>

                <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B] dark:text-zinc-100 line-clamp-2 leading-snug">
                  {object.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
