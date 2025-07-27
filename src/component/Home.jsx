import React from "react";
import pic from "/myimg.jpg";
import { FaReact, FaNode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
          {/* Align text and image side by side with space between them */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1 text-center md:text-left">
            {/* Centered Text Block */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              Hello, I'm <span className="text-red-600">Anas Shaikh</span>
            </h1>
            <div className="flex justify-center md:justify-start text-4xl font-semibold text-gray-600">
              <ReactTyped
                className="text-red-600 font-bold"
                strings={["Software Engineer", "Full Stack Developer"]}
                typeSpeed={50}
                backSpeed={60}
                loop={true}
              />
            </div>
            <br />
            <p className="text-lg md:text-xl text-gray-700 text-justify mt-4">
              Passionate Software Engineer with a solid foundation in
              programming and web development. Skilled in crafting efficient and
              user-focused solutions, with a commitment to delivering excellence
              in every project. A proactive problem solver and collaborative
              team player, ready to contribute and grow in dynamic,
              technology-driven environments.
            </p>
            {/* <br /> */}
            {/* <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 underline">
                Currently working on:
              </h2>
              <div className="flex justify-center md:justify-start space-x-6">
                <FaReact className="text-4xl hover:scale-105 transition-all duration-300 text-blue-500" />
                <FaNode className="text-4xl hover:scale-105 transition-all duration-300 text-green-600" />
                <SiExpress className="text-4xl hover:scale-105 transition-all duration-300 text-gray-700" />
                <SiMongodb className="text-4xl hover:scale-105 transition-all duration-300 text-green-800" />
              </div>
            </div> */}
          </div>

          {/* Logo Section */}
          <div className="md:w-1/2 order-1 mt-8 flex justify-center">
            <img
              src={pic}
              className="rounded-full w-50 h-70 md:w-100 md:h-100 shadow- transition-all duration-300 transform hover:scale-105"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <hr className="my-16 border-gray-300" />
    </>
  );
}

export default Home;
