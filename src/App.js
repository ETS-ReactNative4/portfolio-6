import React, { Component } from 'react';
import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import ProjectsPage from '@pages/ProjectsPage';
import ScrollTop from '@components/ScrollTop';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <ProjectsPage />
        <ScrollTop />
      </div>
    );
  }
}

export default App;
