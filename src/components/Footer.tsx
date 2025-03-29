
import React from "react";
import { Activity, Heart, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fitstreaks-charcoal text-white py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="h-6 w-6 text-fitstreaks-teal" />
              <span className="font-bold text-xl">FitStreaks</span>
            </div>
            <p className="text-gray-400 text-sm">
              Track your fitness journey with our gamified workout tracking app. Earn points, maintain streaks, and connect with fitness enthusiasts.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">
                <a href="#">Streak System</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Social Challenges</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Workout Tracking</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">AI Training Plans</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">
                <a href="#">Find Friends</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Green Leagues</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Leaderboards</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Events</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">
                <a href="#">Help Center</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Terms of Service</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FitStreaks. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-fitstreaks-coral" />
            <span>for fitness enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
