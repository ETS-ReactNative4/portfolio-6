import React from 'react';

import Nav from '@components/Nav';
import SocialIcons from '@components/SocialIcons';

import './style.scss';

const HomePage = (props, context) => {

  return (
    <div className="home-page">
      <div className="home-wrapper">

        <Nav />

        <div className="intro-wrapper">
          <div className="intro-name">
            Nick Thanasiu
          </div>
          <div className="intro-sub">
            Front End Developer
          </div>
        </div>

        <SocialIcons />
        {/*
          <div className="scrollToNext">Scroll to next</div>
          */}

      </div>
    </div>
  );

};

export default HomePage;
