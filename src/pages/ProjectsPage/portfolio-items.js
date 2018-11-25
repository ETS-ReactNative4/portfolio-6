import React from 'react';
import HighLevel from '../../images/high_level_bridge.jpg';

const styles = {
  doohnibor: {
    backgroundColor: 'lightblue',
    backgroundImage: `url(${HighLevel})`,
    backgroundSize: 'cover',
  },
};

export default [
  {
    name: 'Doohnibor',
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__img" style={ styles.doohnibor }>

        </div>
        <div className="portfolio-item__title">
          Doohnibor
        </div>
        <div className="portfolio-item__desc">
          <a style={{color: 'blue'}}
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
    )
  },
]
