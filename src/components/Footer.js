import React from 'react';
import GithubIcon from '../assets/github-icon.svg';

import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>Created by NLD Anne </p>
        <a href="https://github.com/nldanne/productivity-app" target='blank'>
          {/*<GithubIcon /> */}
          <img src={GithubIcon} alt="github icon"></img>
        </a>
    </footer>
  )
}

export default Footer;