import "./Home.css";
import profileImage from "../../assets/profile.jpeg";

function Home() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="Shivam Kumar Sharma"
            className="profile-image"
          />
        </div>
        <div className="header-text">
          <h1>Shivam Kumar Sharma</h1>
          <h2>Full Stack Engineer</h2>
        </div>
      </header>

      <section className="about-section">
        <h3>About Me</h3>
        <p>
          I specialize in building modern web applications with React, Node.js,
          and AWS cloud services. With expertise in full-stack development and
          cloud architecture, I create scalable solutions that deliver
          exceptional user experiences.
        </p>
      </section>

      <section className="skills-section">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-card">React</div>
          <div className="skill-card">TypeScript</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">AWS</div>
          <div className="skill-card">GraphQL</div>
          <div className="skill-card">Microservices</div>
          <div className="skill-card">CI/CD</div>
          <div className="skill-card">Docker</div>
          <div className="skill-card">GO lang</div>
        </div>
      </section>

      <section className="projects-section">
        <h3>More About Me</h3>

        <div className="project-card">
          <h4>Self-Taught Journey</h4>
          <p>
            I am a self-taught software engineer who learned through hands-on
            experience and real-world projects. I enjoy solving problems,
            learning new tools, and continuously growing as a developer.
          </p>
        </div>

        <div className="project-card">
          <h4>Frontend, Backend & Cloud</h4>
          <p>
            I specialize in building frontend interfaces with{" "}
            <strong>React</strong> and scalable backend systems using{" "}
            <strong>Node.js</strong>. I'm also skilled with <strong>AWS</strong>{" "}
            services like EC2, S3, and Cognito, and have a strong foundation in
            deploying and managing cloud-native applications.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
