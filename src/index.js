import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './libs/fontawesome/fontawesome-all.min';

import { MobileMenuProvider } from '@providers/mobileMenuProvider';
import { ScreenSizeProvider } from '@providers/screenSizeProvider';

import App from './App';
import HomePage from '@pages/HomePage';
import BlogPage from '@pages/BlogPage';
import ContactPage from '@pages/ContactPage';
import MobileMenu from '@components/MobileMenu';


import './styles/main.scss';


ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <ScreenSizeProvider>
      <MobileMenuProvider>
        <App>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/contact" component={ContactPage} />
            <MobileMenu />
          </Switch>
        </App>
      </MobileMenuProvider>
    </ScreenSizeProvider>
  </Router>,
  document.getElementById('root')
);
