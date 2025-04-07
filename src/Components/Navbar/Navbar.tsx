import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core"; // Import IconProp type
import burger from "../../assets/burger.png";

interface NavItem {
  id: number;
  text: string;
}

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems: NavItem[] = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Products" },
    { id: 4, text: "Login" },
  ];

  return (
    <div className="text-gray-500 dark:text-gray-300 flex justify-between items-center h-24 max-w-[1300px] mx-auto px-2">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://furniture-store-react.netlify.app/static/media/logo.221f6b13.svg"
          alt="FurnitureHub Logo"
          className="w-40 h-20 md:w-48 lg:h-36 object-contain flex-shrink-0"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        <ul className="flex font-semibold text-lg">
          {navItems.map((item: NavItem) => (
            <li
              key={item.id}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer transition duration-300 hover:text-white"
            >
              {item.text}
            </li>
          ))}
        </ul>
        {/* GitHub Icon */}
        <a
          href="http://github.com/sheikhabdullahahmed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-500 hover:text-black dark:hover:text-white transition"
        >
          <FontAwesomeIcon icon={faGithub as IconProp} />
        </a>
      </div>

      {/* Mobile Navigation Icon */}
      <div className="block md:hidden">
        <div
          onClick={handleNav}
          className="fixed top-6 right-6 z-50 cursor-pointer text-white"
        >
          {nav ? (
            <FontAwesomeIcon
              icon={faXmark as IconProp}
              className="w-8 h-8 text-white"
              style={{ fontSize: "32px" }}
            />
          ) : (
            <img src={burger} alt="Menu" className="w-8 h-8" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed md:hidden left-0 top-0 w-full h-full overflow-y-auto z-40 bg-[#000300] dark:bg-gray-900 transition-all duration-500 ease-in-out ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          FurnitureHub
        </h1>

        <div className="flex flex-col items-center justify-center flex-grow">
          {navItems.map((item: NavItem) => (
            <li
              key={item.id}
              className="p-4 border-b border-gray-600 rounded-xl hover:bg-[#00df9a] hover:text-black cursor-pointer transition duration-300 text-gray-300 w-full max-w-md text-center"
            >
              {item.text}
            </li>
          ))}
        </div>

        <>
          <li className="p-4 mt-4 hidden md:block">
            <a
              href="https://github.com/apelmahmudDev/e-furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-gray-300 hover:text-[#00df9a]"
            >
              <FontAwesomeIcon icon={faGithub as IconProp} />
              GitHub
            </a>
          </li>
        </>
      </ul>
    </div>
  );
};

export default Navbar;
