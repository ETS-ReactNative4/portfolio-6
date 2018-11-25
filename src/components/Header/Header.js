import React, { Component } from 'react';
import Menu from '@components/Menu';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/iconic/';

import './style.scss';

export default (ChildComponent) => {
  class Header extends Component {
    constructor(props) {
      super(props);

      this.state = {
        menuOpen: false,
      };

      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
      this.toggleMenu();

      console.log("clicked");
      e.stopPropagation();
    }

    toggleMenu() {
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }

    render() {
      return (
        <div className="composed_component">
          <div className="header">
            <Icon icon={menu} size={16} onMouseDown={this.handleMouseDown} />
          </div>
          <div className="child_component">
            <Menu
              menuOpen={this.state.menuOpen}
              toggleMenu={this.handleMouseDown}
            />
            <ChildComponent />
          </div>
        </div>
      );
    }
  }

  return Header;
}
