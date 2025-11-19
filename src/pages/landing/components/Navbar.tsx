import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "../assets/hajj-background.png";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 mb-4 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand Name */}
          <div className="flex items-center gap-2">
            <span className="text-white font-extrabold text-xl font-serif rounded-full">
              <img
                src={logoImage}
                alt="Logo"
                className="w-6 h-6 md:w-12 md:h-12 rounded-full"
              />
            </span>
            <a
              href="#"
              className="md:text-2xl font-bold text-white tracking-widest italic"
            >
              Romfawz
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-orange-400 text-lg font-medium transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 pb-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-white text-base font-medium hover:bg-gray-800/80 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
