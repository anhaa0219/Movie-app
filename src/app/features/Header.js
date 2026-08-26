"use client";

import { ArrowDown } from "../icons/ArrowDown";
import { MoonIcon } from "../icons/MoonIcon";
import { Movielogo } from "../icons/Movielogo";
import { SearchIcon } from "../icons/SearchIcon";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "../icons/ChevronRight";
import { StarIcon2 } from "../icons/StarIcon2";
import { ArrowRight } from "../icons/ArrowRight";
import { useTheme } from "../components/ThemeProvider";

// 1. Fixed corrupted token and added environment variable fallback
const TMDB_API_TOKEN =
  process.env.NEXT_PUBLIC_TMDB_TOKEN ||
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RlYjljY2JlMzU2YjJjOTMxZjRjZWI1OTA4YmQ4NSIsIm5iZiI6MTc4NjU4NTAxNC41MDcsInN1YiI6IjZhN2QxZmI2OGFhNWQzN2ZiNTQ0NTkzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wd9oLUNGObBB7hSw6-cdoMQ2J35kHO-koQ8BCdqOOwQ";

export const Header = () => {
  const [data, setData] = useState([]);
  const [event, setEvent] = useState("");
  const router = useRouter();
  const [searchData, setSearchData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [genre, setGenre] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [count, setCount] = useState(0);
  const { toggleDarkMode } = useTheme();

  const genreRef = useRef(null);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);

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

    if (!response.ok) throw new Error("Failed to fetch genres");
    const jsonData = await response.json();
    return jsonData.genres || [];
  };

  const getSearchData = async () => {
    if (!event.trim()) return [];

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        event,
      )}&language=en-US&page=1`,
      {
        headers: {
          accept: "application/json", // 2. Added required accept header
          Authorization: `Bearer ${TMDB_API_TOKEN}`,
        },
      },
    );

    if (!response.ok) throw new Error("Failed to fetch search results");
    const jsonData = await response.json();
    return jsonData.results || [];
  };

  useEffect(() => {
    getData()
      .then((genres) => setData(genres))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getSearchData()
      .then((results) => setSearchData(results))
      .catch((err) => console.error(err));
  }, [event]);

  useEffect(() => {
    const updateWatchlistCount = () => {
      const saved = localStorage.getItem("moviez:watchlist");

      if (!saved) {
        setCount(0);
        return;
      }

      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCount(parsed.length);
        } else {
          setCount(0);
        }
      } catch (error) {
        console.error("Failed to load watchlist count:", error);
        setCount(0);
      }
    };

    updateWatchlistCount();
    window.addEventListener("storage", updateWatchlistCount);

    return () => {
      window.removeEventListener("storage", updateWatchlistCount);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (genreRef.current && !genreRef.current.contains(e.target)) {
        setGenre(false);
      }

      if (
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(e.target)
      ) {
        setIsSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const JumpToHome = () => {
    router.push("/");
  };

  const JumpToDetail = (id) => {
    setIsSearch(false);
    setIsMobileSearchOpen(false);
    setEvent(""); // Optional: clear search on navigation
    router.push(`/detail/${id}`);
  };

  const EventTaker = (e) => {
    const value = e.target.value;
    setEvent(value);
    setIsSearch(Boolean(value.trim()));
  };

  const JumpToGenre = (id) => {
    setGenre(false);
    router.push(`/genre/${id}`);
  };

  const JumpToSearch = (query) => {
    if (!query || !query.trim()) return;

    setIsSearch(false);
    setIsMobileSearchOpen(false);
    router.push(`/searchDetails/${encodeURIComponent(query.trim())}`);
  };

  const JumpToWatchList = () => {
    router.push("/watchlist");
  };

  return (
    <div className="w-full min-h-16 shrink-0 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 sm:px-6 lg:px-8 xl:px-12 flex justify-center items-center relative z-40">
      <div className="w-full max-w-7xl flex items-center justify-between gap-4 sm:gap-6">
        <div
          className="flex items-center gap-2 shrink-0 cursor-pointer"
          onClick={JumpToHome}
        >
          <Movielogo />
          <span className="font-bold italic text-base sm:text-lg text-[#4338CA] dark:text-[#A5B4FC]">
            Movie Z
          </span>
        </div>

        <div className="flex items-center gap-3 flex-1 max-w-xl md:max-w-2xl justify-end md:justify-start">
          <div className="relative shrink-0" ref={genreRef}>
            <button
              onClick={() => setGenre((prev) => !prev)}
              className="h-9 flex items-center gap-1.5 sm:gap-2 px-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xs hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer text-xs sm:text-sm font-medium text-[#18181B] dark:text-[#F4F4F5] shrink-0 whitespace-nowrap"
            >
              <span className="text-[#18181B] dark:text-[#F4F4F5]">
                <ArrowDown />
              </span>
              Genre
            </button>

            {genre && (
              <div className="fixed inset-x-4 top-18 md:absolute md:top-11 md:left-0 md:inset-x-auto md:w-xl max-w-[calc(100vw-2rem)] rounded-xl border border-[#E4E4E7] dark:border-zinc-700 bg-white dark:bg-zinc-900 p-5 shadow-2xl z-50">
                <div className="flex flex-col gap-1">
                  <p className="font-inter font-semibold text-[#09090B] dark:text-white text-lg sm:text-2xl leading-tight">
                    Genres
                  </p>
                  <p className="font-inter font-normal text-[#71717A] dark:text-[#A1A1AA] text-xs sm:text-sm">
                    See lists of movies by genre
                  </p>
                </div>

                <div className="w-full h-px bg-[#E4E4E7] dark:bg-zinc-700 my-3 sm:my-4" />

                <div className="w-full flex flex-wrap gap-2 sm:gap-2.5 max-h-60 overflow-y-auto">
                  {data?.map((obj) => (
                    <div
                      key={obj.id}
                      className="flex items-center gap-1.5 rounded-full border border-[#E4E4E7] dark:border-zinc-700 py-1 px-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                      onClick={() => JumpToGenre(obj.id)}
                    >
                      <p className="font-inter font-semibold text-[#09090B] dark:text-[#F4F4F5] text-xs">
                        {obj.name}
                      </p>
                      <span className="text-[#71717A] dark:text-[#D4D4D8]">
                        <ChevronRight />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileSearchOpen((prev) => !prev)}
            aria-label="Open search"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xs hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer shrink-0 text-[#18181B] dark:text-[#F4F4F5]"
          >
            <SearchIcon />
          </button>

          <div
            className="hidden md:flex h-9 items-center gap-2.5 px-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xs flex-1 min-w-55 relative"
            ref={searchRef}
          >
            <span className="text-[#18181B] dark:text-[#F4F4F5]">
              <SearchIcon />
            </span>

            <input
              type="text"
              value={event}
              className="w-full min-w-0 text-sm text-[#18181B] dark:text-[#F4F4F5] bg-transparent outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
              placeholder="Search movies..."
              onChange={EventTaker}
              onKeyDown={(e) => {
                if (e.key === "Enter") JumpToSearch(event);
              }}
            />

            {isSearch && (
              <div className="w-full min-w-[380px] sm:min-w-[480px] flex flex-col bg-white dark:bg-zinc-900 border border-[#E4E4E7] dark:border-zinc-700 shadow-xl rounded-xl p-3 absolute left-0 top-11 z-50">
                <div className="flex flex-col divide-y divide-[#E4E4E7] dark:divide-zinc-700 max-h-96 overflow-y-auto">
                  {searchData.slice(0, 5).map((obj) => (
                    <div
                      key={obj.id}
                      className="flex gap-3 py-2.5 px-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors"
                      onClick={() => JumpToDetail(obj.id)}
                    >
                      <img
                        alt={obj.title || "Movie poster"}
                        src={
                          obj.poster_path
                            ? `https://image.tmdb.org/t/p/w200${obj.poster_path}`
                            : "/placeholder.png"
                        }
                        className="object-cover w-14 h-20 rounded shrink-0 bg-zinc-100 dark:bg-zinc-800"
                      />

                      <div className="flex flex-col justify-between flex-1 min-w-0">
                        <div>
                          <p className="font-inter font-semibold text-sm sm:text-base text-[#09090B] dark:text-white line-clamp-1">
                            {obj.title}
                          </p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-[#09090B] dark:text-[#F4F4F5]">
                              <StarIcon2 />
                            </span>
                            <p className="font-semibold text-xs sm:text-sm text-[#09090B] dark:text-[#F4F4F5]">
                              {obj.vote_average
                                ? obj.vote_average.toFixed(1)
                                : "N/A"}
                              <span className="font-normal text-xs text-zinc-400 dark:text-zinc-500">
                                /10
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                          <span>{obj.release_date?.slice(0, 4) || "N/A"}</span>
                          <span className="flex items-center gap-1 font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                            See more
                            <span className="text-indigo-600 dark:text-indigo-400">
                              <ArrowRight />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {searchData.length === 0 && (
                    <div className="p-4 text-center text-xs text-zinc-500 dark:text-zinc-400">
                      No movies found
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="w-full pt-3 pb-1 text-center font-medium text-xs sm:text-sm text-[#09090B] dark:text-[#F4F4F5] hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer border-t border-[#E4E4E7] dark:border-zinc-700 mt-1"
                  onClick={() => JumpToSearch(event)}
                >
                  {event ? `See all results for "${event}"` : "See all results"}
                </button>
              </div>
            )}
          </div>
        </div>

        <button
          className="flex items-center gap-1.5 cursor-pointer text-[#09090B] dark:text-[#F4F4F5]"
          onClick={JumpToWatchList}
        >
          <p className="font-inter">♥</p>
          <span className="font-inter font-bold text-[14px]">Watchlist</span>
          {count > 0 && (
            <span className="h-4.5 px-1.5 flex items-center justify-center bg-[#6C5CE7] text-[11px] font-bold text-white rounded-full">
              {count}
            </span>
          )}
        </button>

        <button
          className="w-9 h-9 flex justify-center items-center border border-zinc-200 dark:border-zinc-700 shadow-xs bg-white dark:bg-zinc-900 rounded-lg shrink-0 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          <span className="text-[#18181B] dark:text-[#F4F4F5]">
            <MoonIcon />
          </span>
        </button>
      </div>

      {isMobileSearchOpen && (
        <div
          ref={mobileSearchRef}
          className="md:hidden absolute inset-x-0 top-16 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-3 shadow-md flex flex-col gap-2 z-50"
        >
          <div className="flex items-center gap-2 h-10 px-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
            <span className="text-[#18181B] dark:text-[#F4F4F5]">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={event}
              autoFocus
              className="w-full text-sm text-[#18181B] dark:text-[#F4F4F5] bg-transparent outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
              placeholder="Search movies..."
              onChange={EventTaker}
              onKeyDown={(e) => {
                if (e.key === "Enter") JumpToSearch(event);
              }}
            />
          </div>

          {isSearch && (
            <div className="flex flex-col divide-y divide-[#E4E4E7] dark:divide-zinc-700 max-h-80 overflow-y-auto mt-1">
              {searchData.slice(0, 5).map((obj) => (
                <div
                  key={obj.id}
                  className="flex gap-3 py-2 px-1 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg cursor-pointer"
                  onClick={() => JumpToDetail(obj.id)}
                >
                  <img
                    alt={obj.title || "Movie poster"}
                    src={
                      obj.poster_path
                        ? `https://image.tmdb.org/t/p/w200${obj.poster_path}`
                        : "/placeholder.png"
                    }
                    className="object-cover w-12 h-16 rounded shrink-0 bg-zinc-100 dark:bg-zinc-800"
                  />
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <p className="font-inter font-semibold text-xs sm:text-sm text-[#09090B] dark:text-[#F4F4F5] line-clamp-1">
                        {obj.title}
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[#09090B] dark:text-[#F4F4F5]">
                          <StarIcon2 />
                        </span>
                        <p className="font-semibold text-xs text-[#09090B] dark:text-[#F4F4F5]">
                          {obj.vote_average
                            ? obj.vote_average.toFixed(1)
                            : "N/A"}
                          <span className="font-normal text-[10px] text-zinc-400 dark:text-zinc-500">
                            /10
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      {obj.release_date?.slice(0, 4) || "N/A"}
                    </p>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="w-full py-3 text-center font-medium text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 active:text-indigo-800 cursor-pointer border-t border-[#E4E4E7] dark:border-zinc-700 mt-1"
                onClick={() => JumpToSearch(event)}
              >
                {event ? `See all results for "${event}"` : "See all results"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
