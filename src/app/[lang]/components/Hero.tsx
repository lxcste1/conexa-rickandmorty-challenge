import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import HeroTitle from "./HeroTitle";
import { Langs } from "@/types";

async function Hero({ lang }: { lang: Langs }) {
  const dict = await getDictionary(lang);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <HeroTitle lang={lang} />
              <p className="text-lg lg:text-xl text-muted-foreground text-pretty max-w-lg">
                {dict.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-lg text-secondary-foreground px-8 bg-secondary hover:bg-secondary/80"
              >
                <Link href={`/${lang}/compare`}>{dict.hero.callToAction}</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">
                  {dict.hero.characteristics.characterNum}
                </div>
                <div className="text-sm text-muted-foreground">
                  {dict.hero.characteristics.character}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  {dict.hero.characteristics.episodeNum}
                </div>
                <div className="text-sm text-muted-foreground">
                  {dict.hero.characteristics.episode}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  {dict.hero.characteristics.locationNum}
                </div>
                <div className="text-sm text-muted-foreground">
                  {dict.hero.characteristics.location}
                </div>
              </div>
            </div>
          </div>

          {/* Portal Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/rickandmorty-portal.png"
                alt="Rick and Morty Portal"
                className="w-full max-w-md lg:max-w-lg h-auto animate-pulse"
                width={840}
                height={764}
                priority
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
