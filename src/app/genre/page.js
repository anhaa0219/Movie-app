"use client";
import { useEffect, useState } from "react";
import { Footer } from "@/app/features/Footer";
import { Header } from "@/app/features/Header";
import { StarIcon2 } from "@/app/icons/StarIcon2";
import { UpcomingLoading } from "@/app/features/UpcomingLoading";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft } from "@/app/icons/ChevronLeft";
import { ChevronRight } from "@/app/icons/ChevronRight";
import { ThreeDots } from "@/app/icons/ThreeDots";
const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RlYjljY2JlMzU2YjJjOTMxZjRjZWI1OTA4YmQ4NSIsIm5iZiI6MTc4NjU4NTAxNC41MDcsInN1YiI6IjZhN2QxZmI2OGFhNWQzN2ZiNTQ0NTkzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wd9oLUNGObBB7hSw6-cdoMQ2J35kHO-koQ8BCdqOOwQ";

export default function Genre() {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessege, SetErrorMessege] = useState("");
  const router = useRouter();
  const param = useParams();
  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    return jsonData.genres;
  };
  const getTempData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    return jsonData.results || [];
  };
  console.log(tempData, "this is data using temporary");
  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch(() => SetErrorMessege("Movie api error"))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    getTempData()
      .then((tempData) => setTempData(tempData))
      .catch(() => SetErrorMessege("Movie api error"))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const JumpToDetail = (id) => {
    router.push(`/detail/${id}`);
  };

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <Header />
      <div className="max-w-7xl min-w7xl flex flex-col px-4 md:px-8 gap-8 mt-13 mb-19">
        {loading && <UpcomingLoading />}
        {!loading && errorMessege && <div>{errorMessege}</div>}
        {!loading && !errorMessege && (
          <div className="max-w-7xl flex flex-col gap-8 items-center mt-13 mb-8">
            <p className="w-full font-inter font-semibold text-[30px] text-[#09090B] leading-9">
              Search filter
            </p>
            <div className="w-full flex gap-1">
              <div className="w-96.75 h-88 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <p className="font-inter font-semibold text-[#09090B] text-[24px] leading-8">
                    Genres
                  </p>
                  <p className="font-inter font-normal text-[#71717A] text-[16px] leading-6">
                    See lists of movies by genre
                  </p>
                </div>
                <button className="w-full flex flex-wrap gap-2.5 max-h-55 overflow-y-auto cursor-pointer">
                  {data?.map((obj) => (
                    <div
                      key={obj.id}
                      className="flex items-center gap-1.5 rounded-full border border-[#E4E4E7] py-1 px-3 hover:bg-zinc-100 transition-colors cursor-pointer"
                    >
                      <p className="font-inter font-semibold text-[#09090B] text-[12px] leading-4">
                        {obj.name}
                      </p>
                      <ChevronRight />
                    </div>
                  ))}
                </button>
              </div>
              <div className="w-8.25 self-stretch flex justify-center">
                <div className="w-px h-full bg-[#E4E4E7]"></div>
              </div>
              <div className="w-201.5 flex flex-col gap-8">
                <p className="font-inter font-semibold text-[#09090B] text-[20px] leading-7">
                  81 titles in “Animation, Comedy”
                </p>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
                  {tempData.slice(0, 12).map((object) => (
                    <div
                      key={object.id}
                      className="w-full h-110 flex flex-col rounded-lg gap-1 bg-[#F4F4F5] overflow-hidden"
                      onClick={() => JumpToDetail(object.id)}
                    >
                      <div
                        className="relative w-full h-85px"
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          alt={object.title || "Movie poster"}
                          src={
                            "https://image.tmdb.org/t/p/original" +
                            object.poster_path
                          }
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="w-full h-23.75 flex flex-col py-2 px-2">
                        <div className="w-full h-5.75 flex gap-1">
                          <StarIcon2 />
                          <p className="w-full h-5.75 flex font-inter font-medium text-[14px] text-[#09090B] leading-5 items-center">
                            {object.vote_average
                              ? object.vote_average.toFixed(1)
                              : "N/A"}
                            <span className="font-inter font-normal text-[14px] text-[#71717A]">
                              /10
                            </span>
                          </p>
                        </div>
                        <div className="w-full h-14 flex gap-2.5">
                          <p className="font-inter font-normal text-[18px] text-[#09090B] leading-7 line-clamp-2">
                            {object.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="max-w-7xl h-10 flex justify-end ">
                  <div className="h-10 flex">
                    <button className="h-10 flex items-center justify-center border border-[#E4E4E7] border-solid rounded-md py-1 px-2">
                      <ChevronLeft />
                      <p className="font-inter font-medium text-[14px] text-[#09090B] leading-5">
                        Previous
                      </p>
                    </button>
                    <div className="h-10 flex">
                      <button className="w-10 h-10 rounded-md flex items-center justify-center">
                        1
                      </button>
                      <button className="w-10 h-10 rounded-md flex items-center justify-center">
                        2
                      </button>
                      <button className="w-10 h-10 rounded-md flex justify-center items-center">
                        <ThreeDots />
                      </button>
                      <button className="w-10 h-10 rounded-md flex items-center justify-center">
                        5
                      </button>
                    </div>
                    <button className="h-10 flex items-center justify-center border-[#E4E4E7] border-solid border rounded-md py-1 px-2">
                      <p className="font-inter font-medium text-[14px] text-[#09090B] leading-5 ">
                        Next
                      </p>
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
