"use client";
import Ceo from "./components/Ceo/Ceo";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Partners from "./components/Partners/Partners";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Ceo />
      <Reviews />
      <Partners />
    </>
  );
}
