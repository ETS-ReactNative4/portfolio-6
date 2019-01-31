import React, { Component } from 'react';

const MobileMenuContext = React.createContext();

export class MobileMenuProvider extends Component {
  constructor(props) {
    super(props);

    this.openMobileMenu = this.openMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    
    this.state = {
      mobileMenuOpen: false,
      actions: {
        openMobileMenu: this.openMobileMenu,
        closeMobileMenu: this.closeMobileMenu
      }
    };
  }

  openMobileMenu() {
    this.setState({
      mobileMenuOpen: true
    });
  }

  closeMobileMenu() {
    this.setState({
      mobileMenuOpen: false
    });
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
