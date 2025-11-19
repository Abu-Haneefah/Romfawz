import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

// Define link structure
interface LinkItem {
  name: string;
  href: string;
}

// Define the content structure for the columns
const packagesLinks: LinkItem[] = [
  { name: "Hajj Economy Package", href: "#hajj-economy" },
  { name: "Hajj VIP Package", href: "#hajj-vip" },
  { name: "Umrah Packages", href: "#umrah-packages" },
  { name: "Visa Processing", href: "#visa-processing" },
  { name: "Group Bookings", href: "#group-bookings" },
  { name: "Custom Packages", href: "#custom-packages" },
];

const resourceLinks: LinkItem[] = [
  { name: "Hajj Guide", href: "/guide/hajj" },
  { name: "Umrah Guide", href: "/guide/umrah" },
  { name: "Travel Requirements", href: "/requirements" },
  { name: "Health & Vaccinations", href: "/health" },
  { name: "FAQs", href: "/faqs" },
  { name: "Download Brochure", href: "/download/brochure" },
];

// --- 1. Static Component: LinkColumn ---
const LinkColumn: React.FC<{ title: string; links: LinkItem[] }> = ({
  title,
  links,
}) => (
  <div>
    <h4 className="text-lg font-semibold text-white mb-4 border-b border-blue-700 pb-2">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-gray-300 hover:text-cyan-400 transition duration-200 text-sm"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// --- 2. Main Footer Component ---
const HajjFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          {/* Column 1: Brand Info & Social Media */}
          <div>
            <a href="#" className="flex items-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">
                Romfawz Travel and Tours
              </span>
            </a>
            <p className="text-gray-400 text-sm mb-6">
              Your trusted partner for sacred Hajj and Umrah journeys. Licensed,
              experienced, and dedicated to making your pilgrimage a blessed
              experience.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full transition duration-200"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center bg-pink-600 hover:bg-pink-700 rounded-full transition duration-200"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                aria-label="Twitter/X"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full transition duration-200"
              >
                {/* Use a suitable X icon or the old Twitter icon, depending on your library/design */}
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition duration-200"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Packages */}
          <LinkColumn title="Packages" links={packagesLinks} />

          {/* Column 3: Resources */}
          <LinkColumn title="Resources" links={resourceLinks} />

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-blue-700 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 shrink-0 text-cyan-400 mt-1" />
                <address className="not-italic text-gray-300">
                  123 Islamic Center Drive, Suite 456, Downtown New York, NY
                  10001
                </address>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 shrink-0 text-cyan-400" />
                <a
                  href="tel:+15551234255"
                  className="text-gray-300 hover:text-cyan-400 transition duration-200"
                >
                  +1 (555) 123-HAJJ
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 shrink-0 text-cyan-400" />
                <a
                  href="mailto:info@blessedjourney.com"
                  className="text-gray-300 hover:text-cyan-400 transition duration-200"
                >
                  info@blessedjourney.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright/Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 pb-6 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-center sm:text-left">
            © 2024 Blessed Journey. All rights reserved. Licensed Hajj & Umrah
            Tour Operator.
          </p>
          <div className="flex space-x-4">
            <a
              href="/privacy"
              className="hover:text-cyan-400 transition duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-cyan-400 transition duration-200"
            >
              Terms of Service
            </a>
            <span className="hidden md:inline-block">Powered by Romfawz</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HajjFooter;
