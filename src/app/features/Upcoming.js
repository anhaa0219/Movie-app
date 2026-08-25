"use client";
import { UpcomingLoading } from "./UpcomingLoading";
import { ArrowRight } from "../icons/ArrowRight";
import { StarIcon2 } from "../icons/StarIcon2";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RlYjljY2JlMzU2YjJjOTMxZjRjZWI1OTA4YmQ4NSIsIm5iZiI6MTc4NjU4NTAxNC41MDcsInN1YiI6IjZhN2QxZmI2OGFhNWQzN2ZiNTQ0NTkzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wd9oLUNGObBB7hSw6-cdoMQ2J35kHO-koQ8BCdqOOwQ";

export const Upcoming = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessege, SetErrorMessege] = useState("");
  const router = useRouter();
  const [watchList, setWatchList] = useState([]);
  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
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

  const JumpToUpcoming = () => {
    router.push("/upcoming");
  };

  const JumpToDetail = (id) => {
    router.push(`/detail/${id}`);
  };

  const isSaved = (id) => {
    return watchList.some((item) => item.id === id);
  };

  const toggle = (movie) => {
    setWatchList((prevList) => {
      if (prevList.some((item) => item.id === movie.id)) {
        return prevList.filter((item) => item.id !== movie.id);
      }
      return [{ ...movie, addedAt: Date.now() }, ...prevList];
    });
  };

  const watchListSave = (event, movie) => {
    event.preventDefault();
    event.stopPropagation();
    toggle(movie);
  };

  useEffect(() => {
    const saved = localStorage.getItem("moviez:watchlist");
    if (saved) {
      try {
        setWatchList(JSON.parse(saved));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("moviez:watchlist", JSON.stringify(watchList));
  }, [watchList]);
  return (
    <section className="w-full flex flex-col px-4 sm:px-6 lg:px-8 gap-4 sm:gap-6">
      {loading && <UpcomingLoading />}
      {!loading && errorMessege && (
        <div className="p-8 text-center text-red-500">{errorMessege}</div>
      )}
      {!loading && !errorMessege && (
        <div className="w-full flex flex-col gap-4 sm:gap-6">
          <div className="w-full flex justify-between items-center">
            <h2 className="font-inter font-semibold text-xl sm:text-2xl text-[#09090B] leading-8">
              Upcoming
            </h2>

            <button
              className="flex items-center gap-1.5 sm:gap-2 px-2 py-1 rounded-md hover:bg-zinc-100 transition-colors cursor-pointer"
              onClick={JumpToUpcoming}
            >
              <span className="font-inter font-medium text-xs sm:text-sm text-[#09090B]">
                See more
              </span>
              <ArrowRight />
            </button>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {data.slice(0, 10).map((object) => (
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
                    className="w-6.5 h-6.5 rounded-full bg-[#0A0A0C @ 62%] border border-[#FFFFFF] border-solid flex items-center justify-center absolute top-2.5 right-2.5 cursor-pointer"
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
        </div>
      )}
    </section>
  );
};
