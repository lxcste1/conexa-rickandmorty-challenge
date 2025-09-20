import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Explore the <span className="text-primary">Rick & Morty</span>{" "}
                Universe
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground text-pretty max-w-lg">
                Compare characters, discover shared episodes, and dive deep into
                the multiverse of Rick and Morty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/compare">Start Comparing Characters</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">800+</div>
                <div className="text-sm text-muted-foreground">Characters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Episodes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">Locations</div>
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
