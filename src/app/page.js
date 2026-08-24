"use client";
import { Footer } from "./features/Footer";
import { Header } from "./features/Header";
import { HeroSection } from "./features/HeroSection";
import { Popular } from "./features/Popular";
import { TopRated } from "./features/TopRated";
import { Upcoming } from "./features/Upcoming";

export default function Main() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white overflow-x-hidden">
      <Header />

      <main className="w-full flex flex-col items-center flex-1">
        <HeroSection />

        <div className="w-full max-w-7xl flex flex-col gap-8 sm:gap-12 md:gap-16 my-8 sm:my-12 md:my-16">
          <Upcoming />
          <Popular />
          <TopRated />
        </div>
      </main>

      <Footer />
    </div>
  );
}
