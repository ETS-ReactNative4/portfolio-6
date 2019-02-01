import React from 'react';
import Typing from 'react-typing-animation';
import { ScreenSizeConsumer } from '@providers/screenSizeProvider';

import BlobYellowish from '../../assets/svg/Blob_yellowish';
import BlobPinkish from '../../assets/svg/Blob_pinkish';
import BlobBlueish from '../../assets/svg/Blob_blueish';

import MenuButton from '@components/MenuButton';
import LandingNav from '@components/LandingNav';
import SocialIcons from '@components/SocialIcons';
import SeeMyWorkButton from '@components/SeeMyWorkButton';

import './style.scss';

const Landing = () => (
  <ScreenSizeConsumer>
    {({ screenWidth, breakpoints }) => (
      <section className="landing-page">

        {
          screenWidth > 825 ?
            <LandingNav /> :
              <MenuButton />
        }

        <div className="blob_yellowish">
          <BlobYellowish screenWidth={screenWidth} breakpoints={breakpoints} />
        </div>

        <div className="blob_pinkish">
          <BlobPinkish screenWidth={screenWidth} breakpoints={breakpoints} />
        </div>

        <div className="blob_blueish">
          <BlobBlueish screenWidth={screenWidth} breakpoints={breakpoints} />
        </div>

        <div className="landing-wrapper">
          <div className="intro-wrapper">
            <div className="intro-name">
              <Typing speed={25}>
                <span>
                  Hi, I'm <br /> Nick Thanasiu
                </span>
                <Typing />
                <div className="intro-sub">
                  web_developer
                </div>
              </Typing>
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
    )}
  </ScreenSizeConsumer>
);

export default Landing;
