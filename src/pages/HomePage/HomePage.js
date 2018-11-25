import React from 'react';
import Header from '@components/Header';
import SocialIcons from '@components/SocialIcons';
import LearnMoreButton from '@components/LearnMoreButton';
import HighLevel from '../../images/high_level_bridge.jpg';

import './style.scss';

const HomePage = (props, context) => {

  return (
    <div className="home-page">
      <div
        className="home-wrapper"
      >

        <div className="intro-wrapper">
          <div className="intro-name">
            <span>
              Hi, I'm
            </span>
            <span>
              Nick Thanasiu
            </span>
          </div>
          <div className="intro-sub">
            Full_stack web_dev
          </div>
          <div className="intro-desc">
            some nice playful yet professional text to make me seem both human and semi-competent
          </div>
        </div>

        <div className="intro__social">
          <SocialIcons />
        </div>

        <div className="intro__button-container">
          <LearnMoreButton />
        </div>
      </div>
    </div>
  );
};

export default Header(HomePage);
