import React, { Component } from 'react';

// Higher-order component that wraps HomePage in dropdown navbar.
//Navbar appears when scrolled beyond landing section.
import DropdownNav from '@components/DropdownNav';

import Landing from '@components/Landing';
import MyWork from '@components/MyWork';

import './style.scss';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Landing  {...this.props} />
        <MyWork />
      </div>
    );
  }
}

export default DropdownNav(HomePage);
