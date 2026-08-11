import { useState } from "react"
import { Footer } from "../app/features/Footer"
import { Header } from "../app/features/Header"
import { HeroSection } from "../app/features/HeroSection"
export default function main() {
  return (
    <div>
      <Header />
      <HeroSection />

      <Footer />
    </div>
  )
}
