import salesmanagers from "/salesmanager.jpg";
import expense from "/expense.jpeg";
import simonsays from "/simonsays.png";
import evoting from "/evoting.jpeg";
import portfolio from "/portfolio.jpg";

import { React, useState, useEffect, useRef } from "react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const autoSlideTime = 5000; // 5 seconds auto-slide time
  const slideRef = useRef();

  const cardItem = [
    {
      id: 1,
      logo: salesmanagers,
      name: "Sales Analysis and Report System",
      description:
        "Engineered a full-stack Sales Management System to streamline order processing, optimize performance, and provide real-time customer and sales tracking with customizable reports.",
    },
    {
      id: 2,
      logo: expense,
      name: "Trackify Expense Tracker",
      description:
        "Track daily expenses with a Java-powered app featuring secure DB storage and report generation ",
    },
    {
      id: 3,
      logo: evoting,
      name: "E-Voting System",
      description:
        "Designed and developed a secure, scalable electronic voting system, enabling seamless online elections with robust data protection.",
    },
    {
      id: 4,
      logo: portfolio,
      name: "Portfolio",
      description:
        "Built a custom portfolio website to showcase skills, projects, and achievements, reflecting a creative approach and technical expertise in web development.",
    },
    {
      id: 5,
      logo: simonsays,
      name: "Simon Says Game",
      description:
        "Created an engaging memory game with progressively challenging levels, improving user interaction and cognitive skill development.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardItem.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardItem.length - 1 : prevIndex - 1
    );
  };

  // useEffect(() => {
  //   const slideInterval = setInterval(nextSlide, autoSlideTime);
  //   return () => clearInterval(slideInterval);
  // }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12 relative"
    >
      <h1 className="text-4xl text-center font-bold mb-10">Projects</h1>

      {/* Slide Container */}
      <div
        ref={slideRef}
        className="w-full overflow-hidden"
        style={{ height: "auto" }}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center px-4 py-10"
              key={id}
            >
              {/* Image Section */}
              <div className="md:w-1/3 w-full flex justify-center">
                <img
                  src={logo}
                  className="w-[200px] md:w-[300px] h-[150px] md:h-[200px] object-contain rounded-full border-[2px]"
                  alt={name}
                />
              </div>

              {/* Text Section */}
              <div className="md:w-2/3 w-full mt-6 md:mt-0 md:pl-8">
                <h2 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left">
                  {name}
                </h2>
                <p className="text-sm md:text-md text-gray-600 leading-relaxed text-center md:text-justify">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6">
        {cardItem.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 mx-2 rounded-full border transition-all duration-300 ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Controls for Manual Navigation */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
        >
          &#8249;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
        >
          &#8250;
        </button>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Projects;
