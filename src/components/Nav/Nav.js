import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MenuButton from '@components/MenuButton';
import ContactMeButton from '@components/ContactMeButton';

import './style.scss';

export default (ChildComponent) => {
  class Nav extends Component {
    render() {
      return (
        <div className="composed-component">
          <nav className="nav">
            <span className="nav__right--desktop">
              <Link to="/">
                Home
              </Link>
              <Link to="/">
                Work
              </Link>
              <ContactMeButton size='small' />
            </span>
            <span className="nav__right--mobile">
              <MenuButton location='nav' />
            </span>
          </nav>
          <div className="child-component-container">
            <ChildComponent {...this.props} />
          </div>
        </div>
      );
    }
  }

  return Nav;
};
