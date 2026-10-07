import "../styles/Home.css";
import ProfilePhoto from "../assets/profile.jpg"; // Your photo

function Home() {
  return (
    <div className="homeabout-container">
      
      {/* Home Section */}
      <section className="home-section">
        <div className="home-hero">
          <div className="home-text">
            <h1 className="home-title">Hi, I’m KRISHNA</h1>
            <p className="home-subtitle">
              Data Science Master's Student | Machine Learning | AI Enthusiast
            </p>
            <a href="#about" className="home-button">Learn More</a>
          </div>
          <div className="home-photo">
            <img src={ProfilePhoto} alt="KRISHNAKUMAR" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            I am a Master’s student in Data Science with interests in machine
            learning, deep learning, and data visualization. I enjoy building models
            that solve real-world problems.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;
