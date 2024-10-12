import React from "react";
import pic from "/myimg.png";
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
        <div className="flex flex-col md:flex-row items-center">
          {" "}
          {/* Centered items */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <h1 className="flex space-x-1 text-2xl md:text-4xl">
              Hello, I'm a{" "}
            </h1>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <ReactTyped
                className="text-red-600 font-bold"
                strings={["Software Engineer", "Full Stack Web Developer"]}
                typeSpeed={30}
                backSpeed={40}
                loop={true}
              />
            </div>
            <br />
            <p className="text-xl md:text-md text-justify">
              As a highly driven and passionate Software Engineer, I thrive in
              fast-paced environments where I can harness my technical expertise
              in programming and web development to deliver impactful,
              innovative solutions. My deep love for computer science fuels a
              constant desire to explore new technologies and refine my skills,
              ensuring that I remain at the forefront of industry advancements.
              A natural problem solver and team player, I not only contribute
              but also lead, guiding projects to success while consistently
              pushing boundaries and setting new standards of excellence to
              drive meaningful results.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="underline font-bold text-xl">
                  Currently working on
                </h1>
                <div className="flex space-x-5">
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-s-full border-[2px]" />
                  <FaNode className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-s-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-s-full border-[2px]" />
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-s-full border-[2px]" />
                  <SiMysql className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-s-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 mt-8 flex justify-center">
            {" "}
            {/* Center the image */}
            <img
              src={pic}
              className="rounded-full w-50 h-50 md:w-[380px] md:h-[380px]" // Adjust size here for phone screens
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
