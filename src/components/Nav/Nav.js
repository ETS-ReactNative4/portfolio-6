import React, { Component } from 'react';

import './style.scss';

class Nav extends Component {

  render() {

    return (
      <nav>
        <div className="menu">
          <div className="menu__item">About</div>
          <div className="menu__item">Portfolio</div>
        </div>
      </nav>
    );
  }
}

export default Nav;
