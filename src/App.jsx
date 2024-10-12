import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects";
import Skill from "./component/Skill";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skill />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
export default App;
