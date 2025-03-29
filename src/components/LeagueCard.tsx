
import React from "react";
import { Users, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

interface LeagueCardProps {
  name: string;
  description: string;
  memberCount: number;
  progress?: number;
  active: boolean;
  memberAvatars: string[];
  onClick?: () => void;
}

const LeagueCard = ({
  name,
  description,
  memberCount,
  progress = 0,
  active,
  memberAvatars,
  onClick
}: LeagueCardProps) => {
  return (
    <div className="card-gradient rounded-xl p-4 transition-all hover:shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-full ${active ? 'bg-fitstreaks-green/20' : 'bg-fitstreaks-purple/20'}`}>
            {active ? (
              <Trophy className={`h-5 w-5 text-fitstreaks-green`} />
            ) : (
              <Users className={`h-5 w-5 text-fitstreaks-purple`} />
            )}
          </div>
          <div>
            <h3 className="font-medium text-base">{name}</h3>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-3">
        <div className="flex justify-between items-center text-xs mb-1">
          <span>{memberCount} members</span>
          {progress > 0 && <span>{progress}% complete</span>}
        </div>
        
        {progress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
            <div 
              className="bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-green h-1.5 rounded-full" 
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex -space-x-2">
            {memberAvatars.slice(0, 3).map((avatar, index) => (
              <Avatar key={index} className="border-2 border-white h-6 w-6">
                <img src={avatar} alt="Member" />
              </Avatar>
            ))}
            {memberAvatars.length > 3 && (
              <div className="h-6 w-6 rounded-full bg-fitstreaks-charcoal text-white flex items-center justify-center text-xs border-2 border-white">
                +{memberAvatars.length - 3}
              </div>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-fitstreaks-teal hover:text-fitstreaks-purple transition-colors"
            onClick={onClick}
          >
            View Details
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
