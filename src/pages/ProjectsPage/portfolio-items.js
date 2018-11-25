import React from 'react';
import Doohnibor from '../../images/doohnibor_landing.jpg';
import Transferable from '../../images/transferable_landing_desktop.jpg';
import Fade from 'react-reveal/Fade';
import Icon from 'react-icons-kit';
import { eye } from 'react-icons-kit/fa/'


export default [
  {
    name: 'Doohnibor',
    render: (
      <Fade bottom>
        <div className="portfolio-item">
          <div className="portfolio-item__container">
            <img
              src={Doohnibor}
              alt="project screenshot"
              className="image"
            />
            <div className="overlay">
              <div className="overlay__icon">
                <Icon icon={eye} size={32} color='white' />
              </div>
            </div>
          </div>
          <div className="portfolio-item__description">
            <div className="title">
              Doohnibor
            </div>
            <div className="desc">
              <a style={{color: '#30cd9a'}}
                 href="https://robinhood.com/"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                Robinhood
              </a>
              -clone app.
              Front End built with React/Redux
              Backend build with Node, Express, and MongoDB
            </div>
          </div>
        </div>
      </Fade>
    )
  },
  {
    name: 'Transferable',
    render: (
      <Fade bottom>
        <div className="portfolio-item">
          <div className="portfolio-item__container">
            <img
              src={Transferable}
              alt="project screenshot"
              className="image"
            />
            <div className="overlay">
              <div className="overlay__icon">
                <Icon icon={eye} size={32} color='white' />
              </div>
            </div>
          </div>
          <div className="portfolio-item__description">
            <div className="title">
              Transferable
            </div>
            <div className="desc">
              An early-stage education technology startup that helps community college
              students find the four-year program perfect for them...
            </div>
          </div>
        </div>
      </Fade>
    )
  },
]
