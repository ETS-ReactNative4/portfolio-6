import React, { Component } from 'react';

const MobileMenuContext = React.createContext();

export class MobileMenuProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false,
      actions: {
        openMobileMenu: this.openMobileMenu,
        closeMobileMenu: this.closeMobileMenu
      }
    };
  }

  openMobileMenu() {
    console.log('opening menu!');
  }

  closeMobileMenu() {
    console.log('closing menu!');
  }

  render() {
    return (
      <MobileMenuContext.Provider value={this.state}>
        { this.props.children }
      </MobileMenuContext.Provider>
    );
  }
}

export const MobileMenuConsumer = MobileMenuContext.Consumer;
