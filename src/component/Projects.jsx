import salesmanagers from "/salesmanager.jpg";
import simonsays from "/simonsays.png";
import evoting from "/evoting.jpeg";
import portfolio from "/portfolio.jpg";
import { React, useState, useEffect, useRef } from "react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideTime = 3000; // 3 seconds auto-slide time
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
      logo: evoting,
      name: "E-Voting System",
      description:
        "Designed and developed a secure, scalable electronic voting system, enabling seamless online elections with robust data protection.",
    },
    {
      id: 3,
      logo: portfolio,
      name: "Portfolio",
      description:
        "Built a custom portfolio website to showcase skills, projects, and achievements, reflecting a creative approach and technical expertise in web development.",
    },
    {
      id: 4,
      logo: simonsays,
      name: "Simon Says Game",
      description:
        "Created an engaging memory game with progressively challenging levels, improving user interaction and cognitive skill development.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardItem.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoSlideTime); // Auto-slide every 3 seconds
    return () => clearInterval(slideInterval); // Clean up the interval when the component is unmounted
  }, []);

  const handleTransitionEnd = () => {
    // Handles smooth transition end
  };

  const goToSlide = (index) => {
    setCurrentIndex(index); // Direct slide change on dot click
  };

  return (
    <>
      <div
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-12 relative"
      >
        <div>
          <h1 className="underline text-3xl font-bold mb-2 flex justify-center">
            Projects
          </h1>

          {/* Slide Container */}
          <div
            ref={slideRef}
            className="w-full overflow-hidden"
            style={{ height: "auto" }}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {cardItem.map(({ id, logo, name, description }) => (
                <div
                  className="min-w-full flex flex-col md:flex-row items-center justify-center"
                  key={id}
                  style={{ padding: "20px 0" }}
                >
                  {/* Image Container */}
                  <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <img
                      src={logo}
                      className="w-[200px] md:w-[300px] h-[150px] md:h-[200px] p-1 rounded-full border-[2px]"
                      alt={name}
                    />
                  </div>

                  {/* Text Container */}
                  <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left px-4">
                    <h2 className="text-lg md:text-xl font-bold text-justify mb-2">
                      {name}
                    </h2>
                    <p className="text-sm md:text-md text-justify leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4 mb-4">
            {cardItem.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-blue-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Projects;
