
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Home } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-white to-fitstreaks-teal/5 py-16">
        <div className="text-center px-4">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-fitstreaks-teal/20 rounded-full animate-ping"></div>
              <Activity className="h-20 w-20 text-fitstreaks-teal relative z-10" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple bg-clip-text text-transparent">404</h1>
          <p className="text-xl text-gray-800 mb-6">Oops! This workout page doesn't exist</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you're looking for might have been moved or removed. 
            Let's get you back on track with your fitness journey.
          </p>
          <Button 
            className="bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple hover:opacity-90 transition-opacity"
            size="lg"
            onClick={() => window.location.href = '/'}
          >
            <Home className="mr-2 h-5 w-5" />
            Return to Dashboard
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
