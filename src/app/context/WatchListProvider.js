"use client";
import { createContext, useContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  // Read once when the browser loads
  useEffect(() => {
    try {
      const saved = localStorage.getItem("moviez:watchlist");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setWatchList(parsed);
      }
    } catch (e) {
      console.error("Failed to load watchlist", e);
    }
  }, []);

  // Centralized toggle logic
  const toggle = (movie) => {
    setWatchList((prev) => {
      const exists = prev.some((item) => item.id === movie.id);
      const next = exists
        ? prev.filter((item) => item.id !== movie.id)
        : [{ ...movie, addedAt: Date.now() }, ...prev];

      localStorage.setItem("moviez:watchlist", JSON.stringify(next));
      return next;
    });
  };

  const isSaved = (id) => watchList.some((item) => item.id === id);

  return (
    <WatchlistContext.Provider value={{ watchList, toggle, isSaved }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
