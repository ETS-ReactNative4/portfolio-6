import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import { Link } from 'react-router-dom';

import { ScreenSizeConsumer } from '@providers/screenSizeProvider';

import MenuButton from '@components/MenuButton';
import ContactMeButton from '@components/ContactMeButton';

import './style.scss';

export default (ChildComponent) => {
  class DropdownNav extends Component {
    constructor(props) {
      super(props);

      this.handleScroll = this.handleScroll.bind(this);
      this.showDropdown = this.showDropdown.bind(this);
      this.hideDropdown = this.hideDropdown.bind(this);

      this.throttledScrollHandler = throttle(this.handleScroll, 250);

      this.state = {
        scrollY: 0,
        navBottom: null,
        navHeight: null,
        landingIsInView: true,
        dropdownIsVisible: false,
      };
    }

    componentDidMount() {
      window.addEventListener('scroll', this.throttledScrollHandler, true);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.throttledScrollHandler, true);
    }

    handleScroll() {
      const { landingIsInView } = this.state;

      this.setState({
        scrollY: window.scrollY
      });

      if (!landingIsInView) {
        this.setState({
          navBottom: this.nav.offsetHeight
        });
      }
    }

    showDropdown() {
      const { dropdownIsVisible } = this.state;

      if (dropdownIsVisible === false) {
        this.setState({
          dropdownIsVisible: true,
          landingIsInView: false
        });
      }
    }

    hideDropdown() {
      const { dropdownIsVisible } = this.state;

      if (dropdownIsVisible === true) {
        this.setState({
          dropdownIsVisible: false,
          landingIsInView: true
        });
      }
    }

    render() {

      const { dropdownIsVisible } = this.state;
      const isVisible = dropdownIsVisible ? 'isVisible' : 'isHidden';

      return (
        <ScreenSizeConsumer>
          {({ screenWidth }) => (
            <div className="composed-component">
              <div className={`dd-nav-container ${isVisible}`}>
                <nav className="dd-nav" ref={(elem) => this.nav = elem}>
                  <span className="dd-nav__left">
                    <h3 className="dd-nav__logo">
                      {/*Nick Thanasiu*/}
                    </h3>
                  </span>

                  {
                    screenWidth > 825 ?
                      (
                        <span className="dd-nav__right--desktop">
                          <span className="dd-nav__item">
                            Work
                          </span>
                          <span className="dd-nav__item">
                            Thoughts
                          </span>
                          {/*<span className="dd-nav__item">
                            More v
                          </span>*/}
                          <span className="dd-nav__item">
                            <ContactMeButton size="small" />
                          </span>
                        </span>
                      ) :
                      (
                        <span className="dd-nav__right--mobile">
                          <MenuButton location='dropdown' />
                        </span>
                      )
                  }
                </nav>
              </div>
              <div className="child-component-container">
                <ChildComponent
                  {...this.props}
                  scrollY={this.state.scrollY}
                  navBottom={this.state.navBottom}
                  showDropdown={this.showDropdown}
                  hideDropdown={this.hideDropdown}
                />
              </div>
            </div>
          )}
        </ScreenSizeConsumer>
      );
    }
  }

  return DropdownNav;
};
