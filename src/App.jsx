import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Qualifications from "./pages/Education";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications"; // New import

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} /> {/* New route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
