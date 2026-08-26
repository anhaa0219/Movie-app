"use client";
import { useState, useEffect } from "react";
import { StarIcon2 } from "../icons/StarIcon2";
import { TopRatedLoading } from "../features/TopRatedLoading";
import { Header } from "../features/Header";
import { Footer } from "../features/Footer";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "../icons/ChevronLeft";
import { ChevronRight } from "../icons/ChevronRight";
import { ThreeDots } from "../icons/ThreeDots";

// 1. Fixed the corrupted token and added environment variable fallback
const TMDB_API_TOKEN =
  process.env.NEXT_PUBLIC_TMDB_TOKEN ||
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RlYjljY2JlMzU2YjJjOTMxZjRjZWI1OTA4YmQ4NSIsIm5iZiI6MTc4NjU4NTAxNC41MDcsInN1YiI6IjZhN2QxZmI2OGFhNWQzN2ZiNTQ0NTkzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wd9oLUNGObBB7hSw6-cdoMQ2J35kHO-koQ8BCdqOOwQ";

export default function TopRatedPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessege, SetErrorMessege] = useState("");
  const [watchList, setWatchList] = useState([]);
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
      {
        headers: {
          accept: "application/json", // 2. Added required headers
          Authorization: `Bearer ${TMDB_API_TOKEN}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData;
  };

  useEffect(() => {
    setLoading(true);
    SetErrorMessege("");

    getData()
      .then((jsonData) => {
        setData(jsonData.results || []);
        setTotalPages(Math.min(jsonData.total_pages || 1, 500));
      })
      .catch((err) => {
        console.error(err);
        SetErrorMessege("Movie api error. Failed to load top rated movies.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

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

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden bg-white dark:bg-[#09090B] min-h-screen">
      <Header />

      {/* 3. Fixed typo 'min-w7xl' to 'min-w-7xl' if you meant that, or just removed it as max-w-7xl is sufficient */}
      <div className="max-w-7xl w-full flex flex-col px-4 md:px-8 gap-8 mt-13 mb-19 flex-1">
        {loading && (
          <div>
            <TopRatedLoading />
          </div>
        )}

        {!loading && errorMessege && (
          <div className="text-red-500 dark:text-red-400 p-4 bg-red-50 dark:bg-red-900/20 rounded-md text-center">
            {errorMessege}
          </div>
        )}

        {!loading && !errorMessege && (
          <div className="w-full flex flex-col gap-8">
            <div className="w-full h-9 flex justify-between items-center mt-6">
              <p className="font-inter font-semibold text-[24px] text-[#09090B] dark:text-white leading-8">
                Top Rated
              </p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {data.slice(0, 10).map((object) => (
                <div
                  key={object.id}
                  className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] dark:bg-[#18181B] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => JumpToDetail(object.id)}
                >
                  <div className="relative w-full aspect-[2/3] bg-zinc-200 dark:bg-zinc-800">
                    {/* 4. Optimized image loading to w500 and added placeholder fallback */}
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

                  <div className="w-full flex flex-col py-2 px-2 flex-1">
                    <div className="w-full flex gap-1 items-center mb-1">
                      <StarIcon2 />
                      <p className="flex font-inter font-medium text-[14px] text-[#09090B] dark:text-white leading-5 items-center">
                        {object.vote_average
                          ? object.vote_average.toFixed(1)
                          : "N/A"}
                        <span className="font-inter font-normal text-[14px] text-[#71717A] dark:text-[#A1A1AA] ml-1">
                          /10
                        </span>
                      </p>
                    </div>

                    <div className="w-full flex gap-2.5">
                      <p className="font-inter font-normal text-[18px] text-[#09090B] dark:text-white leading-tight line-clamp-2">
                        {object.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="w-full h-10 flex justify-end mt-4">
          <div className="h-10 flex items-center gap-1">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className={`h-10 flex items-center justify-center border border-[#E4E4E7] dark:border-[#3F3F46] border-solid rounded-md py-1 px-2 ${
                page === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              <ChevronLeft />
              <p className="font-inter font-medium text-[14px] text-[#09090B] dark:text-white leading-5">
                Previous
              </p>
            </button>

            <div className="h-10 flex items-center gap-1">
              <button className="w-10 h-10 rounded-md flex items-center justify-center bg-[#18181B] dark:bg-white text-white dark:text-[#18181B]">
                {page}
              </button>

              {page + 1 < totalPages && (
                <button
                  onClick={() => setPage(page + 1)}
                  className="w-10 h-10 rounded-md flex items-center justify-center cursor-pointer text-[#09090B] dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {page + 1}
                </button>
              )}

              {page + 2 < totalPages && (
                <button className="w-10 h-10 rounded-md flex justify-center items-center text-[#09090B] dark:text-white">
                  <ThreeDots />
                </button>
              )}

              {page < totalPages && (
                <button
                  onClick={() => setPage(totalPages)}
                  className="w-10 h-10 rounded-md flex items-center justify-center cursor-pointer text-[#09090B] dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {totalPages}
                </button>
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className={`h-10 flex items-center justify-center border-[#E4E4E7] dark:border-[#3F3F46] border-solid border rounded-md py-1 px-2 ${
                page === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              <p className="font-inter font-medium text-[14px] text-[#09090B] dark:text-white leading-5">
                Next
              </p>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
