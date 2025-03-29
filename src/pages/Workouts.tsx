
import React, { useState } from "react";
import { Dumbbell, Filter, Plus, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import WorkoutCard from "@/components/WorkoutCard";

// Mock Data for workout history
const mockWorkoutHistory = [
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
  },
  {
    id: 4,
    title: "Core Workout",
    type: "Strength",
    date: "3 days ago",
    duration: "25 min",
    intensity: "Medium" as const,
    points: 5
  },
  {
    id: 5,
    title: "Yoga Flow",
    type: "Flexibility",
    date: "4 days ago",
    duration: "40 min",
    intensity: "Low" as const,
    points: 4
  },
  {
    id: 6,
    title: "5K Run",
    type: "Cardio",
    date: "1 week ago",
    duration: "28 min",
    intensity: "High" as const,
    points: 9
  }
];

// Mock Data for workout templates
const mockWorkoutTemplates = [
  {
    id: 1,
    title: "Full Body Strength",
    type: "Strength",
    duration: "45 min",
    intensity: "Medium" as const,
    lastUsed: "1 week ago"
  },
  {
    id: 2,
    title: "HIIT Cardio",
    type: "Cardio",
    duration: "30 min",
    intensity: "High" as const,
    lastUsed: "3 days ago"
  },
  {
    id: 3,
    title: "Yoga Flexibility",
    type: "Flexibility",
    duration: "40 min",
    intensity: "Low" as const,
    lastUsed: "2 weeks ago"
  }
];

const Workouts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredWorkouts = mockWorkoutHistory.filter(workout => {
    const matchesSearch = workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workout.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || workout.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero-pattern text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Workouts</h1>
          <p className="mb-6 text-white/80">
            Track, manage, and plan your fitness journey
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-white text-fitstreaks-purple hover:bg-white/90"
            >
              <Plus className="mr-2 h-4 w-4" />
              Log New Workout
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Workout
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
            </TabsList>
            
            {/* Workout History */}
            <TabsContent value="history">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
                    <div className="relative w-full md:w-1/3">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search workouts..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Select value={filterType} onValueChange={setFilterType}>
                        <SelectTrigger className="w-[180px]">
                          <Filter className="h-4 w-4 mr-2" />
                          <SelectValue placeholder="Filter by type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="cardio">Cardio</SelectItem>
                          <SelectItem value="strength">Strength</SelectItem>
                          <SelectItem value="flexibility">Flexibility</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Filter by Date
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredWorkouts.map((workout) => (
                      <WorkoutCard key={workout.id} {...workout} />
                    ))}
                  </div>
                  
                  {filteredWorkouts.length === 0 && (
                    <div className="text-center py-12">
                      <Dumbbell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium">No workouts found</h3>
                      <p className="text-muted-foreground">
                        Try adjusting your filters or search a different term.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Workout Templates */}
            <TabsContent value="templates">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Your Workout Templates</h2>
                    <Button className="bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Template
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockWorkoutTemplates.map((template) => (
                      <div 
                        key={template.id}
                        className="card-gradient rounded-xl p-4 transition-transform hover:scale-[1.01]"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg">{template.title}</h3>
                            <p className="text-sm text-muted-foreground">{template.type}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            template.intensity === "High" ? "bg-red-500/20 text-red-700" :
                            template.intensity === "Medium" ? "bg-yellow-500/20 text-yellow-700" :
                            "bg-green-500/20 text-green-700"
                          }`}>
                            {template.intensity}
                          </span>
                        </div>
                        
                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            {template.duration}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Last used: {template.lastUsed}
                          </div>
                        </div>
                        
                        <div className="mt-4 flex space-x-2">
                          <Button variant="default" size="sm" className="flex-1">
                            Use Template
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    {/* Create New Template Card */}
                    <div className="border-2 border-dashed border-muted rounded-xl p-4 flex items-center justify-center min-h-[200px] hover:border-fitstreaks-teal transition-colors">
                      <div className="text-center">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-2">
                          <Plus className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <h3 className="font-medium">New Template</h3>
                        <p className="text-sm text-muted-foreground">Create custom workout</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Workout Stats */}
            <TabsContent value="stats">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Your Workout Statistics</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-fitstreaks-teal/10 p-4 rounded-xl">
                      <h3 className="text-lg font-medium text-fitstreaks-teal">Total Workouts</h3>
                      <p className="text-3xl font-bold">32</p>
                      <p className="text-sm text-muted-foreground">This month</p>
                    </div>
                    
                    <div className="bg-fitstreaks-purple/10 p-4 rounded-xl">
                      <h3 className="text-lg font-medium text-fitstreaks-purple">Points Earned</h3>
                      <p className="text-3xl font-bold">215</p>
                      <p className="text-sm text-muted-foreground">From workouts</p>
                    </div>
                    
                    <div className="bg-fitstreaks-green/10 p-4 rounded-xl">
                      <h3 className="text-lg font-medium text-fitstreaks-green">Longest Streak</h3>
                      <p className="text-3xl font-bold">7 days</p>
                      <p className="text-sm text-muted-foreground">Consecutive workouts</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-xl p-6 text-center">
                    <h3 className="text-lg font-medium mb-2">Workout Distribution</h3>
                    <p className="text-sm text-muted-foreground mb-6">Placeholder for workout distribution chart</p>
                    <div className="h-48 flex items-center justify-center border border-dashed rounded-lg">
                      <p className="text-muted-foreground">Chart visualization would go here</p>
                    </div>
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

export default Workouts;
