
import React from "react";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakCounterProps {
  count: number;
  className?: string;
}

const StreakCounter = ({ count, className }: StreakCounterProps) => {
  // Determine the visual characteristics based on streak length
  const streakSize = count >= 10 ? "lg" : count >= 5 ? "md" : "sm";
  const streakColor = count >= 20 ? "text-fitstreaks-coral" : count >= 10 ? "text-fitstreaks-purple" : "text-fitstreaks-teal";
  
  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative">
        <Flame 
          className={cn(
            "animate-pulse-streak", 
            streakColor,
            streakSize === "lg" ? "h-8 w-8" : streakSize === "md" ? "h-7 w-7" : "h-6 w-6"
          )} 
        />
        {count >= 10 && (
          <div className="absolute -top-1 -right-1 h-2 w-2 bg-fitstreaks-coral rounded-full" />
        )}
      </div>
      <div className="ml-2">
        <p className="text-xs text-muted-foreground">Current Streak</p>
        <p className={cn(
          "font-bold",
          streakSize === "lg" ? "text-lg" : streakSize === "md" ? "text-base" : "text-sm"
        )}>
          {count} {count === 1 ? "Day" : "Days"}
        </p>
      </div>
    </div>
  );
};

export default StreakCounter;
