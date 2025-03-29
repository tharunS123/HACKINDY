
import React, { useState } from "react";
import { Search, Users, Trophy, MapPin, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import Layout from "@/components/Layout";
import UserCard from "@/components/UserCard";
import LeagueCard from "@/components/LeagueCard";

// Mock Data
const mockUsers = [
  {
    id: 1,
    name: "Alex Johnson",
    username: "alexfit",
    avatar: "https://i.pravatar.cc/150?img=1",
    level: 5,
    isConnected: true
  },
  {
    id: 2,
    name: "Sara Wilson",
    username: "sarafit",
    avatar: "https://i.pravatar.cc/150?img=5",
    level: 7,
    isConnected: true
  },
  {
    id: 3,
    name: "Mike Reynolds",
    username: "mikefit",
    avatar: "https://i.pravatar.cc/150?img=12",
    level: 4,
    isConnected: false
  },
  {
    id: 4,
    name: "Jessica Kim",
    username: "jesskfit",
    avatar: "https://i.pravatar.cc/150?img=16",
    level: 6,
    isConnected: false
  },
  {
    id: 5,
    name: "David Chen",
    username: "davidfitness",
    avatar: "https://i.pravatar.cc/150?img=3",
    level: 8,
    isConnected: true
  },
  {
    id: 6,
    name: "Emma Stone",
    username: "emmafit",
    avatar: "https://i.pravatar.cc/150?img=9",
    level: 3,
    isConnected: false
  }
];

const mockLeagues = [
  {
    id: 1,
    name: "Morning Risers",
    description: "Complete 5 workouts before 8am",
    memberCount: 24,
    progress: 65,
    active: true,
    memberAvatars: [
      "https://i.pravatar.cc/150?img=33",
      "https://i.pravatar.cc/150?img=44",
      "https://i.pravatar.cc/150?img=55",
      "https://i.pravatar.cc/150?img=66"
    ]
  },
  {
    id: 2,
    name: "Cardio Kings",
    description: "Weekly challenge: 5K in under 25 minutes",
    memberCount: 18,
    progress: 30,
    active: true,
    memberAvatars: [
      "https://i.pravatar.cc/150?img=21",
      "https://i.pravatar.cc/150?img=22",
      "https://i.pravatar.cc/150?img=23"
    ]
  },
  {
    id: 3,
    name: "Strength Masters",
    description: "Deadlift your bodyweight",
    memberCount: 15,
    progress: 50,
    active: true,
    memberAvatars: [
      "https://i.pravatar.cc/150?img=11",
      "https://i.pravatar.cc/150?img=12",
      "https://i.pravatar.cc/150?img=13"
    ]
  },
  {
    id: 4,
    name: "Weekend Warriors",
    description: "Complete 3 workouts every weekend",
    memberCount: 32,
    active: false,
    memberAvatars: [
      "https://i.pravatar.cc/150?img=41",
      "https://i.pravatar.cc/150?img=42",
      "https://i.pravatar.cc/150?img=43",
      "https://i.pravatar.cc/150?img=44",
      "https://i.pravatar.cc/150?img=45"
    ]
  }
];

const mockLeaderboard = [
  {
    id: 1,
    name: "David Chen",
    username: "davidfitness",
    avatar: "https://i.pravatar.cc/150?img=3",
    points: 487,
    level: 8,
    streak: 12
  },
  {
    id: 2,
    name: "Sara Wilson",
    username: "sarafit",
    avatar: "https://i.pravatar.cc/150?img=5",
    points: 435,
    level: 7,
    streak: 9
  },
  {
    id: 3,
    name: "Alex Johnson",
    username: "alexfit",
    avatar: "https://i.pravatar.cc/150?img=1",
    points: 356,
    level: 5,
    streak: 5
  },
  {
    id: 4,
    name: "Jessica Kim",
    username: "jesskfit",
    avatar: "https://i.pravatar.cc/150?img=16",
    points: 329,
    level: 6,
    streak: 4
  },
  {
    id: 5,
    name: "Mike Reynolds",
    username: "mikefit",
    avatar: "https://i.pravatar.cc/150?img=12",
    points: 284,
    level: 4,
    streak: 3
  }
];

const Social = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [connectionFilter, setConnectionFilter] = useState("all");

  // Filter the connections based on search term and filter type
  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      connectionFilter === "all" || 
      (connectionFilter === "connected" && user.isConnected) ||
      (connectionFilter === "pending" && !user.isConnected);
      
    return matchesSearch && matchesFilter;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero-pattern text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Social</h1>
          <p className="mb-6 text-white/80">
            Connect with friends, join leagues, and compete on leaderboards
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="connections" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="connections">Connections</TabsTrigger>
              <TabsTrigger value="leagues">Green Leagues</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            </TabsList>
            
            {/* Connections Tab */}
            <TabsContent value="connections">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
                    <div className="relative w-full md:w-1/3">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search connections..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex border rounded-md overflow-hidden">
                        <Button 
                          variant={connectionFilter === "all" ? "default" : "ghost"}
                          onClick={() => setConnectionFilter("all")}
                          className={connectionFilter === "all" ? "bg-fitstreaks-teal" : ""}
                        >
                          All
                        </Button>
                        <Button 
                          variant={connectionFilter === "connected" ? "default" : "ghost"}
                          onClick={() => setConnectionFilter("connected")}
                          className={connectionFilter === "connected" ? "bg-fitstreaks-teal" : ""}
                        >
                          Connected
                        </Button>
                        <Button 
                          variant={connectionFilter === "pending" ? "default" : "ghost"}
                          onClick={() => setConnectionFilter("pending")}
                          className={connectionFilter === "pending" ? "bg-fitstreaks-teal" : ""}
                        >
                          Suggested
                        </Button>
                      </div>
                      <Button variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Nearby
                      </Button>
                    </div>
                  </div>
                  
                  {/* Search Results */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredUsers.map((user) => (
                      <UserCard 
                        key={user.id} 
                        {...user} 
                        onConnect={() => console.log(`Connect with ${user.name}`)} 
                        onMessage={() => console.log(`Message ${user.name}`)}
                      />
                    ))}
                  </div>
                  
                  {filteredUsers.length === 0 && (
                    <div className="text-center py-12">
                      <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium">No users found</h3>
                      <p className="text-muted-foreground">
                        Try adjusting your search term.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Leagues Tab */}
            <TabsContent value="leagues">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Green Leagues</h2>
                    <Button className="bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple">
                      <Trophy className="mr-2 h-4 w-4" />
                      Create League
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockLeagues.map((league) => (
                      <LeagueCard 
                        key={league.id} 
                        {...league} 
                        onClick={() => console.log(`View league: ${league.name}`)}
                      />
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="link" className="text-fitstreaks-teal">
                      Explore More Leagues <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Leaderboard Tab */}
            <TabsContent value="leaderboard">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Global Leaderboard</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" className="text-sm flex items-center">
                        <Filter className="h-4 w-4 mr-2" />
                        This Month 
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="text-sm flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Friends Only
                      </Button>
                    </div>
                  </div>
                  
                  <div className="overflow-hidden rounded-lg border">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="p-3 text-left font-medium text-sm w-16">Rank</th>
                          <th className="p-3 text-left font-medium text-sm">User</th>
                          <th className="p-3 text-left font-medium text-sm">Points</th>
                          <th className="p-3 text-left font-medium text-sm">Streak</th>
                          <th className="p-3 text-left font-medium text-sm">Level</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {mockLeaderboard.map((user, index) => (
                          <tr key={user.id} className={user.username === "alexfit" ? "bg-fitstreaks-teal/10" : ""}>
                            <td className="p-3">
                              {index === 0 ? (
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-white font-bold text-xs">
                                  1
                                </div>
                              ) : index === 1 ? (
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-white font-bold text-xs">
                                  2
                                </div>
                              ) : index === 2 ? (
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-white font-bold text-xs">
                                  3
                                </div>
                              ) : (
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground font-medium text-xs">
                                  {index + 1}
                                </div>
                              )}
                            </td>
                            <td className="p-3">
                              <div className="flex items-center">
                                <Avatar className="h-8 w-8 mr-2">
                                  <img src={user.avatar} alt={user.name} />
                                </Avatar>
                                <div>
                                  <p className="font-medium text-sm">{user.name}</p>
                                  <p className="text-xs text-muted-foreground">@{user.username}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 font-semibold">{user.points}</td>
                            <td className="p-3">
                              <div className="flex items-center">
                                <span className="flex items-center text-sm">
                                  <span className={user.streak >= 5 ? "text-fitstreaks-green font-semibold" : ""}>
                                    {user.streak} days
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="p-3">
                              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fitstreaks-purple/20 text-fitstreaks-purple">
                                Level {user.level}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="link" className="text-fitstreaks-teal">
                      See Full Leaderboard
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Social;
