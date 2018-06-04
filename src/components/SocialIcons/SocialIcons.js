import React from 'react';
import './style.scss';

const SocialIcons = (props, context) => {
  return (
    <div className="social-icons animate-icons">
      <a target="_blank" rel="noopener noreferrer" href="#">
        <i className="fab fa-github"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="#">
        <i className="fab fa-twitter"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="#">
        <i className="fab fa-linkedin"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="#">
        <i className="fab fa-stack-overflow"></i>
      </a>
    </div>
  );
}

export default SocialIcons;
