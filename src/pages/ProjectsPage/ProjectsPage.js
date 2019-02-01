import React from 'react';
import PortfolioItem from '@components/PortfolioItem';
import portfolioItems from './portfolio-items';


import './style.scss';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="content-grid">
        <div className="projects-wrapper">
          {portfolioItems.map((item) => (
            <PortfolioItem render={item.render}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
