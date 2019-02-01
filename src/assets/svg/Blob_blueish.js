import React, { Component } from 'react';

export default class BlobBlueish extends Component {
  render() {
    const { screenWidth, breakpoints } = this.props;
    const { tablet, laptop } = breakpoints;

    const width = screenWidth > laptop ? 500 : screenWidth > tablet ? 290 : 276;
    const height = screenWidth > laptop ? 380 : screenWidth > tablet ? 365 : 260;

    return (
      <svg width={width} height={height} viewBox="0 0 198 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M115.339 193.814C245.939 224.201 249.244 -77.0704 -78 18.9817L-38.3079 260C-38.3079 260 -15.2609 163.426 115.339 193.814Z" fill="#DAEDFE"/>
      </svg>
    );
  }
}
