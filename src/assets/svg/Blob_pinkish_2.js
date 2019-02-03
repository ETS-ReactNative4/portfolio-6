import React, { Component } from 'react';

export default class BlobPinkish2 extends Component {
  render() {
    const { screenWidth, breakpoints } = this.props;
    const { tablet, laptop } = breakpoints;

    const width = screenWidth > laptop ? 966 : screenWidth > tablet ? 629 : 306;
    const height = screenWidth > laptop ? 604 : screenWidth > tablet ? 565 : 294;

    return (
      <svg width={width} height={height} viewBox="0 0 246 294" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M154.354 74.8414C297.987 40.7562 302.746 375.701 -51.3288 275.067C-56.1563 273.695 -59.4019 268.832 -58.6019 263.877L-24.0655 49.9907C-22.3188 39.173 1.16298 35.653 8.50077 43.7912C31.6943 69.5146 75.2126 93.6223 154.354 74.8414Z" fill="#FECFD4"/>
      </svg>
    );
  }
}
