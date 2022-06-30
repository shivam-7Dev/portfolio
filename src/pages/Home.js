import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shivam</h2>
        <div className="prompt">
          <p>
            Mechanical engineering graduate with a passion for learning and
            creating.
          </p>
          <a
            href="https://www.linkedin.com/in/shivam7dev/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:shivam7.dev@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS </span>
          </li>
          <li className="item">
            <h2> Programming Language</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
