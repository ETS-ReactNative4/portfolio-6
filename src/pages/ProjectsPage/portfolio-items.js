import React from 'react';

export default [
  {
    name: 'Robinhood Lite',
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          Doohnibor
        </div>
        <div className="portfolio-item__desc">
          <a style={{color: 'blue'}} href="#">Robinhood</a>-clone app.
          Front End built with React/Redux
          Backend build with Node, Express, and MongoDB
        </div>
        <div className="portfolio-item__icons">
          <i className="fab fa-js"></i>
          <i className="fab fa-react"></i>
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nickthanasiu/robinhood-clone"
          >
            Code
          </a>
          <a
            target="_blank"
            rel="noopener norefferer"
            href="https://doohnibor.herokuapp.com"
          >
            App
          </a>
        </div>
      </div>
    )
  },
  {
    name: 'Test Feed',
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          Test Feed
        </div>
        <div className="portfolio-item__desc">
          Jasmine test feed built for Udacity's Front End nanodegree
        </div>
        <div className="portfolio-item__icons">
          <i className="fab fa-js"></i>
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/nickthanasiu/feed-reader-testing">
            Code
          </a>
        </div>
      </div>
    )
  },
  {
    name: 'memory-game',
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          Memory Game
        </div>
        <div className="portfolio-item__desc">
          Memory Game project for Udacity's Front End Nanodgree
        </div>
        <div className="portfolio-item__icons">
          <i className="fab fa-js"></i>
          <i className="fab fa-html5"></i>
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener norefferer"
            href="https://github.com/nickthanasiu/memory-game"
          >
            Code
          </a>
        </div>
      </div>
    )
  },
]
