import "../styles/Experience.css";

function Experience() {
  const experiences = [
    { role: "Data Science Intern", company: "ABC Corp", duration: "Jun 2024 - Aug 2024" },
    { role: "Machine Learning Intern", company: "XYZ Solutions", duration: "Jan 2024 - May 2024" },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <p>{exp.company}</p>
            <span>{exp.duration}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
