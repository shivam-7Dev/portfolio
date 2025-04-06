import './App.css';
import profileImage from './assets/profile.jpeg'; // You'll add your image here

function App() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <div className="profile-image-container">
          <img src={profileImage} alt="Shivam Kumar Sharma" className="profile-image" />
        </div>
        <div className="header-text">
          <h1>Shivam Kumar Sharma</h1>
          <h2>Full Stack Engineer</h2>
        </div>
      </header>

      <section className="about-section">
        <h3>About Me</h3>
        <p>
          I specialize in building modern web applications with React, Node.js, and AWS cloud services. 
          With expertise in full-stack development and cloud architecture, I create scalable solutions 
          that deliver exceptional user experiences.
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
        </div>
      </section>

      <section className="projects-section">
        <h3>Featured Projects</h3>
        
        <div className="project-card">
          <h4>Cloud-Native Application Platform</h4>
          <p>
            Designed and implemented a serverless application using AWS Lambda, API Gateway, 
            and React. Reduced infrastructure costs by 40% while improving scalability.
          </p>
        </div>
        
        <div className="project-card">
          <h4>Enterprise Dashboard</h4>
          <p>
            Built a real-time analytics dashboard with React, GraphQL, and Node.js microservices. 
            Implemented caching strategies that improved performance by 65%.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;