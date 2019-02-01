import React from 'react';
import Icon from 'react-icons-kit';
import { github, twitter } from 'react-icons-kit/fa/';
import { ScreenSizeConsumer } from '@providers/screenSizeProvider';

import './style.scss';

const SocialIcons = () => {
  return (
    <ScreenSizeConsumer>
      {({ screenWidth }) => {
        const socialIconsize = screenWidth > 825 ? 60 : screenWidth > 615 ? 55 : 45;

        return (
          <div className="social-icons animate-icons">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/nickthanasiu">
              <Icon icon={github} size={socialIconsize} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/NThanasiu">
              <Icon icon={twitter} size={socialIconsize} />
            </a>
          </div>
        )
      }}
    </ScreenSizeConsumer>
  );
}



export default SocialIcons;
