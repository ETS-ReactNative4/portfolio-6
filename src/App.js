import React, { Component } from 'react';

import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HomePage />
        <AboutPage />
      </div>
    );
  }
}

export default App;
