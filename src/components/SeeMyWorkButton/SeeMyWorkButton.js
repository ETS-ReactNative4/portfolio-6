import React, { Component } from 'react';
import { toElement as scrollToElement } from '@utils/scroll';
import Icon from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/fa/';

import './style.scss';

export default class LearnMoreButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const myWork = document.querySelector('.my-work');
    scrollToElement(myWork);
  }

  render() {
    return (
      <button type="button" className="see-my-work-button" onClick={this.handleClick}>
        <span className="see-my-work-button__text">
          See my work
        </span>
        <Icon icon={chevronDown} size={28} />
      </button>
    );
  }
}
