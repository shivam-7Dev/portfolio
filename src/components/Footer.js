import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Footer.css';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p> &copy; 2022 </p>
    </div>
  );
}

export default Footer;
