import React from 'react';

import './style.scss';

const PortfolioItem = (props, context) => {

  if (props.render) {

    return props.render;

  } else {

    return (
      <div className="portfolio-item">

        <div className="portfolio-item__title">
          Sick Project
        </div>

        <div className="portfolio-item__desc">
          A really cool project
        </div>

        <div className="portfolio-item__icon">
          <i className="fab fa-js"></i>
          <i className="fab fa-react"></i>
          <i className="fab fa-html5"></i>
        </div>

        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="#">Code</a>
          <a target="_blank" rel="noopener noreferrer" href="#">Project</a>
        </div>
      </div>
    );
  }
};

export default PortfolioItem;
