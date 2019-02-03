import React, { Component } from 'react';

export default class BlobYellowish2 extends Component {
  render() {
    const { screenWidth, breakpoints } = this.props;
    const { tablet, laptop } = breakpoints;

    const width = screenWidth > laptop ? 948 : screenWidth > tablet ? 517 : 276;
    const height = screenWidth > laptop ? 732 : screenWidth > tablet ? 504 : 260;

    return (
      <svg width={width} height={height} viewBox="0 0 160 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M82.6611 193.814C-47.9388 224.201 -51.2442 -77.0704 276 18.9817L236.308 260C236.308 260 213.261 163.426 82.6611 193.814Z" fill="#FAEDD4"/>
      </svg>

    );
  }
}
