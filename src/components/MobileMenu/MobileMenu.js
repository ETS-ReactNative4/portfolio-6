import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toElement as scrollToElement } from '@utils/scroll';
import Icon from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';

import { MobileMenuConsumer } from '@providers/mobileMenuProvider';
import ContactMeButton from '@components/ContactMeButton';

import './style.scss';

class MobileMenu extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { mobileMenuOpen, actions, history } = this.props;

    // Close mobile menu
    actions.closeMobileMenu();

    // Re-direct to appropriate page or section
    switch (e.target.innerHTML) {
      case 'Home':
        history.push('/');
        break;
      case 'Work':
        history.push('/');
        scrollToElement(document.querySelector('.my-work'))
        break;
      case 'Thoughts':
        history.push('/blog');
        break;
    }

    e.preventDefault();
  }

  render() {
    const { mobileMenuOpen, actions } = this.props;
    return (
      <div className={`mobile-menu ${mobileMenuOpen}`}>
        <div className="mobile-menu__close-btn" onClick={actions.closeMobileMenu}>
          <Icon icon={ic_close} size={32} />
        </div>

        <ul className="mobile-menu__nav-list">
          <li className="mobile-menu__nav-link" onClick={this.handleClick}>
            Home
          </li>
          <li className="mobile-menu__nav-link" onClick={this.handleClick}>
            Work
          </li>
          <li className="mobile-menu__nav-link bottom-link" onClick={this.handleClick}>
            Thoughts
          </li>
          <li className="mobile-menu__nav-link" onClick={this.handleClick}>
            <ContactMeButton size='normal' />
          </li>
        </ul>
      </div>
    );
  }
}

const MobileMenuWithRouter = withRouter(MobileMenu);

export default props => (
  <MobileMenuConsumer>
    {({ mobileMenuOpen, actions }) => {
      return <MobileMenuWithRouter {...props} mobileMenuOpen={mobileMenuOpen} actions={actions} />
    }}
  </MobileMenuConsumer>
);
