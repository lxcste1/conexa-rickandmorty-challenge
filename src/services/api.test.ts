import {
  getCharacters,
  getCharacter,
  getEpisode,
  getEpisodes,
  extractIdFromUrl,
} from "./api";

describe("API client", () => {
  it("getCharacters builds the query correctly and returns data", async () => {
    const res = await getCharacters({
      page: 1,
      name: "rick sanchez",
      status: "Alive",
      species: "Human",
    });
    expect(res.results.length).toBeGreaterThan(0);
    expect(res.results[0].name.toLowerCase()).toContain("rick sanchez");
  });

  it("getCharacter returns the correct character", async () => {
    const c = await getCharacter(1);
    expect(c.id).toBe(1);
    expect(c.name).toBe("Rick Sanchez");
  });

  it("getEpisode returns an episode", async () => {
    const ep = await getEpisode(3);
    expect(ep.id).toBe(3);
    expect(ep.episode).toMatch(/^S\d{2}E\d{2}$/);
  });

  it("getEpisodes normalizes a single id to an array", async () => {
    const one = await getEpisodes([5]);
    expect(Array.isArray(one)).toBe(true);
    expect(one).toHaveLength(1);
    expect(one[0].id).toBe(5);
  });

  it("getEpisodes returns multiple ids correctly", async () => {
    const many = await getEpisodes([1, 2, 3]);
    expect(many.map((e) => e.id)).toEqual([1, 2, 3]);
  });

  it("extractIdFromUrl works with different URL formats", () => {
    expect(extractIdFromUrl("https://rickandmortyapi.com/api/episode/28")).toBe(
      28
    );
    expect(extractIdFromUrl("https://.../episode/28/")).toBe(28);
    expect(extractIdFromUrl("https://.../episode/28?x=1")).toBe(28);
  });
});
