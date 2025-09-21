import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Langs } from "@/types";

function Header({ lang }: { lang: Langs }) {
  return (
    <header className="bg-accent py-4 shadow-lg">
      <div className="flex justify-center items-center max-w-5xl mx-auto">
        <Link className="flex flex-col items-center" href={`/${lang}`}>
          <Image
            src="/rickandmorty-logo.png"
            alt="logo"
            width={230}
            height={70}
            priority
          />
          <span className="font-bold text-sm">Conexa Challenge</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
