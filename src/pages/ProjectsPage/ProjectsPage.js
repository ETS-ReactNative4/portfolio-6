import React from 'react';
import PortfolioItem from '@components/PortfolioItem';
import portfolioItems from './portfolio-items';


import './style.scss';

const ProjectsPage = (props, context) => {
  return (
    <div className="projects-page">
      <div className="content-grid">
        <h2>
          My Work
        </h2>

        <div className="projects-wrapper">
          {portfolioItems.map((item) => (
            <PortfolioItem render={item.render}/>
          ))}
        </div>
      </div>
      <p className="react-snippet">
        <i className="fab fa-react"></i>
        <p>
          This site was built with React
        </p>
        <a href="https://github.com/nickthanasiu/portfolio">
          View Code here
        </a>
      </p>
    </div>
  );
};

export default ProjectsPage;
