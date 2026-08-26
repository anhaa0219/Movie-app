"use client";

import { ChevronLeft } from "@/app/icons/ChevronLeft";
import { ChevronRight } from "@/app/icons/ChevronRight";
import { Footer } from "../../features/Footer";
import { Header } from "../../features/Header";
import { StarIcon2 } from "../../icons/StarIcon2";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ThreeDots } from "@/app/icons/ThreeDots";
import { MorelikethisSkeleton } from "./MorelikethisSkeleton";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RlYjljY2JlMzU2YjJjOTMxZjRjZWI1OTA4YmQ4NSIsIm5iZiI6MTc4NjU4NTAxNC41MDcsInN1YiI6IjZhN2QxZmI2OGFhNWQzN2ZiNTQ0NTkzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wd9oLUNGObBB7hSw6-cdoMQ2J35kHO-koQ8BCdqOOwQ";

export default function MoreLikeThis() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [similarData, setSimilarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const param = useParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("moviez:watchlist");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setWatchList(parsed);
        }
      }
    } catch (error) {
      console.error("Error reading localStorage:", error);
    }
  }, []);

  const isSaved = (id) => {
    return watchList.some((item) => item.id === id);
  };

  const toggle = (movie) => {
    setWatchList((prevList) => {
      const exists = prevList.some((item) => item.id === movie.id);

      const nextList = exists
        ? prevList.filter((item) => item.id !== movie.id)
        : [{ ...movie, addedAt: Date.now() }, ...prevList];

      localStorage.setItem("moviez:watchlist", JSON.stringify(nextList));

      return nextList;
    });
  };

  const watchListSave = (event, movie) => {
    event.preventDefault();
    event.stopPropagation();
    toggle(movie);
  };

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${param.id}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${api_token}`,
        },
      },
    );

    return await response.json();
  };

  const getDataSimilar = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${param.id}/similar?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${api_token}`,
        },
      },
    );

    return await response.json();
  };

  useEffect(() => {
    if (!param?.id) return;

    setLoading(true);

    Promise.all([getData(), getDataSimilar()])
      .then(([movieDetails, similarJson]) => {
        setData(movieDetails);
        setSimilarData(similarJson.results || []);
        setTotalPages(Math.min(similarJson.total_pages || 1, 500));
      })
      .catch(() => setErrorMessage("Movie API error"))
      .finally(() => setLoading(false));
  }, [param?.id, page]);

  const jumpToDetail = (id) => {
    router.push(`/detail/${id}`);
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (loading) {
    return <MorelikethisSkeleton />;
  }

  if (errorMessage || !data) {
    return (
      <div className="p-8 md:p-12 text-center text-red-500 min-h-[50vh] flex items-center justify-center dark:bg-[#09090B]">
        {errorMessage || "Movie not found"}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center min-h-screen overflow-x-hidden dark:bg-[#09090B]">
      <Header />

      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col flex-1">
        <div className="w-full flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-10 mb-16">
          <div className="w-full flex justify-between items-center">
            <h1 className="font-inter font-semibold text-xl sm:text-2xl text-[#09090B] dark:text-white">
              More like this
            </h1>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {similarData.slice(0, 10).map((movie) => (
              <div
                key={movie.id}
                onClick={() => jumpToDetail(movie.id)}
                className="w-full flex flex-col rounded-lg bg-[#F4F4F5] dark:bg-[#18181B] overflow-hidden hover:shadow-md dark:hover:shadow-black/40 transition-shadow cursor-pointer"
              >
                <div className="relative w-full aspect-2/3 shrink-0 bg-zinc-200 dark:bg-zinc-800">
                  <img
                    alt={movie.title || "Movie poster"}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/placeholder.png"
                    }
                    className="object-cover w-full h-full"
                  />

                  <button
                    type="button"
                    className="w-7 h-7 rounded-full bg-black/60 border border-white flex items-center justify-center absolute top-2.5 right-2.5 cursor-pointer z-10"
                    onClick={(e) => watchListSave(e, movie)}
                  >
                    {isSaved(movie.id) ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="flex flex-col p-2.5 sm:p-3 gap-1 flex-1 justify-between">
                  <div className="flex items-center gap-1">
                    <StarIcon2 />

                    <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B] dark:text-white">
                      {movie.vote_average
                        ? movie.vote_average.toFixed(1)
                        : "N/A"}

                      <span className="text-[#71717A] dark:text-zinc-400 text-xs">
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

          <div className="w-full flex justify-end mt-4">
            <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
              <button
                onClick={handlePrev}
                disabled={page === 1}
                className={`h-9 sm:h-10 flex items-center justify-center gap-1 border border-[#E4E4E7] dark:border-zinc-700 rounded-md py-1 px-2.5 sm:px-3 text-xs sm:text-sm ${
                  page === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <ChevronLeft />

                <span className="font-inter font-medium text-[#09090B] dark:text-white">
                  Previous
                </span>
              </button>

              <div className="flex items-center gap-1">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center bg-[#18181B] dark:bg-white text-white dark:text-[#09090B] text-xs sm:text-sm font-medium">
                  {page}
                </button>

                {page + 1 < totalPages && (
                  <button
                    onClick={() => setPage(page + 1)}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[#09090B] dark:text-white text-xs sm:text-sm cursor-pointer"
                  >
                    {page + 1}
                  </button>
                )}

                {page + 2 < totalPages && (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex justify-center items-center">
                    <ThreeDots />
                  </div>
                )}

                {page < totalPages && (
                  <button
                    onClick={() => setPage(totalPages)}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[#09090B] dark:text-white text-xs sm:text-sm cursor-pointer"
                  >
                    {totalPages}
                  </button>
                )}
              </div>

              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className={`h-9 sm:h-10 flex items-center justify-center gap-1 border border-[#E4E4E7] dark:border-zinc-700 rounded-md py-1 px-2.5 sm:px-3 text-xs sm:text-sm ${
                  page === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <span className="font-inter font-medium text-[#09090B] dark:text-white">
                  Next
                </span>

                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
