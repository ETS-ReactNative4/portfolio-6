import React, { Component } from 'react';

export default class BlobYellowish extends Component {
  render() {
    const { screenWidth, breakpoints } = this.props;
    const { tablet, laptop } = breakpoints;

    const width = screenWidth > laptop ? 470 : screenWidth > tablet ? 298 : 168;
    const height = screenWidth > laptop ? 300 : screenWidth > tablet ? 180 : 155;

    return (
      <svg width={width} height={height} viewBox="0 0 168 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M85.3389 88.8137C215.939 119.201 219.244 -182.07 -108 -86.0183L-68.3079 155C-68.3079 155 -45.2609 58.4263 85.3389 88.8137Z" fill="#FAEDD4"/>
      </svg>

    );
  }
}
