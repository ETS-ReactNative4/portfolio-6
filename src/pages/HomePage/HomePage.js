import React from 'react';
import Nav from '@components/Nav';
import SocialIcons from '@components/SocialIcons';
import ScrollToNext from '@components/ScrollToNext';

import './style.scss';


const HomePage = (props, context) => {

  return (
    <div
      className="home-page"
    >
      <Nav />
      <div
        className="home-wrapper"
      >

        <div className="intro-wrapper">
          <div className="intro-name">
            Nick Thanasiu
          </div>
          <div className="intro-sub">
            Full Stack Web Developer
          </div>
        </div>
        <SocialIcons />
      </div>
      <ScrollToNext pageSelector='.about-page'/>
    </div>
  );
};

export default HomePage;
