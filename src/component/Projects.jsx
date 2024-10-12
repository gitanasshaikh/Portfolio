import salesmanagers from "/salesmanager.jpg";
import simonsays from "/simonsays.png";
import evoting from "/evoting.jpeg";
import portfolio from "/portfolio.jpg";
import { React, useState, useEffect, useRef } from "react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const autoSlideTime = 5000; // 5 seconds auto-slide time
  const slideRef = useRef();
  let startX = 0;
  let currentTranslate = 0;
  let previousTranslate = 0;

  const cardItem = [
    {
      id: 1,
      logo: salesmanagers,
      name: "Sales Analysis and Report System",
      description:
        "Engineered a full-stack Sales Management System to streamline order processing, optimize performance, and provide detailed analytics." +
        " Developed a comprehensive Sales Management System showcasing Full-Stack Development proficiency. Dynamic Customer Management: Real-time updates for tracking leads and customer interactions, Detailed sales tracking with customizable reports ,Responsive Design, Monitored stock levels and managed orders.",
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
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === cardItem.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardItem.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoSlideTime);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    previousTranslate = -currentIndex * window.innerWidth;
    slideRef.current.style.transition = "none";
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    currentTranslate = previousTranslate + deltaX;

    if (currentIndex === 0 && deltaX > 0) return;
    if (currentIndex === cardItem.length - 1 && deltaX < 0) return;

    slideRef.current.style.transform = `translateX(${currentTranslate}px)`;
  };

  const handleTouchEnd = () => {
    const movedBy = currentTranslate - previousTranslate;

    if (movedBy < -50) {
      nextSlide();
    } else if (movedBy > 50) {
      prevSlide();
    } else {
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    slideRef.current.style.transition = "transform 0.5s ease-out";
    previousTranslate = -currentIndex * window.innerWidth;
  };

  useEffect(() => {
    const projectSection = document.querySelector('[name="Projects"]');
    const slideContainer = slideRef.current;

    const handleScroll = () => {
      const sectionTop = projectSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop <= windowHeight && sectionTop >= 0) {
        slideContainer.addEventListener("touchstart", handleTouchStart);
        slideContainer.addEventListener("touchmove", handleTouchMove);
        slideContainer.addEventListener("touchend", handleTouchEnd);
      } else {
        slideContainer.removeEventListener("touchstart", handleTouchStart);
        slideContainer.removeEventListener("touchmove", handleTouchMove);
        slideContainer.removeEventListener("touchend", handleTouchEnd);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    setIsSliding(false);
  };

  const goToSlide = (index) => {
    if (isSliding) return;
    setCurrentIndex(index);
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

          <div
            ref={slideRef}
            className="w-full overflow-hidden"
            style={{ height: "auto" }} // Ensure height adjusts to content
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
                      className="w-[300px] h-[200px] p-1 rounded-full border-[2px]"
                      alt={name}
                    />
                  </div>

                  {/* Text Container */}
                  <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left px-4">
                    <h2 className="text-xl font-bold text-justify mb-2">
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
