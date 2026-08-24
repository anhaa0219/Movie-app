"use client";
import { Footer } from "@/app/features/Footer";
import { Header } from "@/app/features/Header";
import { PlayIcon } from "@/app/icons/PlayIcon";
import { StarIcon } from "@/app/icons/StarIcon";
import { StarIcon2 } from "@/app/icons/StarIcon2";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRight } from "@/app/icons/ArrowRight";
import { Pageskeleton } from "./Pageskeleton";

const TMDB_API_TOKEN =
  process.env.NEXT_PUBLIC_TMDB_TOKEN ||
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RlYjljY2JlMzU2YjJjOTMxZjRjZWI1OTA4YmQ4NSIsIm5iZiI6MTc4NjU4NTAxNC41MDcsInN1YiI6IjZhN2QxZmI2OGFhNWQzN2ZiNTQ0NTkzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wd9oLUNGObBB7hSw6-cdoMQ2J35kHO-koQ8BCdqOOwQ";

export default function Detail() {
  const router = useRouter();
  const [activeUrl, setActiveUrl] = useState(null);
  const [activeModalTitle, setActiveModalTitle] = useState("");
  const [activeServer, setActiveServer] = useState("embedsu");
  const [isTrailer, setIsTrailer] = useState(false);
  const [data, setData] = useState(null);
  const [similarData, setSimilarData] = useState([]);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [videoData, setVideoData] = useState(null);
  const param = useParams();

  // Servers that do not trigger the "Iframe / Sandbox detected" error
  const getEmbedUrl = (movieId, server) => {
    switch (server) {
      case "embedsu":
        return `https://embed.su/embed/movie/${movieId}`;
      case "vidsrccc":
        return `https://vidsrc.cc/v2/embed/movie/${movieId}`;
      case "autoembed":
        return `https://player.autoembed.cc/embed/movie/${movieId}`;
      default:
        return `https://embed.su/embed/movie/${movieId}`;
    }
  };

  const fetchTMDB = async (endpoint) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${param.id}${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${TMDB_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint} (${res.status})`);
    }
    return res.json();
  };

  useEffect(() => {
    if (!param?.id) return;

    setLoading(true);
    setErrorMessage("");

    Promise.all([
      fetchTMDB("?language=en-US"),
      fetchTMDB("/similar?language=en-US&page=1"),
      fetchTMDB("/credits?language=en-US"),
      fetchTMDB("/videos?language=en-US"),
    ])
      .then(([movieDetails, similarMovies, creditData, videos]) => {
        setData(movieDetails);
        setSimilarData(similarMovies.results || []);
        setCredits(creditData);

        const trailer =
          videos.results?.find(
            (v) => v.type === "Trailer" && v.site === "YouTube",
          ) ||
          videos.results?.[0] ||
          null;

        setVideoData(trailer);
      })
      .catch((err) => {
        console.error("TMDB API Error:", err);
        setErrorMessage(
          "Failed to load movie details. Please check your network connection.",
        );
      })
      .finally(() => setLoading(false));
  }, [param?.id]);

  const handlePlayTrailer = (key) => {
    if (!key) return;
    setIsTrailer(true);
    setActiveModalTitle("Trailer");
    setActiveUrl(
      `https://www.youtube-nocookie.com/embed/${key}?autoplay=1&playsinline=1`,
    );
  };

  const handleWatchMovie = (server = "embedsu") => {
    if (!param?.id) return;
    setIsTrailer(false);
    setActiveServer(server);
    setActiveModalTitle("Watch Movie");
    setActiveUrl(getEmbedUrl(param.id, server));
  };

  const handleSwitchServer = (server) => {
    setActiveServer(server);
    setActiveUrl(getEmbedUrl(param.id, server));
  };

  const handleClose = () => {
    setActiveUrl(null);
    setActiveModalTitle("");
    setIsTrailer(false);
  };

  const jumpToDetail = (id) => {
    router.push(`/detail/${id}`);
  };

  const JumpToMoreLikeThis = () => {
    router.push(`/moreLikeThis/${param.id}`);
  };

  if (loading) {
    return <Pageskeleton />;
  }

  if (errorMessage || !data) {
    return (
      <div className="p-8 md:p-12 text-center text-red-500 min-h-[50vh] flex flex-col items-center justify-center gap-3">
        <p className="font-semibold text-lg">
          {errorMessage || "Movie not found"}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 text-sm bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  const directors =
    credits?.crew
      ?.filter((person) => person.job === "Director")
      ?.map((p) => p.name)
      ?.join(" · ") || "N/A";

  const writers =
    Array.from(
      new Set(
        credits?.crew
          ?.filter(
            (person) =>
              person.department === "Writing" ||
              person.job === "Writer" ||
              person.job === "Screenplay",
          )
          ?.map((p) => p.name),
      ),
    )
      ?.slice(0, 3)
      ?.join(" · ") || "N/A";

  const stars =
    credits?.cast
      ?.slice(0, 4)
      ?.map((person) => person.name)
      ?.join(" · ") || "N/A";

  return (
    <div className="w-full flex flex-col items-center relative min-h-screen">
      <Header />

      <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-6 sm:mt-10 mb-16">
        {activeUrl && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0 sm:p-4 md:p-6 backdrop-blur-md"
            onClick={handleClose}
          >
            <div
              className="relative w-full h-full sm:h-auto sm:max-w-4xl bg-zinc-950 sm:rounded-xl overflow-hidden shadow-2xl flex flex-col justify-center sm:justify-start"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex justify-between items-center bg-zinc-900 px-3 sm:px-4 py-2.5 border-b border-zinc-800 shrink-0">
                <div className="flex items-center gap-2 overflow-x-auto py-0.5">
                  <span className="text-xs font-semibold text-zinc-300 shrink-0">
                    {isTrailer ? "Trailer" : "Server:"}
                  </span>
                  {!isTrailer && (
                    <div className="flex gap-1.5 shrink-0">
                      {[
                        { id: "embedsu", label: "Server 1" },
                        { id: "vidsrccc", label: "Server 2" },
                        { id: "autoembed", label: "Server 3" },
                      ].map((srv) => (
                        <button
                          key={srv.id}
                          onClick={() => handleSwitchServer(srv.id)}
                          className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                            activeServer === srv.id
                              ? "bg-indigo-600 text-white"
                              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                          }`}
                        >
                          {srv.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleClose}
                  className="text-zinc-400 hover:text-white text-base font-bold p-1.5 ml-2 rounded bg-zinc-800/80 hover:bg-zinc-800 cursor-pointer shrink-0 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Player Container */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                <iframe
                  key={activeUrl}
                  className="w-full h-full border-0"
                  src={activeUrl}
                  title={activeModalTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  referrerPolicy="origin"
                />
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex flex-col gap-1 min-w-0 flex-1">
              <h1 className="font-inter font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#09090B] leading-tight break-words">
                {data.title}
              </h1>
              <p className="font-inter font-normal text-sm sm:text-base text-[#71717A]">
                {data.release_date}{" "}
                {data.runtime
                  ? `· ${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`
                  : ""}
              </p>
            </div>

            <div className="flex items-center sm:flex-col sm:items-end gap-3 sm:gap-1 shrink-0">
              <p className="font-inter font-medium text-xs text-[#71717A] hidden sm:block">
                Rating
              </p>
              <div className="flex items-center gap-1.5">
                <StarIcon />
                <div className="flex sm:flex-col items-baseline sm:items-start gap-1 sm:gap-0">
                  <p className="font-inter font-semibold text-base sm:text-lg text-[#09090B] leading-none">
                    {data.vote_average ? data.vote_average.toFixed(1) : "N/A"}
                    <span className="font-inter font-normal text-xs sm:text-sm text-[#71717A]">
                      /10
                    </span>
                  </p>
                  <p className="font-inter font-normal text-xs text-[#71717A]">
                    {data.vote_count
                      ? `(${data.vote_count.toLocaleString()})`
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6">
            <div className="hidden sm:block sm:w-60 md:w-72 aspect-2/3 shrink-0 rounded-lg overflow-hidden bg-zinc-100 shadow-sm">
              <img
                alt={data.title || "Movie poster"}
                src={
                  data.poster_path
                    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                    : "/placeholder.png"
                }
                className="object-cover w-full h-full"
              />
            </div>

            <div className="w-full flex-1 aspect-video sm:aspect-auto sm:min-h-85 md:h-107.5 rounded-lg overflow-hidden bg-zinc-900 relative shadow-sm">
              <img
                alt={data.title || "Backdrop"}
                src={
                  data.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
                    : data.poster_path
                      ? `https://image.tmdb.org/t/p/original${data.poster_path}`
                      : "/placeholder.png"
                }
                className="object-cover w-full h-full opacity-90"
              />

              {videoData?.key && (
                <div
                  className="flex gap-2.5 sm:gap-3 items-center absolute left-4 sm:left-6 bottom-4 sm:bottom-6 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer hover:bg-black/80 transition-colors"
                  onClick={() => handlePlayTrailer(videoData.key)}
                >
                  <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex justify-center items-center bg-white shrink-0 hover:scale-105 transition-transform">
                    <PlayIcon />
                  </button>
                  <p className="font-inter font-medium text-white text-xs sm:text-sm">
                    Play trailer
                  </p>
                </div>
              )}

              <div
                className="flex gap-2.5 sm:gap-3 items-center absolute right-4 sm:right-6 bottom-4 sm:bottom-6 bg-[#4338CA] hover:bg-indigo-700 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer transition-colors shadow-lg"
                onClick={() => handleWatchMovie("embedsu")}
              >
                <p className="font-inter font-semibold text-white text-xs sm:text-sm">
                  Watch now
                </p>
                <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex justify-center items-center bg-white shrink-0 hover:scale-105 transition-transform">
                  <PlayIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 mt-6 sm:mt-8">
          <div className="flex flex-wrap gap-2">
            {data?.genres?.map((genre) => (
              <span
                key={genre.id}
                className="py-1 px-3 rounded-full border border-[#E4E4E7] font-inter font-medium text-xs sm:text-sm text-[#09090B] shrink-0"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className="font-inter font-normal text-[#09090B] text-sm sm:text-base leading-relaxed">
            {data.overview}
          </p>

          <div className="w-full flex flex-col gap-3 sm:gap-4 mt-2">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <p className="w-24 font-inter font-bold text-sm text-[#09090B] shrink-0">
                  Director
                </p>
                <p className="font-inter font-normal text-sm text-[#09090B] mt-0.5 sm:mt-0">
                  {directors}
                </p>
              </div>
              <div className="w-full h-px bg-[#E4E4E7]" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <p className="w-24 font-inter font-bold text-sm text-[#09090B] shrink-0">
                  Writers
                </p>
                <p className="font-inter font-normal text-sm text-[#09090B] mt-0.5 sm:mt-0">
                  {writers}
                </p>
              </div>
              <div className="w-full h-px bg-[#E4E4E7]" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <p className="w-24 font-inter font-bold text-sm text-[#09090B] shrink-0">
                  Stars
                </p>
                <p className="font-inter font-normal text-sm text-[#09090B] mt-0.5 sm:mt-0">
                  {stars}
                </p>
              </div>
              <div className="w-full h-px bg-[#E4E4E7]" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 mt-10 sm:mt-14">
          <div className="w-full flex justify-between items-center">
            <h2 className="font-inter font-semibold text-lg sm:text-xl md:text-2xl text-[#09090B]">
              More like this
            </h2>
            <div
              className="px-2.5 sm:px-3 py-1.5 rounded-md flex justify-center items-center gap-1.5 sm:gap-2 hover:bg-zinc-100 transition-colors cursor-pointer"
              onClick={JumpToMoreLikeThis}
            >
              <button className="border-none font-inter font-medium text-xs sm:text-sm text-[#09090B] cursor-pointer">
                See more
              </button>
              <ArrowRight />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {similarData.slice(0, 5).map((movie) => (
              <div
                key={movie.id}
                onClick={() => jumpToDetail(movie.id)}
                className="flex flex-col rounded-lg bg-[#F4F4F5] overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="relative w-full aspect-2/3 shrink-0 bg-zinc-200">
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
                <div className="flex flex-col p-2.5 sm:p-3 gap-1">
                  <div className="flex items-center gap-1">
                    <StarIcon2 />
                    <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B]">
                      {movie.vote_average
                        ? movie.vote_average.toFixed(1)
                        : "N/A"}
                      <span className="text-[#71717A] text-xs">/10</span>
                    </p>
                  </div>
                  <p className="font-inter font-medium text-xs sm:text-sm text-[#09090B] line-clamp-2 leading-snug">
                    {movie.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
