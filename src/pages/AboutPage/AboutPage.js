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

            <p className="react-snippet">
              <p>This site was built with React</p>
              <i className="fab fa-react"></i>
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".projects-page" />
    </div>
  );
};

export default AboutPage;
