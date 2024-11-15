import React from "react";
import "./index.css";
import Home from "./routes/home"
import Skills from "./routes/skill"
import Contact from "./routes/contact"
import Project from "./routes/project"
import About from "./routes/about"
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    < >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
