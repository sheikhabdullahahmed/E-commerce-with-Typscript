import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ToggleTheme from "../ToogleTheme/Toogle"; // Adjust path as needed

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
    { id: 4, text: "Contact" },
    { id: 5, text: "Login" },
  ];

  return (
    <div className="text-gray-500 dark:text-gray-300 flex justify-between items-center h-24 max-w-[1300px] mx-auto px-2">
      {/* Logo */}
      <div className="flex md:pl-2 items-center ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoq5YKwdvH-Kc7VtXS6GtZrA8ENnIlCRdtg&s"
          alt="FurnitureHub Logo"
          className="  md:pr-0 pr-14 h-20  lg:w-36 lg:h-36 object-contain flex-shrink-0"
        />
        {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 dark:text-blue-200 whitespace-nowrap">
          
        </h1> */}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2">
        <ul className="flex font-semibold text-lg">
          {navItems.map((item: NavItem) => (
            <li
              key={item.id}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer 
                transition duration-300 hover:text-white"
            >
              {item.text}
            </li>
          ))}
        </ul>
        
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 
          bg-[#000300] dark:bg-gray-900 transition-all duration-500 ease-in-out ${
            nav ? "left-0" : "left-[-100%]"
          }`}
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          FurnitureHub
        </h1>
        {navItems.map((item: NavItem) => (
          <li
            key={item.id}
            className="p-4 border-b border-gray-600 rounded-xl 
              hover:bg-[#00df9a] hover:text-black cursor-pointer 
              transition duration-300 text-gray-300"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;