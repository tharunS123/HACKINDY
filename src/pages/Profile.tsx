
import React from "react";
import { 
  Activity, Settings, Award, Calendar, TrendingUp, 
  Dumbbell, Clock, User, Edit, MapPin, Link as LinkIcon, MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import Layout from "@/components/Layout";
import StreakCounter from "@/components/StreakCounter";
import PointsBadge from "@/components/PointsBadge";

// Mock achievements data
const mockAchievements = [
  {
    id: 1,
    title: "5-Day Streak",
    description: "Complete workouts for 5 consecutive days",
    icon: "flame",
    completed: true,
    date: "2 days ago"
  },
  {
    id: 2,
    title: "Heavy Lifter",
    description: "Lift 100kg in any exercise",
    icon: "dumbbell",
    completed: true,
    date: "1 week ago"
  },
  {
    id: 3,
    title: "Early Bird",
    description: "Complete 10 workouts before 8am",
    icon: "sunrise",
    completed: true,
    date: "2 weeks ago"
  },
  {
    id: 4,
    title: "Marathon Runner",
    description: "Run a total of 42km",
    icon: "running",
    completed: false,
    progress: 65
  },
  {
    id: 5,
    title: "Social Butterfly",
    description: "Connect with 10 friends",
    icon: "users",
    completed: false,
    progress: 40
  }
];

const mockStats = [
  {
    label: "Total Workouts",
    value: 48,
    icon: "activity",
    change: "+12% from last month"
  },
  {
    label: "Avg. Duration",
    value: "38 min",
    icon: "clock",
    change: "+5 min from last month"
  },
  {
    label: "Total Points",
    value: 356,
    icon: "award",
    change: "+85 this month"
  },
  {
    label: "Best Streak",
    value: "9 days",
    icon: "flame",
    change: "Current: 5 days"
  }
];

const renderIcon = (iconName: string) => {
  const size = "h-5 w-5";
  switch (iconName) {
    case "activity": return <Activity className={size} />;
    case "award": return <Award className={size} />;
    case "dumbbell": return <Dumbbell className={size} />;
    case "flame": return <Activity className={size} />;
    case "clock": return <Clock className={size} />;
    case "calendar": return <Calendar className={size} />;
    case "trending-up": return <TrendingUp className={size} />;
    default: return <Activity className={size} />;
  }
};

const Profile = () => {
  return (
    <Layout>
      {/* Profile Header */}
      <section className="bg-hero-pattern text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-24 w-24 border-4 border-white">
              <img src="https://i.pravatar.cc/150?img=1" alt="Alex" />
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-1">Alex Johnson</h1>
                  <p className="text-white/80">@alexfit</p>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  <a href="#" className="text-sm hover:underline">fitstreaks.com/alexfit</a>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span className="text-sm">Member since May 2023</span>
                </div>
              </div>
              
              <p className="mb-4 max-w-2xl">
                Fitness enthusiast focused on strength training and running. 
                Working towards my first half marathon and improving my deadlift PR.
                Let's connect and motivate each other!
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button size="sm" className="bg-white text-fitstreaks-purple hover:bg-white/90">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message
                </Button>
                <Button size="sm" variant="secondary" className="bg-white/20">
                  124 Connections
                </Button>
                <Button size="sm" variant="secondary" className="bg-white/20">
                  3 Active Leagues
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {mockStats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-fitstreaks-teal/10 flex items-center justify-center">
                    {renderIcon(stat.icon)}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.change}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Profile Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Points & Streaks */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Progress</h2>
                  <div className="space-y-4">
                    <StreakCounter count={5} />
                    <div className="border-t pt-4">
                      <PointsBadge points={356} level={5} />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Personal Bests */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Personal Bests</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Bench Press</p>
                        <p className="text-sm text-muted-foreground">Strength</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-fitstreaks-teal">85 kg</p>
                        <p className="text-xs text-muted-foreground">Jul 15, 2023</p>
                      </div>
                    </div>
                    <div className="border-t pt-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium">5K Run</p>
                        <p className="text-sm text-muted-foreground">Cardio</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-fitstreaks-teal">22:45</p>
                        <p className="text-xs text-muted-foreground">Aug 8, 2023</p>
                      </div>
                    </div>
                    <div className="border-t pt-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Deadlift</p>
                        <p className="text-sm text-muted-foreground">Strength</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-fitstreaks-teal">140 kg</p>
                        <p className="text-xs text-muted-foreground">Sep 2, 2023</p>
                      </div>
                    </div>
                    <div className="border-t pt-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Plank</p>
                        <p className="text-sm text-muted-foreground">Endurance</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-fitstreaks-teal">3:45</p>
                        <p className="text-xs text-muted-foreground">Sep 12, 2023</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column (Wider) */}
            <div className="md:col-span-2 space-y-6">
              {/* Tabs for different profile sections */}
              <Tabs defaultValue="achievements" className="w-full">
                <TabsList>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="leagues">Leagues</TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                </TabsList>
                
                {/* Achievements Tab */}
                <TabsContent value="achievements">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {mockAchievements.map((achievement) => (
                          <div 
                            key={achievement.id} 
                            className={`border rounded-xl p-4 ${achievement.completed ? 'border-fitstreaks-green/30 bg-fitstreaks-green/5' : 'border-gray-200'}`}
                          >
                            <div className="flex items-start">
                              <div className={`mr-3 p-2 rounded-full ${achievement.completed ? 'bg-fitstreaks-green/20' : 'bg-gray-100'}`}>
                                {renderIcon(achievement.icon)}
                              </div>
                              <div>
                                <h3 className="font-medium">{achievement.title}</h3>
                                <p className="text-sm text-muted-foreground">{achievement.description}</p>
                                {achievement.completed ? (
                                  <p className="text-xs text-fitstreaks-green mt-2">
                                    Completed {achievement.date}
                                  </p>
                                ) : (
                                  <div className="mt-2">
                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                      <div 
                                        className="bg-fitstreaks-teal h-1.5 rounded-full" 
                                        style={{ width: `${achievement.progress}%` }}
                                      />
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {achievement.progress}% completed
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        {/* More Achievements Placeholder */}
                        <div className="border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center">
                          <div className="text-center">
                            <Award className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                            <p className="font-medium">More to unlock!</p>
                            <p className="text-sm text-muted-foreground">Keep working out to discover more achievements</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Activity Tab (Placeholder) */}
                <TabsContent value="activity">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="h-10 w-10 rounded-full bg-fitstreaks-teal/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <Dumbbell className="h-5 w-5 text-fitstreaks-teal" />
                          </div>
                          <div>
                            <p className="font-medium">Completed Upper Body workout</p>
                            <p className="text-sm text-muted-foreground">Today at 7:30 AM • 45 minutes • 6 points</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="h-10 w-10 rounded-full bg-fitstreaks-purple/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <Award className="h-5 w-5 text-fitstreaks-purple" />
                          </div>
                          <div>
                            <p className="font-medium">Earned "5-Day Streak" achievement</p>
                            <p className="text-sm text-muted-foreground">Yesterday at 9:15 PM</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="h-10 w-10 rounded-full bg-fitstreaks-teal/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <Activity className="h-5 w-5 text-fitstreaks-teal" />
                          </div>
                          <div>
                            <p className="font-medium">Completed Morning HIIT workout</p>
                            <p className="text-sm text-muted-foreground">Yesterday at 6:45 AM • 30 minutes • 8 points</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="h-10 w-10 rounded-full bg-fitstreaks-green/10 flex items-center justify-center mr-3 flex-shrink-0">
                            <User className="h-5 w-5 text-fitstreaks-green" />
                          </div>
                          <div>
                            <p className="font-medium">Connected with Mike Reynolds</p>
                            <p className="text-sm text-muted-foreground">2 days ago</p>
                          </div>
                        </div>
                      </div>
                      <Button variant="link" className="w-full mt-4 text-fitstreaks-teal">
                        View All Activity
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Leagues Tab (Placeholder) */}
                <TabsContent value="leagues">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Your Leagues</h2>
                      <div className="space-y-4">
                        <div className="border rounded-xl p-4">
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <div className="p-2 rounded-full bg-fitstreaks-green/20 mr-3">
                                <Trophy className="h-5 w-5 text-fitstreaks-green" />
                              </div>
                              <div>
                                <h3 className="font-medium">Morning Risers</h3>
                                <p className="text-sm text-muted-foreground">Complete 5 workouts before 8am</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground">Progress</p>
                              <p className="font-bold">3/5</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="bg-fitstreaks-green h-1.5 rounded-full" 
                                style={{ width: '60%' }}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-xl p-4">
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <div className="p-2 rounded-full bg-fitstreaks-purple/20 mr-3">
                                <Trophy className="h-5 w-5 text-fitstreaks-purple" />
                              </div>
                              <div>
                                <h3 className="font-medium">Cardio Kings</h3>
                                <p className="text-sm text-muted-foreground">Weekly challenge: 5K in under 25 minutes</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground">Your Time</p>
                              <p className="font-bold">26:12</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className="bg-fitstreaks-purple h-1.5 rounded-full" 
                                style={{ width: '90%' }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <Trophy className="mr-2 h-4 w-4" />
                        Find More Leagues
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* About Tab (Placeholder) */}
                <TabsContent value="about">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">About Me</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-1">Bio</h3>
                          <p>I'm a software developer by day and fitness enthusiast by... also day (and sometimes evening). Started my fitness journey 2 years ago focusing on strength training, and recently getting into running. Currently training for my first half marathon!</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-1">Fitness Goals</h3>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Run a half marathon in under 2 hours</li>
                            <li>Deadlift 2x bodyweight</li>
                            <li>Complete 30-day yoga challenge</li>
                            <li>Improve overall flexibility</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground mb-1">Favorite Activities</h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-fitstreaks-teal/10 text-fitstreaks-teal px-2 py-1 rounded-full text-sm">Weight Training</span>
                            <span className="bg-fitstreaks-purple/10 text-fitstreaks-purple px-2 py-1 rounded-full text-sm">Running</span>
                            <span className="bg-fitstreaks-green/10 text-fitstreaks-green px-2 py-1 rounded-full text-sm">Hiking</span>
                            <span className="bg-fitstreaks-coral/10 text-fitstreaks-coral px-2 py-1 rounded-full text-sm">Yoga</span>
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">Swimming</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
