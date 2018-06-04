import React, { Component } from 'react';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class ScrollToPrev extends Component {

  scrollToPrev() {
    const { pageSelector } = this.props;
    const prevPage = document.querySelector(pageSelector);
    scrollToElement(prevPage);
  }

  render() {
    return (
      <div
        className="scroll-to-prev"
        onClick={(e) => this.scrollToPrev()}
      >
        <div className="arrow bounce">
          <div className="scroll-text">Click me</div>
          <button className="fas fa-chevron-up fa-2x"/>
        </div>
      </div>
    );
  }
}

export default ScrollToPrev;
