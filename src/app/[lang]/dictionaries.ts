import { Dictionary, Langs } from "@/types";
import "server-only";

const dictionaries: Record<Langs, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
};

export async function getDictionary(locale: Langs): Promise<Dictionary> {
  return dictionaries[locale]();
}
