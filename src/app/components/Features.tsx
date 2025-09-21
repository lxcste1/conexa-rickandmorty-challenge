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

function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Discover Character Connections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our advanced comparison tool helps you understand the relationships
            between characters through their shared episodes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-0 justify-between">
            <CardHeader>
              <CardTitle className="text-secondary">
                Character Comparison
              </CardTitle>
              <CardDescription>
                Select any two characters and see their detailed information
                side by side.
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
                Episode Analysis
              </CardTitle>
              <CardDescription>
                Discover which episodes feature your selected characters and
                find their shared adventures.
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
              <CardTitle className="text-link">Multiverse Explorer</CardTitle>
              <CardDescription>
                Navigate through the vast Rick and Morty universe with our
                intuitive interface.
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
            <Link href="/compare">Start Your Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Features;
