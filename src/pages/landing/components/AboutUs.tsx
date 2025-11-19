import React from "react";
import {
  Shield,
  BookOpen,
  Clock,
  Lightbulb,
  MapPin,
  Star,
  UserCheck,
  Heart,
  Users,
} from "lucide-react";

// Assuming the image of the team/pilgrims is here
import teamImage from "../assets/hajjTeam.png";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  bgColor,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 min-h-[150px]">
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${bgColor}`}
    >
      {icon}
    </div>
    <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

// --- 2. Static Component: Stat (The bottom blue band) ---
interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const BottomStat: React.FC<StatProps> = ({ value, label, icon }) => (
  <div className="text-center text-white p-4 sm:p-6">
    {icon}
    <p className="text-3xl sm:text-4xl font-extrabold mt-2 mb-1">{value}</p>
    <p className="text-gray-200 text-sm font-medium">{label}</p>
  </div>
);

// --- 3. Main Section Component ---
const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="bg-white pt-16 md:pt-24" id="why-us">
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image and Rating Badge */}
          <div className="relative order-2 lg:order-1">
            <img
              src={teamImage}
              alt="Hajj Pilgrimage Expert Team"
              className="w-full h-auto rounded-xl shadow-2xl object-cover max-h-[500px]"
            />
            {/* Rating Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-xl text-center min-w-[150px]">
              <div className="flex items-center justify-center space-x-1 text-blue-500">
                <Star className="w-5 h-5 fill-blue-500 text-white" />
                <span className="text-xl font-bold">4.9/5</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Based on 5,000+ verified reviews
              </p>
            </div>
          </div>

          {/* Right Column: Text and Feature Cards */}
          <div className="pt-8 lg:pt-0 order-1 lg:order-2">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mt-2 mb-6">
              Your Trusted Partner for a{" "}
              <span className="text-blue-600">Blessed Journey</span>
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              For over 15 years, we have been dedicated to providing exceptional
              Hajj and Umrah services. Our mission is to make your pilgrimage as
              spiritually fulfilling and comfortable as possible.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              With a team of experienced guides, comprehensive support services,
              and a deep commitment to your spiritual journey, we ensure every
              aspect of your pilgrimage is handled with care and
              professionalism.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <FeatureCard
                icon={<Shield className="w-5 h-5 text-green-600" />}
                title="Licensed & Certified"
                description="Fully authorized by the Ministry of Hajj and Umrah with all necessary certifications."
                bgColor="bg-green-100"
              />
              <FeatureCard
                icon={<BookOpen className="w-5 h-5 text-blue-600" />}
                title="Expert Guides"
                description="Experienced multilingual guides who have performed Hajj multiple times."
                bgColor="bg-blue-100"
              />
              <FeatureCard
                icon={<Clock className="w-5 h-5 text-red-500" />}
                title="24/7 Support"
                description="Round-the-clock medical and emergency support throughout your journey."
                bgColor="bg-red-100"
              />
              <FeatureCard
                icon={<Heart className="w-5 h-5 text-orange-500" />}
                title="Spiritual Focus"
                description="Emphasis on spiritual growth and meaningful worship experiences."
                bgColor="bg-orange-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Statistics Band */}
      <div className="bg-linear-to-r from-blue-600 to-cyan-600 py-6 sm:py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <BottomStat
              icon={<Users className="w-8 h-8 mx-auto text-white" />}
              value="25,000+"
              label="Pilgrims Served"
            />
            <BottomStat
              icon={<MapPin className="w-8 h-8 mx-auto text-white" />}
              value="15+"
              label="Years Experience"
            />
            <BottomStat
              icon={<UserCheck className="w-8 h-8 mx-auto text-white" />}
              value="98%"
              label="Satisfaction Rate"
            />
            <BottomStat
              icon={<Lightbulb className="w-8 h-8 mx-auto text-white" />}
              value="50+"
              label="Expert Staff"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
