"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "../icons/ArrowRight";
import { useRouter } from "next/navigation";
import { Header } from "../features/Header";
import { Footer } from "../features/Footer";
import { StarIcon2 } from "../icons/StarIcon2";
import { WatchlistLoading } from "./WatchlistLoading";

export default function Watchlist() {
  const router = useRouter();

  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("moviez:watchlist");

    if (!saved) {
      setWatchlist([]);
      setLoading(false);
      return;
    }

    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        setWatchlist(parsed);
      } else {
        setWatchlist([]);
      }
    } catch (error) {
      console.error("Failed to load watchlist:", error);
      setWatchlist([]);
    }

    setLoading(false);
  }, []);

  const JumpToDetail = (id) => {
    router.push(`/detail/${id}`);
  };

  const watchListSave = (e, movie) => {
    e.preventDefault();
    e.stopPropagation();

    const saved = localStorage.getItem("moviez:watchlist");
    let currentWatchlist = [];

    try {
      currentWatchlist = saved ? JSON.parse(saved) : [];
    } catch (error) {
      currentWatchlist = [];
    }

    const alreadySaved = currentWatchlist.some((item) => item.id === movie.id);
    let updatedWatchlist;

    if (alreadySaved) {
      updatedWatchlist = currentWatchlist.filter(
        (item) => item.id !== movie.id,
      );
    } else {
      updatedWatchlist = [
        { ...movie, addedAt: Date.now() },
        ...currentWatchlist,
      ];
    }

    localStorage.setItem("moviez:watchlist", JSON.stringify(updatedWatchlist));
    setWatchlist(updatedWatchlist);
  };

  const jumpToHome = () => {
    router.push("/");
  };

  const isSaved = (id) => {
    return watchlist.some((movie) => movie.id === id);
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen overflow-x-hidden bg-white dark:bg-[#09090B] transition-colors">
      <Header />

      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col flex-1 gap-4 sm:gap-6 mt-6 sm:mt-10 mb-12 sm:mb-16">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-inter font-semibold text-xl sm:text-2xl text-[#09090B] dark:text-white leading-8">
            Watchlist
          </h1>

          <button
            onClick={jumpToHome}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <span className="font-inter font-medium text-xs sm:text-sm text-[#09090B] dark:text-white">
              Discover
            </span>
            <ArrowRight />
          </button>
        </div>

        {loading ? (
          <WatchlistLoading />
        ) : watchlist.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-16 sm:py-24 px-4 text-center gap-3 sm:gap-4">
            <span className="text-3xl sm:text-4xl text-[#71717A] dark:text-[#A1A1AA] select-none">
              ♡
            </span>

            <p className="font-inter text-lg sm:text-xl text-[#09090B] dark:text-white font-bold">
              Nothing saved yet
            </p>

            <p className="font-inter text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] max-w-xs">
              Tap the heart icon on any movie poster to add it to your
              watchlist.
            </p>

            <button
              className="mt-2 rounded-full bg-[#6C5CE7] hover:bg-[#5B4BD5] px-6 py-2.5 font-inter font-medium text-sm sm:text-base text-white transition-colors cursor-pointer shadow-sm"
              onClick={jumpToHome}
            >
              Browse movies
            </button>
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {watchlist.map((movie) => (
              <div
                key={movie.id}
                className="w-full flex flex-col rounded-lg bg-[#F4F4F5] dark:bg-[#18181B] overflow-hidden hover:shadow-md dark:hover:shadow-black/40 transition-all cursor-pointer border border-transparent dark:border-zinc-800/60"
                onClick={() => JumpToDetail(movie.id)}
              >
                <div className="relative w-full aspect-[2/3] bg-zinc-200 dark:bg-zinc-800 shrink-0">
                  <img
                    alt={movie.title || "Movie poster"}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/placeholder.png"
                    }
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />

                  <button
                    type="button"
                    aria-label={
                      isSaved(movie.id)
                        ? "Remove from watchlist"
                        : "Add to watchlist"
                    }
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 border border-white/80 dark:border-zinc-500 flex items-center justify-center absolute top-2 right-2 sm:top-2.5 sm:right-2.5 cursor-pointer z-10 hover:bg-black/80 transition-colors"
                    onClick={(e) => watchListSave(e, movie)}
                  >
                    <span className="text-xs sm:text-sm leading-none">
                      {isSaved(movie.id) ? "❤️" : "🤍"}
                    </span>
                  </button>
                </div>

                <div className="flex flex-col p-2.5 sm:p-3 gap-1 flex-1 justify-between">
                  <div className="flex items-center gap-1">
                    <StarIcon2 />
                    <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B] dark:text-white">
                      {movie.vote_average
                        ? movie.vote_average.toFixed(1)
                        : "N/A"}
                      <span className="text-[#71717A] dark:text-[#A1A1AA] text-xs">
                        /10
                      </span>
                    </p>
                  </div>

                  <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B] dark:text-white line-clamp-2 leading-snug">
                    {movie.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
