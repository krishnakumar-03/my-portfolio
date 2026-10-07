import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">KRISHNAKUMAR</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/certifications">Certifications</Link> {/* New Link */}
        <Link to="/contact">Contact</Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
