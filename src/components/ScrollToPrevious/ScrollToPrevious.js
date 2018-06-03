import React, { Component } from 'react';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class ScrollToPrevious extends Component {

  scrollToPrevious() {
    const { pageSelector } = this.props;
    const prevPage = document.querySelector(pageSelector);
    scrollToElement(prevPage);
  }

  render() {
    return (
      <div
        className="scroll-to-previous"
        onClick={(e) => this.scrollToPrevious()}
      >
        <div className="arrow bounce">
          <div className="scroll-text">Click Me</div>
          <button className="fas fa-chevron-up fa-2x"/>
        </div>
      </div>
    );
  }
}

export default ScrollToPrevious;
