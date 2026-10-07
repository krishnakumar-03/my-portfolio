import { useEffect, useState } from "react";
import "../styles/DarkMode.css";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <span className="slider">
        <span className="circle">{darkMode ? "🌙" : "🌞"}</span>
      </span>
    </label>
  );
}

export default DarkModeToggle;
