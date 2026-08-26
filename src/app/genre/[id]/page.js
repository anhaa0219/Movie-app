"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/app/features/Footer";
import { Header } from "@/app/features/Header";
import { StarIcon2 } from "@/app/icons/StarIcon2";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft } from "@/app/icons/ChevronLeft";
import { ChevronRight } from "@/app/icons/ChevronRight";
import { ThreeDots } from "@/app/icons/ThreeDots";
import { XIcon } from "@/app/icons/XIcon";
import { GenreSkeleton } from "./Genreskeleton";

// 1. Fixed the corrupted token and added the environment variable fallback
const TMDB_API_TOKEN =
  process.env.NEXT_PUBLIC_TMDB_TOKEN ||
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RlYjljY2JlMzU2YjJjOTMxZjRjZWI1OTA4YmQ4NSIsIm5iZiI6MTc4NjU4NTAxNC41MDcsInN1YiI6IjZhN2QxZmI2OGFhNWQzN2ZiNTQ0NTkzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wd9oLUNGObBB7hSw6-cdoMQ2J35kHO-koQ8BCdqOOwQ";

export default function GenrePage() {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessege, SetErrorMessege] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const [watchList, setWatchList] = useState([]);

  const router = useRouter();
  const param = useParams();

  const selectedGenreIds = param?.id
    ? decodeURIComponent(param.id).split(",").filter(Boolean)
    : [];

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
        : [
            {
              ...movie,
              addedAt: Date.now(),
            },
            ...prevList,
          ];

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
      "https://api.themoviedb.org/3/genre/movie/list?language=en-US",
      {
        headers: {
          accept: "application/json", // 2. Added required accept header
          Authorization: `Bearer ${TMDB_API_TOKEN}`,
        },
      },
    );

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error("Genre Fetch Error:", response.status, errData);
      throw new Error("Failed to fetch genres");
    }

    const jsonData = await response.json();
    return jsonData.genres || [];
  };

  const getTempData = async () => {
    const genreParam =
      selectedGenreIds.length > 0
        ? `&with_genres=${selectedGenreIds.join(",")}`
        : "";

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en-US${genreParam}&page=${page}`,
      {
        headers: {
          accept: "application/json", // 2. Added required accept header
          Authorization: `Bearer ${TMDB_API_TOKEN}`,
        },
      },
    );

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error("Movies Fetch Error:", response.status, errData);
      throw new Error("Failed to fetch movies");
    }

    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
        SetErrorMessege("Failed to load genres. Please try again.");
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    SetErrorMessege(""); // Reset error state on new fetch

    getTempData()
      .then((jsonData) => {
        setTempData(jsonData.results || []);
        setTotalPages(Math.min(jsonData.total_pages || 1, 500));
        setTotalResults(jsonData.total_results || 0);
      })
      .catch((err) => {
        console.error(err);
        SetErrorMessege("Failed to load movies. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [param?.id, page]); // 3. Included missing dependencies for useEffect

  const JumpToDetail = (id) => {
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

  const handleGenreClick = (genreId) => {
    setPage(1);
    const idStr = String(genreId);
    let updatedIds = [];

    if (selectedGenreIds.includes(idStr)) {
      updatedIds = selectedGenreIds.filter((id) => id !== idStr);
    } else {
      updatedIds = [...selectedGenreIds, idStr];
    }

    if (updatedIds.length === 0) {
      router.push("/genre");
    } else {
      router.push(`/genre/${updatedIds.join(",")}`);
    }
  };

  const currentGenreNames =
    data
      ?.filter((g) => selectedGenreIds.includes(String(g.id)))
      ?.map((g) => g.name)
      ?.join(", ") || "All";

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      <div className="w-full max-w-7xl flex flex-col px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8 mt-6 sm:mt-10 mb-16 flex-1">
        {loading && <GenreSkeleton />}

        {!loading && errorMessege && (
          <div className="p-8 text-center text-red-500 font-medium bg-red-50 dark:bg-red-950/20 rounded-lg">
            {errorMessege}
          </div>
        )}

        {!loading && !errorMessege && (
          <div className="w-full flex flex-col gap-6 sm:gap-8">
            <h1 className="w-full font-inter font-semibold text-2xl sm:text-3xl text-[#09090B] dark:text-white">
              Search filter
            </h1>

            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-full md:w-80 lg:w-96 flex flex-col gap-4 sm:gap-5 shrink-0">
                <div className="flex flex-col gap-1">
                  <p className="font-inter font-semibold text-[#09090B] dark:text-white text-lg sm:text-xl">
                    Genres
                  </p>
                  <p className="font-inter font-normal text-[#71717A] dark:text-zinc-400 text-xs sm:text-sm">
                    See lists of movies by genre
                  </p>
                </div>

                <div className="w-full flex flex-wrap gap-2 sm:gap-2.5 max-h-48 md:max-h-60 overflow-y-auto">
                  {data?.map((obj) => {
                    const isSelected = selectedGenreIds.includes(
                      String(obj.id),
                    );

                    return (
                      <div
                        key={obj.id}
                        onClick={() => handleGenreClick(obj.id)}
                        className={`flex items-center gap-1.5 rounded-full border py-1 px-2.5 sm:px-3 transition-colors cursor-pointer text-xs sm:text-sm ${
                          isSelected
                            ? "bg-[#18181B] dark:bg-white text-white dark:text-zinc-950 border-[#18181B] dark:border-white"
                            : "border-[#E4E4E7] dark:border-zinc-700 text-[#09090B] dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        }`}
                      >
                        <p className="font-inter font-semibold leading-4">
                          {obj.name}
                        </p>
                        {isSelected ? <XIcon /> : <ChevronRight />}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="hidden md:block w-px self-stretch bg-[#E4E4E7] dark:bg-zinc-800" />

              <div className="flex-1 w-full flex flex-col gap-6 sm:gap-8">
                <p className="font-inter font-semibold text-[#09090B] dark:text-white text-base sm:text-lg">
                  {totalResults} titles in &ldquo;{currentGenreNames}&rdquo;
                </p>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  {tempData.slice(0, 12).map((object) => (
                    <div
                      key={object.id}
                      className="w-full flex flex-col rounded-lg bg-[#F4F4F5] dark:bg-zinc-900 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => JumpToDetail(object.id)}
                    >
                      <div className="relative w-full aspect-2/3 bg-zinc-200 dark:bg-zinc-800 shrink-0">
                        <img
                          alt={object.title || "Movie poster"}
                          src={
                            object.poster_path
                              ? `https://image.tmdb.org/t/p/w500${object.poster_path}`
                              : "/placeholder.png"
                          }
                          className="object-cover w-full h-full"
                        />
                        <button
                          type="button"
                          className="w-7 h-7 rounded-full bg-black/60 border border-white flex items-center justify-center absolute top-2.5 right-2.5 cursor-pointer z-10"
                          onClick={(e) => watchListSave(e, object)}
                        >
                          {isSaved(object.id) ? "❤️" : "🤍"}
                        </button>
                      </div>

                      <div className="w-full p-2.5 sm:p-3 flex flex-col gap-1 justify-between flex-1">
                        <div className="flex items-center gap-1">
                          <StarIcon2 />
                          <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B] dark:text-white">
                            {object.vote_average
                              ? object.vote_average.toFixed(1)
                              : "N/A"}
                            <span className="text-[#71717A] dark:text-zinc-400 text-xs">
                              /10
                            </span>
                          </p>
                        </div>
                        <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B] dark:text-white line-clamp-2 leading-snug">
                          {object.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="w-full flex justify-end">
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
                      <span className="font-inter font-medium text-[#09090B] dark:text-zinc-200">
                        Previous
                      </span>
                    </button>

                    <div className="flex items-center gap-1">
                      <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center bg-[#18181B] dark:bg-white text-white dark:text-zinc-950 text-xs sm:text-sm font-medium">
                        {page}
                      </button>

                      {page + 1 < totalPages && (
                        <button
                          onClick={() => setPage(page + 1)}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[#09090B] dark:text-zinc-200 text-xs sm:text-sm cursor-pointer"
                        >
                          {page + 1}
                        </button>
                      )}

                      {page + 2 < totalPages && (
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex justify-center items-center text-[#09090B] dark:text-zinc-200">
                          <ThreeDots />
                        </div>
                      )}

                      {page < totalPages && (
                        <button
                          onClick={() => setPage(totalPages)}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[#09090B] dark:text-zinc-200 text-xs sm:text-sm cursor-pointer"
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
                      <span className="font-inter font-medium text-[#09090B] dark:text-zinc-200">
                        Next
                      </span>
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
