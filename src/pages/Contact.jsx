import "../styles/Contact.css";

function Contact() {
  const contactDetails = [
    { label: "Phone", value: "+1 234 567 890", link: "tel:+1234567890" },
    { label: "Email", value: "krishnakumar@example.com", link: "mailto:krishnakumar@example.com" },
    { label: "LinkedIn", value: "linkedin.com/in/krishnakumar", link: "https://www.linkedin.com/in/krishnakumar" },
    { label: "GitHub", value: "github.com/krishnakumar", link: "https://github.com/krishnakumar" },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me </h2><br></br>
      <div className="contact-container">
        {contactDetails.map((item, index) => (
          <div key={index} className="contact-row">
            <div className="contact-label">{item.label}:</div>
            <div className="contact-value">
              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.value}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
