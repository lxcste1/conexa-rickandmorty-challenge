"use client";

import { Button } from "@/components/ui/button";
import { Langs } from "@/types";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export function LanguageSwitcher({ lang }: { lang: Langs }) {
  const router = useRouter();
  const search = useSearchParams();
  const query = search.toString();

  const go = (next: Langs) => {
    if (next === lang) return;
    const path = `/${next}`;
    router.push(query ? `${path}?${query}` : path);
  };

  return (
    <div className="bg-gray-900 py-2">
      <div className="flex justify-end gap-2 max-w-6xl mx-auto">
        <Button
          asChild
          onClick={() => go("es")}
          title="Español"
          className="cursor-pointer bg-accent w-[25px] h-[19px] relative p-0 rounded-1"
        >
          <Image
            src="/flags/es.svg"
            alt="Español"
            className="object-cover absolute"
            width={25}
            height={19}
          />
        </Button>
        <Button
          asChild
          onClick={() => go("en")}
          title="English"
          className="cursor-pointer bg-accent w-[25px] h-[19px] relative p-0 rounded-1"
        >
          <Image
            src="/flags/en.svg"
            alt="English"
            className="object-cover absolute"
            width={25}
            height={19}
          />
        </Button>
      </div>
    </div>
  );
}
