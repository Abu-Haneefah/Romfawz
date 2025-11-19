import React, { useState } from "react";
import { Star, Check, Quote } from "lucide-react";
import personOne from "../assets/person1.png";
import personTwo from "../assets/person2.png";
import personThree from "../assets/person3.png";
import personFour from "../assets/person4.png";

// --- 1. Define Testimonial Data ---
interface Testimonial {
  id: number;
  name: string;
  location: string;
  package: string;
  quote: string;
  rating: number;
  imageSrc: string;
}

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    location: "Dubai, UAE",
    package: "Hajj VIP Package",
    rating: 5,
    quote:
      "The VIP Hajj package exceeded all my expectations. The accommodations were luxurious, the guides were knowledgeable, and every detail was perfectly organized. This was truly a blessed journey that I will cherish forever.",
    imageSrc: personOne,
  },
  {
    id: 2,
    name: "Fatimah Hassan",
    location: "London, UK",
    package: "Umrah Monthly Departure",
    rating: 5,
    quote:
      "The Umrah trip was flawless. The guides were patient and kind, making the spiritual experience accessible and deeply moving. Highly recommend Pilgrim Path for anyone seeking a safe and soulful journey.",
    imageSrc: personTwo,
  },
  {
    id: 3,
    name: "Ibrahim Khan",
    location: "Toronto, Canada",
    package: "Economy Hajj Package",
    rating: 4,
    quote:
      "A very well-managed Hajj. While the economy package involves sacrifices, the core services—guidance, food, and transport—were excellent. We felt supported throughout the difficult rites.",
    imageSrc: personThree,
  },
  {
    id: 4,
    name: "Aisha Muhammad",
    location: "New York, USA",
    package: "Umrah Family Package",
    rating: 5,
    quote:
      "Traveling with my family was easy thanks to their dedicated support. Everything, from the flights to the hotel proximity to the Haram, was carefully planned. A truly stress-free and spiritual experience.",
    imageSrc: personFour,
  },
];

// --- 2. Static Component: StarRating ---
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex space-x-0.5">
    {Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

// --- 3. Main Section Component ---
const PilgrimTestimonialsSection: React.FC = () => {
  const [activeTestimonialId, setActiveTestimonialId] = useState(
    initialTestimonials[0].id
  );

  const activeTestimonial =
    initialTestimonials.find((t) => t.id === activeTestimonialId) ||
    initialTestimonials[0];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Stories from <span className="text-blue-600">Our Pilgrims</span>
          </h2>
          <p className="mt-3 text-md text-gray-500 max-w-3xl mx-auto">
            Hear from thousands of satisfied pilgrims who trusted us with their
            sacred journey.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row mb-10 min-h-[450px]">
          {/* Left Side: Pilgrim Image and Details (Dynamic) */}
          <div
            className="lg:w-1/2 p-8 flex flex-col justify-end bg-cover bg-center"
            style={{ backgroundImage: `url(${activeTestimonial.imageSrc})` }}
          >
            {/* Dark Overlay for text contrast */}
            <div className="absolute inset-0 bg-black/30 lg:hidden"></div>

            <div className="relative z-10 text-white pt-32 lg:pt-0">
              <StarRating rating={activeTestimonial.rating} />
              <h3 className="text-xl font-bold mt-2">
                {activeTestimonial.name}
              </h3>
              <p className="text-sm font-medium opacity-80">
                {activeTestimonial.location}
              </p>
            </div>
          </div>

          {/* Right Side: Quote and Metadata (Dynamic) */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">
              {activeTestimonial.package}
            </span>

            <Quote className="w-8 h-8 text-blue-100 mt-3" />

            <blockquote className="text-xl italic text-gray-800 my-6 leading-relaxed">
              {activeTestimonial.quote}
            </blockquote>

            <div className="flex items-center space-x-2 text-sm text-green-600 font-semibold">
              <Check className="w-4 h-4 fill-green-500 text-white" />
              <span>Verified Pilgrim</span>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery (Interactive) */}
        <div className="flex flex-wrap justify-center gap-4 py-4">
          {initialTestimonials.map((t) => (
            <div
              key={t.id}
              onClick={() => setActiveTestimonialId(t.id)}
              className={`w-28 h-28 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg relative 
                                ${
                                  activeTestimonialId === t.id
                                    ? "border-4 border-blue-500 ring-2 ring-blue-500"
                                    : "border-4 border-transparent opacity-80 hover:opacity-100"
                                }`}
            >
              <img
                src={t.imageSrc}
                alt={t.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay for Name/Location on Thumbnail */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-2">
                <p className="text-xs font-semibold text-white truncate">
                  {t.name}
                </p>
                <p className="text-[10px] text-gray-300 truncate">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats/Summary */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-500">Average Rating</p>
              <StarRating rating={5} />
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">5,000+</p>
              <p className="text-sm text-gray-500">Verified Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">98%</p>
              <p className="text-sm text-gray-500">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilgrimTestimonialsSection;
