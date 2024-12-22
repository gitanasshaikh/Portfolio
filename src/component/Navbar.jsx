import React, { useState } from "react";
import pic from "/myimg.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-xl">
              <span className="text-red-700 text-2xl">Anas Shaikh</span>
              <p className="text-sm">Full Stack Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="relative group"
                  >
                    {text}
                    {/* Underline Effect */}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-2/2 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            menu ? "translate-x-1" : "translate-x-full"
          } md:hidden z-40`}
        >
          {/* Close button inside the sidebar */}
          <div className="flex justify-end p-4">
            <IoCloseSharp
              size={30}
              className="cursor-pointer"
              onClick={() => setMenu(false)} // Close the menu when X is clicked
            />
          </div>
          <ul className="flex flex-col h-full px-8 space-y-4 justify-start">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-300 font-semibold cursor-pointer text-left text-xl py-2"
                key={id}
              >
                <Link
                  onClick={() => setMenu(false)} // Close the menu when a link is clicked
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="relative group"
                >
                  {text}
                  {/* Underline Effect */}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                {/* Horizontal Line */}
                <hr className="border-t border-gray-500" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
