import React, { Component } from 'react';
import { MobileMenuProvider } from '@providers/mobileMenuProvider';

import MobileMenu from '@components/MobileMenu';
import HomePage from '@pages/HomePage';
import NewHomePage from '@pages/NewHomePage';
import AboutPage from '@pages/AboutPage';
import ProjectsPage from '@pages/ProjectsPage';
import SkillsPage from '@pages/SkillsPage';

class App extends Component {
  render() {
    return (
      <div>
        <MobileMenuProvider>
          <MobileMenu />
          <NewHomePage />
        </MobileMenuProvider>

      </div>
    );
  }
}

export default App;
