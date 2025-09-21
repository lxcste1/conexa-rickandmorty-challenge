import { Langs } from "@/types";
import { getDictionary } from "../dictionaries";
import ComparePageClient from "./ComparePageClient";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Langs }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <ComparePageClient dict={dict.compare} />;
}
