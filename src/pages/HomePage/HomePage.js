import React from 'react';
import Header from '@components/Header';
import SocialIcons from '@components/SocialIcons';
import SeeMyWorkButton from '@components/SeeMyWorkButton';
import HighLevel from '../../images/high_level_bridge.jpg';

import './style.scss';

const HomePage = (props) => {

  return (
    <section className="home-page">
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
            front_end web_developer
          </div>
          <div className="intro-desc">
            Based in Toledo, OH. I write code and sometimes design things. Always with the end user in mind, I value intuitive designs and thoughtful interactions.
          </div>
        </div>

        <div className="intro__social">
          <SocialIcons />
        </div>

        <div className="intro__button-container">
          <SeeMyWorkButton />
        </div>
      </div>
    </section>
  );
};

export default Header(HomePage);
