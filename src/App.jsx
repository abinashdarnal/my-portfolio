import React from "react";
import Sidenav from "./components/Sidenav";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Sidenav />
      <Hero />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
