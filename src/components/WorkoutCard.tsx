
import React from "react";
import { Calendar, Clock, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkoutCardProps {
  title: string;
  type: string;
  date: string;
  duration: string;
  intensity: "Low" | "Medium" | "High";
  points: number;
  className?: string;
}

const WorkoutCard = ({ 
  title, 
  type, 
  date, 
  duration, 
  intensity,
  points, 
  className 
}: WorkoutCardProps) => {
  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Low": return "bg-green-500/20 text-green-700";
      case "Medium": return "bg-yellow-500/20 text-yellow-700";
      case "High": return "bg-red-500/20 text-red-700";
      default: return "bg-gray-500/20 text-gray-700";
    }
  };

  return (
    <div 
      className={cn(
        "card-gradient rounded-xl p-4 transition-transform hover:scale-[1.01]",
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{type}</p>
        </div>
        <span className="score-badge flex items-center">
          +{points}
          <TrendingUp className="ml-1 h-3 w-3" />
        </span>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration}</span>
        </div>
      </div>
      
      <div className="mt-3 flex justify-between items-center">
        <span className={cn(
          "text-xs px-2 py-1 rounded-full",
          getIntensityColor(intensity)
        )}>
          {intensity} Intensity
        </span>
      </div>
    </div>
  );
};

export default WorkoutCard;
