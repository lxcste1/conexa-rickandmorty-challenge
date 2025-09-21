import { Langs } from "@/types";
import { getDictionary } from "../dictionaries";

export default async function HeroTitle({ lang }: { lang: Langs }) {
  const dict = await getDictionary(lang);
  const title = dict.hero.title as string;

  const parts = title.split(/<\/?highlight>/g);

  return (
    <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
      {parts.map((chunk, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-primary">
            {chunk}
          </span>
        ) : (
          <span key={i}>{chunk}</span>
        )
      )}
    </h1>
  );
}
