import React from 'react';
import ScrollToPrev from '@components/ScrollToPrev';
import PortfolioItem from '@components/PortfolioItem';
import portfolioItems from './portfolio-items';
import Icon from 'react-icons-kit';
import { eye } from 'react-icons-kit/fa/'

import './style.scss';

const ProjectsPage = (props, context) => {
  return (
    <div className="projects-page">
      <div className="content-grid">
        <h1>Projects</h1>
        <Icon icon={eye} />
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
      <ScrollToPrev pageSelector=".about-page"/>
    </div>
  );
};

export default ProjectsPage;
