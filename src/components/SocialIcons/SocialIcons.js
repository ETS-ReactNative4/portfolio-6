import React from 'react';
import Icon from 'react-icons-kit';
import { github, twitter } from 'react-icons-kit/fa/';

import './style.scss';

const SocialIcons = () => {
  return (
    <div className="social-icons animate-icons">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/nickthanasiu">
        <Icon icon={github} size={45} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/NThanasiu">
        <Icon icon={twitter} size={45} />
      </a>
    </div>
  );
}



export default SocialIcons;
