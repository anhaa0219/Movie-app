"use client";
import { ChevronLeft } from "@/app/icons/ChevronLeft";
import { ChevronRight } from "@/app/icons/ChevronRight";
import { Footer } from "../../features/Footer";
import { Header } from "../../features/Header";
import { StarIcon2 } from "../../icons/StarIcon2";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
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
  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${param.id}?language=en-US`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    return await response.json();
  };
  const getDataSimilar = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${param.id}/similar?language=en-US&page=1`,
      { headers: { Authorization: `Bearer ${api_token}` } },
    );
    const jsonData = await response.json();
    return jsonData.results || [];
  };

  useEffect(() => {
    if (!param?.id) return;

    Promise.all([getData(), getDataSimilar()])
      .then(([movieDetails, similarMovies]) => {
        setData(movieDetails);
        setSimilarData(similarMovies);
      })
      .catch(() => setErrorMessage("Movie API error"))
      .finally(() => setLoading(false));
  }, [param?.id]);

  const jumpToDetail = (id) => {
    router.push(`/detail/${id}`);
  };

  if (loading) {
    return (
      <div>
        <MorelikethisSkeleton />
      </div>
    );
  }

  if (errorMessage || !data) {
    return (
      <div className="p-12 text-center text-red-500">
        {errorMessage || "Movie not found"}
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="w-full max-w-270 px-4 mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col gap-6 mt-12">
          <div className="w-full flex justify-between items-center">
            <h2 className="font-inter font-semibold text-[22px] text-[#09090B]">
              More like this
            </h2>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  justify-center justify-items-center">
            {similarData.slice(0, 10).map((movie) => (
              <div
                key={movie.id}
                onClick={() => jumpToDetail(movie.id)}
                className="w-full flex flex-col rounded-lg bg-[#F4F4F5] overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="relative w-full aspect-2/3 shrink-0 bg-gray-200">
                  <img
                    alt={movie.title || "Movie poster"}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/placeholder.png"
                    }
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col p-3 gap-1">
                  <div className="flex items-center gap-1">
                    <StarIcon2 />
                    <p className="font-inter font-medium text-[13px] text-[#09090B]">
                      {movie.vote_average
                        ? movie.vote_average.toFixed(1)
                        : "N/A"}
                      <span className="text-[#71717A]">/10</span>
                    </p>
                  </div>
                  <p className="font-inter font-medium text-[14px] text-[#09090B] line-clamp-2 leading-snug">
                    {movie.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-7xl h-10 flex justify-end mb-16">
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
      <Footer />
    </div>
  );
}
