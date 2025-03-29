
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, UserPlus } from "lucide-react";

interface UserCardProps {
  name: string;
  username: string;
  avatar: string;
  level: number;
  isConnected?: boolean;
  onConnect?: () => void;
  onMessage?: () => void;
}

const UserCard = ({
  name,
  username,
  avatar,
  level,
  isConnected = false,
  onConnect,
  onMessage
}: UserCardProps) => {
  return (
    <div className="card-gradient rounded-xl p-4 transition-all hover:shadow-md">
      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12 border-2 border-fitstreaks-teal">
          <img src={avatar} alt={name} />
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate">{name}</p>
          <p className="text-sm text-muted-foreground truncate">@{username}</p>
          <div className="flex items-center mt-1">
            <div className="text-xs bg-gradient-to-r from-fitstreaks-purple to-fitstreaks-teal bg-clip-text text-transparent font-semibold">
              Level {level}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex space-x-2">
        {isConnected ? (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={onMessage}
          >
            <MessageSquare className="h-4 w-4 mr-1" />
            Message
          </Button>
        ) : (
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple"
            onClick={onConnect}
          >
            <UserPlus className="h-4 w-4 mr-1" />
            Connect
          </Button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
