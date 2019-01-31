import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { MobileMenuConsumer } from '@providers/mobileMenuProvider';
import ContactMeButton from '@components/ContactMeButton';

import './style.scss';

export default class MobileMenu extends Component {
  render() {
    return (
      <MobileMenuConsumer>
        {({ mobileMenuOpen, actions }) => (
          <div className={`mobile-menu ${mobileMenuOpen}`}>
            <div className="mobile-menu__close-btn" onClick={actions.closeMobileMenu}>
              <Icon icon={ic_close} size={32} />
            </div>

            <ul className="mobile-menu__nav-list">
              <li className="mobile-menu__nav-link">
                Home
              </li>
              <li className="mobile-menu__nav-link">
                Work
              </li>
              <li className="mobile-menu__nav-link bottom-link">
                Thoughts
              </li>
              <ContactMeButton />
            </ul>
          </div>
        )}
      </MobileMenuConsumer>
    );
  }
}
