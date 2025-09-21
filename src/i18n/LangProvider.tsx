"use client";
import { Langs } from "@/types";
import { createContext, useContext } from "react";

const LangCtx = createContext<Langs>("es");

export function LangProvider({
  lang,
  children,
}: {
  lang: Langs;
  children: React.ReactNode;
}) {
  return <LangCtx.Provider value={lang}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}
