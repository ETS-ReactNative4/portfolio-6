import React, { Component } from 'react';

export default class BlobBlueish extends Component {
  render() {
    const { screenWidth, breakpoints } = this.props;
    const { tablet, laptop } = breakpoints;

    const width = screenWidth > laptop ? 872 : screenWidth > tablet ? 571 : 276;
    const height = screenWidth > laptop ? 630 : screenWidth > tablet ? 570 : 260;

    return (
      <svg width={width} height={height} viewBox="0 0 154 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71.3389 193.814C201.939 224.201 205.244 -77.0704 -122 18.9817L-82.3079 260C-82.3079 260 -59.2609 163.426 71.3389 193.814Z" fill="#DAEDFE"/>
      </svg>
    );
  }
}
