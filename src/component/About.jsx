import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-4xl text-center font-bold mb-10">About Me</h1>
        <section className="mb-10">
          <p className="text-lg text-justify leading-relaxed">
            Hi, I’m <span className="font-bold text-red-600">Anas Shaikh</span>,
            a dedicated full-stack software engineer with a focus on
            problem-solving and developing innovative web applications. My
            journey began with my first line of code, and since then, I have
            continuously worked to improve my skills and stay ahead of industry
            trends. I excel in fast-paced environments, building efficient and
            scalable solutions that prioritize user experience. I value
            collaboration and enjoy working with teams to tackle complex
            challenges and deliver impactful solutions. Whether on personal
            projects or in team settings, I always strive for excellence in
            every aspect of my work. I am constantly seeking opportunities to
            learn, grow, and contribute to exciting projects that push the
            boundaries of technology. Let’s connect and work together to create
            something outstanding.
          </p>
        </section>

        {/* What I Bring Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-red-600 font-semibold mb-4">
            What I Bring
          </h2>
          <ul className="list-disc list-inside text-lg">
            <li>
              <span className="font-bold">Technical Expertise:</span> Proficient
              in [Java, SQL, JavaScript] and frameworks such as [ReactJs].
            </li>
            <li>
              <span className="font-bold">Leadership:</span> A proven track
              record of leading projects, ensuring timely delivery, and
              fostering teamwork.
            </li>
            <li>
              <span className="font-bold">Continuous Learning:</span> Dedicated
              to enhancing my skills through courses, certifications, and
              self-learning.
            </li>
            <li>
              <span className="font-bold">Problem Solving:</span> Passionate
              about tacking challenges and finding efficient, creative
              solutions.
            </li>
          </ul>
        </section>

        {/* Closing Section */}
        <section className="text-center">
          <h2 className="text-2xl text-red-600 font-semibold mb-4">
            Let’s Connect
          </h2>
          <p className="text-lg leading-relaxed">
            I’m always eager to collaborate on exciting projects and bring ideas
            to life. Feel free to reach out to discuss opportunities or just to
            say hi!
          </p>
        </section>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default About;
