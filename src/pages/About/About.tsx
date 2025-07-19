import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <p>
        Hi, I'm <strong>Shivam Kumar Sharma</strong> — a self-taught Full Stack
        Engineer with nearly 3 years of experience. I specialize in building
        scalable web applications using <strong>React</strong>,{" "}
        <strong>Node.js</strong>, and <strong>AWS</strong>. My focus is on
        writing clean, maintainable code and solving real-world problems with
        efficient solutions.
      </p>

      <p>
        I’ve worked across industries developing performant APIs, secure
        authentication flows, and frontend user experiences. I love diving into
        DevOps, AWS services, and scalable backend systems.
      </p>

      <h2>Technical Strengths</h2>
      <ul className="skills-list">
        <li>React</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>GraphQL</li>
        <li>AWS (EC2, S3, Cognito)</li>
        <li>MongoDB</li>
        <li>Redis</li>
        <li>Docker</li>
      </ul>

      <div className="about-links">
        {/* <a
          href="https://www.linkedin.com/in/shivam-sharma7/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-btn"
        >
          LinkedIn
        </a> */}
        <a
          href="https://github.com/shivam-7Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="about-btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
