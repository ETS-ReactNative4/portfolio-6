import React, { Component } from 'react';
import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import ProjectsPage from '@pages/ProjectsPage';
import SkillsPage from '@pages/SkillsPage';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <ProjectsPage />
        <SkillsPage />
      </div>
    );
  }
}

export default App;
