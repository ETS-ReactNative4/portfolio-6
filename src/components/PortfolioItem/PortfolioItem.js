import React from 'react';
import './style.scss';

const PortfolioItem = (props, context) => {

    if (props.render) {
      return props.render;
    } else {
      return (
        <div className="portfolio-item">
          <div className="portfolio-item__title">
            Fake title
          </div>
          <div className="portfolio-item__desc">
            Description goes here Description goes here Description goes here Description goes here
          </div>
          <div className="portfolio-item__icons">
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
          </div>
          <div className="portfolio-item__links">
            <a href="#">View Code</a>
          </div>
        </div>
      );
    }

};

export default PortfolioItem;
