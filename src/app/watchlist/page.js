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
      updatedWatchlist = [...currentWatchlist, movie];
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
    <div className="w-full h-full flex flex-col items-center min-h-screen overflow-x-hidden bg-white dark:bg-[#09090B]">
      <Header />

      <div className="w-7xl flex flex-1 flex-col gap-4 sm:gap-6 mt-13">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-inter font-semibold text-xl sm:text-2xl text-[#09090B] dark:text-white leading-8">
            Watchlist
          </h2>

          <button className="flex items-center gap-1.5 sm:gap-2 px-2 py-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
            <span className="font-inter font-medium text-xs sm:text-sm text-[#09090B] dark:text-white">
              See more
            </span>

            <ArrowRight />
          </button>
        </div>

        {loading ? (
          <WatchlistLoading />
        ) : watchlist.length === 0 ? (
          <div className="min-w-[320px] flex flex-col items-center justify-center py-20 gap-4">
            <p className="font-inter text-sm sm:text-base text-[#71717A] dark:text-[#A1A1AA]">
              ♡
            </p>

            <p className="font-inter text-[18px] text-[#09090B] dark:text-white leading-8 font-bold">
              Nothing saved yet
            </p>

            <p className="font-inter text-[#9A9AA6] dark:text-[#A1A1AA] font-normal text-[14px]">
              Tap the heart on any poster
            </p>

            <button
              className="rounded-full bg-[#6C5CE7] h-10 flex justify-between items-center py-0.5 px-2 font-inter font-semibold text-[18px] text-[#ffffff] cursor-pointer hover:bg-[#5B4BD5] transition-colors"
              onClick={jumpToHome}
            >
              Browse movies
            </button>
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {watchlist.slice(0, 10).map((movie) => (
              <div
                key={movie.id}
                className="w-full flex flex-col rounded-lg bg-[#F4F4F5] dark:bg-[#18181B] overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => JumpToDetail(movie.id)}
              >
                <div className="relative w-full aspect-2/3 bg-zinc-200 dark:bg-zinc-800 shrink-0">
                  <img
                    alt={movie.title || "Movie poster"}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/placeholder.png"
                    }
                    className="object-cover w-full h-full relative"
                  />

                  <button
                    type="button"
                    className="w-7 h-7 rounded-full bg-black/60 border border-white flex items-center justify-center absolute top-2.5 right-2.5 cursor-pointer z-10"
                    onClick={(e) => watchListSave(e, movie)}
                  >
                    {isSaved(movie.id) ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="flex flex-col p-2.5 sm:p-3 gap-1">
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
      </div>

      <Footer />
    </div>
  );
}
