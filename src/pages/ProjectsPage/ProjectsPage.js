import React from 'react';
import ScrollToPrev from '@components/ScrollToPrev';
import PortfolioItem from '@components/PortfolioItem';
import portfolioItems from './portfolio-items';

import './style.scss';

const ProjectsPage = (props, context) => {
  return (
    <div className="projects-page">
      <div className="content-grid">
        <h1>Projects</h1>
        <div className="projects-wrapper">
          {portfolioItems.map((item) => (
            <PortfolioItem render={item.render}/>
          ))}
        </div>
      </div>
      <p className="react-snippet">
        <p>This site was built with React</p>
        <i className="fab fa-react"></i>
      </p>
      <ScrollToPrev pageSelector=".about-page"/>
    </div>
  );
};

export default ProjectsPage;
