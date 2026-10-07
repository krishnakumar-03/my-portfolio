import "../styles/Education.css";

function Education() {
  const educations = [
    { degree: "MSc Data Science", institute: "Arizona State University", year: "2025-Present" },
    { degree: "BSc Computer Science", institute: "XYZ University", year: "2020-2023" },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {educations.map((e, index) => (
          <div key={index} className="education-card">
            <h3>{e.degree}</h3>
            <p>{e.institute}</p>
            <span>{e.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
