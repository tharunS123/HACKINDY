import React from "react";
import { Button } from "@/components/ui/button";
import { Activity, Dumbbell, Users, Trophy } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen bg-gradient-to-br from-fitstreaks-charcoal to-fitstreaks-purple/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Activity className="h-16 w-16 text-fitstreaks-teal" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fitstreaks-teal to-white bg-clip-text text-transparent">
            Welcome to FitStreaks
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Track your fitness journey, maintain streaks, and connect with a community of fitness enthusiasts.
          </p>
          <Button
            onClick={() => loginWithRedirect()}
            className="bg-white text-fitstreaks-purple hover:bg-white/90 text-lg px-8 py-6"
            size="lg"
          >
            Get Started with Google
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Dumbbell className="h-12 w-12 text-fitstreaks-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Track Workouts</h3>
              <p className="text-white/70">Log your workouts, track progress, and achieve your fitness goals.</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-fitstreaks-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Social Community</h3>
              <p className="text-white/70">Connect with friends, join challenges, and stay motivated together.</p>
            </div>
            <div className="text-center p-6">
              <Trophy className="h-12 w-12 text-fitstreaks-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Earn Rewards</h3>
              <p className="text-white/70">Build streaks, earn points, and unlock achievements as you progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start your fitness journey?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are reaching their fitness potential with our gamified approach.
          </p>
          <Button
            onClick={() => loginWithRedirect()}
            className="bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple hover:opacity-90 text-lg px-8 py-6"
            size="lg"
          >
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home; 