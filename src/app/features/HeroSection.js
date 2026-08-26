"use client";

import { ChevronRight } from "../icons/ChevronRight";
import { PlayIcon } from "../icons/PlayIcon";
import { StarIcon } from "../icons/StarIcon";
import { HeroSectionLoading } from "./HeroSectionLoading";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RlYjljY2JlMzU2YjJjOTMxZjRjZWI1OTA4YmQ4NSIsIm5iZiI6MTc4NjU4NTAxNC41MDcsInN1YiI6IjZhN2QxZmI2OGFhNWQzN2ZiNTQ0NTkzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wd9oLUNGObBB7hSw6-cdoMQ2J35kHO-koQ8BCdqOOwQ";

export const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [trailerKey, setTrailerKey] = useState(null);
  const [trailerLoading, setTrailerLoading] = useState(false);

  const router = useRouter();
  const scrollContainerRef = useRef(null);
  const displayedMovies = movies.slice(0, 5);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          { headers: { Authorization: `Bearer ${API_TOKEN}` } },
        );

        if (!response.ok) throw new Error("Failed to fetch");

        const jsonData = await response.json();
        setMovies(jsonData.results || []);
      } catch (err) {
        setErrorMessage("Movie API error. Unable to load movies.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetIndex =
        (index + displayedMovies.length) % displayedMovies.length;
      container.scrollTo({
        left: targetIndex * container.clientWidth,
        behavior: "smooth",
      });
      setCurrentIndex(targetIndex);
    }
  };

  useEffect(() => {
    if (displayedMovies.length === 0 || isMouseDown || trailerKey) return;

    const timer = setInterval(() => {
      scrollToIndex(currentIndex + 1);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex, displayedMovies.length, isMouseDown, trailerKey]);

  const JumpToDetail = (id) => {
    router.push(`/detail/${id}`);
  };

  const handleWatchTrailer = async (e, movieId) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setTrailerLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        { headers: { Authorization: `Bearer ${API_TOKEN}` } },
      );
      const data = await res.json();

      const officialTrailer =
        data.results?.find(
          (vid) => vid.site === "YouTube" && vid.type === "Trailer",
        ) || data.results?.find((vid) => vid.site === "YouTube");

      if (officialTrailer) {
        setTrailerKey(officialTrailer.key);
      } else {
        alert("Trailer is currently unavailable for this movie.");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
      alert("Failed to load trailer.");
    } finally {
      setTrailerLoading(false);
    }
  };

  const closeTrailer = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setTrailerKey(null);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      if (clientWidth > 0) {
        const index = Math.round(scrollLeft / clientWidth);
        setCurrentIndex(index);
      }
    }
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsMouseDown(false);
  const handleMouseUp = () => setIsMouseDown(false);

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleTouchStart = (e) => {
    setIsMouseDown(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchEnd = () => setIsMouseDown(false);

  const handleTouchMove = (e) => {
    if (!isMouseDown) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleNext = () => {
    scrollToIndex(currentIndex + 1);
  };

  if (loading) return <HeroSectionLoading />;
  if (errorMessage)
    return (
      <div className="p-4 sm:p-6 text-red-500 text-center">{errorMessage}</div>
    );

  return (
    <>
      <div className="relative w-full overflow-hidden select-none">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          className={`w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
            isMouseDown ? "cursor-grabbing scroll-auto" : "cursor-grab"
          }`}
        >
          {displayedMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative w-full min-w-full h-[420px] sm:h-[480px] md:h-[560px] lg:h-[600px] shrink-0 snap-center overflow-hidden flex items-end p-6 sm:p-10 md:p-16 lg:p-20 cursor-pointer"
              onClick={() => JumpToDetail(movie.id)}
            >
              <img
                alt={movie.title || "Movie backdrop"}
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                    : movie.poster_path
                      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                      : "/placeholder-backdrop.jpg"
                }
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent sm:to-black/20 z-10 pointer-events-none" />

              <div
                className="relative z-20 max-w-full sm:max-w-lg md:max-w-xl text-white flex flex-col gap-2 sm:gap-3 pb-6 sm:pb-4 pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-xs sm:text-sm font-medium text-zinc-300">
                  Now Playing:
                </p>
                <h2
                  className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight line-clamp-1 sm:line-clamp-2 leading-tight cursor-pointer hover:underline"
                  onClick={() => JumpToDetail(movie.id)}
                >
                  {movie.title}
                </h2>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <StarIcon />
                  <p className="font-semibold text-xs sm:text-base md:text-lg text-zinc-100">
                    {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                    <span className="font-normal text-xs sm:text-sm text-zinc-400">
                      /10
                    </span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                  {movie.overview}
                </p>

                <div className="pt-1.5 sm:pt-2">
                  <button
                    type="button"
                    disabled={trailerLoading}
                    onClick={(e) => handleWatchTrailer(e, movie.id)}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-md bg-white text-zinc-900 font-medium text-xs sm:text-sm hover:bg-zinc-200 active:scale-95 transition-all cursor-pointer shadow-md"
                  >
                    <PlayIcon />
                    <span>
                      {trailerLoading ? "Loading..." : "Watch Trailer"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Indicator Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2">
          {displayedMovies.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-5 sm:w-6 bg-white"
                  : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Next Slide Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/90 hover:bg-white text-zinc-900 shadow-xl items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 shrink-0 text-zinc-900" />
        </button>
      </div>

      {trailerKey && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
          onClick={closeTrailer}
        >
          <div
            className="relative w-full max-w-[997px] aspect-[997/561] bg-black rounded-lg overflow-hidden shadow-2xl border border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeTrailer}
              aria-label="Close"
              className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center text-sm font-bold transition-colors cursor-pointer border border-white/20"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&enablejsapi=1`}
              title="Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};
