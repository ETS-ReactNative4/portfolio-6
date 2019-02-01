import React, { Component } from 'react';

export default class BlobYellowish extends Component {
  render() {
    const { screenWidth, breakpoints } = this.props;
    const { tablet, laptop } = breakpoints;

    const width = screenWidth > laptop ? 460 : screenWidth > tablet ? 290 : 174;
    const height = screenWidth > laptop ? 380 : screenWidth > tablet ? 300 : 260;

    return (
      <svg width={width} height={height} viewBox="0 0 174 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M82.6611 66.1863C-46.7643 36.0721 -51.1745 331.678 267.251 243.514C272.119 242.166 275.383 237.274 274.563 232.29L244.376 48.9922C242.602 38.2216 218.747 34.3967 210.988 42.0742C189.35 63.4841 150.527 81.977 82.6611 66.1863Z" fill="#FECFD4"/>
      </svg>
    );
  }
}
