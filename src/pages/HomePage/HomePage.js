import React, { Component } from 'react';

import Landing from '@components/Landing';
import MyWork from '@components/MyWork';

import './style.scss';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Landing />
        <MyWork />
      </div>
    );
  }
}
