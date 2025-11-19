import React from "react";
import { ArrowRight, Star, DollarSign } from "lucide-react";
import HajjBackground from "../assets/hajj-background.png";
import Navbar from "./Navbar";
// Assuming HajjNavbar is imported in the main layout file

// 1. Static Component: Stat (Reusable for the bottom row of numbers)
interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div className="text-center">
    {/* Ensure value is large and prominent */}
    <p className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
      {value}
    </p>
    {/* Ensure label remains legible */}
    <p className="text-gray-300 text-xs sm:text-sm font-medium">{label}</p>
  </div>
);

// 2. Main Section Component
const HajjHeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center text-white pt-20" // Added pt-20 to account for fixed navbar
      id="hero"
    >
      <Navbar />
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HajjBackground})` }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Stronger Bottom Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* License Badge */}
        <div className="hidden md:inline-flex items-center space-x-2 bg-yellow-500/10 text-yellow-400 text-xs sm:text-sm font-semibold py-1 px-3 sm:px-4 rounded-full mb-6 border border-yellow-500/50">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-500 stroke-yellow-500" />
          <span className="truncate">
            Ministry of Hajj Licensed • 15+ Years Experience
          </span>
        </div>

        {/* Main Headline (Adjusted text size for mobile) */}
        <h1 className="text-4xl xs:text-5xl md:text-7xl font-extrabold leading-snug tracking-tight mb-4 sm:mb-6">
          Begin Your <br />
          <span className="text-yellow-400">Blessed Journey</span>
        </h1>

        {/* Subtitle (Adjusted text size for mobile) */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 max-w-3xl mx-auto px-2">
          Experience a spiritually enriching pilgrimage with our comprehensive
          Hajj & Umrah packages. Safe, comfortable, and guided every step of the
          way.
        </p>

        {/* Call-to-Action Buttons (Stacks vertically on mobile) */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          {/* Primary Button */}
          <button className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-xl hover:scale-[1.02] active:scale-100 cursor-pointer min-w-[200px]">
            <span>Start Registration</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </button>

          {/* Secondary Button */}
          <button className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/30 transition duration-300 shadow-xl hover:scale-[1.02] active:scale-100 cursor-pointer min-w-[200px]">
            <DollarSign className="w-5 h-5" />
            <span>View Packages</span>
          </button>
        </div>

        {/* Statistics Row (Uses 2 columns on mobile, 4 on small screens and up) */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <Stat value="25,000+" label="Happy Pilgrims" />
            <Stat value="15+" label="Years Experience" />
            <Stat value="4.9/5" label="Customer Rating" />
            <Stat value="100%" label="Licensed & Insured" />
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <ArrowRight className="w-6 h-6 text-white rotate-90 opacity-70 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HajjHeroSection;
