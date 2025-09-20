import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}
