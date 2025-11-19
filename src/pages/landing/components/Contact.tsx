import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
  MessageCircleIcon,
} from "lucide-react";

// --- 1. Static Component: ContactInfoItem ---
interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  bgColor: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  details,
  bgColor,
}) => (
  <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${bgColor}`}
    >
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{details}</p>
    </div>
  </div>
);

// --- 2. Main Section Component ---
const RegistrationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Start Your <span className="text-blue-600">Registration Today</span>
          </h2>
          <p className="mt-3 text-md text-gray-500 max-w-3xl mx-auto">
            Have questions? Our team is here to help you plan your perfect
            pilgrimage.
          </p>
        </div>

        {/* Content Grid: Contact Info (Left) and Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Contact Information and Hours (Span 1 Column) */}
          <div className="space-y-4 lg:col-span-1">
            {/* Contact Items */}
            <ContactInfoItem
              icon={<Phone className="w-4 h-4 text-white" />}
              title="Call Us"
              details="+1 (555) 123-4567"
              bgColor="bg-green-500"
            />
            <ContactInfoItem
              icon={<Mail className="w-4 h-4 text-white" />}
              title="Email Us"
              details="info@blessedjourney.com"
              bgColor="bg-blue-500"
            />
            <ContactInfoItem
              icon={<MessageCircleIcon className="w-4 h-4 text-white" />}
              title="WhatsApp"
              details="+1 (555) 987-6543"
              bgColor="bg-green-400"
            />
            <ContactInfoItem
              icon={<MapPin className="w-4 h-4 text-white" />}
              title="Visit Us"
              details="123 Pilgrimage Ave, Suite 100"
              bgColor="bg-pink-500"
            />

            {/* Office Hours (Separate Blue Box) */}
            <div className="bg-blue-600 p-6 rounded-xl shadow-lg text-white mt-4">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-5 h-5" />
                <h4 className="text-lg font-semibold">Office Hours</h4>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-red-300">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form (Span 2 Columns) */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
            <form className="space-y-6">
              {/* Full Name and Email Address (Two columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@example.com"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                  />
                </div>
              </div>

              {/* Phone Number and Interested Package (Two columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                  />
                </div>
                <div>
                  <label
                    htmlFor="package"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Interested Package *
                  </label>
                  <select
                    id="package"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 bg-white"
                  >
                    <option value="">Select a package</option>
                    <option value="Hajj VIP">Hajj VIP Package</option>
                    <option value="Hajj Economy">Hajj Economy Package</option>
                    <option value="Umrah Monthly">
                      Umrah Monthly Departure
                    </option>
                    <option value="Visa Service">
                      Visa Processing Service
                    </option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your requirements, preferred dates, number of travelers, etc."
                  className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                />
                <p className="text-right text-xs text-gray-400 mt-1">
                  0/500 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Submit Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-sm text-gray-500 pt-2">
                We'll respond within 24 hours &bull; Your information is secure
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
