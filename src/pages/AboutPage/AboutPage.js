import React from 'react';
import AboutMe from '@components/AboutMe';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {

  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About</h1>
        <div className="about-wrapper">
          <div className="about-content">

            <AboutMe />

            <div className="resume">
              <a href="https://resume.creddle.io/resume/gtsvve2yo8d">
                Check out my resume here
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".projects-page" />
    </div>
  );
};

export default AboutPage;
