import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, TvMinimalPlay, UserRoundPen } from "lucide-react";
import { Langs } from "@/types";
import { getDictionary } from "../dictionaries";

async function Features({ lang }: { lang: Langs }) {
  const dict = await getDictionary(lang);
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {dict.features.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.features.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-0 justify-between">
            <CardHeader>
              <CardTitle className="text-secondary">
                {dict.features.cards.step1.title}
              </CardTitle>
              <CardDescription>
                {dict.features.cards.step1.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <UserRoundPen />
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 justify-between">
            <CardHeader>
              <CardTitle className="text-foreground">
                {dict.features.cards.step2.title}
              </CardTitle>
              <CardDescription>
                {dict.features.cards.step2.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <TvMinimalPlay />
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 justify-between">
            <CardHeader>
              <CardTitle className="text-link">
                {dict.features.cards.step3.title}
              </CardTitle>
              <CardDescription>
                {dict.features.cards.step3.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Sparkles />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="text-secondary-foreground bg-secondary hover:bg-secondary/80"
          >
            <Link href={`/${lang}/compare`}>{dict.features.callToAction}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Features;
