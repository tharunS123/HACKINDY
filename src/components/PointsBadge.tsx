
import React from "react";
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface PointsBadgeProps {
  points: number;
  level: number;
  className?: string;
}

const PointsBadge = ({ points, level, className }: PointsBadgeProps) => {
  const getLevelTitle = (level: number): string => {
    switch (level) {
      case 1: return "Beginner";
      case 2: return "Novice";
      case 3: return "Intermediate";
      case 4: return "Advanced";
      case 5: return "Expert";
      case 6: return "Master";
      case 7: return "Elite";
      case 8: return "Legend";
      default: return "Rookie";
    }
  };

  return (
    <div className={cn("flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-3 shadow-sm", className)}>
      <div className="relative">
        <div className="rounded-full bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple p-2 shadow-lg">
          <Award className="h-6 w-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-fitstreaks-charcoal text-white flex items-center justify-center text-xs font-bold">
          {level}
        </div>
      </div>
      <div className="ml-3">
        <p className="text-xs text-muted-foreground">Current Level</p>
        <p className="font-bold text-sm">{getLevelTitle(level)}</p>
        <div className="flex items-center mt-1">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className="bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple h-1.5 rounded-full" 
              style={{ width: `${Math.min((points % 100) / 100 * 100, 100)}%` }}
            />
          </div>
          <span className="text-xs font-medium ml-2">{points} pts</span>
        </div>
      </div>
    </div>
  );
};

export default PointsBadge;
