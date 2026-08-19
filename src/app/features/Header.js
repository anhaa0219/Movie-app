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
const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RlYjljY2JlMzU2YjJjOTMxZjRjZWI1OTA4YmQ4NSIsIm5iZiI6MTc4NjU4NTAxNC41MDcsInN1YiI6IjZhN2QxZmI2OGFhNWQzN2ZiNTQ0NTkzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wd9oLUNGObBB7hSw6-cdoMQ2J35kHO-koQ8BCdqOOwQ";

export const Header = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessege, SetErrorMessege] = useState("");
  const [event, setEvent] = useState("");
  const router = useRouter();
  const [searchData, setSearchData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [genre, setGenre] = useState(false);

  const genreRef = useRef(null);
  const searchRef = useRef(null);

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    return jsonData.genres;
  };
  const getSearchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${event}&language=en-US&page=${1}`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    return jsonData.results || [];
  };
  console.log(data, "Data genre");
  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch(() => SetErrorMessege("Movie api error"))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    getSearchData()
      .then((searchData) => setSearchData(searchData))
      .catch(() => SetErrorMessege("Movie api error"))
      .finally(() => {
        setLoading(false);
      });
  }, [event]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (genreRef.current && !genreRef.current.contains(e.target)) {
        setGenre(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(searchData, "This is search data");
  console.log(event, "This is event");

  const JumpToHome = () => {
    router.push("/");
  };
  const JumpToDetail = (id) => {
    router.push(`/detail/${id}`);
  };
  const HandleGenreDrop = () => {
    setGenre(true);
  };

  const HandleGenreClose = () => {
    setGenre(false);
  };
  const EventTaker = (e) => {
    const value = e.target.value;
    setEvent(value);
    if (value.trim()) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  };
  const JumpToGenre = () => {
    router.push("/genre");
  };
  return (
    <div className="w-full min-h-14.75 shrink-0 border-b border-zinc-200 bg-white px-6 lg:px-8 xl:px-12 flex justify-center items-center relative z-40">
      <div className="w-full max-w-7xl flex items-center justify-between gap-8">
        <div
          className="flex items-center gap-2 shrink-0 cursor-pointer"
          onClick={JumpToHome}
        >
          <Movielogo />
          <span className="font-bold italic text-lg text-[#4338CA]">
            Movie Z
          </span>
        </div>
        <div className="flex items-center gap-3 flex-1 max-w-2xl">
          <div className="relative" ref={genreRef}>
            <button
              onClick={genre ? HandleGenreClose : HandleGenreDrop}
              className="h-9 flex items-center gap-2 px-3 rounded-md border border-zinc-200 bg-white shadow-sm hover:bg-zinc-50 cursor-pointer text-sm font-medium text-[#18181B]"
            >
              <ArrowDown />
              Genre
            </button>

            {genre && (
              <div className="absolute top-10 left-0 mt-2 w-144.25 max-w-[90vw] rounded-lg border border-[#E4E4E7] bg-white p-5 shadow-xl z-50">
                <div className="flex flex-col gap-1">
                  <p className="font-inter font-semibold text-[#09090B] text-[24px] leading-8">
                    Genres
                  </p>
                  <p className="font-inter font-normal text-[#71717A] text-[16px] leading-6">
                    See lists of movies by genre
                  </p>
                </div>

                <div className="w-full h-px bg-[#E4E4E7] my-4" />

                <button className="w-full flex flex-wrap gap-2.5 max-h-55 overflow-y-auto cursor-pointer">
                  {data?.map((obj) => (
                    <div
                      key={obj.id}
                      className="flex items-center gap-1.5 rounded-full border border-[#E4E4E7] py-1 px-3 hover:bg-zinc-100 transition-colors cursor-pointer"
                      onClick={JumpToGenre}
                    >
                      <p className="font-inter font-semibold text-[#09090B] text-[12px] leading-4">
                        {obj.name}
                      </p>
                      <ChevronRight />
                    </div>
                  ))}
                </button>
              </div>
            )}
          </div>

          <div
            className="h-9 flex items-center gap-2.5 px-3 rounded-lg border border-zinc-200 bg-white shadow-sm flex-1 min-w-0"
            ref={searchRef}
          >
            <SearchIcon />
            <input
              type="text"
              className="w-full min-w-0 text-sm text-[#18181B] bg-transparent outline-none placeholder:text-zinc-400 relative"
              placeholder="Search ..."
              onChange={EventTaker}
            />
            {isSearch && (
              <div className="w-144.25 flex flex-col bg-[#FFFFFF] border border-solid border-[#E4E4E7] gap-3 rounded-lg py-3 px-3 absolute top-15">
                <div>
                  {searchData.slice(0, 5).map((obj) => (
                    <div key={obj.id} className="flex flex-col">
                      <div className="w-138.25 h-29 flex gap-4 rounded-lg px-2 py-2">
                        <img
                          alt={obj.title || "Movie poster"}
                          src={
                            obj.poster_path
                              ? `https://image.tmdb.org/t/p/original${obj.poster_path}`
                              : "/placeholder.png"
                          }
                          className="object-cover w-full h-full"
                        />
                        <div className="w-113.5 h-24.75 flex gap-3 flex-col">
                          <div className="w-113.5 h-12.75 flex flex-col">
                            <p className="font-inter font-semibold text-[20px] text-[#09090B] leading-7">
                              {obj.title}
                            </p>
                            <div className="flex items-center gap-2">
                              <StarIcon2 />
                              <p className="font-semibold text-lg text-[#09090B]">
                                {obj.vote_average
                                  ? obj.vote_average.toFixed(1)
                                  : "N/A"}
                                <span className="font-normal text-sm text-zinc-400">
                                  /10
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="w-113.5 h-9 flex justify-between items-center">
                            <p className="font-inter font-medium text-[#09090B] text-[14px] leading-5">
                              {obj.release_date}
                            </p>
                            <button
                              className="w-30 h-9 rounded-md flex justify-center items-center gap-2 bg-[#FFFFFF] cursor-pointer"
                              onClick={() => JumpToDetail(obj.id)}
                            >
                              <p className="font-inter font-medium text-[14px] text-[#09090B] leading-5">
                                See more
                              </p>
                              <ArrowRight />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-4.25 flex items-center">
                        <div className="h-px bg-[#E4E4E7] w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-53 h-10 rounded-md flex items-center justify-center cursor-pointer">
                  {event
                    ? `See all results for "${event}"`
                    : "See all results for"}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-9 h-9 flex justify-center items-center border border-zinc-200 shadow-sm bg-white rounded-lg shrink-0 cursor-pointer">
          <MoonIcon />
        </div>
      </div>
    </div>
  );
};
