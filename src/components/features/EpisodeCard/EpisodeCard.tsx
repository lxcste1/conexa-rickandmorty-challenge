import React from "react";
import { cx } from "class-variance-authority";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users } from "lucide-react";
import { Episode } from "@/types";

type EpisodeCardProps = {
  episode: Episode;
  className?: string;
};

function EpisodeCard({ episode, className }: EpisodeCardProps) {
  const { name, air_date, episode: episodeCode, characters } = episode;

  const containerClassNames = cx(
    "transition-all duration-200 hover:shadow-md border-0 gap-0 py-3",
    className
  );

  return (
    <Card className={containerClassNames}>
      <CardHeader className="gap-0">
        <div className="flex items-start justify-between">
          <CardTitle
            className="text-sm font-semibold text-card-foreground leading-tight"
            role="heading"
          >
            {name}
          </CardTitle>
          <Badge variant="outline" className="text-xs ml-2 flex-shrink-0">
            {episodeCode}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar data-testid="lucide-calendar" className="w-3 h-3" />
            <span>{air_date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users data-testid="lucide-users" className="w-3 h-3" />
            <span>{characters.length}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default EpisodeCard;
