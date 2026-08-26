"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "../icons/ArrowRight";
import { StarIcon2 } from "../icons/StarIcon2";
import { PopularLoading } from "./PopularLoading";
import { useRouter } from "next/navigation";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RlYjljY2JlMzU2YjJjOTMxZjRjZWI1OTA4YmQ4NSIsIm5iZiI6MTc4NjU4NTAxNC41MDciLCJzdWIiOiI2YTdkMWZiNjhhNWQzN2ZiNTQ0NTkzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wd9oLUNGObBB7hSw6-cdoMQ2J35kHO-koQ8BCdqOOwQ";

export const Popular = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessege, SetErrorMessege] = useState("");
  const [watchList, setWatchList] = useState([]);
  const router = useRouter();

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

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      { headers: { Authorization: `Bearer ${api_token}` } },
    );

    const jsonData = await response.json();

    return jsonData.results || [];
  };

  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch(() => SetErrorMessege("Movie api error"))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const JumpToPopular = () => {
    router.push("/popular");
  };

  const JumpToDetail = (id) => {
    router.push(`/detail/${id}`);
  };

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

  return (
    <section className="w-full flex flex-col px-4 sm:px-6 lg:px-8 gap-4 sm:gap-6">
      {loading && <PopularLoading />}

      {!loading && errorMessege && (
        <div className="p-8 text-center text-red-500 dark:text-red-400">
          {errorMessege}
        </div>
      )}

      {!loading && !errorMessege && (
        <div className="w-full flex flex-col gap-4 sm:gap-6">
          <div className="w-full flex justify-between items-center">
            <h2 className="font-inter font-semibold text-xl sm:text-2xl text-[#09090B] dark:text-white leading-8">
              Popular
            </h2>

            <button
              className="flex items-center gap-1.5 sm:gap-2 px-2 py-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
              onClick={JumpToPopular}
            >
              <span className="font-inter font-medium text-xs sm:text-sm text-[#09090B] dark:text-zinc-200">
                See more
              </span>

              <span className="text-[#09090B] dark:text-zinc-200">
                <ArrowRight />
              </span>
            </button>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {data.slice(0, 10).map((object) => (
              <div
                key={object.id}
                className="w-full flex flex-col rounded-lg bg-[#F4F4F5] dark:bg-zinc-900 overflow-hidden hover:shadow-md dark:hover:shadow-black/30 transition-shadow cursor-pointer"
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
                    className="object-cover w-full h-full relative"
                  />

                  <button
                    type="button"
                    className="w-7 h-7 rounded-full bg-black/60 border border-white dark:border-zinc-500 flex items-center justify-center absolute top-2.5 right-2.5 cursor-pointer z-10 hover:bg-black/80 transition-colors"
                    onClick={(e) => watchListSave(e, object)}
                  >
                    {isSaved(object.id) ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="flex flex-col p-2.5 sm:p-3 gap-1 bg-[#F4F4F5] dark:bg-zinc-900">
                  <div className="flex items-center gap-1">
                    <StarIcon2 />

                    <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B] dark:text-zinc-100">
                      {object.vote_average
                        ? object.vote_average.toFixed(1)
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
      )}
    </section>
  );
};
