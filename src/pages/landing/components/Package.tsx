import React from "react";
import {
  ArrowRight,
  Clock,
  Star,
  DollarSign,
  Briefcase,
  Check,
} from "lucide-react";

import hajjEconomyImg from "../assets/room1.png";
import hajjVipImg from "../assets/room2.png";
import umrahMonthlyImg from "../assets/room3.png";
import visaProcessingImg from "../assets/visa.png";

// Define the structure for a single package card
interface PackageCardProps {
  type: "Hajj" | "Umrah" | "Service";
  title: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
  imageSrc: string; // Added image source prop
}

// --- 1. Static Component: PackageCard ---
const PackageCard: React.FC<PackageCardProps> = ({
  type,
  title,
  price,
  duration,
  features,
  isPopular = false,
  imageSrc,
}) => {
  const isService = type === "Service";
  //   const mainColor = isService ? "text-cyan-500" : "text-blue-500";
  const gradientClass = isService
    ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
    : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600";

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col h-full">
      {/* Header Image/Type */}
      <div className="relative h-48">
        {/* Actual Image Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          {/* Dark Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 text-xs font-bold py-1 px-3 rounded-full flex items-center space-x-1">
            <Star className="w-3 h-3 fill-gray-900" />
            <span>Most Popular</span>
          </div>
        )}

        {/* Type Tag */}
        <span
          className={`absolute top-4 left-4 text-xs font-bold py-1 px-3 rounded-full text-white ${
            isService ? "bg-cyan-600" : "bg-blue-600"
          }`}
        >
          {type}
        </span>

        {/* Title */}
        <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>

      {/* Price and Details */}
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-end mb-4 border-b pb-4">
          <p className="text-3xl font-extrabold text-gray-900">{price}</p>
          <p className="flex items-center space-x-1 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </p>
        </div>

        {/* Features List (CORRECTED ICON STYLING) */}
        <ul className="space-y-3 mb-6 grow">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start space-x-2 text-gray-700 text-sm"
            >
              {/* Custom Icon: White Checkmark on Sky Blue Background */}
              <div className="p-0.5 rounded-full bg-sky-500 mt-1 shrink-0">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={`w-full flex items-center justify-center space-x-2 ${gradientClass} text-white font-bold py-3 rounded-lg transition duration-300 shadow-md`}
        >
          <DollarSign className="w-5 h-5" />
          <span>Book This Package</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// --- 2. Main Section Component ---
const PackagesSection: React.FC = () => {
  const umrahPackage = {
    type: "Umrah" as const,
    title: "Monthly Departures",
    price: "$2,999",
    duration: "10 Days",
    imageSrc: umrahMonthlyImg,
    features: [
      "Private hotel rooms (4-star)",
      "Round-trip flights",
      "Breakfast & dinner included",
      "Professional guide",
      "Shared transportation",
      "Umrah visa processing",
      "Ziyarat tours included",
    ],
  };

  const visaService = {
    type: "Service" as const,
    title: "Visa Processing",
    price: "$299",
    duration: "5–7 Days",
    imageSrc: visaProcessingImg,
    features: [
      "Fast-track processing",
      "Document verification",
      "Application submission",
      "Status tracking",
      "Expert consultation",
      "Money-back guarantee",
    ],
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
            Our Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Choose Your <span className="text-blue-600">Sacred Journey</span>
          </h2>
          <p className="mt-3 text-md text-gray-500 max-w-3xl mx-auto">
            Carefully crafted packages to suit every pilgrim's needs and budget.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {/* Hajj Economy Package (From image 872e02) */}
          <PackageCard
            type="Hajj"
            title="Economy Package"
            price="$6,999"
            duration="14 Days"
            imageSrc={hajjEconomyImg}
            features={[
              "Shared accommodation (4-star)",
              "Round-trip economy flights",
              "Daily meals included",
              "Experienced guide support",
              "Group transportation",
              "Visa processing assistance",
              "Group size limit (40 pilgrims)",
            ]}
          />

          {/* Hajj VIP Package (From image 872e02) */}
          <PackageCard
            type="Hajj"
            title="VIP Package"
            price="$14,999"
            duration="18 Days"
            isPopular={true}
            imageSrc={hajjVipImg}
            features={[
              "Private 5-star hotel rooms",
              "Business class flights",
              "Premium buffet meals",
              "Personal assistant & guide",
              "Private luxury transport",
              "VIP visa processing",
              "Exclusive Ziyarat tours",
              "Premium gift package",
            ]}
          />

          {/* Umrah Package (From image 872e64) */}
          <PackageCard {...umrahPackage} />

          {/* Visa Service (From image 872e64) */}
          <PackageCard {...visaService} />

          {/* Note: If you want 4 cards in the layout, ensure the grid is set to grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 or leave it as it is for a maximum of 3 per row on XL screens. */}
        </div>

        {/* Custom Package CTA Band */}
        <div className="bg-linear-to-r from-blue-600 to-cyan-600 p-8 rounded-xl shadow-2xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Need a Custom Package?
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            We can create a personalized pilgrimage experience tailored to your
            specific needs and preferences.
          </p>
          <button className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
            <Briefcase className="w-5 h-5" />
            <span>Contact Our Team</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
