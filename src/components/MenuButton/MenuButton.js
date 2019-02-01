import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/iconic/';
import { MobileMenuConsumer } from '@providers/mobileMenuProvider';

import './style.scss';

export default class MenuButton extends Component {
  render() {
    return (
      <MobileMenuConsumer>
        {({ actions }) => (
          <div className="menu-btn" onClick={actions.openMobileMenu}>
            <Icon icon={menu} size={20} />
          </div>
        )}
      </MobileMenuConsumer>
    );
  }
}
