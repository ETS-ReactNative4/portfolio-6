import React, { Component } from 'react';

import './style.scss';

export default class SubmitButton extends Component {
  constructor(props) {
    super(props);

    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown() {

    const { formValid, showErrors } = this.props;

    if (!formValid) {
      showErrors();
    } else {
      return;
    }
  }

  render() {

    const { formValid, buttonText } = this.props;
    const removeDummyDiv = formValid ? 'removeDummyDiv' : null;

    return (
      <div className="submit-btn-container">
        <div className={`dummy-eventhandler-div ${removeDummyDiv}`} onMouseDown={this.handleMouseDown} />
        <button
          type="submit"
          className="submit-btn"
          disabled={!formValid}
        >
          {`${buttonText}`}
        </button>
      </div>
    );
  }
}
