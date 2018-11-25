import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { angleDoubleLeft } from 'react-icons-kit/fa/'

import './style.scss';

export default class Menu extends Component {

  render() {
    const { menuOpen, toggleMenu } = this.props;
    const visibility = menuOpen ? 'show' : 'hide';

    return (
      <div className="menu">
        <div className={`menu__wrapper ${visibility}`}>
          <ul className="menu__list">
            <li className="menu__item">
              About Me
            </li>
            <li className="menu__item">
              My Work
            </li>
            <li className="menu__item">
              Contact Me
            </li>
            <li className="menu__item">
              Resume
            </li>
          </ul>



          <div
            className="close-menu"
            onMouseDown={toggleMenu}
          >
            <Icon icon={angleDoubleLeft} size={32} style={{ color: 'red' }} />
          </div>
        </div>
      </div>
    );
  }
}
