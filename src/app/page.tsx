import React from "react";
import {
  getCharacter,
  getCharacters,
  getCharactersByIds,
  getEpisode,
  getEpisodes,
} from "@/services/api";

export default async function Home() {
  const character1 = await getCharacter(1);
  console.log("Character 1:", character1.name);

  const characters = await getCharacters({
    page: 1,
    name: "rick",
    status: "Alive",
  });
  console.log("Characters page 1:", characters.results);

  const characterById123 = await getCharactersByIds([1, 2, 3]);
  console.log(
    "Characters by ids 1-3:",
    characterById123.map((c) => c.name)
  );

  const episode = await getEpisode(2);
  console.log("Episode 1:", episode.name);

  const episodes = await getEpisodes([1, 2, 3]);
  console.log(
    "Episodes 1-3:",
    episodes.map((e) => e.name)
  );

  return (
    <div className="min-h-screen">
      <main>
        <h1>Conexa Challenge - Esta va a ser la página principal</h1>
      </main>
    </div>
  );
}
