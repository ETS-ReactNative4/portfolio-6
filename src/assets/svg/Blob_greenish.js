import React, { Component } from 'react';

export default class BlobGreenish extends Component {
  render() {
    const { screenWidth, breakpoints } = this.props;
    const { tablet, laptop } = breakpoints;

    //const width = screenWidth > laptop ? 917 : screenWidth > tablet ? 290 : 276;
    const width = screenWidth > laptop ? 817 : screenWidth > tablet ? 290 : 276;
    const height = screenWidth > laptop ? 610 : screenWidth > tablet ? 365 : 260;

    return (
      <svg width={width} height={height} fill="none" viewBox="0 0 223 339" xmlns="http://www.w3.org/2000/svg">
        <path d="m143.964 90.4665c-112.3303-73.2227-218.4774 208.7495 121.883 230.4145l45.135-240.0589s-54.687 82.8669-167.018 9.6444z" fill="#c3dad5"/>
      </svg>
    );
  }
}
