import React from "react";
import "./index.css";
import Background from "./Components/Background";
import Navbar from "./Components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Certificates from "./Sections/Certificates";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Intro from "./Components/Intro";

function App() {
  return (
    <div className="app">
      <Intro />
      <div className="portfolio-site">

      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;