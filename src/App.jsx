import React from "react";
import Sidenav from "./components/Sidenav";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <Sidenav />
      <Hero />
      <About />
      <Project />
      <Skill />
      <Contact />
    </>
  );
}

export default App;
