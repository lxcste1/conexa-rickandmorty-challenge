import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { Langs } from "@/types";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Langs }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen">
      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
      </main>
    </div>
  );
}
