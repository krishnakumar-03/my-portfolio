import "../styles/Projects.css";

function Projects() {
  const mlProject = [
    { title: "SLR Driven Heart Failure Prediction", desc: "A ML based Heart Failure Prediction Project." },
    { title: "GCD Stacked Deep Learning for Accurate Heart Failure Risk Prediction", desc: "A DL based Accurate Heart Failure Prediction Project." },
    { title: "To Admit or not to Admit: Learning Based Cache Optimization", desc: "A ML based Cache Admission Project." },
  ];

  const webProject = [
    { title: "A Basic Functional College Website", desc: "A simple college website for student admission portal using HTML5, PHP and CSS3." },
    { title: "WoW - 2024 Website", desc: "War of Words - A Signatory Inter College Event Registration Website." },
    { title: "REC Atrium Website", desc: "A Website for Rajalakshmi Engineering College's English Literary Club." },
    { title: "Portfolio Website", desc: "This portfolio website which is based on ReactJS." },
  ];

  const pyProject = [
    { title: "Restaurant Billing Software", desc: "A simple college website for student admission portal using HTML5, PHP and CSS3." },
    { title: "AI based Speech Command Software", desc: "War of Words - A Signatory Inter College Event Registration Website." },
  ];

  const uipathProject = [
    { title: "Chatbot for Student Admission System", desc: "A ML based Chatbot using UiPath for Student Admission Enquiry ." },
    { title: "Certificate Dispatcher Bot", desc: "An automation tool built to bulk design certificates and mail individual participants using UiPath." },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <h3>ML and DL Based Projects</h3>
      <br></br>
      <div className="projects-grid">
        {mlProject.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <h3>Website Based Projects</h3>
      <br></br>
      <div className="projects-grid">
        {webProject.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <h3>Python Based Projects</h3>
      <br></br>
      <div className="projects-grid">
        {pyProject.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <h3>UiPath Based Projects</h3>
      <br></br>
      <div className="projects-grid">
        {uipathProject.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
