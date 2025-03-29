
import React from "react";
import { Link } from "react-router-dom";
import { Activity, Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-fitstreaks-purple" />
              <span className="font-bold text-xl bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple bg-clip-text text-transparent">
                FitStreaks
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-fitstreaks-teal transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              to="/workouts" 
              className="text-sm font-medium hover:text-fitstreaks-teal transition-colors"
            >
              Workouts
            </Link>
            <Link 
              to="/social" 
              className="text-sm font-medium hover:text-fitstreaks-teal transition-colors"
            >
              Social
            </Link>
            <Link 
              to="/profile" 
              className="text-sm font-medium hover:text-fitstreaks-teal transition-colors"
            >
              Profile
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-fitstreaks-coral rounded-full" />
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="hidden md:inline-flex bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple hover:opacity-90 transition-opacity"
            >
              Log Workout
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg animate-slide-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              >
                Dashboard
              </Link>
              <Link 
                to="/workouts" 
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              >
                Workouts
              </Link>
              <Link 
                to="/social" 
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              >
                Social
              </Link>
              <Link 
                to="/profile" 
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              >
                Profile
              </Link>
              <div className="pt-2 border-t flex items-center justify-between">
                <Button variant="ghost" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
              </div>
              <Button 
                variant="default" 
                className="w-full bg-gradient-to-r from-fitstreaks-teal to-fitstreaks-purple"
              >
                Log Workout
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
