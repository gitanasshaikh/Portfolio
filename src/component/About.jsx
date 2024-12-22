import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        {/* About Me Section */}
        <h1 className="text-4xl text-center font-bold mb-10">About Me</h1>
        <section className="mb-10">
          <p className="text-lg text-justify leading-relaxed">
            Hi, I’m <span className="font-bold text-red-600">Anas Shaikh</span>,
            a full-stack software engineer passionate about building innovative
            and scalable web applications. From the first line of code I wrote,
            I’ve been driven by the desire to learn and create impactful
            solutions. I thrive in fast-paced environments, leveraging technical
            expertise to solve complex problems and enhance user experiences. As
            a natural team player, I enjoy collaborating with others and
            continuously seek opportunities to contribute to exciting projects.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-green-600 font-semibold mb-4">
            Education
          </h2>
          <div className="pl-5">
            <h3 className="text-xl font-bold">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="text-md text-gray-700">
              Shivajirao Kadam Institute of Technology & Management, Indore
            </p>
            <p className="text-md text-gray-700">
              Graduated with a CGPA of 7.4/10
            </p>
            {/* <p className="text-md text-gray-700 mt-2">
              Key: Software Engineering.
            </p> */}
          </div>
        </section>

        {/* Internship Experience Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-green-600 font-semibold mb-4">
            Internship Experience
          </h2>
          <div className="pl-5">
            <h3 className="text-xl font-bold">Software Engineering Intern</h3>
            <p className="text-md text-gray-700">
              <span className="font-semibold">
                i-Softzone Software Development Company
              </span>{" "}
              <br />
              June 2024 - December 2024
            </p>
            {/* <p className="text-md text-gray-700 italic">
              January 2023 - June 2023
            </p> */}
            <ul className="list-disc list-inside text-md text-black-600 mt-2">
              <li>
                Delivered a fully functional, live full-stack project that
                earned recognition for excellence.
              </li>
              <li>
                Designed and optimized APIs for high performance and
                scalability.
              </li>
              <li>
                Collaborated with cross-functional teams to improve application
                performance.
              </li>
              <li>
                Gained hands-on experience in database design and front-end
                development.
              </li>
            </ul>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-green-600 font-semibold mb-4">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-md text-black-700  ">
            <li>
              Delivered a fully functional, live full-stack project during the
              internship, earning recognition for excellence.
            </li>
            <li>
              Recognized for leadership abilities and effective team
              collaboration during academic and professional projects.
            </li>
            <li>
              Successfully led a team project that exceeded performance
              benchmarks by 30%.
            </li>
            <li>
              Completed certifications in React.js and API Development to
              enhance technical proficiency.
            </li>
          </ul>
        </section>

        {/* What I Bring Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-green-600 font-semibold mb-4">
            What I Bring
          </h2>
          <ul className="list-disc list-inside text-md">
            <li>
              <span className="font-bold  text-red-500">
                Technical Expertise:
              </span>{" "}
              Proficient in Java, SQL, JavaScript, and React.js.
            </li>
            <li>
              <span className="font-bold text-red-500">Leadership:</span>{" "}
              Skilled at leading projects, ensuring timely delivery, and
              fostering collaboration.
            </li>
            <li>
              <span className="font-bold text-red-500">Problem Solving:</span>{" "}
              Adept at tackling challenges with efficient and creative
              solutions.
            </li>
            <li>
              <span className="font-bold text-red-500">
                Continuous Learning:
              </span>{" "}
              Committed to staying updated with industry trends through courses
              and certifications.
            </li>
          </ul>
        </section>
      </div>
      <hr className="mt-10 border-gray-300" />
    </div>
  );
}

export default About;
