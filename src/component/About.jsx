import React from "react";
function About() {
  return (
    <>
      <div
        name="About"
        className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 "
      >
        <div>
          <h1 className="underline text-3xl flex justify-center font-bold mb-5">
            About
          </h1>
          {/* <p>
            Highly Motivated and Enthusiastic Software Engineer seeking a
            challenging entry-level position in a Dynamic and fast-paced
            Environment, where I can utilize my technical skills and quick
            learning ability to make a meaningful contribution to the Company's
            Success.
          </p>
          <br /> */}
          <h1 className="underline text-green-600 font-semibold text-xl">
            Education
          </h1>
          <span>
            <span className="text-red-700 font-semibold text-x md:text-md text-justify">
              Bachelor of Technology in Computer Science{" "}
            </span>
            <br />
            <span className="text-sm">2020-2024</span>
            <br />
            {/* Shivajirao Kadam Institute of Technology & Management  */}
            SKITM, Indore M.P
          </span>
          <br />
          <span className="text-red-700 font-semibold text-x md:text-md text-justify">
            Higher Secondary Education{" "}
          </span>
          <br />
          <span className="text-sm">2019-2020</span>
          <br />
          <span>
            {/* Innovative Public Higher Secondary School */}
            I.P.S, Dewas M.P
          </span>
          <br />
          <span className="text-red-700 font-semibold text-x md:text-md text-justify">
            Secondary Education{" "}
          </span>
          <br />
          <span className="text-sm">2017 - 2018</span>
          <br />
          <span>
            {/* Innovative Public Higher Secondary School  */}
            I.P.S, Dewas M.P
          </span>
          <br />
          <br />

          <h1 className="underline text-green-600 font-semibold text-xl md:text-md text-justify">
            Experience / Internships
          </h1>
          <span>
            <span className="text-red-700 font-semibold text-lg md:text-md text-justify">
              i-Softzone - Software Development Company
            </span>
            <br />
            <span className="text-sm">
              [Feb 2024 - July 2024]
            </span> <span /> <br />
            <p className="md:text-md text-justify">
              In a 6-month internship at i-SOFTZONE, I actively contributed to a
              live project, applying my Full Stack Development expertise. I
              played a pivotal role in both Front-End and Back-End development,
              designing seamless, user-centric interfaces and developing a
              scalable, high-performance Back-End system. Additionally, I took
              charge of database management, ensuring efficient data handling
              and storage to optimize system functionality.
            </p>
            {/* <br /> */}
            <span className=" text-red-700 font-semibold text-lg md:text-md text-justify">
              TechnoHacks EduTech{" "}
            </span>{" "}
            <br />
            <span className="text-sm">[Aug 2023 - Sep 2023] </span>
            <p className="md:text-md text-justify">
              My internship at TechnoHacks EduTech, I gained exposure to web
              development tasks. As an intern, I contributed to tasks such as
              designing user interfaces and ensuring web application
              functionality.
            </p>
          </span>
          <br />
          {/* <h1 className="text-green-600 font-semibold text-xl">
            Skills & Expertise
          </h1>
          <span>
            Proficient in [Programming Languages] Experienced with [Software
            Tools/Technologies] Strong grasp of [Design Principles/Concepts]
            Excellent problem-solving skills Effective communicator and
            collaborator
          </span> */}
          <br />
          {/* <h1 className="underline text-green-600 font-semibold text-xl">
            Achievements & Awards
          </h1>
          <span>
            [Award/Recognition], [Organization/Institution], [Year]
            [Achievement], [Organization/Platform], [Year]
          </span> */}
          <br />
          {/* <h1 className="underline text-green-600 font-semibold text-xl">
            Mission Statement
          </h1>
          <p>
            My mission is to leverage my skills and creativity to deliver
            innovative [Your Field] solutions that exceed client expectations
            and contribute positively to the digital landscape. I am committed
            to continuous learning and growth, always seeking new challenges and
            opportunities to expand my horizons.
          </p> */}
        </div>
      </div>
      <hr />
    </>
  );
}

export default About;
