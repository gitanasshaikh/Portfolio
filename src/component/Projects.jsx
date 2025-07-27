import salesmanagers from "/salesmanager.jpg";
import tracktally from "/tracktally.jpeg";
import edutackifymanger from "/edutackifymanager.png";
import simonsays from "/simonsays.png";
import evoting from "/evoting.jpeg";
import portfolio from "/portfolio.jpg";

import { React, useState, useRef } from "react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const cardItem = [
    {
      id: 1,
      logo: salesmanagers,
      name: "Sales Analysis and Report System",
      description: `The Sales Analysis and Reporting System is a full-stack enterprise 
      level web application designed to streamline and optimize a company's real-time
      sales tracking, inventory management, payment handling, and business intelligence 
      reporting. This system facilitates efficient management of core operations 
      such as item and stock entry, customer order processing, and tracking of agents,
      sellers, and dealers. It incorporates secure role based login access, ensuring
      each user type can only accesses relevant parts of the system. Featuress are tailored per role.`,
    },
    {
      id: 2,
      logo: tracktally,
      name: "TrackTally Manager",
      description: `TrackTally Manager is a Java-based desktop expense tracking application developed 
      using Java Swing for the GUI and MySQL for backend storage. It allows users to add and manage 
      expenses with fields like name, amount, date, and payment method. Data is stored via JDBC, and 
      users can export reports in PDF (iText) and Excel (Apache POI) formats. The app includes automatic
      date validation and formatted inputs. Designed as a practical tool, it helps users effectively
      track personal or business expenses with simple and secure interface features.`,
    },
    {
      id: 3,
      logo: edutackifymanger,
      name: "EduTaskify - Smart Study Planner",
      description: `EduTaskify is a Java-based desktop study planner application designed to help students
        manage academic tasks efficiently. It features task creation, category labels, due date tracking,
        filtering, search, and export to PDF/CSV formats. Developed with core OOP principles like abstraction,
        encapsulation, and polymorphism, it offers a clean, terminal-based interface. EduTaskify is ideal for
        organizing assignments, exam schedules, and study routines. The project emphasizes time management,
        focus, and productivity, while showcasing strong command over Java development practices in a practical,
        real-world application designed specifically for students.`,
    },
    {
      id: 4,
      logo: portfolio,
      name: "Portfolio",
      description: `Developed a custom personal portfolio website to professionally showcase skills,
       featured projects, technical achievements, and creative strengths in web development.
       Designed using modern HTML, CSS, and JavaScript standards, the site emphasizes visual
       appeal and user-centric navigation. It includes sections like About, Projects, Skills,
       and Contact with smooth scrolling and intuitive layout. Special focus was given to 
       full responsiveness, ensuring compatibility across all screen sizes and major browsers.
       The goal was to demonstrate both frontend design capabilities and technical proficiency
       in building fast, accessible, and engaging digital experiences.`,
    },
    {
      id: 5,
      logo: simonsays,
      name: "Simon Says Game",
      description: `Built a browser-based Simon Says game using HTML, CSS, and JavaScript to sharpen
       memory and focus. The game challenges users to repeat color sequences that grow with each level,
       enhancing cognitive skills through progressive difficulty. Features include responsive design,
       smooth color animations, and sound feedback for a better experience. Frontend is visually
       engaging with clean UI. Designed to improve user interaction while providing fun gameplay,
       this project reflects proficiency in DOM manipulation, event handling, and modern UI principles
       for interactive web applications.`,
    },
    {
      id: 6,
      logo: evoting,
      name: "E-Voting System",
      description: `Developed a secure and scalable electronic voting system to facilitate safe,
       efficient, and transparent online elections. Built with a focus on data integrity and voter
       authentication, the system enables users to cast votes digitally while preventing duplication
       and tampering. Designed with role-based access control for administrators and voters, it ensures
       encrypted data transmission and secure result storage. The application emphasizes usability,
       scalability, and real-time vote tallying. Ideal for institutional or organizational elections, 
       this project demonstrates expertise in security, backend logic, and digital governance solutions.`,
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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 50) {
        nextSlide(); // swipe left
      } else if (distance < -50) {
        prevSlide(); // swipe right
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
                <p className="text-sm md:text-lg text-black-600 leading-relaxed text-justify">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots - These indicate current slide and help jump to specific one.
          If you add more projects, no need to change this code. It will adjust automatically. */}
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

      <br />
      <hr />
    </div>
  );
};

export default Projects;
