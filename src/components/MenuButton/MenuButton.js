import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/iconic/';
import { MobileMenuConsumer } from '@providers/mobileMenuProvider';

import './style.scss';

export default class MenuButton extends Component {
  render() {
    // Menu Button has location prop so it can have absolute positioning when in DropdownNav but retain more location freedom
    // when appearing in DropdownNav or wherever it may be used in the future.
    const { location } = this.props;
    return (
      <MobileMenuConsumer>
        {({ actions }) => (
          <div className={`menu-btn ${location}`} onClick={actions.openMobileMenu}>
            <Icon icon={menu} size={20} />
          </div>
        )}
      </MobileMenuConsumer>
    );
  }
}
