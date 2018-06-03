import React, { Component } from 'react';

import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import PortfolioPage from '@pages/PortfolioPage';

import ScrollTop from '@components/ScrollTop';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HomePage />
        <AboutPage />
        <PortfolioPage />
        <ScrollTop />
      </div>
    );
  }
}

export default App;
