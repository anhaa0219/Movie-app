"use client";
import { Footer } from "../app/features/Footer";
import { Header } from "../app/features/Header";
import { HeroSection } from "../app/features/HeroSection";
import { Popular } from "./features/Popular";
import { Upcoming } from "./features/Upcoming";
import { TopRated } from "./features/TopRated";
import { useState } from "react";
export default function Main() {
  const [dark, setDark] = useState(false);
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden">
      <Header />

      <HeroSection />

      <div className="w-full max-w-7xl flex flex-col gap-13 mt-13 shrink-0">
        <Upcoming />
        <Popular />
        <TopRated />
      </div>

      <Footer />
    </div>
  );
}
