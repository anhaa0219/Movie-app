"use client";

export default function Watchlist() {
  const getWatchListData = () => {
    if (typeof window === "undefined") return [];

    const saved = localStorage.getItem("moviez:watchlist");
    if (!saved) return [];

    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  };
  console.log(getWatchListData());
  return <div>page watchlist</div>;
}
