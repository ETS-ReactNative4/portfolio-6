import React, { Component } from 'react';

export default class RectanglePurple extends Component {
  render() {
    const { screenWidth, breakpoints } = this.props;
    const { tablet, laptop } = breakpoints;

    const width = screenWidth > laptop ? 250 : screenWidth > tablet ? 140 : 79;
    const height = screenWidth > laptop ? 250 : screenWidth > tablet ? 140 : 116;

    return (
      <svg width={width} height={height} viewBox="0 0 79 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="-37" y="59.397" width="84" height="79" transform="rotate(-45 -37 59.397)" fill="#4457AE"/>
      </svg>

    );
  }
}
