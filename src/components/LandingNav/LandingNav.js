import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toElement as scrollToElement } from '@utils/scroll';
import ContactMeButton from '@components/ContactMeButton';

import './style.scss';

export default class LandingNav extends Component {
  handleClick() {
    const myWork = document.querySelector('.my-work');
    scrollToElement(myWork);
  }

  render() {
    return (
      <nav className="landing-nav">
        <ul className="landing-nav__list">
          <li className="landing-nav__list-item" onClick={this.handleClick}>
            Work
          </li>
          {/*<li className="landing-nav__list-item">
            <Link to="/blog">
              Thoughts
            </Link>
          </li>*/}
          <ContactMeButton size='small' />
        </ul>
      </nav>
    );
  }
}
