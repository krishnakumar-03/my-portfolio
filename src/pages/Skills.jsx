import "../styles/Skills.css";

function Skills() {
  const skills = ["Python", "R", "SQL", "Machine Learning", "Deep Learning", "Data Visualization", "React"];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
