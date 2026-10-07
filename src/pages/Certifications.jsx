import React from "react";
import "../styles/Certifications.css";

// Add a logo or icon URL for each certification
const certificationsData = [
  {
    title: "React Developer Certification",
    issuer: "Coursera",
    year: 2024,
    link: "https://www.coursera.org/certificate/react",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: 2023,
    link: "https://www.freecodecamp.org/certificate/js-algo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  },
  // Add more certifications here
];

function Certifications() {
  return (
    <div className="certifications-page">
      <h1>Certifications</h1>
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <img src={cert.logo} alt={cert.title} className="cert-logo" />
            <div className="cert-info">
              <h2>{cert.title}</h2>
              <p>{cert.issuer} - {cert.year}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
