import React, { Component } from 'react';
import HomePage from '@pages/HomePage';
import NewHomePage from '@pages/NewHomePage';
import AboutPage from '@pages/AboutPage';
import ProjectsPage from '@pages/ProjectsPage';
import SkillsPage from '@pages/SkillsPage';

class App extends Component {
  render() {
    return (
      <div>
        <NewHomePage />
        <ProjectsPage />
      </div>
    );
  }
}

export default App;
