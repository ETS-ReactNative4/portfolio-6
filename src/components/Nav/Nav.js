import React, { Component } from 'react';
import MenuButton from '@components/MenuButton';

import './style.scss';

export default (ChildComponent) => {
  class Nav extends Component {
    render() {
      return (
        <div className="composed-component">
          <nav className="nav">
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
