"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Header() {
  const path = usePathname();
  const isComparePage = path === "/compare";

  return (
    <header className="bg-accent py-4 shadow-md">
      <div className="flex justify-center items-center max-w-5xl mx-auto">
        <Link className="flex flex-col items-center" href="/">
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
