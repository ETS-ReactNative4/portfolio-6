import React from 'react';

export default [
  {
    name: 'neighborhood-map',
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          Neighborhood Map
        </div>
        <div className="portfolio-item__desc">
          Final Project for Udacity's Front End Nanodegree. Built using Google Maps
          and ??Foursquare?? APIs and the KnockoutJS framework.
        </div>
        <div className="portfolio-item__icons">
          <i className="fab fa-js"></i>
        <i className="fab fa-html5"></i>
        </div>
        <div className="portfolio-item__links">
          <a href="#">Code</a>
          <a href="#">View</a>
        </div>
      </div>
    )
  },
  {
    name: 'Birckhead',
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          Birckhead
        </div>
        <div className="portfolio-item__desc">
          Web app built for my neighborhood's association.
          Residents can set up accounts to keep up with neighborhood news and will be able to make payments.
        </div>
        <div className="portfolio-item__icons">
          <i className="fab fa-js"></i>
        <i className="fab fa-node"></i>
        </div>
        <div className="portfolio-item__links">
          <a href="#">Code</a>
          <a href="#">Blog</a>
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
            View Code
          </a>
        </div>
      </div>
    )
  },
  {
    name: 'Robinhood Lite',
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          Robinhood Lite
        </div>
        <div className="portfolio-item__desc">
          App I built for a <a style={{color: 'blue'}} href="#">Robinhood</a>-like app.
          Front End built with React...
        </div>
        <div className="portfolio-item__icons">
          <i className="fab fa-js"></i>
          <i className="fab fa-react"></i>
        </div>
        <div className="portfolio-item__links">
          <a href="#">Code</a>
          <a href="#">Blog</a>
        </div>
      </div>
    )
  }
]
