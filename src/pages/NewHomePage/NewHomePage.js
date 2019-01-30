import React from 'react';
import Header from '@components/Header';
import SocialIcons from '@components/SocialIcons';
import SeeMyWorkButton from '@components/SeeMyWorkButton';

import BlobYellowish from '../../assets/svg/Blob_yellowish';
import BlobPinkish from '../../assets/svg/Blob_pinkish';

import './style.scss';

const NewHomePage = () => (
  <section className="new-home-page">
    <div className="blob_yellowish">
      <BlobYellowish />
    </div>

    <div className="blob_pinkish">
      <BlobPinkish />
    </div>

    <div className="new-home-wrapper">
      <div className="new-intro-wrapper">
        <div className="new-intro-name">
          <span>
            Hi, I'm
          </span>
          <span>
            Nick Thanasiu
          </span>
        </div>
        <div className="new-intro-sub">
          web_developer
        </div>
        <div className="new-intro-desc">
          Based in Toledo, OH. I write code and sometimes design things. Always with the end user in mind, I value intuitive designs and thoughtful interactions.
        </div>
      </div>

      <div className="new-intro__social">
        <SocialIcons />
      </div>

      <div className="new-intro__button-container">
        <SeeMyWorkButton />
      </div>
    </div>
  </section>
);

export default NewHomePage;
