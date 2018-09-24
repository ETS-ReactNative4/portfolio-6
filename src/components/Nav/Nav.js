import React, { Component } from 'react';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.setSticky = this.setSticky.bind(this);
    this.state = {
      isSticky: false
    };
  }

  setSticky() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const stickyClass = this.state.isSticky
      ? 'sticky' : '';

    return(
      <nav
        className={stickyClass}
        ref={(elem) => {
          this.nav = elem;
        }}
      >
        <div className="menu">
          <div
            className="menu__item"
            onClick={(e) => this.scrollToPage('.about-page')}
          >
            About
          </div>
        <div
          className="menu__item"
          onClick={(e) => this.scrollToPage('.projects-page')}
        >
          Projects
        </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
