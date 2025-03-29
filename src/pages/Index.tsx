import React from "react";
import { Link } from "react-router-dom";
import { Activity, ChevronRight, Dumbbell, Users, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import StreakCounter from "@/components/StreakCounter";
import PointsBadge from "@/components/PointsBadge";
import WorkoutCard from "@/components/WorkoutCard";
import UserCard from "@/components/UserCard";
import LeagueCard from "@/components/LeagueCard";
import { useAuth0 } from "@auth0/auth0-react";

// Mock Data
const mockWorkouts = [
  {
    id: 1,
    title: "Morning HIIT",
    type: "Cardio",
    date: "Today",
    duration: "30 min",
    intensity: "High" as const,
    points: 8
  },
  {
    id: 2,
    title: "Upper Body",
    type: "Strength",
    date: "Yesterday",
    duration: "45 min",
    intensity: "Medium" as const,
    points: 6
  },
  {
    id: 3,
    title: "Leg Day",
    type: "Strength",
    date: "2 days ago",
    duration: "50 min",
    intensity: "High" as const,
    points: 10
  }
];

const mockFriends = [
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
  }
];

const Dashboard = () => {
  const { user } = useAuth0();
  const firstName = user?.name?.split(' ')[0] || 'there';

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-pattern text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-2">Welcome back, {firstName}!</h1>
              <p className="mb-6 text-white/80">
                You're making great progress on your fitness journey. Keep up the momentum!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <StreakCounter count={5} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 shadow-sm" />
                <PointsBadge points={234} level={3} />
              </div>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <Button 
                  className="bg-white text-fitstreaks-purple hover:bg-white/90"
                >
                  <Dumbbell className="mr-2 h-4 w-4" />
                  Log New Workout
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  View Schedule
                </Button>
              </div>
            </div>
            
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-fitstreaks-coral rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-fitstreaks-teal rounded-full opacity-20 animate-pulse"></div>
                <div className="relative z-10">
                  <Activity className="h-32 w-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-10 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Workouts */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Recent Workouts</h2>
                    <Link 
                      to="/workouts" 
                      className="text-sm text-fitstreaks-teal hover:text-fitstreaks-purple flex items-center"
                    >
                      View All <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockWorkouts.map((workout) => (
                      <WorkoutCard key={workout.id} {...workout} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Friends */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Friends</h2>
                    <Link 
                      to="/social" 
                      className="text-sm text-fitstreaks-teal hover:text-fitstreaks-purple flex items-center"
                    >
                      View All <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {mockFriends.map((friend) => (
                      <UserCard 
                        key={friend.id} 
                        {...friend} 
                        onConnect={() => console.log(`Connect with ${friend.name}`)} 
                        onMessage={() => console.log(`Message ${friend.name}`)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Green Leagues */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Green Leagues</h2>
                    <Link 
                      to="/social" 
                      className="text-sm text-fitstreaks-teal hover:text-fitstreaks-purple flex items-center"
                    >
                      Explore <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {mockLeagues.map((league) => (
                      <LeagueCard 
                        key={league.id} 
                        {...league} 
                        onClick={() => console.log(`View league: ${league.name}`)}
                      />
                    ))}
                    <Button 
                      variant="outline" 
                      className="w-full mt-2 border-dashed border-fitstreaks-teal text-fitstreaks-teal"
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Create New League
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Goals Section */}
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Your Progress</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-fitstreaks-teal to-fitstreaks-green/60 text-white">
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 mb-2" />
                <h3 className="text-xl font-semibold">120 Points</h3>
                <p className="text-white/80">Earned this month</p>
                <p className="text-sm mt-4 font-medium">+35% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 mb-2 text-fitstreaks-purple" />
                <h3 className="text-xl font-semibold">12 Workouts</h3>
                <p className="text-muted-foreground">Completed this month</p>
                <p className="text-sm mt-4 font-medium text-fitstreaks-green">On track for your monthly goal</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Dumbbell className="h-8 w-8 mb-2 text-fitstreaks-coral" />
                <h3 className="text-xl font-semibold">45 kg</h3>
                <p className="text-muted-foreground">Bench press PR</p>
                <p className="text-sm mt-4 font-medium text-fitstreaks-teal">Up 5 kg from your last PR</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to achieve your fitness goals?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are reaching their fitness potential with our gamified approach and supportive community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple hover:opacity-90 transition-opacity"
              size="lg"
            >
              <Activity className="mr-2 h-5 w-5" />
              Start Tracking Today
            </Button>
            <Button 
              variant="outline"
              size="lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Join a Challenge
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
