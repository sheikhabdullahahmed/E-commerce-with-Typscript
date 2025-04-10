import React, { useState } from 'react';

const ResponsiveNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className=" h-full bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto relative md:px-0 px-4 md:my-6 bg-[#111111] dark:bg-white rounded-xl overflow-hidden">
        <nav className="bg-[#111111] dark:bg-white shadow-lg w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a
                  href="#"
                  className="lg:text-xl md:text-lg text-sm font-bold text-gray-700 dark:text-white capitalize"
                >
                  {['N', 'a', 'v', 'b', 'a', 'r'].map((letter, index) => (
                    <span
                      key={index}
                      className={`px-1 bg-green-400 dark:bg-green-600 rounded-full animate-[ping_${1.9 +
                        index * 0.1}s_linear_infinite]`}
                    >
                      {letter}
                    </span>
                  ))}
                </a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 text-gray-400 dark:text-gray-700">
                <a href="#about" className="text-green-400 dark:text-green-600">
                  Home
                </a>
                <a href="#what-i-do" className="hover:text-green-400 dark:hover:text-green-600">
                  What I Do
                </a>
                <a href="#testimonials" className="hover:text-green-400 dark:hover:text-green-600">
                  Testimonials
                </a>
                <a href="#clients" className="hover:text-green-400 dark:hover:text-green-600">
                  Clients
                </a>
                <a href="#fun-facts" className="hover:text-green-400 dark:hover:text-green-600">
                  Fun Facts
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMobileMenu}
                  className="text-green-400 dark:text-green-600 hover:text-green-600 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className="absolute inset-0 bg-[#111111] dark:bg-white bg-opacity-50 z-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeMobileMenu();
              }}
            >
              <div className="fixed inset-y-0 left-0 bg-[#111111] dark:bg-white w-64 p-6 transform transition-transform translate-x-0">
                {/* Close button */}
                <button
                  onClick={closeMobileMenu}
                  className="text-green-400 dark:text-green-600 hover:text-green-600 focus:outline-none mb-4"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Mobile nav links */}
                <nav className="space-y-4 text-gray-400 dark:text-gray-700">
                  <a href="#about" className="block text-green-400 dark:text-green-600">
                    Home
                  </a>
                  <a href="#what-i-do" className="block hover:text-green-400 dark:hover:text-green-600">
                    What I Do
                  </a>
                  <a href="#testimonials" className="block hover:text-green-400 dark:hover:text-green-600">
                    Testimonials
                  </a>
                  <a href="#clients" className="block hover:text-green-400 dark:hover:text-green-600">
                    Clients
                  </a>
                  <a href="#fun-facts" className="block hover:text-green-400 dark:hover:text-green-600">
                    Fun Facts
                  </a>
                </nav>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
