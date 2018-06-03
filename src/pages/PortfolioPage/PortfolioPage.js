import React from 'react';

import PortfolioItem from '@components/PortfolioItem';
import portfolioItems from './portfolio-items';

import ScrollToPrevious from '@components/ScrollToPrevious';

import './style.scss';

const PortfolioPage = (props, context) => {

  return (
    <div className="portfolio-page">
      <div className="context-grid">
        <h1>Portfolio</h1>
        <div className="portfolio-wrapper">
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".about-page"/>
    </div>
  );
};

export default PortfolioPage;
